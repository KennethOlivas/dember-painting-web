"use client"
import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


export const spring = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    duration: 2
};

type BoxProps = {
    id: number;
    backgroundUrl: string;
};

const ImageBox: FC<BoxProps> = ({
    id,
    backgroundUrl,
}) => {
    const [isClicked, setIsClicked] = useState(false);

    // if clicked cant scroll 

    useEffect(() => {
        if (isClicked) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isClicked]);



    return (
        <>
            <motion.div className="p-2 cursor-pointer h-auto w-auto" layoutId={`box-${id}`}>
                <motion.img
                    layoutId={`header-${id}`}
                    className="flex items-center justify-center w-full h-full bg-cover bg-no-repeat"
                    src={backgroundUrl}
                    alt="image box"
                    onClick={() => setIsClicked(!isClicked)}
                ></motion.img>
            </motion.div>
            <AnimatePresence>
                {isClicked && (
                    <>
                        <motion.div
                            animate
                            transition={spring}
                            key={`item`}
                            layoutId={`yo-mama-${id}`}
                            onClick={() => setIsClicked(!isClicked)}
                            className="absolute top-0 left-0 cursor-pointer will-change-[opacity] p-4 flex-col z-[2] w-full h-full"
                        >
                            <motion.img
                                animate
                                transition={spring}
                                src={backgroundUrl}
                                layoutId={`yo-mama-header-${id}`}
                                className="bg-cover bg-no-repeat  h-full rounded-lg m-auto"
                            ></motion.img>
                        </motion.div>
                        <motion.div animate className="fixed h-[100vh] w-[100vh] opacity-50 bg-black z-[1] top-0"></motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default ImageBox;
