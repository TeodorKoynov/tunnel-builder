import styles from "./BlockHeading.module.css";

interface BlockHeadingProps {
    heading?: string,
    text?: string,
    simplified?: boolean
}

export default function BlockHeading({heading = "This is a heading", text = "Default", simplified}: BlockHeadingProps) {
    if (simplified) {
        return (
            <div className={styles.simplifiedContainer}>
                <p className={styles.blockName}>
                    Heading Block
                </p>
                <div className={`${styles.container} ${styles.dashedBorder}`}>
                    <h1 className={styles.simplifiedHeading}>(Heading)</h1>
                    <p className={styles.simplofiedInfo}>(additional info)</p>
                </div>
            </div>
        )
    }


    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.info}>{text}</p>
        </div>
    )
}