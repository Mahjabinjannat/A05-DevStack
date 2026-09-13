// import logoText from "../assets/logo-text.png";

// export default function Navbar() {
//   return (
//     <div className="border-b-[0.3px] border-b-gray-200 sticky top-0 z-50 bg-white shadow-sm">
//       <div className="flex justify-between p-7 pb-5 items-center container mx-auto ">
//         <div>
//           <img src={logoText} alt="" />
//         </div>
//         <ul className="flex justify-between gap-5">
//           <li className="text-[#DB2777] text-[14px] font-medium">Home</li>
//           <li className="text-[#475569] text-[14px]">Technologies</li>
//           <li className="text-[#475569] text-[14px]">Projects</li>
//           <li className="text-[#475569] text-[14px]">About</li>
//           <li className="text-[#475569] text-[14px]">Contact</li>
//         </ul>
//         <div className="flex gap-5 items-center">
//           <button className="text-[#475569] text-[14px]">Sign In</button>
//           <button className="text-white bg-[#DB2777] py-2 px-4 rounded-[20px] cursor-pointer text-[14px]">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import logoText from "../assets/logo-text.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 items-center px-4 py-4 lg:hidden">
          {/* Left - Hamburger */}
          <div className="flex justify-start">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer text-2xl text-[#475569]"
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          <div className="flex justify-center">
            <img src={logoText} alt="Dev Stack" className="w-[110px]" />
          </div>

          {/* Right - Auth Buttons */}
          <div className="flex items-center justify-end gap-2">
            <button className="text-[11px] font-medium text-[#475569]">
              Sign In
            </button>

            <button className="cursor-pointer rounded-[20px] bg-[#DB2777] px-3 py-1.5 text-[11px] font-medium text-white">
              Sign Up
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-gray-100 px-5 py-5 lg:hidden">
            <ul className="flex flex-col gap-4">
              <li className="text-[14px] font-medium text-[#DB2777]">Home</li>

              <li className="text-[14px] text-[#475569]">Technologies</li>

              <li className="text-[14px] text-[#475569]">Projects</li>

              <li className="text-[14px] text-[#475569]">About</li>

              <li className="text-[14px] text-[#475569]">Contact</li>
            </ul>
          </div>
        )}

        <div className="hidden items-center justify-between px-7 py-5 lg:flex">
          {/* Logo */}
          <div>
            <img src={logoText} alt="Dev Stack" />
          </div>

          <ul className="flex items-center gap-5">
            <li className="text-[14px] font-medium text-[#DB2777]">Home</li>

            <li className="text-[14px] text-[#475569]">Technologies</li>

            <li className="text-[14px] text-[#475569]">Projects</li>

            <li className="text-[14px] text-[#475569]">About</li>

            <li className="text-[14px] text-[#475569]">Contact</li>
          </ul>

          <div className="flex items-center gap-5">
            <button className="text-[14px] text-[#475569]">Sign In</button>

            <button className="cursor-pointer rounded-[20px] bg-[#DB2777] px-4 py-2 text-[14px] text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
