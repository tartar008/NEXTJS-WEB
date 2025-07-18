import TimelineItem from "../ui/TimelineItem";

export default function TimelineSection() {
    return (
        <section id="timeline" className="py-12 px-4">
            <h2 className="text-2xl font-bold text-center mb-6">My Timeline</h2>
            <div className="space-y-4">
                <TimelineItem
                    year="2025"
                    title="Graduated with Bachelor’s Degree"
                    description="Finished Information and Communication Technology at PSU."
                />
                <TimelineItem
                    year="2023"
                    title="Internship at XYZ Company"
                    description="Worked on building internal tools using React and Node.js."
                />
            </div>
        </section>
    );
}
