import jwtDecode from "jwt-decode";
import { takeEvery, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import { loginSuccessAction, loginFailureAction, LOGIN_REQUEST } from "../actions/login";
import { authApi, TokenStorage } from "../../services";
import Authentication from "../../services/authentication";
import pNotification from "../../components/PNotification";

const Auth = new Authentication();

function* loginSaga({ payload }) {
  try {
    const response = yield call(authApi.login, payload);
    if (response) {
      yield put(loginSuccessAction(response.data));
      TokenStorage.storeAccessAndRefreshToken(
        response.data.access_token,
        response.data.refresh_token,
        jwtDecode(response.data.refresh_token).user_id,
      );
      yield put(push("/dashboard/revenue"));
      Auth.scheduleRenewal();
    }
  } catch (e) {
    const notifyMessage = {
      type: "error",
      message: "Login Failed",
      description: e.data.detail,
    };
    pNotification(notifyMessage);
    yield put(loginFailureAction(e));
  }
}

export default function*() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}
