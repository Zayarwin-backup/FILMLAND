import BestSeries from "./components/bestseries/BestSeries";
import Ctg from "./components/ctg/Ctg";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/service/Service";
import TopRate from "./components/toprate/TopRate";
import Upcoming from "./components/upcoming/Upcoming";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Upcoming />
      <Service />
      <TopRate />
      <BestSeries />
      <Ctg />
      <Footer />
    </>
  );
}

export default App;
