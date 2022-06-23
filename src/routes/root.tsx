import {
  UsersIcon,
  GlobeIcon,
  FilmIcon,
  FingerPrintIcon,
  CogIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";
import axios from "axios";
import clsx from "clsx";
import { capitalize } from "lodash";
import {
  json,
  LoaderFunction,
  NavLink,
  Outlet,
  useLoaderData,
} from "react-router-dom";
import starWarsLogo from "../star-wars-logo.png";

const icons: Record<
  string,
  (props: React.SVGProps<SVGSVGElement>) => JSX.Element
> = {
  people: UsersIcon,
  planets: GlobeIcon,
  films: FilmIcon,
  species: FingerPrintIcon,
  vehicles: CogIcon,
  starships: PaperAirplaneIcon,
};

export const loader: LoaderFunction = async () => {
  const { data } = await axios.get("/");

  return json({ categories: data });
};

export default function Root() {
  const { categories } = useLoaderData();

  return (
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
            {Object.keys(categories).map((category) => {
              const Icon = icons[category];

              return (
                <NavLink
                  key={category}
                  to={category}
                  className={({ isActive }) =>
                    clsx(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )
                  }
                >
                  <Icon
                    className={clsx(
                      location.pathname === category
                        ? "text-gray-300"
                        : "text-gray-400 group-hover:text-gray-300",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  <span className="flex-1">{capitalize(category)}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="flex flex-1 h-screen">
        <Outlet />
      </div>
    </div>
  );
}
