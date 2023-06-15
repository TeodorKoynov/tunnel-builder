"use client"

import styles from "./Block.module.css";
import {Draggable} from "react-beautiful-dnd";
import {BuildingBlock} from "@/app/page";
import BlockHeading from "@/components/blocks/block-types/block-heading/BlockHeading";
import {blockTypes} from "@/components/blocks/block-types/blockTypes";
import BlockDescription from "@/components/blocks/block-types/block-description/BlockDescription";
import BlockImage from "@/components/blocks/block-types/block-image/BlockImage";

export default function Block({block, index, simplified = false, selectedBlock, onBlockSelect, onBlockDelete}: {
    block: BuildingBlock,
    index: number,
    simplified?: boolean,
    selectedBlock?: BuildingBlock,
    onBlockSelect?: (blockId: string) => void,
    onBlockDelete?: (blockId: string) => void,
}) {
    if (simplified) {
        return <Draggable draggableId={block.id} index={index}>
            {(provided) => (
                <div className={styles.blockSimplified}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}
                >
                    {renderBlockByType(block, simplified)}
                </div>
            )}
        </Draggable>
    }

    const onBlockDeleteHandler = (blockId: string) => {
        onBlockDelete?.(blockId);
    }


    return (
        // <p>T</p>
        <Draggable draggableId={block.id} index={index}>
            {(provided) => <>
                <div className={`${styles.block} ${selectedBlock?.id === block.id && styles.selectedBlock}`}
                     onClick={() => onBlockSelect?.(block.id)}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}
                >
                    {renderBlockByType(block)}
                    {selectedBlock?.id === block.id && (
                        <div className={styles.removeBtn}
                             onClick={() => onBlockDeleteHandler(block.id)}
                        >
                            X
                        </div>
                    )}
                </div>
                {/*<div className={styles.dragSection}>*/}
                {/*    Drag here to Add*/}
                {/*</div>*/}
            </>}
        </Draggable>
    )
}

function renderBlockByType(block: BuildingBlock, simplified: boolean = false) {
    switch (block.type) {
        case blockTypes.heading:
            return <BlockHeading {...block.settings} simplified={simplified}/>
        case blockTypes.description:
            return <BlockDescription {...block.settings} simplified={simplified}/>
        case blockTypes.image:
            return <BlockImage {...block.settings} simplified={simplified}/>
    }
}