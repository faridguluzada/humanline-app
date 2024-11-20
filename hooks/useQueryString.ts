"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function useQueryString() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function createQueryString(name: string, value: string | null) {
    const params = new URLSearchParams(searchParams);

    if (name !== "page") {
      // resetting the pagination
      params.set("page", "1");
    }

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return { createQueryString, searchParams };
}
