"use client";

import React, {useState, useEffect, useRef} from "react";
import {motion} from "framer-motion";

export default function Carousel({children, className}: { className?: string, children: React.ReactNode }) {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth);
        }
    }, []);

    console.log(width)
    return (
        <motion.div ref={carouselRef} whileTap={{cursor: "grabbing"}}
                    className={"max-w-full cursor-grab overflow-hidden relative " + className}>
            <motion.div
                drag="x"
                dragConstraints={{
                    right: 0,
                    left: -width,
                }}
                dragElastic={0.1}
                dragMomentum={true}
                className="flex max-w-max"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
