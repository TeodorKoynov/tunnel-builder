"use client"

import {DragDropContext} from 'react-beautiful-dnd';
import {useEffect, useState} from "react";
import BlockList from "@/components/blocks/block-list/BlockList";
import TunnelBuilder from "@/components/tunnel-builder/TunnelBuilder";
import BlockSettings from "@/components/block-settings/BlockSettings";

import {BlockDescriptionSettings, BlockHeadingSettings, blockTypes} from "@/components/blocks/block-types/blockTypes";


import styles from './page.module.css'


export enum droppableIds {
    workPlaceId = 'workPlace',
    blocksList = 'blockList'
}

const BLOCKS_TO_DRAG: BuildingBlock[] = [
    {id: "edit", name: "Heading", type: blockTypes.heading, settings: {text: 'This is not', heading: 'A test'}},
    {id: "title", name: "Description", type: blockTypes.description, settings: {description: 'This is a description'}},
    {id: "home", name: "Home block", type: blockTypes.heading, settings: {}},
]

const BLOCKS_IN_USE: BuildingBlock[] = [
    {id: "test 1", name: "test 1", type: blockTypes.heading, settings: {text: 'This is not', heading: 'A test'}},
    {id: "test 2", name: "test 2", type: blockTypes.description, settings: {description: 'This is a description'}},
    {id: "test 3", name: "test 3", type: blockTypes.heading, settings: {text: 'Eazy', heading: 'I tell you'}},
]

export interface BuildingBlock {
    id: string,
    name: string,
    type: blockTypes,
    settings: BlockHeadingSettings | BlockDescriptionSettings | object,
}

export default function Home() {
    const [workPlaceBlocks, setWorkPlaceBlocks] = useState<BuildingBlock[]>(BLOCKS_IN_USE);
    const [selectedBlock, setSelectedBlock] = useState<BuildingBlock>();

    useEffect(() => {
        setWorkPlaceBlocks(BLOCKS_IN_USE);
    }, [])

    const onBlockSelectHandler = (blockId: string) => {
        const newSelectedBlock = workPlaceBlocks.find(block => block.id === blockId);

        if (newSelectedBlock) {
            // console.log("newSelectedBlock", newSelectedBlock)
            setSelectedBlock(newSelectedBlock);
        }
    }

    const onSettingsChangedHandler = (newSettings: any) => {
        // @ts-ignore
        const updatedSelectedBlock = {...selectedBlock, settings: newSettings}
        // @ts-ignore
        setSelectedBlock(updatedSelectedBlock)
        const updatedWorkPlaceBlocks = workPlaceBlocks.map((workPlaceBlock) => {
            if (workPlaceBlock.id === updatedSelectedBlock.id) {
                return updatedSelectedBlock;
            }

            return workPlaceBlock;
        })
        // @ts-ignore
        setWorkPlaceBlocks([...updatedWorkPlaceBlocks]);
        return;
    }

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
                newWorkingPlaces.splice(destination.index, 0, {...blockToAdd, id: Math.random().toString()});
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
                        <TunnelBuilder onBlockSelectHandler={onBlockSelectHandler} blocks={workPlaceBlocks}/>
                    </div>
                    <div className={styles.blockSettings}>
                        {selectedBlock &&
                            <BlockSettings onSettingsChange={onSettingsChangedHandler} selectedBlock={selectedBlock}/>}
                    </div>
                </div>
            </div>
        </DragDropContext>
    )
}
