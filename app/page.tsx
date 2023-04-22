"use client";
import Dashboard from "@/components/Dashboard";
import Groups from "@/components/Groups";
import { fadeInUp, subtleFadeIn } from "@/lib/animations";
import { GroupResponse } from "@semaphore-protocol/data";
import { motion } from "framer-motion";
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
    <motion.main
      className="min-h-screen px-4 py-8 lg:p-16 xl:px-36 xl:py-16"
      initial="initial"
      animate="animate"
    >
      <motion.div variants={subtleFadeIn} className="relative overflow-hidden">
        <Image
          src={
            "https://em-content.zobj.net/source/microsoft-teams/337/milky-way_1f30c.png"
          }
          alt="Milky Way icon"
          width={100}
          height={100}
          draggable={false}
        />
      </motion.div>
      <section className="mt-4 flex flex-col gap-6 xl:flex-row xl:items-center">
        <section className="w-full">
          <p className="text-sm uppercase tracking-widest opacity-70 xl:text-lg">
            Semaphorus &mdash; A Sempahore Explorer
          </p>
          <div className="p-3"></div>
          <motion.div variants={fadeInUp}>
            <h1>
              See what&apos;s happening <br /> on Semaphore
            </h1>
          </motion.div>
          <motion.a
            href="https://semaphore.appliedzkp.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, x: 4 }}
            className="mt-3 inline-flex items-center gap-2 py-1 text-slate-400 transition hover:text-blue-300 active:text-blue-300"
          >
            <span className="border-b-2 border-dotted border-current">
              Learn about Semaphore
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </motion.a>
        </section>
        <Dashboard groups={groups} />
      </section>
      <hr className="my-16 border-slate-700" />
      <div className="flex w-full flex-col gap-6 xl:flex-row">
        <Groups groups={groups} />
        <section className="flex w-full flex-col gap-6 overflow-hidden rounded-md border border-slate-800 bg-slate-900 p-6">
          <div className="flex h-full w-full items-center justify-center rounded-md border-2 border-dashed border-slate-700">
            <p className="text-xl font-medium text-slate-400">
              🚧We&apos;re building group details🚧
            </p>
          </div>
        </section>
      </div>
    </motion.main>
  );
}
