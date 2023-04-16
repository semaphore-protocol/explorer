import { GroupResponse, SemaphoreSubgraph } from "@semaphore-protocol/data";

export default function Dashboard({ groups }: { groups?: GroupResponse[] }) {
  return (
    <section>
      <div className="flex max-w-4xl flex-col items-center justify-center">
        {!groups && <p>Loading...</p>}
        {groups && (
          <div className="flex flex-col border-2 p-6">
            <p>#of groups</p>
            <h1>{groups.length}</h1>
          </div>
        )}
      </div>
    </section>
  );
}
