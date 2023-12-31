"use client"

import Block from "@/components/blocks/block-types/block/Block";
import {BuildingBlock, droppableIds} from "@/app/page";
import {Droppable} from "react-beautiful-dnd";

import styles from "./TunnelBuilder.module.css";

export default function TunnelBuilder({blocks, selectedBlock, onBlockSelectHandler, onBlockDelete}: {
    blocks: BuildingBlock[],
    selectedBlock?: BuildingBlock,
    onBlockSelectHandler?: (blockId: string) => void,
    onBlockDelete?: (blockId: string) => void,
}) {
    return (
        <div className={styles.builder}>
            <div className={styles.info}>
                <p className={styles.heading}>Blocks</p>
                <p>drag and drop</p>
            </div>
            <Droppable droppableId={droppableIds.workPlaceId}>
                {(provided, snapshot) =>
                    <div className={styles.workPlace}
                         ref={provided.innerRef}
                        // @ts-ignore
                         placeholder={provided.placeholder}
                         {...provided.droppableProps}>
                        {blocks.map((block, index) =>
                            <Block key={block.id}
                                   block={block}
                                   index={index}
                                   selectedBlock={selectedBlock}
                                   onBlockSelect={onBlockSelectHandler}
                                   onBlockDelete={onBlockDelete}
                            />
                        )}
                        {provided.placeholder}
                    </div>
                }
            </Droppable>
        </div>
    )
}