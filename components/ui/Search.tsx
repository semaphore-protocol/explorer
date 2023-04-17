"use client";
import { Input } from "./Input";

export default function Search() {
  return (
    <div className="flex items-center justify-center gap-3">
      <Input
        placeholder="Search by id"
        onKeyDown={(e) => {
          if (e.code === "Enter") console.log("pressed");
        }}
      />
      <button className="rounded-md bg-slate-500 p-3">Search</button>
    </div>
  );
}
