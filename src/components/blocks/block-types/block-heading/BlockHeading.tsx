import styles from "./BlockHeading.module.css";

interface BlockHeadingProps {
    heading?: string,
    text?: string
}

export default function BlockHeading({heading = "This is a heading", text = "Default"}: BlockHeadingProps) {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.info}>{text}</p>
        </div>
    )
}