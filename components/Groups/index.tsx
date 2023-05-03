"use client";

import { GroupWithNetwork } from "@/lib/types";
import { useCallback, useRef, useState } from "react";
import { Details } from "./details";
import Groups from "./groups";

interface Props {
  groups: GroupWithNetwork[];
  networks: string[];
}

export const GroupsDisplay = ({ groups, networks }: Props) => {
  const [group, setGroup] = useState<GroupWithNetwork>();
  const detailsRef = useRef<HTMLDivElement>(null);

  const scrollToDetails = useCallback(() => {
    if (!detailsRef.current) return;
    const { current: detailsComponent } = detailsRef;
    // Get the bounding rectangle of the element relative to the viewport
    const rect = detailsComponent.getBoundingClientRect();
    // Check if the element is currently visible
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Element is already in view, do nothing
      return;
    }
    // Element is not currently in view, scroll to it
    detailsComponent.scrollIntoView({ behavior: "smooth" });
  }, [detailsRef]);

  const handleGroupClick = useCallback(
    (group: GroupWithNetwork) => {
      setGroup(group);
      const isMobile =
        window.innerWidth <= 768 ||
        (window.innerWidth > 768 && window.innerWidth <= 1024);
      if (isMobile) {
        scrollToDetails();
      }
    },
    [scrollToDetails]
  );

  return (
    <div className="flex w-full flex-col gap-6 xl:flex-row">
      <Groups groups={groups} networks={networks} onClick={handleGroupClick} />
      <Details forwardRef={detailsRef} group={group} />
    </div>
  );
};

export default Groups;
