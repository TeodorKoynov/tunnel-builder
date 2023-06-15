"use client";

import {BuildingBlock} from "@/app/page";
import {blockTypes,} from "@/components/blocks/block-types/blockTypes";

import styles from "./BlockSettings.module.css";
import {useEffect, useState} from "react";
import BlockHeadingSettings from "@/components/blocks/block-types/block-heading/BlockHeadingSettings";
import BlockDescriptionSettings from "@/components/blocks/block-types/block-description/BlockDescriptionSettings";
import BlockImageSettings from "@/components/blocks/block-types/block-image/BlockImageSettings";

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

    console.log('selectedBlock', selectedBlock)

    if (selectedBlock === null) {
        return <p>No items</p>
    }

    return (<div className={styles.blockSettings}>
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
            {selectedBlock.type === blockTypes.image &&
                <BlockImageSettings imgUrl={selectedBlock.settings.imgUrl}
                                    text={selectedBlock.settings.text}
                                    alt={selectedBlock.settings.alt}
                                    height={selectedBlock.settings.height}
                                    width={selectedBlock.settings.width}
                                    onSave={onSettingsChange}/>
            }
        </div>
    </div>)
}
