import logoText from "../assets/logo-text.png";

export default function Navbar() {
  return (
    <div className="border-b-[0.3px] border-b-gray-200 sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between p-7 pb-5 items-center container mx-auto ">
        <div>
          <img src={logoText} alt="" />
        </div>
        <ul className="flex justify-between gap-5">
          <li className="text-[#DB2777] text-[14px] font-medium">Home</li>
          <li className="text-[#475569] text-[14px]">Technologies</li>
          <li className="text-[#475569] text-[14px]">Projects</li>
          <li className="text-[#475569] text-[14px]">About</li>
          <li className="text-[#475569] text-[14px]">Contact</li>
        </ul>
        <div className="flex gap-5 items-center">
          <button className="text-[#475569] text-[14px]">Sign In</button>
          <button className="text-white bg-[#DB2777] py-2 px-4 rounded-[20px] cursor-pointer text-[14px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
