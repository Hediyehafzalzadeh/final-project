import FirstBanner from "./../components/firstBanner";
import BestSellers from "./../components/bestSellers";
import vid from "../images/Promaster35_Omni_15s_Full_Frame_16x9_Video.mp4";
import Footer from "../components/footer";

export default function MainPage() {
  return (
    <div>
      <video autoPlay loop muted className="pb-7" src={vid}></video>
      <div className="text-center justify-center text-[#483c3b]">
        <p className=" md:text-2xl text-lg font-mono">PURPOSEFUL POWER</p>
        <h1 className="md:text-6xl text-3xl pt-4 ">Innovation Spotlight</h1>
        <p className=" text-xl font-mono py-6 ">
          At the forefront of innovation, our high-performance timepieces
          feature proprietary
          <br /> materials and cutting-edge technology setting new standards,
          including groundbreaking <br /> advancements in Eco-Drive
          light-powered design and precision timekeeping.
        </p>
      </div>
      <FirstBanner />
      <BestSellers />
      <div className="mt-20 text-center justify-center text-[#483c3b]">
        <p className=" text-2xl font-mono">CITIZEN PARTNERSHIPS</p>
        <h1 className="md:text-6xl text-3xl pt-4 ">
          Building a purposeful, powerful, and sustainable future.
        </h1>
        <p className=" text-xl font-mono pt-4 ">
          From the birth of its Eco-Drive light technology to today, Citizen
          looks for ways to support and celebrate the planet.
        </p>
      </div>
      <Footer />
    </div>
  );
}
