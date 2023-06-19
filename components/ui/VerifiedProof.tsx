import { formatDate, truncateHash } from "@/lib/utils";
import { GroupResponse } from "@semaphore-protocol/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
interface Props {
  records: Record<string, GroupResponse["verifiedProofs"]> | undefined;
}

export const VerifiedProof = ({ records }: Props) => {
  if (!records) return null;
  return (
    <>
      {Object.values(records).map((proofs, index) => (
        <Accordion
          type="single"
          className="rounded-md border border-slate-700 bg-slate-800 p-3"
          collapsible
          key={index}
        >
          <AccordionItem value={formatDate(proofs?.[0]?.timestamp)}>
            <AccordionTrigger className="cursor-pointer hover:font-medium hover:text-amber-400">
              {formatDate(proofs?.[0]?.timestamp)} ({proofs?.length})
            </AccordionTrigger>
            {proofs?.map((proof, index) => (
              <AccordionContent key={index}>
                <div className="flex flex-col items-start">
                  <article>
                    <h6 className="text-slate-400">External Nullifier</h6>
                    <p>{proof?.externalNullifier}</p>
                  </article>
                  <article>
                    <h6 className="text-slate-400">Merkle Tree Root</h6>
                    <p>{truncateHash(proof.merkleTreeRoot)}</p>
                  </article>
                  <article>
                    <h6 className="text-slate-400">Nullifier Hash</h6>
                    <p>{truncateHash(proof.nullifierHash)}</p>
                  </article>
                  <article>
                    <h6 className="text-slate-400">Signal</h6>
                    <p>{truncateHash(proof.signal)}</p>
                  </article>
                </div>
              </AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
};
