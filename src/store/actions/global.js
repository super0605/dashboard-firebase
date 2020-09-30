import { createAction } from "@reduxjs/toolkit";

export const CHANGE_THEME = "[global] change theme";

export const changeThemeAction = createAction(CHANGE_THEME);
