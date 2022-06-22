import React from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/spinner";

const People = React.lazy(() => import("./routes/people"));
const Planets = React.lazy(() => import("./routes/planets"));
const Person = React.lazy(() => import("./routes/person"));
const Planet = React.lazy(() => import("./routes/planet"));
const Root = React.lazy(() => import("./routes/root"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="people" element={<People />}>
          <Route
            path=":personId"
            element={
              <React.Suspense fallback={<Spinner />}>
                <Person />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="planets" element={<Planets />}>
          <Route
            path=":planetId"
            element={
              <React.Suspense fallback={<Spinner />}>
                <Planet />
              </React.Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}
