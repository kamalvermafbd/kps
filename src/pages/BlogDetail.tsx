import React from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();

  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold">{slug}</h1>
    </div>
  );
}
