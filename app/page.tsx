import Dashboard from "@/components/Dashboard";
import { GroupsDisplay } from "@/components/Groups";
import Header from "@/components/Header";
import Logo from "@/components/ui/Logo";
import { GroupWithNetwork } from "@/lib/types";
import { extractPresentNetworks } from "@/lib/utils";
import {
  SemaphoreSubgraph,
  getSupportedNetworks,
} from "@semaphore-protocol/data";
import { cache } from "react";

const getGroupSubgraphData = async (network: string) => {
  const semaphoreSubgraph = new SemaphoreSubgraph();
  try {
    const groupData = await semaphoreSubgraph.getGroups({
      members: true,
      verifiedProofs: true,
    });
    const groupsWithNetwork = groupData.map((group) => {
      return { ...group, network };
    });
    return groupsWithNetwork;
  } catch (e) {
    // console.log(e);
    throw new Error(`Error fetching groups from ${network}`);
  }
};

const getGroupsFromSubgraph = cache(async () => {
  const networks = getSupportedNetworks();
  const data: GroupWithNetwork[] = [];

  for (const network of networks) {
    try {
      const groupData = await getGroupSubgraphData(network);
      if (groupData) {
        data.push(...groupData);
        console.log(`Got ${groupData.length} groups from ${network}`);
      }
    } catch (error) {
      console.log(error);
      continue;
    }
  }

  return data;
});

export default async function Home() {
  const groups = await getGroupsFromSubgraph();
  const networks = extractPresentNetworks(groups);

  return (
    <main className="min-h-screen px-4 py-8 lg:p-16 xl:px-36 xl:py-16">
      <Logo />
      <section className="mt-4 flex flex-col gap-6 xl:flex-row xl:items-center">
        <Header />
        <Dashboard groups={groups} />
      </section>
      <hr className="my-16 border-slate-700" />
      <GroupsDisplay groups={groups} networks={networks} />
    </main>
  );
}
