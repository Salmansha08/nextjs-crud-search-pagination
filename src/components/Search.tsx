"use client";

import React from "react";
import { IoSearch } from "react-icons/io5";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2 px-10 rounded-sm outline-2 border border-slate-300"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <IoSearch className="absolute left-3 top-2.5 h-5 w-5 text-slate-500" />
    </div>
  );
};

export default Search;
