import Subheading from "@/components/ui/Subheading";
import MainParagraph from "@/components/ui/MainParagraph";
import GithubStats from "@/components/GitHubStats";

export default function GithubSection() {
  return (
    <div className="mt-23">
      <Subheading>GitHub Contribution Activity</Subheading>
      <MainParagraph>
        Learned and started using git and GitHub as my version control system
        for the projects that i am building and it is really a game changer for
        every developer like me. I’m consistently updating my repositories as
        you can see in my contribution calendar and
        <a
          href="https://github.com/shameCanales"
          className="underline underline-offset-4"
          target="_blank"
        >
          {" GitHub Account"}
        </a>
        .
      </MainParagraph>
      <GithubStats />
    </div>
  );
}
