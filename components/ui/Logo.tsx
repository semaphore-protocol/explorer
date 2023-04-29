"use client";
import { subtleFadeIn } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Logo() {
  return (
    <motion.div initial="initial" animate="animate">
      <motion.div variants={subtleFadeIn} className="relative overflow-hidden">
        <Image
          src={
            "https://em-content.zobj.net/source/microsoft-teams/337/milky-way_1f30c.png"
          }
          alt="Milky Way icon"
          width={100}
          height={100}
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}
