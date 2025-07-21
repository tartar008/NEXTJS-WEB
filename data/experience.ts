export type ExperienceItem = {
  link?: any;
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  github?: string;
  image?: string;
};

export const experience: ExperienceItem[] = [
  {
    slug: "itm-network-games",
    title: "🎮 ผู้จัดงานหลัก (Event Director) – ITM Network Games ครั้งที่ 21",
    date: "ปี 2023",
    description:
      "กิจกรรมประจำปีระหว่าง 4 มหาวิทยาลัยภาคใต้ มีการแข่งขัน กีฬา, วิชาการ และ e-sports ผู้เข้าร่วมมากกว่า 300 คน",
    content:
      "ฉันเป็นผู้จัดงานหลักของกิจกรรม ITM Network Games ครั้งที่ 21 งานนี้เป็นกิจกรรมประจำปีที่รวมตัวนักศึกษาด้าน IT จาก 4 มหาวิทยาลัยภาคใต้ มีการแข่งขันหลากหลายประเภท เช่น กีฬา วิชาการ และ e-sports ฉันรับผิดชอบการวางแผนภาพรวม ประสานงานกับมหาวิทยาลัยต่าง ๆ จัดตารางกิจกรรม ดูแลทีมงาน และบริหารงบประมาณ งานนี้ช่วยพัฒนาทักษะด้านการจัดการ ภาวะผู้นำ การทำงานเป็นทีม และการแก้ปัญหาเฉพาะหน้า",
    image: "/images/itm-network.jpg",
  },
  {
    slug: "godot-game-camp",
    title: "👨‍🏫 ผู้ช่วยสอน – ค่ายพัฒนาเกมด้วย Godot",
    date: "ปี 2022",
    description: "ค่ายสอนสร้างเกม 2D/3D ด้วย Godot",
    content:
      "ในค่ายนี้ ฉันรับบทเป็นผู้ช่วยสอน คอยให้คำแนะนำและช่วยเหลือผู้เข้าร่วมในการใช้ Godot เพื่อสร้างเกม 2D/3D รวมถึงช่วยแก้ไขปัญหาและตอบคำถามระหว่างการเรียนรู้",
    image: "/images/godot-camp.jpg",
  },
  {
    slug: "basic-python-camp",
    title: "👨‍🏫 ผู้ช่วยสอน – ค่ายพื้นฐานภาษา Python",
    date: "ปี 2022",
    description: "ค่ายสำหรับสอนพื้นฐานการเขียนโปรแกรมภาษา Python",
    content:
      "ค่ายนี้เน้นสอนพื้นฐานภาษา Python เช่น ตัวแปร เงื่อนไข และลูป ฉันทำหน้าที่เป็นผู้ช่วยสอน คอยสนับสนุนผู้เข้าร่วมในระหว่างการเรียนและการทำแบบฝึกหัด พร้อมช่วยแก้ปัญหาที่พบ",
    image: "/images/python-camp.jpg",
  },
  {
    slug: "power-platform-training",
    title: "🧠 อบรมการใช้ Microsoft Power Automate และ Power Apps",
    date: "ปี 2023",
    description: "อบรมเชิงปฏิบัติการเกี่ยวกับการใช้ Power Automate และ Power Apps สำหรับการสร้าง Workflow และ App ภายในองค์กร",
    content:
      "ฉันได้เข้าร่วมอบรมเชิงปฏิบัติการเกี่ยวกับ Microsoft Power Platform ซึ่งครอบคลุมการใช้งาน Power Automate สำหรับการสร้าง Workflow อัตโนมัติ และ Power Apps สำหรับการสร้างแอปพลิเคชันภายในองค์กรโดยไม่ต้องเขียนโค้ด การอบรมนี้ช่วยให้ฉันเข้าใจการพัฒนาแอปแบบ Low-code และการเชื่อมต่อระบบต่าง ๆ ภายในองค์กร เช่น Microsoft Excel, SharePoint และ Microsoft Teams",
    image: "/images/power-platform.jpg",
  },
  {
    slug: "db-migration-fund-project",
    title: "🗃️ โครงการทุนแปลงฐานข้อมูล SQLAlchemy เป็น MongoDB",
    date: "ปี 2023",
    description: "ได้รับทุนพัฒนาระบบฐานข้อมูลของเว็บไซต์มหาวิทยาลัย โดยย้ายจาก SQLAlchemy (Relational) ไปเป็น MongoDB (NoSQL)",
    content:
      "โครงการนี้เป็นส่วนหนึ่งของการรับทุนพัฒนาระบบสารสนเทศภายในมหาวิทยาลัย ฉันได้รับมอบหมายให้แปลงฐานข้อมูลของระบบเว็บไซต์จากเดิมที่ใช้ SQLAlchemy ซึ่งเป็น ORM สำหรับฐานข้อมูลเชิงสัมพันธ์ มาเป็น MongoDB ซึ่งเป็นฐานข้อมูลแบบ NoSQL เพื่อให้รองรับข้อมูลที่มีโครงสร้างยืดหยุ่นมากขึ้น งานนี้ช่วยให้ฉันเข้าใจลึกซึ้งเกี่ยวกับการออกแบบฐานข้อมูล, การจัดการข้อมูล และการพัฒนาแอปพลิเคชันที่เชื่อมต่อกับ MongoDB",
    image: "/images/mongodb-migration.jpg",
  },
  {
    slug: "intern-webdev-psu",
    title: "👨‍💻 นักศึกษาฝึกงาน – นักพัฒนาเว็บ (Web Developer)",
    date: "ปี 2025",
    description: "ฝึกงานกับมหาวิทยาลัยในตำแหน่งนักพัฒนาเว็บ โดยใช้ภาษา C#.NET และ ASP.NET Core",
    content:
      "ระหว่างฝึกงาน ฉันได้รับมอบหมายให้พัฒนาและปรับปรุงระบบเว็บภายในของมหาวิทยาลัย โดยใช้เทคโนโลยี C#.NET และ ASP.NET Core ซึ่งรวมถึงการพัฒนา UI, เขียนฟังก์ชันฝั่งเซิร์ฟเวอร์ และการเชื่อมต่อกับฐานข้อมูล การฝึกงานนี้ช่วยให้ฉันได้ประสบการณ์การทำงานจริงในองค์กร, การทำงานร่วมกับทีมพัฒนา, และเข้าใจวงจรการพัฒนาเว็บแอปพลิเคชันระดับองค์กร",
    image: "/images/intern-webdev.jpg",
  },

];
