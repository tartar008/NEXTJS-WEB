export default function Footer() {
  const footerSections = [
    {
      title: "หมวดหมู่",
      links: [
        { name: "เกี่ยวกับ", href: "#about" },
        { name: "ผลงาน", href: "#portfolio" },
        { name: "ทักษะ", href: "#skills" },
        { name: "ติดต่อ", href: "#contact" }
      ]
    },
    {
      title: "บริการ",
      links: [
        { name: "Web Development", href: "#" },
        { name: "Mobile App Development", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Consulting", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: "💼" },
    { name: "GitHub", url: "#", icon: "🐙" },
    { name: "Twitter", url: "#", icon: "🐦" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300 mb-4">
              Full-Stack Developer ที่มุ่งมั่นสร้างเว็บแอปพลิเคชันที่มีคุณภาพและตอบโจทย์ผู้ใช้งาน
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollToSection(link.href.substring(1))}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <span className="text-gray-300">{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="text-center text-gray-300">
          <p>&copy; 2024 Portfolio. สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </footer>
  );
}
