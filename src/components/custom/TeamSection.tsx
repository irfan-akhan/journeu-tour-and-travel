"use client";

import { motion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";
import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      name: "Imdad Bashir",
      role: "CEO & Sales Executive",
      image: "/team/team2.png",
      // bio: "3+ years of experience in Kashmir tourism. Passionate about sustainable travel and cultural preservation.",
    },
    {
      name: "Arif Badoo",
      role: "Creative Director",
      image: "/team/team6.png",
      // bio: "3+ years of experience in Kashmir tourism. Passionate about sustainable travel and cultural preservation.",
    },
    {
      name: "Mohsin Bashir",
      role: "Driver",
      image: "/team/team4.png",
      // bio: "Specializes in customized itineraries. Helps travelers discover their perfect Kashmir adventure.",
    },
    {
      name: "Ameer Afzal",
      role: "Managing Director & Travel Consultant",
      image: "/team/team1.png",
      // bio: "Expert in logistics and customer service. Ensures every journey runs smoothly from start to finish.",
    },
    {
       name: "Rayees Wani",
      role: "Trip coordinator",
      image: "/team/team9.png",
      // bio: "Specializes in customized itineraries. Helps travelers discover their perfect Kashmir adventure.",
    },
    {
      name: "Furqan Ahmad",
      role: "Travel Consultant",
      image: "/team/furqan.png",
      // bio: "Expert in logistics and customer service. Ensures every journey runs smoothly from start to finish.",
    },
    {
       name: "Ishfaq Ahmad",
      role: "Trip coordinator",
      image: "/team/team7.png",
      // bio: "Specializes in customized itineraries. Helps travelers discover their perfect Kashmir adventure.",
    },
    {
      name: "Yasir Nazir",
      role: "Driver",
      image: "/team/team3.png",
      // bio: "Licensed guide with deep knowledge of Himalayan culture, history, and geography. Speaks 5 languages.",
    },
   
    {
      name: "Aabid Mir",
      role: "Driver",
      image: "/team/team10.png",
      // bio: "Licensed guide with deep knowledge of Himalayan culture, history, and geography. Speaks 5 languages.",
    },
    
    {
       name: "Adil Reshi",
      role: "Trip coordinator",
      image: "/team/team5.png",
      // bio: "Specializes in customized itineraries. Helps travelers discover their perfect Kashmir adventure.",
    },
     {
       name: "Sheikh Faazil",
      role: "Trip coordinator",
      image: "/team/faazil.png",
      // bio: "Specializes in customized itineraries. Helps travelers discover their perfect Kashmir adventure.",
    },
    
    
     {
      name: "Bashir Ahmad Wani",
      role: "Driver",
      image: "/team/team8.png",
      // bio: "Specializes in customized itineraries. Helps travelers discover their perfect Kashmir adventure.",
    },
  ];

  // const socialLinks = [
  //   { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", url: "#" },
  //   { name: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", url: "#" },
  //   { name: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01", url: "#" },
  //   { name: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z", url: "#" },
  // ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1BA5B8]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#1BA5B8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Why Choose Us
          </span>
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-4">
            Meet Our <span className="text-[#1BA5B8]">Crew Members</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert guides and travel professionals dedicated to making your journey unforgettable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 justify-center align-center">
                {/* Image with overlay */}
                 
								<Image src={member.image} alt={member.name} width={320} height={200}/>

                {/* Content */}
                <div className="p-6 py-0 text-center">
                  <h3 className="font-ubuntu text-xl font-bold text-[#0A4D5C] mb-1 group-hover:text-[#1BA5B8] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#1BA5B8] font-semibold mb-3 text-sm">{member.role}</p>
                  {/* <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
