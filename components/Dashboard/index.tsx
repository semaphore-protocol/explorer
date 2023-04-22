import { GroupResponse, SemaphoreSubgraph } from "@semaphore-protocol/data";
import StatCard from "../StatCard";

export default function Dashboard({ groups }: { groups?: GroupResponse[] }) {
  return (
    <section className="w-full max-w-lg">
      <div className="xL:gap-6 flex w-full items-center justify-center gap-3">
        {!groups && <p>Loading...</p>}
        {/* Number of groups */}
        {groups && (
          <>
            <StatCard title="total groups" value={groups.length.toString()} />
            <StatCard
              title="total members"
              value={`${groups.reduce((memberCount, currGroup) => {
                return (memberCount += currGroup?.members?.length || 0);
              }, 0)}`}
            />
            <StatCard
              title="total proofs"
              value={`${groups.reduce((proofCount, currGroup) => {
                return (proofCount += currGroup?.verifiedProofs?.length || 0);
              }, 0)}`}
            />
          </>
        )}
      </div>
    </section>
  );
}
