import Hero from "./components/Hero.jsx";
import HomeCards from "./components/HomeCards.jsx";
import JobListing from "./components/JobListing.jsx";
import Navbar from "./components/Navbar.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Become A React Dev"
        subtitle="Find the React job that fits your skills and needs "
      />
      <HomeCards />
      <JobListing />
      <ViewAllJobs />
    </>
  );
};
export default App;
