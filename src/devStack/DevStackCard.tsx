import { FaStar } from "react-icons/fa";
import type { DevStackTheme, IdevStacksType } from "../types/DevStacksType";

interface IdevStackType {
  devStack: IdevStacksType;
}

const badgeThemes: Record<DevStackTheme, string> = {
  react: "bg-cyan-50 text-cyan-600 border border-cyan-200",
  nextjs: "bg-gray-100 text-gray-800 border border-gray-200",
  nodejs: "bg-green-50 text-green-600 border border-green-200",
  express: "bg-gray-100 text-gray-700 border border-gray-200",
  mongodb: "bg-green-50 text-green-700 border border-green-200",
  postgresql: "bg-blue-50 text-[#336791] border border-blue-200",
  javascript: "bg-yellow-50 text-yellow-700 border border-yellow-200",
  typescript: "bg-blue-50 text-[#3178C6] border border-blue-200",
  tailwind: "bg-cyan-50 text-[#38BDF8] border border-cyan-200",
  sass: "bg-pink-50 text-pink-600 border border-pink-200",
  docker: "bg-sky-50 text-sky-600 border border-sky-200",
  kubernetes: "bg-blue-50 text-blue-600 border border-blue-200",
  git: "bg-orange-50 text-orange-600 border border-orange-200",
  github: "bg-gray-100 text-gray-800 border border-gray-200",
  vscode: "bg-blue-50 text-[#007ACC] border border-blue-200",
};

export default function DevStackCard({ devStack }: IdevStackType) {
  return (
    <div className="rounded-[16px] border border-gray-200 shadow-[0px_2px_10px_-3px_rgba(0,0,0,0.05)] px-6 py-4 space-y-2.5">
      <div className="relative">
        <img src={devStack.icon} alt="" className="h-[40px] w-[40px]" />
        <span
          className={`absolute top-2 right-2 rounded-full px-3 py-1 text-sm font-semibold ${badgeThemes[devStack.theme]}`}
        >
          {devStack.badge}
        </span>
      </div>
      <p className="text-[18px] font-bold text-[#0F172A] mt-6">
        {devStack.name}
      </p>
      <p className="text-[12px] text-[#64748B] min-h-[50px]">
        {devStack.description}
      </p>
      <hr className="my-4 border-[0.5px] border-gray-100" />
      <div className="flex justify-between items-center">
        <p className="text-[11px] text-[#475569] bg-gray-100 px-2 py-1 font-medium">
          {devStack.category}
        </p>
        <p className="text-[11px] text-[#64748B] font-medium">
          {devStack.difficulty}
        </p>
        <p className="flex items-center justify-center font-semibold text-[11px] text-[#334155]">
          <FaStar className="text-amber-400" />
          {devStack.rating}
        </p>
      </div>
      <button className="bg-[#0A0F1D] text-white w-full text-[12px] font-medium py-2 rounded-[10px] mt-5 mb-2 cursor-pointer">
        Add To Stack
      </button>
    </div>
  );
}
