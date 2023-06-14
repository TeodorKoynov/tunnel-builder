import {useEffect, useState} from "react";

import styles from "./BlockDescriptionSettings.module.css";

export default function BlockDescriptionSettings({
                                                     description: initialDescription,
                                                     onSave
                                                 }: {
    description: string,
    onSave?: (newSettings: { description: string }) => void
}) {
    const [description, setDescription] = useState(initialDescription);

    useEffect(() => {
        setDescription(initialDescription);
    }, [initialDescription])

    const submitHandler = (e: any) => {
        e.preventDefault();

        console.log("Description", description);
        const newSettings = {description}
        onSave?.(newSettings);
    }


    return <form className={styles.form} onSubmit={e => submitHandler(e)} action="">
        <div className={styles.control}>
            <label htmlFor="description">Description</label>
            <textarea id={"description"} value={description}
                   onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <button type={"submit"}>Save</button>
    </form>
}