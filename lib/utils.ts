import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { GroupWithNetwork } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterGroups(
  groups: GroupWithNetwork[],
  searchTerm?: string,
  network?: string
) {
  if (!groups) return groups;
  if (!searchTerm && !network) return groups;
  let refinedData = groups;
  if (searchTerm) {
    refinedData = groups.filter((group) => group.id.includes(searchTerm));
  }
  if (network) {
    if (network === "all") return refinedData;
    refinedData = refinedData.filter((group) => group.network === network);
  }
  return refinedData;
}

// If the id length is over 16 characters, shorten it to 16 characters and add "..." at the end.
export const formatId = (id: string) => {
  const maxIdLength = 10;
  if (id.length > maxIdLength) {
    return id.slice(0, 7) + "...";
  } else {
    return id;
  }
};

export function formatName(name: string) {
  const words = name.split("-");
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

export function extractPresentNetworks(groups: GroupWithNetwork[]) {
  return groups.reduce((acc, group) => {
    if (!acc.includes(group.network)) {
      acc.push(group.network);
    }
    return acc;
  }, [] as string[]);
}

export function getRandomEmoji(count: number | undefined): string[] {
  if (!count) count = 1;
  const emojis = [
    "😀",
    "😂",
    "😊",
    "🤔",
    "🤗",
    "🙄",
    "😴",
    "🤢",
    "😎",
    "🥳",
    "💩",
    "🐶",
    "🐱",
    "🐵",
    "🦊",
    "🐻",
    "🐨",
    "🐯",
    "🦁",
    "🐮",
    "🐷",
    "🦄",
    "🐸",
    "🐤",
    "🍕",
    "🍔",
    "🌮",
    "🍰",
    "🍩",
    "🍭",
    "🍺",
    "🍹",
    "🚀",
    "🚕",
    "🚲",
    "🚁",
    "🛴",
    "⚽️",
    "🏀",
    "🏈",
    "🎾",
    "🏓",
    "🎮",
    "🎸",
    "🎧",
  ];

  const result = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    result.push(randomEmoji);
  }

  return result;
}

export function truncateHash(
  hash: string | undefined,
  length: number = 50
): string {
  if (!hash) return "";
  const prefixLength = Math.floor(length / 2);
  const suffixLength = length - prefixLength;
  return `${hash.slice(0, prefixLength)}...${hash.slice(-suffixLength)}`;
}

export function formatDate(timestamp: string | undefined): string {
  if (!timestamp) return "";
  const milliseconds = new Date(Number(timestamp) * 1000);
  const date = new Date(milliseconds);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
}
