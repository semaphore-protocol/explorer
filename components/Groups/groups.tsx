"use client";

import { slideInRight, staggerChildren } from "@/lib/animations";
import { GroupWithNetwork } from "@/lib/types";
import { filterGroups, formatName } from "@/lib/utils";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import GroupCard from "../ui/GroupCard";
import Search from "../ui/Search";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

interface Props {
  groups: GroupWithNetwork[];
  networks: string[];
  onClick: (group: GroupWithNetwork) => void;
}

function Groups({ groups, networks, onClick }: Props) {
  const [network, setNetwork] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [groupData, setGroupData] = useState<GroupWithNetwork[]>(groups);

  const handleClick = (group: GroupWithNetwork) => {
    onClick(group);
  };

  const _filterGroups = useCallback(() => {
    setGroupData(filterGroups(groups, searchTerm, network));
  }, [groups, network, searchTerm]);

  const _updateSearchTerm = useCallback(
    (newTerm: string) => {
      setSearchTerm(newTerm);
      _filterGroups();
    },
    [_filterGroups]
  );

  // Handle select change
  const handleNetworkSelect = (value: string) => {
    setNetwork(value);
    _filterGroups();
  };

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

      <Select onValueChange={handleNetworkSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by network" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All networks</SelectItem>
          {networks.map((network) => (
            <SelectItem key={network} value={network}>
              {formatName(network)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {searchTerm && groupData.length === 0 && (
        <p className="text-center text-lg text-slate-600 dark:text-slate-400">
          We couldn&apos;t find any groups with that id
        </p>
      )}

      {groupData.length > 0 && (
        <motion.div
          className="flex max-h-screen flex-col gap-3 overflow-y-auto overflow-x-hidden p-2"
          variants={staggerChildren}
        >
          {groupData.map((group, index) => (
            <motion.div
              key={index}
              variants={slideInRight}
              tabIndex={index + 1}
              className="ring-offset-1 ring-offset-transparent focus:rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
            >
              <GroupCard group={group} onClick={handleClick} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
}

export default Groups;
