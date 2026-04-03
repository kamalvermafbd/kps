import React from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../lib/api";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!slug) return;

    apiGet("getBlogBySlug", { slug })
      .then((data) => {
        if (data.success) {
          setBlog(data.blog);
        }
      })
      .catch((err) => console.error("Blog detail error:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="py-24 text-center">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="py-24 text-center">Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold text-slate-900">
        {blog.title}
      </h1>
      <p className="mt-4 text-slate-600">
        {blog.symptoms}
      </p>
    </div>
  );
}
