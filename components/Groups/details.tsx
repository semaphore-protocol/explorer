import { fadeInUp, staggerChildren } from "@/lib/animations";
import { GroupWithNetwork } from "@/lib/types";
import {
  formatDate,
  formatId,
  formatName,
  getRandomEmoji,
  truncateHash,
} from "@/lib/utils";
import { GroupResponse } from "@semaphore-protocol/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ValidatedProof } from "../ui/ValidatedProof";
import Copy from "../ui/copy";
interface GroupAndRefProps {
  group?: GroupWithNetwork;
  forwardRef?: React.RefObject<HTMLDivElement>;
}
export const Details = ({ group, forwardRef }: GroupAndRefProps) => {
  const [emojis, setEmojis] = useState<string[]>(
    getRandomEmoji(group?.members?.length)
  );

  const groupProofsByTimestamp = (group: GroupWithNetwork | undefined) => {
    if (!group) return;
    if (!group?.validatedProofs) return;

    const value = group.validatedProofs.reduce(
      (acc: Record<string, GroupResponse["validatedProofs"]>, proof: any) => {
        if (!proof) return acc;
        const tDate = formatDate(proof.timestamp);
        if (!acc[tDate]) {
          acc[tDate] = [];
        }
        acc[tDate]?.push(proof);
        return acc;
      },
      {}
    );
    return value;
  };

  const groupedTimestamps = groupProofsByTimestamp(group);

  useEffect(() => {
    if (!group) return;
    setEmojis(getRandomEmoji(group.members?.length));
  }, [group]);

  return (
    <motion.section
      ref={forwardRef}
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
          <div className="flex items-center justify-start gap-3">
            <p className="rounded-2xl border border-amber-200 px-2 font-medium text-slate-300">
              {`ID: ${formatId(group.id)}`}
            </p>
            <Copy copy={group.id} />
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
                  className="flex items-center gap-2"
                  key={index}
                  variants={fadeInUp}
                  tabIndex={index + 1}
                >
                  <p>{emojis[index]}</p>
                  <p>{truncateHash(member)}</p>
                  <Copy copy={member} />
                </motion.div>
              ))}
          </motion.div>
          <p className="text-slate-400">Validated Proofs</p>
          <motion.div
            className="flex max-h-screen flex-col gap-3 overflow-y-auto overflow-x-hidden p-2"
            variants={staggerChildren}
          >
            {!group.validatedProofs?.length && (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                We couldn&apos;t find any validated proofs
              </p>
            )}
            {group.validatedProofs && (
              <ValidatedProof records={groupedTimestamps} />
            )}
          </motion.div>
        </>
      )}
    </motion.section>
  );
};
