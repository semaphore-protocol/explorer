import { formatDate, truncateHash } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

interface Props {
  proof: any;
}

export const VerifiedProof = ({ proof }: Props) => {
  return (
    <Accordion
      type="single"
      className="rounded-md border border-slate-700 bg-slate-800 p-3"
      collapsible
    >
      <AccordionItem value={proof.timestamp}>
        <AccordionTrigger className="cursor-pointer hover:font-medium hover:text-amber-400">
          {formatDate(proof.timestamp)}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col items-start">
            <article>
              <h6 className="text-slate-400">External Nullifier</h6>
              <p>{proof.externalNullifier}</p>
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
      </AccordionItem>
    </Accordion>
  );
};
