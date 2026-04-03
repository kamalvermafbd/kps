import React from "react";
import { motion } from "motion/react";
import { Calendar, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MOCK_BLOGS = [
  {
    slug: "benefits-of-physiotherapy-for-back-pain",
    title: "5 Benefits of Physiotherapy for Chronic Back Pain",
    excerpt: "Learn how targeted physical therapy can help you manage long-term back pain without surgery.",
    date: "March 25, 2026",
    image: "https://picsum.photos/seed/backpain/800/400"
  },
  {
    slug: "recovering-from-sports-injuries",
    title: "The Ultimate Guide to Recovering from Sports Injuries",
    excerpt: "A step-by-step approach to rehabilitation for athletes of all levels.",
    date: "March 18, 2026",
    image: "https://picsum.photos/seed/sports/800/400"
  },
  {
    slug: "post-surgery-rehab-importance",
    title: "Why Post-Surgery Rehabilitation is Critical for Success",
    excerpt: "Optimizing your surgical outcomes with professional physiotherapy guidance.",
    date: "March 10, 2026",
    image: "https://picsum.photos/seed/surgery/800/400"
  }
];

export default function BlogList() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Health & Wellness Blog</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Expert advice, recovery tips, and the latest in physiotherapy from the specialists at KRP Healthcare.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {MOCK_BLOGS.map((blog, i) => (
          <motion.article 
            key={blog.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="h-64 overflow-hidden bg-white p-4 border-b border-slate-100">
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
                <span>{blog.date}</span>
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
          </motion.article>
        ))}
      </div>
    </div>
  );
}
