import Image from "next/image";
import { useState } from "react";
const SearchResult = ({
  searchResults,
  searchQuery,
  setCurrentPage,
  currentPage,
}: SearchResultsProps) => {
  console.log(searchResults, "searchResults");

  function chunkResults(results: any, pageSize: number) {
    const chunkedResults = [];
    for (let i = 0; i < results.length; i += pageSize) {
      chunkedResults.push(results.slice(i, i + pageSize));
    }
    return chunkedResults;
  }
  console.log("searchResults", searchResults?.docs);

  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  return (
    <div className="w-full mt-16">
      <li className="list text-xs opacity-60 tracking-wide mb-8">
        <h3 className="font-semibold text-2xl">Results for "{searchQuery}"</h3>
      </li>
      <ul className="list rounded-box">
        {searchResults?.docs?.map((item, index) => (
          <li
            className={`list-row mb-4 bg-card p-[40px] min-h-[300px] ${selectedCard === index ? "border border-orange-400" : ""}`}
            key={index + "-book"}
            onClick={() => setSelectedCard(index)}
          >
            <div className="flex items-center justify-center h-[fit-content] w-[fit-content]">
              <div className="size-42 rounded-box">
                <Image
                  src={
                    item.cover_url ??
                    "https://openlibrary.org/images/icons/avatar_book-lg.png"
                  }
                  alt={item.title}
                  width={160}
                  height={140}
                  className="rounded-box min-h-[110px]  h-auto max-w-[140px]"
                />
              </div>
            </div>
            <div className="min-w-[400px]">
              <div className="">
                <p className="font-semibold text-xl">{item.title}</p>
              </div>
              <div className="mt-4">
                <p className="text-lg">
                  {item.author_name ? item.author_name[0] : "Unknown"}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-lg">
                  Published in: {item.first_publish_year}
                </p>
              </div>

              <div className="rating rating-lg rating-half -ml-3 mt-4">
                <input
                  type="radio"
                  name="rating-11"
                  className="rating-hidden"
                  aria-label="0 star"
                  aria-current={
                    Math.floor(item.reviews?.summary?.average || 0) === 0
                      ? "true"
                      : "false"
                  }
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-1  bg-orange-400"
                  aria-label="0.5 star"
                  aria-current={
                    Math.floor(item.reviews?.summary?.average || 0) === 0.5
                      ? "true"
                      : "false"
                  }
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-2  bg-orange-400"
                  aria-label="1 star"
                  aria-current={
                    Math.floor(item.reviews?.summary?.average || 0) === 1
                      ? "true"
                      : "false"
                  }
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-1  bg-orange-400"
                  aria-label="1.5 star"
                  aria-current={
                    Math.floor(item.reviews?.summary?.average || 0) === 1.5
                      ? "true"
                      : "false"
                  }
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-2  bg-orange-400"
                  aria-label="2 star"
                  aria-current={
                    Math.floor(item.reviews?.summary?.average || 0) === 2
                      ? "true"
                      : "false"
                  }
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-1  bg-orange-400"
                  aria-label="2.5 star"
                  aria-current={
                    Math.floor(item.reviews?.summary?.average || 0) === 2.5
                      ? "true"
                      : "false"
                  }
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-2  bg-orange-400"
                  aria-label="3 star"
                  aria-current={
                    Math.floor(item.reviews?.summary?.average || 0) === 3
                      ? "true"
                      : "false"
                  }
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-1  bg-orange-400"
                  aria-label="3.5 star"
                  aria-current={
                    Math.floor(item.reviews?.summary?.average || 0) === 3.5
                      ? "true"
                      : "false"
                  }
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-2  bg-orange-400"
                  aria-label="4 star"
                  aria-current={
                    Math.floor(item.reviews?.summary?.average || 0) === 4
                      ? "true"
                      : "false"
                  }
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-1  bg-orange-400"
                  aria-label="4.5 star"
                  aria-current={
                    Math.floor(item.reviews?.summary?.average || 0) === 4.5
                      ? "true"
                      : "false"
                  }
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-2  bg-orange-400"
                  aria-label="5 star"
                  aria-current={
                    Math.floor(item.reviews?.summary?.average || 0) === 5
                      ? "true"
                      : "false"
                  }
                />
              </div>
              {item?.work_data?.subjects &&
                item?.work_data?.subjects.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-6 -ml-3">
                    {item?.work_data?.subjects
                      .splice(3, 5)
                      .map((subject: string, index: number) => (
                        <div
                          className="badge  badge-neutral badge-xl"
                          key={subject + index}
                        >
                          <p className="truncate max-w-md">{subject}</p>
                        </div>
                      ))}
                  </div>
                )}
            </div>
            <div className="flex flex-col items-center w-full">
              {item.work_data?.description?.value && (
                <p className="text-lg">
                  "{item.work_data?.description?.value?.slice(0, 400)}..."
                </p>
              )}
              <div className="flex gap-4 mt-8 w-full justify-end items-center mr-8">
              
                <button className="btn btn-neutral btn-xl hover:btn-primary">Add to wishlist</button>
                <button className="btn btn-neutral btn-xl hover:btn-primary">Add to reading list</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="join w-full mt-8 flex justify-center items-center gap-4 mb-8">
        <div className="join grid grid-cols-2">
          <button
            className="join-item btn btn-outline mr-4 btn-lg"
            onClick={() => {
              if (currentPage && currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            Previous page
          </button>
          <button
            className="join-item btn btn-outline btn-lg"
            onClick={() => {
              console.log(
                "currentPage",
                currentPage,
                Math.ceil(searchResults?.numFound / 10)
              );
              if (
                currentPage &&
                currentPage < Math.ceil(searchResults?.numFound / 10)
              ) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            Next page
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
