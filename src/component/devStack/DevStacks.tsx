import { use, useState } from "react";
import type { IdevStacksType } from "../../types/DevStacksType";
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[28px] font-extrabold text-[#0F172A] sm:text-[32px] lg:text-[36px]">
          Explore the{" "}
          <span className="bg-gradient-to-r bg-brand-gradient bg-clip-text text-transparent ">
            Technologies
          </span>
        </h2>
        <p className="pt-2 text-[14px] text-[#64748B] sm:text-[16px]">
          Pick one technology per category to build your ideal stack.
        </p>
        <div className="my-10 grid grid-cols-1 gap-6 lg:my-14 lg:grid-cols-[3fr_1fr]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
