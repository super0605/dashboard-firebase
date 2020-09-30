import jwtDecode from "jwt-decode";
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  storeAccessAndRefreshToken
} from "./apis/utils/Storage";
import { default as authApi } from "./apis/auth";
import store from "../store/configureStore";
import { RENEW_ACCESS_TOKEN_SUCCESS } from "../store/actions/login";

export default class Authentication {
  constructor() {
    this.scheduleRenewal();
  }

  isAuthTokenValid = access_token => {
    const decoded = jwtDecode(access_token);

    if (decoded.exp < Date.now() / 1000) {
      console.warn("access token expired");
      this.logout();
      return false;
    }

    return true;
  };

  logout = () => {
    removeAccessToken();
    removeRefreshToken();
    console.log("*** cleared token ***");
    clearTimeout(this.scheduleRenewal);
    window.location.href = "/login";
  };

  renewToken = async () => {
    try {
      const refreshToken = getRefreshToken();
      const response = await authApi.refreshApi({ refresh: refreshToken });
      if (response && response.access) {
        storeAccessAndRefreshToken(response.access, refreshToken, jwtDecode(refreshToken).user_id);
        // update redux auth token once renew access token success
        if (store) {
          const { dispatch } = store;
          dispatch({
            type: RENEW_ACCESS_TOKEN_SUCCESS,
            payload: {
              refresh_token: refreshToken,
              access_token: response.access
            }
          });
        }
        console.log("Refreshed new accessToken from refreshToken");
        this.scheduleRenewal();
      } else {
        console.log("Error refresh new accessToken");
        this.logout();
      }
    } catch (err) {
      console.log("Error refresh new accessToken");
      console.log(err);
      this.logout();
    }
  };

  scheduleRenewal = () => {
    const access_token = getAccessToken();

    if (access_token) {
      const decoded = jwtDecode(access_token);
      const delay = decoded.exp - Date.now() / 1000;
      if (delay > 0) {
        this.tokenRenewalTimeout = setTimeout(() => {
          this.renewToken();
        }, delay * 1000);
      }
    }
  };
}
