import { all } from "redux-saga/effects";

import globalSaga from "./global";
import loginSaga from "./login";

export default function*() {
  yield all([globalSaga(), loginSaga()]);
}
