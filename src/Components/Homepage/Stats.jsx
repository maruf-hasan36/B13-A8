import Marquee from "react-fast-marquee";
import { IoSparklesSharp } from "react-icons/io5";

const marqueeData = [
  { id: 1, title: "✨ New Arrival: 'Chokher Bali' — Grab Your Copy Today!" },
  { id: 2, title: "🔥 Hot Deal: 'Learning JavaScript' Now 25% OFF!" },
  { id: 3, title: "🎁 Mega Offer: Buy 2 Books & Get 1 Absolutely FREE!" },
  { id: 4, title: "🚀 Just Released: 'Modern Web Development' Available Now!" },
  { id: 5, title: "🌌 Trending: 'The Silent Universe' — A Must-Read Sci-Fi!" },
  { id: 6, title: "📚 Limited Time: 30% OFF on All Academic Books!" },
];

const Stats = () => {
  return (
    <div className="!mt-9 md:!mt-4 !py-5 bg-(--gold) ">
      <Marquee pauseOnHover={true}>
        {marqueeData.map((marquee) => (
          <div
            key={marquee.id}
            className="flex gap-3 items-center text-[#5e2006]"
          >
            <IoSparklesSharp />
            <p className="!mr-10 font-medium text-[#5e2006]">{marquee.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Stats;
