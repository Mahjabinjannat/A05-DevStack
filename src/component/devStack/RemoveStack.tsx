import type { Dispatch, SetStateAction } from "react";
import type { IdevStacksType } from "../../types/DevStacksType";
import { toast } from "react-toastify";

interface IremoveStacks {
  setStacks: Dispatch<SetStateAction<IdevStacksType[]>>;
}

export default function RemoveStack({ setStacks }: IremoveStacks) {
  const handleDeleteAll = () => {
    setStacks([]);
    toast.success(`All stacks has been removed from your stack!`);
  };
  return (
    <div>
      <button
        className="text-[16px] text-[#D82C20] font-semibold w-full border-[0.5px] border-[#ED8C85] p-1 rounded-[10px] cursor-pointer mt-8"
        onClick={handleDeleteAll}
      >
        Remove All
      </button>
    </div>
  );
}
