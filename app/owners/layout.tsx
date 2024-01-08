import React from "react";

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container p-24">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-3xl underline">Owner Dashboard</h1>
        <div>{children}</div>
      </div>
    </div>
  );
}
