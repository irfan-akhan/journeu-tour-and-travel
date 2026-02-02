"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mountain, Snowflake, Sun, Flower } from "lucide-react";

export default function PopularDestinations() {
  const destinations = [
    {
      id: "srinagar",
      name: "Srinagar",
      description: "Dal Lake & Mughal Gardens",
      icon: MapPin,
      image: "/popular_destinations/2.png",
    },
    {
      id: "gulmarg",
      name: "Gulmarg",
      description: "Snow Paradise & Skiing",
      icon: Snowflake,
      image: "/popular_destinations/3.png",
    },
    {
      id: "pahalgam",
      name: "Pahalgam",
      description: "Valley of Shepherds",
      icon: Mountain,
      image: "/popular_destinations/4.png",
    },
    {
      id: "sonmarg",
      name: "Sonmarg",
      description: "Meadow of Gold",
      icon: Sun,
      image: "/popular_destinations/5.png",
    },
    {
      id: "vaishno-devi",
      name: "Vaishno Devi",
      description: "Holy Pilgrimage",
      icon: Mountain,
      image: "/popular_destinations/6.png",
    },
    {
      id: "patnitop",
      name: "Patnitop",
      description: "Hill Station Paradise",
      icon: Flower,
      image: "/popular_destinations/7.png",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1BA5B8]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FFD84D]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#1BA5B8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Explore Kashmir
          </span>
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-4">
            Popular <span className="text-[#1BA5B8]">Destinations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bucket list meets bold discoveries in the Himalayas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/destinations/${destination.id}`}>
                <div className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <destination.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-ubuntu text-2xl font-bold text-white mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 mb-3">{destination.description}</p>
                    <span className="text-[#FFD84D] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/destinations"
            className="inline-block px-8 py-4 bg-[#1BA5B8] text-white font-semibold rounded-full hover:bg-[#0A4D5C] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Destinations
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
