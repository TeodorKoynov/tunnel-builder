"use client"

import styles from "./Block.module.css";
import {Draggable} from "react-beautiful-dnd";
import {BuildingBlock} from "@/app/page";

export default function Block({block, index, simplified = false}: {
    block: BuildingBlock,
    index: number,
    simplified?: boolean
}) {

    if (simplified) {
        return <Draggable draggableId={block.id} index={index}>
            {(provided) => (
                <div className={styles.blockSimplified}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}
                >
                    <p>{block.text}</p>
                </div>
            )}
        </Draggable>
    }

    return (
        // <p>T</p>
        <Draggable draggableId={block.id} index={index}>
            {(provided) => <>
                <div className={styles.block}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}
                >
                    <div>
                        {block.text}
                    </div>
                </div>
                {/*<div className={styles.dragSection}>*/}
                {/*    Drag here to Add*/}
                {/*</div>*/}
            </>}
        </Draggable>
    )
}