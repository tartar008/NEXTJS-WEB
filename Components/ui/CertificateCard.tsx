/* eslint-disable @next/next/no-img-element */
// components/ui/CertificateCard.tsx

import React from "react";

interface CertificateCardProps {
    image: string;
    title: string;
    date: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ image, title, date }) => {
    return (
        <div className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
            <img
                src={image}
                alt={title}
                width={400}
                height={300}
                className="object-cover w-full h-48"
            />
            <div className="p-4">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-600">{date}</p>
            </div>
        </div>
    );
};

export default CertificateCard;
