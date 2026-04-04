import React from "react";
import { apiGet } from "../lib/api";
import { Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

export default function BlogList({ blogs = [] }: { blogs?: any[] }) {
const [loading, setLoading] = React.useState<boolean>(false);
 
 const [selectedBlog, setSelectedBlog] = React.useState<any | null>(null);
 const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
 

 


const renderCardList = (text?: string) => {
  if (!text) return null;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mt-4">
      {text.split(",").map((item, i) => (
        <li
          key={i}
          className="flex items-start space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-100"
        >
          <CheckCircle2
            size={18}
            className="text-blue-600 shrink-0 mt-0.5"
          />
          <span className="text-sm font-medium text-slate-700">
            {item.trim()}
          </span>
        </li>
      ))}
    </ul>
  );
};

 
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
      {blogs.length > 0 && (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {Array.isArray(blogs) && blogs.map((blog) => (
          <article 
            key={blog.slug}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all"
          >
            <div
  className="h-48 sm:h-56 lg:h-64 overflow-hidden bg-white p-4 border-b border-slate-100 cursor-pointer"
  onClick={() => setSelectedImage(blog.image)}
>
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
      <div className="relative mb-8 pt-4 pr-4">
  <button
    onClick={() => setSelectedBlog(null)}
    className="absolute top-0 right-0 z-20
               h-11 w-11 rounded-full
               bg-white/95 backdrop-blur-md
               border border-slate-200
               shadow-lg
               flex items-center justify-center
               text-2xl font-bold text-slate-700
               hover:text-slate-900
               hover:scale-105
               transition-all duration-300"
  >
    ×
  </button>

  <img
    src={selectedBlog.image}
    alt={selectedBlog.title}
    className="w-full h-64 object-cover rounded-2xl mt-5"
  />
</div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        {selectedBlog.title}
      </h2>



<div className="space-y-8 pb-6">
  <div>
    <h3 className="text-xl font-bold mb-2">Symptoms</h3>
    {renderCardList(selectedBlog.symptoms)}
  </div>

  <div>
    <h3 className="text-xl font-bold mb-2">Common Causes</h3>
    {renderCardList(selectedBlog.causes)}
  </div>

  <div>
    <h3 className="text-xl font-bold mb-2">How Physiotherapy Helps</h3>
    {renderCardList(selectedBlog.physio_helps)}
  </div>

  <div>
    <h3 className="text-xl font-bold mb-2">Why Choose KRP</h3>
    <p className="text-slate-600 leading-relaxed pb-4">
  {selectedBlog.krp_role}
</p>
  </div>
</div>


     
    </div>
  </div>
)}


{selectedImage && (
  <div
    className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      alt="Preview"
      className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
    />
  </div>
)}


     
    </div>
  );
}
