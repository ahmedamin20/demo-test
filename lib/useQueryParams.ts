// hooks/useSetQueryParams.ts
'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ReadonlyURLSearchParams } from 'next/navigation';

type QueryParamValue = string | number | boolean | null | undefined;
type QueryParams = Record<string, QueryParamValue>;

const useSetQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
    const pathName = usePathname()

  const setQueryParams = (params: QueryParams) => {
    // Create a new URLSearchParams instance from current params
    const query = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        query.delete(key); // Remove the parameter
      } else if (typeof value === 'boolean' ) {
        query.set(key, String(value))
      } else {
        query.set(key, String(value));
      }

    });

     // Construct new URL
     const newURL = `${pathName}?${query.toString()}`;


     // Update the router without reloading the page
    router.push(newURL);
  };

  return setQueryParams;
};

export default useSetQueryParams;