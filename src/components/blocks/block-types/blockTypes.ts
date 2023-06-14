import {BuildingBlock} from "@/app/page";

export enum blockTypes {
    heading = 'BlockHeading',
    description = 'BlockDescription',
    image = 'BlockImage',
}

// export const getBlockTypeSettings = (block: BuildingBlock) => {
//     switch (block.type) {
//         case blockTypes.heading:
//             return block.settings as BlockHeadingSettings;
//         case blockTypes.description:
//             return block.settings as BlockDescriptionSettings;
//     }
// }
//
export type BlockHeadingSettings = {
    heading?: string,
    text?: string
}

export type BlockDescriptionSettings = {
    description?: string
}
