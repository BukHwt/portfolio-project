import type { Project } from "../types/Project";

export const fetchGitHubProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch("https://api.github.com/users/bukhwt/repos");
    const data = await response.json();

    return data
      .filter((repo: Project) => !repo.fork)
      .map((repo: Project) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "No description available.",
        url: repo.html_url,
        fork: repo.fork,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
      }));
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
};
