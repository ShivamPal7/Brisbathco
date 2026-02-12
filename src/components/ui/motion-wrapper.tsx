"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, type ReactNode } from "react";

type MotionWrapperProps = HTMLMotionProps<"div"> & {
    children?: ReactNode;
};

type MotionSectionProps = HTMLMotionProps<"section"> & {
    children?: ReactNode;
};

type MotionAsideProps = HTMLMotionProps<"aside"> & {
    children?: ReactNode;
};

export const MotionDiv = forwardRef<HTMLDivElement, MotionWrapperProps>(
    function MotionDiv(props, ref) {
        return <motion.div ref={ref} {...props} />;
    }
);

export const MotionSection = forwardRef<HTMLElement, MotionSectionProps>(
    function MotionSection(props, ref) {
        return <motion.section ref={ref} {...props} />;
    }
);

export const MotionAside = forwardRef<HTMLElement, MotionAsideProps>(
    function MotionAside(props, ref) {
        return <motion.aside ref={ref} {...props} />;
    }
);
