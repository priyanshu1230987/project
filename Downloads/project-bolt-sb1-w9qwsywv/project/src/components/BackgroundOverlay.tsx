import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundOverlay = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.4, 0.3]);
  const glowIntensity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base dark background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.9) 0%, rgba(0, 0, 0, 1) 100%)'
        }}
      />

      {/* 4K Nightclub Scene Overlay with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: imageY,
          opacity: imageOpacity,
        }}
      >
        {/* Simulated 4K Nightclub Scene */}
        <div className="absolute inset-0">
          {/* Glossy Black Floor with Reflections */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3">
            {/* Floor reflections */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Light reflections on floor */}
            <motion.div
              className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 right-1/3 w-24 h-24 bg-pink-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute bottom-0 left-1/2 w-20 h-20 bg-purple-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>

          {/* Dancing Crowd Silhouettes */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2">
            {/* Multiple rows of dancing figures */}
            <div className="flex justify-between items-end px-8 pb-6">
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  style={{
                    height: `${Math.random() * 30 + 25}px`,
                  }}
                >
                  {/* Person silhouette */}
                  <motion.div
                    className="w-4 h-full bg-black/70 rounded-full"
                    style={{
                      opacity: Math.random() * 0.5 + 0.3,
                    }}
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 1.5 + Math.random() * 1,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                  {/* Arms */}
                  <motion.div
                    className="absolute top-1/3 left-1/2 w-6 h-1 bg-black/60 rounded-full"
                    style={{
                      opacity: Math.random() * 0.4 + 0.2,
                    }}
                    animate={{
                      rotate: [0, 45, -45, 0],
                    }}
                    transition={{
                      duration: 1.2 + Math.random() * 0.8,
                      repeat: Infinity,
                      delay: Math.random() * 1.5,
                    }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Second row of dancers */}
            <div className="flex justify-between items-end px-12 pb-4">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`row2-${i}`}
                  className="relative"
                  style={{
                    height: `${Math.random() * 25 + 20}px`,
                  }}
                >
                  <motion.div
                    className="w-3 h-full bg-black/60 rounded-full"
                    style={{
                      opacity: Math.random() * 0.4 + 0.2,
                    }}
                    animate={{
                      y: [0, -6, 0],
                      rotate: [0, -3, 3, 0],
                    }}
                    transition={{
                      duration: 1.8 + Math.random() * 1.2,
                      repeat: Infinity,
                      delay: Math.random() * 1.8,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* DJ Booth with LED Screens */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="w-32 h-16 bg-black/80 rounded-lg border border-blue-500/50"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                  '0 0 40px rgba(59, 130, 246, 0.6)',
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* LED Screen Content */}
              <div className="p-2">
                <motion.div
                  className="w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded"
                  animate={{
                    scaleX: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-3/4 h-1 bg-pink-400 rounded mt-1"
                  animate={{
                    scaleX: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Glowing Bar Counter */}
          <div className="absolute bottom-1/4 left-1/6 right-1/6 h-4">
            <motion.div
              className="w-full h-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Bar lights */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`bar-light-${i}`}
                className="absolute bottom-0 w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  left: `${(i * 12.5) + 5}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>



          {/* Floating Light Orbs */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-400/60 rounded-full blur-sm"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-2 h-2 bg-pink-400/70 rounded-full blur-sm"
            animate={{
              y: [0, -15, 0],
              x: [0, -8, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-2/3 left-1/3 w-2.5 h-2.5 bg-purple-400/50 rounded-full blur-sm"
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Atmospheric haze/smoke effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/15" />
        </div>
      </motion.div>

      {/* Enhanced RGB Glow Effects */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: glowIntensity,
        }}
      >
        {/* Electric Blue glow */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Hot Pink glow */}
        <motion.div 
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Purple glow center */}
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      {/* Animated gradient overlay for atmosphere */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(59, 130, 246, 0.04) 0%, rgba(147, 51, 234, 0.04) 50%, rgba(236, 72, 153, 0.04) 100%)',
            'linear-gradient(45deg, rgba(236, 72, 153, 0.04) 0%, rgba(59, 130, 246, 0.04) 50%, rgba(147, 51, 234, 0.04) 100%)',
            'linear-gradient(45deg, rgba(147, 51, 234, 0.04) 0%, rgba(236, 72, 153, 0.04) 50%, rgba(59, 130, 246, 0.04) 100%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default BackgroundOverlay; 