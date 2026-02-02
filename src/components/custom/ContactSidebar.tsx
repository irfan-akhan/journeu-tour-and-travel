"use client";

import ExpertTeam from "./ExpertTeam";
import SocialMediaLinks from "./SocialMediaLinks";
import ResponseTimeSLA from "./ResponseTimeSLA";
import { motion } from "framer-motion";

export default function ContactSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-4 sm:space-y-6"
    >
      <ExpertTeam />
      <SocialMediaLinks />
      <ResponseTimeSLA />
    </motion.div>
  );
}
