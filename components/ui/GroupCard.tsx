export default function GroupCard() {
  return (
    <div className="flex items-center justify-between gap-2 rounded-md border border-slate-700 bg-slate-800 p-3">
      <div className="flex gap-2">
        <p className="rounded-2xl bg-slate-600 px-2 text-slate-300">9212</p>
        <p className="rounded-2xl bg-slate-600 px-2 text-slate-300">Goerli</p>
      </div>
      <div className="flex gap-2">
        <p>✅ 1 verified proof</p>
        <p>👋🏽 1 member</p>
      </div>
    </div>
  );
}
