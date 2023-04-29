"use client";

import { slideInRight, staggerChildren } from "@/lib/animations";
import { GroupWithNetwork } from "@/lib/types";
import { searchGroupById } from "@/lib/utils";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import GroupCard from "../ui/GroupCard";
import Search from "../ui/Search";

function Groups({ groups }: { groups?: GroupWithNetwork[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [groupData, setGroupData] = useState<GroupWithNetwork[]>([]);

  const _updateSearchTerm = useCallback(
    (newTerm: string) => {
      if (!groups) return;
      setSearchTerm(newTerm);
      setGroupData(searchGroupById(groups, searchTerm));
      console.log({ searchTerm });
    },
    [groups, searchTerm]
  );

  useEffect(() => {
    _updateSearchTerm(searchTerm);
  }, [searchTerm, _updateSearchTerm]);

  return (
    <motion.section
      className="flex w-full flex-col gap-6 overflow-hidden rounded-md border border-slate-800 bg-slate-900 p-4"
      initial="initial"
      animate="animate"
    >
      <h2>Groups</h2>
      <Search setSearchTerm={_updateSearchTerm} />
      {searchTerm && groupData.length === 0 && (
        <p className="text-center text-lg text-slate-600 dark:text-slate-400">
          We couldn&apos;t find any groups with that id
        </p>
      )}

      {groupData.length > 0 && (
        <motion.div className="flex flex-col gap-3" variants={staggerChildren}>
          {groupData.map((group, index) => (
            <motion.div key={index} variants={slideInRight}>
              <GroupCard group={group} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
}

export default Groups;
