import Faq from "./home/Faq";
import ForHotels from "./home/ForHotels";
import Gallery from "./home/Gallery";
import GuestJourney from "./home/GuestJourney";
import Hero from "./home/Hero";
import Launch from "./home/Launch";
import Problem from "./home/Problem";
import Vetting from "./home/Vetting";
import WhyAndinoh from "./home/WhyAndinoh";

// The story, in order: the promise → the problem → why Andinoh → the proof → the hotels → how a stay
// works → the hotel side → sign up → questions.
export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <WhyAndinoh />
      <Vetting />
      <Gallery />
      <GuestJourney />
      <ForHotels />
      <Launch />
      <Faq />
    </>
  );
}
