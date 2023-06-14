import Image from "next/image";

interface BlockImageProps {
    imgUrl: string,
    text?: string,
    alt: string,
    height?: number,
    width?: number,
}

export default function BlockImage({imgUrl, text, alt, height, width}: BlockImageProps) {
    return (
        <div>
            <Image src={imgUrl} alt={alt} height={height} width={width}/>
            <p>{text}</p>
        </div>
    )
}