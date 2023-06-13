interface BlockHeadingProps {
    heading?: string,
    text?: string
}

export default function BlockHeading({heading="This is a heading", text="Default"}: BlockHeadingProps) {
    return (<div>
        <h1>{heading}</h1>
        <p>{text}</p>
    </div>)
}