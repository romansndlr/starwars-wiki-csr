import { FilmIcon } from "@heroicons/react/solid";
import axios from "axios";
import clsx from "clsx";
import dayjs from "dayjs";
import { last, compact } from "lodash";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import sleep from "../utils/sleep";

async function getPeople() {
  const { data } = await axios.get("/people");

  await sleep(3000);

  return data;
}

export default function PeopleList() {
  const { data } = useQuery("people", getPeople);

  return (
    <ul
      role="list"
      className="relative z-0 flex-1 min-h-0 overflow-y-auto border-b border-gray-200 divide-y divide-gray-200"
    >
      {data.results.map((person) => {
        const id = last(compact(person.url.split("/"))) as string;

        return (
          <li key={person.name}>
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
                  {person.name}
                </h4>
                <div className="flex mt-4">
                  <div className="flex items-center">
                    <FilmIcon className="h-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-800">
                      Appeared in {person.films.length} films
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-400">
                  Added {dayjs(person.created).fromNow()}
                </p>
              </div>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
