import React from "react";
import { apiGet } from "../lib/api";
import { Calendar, ArrowRight } from "lucide-react";


export default function BlogList() {
const [blogs, setBlogs] = React.useState<any[]>([]);
const [loading, setLoading] = React.useState<boolean>(true);
 const [selectedBlog, setSelectedBlog] = React.useState<any | null>(null);
 
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
            <button
  onClick={() => setSelectedBlog(blog)}
  className="inline-flex items-center text-sm font-bold text-blue-600"
>
  Read More <ArrowRight size={16} className="ml-2" />
</button>
            </div>
          </article>
        ))}
            </div>
      )}
{selectedBlog && (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center overflow-y-auto p-4 pt-20">
    <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
      <button
        onClick={() => setSelectedBlog(null)}
        className="absolute top-4 right-4 text-2xl text-slate-500"
      >
        ×
      </button>

      <img
        src={selectedBlog.image}
        alt={selectedBlog.title}
        className="w-full h-64 object-cover rounded-2xl mb-6"
      />

      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        {selectedBlog.title}
      </h2>

      <p className="text-slate-600 mb-6">{selectedBlog.symptoms}</p>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-2">How Physiotherapy Helps</h3>
          <p className="text-slate-600">{selectedBlog.physio_helps}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Why Choose KRP</h3>
          <p className="text-slate-600">{selectedBlog.krp_role}</p>
        </div>
      </div>
    </div>
  </div>
)}
   
    </div>
  );
}
