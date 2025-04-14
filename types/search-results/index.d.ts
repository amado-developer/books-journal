interface SearchResultDoc {
    author_name: string;
    cover_i: number;
    edition_count: number;
    first_publish_year: number;
    key: string;
    title: string;
    cover_url: string;
    work_data: {
        subjects: string[];
        description: {
            value: string;
        }
    }
    reviews: {
        summary: {
            average: number;
        }
    };
}


interface SearchResult {
    numFound: number;
    docs: SearchResultDoc[];
}

interface SearchResults {}

interface SearchResultsProps {
    searchResults: SearchResult;
    searchQuery: string;
    setCurrentPage: (page: number) => void;
    currentPage?: number;
}