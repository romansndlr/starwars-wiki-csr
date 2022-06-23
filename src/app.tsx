import { Route, DataBrowserRouter } from "react-router-dom";
import * as Root from "./routes/root";
import * as People from "./routes/people";
import * as Planets from "./routes/planets";
import * as Person from "./routes/person";
import * as Planet from "./routes/planet";

export default function App() {
  return (
    <DataBrowserRouter>
      <Route path="/" element={<Root.default />} loader={Root.loader}>
        <Route
          path="people"
          element={<People.default />}
          loader={People.loader}
        >
          <Route
            path=":personId"
            element={<Person.default />}
            loader={Person.loader}
          />
        </Route>
        <Route
          path="planets"
          element={<Planets.default />}
          loader={Planets.loader}
        >
          <Route
            path=":planetId"
            element={<Planet.default />}
            loader={Planet.loader}
          />
        </Route>
      </Route>
    </DataBrowserRouter>
  );
}
