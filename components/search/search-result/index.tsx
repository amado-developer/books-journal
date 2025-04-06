const SearchResult = ({ searchResults, searchQuery, setCurrentPage, currentPage }: SearchResultsProps) => {
  console.log(searchResults, "searchResults");

  function chunkResults(results: any, pageSize: number) {
    const chunkedResults = [];
    for (let i = 0; i < results.length; i += pageSize) {
      chunkedResults.push(results.slice(i, i + pageSize));
    }
    return chunkedResults;
  }

  return (
    <div className="w-full mt-16">
      <li className="list text-xs opacity-60 tracking-wide mb-8">
        <h3 className="font-semibold text-2xl">Results for "{searchQuery}" - {searchResults?.numFound}</h3>
      </li>
      <ul className="list rounded-box shadow-md">
        {searchResults?.docs?.map((item, index) => (
          <li className="list-row h-50 mb-4 bg-card" key={index + "-book"}>
            <div>
              <div className="size-42 rounded-box" />
            </div>
            <div className="">
              <div className=""></div>
              <div className=""></div>
            </div>
          </li>
        ))}
      </ul>
      <div className="join w-full mt-8 flex justify-center items-center gap-4 mb-8">
        <div className="join grid grid-cols-2">
          <button className="join-item btn btn-outline mr-4" onClick={() => {
            if (currentPage && currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}>Previous page</button>
          <button className="join-item btn btn-outline" onClick={() => {
            console.log("currentPage", currentPage, Math.ceil(searchResults?.numFound / 10));
            if (currentPage && currentPage < Math.ceil(searchResults?.numFound / 10)) {
              setCurrentPage(currentPage + 1);
            }
          }}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
