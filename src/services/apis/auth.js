import API from "./utils/API";

const api = new API();
const prefix = "/auth/v1";

const login = data =>
  api
    .callApi({
      url: `${prefix}/login/`,
      method: "post",
      data,
    })
    .then(result => result.data);

const refreshApi = data =>
  api
    .callApi({
      url: `${prefix}/token/refresh/`,
      method: "post",
      data,
    })
    .then(result => result.data);

const resetPasswordEmail = data =>
  api
    .callApi({
      url: "/auth/reset-password-email/",
      method: "post",
      data,
    })
    .then(result => result.data);

const passwordReset = ({ uidb64, token }) =>
  api
    .callApi({
      url: `${prefix}/password-reset/${uidb64}/${token}/`,
      method: "get",
    })
    .then(result => result.data);

const passwordResetComplete = data =>
  api
    .callApi({
      url: "/auth/password-reset-complete",
      method: "patch",
      data,
    })
    .then(result => result.data);

const getUserInfo = () =>
  api
    .callApi({
      url: `${prefix}/userinfo/`,
      method: "get",
    })
    .then(result => result.data);

export default {
  login,
  refreshApi,
  resetPasswordEmail,
  passwordReset,
  passwordResetComplete,
  getUserInfo,
};
