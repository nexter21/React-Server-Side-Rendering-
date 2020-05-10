import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import AdminsListPage from "./pages/AdminsListPage";
import NotFoundPage from "./pages/NotFoundPage";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...AdminsListPage,
        path: "/admins",
      },
      {
        ...UsersListPage,
        path: "/users",
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
