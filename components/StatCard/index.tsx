interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-lg border border-black/40 bg-white/95 p-6 dark:border-white/40 dark:bg-white/5">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-600 dark:text-gray-300">
        {title}
      </p>
      <h1>{value}</h1>
    </div>
  );
}
