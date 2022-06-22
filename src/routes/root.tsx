import React from "react";
import { Outlet } from "react-router-dom";
import CategoriesList from "../components/categories-list";
import Spinner from "../components/spinner";
import starWarsLogo from "../star-wars-logo.png";

export default function Root() {
  const [initialRender, setInitialRender] = React.useState(true);

  return (
    <React.Suspense
      fallback={<Spinner containerSizeClass="w-screen h-screen" />}
    >
      <NewComponent afterRender={() => setInitialRender(false)} />
      <div className="relative flex">
        <div className="flex flex-col flex-1 h-screen max-w-xs min-h-0 bg-gray-800">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center justify-center flex-shrink-0 px-4">
              <img className="w-auto h-14" src={starWarsLogo} alt="Workflow" />
            </div>
            <nav
              className="flex-1 px-2 mt-8 space-y-2 bg-gray-800"
              aria-label="Sidebar"
            >
              <CategoriesList />
            </nav>
          </div>
        </div>
        <div className="flex flex-1 h-screen">
          {initialRender ? (
            <Outlet />
          ) : (
            <React.Suspense fallback={<Spinner />}>
              <Outlet />
            </React.Suspense>
          )}
        </div>
      </div>
    </React.Suspense>
  );
}

function NewComponent({ afterRender }) {
  React.useEffect(() => {
    afterRender();
  }, [afterRender]);

  return null;
}
