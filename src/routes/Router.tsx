import ErrorPage from "pages/Error";
import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { ROUTES } from "./route-names";

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('~/pages/About'));
const Sponsors = lazy(() => import('pages/Sponsors'));
const Prizes = lazy(() => import('pages/Prizes'));

const { Public } = ROUTES;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<ErrorPage />} path="*" />
      <Route element={<Home />} path={Public.Home} />
      <Route element={<About />} path={Public.About} />
      <Route element={<Sponsors />} path={Public.Sponsors} />
      <Route element={<Prizes />} path={Public.Prizes} />
    </>,
  ),
);
