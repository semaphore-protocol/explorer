import { GroupResponse } from "@semaphore-protocol/data";

export type GroupWithNetwork = GroupResponse & { network: string };
