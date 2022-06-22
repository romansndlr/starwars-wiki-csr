import { Route, Routes } from "react-router-dom";
import People from "./routes/people";
import Person from "./routes/person";
import Root from "./routes/root";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="people" element={<People />}>
          <Route path=":personId" element={<Person />} />
        </Route>
      </Route>
    </Routes>
  );
}
