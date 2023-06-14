import styles from "./BlockDescription.module.css";

export interface BlockDescriptionProps {
    description?: string,
}

export default function BlockDescription({description = 'Default description'}: BlockDescriptionProps) {
    return (
        <div className={styles.description}>
            <p>{description}</p>
        </div>
    )
}