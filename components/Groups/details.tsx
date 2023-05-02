import { fadeInUp, staggerChildren } from "@/lib/animations";
import { GroupWithNetwork } from "@/lib/types";
import {
  formatId,
  formatName,
  getRandomEmoji,
  truncateHash,
} from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { VerifiedProof } from "../ui/VerifiedProof";

export const Details = ({ group }: { group?: GroupWithNetwork }) => {
  const [emojis, setEmojis] = useState<string[]>(
    getRandomEmoji(group?.members?.length)
  );

  useEffect(() => {
    if (!group) return;
    setEmojis(getRandomEmoji(group.members?.length));
  }, [group]);

  return (
    <motion.section
      className="flex w-full flex-col gap-6 overflow-hidden rounded-md border border-slate-800 bg-slate-900 p-4 xl:h-auto"
      initial="initial"
      animate="animate"
    >
      {!group && (
        <div className="flex h-full w-full items-center justify-center rounded-md border-2 border-dashed border-slate-700">
          <p className="p-4 text-sm font-medium text-slate-400 lg:text-xl">
            Select a group to see more details ✨
          </p>
        </div>
      )}
      {group && (
        <>
          <h2>Details</h2>
          <div className="flex items-center justify-between">
            <p className="rounded-2xl border border-amber-200 px-2 font-medium text-slate-300">
              {`ID: ${formatId(group.id)}`}
            </p>
            <p className="rounded-2xl bg-slate-700 px-3 py-1 text-sm text-slate-300">
              {formatName(group.network)}
            </p>
          </div>
          <p className="text-slate-400">Members</p>
          <motion.div
            className="flex max-h-60 flex-col gap-3 overflow-auto p-2"
            variants={staggerChildren}
          >
            {!group.members?.length && (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                We couldn&apos;t find any members
              </p>
            )}
            {group.members &&
              group.members?.length > 0 &&
              group.members?.map((member, index) => (
                <motion.div
                  className="flex gap-2"
                  key={index}
                  variants={fadeInUp}
                  tabIndex={index + 1}
                >
                  <p>{emojis[index]}</p>
                  <p>{truncateHash(member)}</p>
                </motion.div>
              ))}
          </motion.div>
          <p className="text-slate-400">Verified Proofs</p>
          <motion.div
            className="flex max-h-screen flex-col gap-3 overflow-y-auto overflow-x-hidden p-2"
            variants={staggerChildren}
          >
            {!group.verifiedProofs?.length && (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                We couldn&apos;t find any verified proofs
              </p>
            )}
            {group.verifiedProofs &&
              group.verifiedProofs?.length > 0 &&
              group.verifiedProofs?.map((proof, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  tabIndex={index + 1}
                  className="ring-offset-1 ring-offset-transparent focus:rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                >
                  <VerifiedProof proof={proof} />
                </motion.div>
              ))}
          </motion.div>
        </>
      )}
    </motion.section>
  );
};
