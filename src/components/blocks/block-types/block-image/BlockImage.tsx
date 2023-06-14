import Image from "next/image";

import styles from "./BlockImage.module.css";

interface BlockImageProps {
    imgUrl: string,
    text?: string,
    alt: string,
    height?: number,
    width?: number,
    simplified?: boolean,
}

export default function BlockImage({imgUrl, text, alt, height, width, simplified }: BlockImageProps) {
    if (simplified) {
        return (
            <div className={styles.simplifiedContainer}>
                <p className={styles.blockName}>Image Block</p>
                <div className={`${styles.row} ${styles.dashedBorder}`}>
                    <div className={styles.imgSimplified}/>
                    <p className={styles.simplifiedText}>(description)</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Image src={imgUrl} alt={alt} height={height} width={width}/>
            <p>{text}</p>
        </div>
    )
}