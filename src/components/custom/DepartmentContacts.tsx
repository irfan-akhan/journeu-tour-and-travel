"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, LucideIcon } from "lucide-react";

interface Department {
  icon: LucideIcon;
  dept: string;
  phone: string;
  email: string;
  hours: string;
}

interface DepartmentContactsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  departments: Department[];
}

export default function DepartmentContacts({
  title = "Specialized Support Teams",
  subtitle = "Connect With The Right Expert",
  description = "Skip the wait—reach our specialized teams directly for instant, expert assistance",
  departments
}: DepartmentContactsProps) {
  return (
    <section className="py-28 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#1BA5B8] font-semibold mb-3 md:mb-4 tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm">
              {title}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-ubuntu font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
              {subtitle}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed px-4">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="p-8 hover:shadow-2xl transition-all duration-500 h-full border-0 shadow-lg bg-white">
                  <div className="flex items-start gap-5">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-br from-[#1BA5B8]/10 to-[#1BA5B8]/20 rounded-2xl flex items-center justify-center flex-shrink-0"
                    >
                      <Icon className="w-8 h-8 text-[#1BA5B8]" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-ubuntu font-bold text-base sm:text-lg mb-3 sm:mb-4">
                        {dept.dept}
                      </h3>
                      <div className="space-y-2 text-xs sm:text-sm">
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <a href={`tel:${dept.phone}`} className="hover:text-[#1BA5B8]">
                            {dept.phone}
                          </a>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <a href={`mailto:${dept.email}`} className="hover:text-[#1BA5B8] truncate">
                            {dept.email}
                          </a>
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{dept.hours}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
