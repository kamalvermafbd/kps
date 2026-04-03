import React from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();

  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold text-slate-900 capitalize">
        {slug?.replace(/-/g, " ")}
      </h1>
      <p className="mt-4 text-slate-600">
        Blog detail page is ready for dynamic API binding.
      </p>
    </div>
  );
}
