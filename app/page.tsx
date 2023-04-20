import Dashboard from "@/components/Dashboard";
import Groups from "@/components/Groups";
import { GroupResponse } from "@semaphore-protocol/data";
import Image from "next/image";

// const getGroupsFromSubgraph = async ({chain}:{chain?: string}) => {
//   const semaphoreSubgraph = new SemaphoreSubgraph(chain || "goerli");
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
  // const group =
  const groups: GroupResponse[] = [
    {
      id: "9213",
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
    {
      id: "9214",
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
    {
      id: "9215",
      merkleTree: {
        root: "19915848860228264978647332772855997232889825934129183693836124570093652495434",
        depth: 20,
        zeroValue:
          "72495600586905503374933132423927094691926252119895994287139394542690893374",
        numberOfLeaves: 6,
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
    {
      id: "9216",
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
        "3922432584081017065213385740188209633784757912084488435985094627477698263325",
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
    <main className="min-h-screen p-16 xl:px-36 xl:py-16">
      <Image
        src={
          "https://em-content.zobj.net/source/microsoft-teams/337/milky-way_1f30c.png"
        }
        alt="Milky Way icon"
        width={100}
        height={100}
        draggable={false}
      />
      <section className="mt-4 flex items-center gap-4">
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
      <Groups groups={groups} />
    </main>
  );
}
