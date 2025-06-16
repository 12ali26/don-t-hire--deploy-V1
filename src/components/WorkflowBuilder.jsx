import React from "react";
export default function WorkflowBuilder() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-4">AI Workers</h2>
      </aside>
      <main className="flex-1 bg-white p-4">
        <h1 className="text-2xl font-bold">Workflow Canvas</h1>
      </main>
    </div>
  );
}
