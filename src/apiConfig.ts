export const apiConfig = {
  baseUrl:
    process.env.REACT_APP_GITHUB_API_URL ||
    "https://api.gitthub.com/search/repositories?q=",
};
