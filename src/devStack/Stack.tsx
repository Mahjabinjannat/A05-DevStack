import type { Dispatch, SetStateAction } from "react";
import type { IdevStacksType } from "../types/DevStacksType";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

interface Istack {
  stack: IdevStacksType;
  stacks: IdevStacksType[];
  setStacks: Dispatch<SetStateAction<IdevStacksType[]>>;
}

export default function Stack({ stack, stacks, setStacks }: Istack) {
  const handleDeleteStack = () => {
    const restStacks = stacks.filter((s) => s.id !== stack.id);
    setStacks(restStacks);
    toast.success(`${stack.name} has been removed from your stack!`);
  };

  //   const handleDeleteAll = () => {
  //     setStacks([]);
  //   };
  return (
    <div className="flex justify-between border border-gray-200 p-3 rounded-[10px]">
      <div className="flex items-center gap-2.5">
        <img src={stack.icon} alt="" className="h-[35px] w-[35px]" />
        <div className="flex flex-col">
          <p className="font-semibold text-[#0F172A] text-[12px]">
            {stack.name}
          </p>
          <p className="text-[#94A3B8] text-[8px]">{stack.category}</p>
        </div>
      </div>
      <button className="cursor-pointer" onClick={handleDeleteStack}>
        <RxCross2 className="text-[#94A3B8] text-[22px]" />
      </button>
    </div>
  );
}
