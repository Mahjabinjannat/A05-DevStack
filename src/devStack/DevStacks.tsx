import { use, useState } from "react";
import type { IdevStacksType } from "../types/DevStacksType";
import DevStackCard from "./DevStackCard";
import Stacks from "./Stacks";

interface IdevStackPromiseType {
  devStacksPromise: Promise<IdevStacksType[]>;
}
export default function DevStacks({ devStacksPromise }: IdevStackPromiseType) {
  const devStacks = use(devStacksPromise);

  const [stacks, setStacks] = useState<IdevStacksType[]>([]);

  return (
    <>
      <div className="container mx-auto mr-20 mb-24">
        <h2 className="font-extrabold text-[36px] text-[#0F172A]">
          Explore the{" "}
          <span className="bg-gradient-to-r bg-brand-gradient bg-clip-text text-transparent ">
            Technologies
          </span>
        </h2>
        <p className="text-[16px] text-[#64748B] pt-2 font-jakarta">
          Pick one technology per category to build your ideal stack.
        </p>
        <div className="grid grid-cols-[3fr_1fr] gap-6 my-14">
          <div className="grid grid-cols-3 gap-4">
            {devStacks.map((devStack) => (
              <DevStackCard
                devStack={devStack}
                key={devStack.id}
                stacks={stacks}
                setStacks={setStacks}
              />
            ))}
          </div>
          <div className="self-start border border-gray-200 shadow-[0px_2px_10px_-3px_rgba(0,0,0,0.05)] px-6 py-7 rounded-[15px]">
            <Stacks stacks={stacks} setStacks={setStacks} />
          </div>
        </div>
      </div>
      <hr className="border-0 border-t border-gray-200" />
    </>
  );
}
