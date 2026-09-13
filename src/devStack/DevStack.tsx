import { FaStar } from "react-icons/fa";
import type { IdevStacksType } from "../types/DevStacksType";

interface IdevStackType {
  devStack: IdevStacksType;
}

export default function DevStack({ devStack }: IdevStackType) {
  return (
    <div className="rounded-[16px] border border-gray-200 shadow-[0px_2px_10px_-3px_rgba(0,0,0,0.05)] px-6 py-4 space-y-2.5">
      <div className="relative">
        <img src={devStack.icon} alt="" className="h-[40px] w-[40px]" />
        <span className="absolute top-2 right-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
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
      <button className="bg-[#0A0F1D] text-white w-full text-[12px] font-medium py-2 rounded-[10px] mt-5 mb-2">
        Add To Stack
      </button>
    </div>
  );
}
