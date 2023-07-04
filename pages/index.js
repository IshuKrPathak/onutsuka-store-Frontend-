import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper />
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          MAKING A MASTERPIECE
        </div>
        <div className="text-md md:text-xl">
          Produced on the Tottori Prefecture coast in Japan, this premium line
          shoe then ships to Osaka where the tireless, hand customisation
          process begins. It’s here that craftsmen’s hands spin the timeless
          beauty, soon to be appreciated the whole world over. Born in 1949, the
          history of Onitsuka Tiger is the history of athletic shoes - and the
          story of Japan’s sporting culture. Open the very latest chapter, with
          the Nippon Made.
        </div>
      </div>
    </main>
  );
}
