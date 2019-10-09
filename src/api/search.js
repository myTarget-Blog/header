import axios from "axios";

export const search = async ({ value, page }) => {
  return await axios.get(
    `https://search.tildacdn.com/search/?p=398780&q=${value}&page=${page}`
  );
};
