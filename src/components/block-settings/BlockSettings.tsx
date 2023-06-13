"use client";

import {BuildingBlock} from "@/app/page";
import {blockTypes,} from "@/components/blocks/block-types/blockTypes";

import styles from "./BlockSettings.module.css";
import {useEffect, useState} from "react";
import BlockHeadingSettings from "@/components/blocks/block-types/block-heading/BlockHeadingSettings";
import BlockDescriptionSettings from "@/components/blocks/block-types/block-description/BlockDescriptionSettings";

export default function BlockSettings({selectedBlock: initialBlock, onSettingsChange}: {
    selectedBlock: BuildingBlock,
    onSettingsChange?: (newSettings: any) => void
}) {
    const [selectedBlock, setSelectedBlock] = useState<BuildingBlock>(initialBlock);

    console.log("Rerender")

    useEffect(() => {
        console.log("effect")

        setSelectedBlock({...initialBlock, settings: {...initialBlock.settings}})
    }, [initialBlock, setSelectedBlock])

    return (<div className={styles.container}>
        <div className={styles.info}>
            <p className={styles.heading}>Settings</p>
            <p>drag and drop</p>
        </div>
        <div className={styles.settings}>
            {selectedBlock.type === blockTypes.heading &&
                <BlockHeadingSettings heading={selectedBlock.settings.heading} text={selectedBlock.settings.text}
                                      onSave={onSettingsChange}/>
            }
            {selectedBlock.type === blockTypes.description &&
                <BlockDescriptionSettings description={selectedBlock.settings.description}
                                          onSave={onSettingsChange}/>
            }
        </div>
    </div>)
}

// const getRenderBlockSettings = (block: BuildingBlock) => {
//     // let blockSettings;
//     let renderSettingsForm;
//
//     switch (block.type) {
//         case blockTypes.heading:
//             // blockSettings = (selectedBlock.settings as BlockHeadingSettings)
//             return renderSettingsForm = renderHeadingSettingsForm;
//         // return {blockSettings, renderSettingsForm}
//         case blockTypes.description:
//             // blockSettings = (selectedBlock.settings as BlockDescriptionSettings)
//             return renderSettingsForm = renderDescriptionSettingsForm;
//         // return {blockSettings, renderSettingsForm}
//     }
// }
//
//
// const renderHeadingSettingsForm = (headingSettings: BlockHeadingSettings, changeHandle: (e: FormEvent, inputName: string) => void) => {
//     // console.log("headingSettings", headingSettings)
//
//     return <form action="">
//         <label htmlFor="heading">Heading</label>
//         <input id={"heading"} type="text" defaultValue={headingSettings.heading}
//                onChange={(e) => changeHandle(e, 'heading')}/>
//         <label htmlFor="text">Text</label>
//         <input id={"text"} type="text" defaultValue={headingSettings.text} onChange={(e) => changeHandle(e, 'text')}/>
//     </form>
// }
//
// const renderDescriptionSettingsForm = (descriptionSettings: BlockDescriptionSettings, changeHandle: (e: FormEvent, inputName: string) => void) => {
//     // console.log("descriptionSettings", descriptionSettings)
//
//     return <form action="">
//         <label htmlFor="description">Description</label>
//         <input id={"description"} type="text" defaultValue={descriptionSettings.description}
//                onChange={(e) => changeHandle(e, 'description')}/>
//     </form>
// }

