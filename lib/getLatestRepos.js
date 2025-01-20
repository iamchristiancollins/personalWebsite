import axios from "axios";

const getLatestRepos = async (data, token) => {
  console.log("data", data);
  try {
    const username = data.githubUsername;
    const authToken = token || process.env.GITHUB_AUTH_TOKEN;

    console.log("TOKEN", authToken);

    const apiUrl = `https://api.github.com/search/repositories?q=user:${username}+is:public+sort:author-date-asc`;

    const headers = authToken ? { Authorization: `token ${authToken}` } : {};

    const res = await axios.get(apiUrl, { headers });

    let repos = res.data.items;

    let latestSixRepos = repos.splice(0, 6);
    console.log("LATEST REPOS:", latestSixRepos)
    latestSixRepos.reverse();
    console.log("LATEST 6 repos", latestSixRepos);
    return latestSixRepos;
  } catch (err) {
    console.error("Error fetching repos:", err.message);
    return null;
  }
};

export default getLatestRepos;
