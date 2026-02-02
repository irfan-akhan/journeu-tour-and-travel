"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Compass } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Kashmir: Paradise On Earth - A Complete Travel Guide",
    excerpt: "Discover the breathtaking beauty of Kashmir with our comprehensive guide covering the best times to visit, must-see attractions, and local experiences.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    category: "Travel Guide",
    date: "Dec 15, 2024",
    readTime: "8 mins read",
    author: "Sarah Johnson",
    gradient: "from-[#1BA5B8]/80 to-[#0A4D5C]/80",
  },
  {
    id: 2,
    title: "10 Hidden Gems in Ladakh You Must Explore",
    excerpt: "Beyond the popular tourist spots, Ladakh offers stunning hidden treasures. Explore remote monasteries, secret valleys, and pristine lakes off the beaten path.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    category: "Adventure",
    date: "Dec 10, 2024",
    readTime: "6 mins read",
    author: "Michael Chen",
    gradient: "from-[#FFD84D]/80 to-[#FFA500]/80",
  },
  {
    id: 3,
    title: "Best Time to Visit Kashmir: Seasonal Travel Guide",
    excerpt: "From spring blooms to winter snow, each season in Kashmir offers unique experiences. Find out when to visit based on your travel preferences.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
    category: "Seasonal Guide",
    date: "Dec 5, 2024",
    readTime: "5 mins read",
    author: "Priya Sharma",
    gradient: "from-[#0A4D5C]/80 to-[#1BA5B8]/80",
  },
];

export default function BlogPreview() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-[#FFD84D]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#1BA5B8]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1BA5B8]/10 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Compass className="w-4 h-4 text-[#1BA5B8]" />
            <span className="text-[#1BA5B8] font-semibold text-sm tracking-wider uppercase">
              Travel Insights
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-ubuntu">
            Latest Travel Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Expert tips, destination guides, and inspiring travel stories to help you plan your perfect Kashmir adventure
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Link href={`/blog/${post.id}`}>
                <motion.article
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col"
                  whileHover={{ y: -10 }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${post.image})`,
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#1BA5B8] text-xs font-semibold rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/50 rounded-br-2xl" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1BA5B8] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] flex items-center justify-center text-white font-semibold text-sm">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {post.author}
                          </p>
                          <p className="text-xs text-gray-500">Travel Expert</p>
                        </div>
                      </div>

                      {/* Read More Arrow */}
                      <motion.div
                        className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#1BA5B8] transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/blog">
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Read All Articles</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
