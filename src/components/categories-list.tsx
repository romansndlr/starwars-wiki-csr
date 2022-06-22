import { UsersIcon } from "@heroicons/react/solid";
import axios from "axios";
import clsx from "clsx";
import { capitalize } from "lodash";
import { useQuery } from "react-query";
import { useLocation, NavLink } from "react-router-dom";
import sleep from "../utils/sleep";

async function getRoot() {
  const { data } = await axios.get("/");

  await sleep(5000);

  return data;
}

export default function CategoriesList() {
  const { data } = useQuery("root", getRoot);
  const location = useLocation();

  const keys = Object.keys(data);

  return (
    <>
      <NavLink
        key={keys[0]}
        to={keys[0]}
        className={({ isActive }) =>
          clsx(
            isActive
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          )
        }
      >
        <UsersIcon
          className={clsx(
            location === keys[0]
              ? "text-gray-300"
              : "text-gray-400 group-hover:text-gray-300",
            "mr-3 flex-shrink-0 h-6 w-6"
          )}
          aria-hidden="true"
        />
        <span className="flex-1">{capitalize(keys[0])}</span>
      </NavLink>
    </>
  );
}