import React from "react";

export function Progress({ value, className }: { value: number; className?: string }) {
  return (
    <div className={`relative h-2 w-full bg-gray-200 rounded ${className}`}>
      <div
        className="h-full bg-blue-500 rounded"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}