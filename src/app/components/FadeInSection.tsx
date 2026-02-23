'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

const defaultTransition = { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] };

type FadeInSectionProps = {
  children: ReactNode;
  /** Jarak dari bawah viewport (0–1) saat animasi trigger. Default 0.12 */
  amount?: number;
  /** Sedikit geser dari bawah (px). Default 28 */
  offsetY?: number;
  /** Hanya animasi sekali. Default true */
  once?: boolean;
  /** Delay sebelum mulai (detik). Default 0 */
  delay?: number;
  className?: string;
};

export default function FadeInSection({
  children,
  amount = 0.12,
  offsetY = 28,
  once = true,
  delay = 0,
  className,
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offsetY, scale: 0.98 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: offsetY, scale: 0.98 }
      }
      transition={{
        ...defaultTransition,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
