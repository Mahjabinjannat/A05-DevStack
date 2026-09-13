import logoText from "../assets/logo-text.png";

export default function Footer() {
  return (
    <>
      <div className="container mx-auto flex justify-between my-16 pr-14">
        <div className="space-y-5">
          <img src={logoText} alt="" />
          <p className="text-[12px] text-[#64748B]">
            Curated tools, technologies, and resources for developers building{" "}
            <br />
            modern software.
          </p>
          <ul className="flex gap-7">
            <li className="text-[#475569] text-[12px]">GitHub</li>
            <li className="text-[#475569] text-[12px]">Twitter</li>
            <li className="text-[#475569] text-[12px]">Linkedin</li>
          </ul>
        </div>

        <ul className="space-y-2">
          <li className="font-bold text-[#0F172A] text-[12px]">PRODUCTS</li>
          <li className="text-[12px] text-[#64748B]">Home</li>
          <li className="text-[12px] text-[#64748B]">Technologies</li>
          <li className="text-[12px] text-[#64748B]">Projects</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-bold text-[#0F172A] text-[12px]">COMPANY</li>
          <li className="text-[12px] text-[#64748B]">About</li>
          <li className="text-[12px] text-[#64748B]">Contact</li>
          <li className="text-[12px] text-[#64748B]">Careers</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-bold text-[#0F172A] text-[12px]">LEGAL</li>
          <li className="text-[12px] text-[#64748B]">privacy Policy</li>
          <li className="text-[12px] text-[#64748B]">Terms of Service</li>
        </ul>
      </div>
      <div className="container mx-auto mb-8">
        <hr className="my-10 border-0 border-t border-gray-200" />
        <div className="flex justify-between">
          <p className="text-[#94A3B8] text-[12px]">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <ul className="flex justify-between gap-6">
            <li className="text-[#94A3B8] text-[12px]">Privacy</li>
            <li className="text-[#94A3B8] text-[12px]">Terms</li>
          </ul>
        </div>
      </div>
    </>
  );
}
