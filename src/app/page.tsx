import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="flex flex-col mx-auto items-center max-w-7xl my-40">
        <Hero/>
        <Showcase/>
      </div>
      <Footer/>
    </main>
  );
}
