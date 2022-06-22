import axios from "axios";
import { capitalize } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import sleep from "../utils/sleep";

export default function Planet() {
  const params = useParams();

  const getPlanet = React.useCallback(async () => {
    const { data } = await axios.get(`/planets/${params.planetId}`);

    return data;
  }, [params.planetId]);

  const { data } = useQuery(["people", params.planetId], getPlanet);

  return (
    <>
      <div className="px-4 pt-6 pb-4 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">{data?.name}</h3>
      </div>
      <div className="px-6 py-2 border-t border-gray-200">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Climate</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data?.climate}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Population</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data?.population}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Terrain</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {capitalize(data?.terrain)}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Gravity</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {capitalize(data?.gravity)}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Diameter</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {capitalize(data?.diameter)}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              Orbital Period
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {capitalize(data?.orbital_period)}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              Rotation Period
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {capitalize(data?.rotation_period)}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
