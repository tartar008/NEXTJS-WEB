import React from "react"
import Image from "next/image"

type Props = {
    image: any
    title: string
    date: string
    link: string
}

const CertificateCard = ({ image, title, date, link }: Props) => (
    <a
        href={link}
        target="_blank"
        className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
    >
        <Image
            src={image}
            alt={title}
            className="w-full object-cover"
            priority
        />
        <div className="p-4 bg-white">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-600">{date}</p>
        </div>
    </a>
)

export default CertificateCard
