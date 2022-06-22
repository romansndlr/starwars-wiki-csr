import { FilmIcon } from "@heroicons/react/solid";
import axios from "axios";
import clsx from "clsx";
import dayjs from "dayjs";
import { last, compact } from "lodash";
import { useQuery } from "react-query";
import { NavLink, Outlet } from "react-router-dom";
import sleep from "../utils/sleep";

async function getPlanets() {
  const { data } = await axios.get("/planets");

  return data;
}

export default function Planets() {
  const { data } = useQuery("planets", getPlanets);

  return (
    <>
      <div className="flex flex-col h-screen max-w-3xl min-h-0 bg-white border-r lg:min-w-0 lg:flex-1">
        <div className="pt-4 pb-4 pl-4 pr-6 border-t border-b border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
          <div className="flex items-center">
            <h1 className="flex-1 text-lg font-medium text-gray-900">
              Planets
            </h1>
          </div>
        </div>
        <ul
          role="list"
          className="relative z-0 flex-1 min-h-0 overflow-y-auto border-b border-gray-200 divide-y divide-gray-200"
        >
          {data.results.map((planet) => {
            const id = last(compact(planet.url.split("/"))) as string;

            return (
              <li key={planet.name}>
                <NavLink
                  className={({ isActive }) =>
                    clsx(
                      "relative flex justify-between py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6",
                      isActive && "bg-gray-50"
                    )
                  }
                  to={id}
                >
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {planet.name}
                    </h4>
                    <div className="flex mt-4">
                      <div className="flex items-center">
                        <FilmIcon className="h-5 text-gray-400" />
                        <span className="ml-2 text-sm text-gray-800">
                          Appeared in {planet.films.length} films
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400">
                      Added {dayjs(planet.created).fromNow()}
                    </p>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </>
  );
}