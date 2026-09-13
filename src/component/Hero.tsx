import bannerStack from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <div className="flex justify-between container mx-auto items-center mt-13 mb-7 mr-20">
      <div className="space-y-8">
        <h1 className="text-[55px] font-extrabold leading-none text-[#0F172A]">Build Your Ideal <br /> <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>
        <p className="text-[#475569] font-jakarta leading-7 text-[18px]">
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>
        <div className="flex gap-4 pt-5">
        <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white px-6 py-2 rounded-lg text-[14px]">Explore Technologies</button>
        <button className="text-[#374151] text-[14px] border border-[#E5E7EB] px-8 py-2 rounded-lg">Learn More</button>
        </div>
      </div>
      <div>
        <img src={bannerStack} alt="" />
      </div>
    </div>
  );
}
