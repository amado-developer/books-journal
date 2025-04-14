"use client";

import { useEffect, useState } from "react";
import { fetchBookReviews, fetchBooksByName, fetchBookWorkData } from "@/api/index";
import HomeSkeleton from "../skeleton/home";
import SearchResult from "./search-result";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<any>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchBooks = async () => {
    setIsSearching(true);
    setIsLoading(true);
    await fetchBooksByName(search, currentPage, 10)
      .then(async (res) => {
        console.log(res);

        const processDocsWithCover = async (docs: any[]) => {
          return Promise.all(
            docs.map(async (doc: any) => {
              if (doc.cover_i) {
                return {
                  ...doc,
                  cover_url: `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`,
                  work_data: await fetchBookWorkData(doc.key),
                  reviews: await fetchBookReviews(doc.key),
                };
              }
       
              return doc;
            })
          );
        };

        const docsWithCover = await processDocsWithCover(res?.docs || []);
        console.log("docsWithCover", docsWithCover);
        setSearchData({ ...res, docs: docsWithCover });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      await fetchBooks();
    }
  };

  useEffect(() => {
    if (search.length > 0) {
      void fetchBooks();
    }
  }, [currentPage]);

  return (
    <div className="@container">
      <div className="flex gap-8 items-center justify-between w-full  mt-24 flex-wrap @md:flex-nowrap @container">
        <div className="relative @md:w-2/3  w-full">
          <input
            type="text"
            placeholder="Press enter to search"
            className="border border-white input-xl p-4 pl-14 w-full"
            onKeyDown={handleKeyDown}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            className="absolute left-4 top-1/5 mt-3 ml-3 h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        </div>

        <div className="flex gap-1  @md:w-1/3 w-full flex-col pb-2">
          <p>Search by</p>
          <select
            defaultValue="Name"
            name="search"
            className="select-lg select select-neutral bg-black"
          >
            <option>Name</option>
            <option>Author</option>
            <option>Category</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <HomeSkeleton />
      ) : (
        (() => {
          const content =
            searchData?.docs && searchData?.docs.length > 0 ? (
              <SearchResult
                searchResults={searchData}
                searchQuery={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            ) : (
              isSearching && (
                <div className="w-full mt-16 flex justify-center">
                  <h1 className="text-white text-4xl">No results found</h1>
                </div>
              )
            );
          return content;
        })()
      )}
    </div>
  );
};

export default Search;
