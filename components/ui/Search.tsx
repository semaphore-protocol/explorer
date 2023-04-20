import { ChangeEvent } from "react";
import { Input } from "./Input";

export default function Search({
  setSearchTerm: updateSearchTerm,
}: {
  setSearchTerm: (newTerm: string) => void;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateSearchTerm((e.target as HTMLInputElement).value);

  return (
    <div className="flex items-center justify-center gap-3">
      <Input placeholder="Search by id" onChange={handleChange} />
      <button className="rounded-md bg-slate-200 p-3 font-semibold text-slate-600">
        Search
      </button>
    </div>
  );
}
