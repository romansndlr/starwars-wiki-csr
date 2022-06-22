import { Outlet } from "react-router-dom";
import PeopleList from "../components/people-list";

export default function People() {
  return (
    <>
      <div className="flex flex-col h-screen max-w-3xl min-h-0 bg-white border-r lg:min-w-0 lg:flex-1">
        <div className="pt-4 pb-4 pl-4 pr-6 border-t border-b border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
          <div className="flex items-center">
            <h1 className="flex-1 text-lg font-medium text-gray-900">People</h1>
          </div>
        </div>
        <PeopleList />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </>
  );
}
