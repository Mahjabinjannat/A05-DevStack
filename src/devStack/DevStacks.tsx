import { use } from "react";
import type { IdevStacksType } from "../types/DevStacksType";
import DevStackCard from "./DevStackCard";

interface IdevStackPromiseType {
  devStacksPromise: Promise<IdevStacksType[]>;
}
export default function DevStacks({ devStacksPromise }: IdevStackPromiseType) {
  const devStacks = use(devStacksPromise);

  return (
    <div className="container mx-auto mr-20">
      <h2 className="font-extrabold text-[36px] text-[#0F172A]">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent ">
          Technologies
        </span>
      </h2>
      <p className="text-[16px] text-[#64748B] pt-2 font-jakarta">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-[3fr_1fr] gap-6 my-14">
        <div className="grid grid-cols-3 gap-4">
          {devStacks.map((devStack) => (
            <DevStackCard devStack={devStack} key={devStack.id} />
          ))}
        </div>
        <div>
          <h1>Hello..................</h1>
        </div>
      </div>
    </div>
  );
}
