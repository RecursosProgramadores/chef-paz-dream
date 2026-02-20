import { motion } from 'framer-motion';

interface TropicalLeafProps {
    className?: string;
    delay?: number;
    scale?: number;
    rotate?: number;
    color?: string;
}

const TropicalLeaf = ({ className, delay = 0, scale = 1, rotate = 0, color = 'text-primary/20' }: TropicalLeafProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0, rotate: rotate - 20 }}
        animate={{
            opacity: 0.6,
            scale: scale,
            rotate: [rotate - 5, rotate + 5, rotate - 5],
            y: [0, -15, 0]
        }}
        transition={{
            opacity: { duration: 1, delay },
            scale: { duration: 1, delay },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }
        }}
        className={`absolute pointer-events-none drop-shadow-2xl ${className}`}
    >
        <svg viewBox="0 0 100 100" fill="currentColor" className={`w-full h-full ${color}`}>
            <path d="M50 0 C30 20 10 50 10 80 C10 90 30 100 50 100 C70 100 90 90 90 80 C90 50 70 20 50 0 Z M50 15 C65 30 75 55 75 80 C75 85 65 90 50 90 C35 90 25 85 25 80 C25 55 35 30 50 15 Z" />
        </svg>
    </motion.div>
);

export default TropicalLeaf;
