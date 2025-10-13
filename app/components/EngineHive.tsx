'use client';
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaUnity } from "react-icons/fa";
import { 
  SiGodotengine, 
  SiUnrealengine, 
  SiConstruct3,
  SiGamemaker,
  SiBlender,
  SiAutodesk,
  SiCryengine,
  SiGamejolt
} from "react-icons/si";

// Optimized hive data with consistent typing
type HiveItem = {
  name: string;
  icon: React.ReactNode;
  margin?: string;
};

const hiveData: HiveItem[][] = [
  [
    { name: "Unity", icon: <FaUnity size={36} />, margin: "ml-21" },
    { name: "Unreal", icon: <SiUnrealengine size={36} />, margin: "mx-1" },
    { name: "Godot", icon: <SiGodotengine size={36} /> },
    { name: "GameMaker", icon: <SiGamemaker size={36} />, margin: "ml-1" },
  ],
  [
    { name: "Blender", icon: <SiBlender size={36} />, margin: "mr-1" },
    { name: "Maya", icon: <SiAutodesk size={36} /> },
    { name: "Construct", icon: <SiConstruct3 size={36} />, margin: "mx-1" },
    { name: "Git", icon: <FaGithub size={36} /> },
  ],
  [
    { name: "CryEngine", icon: <SiCryengine size={36} />, margin: "ml-63" },
    { name: "GameJolt", icon: <SiGamejolt size={36} />, margin: "ml-1" },
  ],
];

const containerVariants = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } } 
};

const cellEnterVariants = { 
  hidden: { y: -50, opacity: 0 }, 
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } } 
};

const hiveVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1, 
    zIndex: 10, 
    transition: { type: "spring" as const, stiffness: 400, damping: 10 } 
  },
  glow: { 
    scale: [1, 1.1, 1], 
    transition: { 
      duration: 2, 
      ease: "easeInOut" as const, 
      repeat: Infinity 
    } 
  }
};

const iconVariants = { 
  rest: { scale: 1 }, 
  hover: { 
    scale: 1.2, 
    transition: { type: "spring" as const, stiffness: 300, damping: 15 } 
  } 
};

const textVariants = { 
  rest: { opacity: 0, y: 10 }, 
  hover: { opacity: 1, y: 0, transition: { duration: 0.2 } } 
};

type HiveCellProps = {
  icon: React.ReactNode;
  name: string;
  isGlowing: boolean;
};

const HiveCell = React.memo<HiveCellProps>(({ icon, name, isGlowing }) => {
  return (
    <motion.div
      variants={hiveVariants}
      initial="rest"
      whileHover="hover"
      animate={isGlowing ? "glow" : "rest"}
      className={`relative w-[80px] h-[92px] 
                 bg-white/10 backdrop-blur-md 
                 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]
                 flex items-center justify-center cursor-pointer
                 led-border`}
    >
      <motion.div variants={iconVariants} className="text-white">
        {icon}
      </motion.div>
      
      <motion.div variants={textVariants} className="absolute bottom-[-30px] text-center w-full">
        <span className="text-sm font-semibold text-gray-800 bg-white/80 rounded px-2 py-0.5 backdrop-blur-sm">
          {name}
        </span>
      </motion.div>
    </motion.div>
  );
});

const EngineHive = () => {
  const [glowingIndex, setGlowingIndex] = useState<number | null>(null);
  
  // Memoize total cells calculation
  const totalCells = useMemo(() => hiveData.flat().length, []);

  // Memoize the interval setup function
  const setupGlowInterval = useCallback(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * totalCells);
      setGlowingIndex(randomIndex);
    }, 2000);
    return () => clearInterval(interval);
  }, [totalCells]);

  useEffect(() => {
    return setupGlowInterval();
  }, [setupGlowInterval]);

  return (
    <div className="w-full md:min-h-screen flex items-center justify-center py-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {hiveData.map((row, rowIndex) => {
          let cellIndexCounter = rowIndex === 0 ? 0 : hiveData.slice(0, rowIndex).flat().length;
          
          return (
            <div
              key={rowIndex}
              className={`flex justify-center ${rowIndex !== hiveData.length - 1 ? "mb-[-20px]" : ""}`}
            >
              {row.map((cell, cellIndexInRow) => {
                const currentIndex = cellIndexCounter + cellIndexInRow;
                return (
                  <motion.div
                    key={cell.name}
                    variants={cellEnterVariants}
                    className={cell.margin || ""}
                  >
                    <HiveCell
                      icon={cell.icon}
                      name={cell.name}
                      isGlowing={glowingIndex === currentIndex}
                    />
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default EngineHive;