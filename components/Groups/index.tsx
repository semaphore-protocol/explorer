"use client";

import { GroupWithNetwork } from "@/lib/types";
import { useState } from "react";
import { Details } from "./details";
import Groups from "./groups";

interface Props {
  groups: GroupWithNetwork[];
  networks: string[];
}

export const GroupsDisplay = ({ groups, networks }: Props) => {
  const [group, setGroup] = useState<GroupWithNetwork>();
  return (
    <div className="flex w-full flex-col gap-6 xl:flex-row">
      <Groups groups={groups} networks={networks} onClick={setGroup} />
      <Details group={group} />
    </div>
  );
};

export default Groups;
