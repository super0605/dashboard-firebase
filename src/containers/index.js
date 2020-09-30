import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

import AppLayout from "./Layout";
import CSVUplaod from "./CSVUpload";
import FinancialData from "./FinancialData";
import NotFoundPage from "./NotFoundPage";
import ElementsPage from "./ElementsPage";

import themes from "../constants/theme";
import routes from "../constants/routes";

/**
 * will render component with header and side bar
 */
const WithLayout = (Component, type) => (props) => (
  <AppLayout type={type}>
    <Component {...props} />
  </AppLayout>
);

/**
 * if the user is not logged
 *    - can not navigate to dashboard or other pages
 *    - will navigate login page or signup page
 *
 * if the use is logged and stored token to local
 *    - will naviate to dashboard or other pages
 *    - can not naviate to login and signup
 */
const AuthenticatedRoute = ({ token, path, render, component, devMode = true, ...rest }) => {
  if (path === routes.HOME) {
    return <Redirect to={routes.DBMANAGEMENT_CSV_UPLOAD} />;
  }
  return <Route {...rest} path={path} component={component} />;
};

/**
 * Switch managing routing throughout application.
 */
const AppRoutes = () => {
  const { access_token } = useSelector(({ login: { authToken } }) => authToken);

  return (
    <ThemeProvider theme={themes.default}>
      <Switch>
        <AuthenticatedRoute
          exact
          path={routes.HOME}
          component={WithLayout(FinancialData)}
          token={access_token}
        />
        <AuthenticatedRoute
          exact
          path={routes.DBMANAGEMENT_CSV_UPLOAD}
          component={WithLayout(CSVUplaod)}
          token={access_token}
        />
        <AuthenticatedRoute
          exact
          path={routes.FINANCIAL_DATA}
          component={WithLayout(FinancialData)}
          token={access_token}
        />
        <AuthenticatedRoute
          exact
          path={routes.ELEMENTS_PAGE}
          component={WithLayout(ElementsPage)}
          token={access_token}
        />
        <AuthenticatedRoute
          exact
          path={routes.NotFoundPage}
          component={WithLayout(NotFoundPage)}
          token={access_token}
        />
      </Switch>
    </ThemeProvider>
  );
};

export default AppRoutes;
