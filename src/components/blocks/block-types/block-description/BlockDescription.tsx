export interface BlockDescriptionProps {
    description?: string,
}

export default function BlockDescription({description = 'Default description'}: BlockDescriptionProps) {
    return (
        <div>
            <p>{description}</p>
        </div>
    )
}