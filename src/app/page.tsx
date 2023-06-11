"use client"

import styles from './page.module.css'
import BlockList from "@/components/blocks/block-list/BlockList";
import TunnelBuilder from "@/components/tunnel-builder/TunnelBuilder";
import BlockSettings from "@/components/block-settings/BlockSettings";

const BLOCKS_TO_DRAG = [
    {id: "edit", text: "Edit block"},
    {id: "title", text: "Title block"},
    {id: "home", text: "Home block"},
]

const BLOCKS_IN_USE = [
    {id: "test 1", text: "test 1"},
    {id: "test 2", text: "test 2"},
    {id: "test 3", text: "test 3"},
]

export enum droppableIds {
    workPlaceId = 'workPlace',
    blocksList = 'blockList'
}

export interface BuildingBlock {
    id: string,
    text: string,
    // simplified?: boolean,
    // index: number,
}

import {DragDropContext} from 'react-beautiful-dnd';
import {useEffect, useState} from "react";

export default function Home() {
    const [workPlaceBlocks, setWorkPlaceBlocks] = useState(BLOCKS_IN_USE);

    useEffect(() => {
        setWorkPlaceBlocks(BLOCKS_IN_USE);
    }, [])

    const onDragEnd = (result: any) => {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        if (destination.droppableId === droppableIds.workPlaceId && source.droppableId === droppableIds.blocksList) {

            console.log(result)

            const blockToAdd = BLOCKS_TO_DRAG.find((block) => block.id === draggableId);
            console.log("Block to be added", blockToAdd);

            const newWorkingPlaces = [...workPlaceBlocks]

            if (blockToAdd) {
                newWorkingPlaces.splice(destination.index, 0, {id: Math.random().toString(), text: blockToAdd.text});
                setWorkPlaceBlocks(newWorkingPlaces);
                return;
            }

            return;
        }

        console.log(result)

        if (destination.droppableId === droppableIds.workPlaceId && source.droppableId === droppableIds.workPlaceId) {
            const newBlocks = workPlaceBlocks;
            const movedBlock = workPlaceBlocks.splice(source.index, 1);
            workPlaceBlocks.splice(destination.index, 0, ...movedBlock);

            console.log(workPlaceBlocks);
            console.log(newBlocks);

            setWorkPlaceBlocks(newBlocks);
            return;
        }

        return;
    }

    return (
        <DragDropContext
            // onDragStart={}
            // onDragUpdate={}
            onDragEnd={onDragEnd}
        >
            <div className={"container"}>
                <div className={styles.layout}>
                    <div className={styles.blocks}>
                        <BlockList blocks={BLOCKS_TO_DRAG}/>
                    </div>
                    <div className={styles.tunnelBuilder}>
                        <TunnelBuilder blocks={workPlaceBlocks}/>
                    </div>
                    <div className={styles.blockSettings}>
                        <BlockSettings/>
                    </div>
                </div>
            </div>
        </DragDropContext>
    )
}
