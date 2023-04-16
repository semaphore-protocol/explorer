import { GroupResponse, SemaphoreSubgraph } from "@semaphore-protocol/data";
import Dashboard from "@/components/Dashboard";

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
    <main className="flex min-h-screen flex-col items-center gap-24 p-24">
      <h1>Semaphorus</h1>

      <Dashboard groups={groups} />
    </main>
  );
}
