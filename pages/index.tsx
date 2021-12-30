import type { NextPage } from "next";
import { BodyBg } from "../components/BodyBg/BodyBg";
import { Header } from "../components/Header/Header";
import { MerchantSlider } from "../components/MerchantSlider/MerchantSlider";
import { Navbar } from "../components/Navbar/Navbar";
import { PaymentSummary } from "../components/PaymentSummary/PaymentSummary";

const Home: NextPage = () => {
  return (
    <div className="font-sans relative h-full w-full md:max-w-[360px] md:shadow-lg mx-auto pb-14">
      <div className="relative px-6 pt-10">
        <Header />
        <PaymentSummary />
        <MerchantSlider />
      </div>
      <Navbar />
      <BodyBg />
    </div>
  );
};

export default Home;
