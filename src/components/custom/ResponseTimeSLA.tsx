"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Zap, AlertCircle, MessageSquare, Phone, Mail, Send, CheckCircle } from "lucide-react";

interface ResponseChannel {
  channel: string;
  time: string;
  icon: any;
  color: string;
}

interface ResponseTimeSLAProps {
  title?: string;
  description?: string;
  successRate?: string;
  channels?: ResponseChannel[];
}

export default function ResponseTimeSLA({
  title = "Our Response Commitment",
  description = "Clear timelines you can count on",
  successRate = "95% of inquiries resolved on first contact",
  channels = [
    { channel: "Emergency Hotline", time: "Immediate", icon: AlertCircle, color: "text-red-600 bg-red-50" },
    { channel: "WhatsApp / Live Chat", time: "5-15 minutes", icon: MessageSquare, color: "text-green-600 bg-green-50" },
    { channel: "Phone Calls", time: "Within 1 hour", icon: Phone, color: "text-blue-600 bg-blue-50" },
    { channel: "Email Inquiries", time: "Within 24 hours", icon: Mail, color: "text-purple-600 bg-purple-50" },
    { channel: "Contact Form", time: "Within 24 hours", icon: Send, color: "text-teal-600 bg-teal-50" },
  ]
}: ResponseTimeSLAProps) {
  return (
    <Card className="p-6 sm:p-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border border-green-200/50 shadow-lg">
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-ubuntu font-bold mb-0.5 sm:mb-1">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-600 font-light leading-tight">{description}</p>
        </div>
      </div>
      <div className="space-y-2 sm:space-y-3">
        {channels.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-2.5 sm:p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-green-200"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center ${item.color}`}>
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="font-semibold text-[10px] sm:text-xs">{item.channel}</span>
              </div>
              <Badge className="bg-green-600 text-white px-2 sm:px-2.5 py-0.5 sm:py-1 font-medium text-[10px] sm:text-xs">{item.time}</Badge>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-green-200/50 flex items-center gap-2 text-[10px] sm:text-xs text-gray-700">
        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">{successRate}</span>
      </div>
    </Card>
  );
}
