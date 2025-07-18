// TimelineItem component

type Props = {
    year: string;
    title: string;
    description: string;
};

export default function TimelineItem({ year, title, description }: Props) {
    return (
        <div>
            <h3 className="font-semibold">{year}</h3>
            <h4 className="text-lg">{title}</h4>
            <p>{description}</p>
        </div>
    );
}