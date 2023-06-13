import Block from "@/components/blocks/block-types/block/Block";

import styles from "./Blocks.module.css";
import {Droppable} from "react-beautiful-dnd";
import {droppableIds, BuildingBlock} from "@/app/page";

export default function BlockList({blocks}: { blocks: BuildingBlock[] }) {
    return (

        <div className={styles.blocks}>
            <div className={styles.info}>
                <p className={styles.heading}>Blocks</p>
                <p>drag and drop</p>
            </div>
            <Droppable droppableId={droppableIds.blocksList}>
                {(provided, snapshot) => (
                    <div className={styles.blockList}
                         ref={provided.innerRef}
                        // @ts-ignore
                         placeholder={provided.placeholder}
                         {...provided.droppableProps}>
                        {blocks.map((block, index) =>
                            <Block
                                key={block.id}
                                simplified
                                index={index}
                                block={block}
                            />
                        )}
                    </div>
                )}
            </Droppable>
        </div>
    )
}