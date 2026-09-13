import type { Dispatch, SetStateAction } from "react";
import type { IdevStacksType } from "../types/DevStacksType";
import Stack from "./Stack";
import RemoveStack from "./RemoveStack";

interface IstacksType {
  stacks: IdevStacksType[];
  setStacks: Dispatch<SetStateAction<IdevStacksType[]>>;
}

export default function Stacks({ stacks, setStacks }: IstacksType) {
  //   if (stacks.length === 0) {
  return (
    <div className="space-y-2.5">
      <h1 className="text-[16px] font-bold text-[#0F172A] leading-tight">
        Your Stack
      </h1>
      {stacks.length > 0 ? (
        <div>
          <p className="text-[12px] text-[#94A3B8] pb-4">
            {`${stacks.length} technology selected`}
          </p>
          <div className="flex flex-col gap-2">
            {stacks.map((stack) => (
              <Stack
                key={stack.id}
                stack={stack}
                stacks={stacks}
                setStacks={setStacks}
              />
            ))}
            <RemoveStack setStacks={setStacks} />
          </div>
        </div>
      ) : (
        <div>
          <p className="text-[12px] text-[#94A3B8]">
            No technologies selected yet.
          </p>
          <p className="text-[#94A3B8] text-[12px] border border-dashed border-gray-200 py-6 w-full text-center rounded-[12px] mt-5">
            Your stack is empty.
          </p>
        </div>
      )}
    </div>
  );
}
