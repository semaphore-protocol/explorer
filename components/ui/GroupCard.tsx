"use client";
import { GroupResponse } from "@semaphore-protocol/data";

export default function GroupCard({ group }: { group: GroupResponse }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-md border border-slate-700 bg-slate-800 p-3 transition">
      <div className="flex gap-2">
        <p className="rounded-2xl bg-slate-600 px-2 font-medium text-slate-300">
          {group.id}
        </p>
        <p className="rounded-2xl bg-slate-700 px-2 text-slate-300">
          🤖 Goerli
        </p>
      </div>
      <div className="flex gap-2">
        <p>
          ✅{" "}
          {group.verifiedProofs?.length === 1
            ? "1 verified proof"
            : `${group.verifiedProofs?.length} verified proofs`}
        </p>
        <p className="text-slate-400">|</p>
        <p>
          👋🏽{" "}
          {group.members?.length === 1
            ? "1 member"
            : `${group.members?.length} members`}
        </p>
      </div>
    </div>
  );
}
