import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { GroupWithNetwork } from "./types";

export function tw(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const searchGroupById = (
  groups: GroupWithNetwork[],
  searchTerm: string
) => groups.filter((group) => group.id.includes(searchTerm));
