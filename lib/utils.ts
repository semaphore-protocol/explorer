import { GroupResponse } from "@semaphore-protocol/data";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function tw(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const searchGroupById = (groups: GroupResponse[], searchTerm: string) =>
  groups.filter((group) => group.id.includes(searchTerm));
