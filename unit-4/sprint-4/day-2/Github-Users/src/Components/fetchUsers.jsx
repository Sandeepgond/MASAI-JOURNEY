import axios from "axios";
export function fetchUsers(query, page, limit) {
  if (!query) {
    return Promise.reject("query should be provided");
  }
  console.log(page)
  return axios.get("https://api.github.com/search/users", {
    params: {
      q: query,
      page: page.page,
      per_page: page.limit,

    }
  });
}
