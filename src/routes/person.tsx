import axios from "axios";
import { capitalize } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import sleep from "../utils/sleep";

export default function Person() {
  const params = useParams();

  const getPerson = React.useCallback(async () => {
    const { data } = await axios.get(`/people/${params.personId}`);

    return data;
  }, [params.personId]);

  const { data } = useQuery(["people", params.personId], getPerson);

  return (
    <>
      <div className="px-4 pt-6 pb-4 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">{data?.name}</h3>
      </div>
      <div className="px-6 py-2 border-t border-gray-200">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Birth Year</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data?.birth_year}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Height</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data?.height}cm
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Hair Color</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {capitalize(data?.hair_color)}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Eye Color</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {capitalize(data?.eye_color)}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Gender</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {capitalize(data?.gender)}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Mass</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {capitalize(data?.mass)}kg
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Skin Color</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {capitalize(data?.skin_color)}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
