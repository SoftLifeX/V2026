import HomePage from "@/features/home/page";
import { getGitHubContributions } from "@/features/home/actions";

export default async function MainPage() {
  // Fetch GitHub contributions data on the server
  const githubData = await getGitHubContributions(
    process.env.GITHUB_USERNAME || ''
  );

  return (
    <div className="w-full h-full mt-4">
      <HomePage githubContributions={githubData} />
    </div>
  );
}