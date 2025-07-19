import React from "react";

interface CertificateCardProps {
    image: string;
    title: string;
    date: string;
    link: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ image, title, date, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white"
        >
            <img
                src={image}
                alt={title}
                width={400} // กำหนดขนาดตามต้องการ
                height={300}
                className="object-cover w-full h-48"
            />
            <div className="p-4">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-600">{date}</p>
            </div>
        </a>
    );
};

export default CertificateCard;
