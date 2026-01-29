
import BusinessPlan from "@/Components/LandingComponent/BusinessPlan";
import Landing from "@/Components/LandingComponent/Landing";
import BusinessSolution from "@/Components/LandingComponent/BusinessSolution";
import ChooseMe from "@/Components/LandingComponent/ChooseMe";
import CheckProject from "@/Components/LandingComponent/CheckProject";
import HowWork from "@/Components/LandingComponent/HowWork";
import OurTeam from "@/Components/LandingComponent/OurTeam";
import LatestPosts from "@/Components/LandingComponent/LatestPosts";
import SubScribe from "@/Components/LandingComponent/SubScribe";


export default function LandingPage() {
  return (
    <div>
      <Landing />
      <BusinessPlan />
      <BusinessSolution />
      <ChooseMe />
      <CheckProject />
      <HowWork />
      <OurTeam />
      <LatestPosts />
      <SubScribe />
    </div>
  );
}
