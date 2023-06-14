import styles from "./BlockDescription.module.css";

export interface BlockDescriptionProps {
    description?: string,
    simplified?: boolean
}

export default function BlockDescription({description = 'Default description', simplified}: BlockDescriptionProps) {
    if (simplified) {
        return (
            <div className={styles.simplifiedContainer}>
                <p className={styles.blockName}>Description Block</p>
                <div className={`${styles.container} ${styles.dashedBorder}`}>
                    <p className={styles.simplifiedDescription}>(description)</p>
                </div>
            </div>

        )
    }

    return (
        <div className={styles.description}>
            <p>{description}</p>
        </div>
    )
}