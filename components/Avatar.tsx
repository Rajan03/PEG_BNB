import Image from "next/image";

interface IAvatarProps {
    url: string;
    className?: string;
}
export default function Avatar({ url, className }: IAvatarProps) {
    return (
        <div className={`relative border p-1 rounded-full ${className}`}>
        <Image
            src={url}
            alt="Avatar"
            width={32}
            height={32}
            className="w-full h-full rounded-full object-cover"
        />
        </div>
    );
}
