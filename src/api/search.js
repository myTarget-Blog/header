import axios from "axios";

export const search = async query => {
  return await axios.get(
    `https://search.tildacdn.com/search/?p=398780&q=${query}&page=1`
  );
};
