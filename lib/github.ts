import { GithubRepo } from "./types";

const tempData = {
  login: "vinugawade",
  id: 65772870,
  node_id: "MDQ6VXNlcjY1NzcyODcw",
  avatar_url: "https://avatars.githubusercontent.com/u/65772870?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/vinugawade",
  html_url: "https://github.com/vinugawade",
  followers_url: "https://api.github.com/users/vinugawade/followers",
  following_url: "https://api.github.com/users/vinugawade/following{/other_user}",
  gists_url: "https://api.github.com/users/vinugawade/gists{/gist_id}",
  starred_url: "https://api.github.com/users/vinugawade/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/vinugawade/subscriptions",
  organizations_url: "https://api.github.com/users/vinugawade/orgs",
  repos_url: "https://api.github.com/users/vinugawade/repos",
  events_url: "https://api.github.com/users/vinugawade/events{/privacy}",
  received_events_url: "https://api.github.com/users/vinugawade/received_events",
  type: "User",
  site_admin: false,
  name: "Vinay Gawade",
  company: null,
  blog: "vinux.in",
  location: "India",
  email: null,
  hireable: null,
  bio: "a typical programmer😉 who make everything easy😎.",
  twitter_username: "VinuGawade",
  public_repos: 34,
  public_gists: 0,
  followers: 13,
  following: 31,
  created_at: "2020-05-22T13:43:27Z",
  updated_at: "2023-09-16T20:17:03Z"
};

// its for /api/stats/github
export async function fetchGithub() {
  const fake = false;
  if (fake) return tempData;
  return fetch("https://api.github.com/users/vinugawade").then((res) => res.json());
}

// its for getting temporary old data
export function getOldStats() {
  return tempData;
}

/* Retrieves the number of stars and forks for the user's repositories on GitHub. */
export async function getGithubStarsAndForks() {
  // Fetch user's repositories from the GitHub API
  const res = await fetch(
    "https://api.github.com/users/vinugawade/repos?per_page=100"
  );
  const userRepos = await res.json();

  /* Default Static Data: If use exceeded the rate limit of api */
  if (
    (userRepos.documentation_url =
      "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting")
  ) {
    return {
      githubStars: 61,
      forks: 12,
    };
  }
  // filter those repos that are forked
  const mineRepos: GithubRepo[] = userRepos?.filter(
    (repo: GithubRepo) => !repo.fork
  );

  // Calculate the total number of stars for the user's repositories
  const githubStars = mineRepos.reduce(
    (accumulator: number, repository: GithubRepo) => {
      return accumulator + repository["stargazers_count"];
    },
    0
  );

  // Calculate the total number of forks for the user's repositories
  const forks = mineRepos.reduce(
    (accumulator: number, repository: GithubRepo) => {
      return accumulator + repository["forks_count"];
    },
    0
  );

  return { githubStars, forks };
}
