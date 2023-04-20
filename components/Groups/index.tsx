"use client";

import { searchGroupById } from "@/lib/utils";
import { GroupResponse } from "@semaphore-protocol/data";
import { useCallback, useEffect, useState } from "react";
import GroupCard from "../ui/GroupCard";
import Search from "../ui/Search";

function Groups({ groups }: { groups: GroupResponse[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [groupData, setGroupData] = useState<GroupResponse[]>([]);

  const _updateSearchTerm = useCallback(
    (newTerm: string) => {
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
    <section className="flex max-w-2xl flex-col gap-6 rounded-md bg-slate-900 p-6">
      <h2>Groups</h2>
      <Search setSearchTerm={_updateSearchTerm} />
      {searchTerm && groupData.length === 0 && (
        <p className="text-center text-lg text-slate-600 dark:text-slate-400">
          We couldn&apos;t find any groups with id &quot;{searchTerm}&quot;
        </p>
      )}
      {groupData && (
        <div className="flex flex-col gap-3">
          {groupData.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Groups;
