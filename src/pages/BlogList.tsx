import React from "react";
import { apiGet } from "../lib/api";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


export default function BlogList() {
const [blogs, setBlogs] = React.useState<any[]>([]);
const [loading, setLoading] = React.useState<boolean>(true);
 
 React.useEffect(() => {
  apiGet("getBlogs")
    .then((data) => {
      if (data.success) {
        setBlogs(data.blogs);
      }
    })
    .catch((err) => console.error("Blog fetch error:", err))
    .finally(() => setLoading(false));
}, []);
  
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Health & Wellness Blog</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Expert advice, recovery tips, and the latest in physiotherapy from the specialists at KRP Healthcare.
        </p>
      </div>
{loading && (
  <div className="text-center py-10 text-slate-500">
    Loading blogs...
  </div>
)}
      {!loading && (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {Array.isArray(blogs) && blogs.map((blog) => (
          <article 
            key={blog.slug}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="h-48 sm:h-56 lg:h-64 overflow-hidden bg-white p-4 border-b border-slate-100">
  <img
    src={blog.image}
    alt={blog.title}
    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
    referrerPolicy="no-referrer"
  />
</div>
            <div className="p-8">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 mb-4 uppercase tracking-wider">
                <Calendar size={14} />
                <span>
  {new Date(blog.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })}
</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h2>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {blog.excerpt}
              </p>
              <Link 
                to={`/blog/${blog.slug}`}
                className="inline-flex items-center text-sm font-bold text-blue-600"
              >
                Read More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </article>
        ))}
            </div>
      )}
    </div>
  );
}
