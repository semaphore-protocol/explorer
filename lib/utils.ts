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

// If the id length is over 16 characters, shorten it to 16 characters and add "..." at the end.
export const formatId = (id: string) => {
  const maxIdLength = 10;
  if (id.length > maxIdLength) {
    return id.slice(0, 7) + "...";
  } else {
    return id;
  }
};