// app/data/certificatesData.ts

export interface Certificate {
    image: string;
    title: string;
    date: string;
    link: string;
}

export const groupedCertificates: Record<string, Certificate[]> = {
    "🌐 Web & Cloud Technology": [
        {
            image: "/NEXTJS-WEB/assets/Certificate/Microsotf/Microsoft_1.jpg",
            title: "Microsoft Certificate: HTML/CSS/JS",
            date: "มิถุนายน 2567",
            link: "https://certificate-link.com"
        },
        {
            image: "/NEXTJS-WEB/assets/Certificate/Cloud_Certificate_cognitiveclass.jpg",
            title: "Cloud Computing - Cognitive Class",
            date: "มิถุนายน 2567",
            link: "https://certificate-link.com"
        },
        {
            image: "/NEXTJS-WEB/assets/Certificate/Certificate_Hadoop101.jpg",
            title: "Hadoop 101 - Cognitive Class",
            date: "กรกฎาคม 2568",
            link: "https://certificate-link.com"
        },
        {
            image: "/NEXTJS-WEB/assets/Certificate/Certificate_SparkOverviewforScalaAnalytics.jpg",
            title: "Spark for Analytics - Cognitive Class",
            date: "กรกฎาคม 2568",
            link: "https://certificate-link.com"
        }
    ],

    "☁️ Microsoft & Azure": [
        {
            image: "/NEXTJS-WEB/assets/Certificate/Microsotf/Microsoft_2.jpg",
            title: "Microsoft Certificate: Azure Fundamentals",
            date: "มิถุนายน 2567",
            link: "https://certificate-link.com"
        },
        {
            image: "/NEXTJS-WEB/assets/Certificate/Microsotf/Microsoft_3.jpg",
            title: "Microsoft Certificate: Power BI",
            date: "มิถุนายน 2567",
            link: "https://certificate-link.com"
        }
    ],

    "🧠 AI & Machine Learning": [
        {
            image: "/NEXTJS-WEB/assets/Certificate/Chatbot.jpg",
            title: "AI Chatbot Workshop",
            date: "พฤษภาคม 2567",
            link: "https://certificate-link.com"
        },
        {
            image: "/NEXTJS-WEB/assets/Certificate/Certificate_HuggingFace_LLM_Course.webp",
            title: "Hugging Face LLM Course",
            date: "มิถุนายน 2567",
            link: "https://certificate-link.com"
        }
    ],

    "🔐 Cybersecurity & Awareness": [
        {
            image: "/NEXTJS-WEB/assets/Certificate/PSU_Cybersecurity.png",
            title: "Cybersecurity Workshop (PSU)",
            date: "มิถุนายน 2567",
            link: "https://certificate-link.com"
        },
        {
            image: "/NEXTJS-WEB/assets/Certificate/PSU_Cybersecurity_2.jpg",
            title: "Cybersecurity Awareness (PSU)",
            date: "มิถุนายน 2567",
            link: "https://certificate-link.com"
        }
    ],

    "🚀 Career & Soft Skills": [
        {
            image: "/NEXTJS-WEB/assets/Certificate/Accenture_Certified.jpg",
            title: "Accenture Certified",
            date: "มิถุนายน 2567",
            link: "https://certificate-link.com"
        },
        {
            image: "/NEXTJS-WEB/assets/Certificate/Innovative_Entrepreneurship.jpg",
            title: "Innovative Entrepreneurship",
            date: "มิถุนายน 2567",
            link: "https://certificate-link.com"
        },
        {
            image: "/NEXTJS-WEB/assets/Certificate/PrepareForCooperativeEducation.jpg",
            title: "Preparation for Cooperative Education (กุมภาพันธ์)",
            date: "กุมภาพันธ์ 2568",
            link: "https://certificate-link.com"
        },
        {
            image: "/NEXTJS-WEB/assets/Certificate/PrepareForCooperativeEducation2.jpg",
            title: "Preparation for Cooperative Education (กรกฎาคม)",
            date: "กรกฎาคม 2568",
            link: "https://certificate-link.com"
        },
        {
            image: "/NEXTJS-WEB/assets/Certificate/Certificate_Internship.png",
            title: "Internship Certificate",
            date: "มิถุนายน 2567",
            link: "https://certificate-link.com"
        },
        {
            image: "/NEXTJS-WEB/assets/Certificate/e-Certificate-CriticalThinking-PSUMOOC.jpg",
            title: "E-learning: Critical Thinking - PSU MOOC",
            date: "กรกฎาคม 2568",
            link: "https://certificate-link.com"
        }
    ]
}
