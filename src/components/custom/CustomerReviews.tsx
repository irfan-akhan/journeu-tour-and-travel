"use client";

import { motion } from "framer-motion";
import { Star, ThumbsUp, CheckCircle } from "lucide-react";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  location: string;
  verified: boolean;
  helpful: number;
  images?: string[];
}

interface CustomerReviewsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export default function CustomerReviews({ reviews, averageRating, totalReviews }: CustomerReviewsProps) {
  const ratingDistribution = [
    { stars: 5, percentage: 85, count: 105 },
    { stars: 4, percentage: 12, count: 15 },
    { stars: 3, percentage: 2, count: 3 },
    { stars: 2, percentage: 1, count: 1 },
    { stars: 1, percentage: 0, count: 0 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-2 h-14 bg-gradient-to-b from-[#1BA5B8] to-[#0A4D5C] rounded-full"></div>
        <h2 className="font-ubuntu text-4xl font-bold bg-gradient-to-r from-[#0A4D5C] to-[#1BA5B8] bg-clip-text text-transparent">
          Guest Reviews
        </h2>
      </div>

      {/* Rating Overview */}
      <div className="grid md:grid-cols-3 gap-8 mb-12 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
        {/* Average Rating */}
        <div className="text-center">
          <div className="text-6xl font-black bg-gradient-to-r from-[#0A4D5C] to-[#1BA5B8] bg-clip-text text-transparent mb-2">
            {averageRating}
          </div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#FFD84D] text-[#FFD84D]" />
            ))}
          </div>
          <p className="text-gray-600 font-semibold">{totalReviews} Reviews</p>
        </div>

        {/* Rating Distribution */}
        <div className="md:col-span-2 space-y-3">
          {ratingDistribution.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-4">
              <div className="flex items-center gap-1 w-20">
                <span className="font-bold text-gray-700">{rating.stars}</span>
                <Star className="w-4 h-4 fill-[#FFD84D] text-[#FFD84D]" />
              </div>
              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FFD84D] to-[#FFC700]"
                  style={{ width: `${rating.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-12 text-right">{rating.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-gray-200 pb-6 last:border-0"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {review.name.charAt(0)}
              </div>

              <div className="flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                      {review.verified && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{review.location}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "fill-[#FFD84D] text-[#FFD84D]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Title */}
                <h5 className="font-bold text-gray-900 mb-2">{review.title}</h5>

                {/* Review Comment */}
                <p className="text-gray-700 leading-relaxed mb-4">{review.comment}</p>

                {/* Review Images */}
                {review.images && review.images.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {review.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Review ${idx + 1}`}
                        className="w-24 h-24 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform"
                      />
                    ))}
                  </div>
                )}

                {/* Helpful Button */}
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1BA5B8] transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
