import Hero from "../components/home/Hero";
import AboutUs from "../components/about/AboutUs";
import Workflow from "../components/Workflow";
import Productivity from "../components/Productivity";
import Platform from "../components/Platform";
import ContactUs from "../components/contact/ContactUs";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
  <>
  <div className="dark">
  <main className="min-h-screen bg-[#0a0a0c]">

    <Hero />
    <AboutUs/>
    <Workflow/>
    <Productivity/>
    <Platform/>
    <ContactUs/>
  </main>
    <ChatWidget/> 
  </div>
    </>
  );
}
