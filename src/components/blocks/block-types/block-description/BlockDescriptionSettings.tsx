import {useEffect, useState} from "react";

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


    return <form onSubmit={e => submitHandler(e)} action="">
        <label htmlFor="description">Description</label>
        <input id={"description"} type="text" value={description}
               onChange={(e) => setDescription(e.target.value)}/>
        <button type={"submit"}>Save</button>
    </form>
}