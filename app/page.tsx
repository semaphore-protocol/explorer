import Dashboard from "@/components/Dashboard";
import GroupCard from "@/components/ui/GroupCard";
import Search from "@/components/ui/Search";
import { GroupResponse } from "@semaphore-protocol/data";

// const getGroupsFromSubgraph = async () => {
//   const semaphoreSubgraph = new SemaphoreSubgraph();
//   try {
//     const groupData = await semaphoreSubgraph.getGroups({
//       members: true,
//       verifiedProofs: true,
//     });
//     console.log(groupData);
//     console.log(groupData[0].verifiedProofs);
//     return groupData;
//   } catch (e) {
//     console.log(e);
//   }
// };

export default async function Home() {
  // const groups = await getGroupsFromSubgraph();

  const groups: GroupResponse[] = [
    {
      id: "9212",
      merkleTree: {
        root: "19915848860228264978647332772855997232889825934129183693836124570093652495434",
        depth: 20,
        zeroValue:
          "72495600586905503374933132423927094691926252119895994287139394542690893374",
        numberOfLeaves: 1,
      },
      admin: "0xc1c5f42535c3ee4394838c0a64ac98dd317d21fb",
      members: [
        "3922432584081017065213385740188209633784757912084488435985094627477698263325",
      ],
      verifiedProofs: [
        {
          signal:
            "32745724963520459128167607516703083632076522816298193357160756506792738947072",
          merkleTreeRoot:
            "19915848860228264978647332772855997232889825934129183693836124570093652495434",
          externalNullifier: "9212",
          nullifierHash:
            "20931094729402738052789531612146913967438095640177005546904100673123651442821",
          timestamp: "1680777564",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen p-16 xl:p-36">
      <section className="flex items-center gap-4">
        <section className="w-full">
          <p className="text-lg uppercase tracking-widest opacity-70">
            Semaphorus &mdash; A Sempahore Explorer
          </p>
          <div className="p-3"></div>
          <h1>
            See what&apos;s happening <br /> on Semaphore
          </h1>
          <a
            href="https://semaphore.appliedzkp.org/"
            target="_blank"
            className="mt-3 inline-block border-b-2 border-current py-1 text-slate-600 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
          >
            Learn about Semaphore
          </a>
        </section>
        <Dashboard groups={groups} />
      </section>
      <hr className="my-16 border-slate-700" />

      <section className="flex max-w-2xl flex-col gap-2 rounded-md bg-slate-900 p-6">
        <h2>Groups</h2>
        <Search />
        <GroupCard />
      </section>
    </main>
  );
}
