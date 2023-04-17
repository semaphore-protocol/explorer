interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-lg border border-slate-500 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-900">
      <p className="text-xs font-medium uppercase tracking-widest text-gray-600 dark:text-gray-300">
        {title}
      </p>
      <h1>{value}</h1>
    </div>
  );
}
