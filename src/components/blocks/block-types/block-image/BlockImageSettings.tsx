"use client"

import {useEffect, useState} from "react";

import styles from "./BlockImageSettings.module.css";

export default function BlockImageSettings({
                                               imgUrl: initialImgUrl,
                                               text: initialText,
                                               alt: initialAlt,
                                               height: initialHeight,
                                               width: initialWidth,
                                               onSave
                                           }: {
    imgUrl: string,
    text?: string,
    alt: string,
    height: number,
    width: number,
    onSave?: (newSettings: {
        imgUrl: string,
        text?: string,
        alt: string,
        height: number,
        width: number,
    }) => void
}) {
    const [imgUrl, setImgUrl] = useState(initialImgUrl);
    const [text, setText] = useState(initialText);
    const [alt, setAlt] = useState(initialAlt);
    const [height, setHeight] = useState(initialHeight);
    const [width, setWidth] = useState(initialWidth);

    console.log("Text", text)

    useEffect(() => {
        setImgUrl(initialImgUrl);
        setText(initialText);
        setAlt(initialAlt);
        setHeight(initialHeight);
        setWidth(initialWidth);
    }, [initialImgUrl, initialText, initialAlt, initialHeight, initialWidth])

    const submitHandler = (e: any) => {
        e.preventDefault();

        const newSettings = {imgUrl, text, alt, height, width};
        onSave?.(newSettings);
    }

    return (
        <form className={styles.form} onSubmit={(e) => submitHandler(e)} action="">
            <div className={styles.control}>
                <label htmlFor="text">Img Url</label>
                <input id={"imgUrl"} type="text" value={imgUrl}
                       onChange={(e) => setImgUrl(e.target.value)}/>
            </div>

            <div className={styles.control}>
                <label htmlFor="text">Text</label>
                <input id={"text"} type="text" value={text}
                       onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className={styles.control}>
                <label htmlFor="alt">alt</label>
                <input id={"alt"} type="text" value={alt}
                       onChange={(e) => setAlt(e.target.value)}/>
            </div>

            <div className={styles.control}>
                <label htmlFor="height">Height</label>
                <input id={"height"} type="number" value={height}
                       onChange={(e) => setHeight(+e.target.value)}/>

            </div>

            <div className={styles.control}>
                <label htmlFor="width">Width</label>
                <input id={"width"} type="number" value={width}
                       onChange={(e) => setWidth(+e.target.value)}/>
            </div>

            <button type={"submit"}>Save</button>
        </form>
    )
}