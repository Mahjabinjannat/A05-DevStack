import logoText from "../assets/logo-text.png";

export default function Footer() {
  return (
    <>
      {/* Footer Top Section */}
      <div className="container mx-auto my-12 px-5 sm:my-16 lg:pr-14">
        {/* Mobile & Tablet */}
        <div className="flex flex-col gap-5 lg:hidden items-center">
          <img src={logoText} alt="Dev Stack" className="w-fit" />

          <p className="text-[12px] text-[#64748B] text-center">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <ul className="flex gap-7">
            <li className="text-[12px] text-[#475569]">GitHub</li>
            <li className="text-[12px] text-[#475569]">Twitter</li>
            <li className="text-[12px] text-[#475569]">LinkedIn</li>
          </ul>
        </div>

        {/* Desktop Only */}
        <div className="hidden justify-between lg:flex">
          <div className="space-y-5">
            <img src={logoText} alt="Dev Stack" />

            <p className="text-[12px] text-[#64748B]">
              Curated tools, technologies, and resources for developers building{" "}
              <br />
              modern software.
            </p>

            <ul className="flex gap-7">
              <li className="text-[12px] text-[#475569]">GitHub</li>
              <li className="text-[12px] text-[#475569]">Twitter</li>
              <li className="text-[12px] text-[#475569]">LinkedIn</li>
            </ul>
          </div>

          <ul className="space-y-2">
            <li className="text-[12px] font-bold text-[#0F172A]">PRODUCTS</li>
            <li className="text-[12px] text-[#64748B]">Home</li>
            <li className="text-[12px] text-[#64748B]">Technologies</li>
            <li className="text-[12px] text-[#64748B]">Projects</li>
          </ul>

          <ul className="space-y-2">
            <li className="text-[12px] font-bold text-[#0F172A]">COMPANY</li>
            <li className="text-[12px] text-[#64748B]">About</li>
            <li className="text-[12px] text-[#64748B]">Contact</li>
            <li className="text-[12px] text-[#64748B]">Careers</li>
          </ul>

          <ul className="space-y-2">
            <li className="text-[12px] font-bold text-[#0F172A]">LEGAL</li>
            <li className="text-[12px] text-[#64748B]">Privacy Policy</li>
            <li className="text-[12px] text-[#64748B]">Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto mb-8 px-5">
        <hr className="my-10 border-0 border-t border-gray-200" />

        <div className="flex justify-between">
          <p className="text-[12px] text-[#94A3B8]">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <ul className="flex gap-6">
            <li className="text-[12px] text-[#94A3B8]">Privacy</li>
            <li className="text-[12px] text-[#94A3B8]">Terms</li>
          </ul>
        </div>
      </div>
    </>
  );
}
