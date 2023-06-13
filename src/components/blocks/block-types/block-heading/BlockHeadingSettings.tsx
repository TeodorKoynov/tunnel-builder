"use client"

import {useEffect, useState} from "react";

export default function BlockHeadingSettings({
                                                 heading: initialHeading,
                                                 text: initialText,
                                                 onSave
                                             }: {
    heading: string,
    text: string,
    onSave?: (newSettings: { heading: string; text: string }) => void
}) {
    const [heading, setHeading] = useState(initialHeading);
    const [text, setText] = useState(initialText);

    useEffect(() => {
        setHeading(initialHeading);
        setText(initialText);

    }, [initialHeading, initialText])

    const submitHandler = (e: any) => {
        e.preventDefault();

        console.log("Heading", heading);
        console.log("Text", text);
        const newSettings = {heading, text}
        onSave?.(newSettings);
    }

    return (
        <form onSubmit={(e) => submitHandler(e)} action="">
            <label htmlFor="heading">Heading</label>
            <input id={"heading"} type="text" value={heading}
                   onChange={(e) => setHeading(e.target.value)}/>
            <label htmlFor="text">Text</label>
            <input id={"text"} type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button type={"submit"}>Save</button>
        </form>
    )
}