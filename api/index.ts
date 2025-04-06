import { BOOKS_API_URL } from "@/utilities/constants";

export const fetchBooksByName = async (name: string, page: number, limit: number) => {
  const searchQuery = name.replace(/\s+/g, "+"); // Replace spaces with '+' for the query
  const response = await fetch(
    BOOKS_API_URL + `/search.json?q=${searchQuery}&page=${page}&limit=${limit}`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  return data;
};

export default fetchBooksByName;
