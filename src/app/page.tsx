import Hero from "./components/Hero/Hero";
import Advantage from "./components/Advantage/Advantage";
import Services from "./components/Services/Services";
import Opportunity from "./components/opportunity/opportunity"
import Important from "./components/Important/Important"

export default function Home() {
  return (
    <>
      <Hero />
      <Advantage />
      <Services />
      <Opportunity/>
      <Important/>
    </>
  );
}
