"use client";
import { copyToClipboard } from "@/lib/utils";
import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { useCallback, useState } from "react";

export default function Copy({ copy }: { copy: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const copyContent = useCallback(() => {
    copyToClipboard(copy)
      .then((res) => setIsCopied(res))
      .finally(() =>
        setTimeout(() => {
          setIsCopied(false);
        }, 2000)
      );
  }, [copy]);
  return (
    <div className="cursor-pointer text-slate-400" onClick={copyContent}>
      {isCopied ? (
        <CopyCheckIcon className="h-4 w-4" />
      ) : (
        <CopyIcon className="h-4 w-4" />
      )}
    </div>
  );
}
