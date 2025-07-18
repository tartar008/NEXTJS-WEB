export default function DownloadCVSection() {
    return (
        <section id="download-cv" className="py-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Download My CV</h2>
            <a
                href="/resume.pdf"
                download
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Download CV
            </a>
        </section>
    );
}
