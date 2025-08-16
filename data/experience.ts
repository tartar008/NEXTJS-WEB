export type ExperienceType = "work" | "activity";

export type ExperienceItem = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  github?: string;
  image?: string;
  type: ExperienceType;   // 👈 เพิ่ม type
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
    type: "activity",   // 👉 กิจกรรม
  },
  {
    slug: "godot-game-camp",
    title: "👨‍🏫 ผู้ช่วยสอน – ค่ายพัฒนาเกมด้วย Godot",
    date: "ปี 2022",
    description: "ค่ายสอนสร้างเกม 2D/3D ด้วย Godot",
    content:
      "ในค่ายนี้ ฉันรับบทเป็นผู้ช่วยสอน คอยให้คำแนะนำและช่วยเหลือผู้เข้าร่วมในการใช้ Godot เพื่อสร้างเกม 2D/3D รวมถึงช่วยแก้ไขปัญหาและตอบคำถามระหว่างการเรียนรู้",
    image: "/images/godot-camp.jpg",
    type: "activity",
  },
  {
    slug: "basic-python-camp",
    title: "👨‍🏫 ผู้ช่วยสอน – ค่ายพื้นฐานภาษา Python",
    date: "ปี 2022",
    description: "ค่ายสำหรับสอนพื้นฐานการเขียนโปรแกรมภาษา Python",
    content:
      "ค่ายนี้เน้นสอนพื้นฐานภาษา Python เช่น ตัวแปร เงื่อนไข และลูป ฉันทำหน้าที่เป็นผู้ช่วยสอน คอยสนับสนุนผู้เข้าร่วมในระหว่างการเรียนและการทำแบบฝึกหัด พร้อมช่วยแก้ปัญหาที่พบ",
    image: "/images/python-camp.jpg",
    type: "activity",
  },
  {
    slug: "vmw-dormitory-management",
    title: "🏠 ระบบบริหารหอพักนักศึกษา – VMW Dormitory Management System",
    date: "ปี 2023 - ปัจจุบัน",
    description:
      "ระบบบริหารหอพักที่มีการบันทึกเวลาเข้าออกด้วย QR code และการขอลาแบบ real-time",
    content:
      "ระบบนี้ถูกพัฒนาเพื่อใช้ในการจัดการหอพักนักศึกษา โดยมีฟีเจอร์หลักคือการบันทึกเวลาเข้าออกด้วย QR Code การขอลาแบบ real-time และการจัดเก็บข้อมูลแบบดิจิทัลอย่างปลอดภัย พัฒนาโดยใช้ React, Node.js, และฐานข้อมูล MySQL/MongoDB",
    github: "https://github.com/tartar008",
    image: "/images/dormitory.jpg",
    type: "work",  // 👉 โปรเจกต์จริง
  },
  {
    slug: "task-manager-asana",
    title: "📅 Task Management & Calendar Integration",
    date: "ปี 2024",
    description:
      "แอปจัดการงานพร้อมเชื่อมต่อ Asana API และแสดงปฏิทินแบบ real-time",
    content:
      "โปรเจกต์นี้พัฒนาแอปจัดการงานโดยใช้ React.js และ Material-UI และเชื่อมต่อกับ Asana API เพื่อแสดงปฏิทินและสร้างงานแบบ real-time รองรับการแก้ไขงานแบบอินเตอร์แอคทีฟ",
    image: "/images/task-manager.jpg",
    type: "work",
  },
  {
    slug: "gamehub-platform",
    title: "🎮 GameHub Platform",
    date: "ปี 2023",
    description:
      "เว็บแอปสำหรับจัดการข้อมูลเกม มีฟีเจอร์แนะนำเกมและจัดการผู้ใช้",
    content:
      "พัฒนาโดยใช้ React และ Express.js พร้อมฐานข้อมูล MySQL ตัวระบบรองรับการดูรายละเอียดเกม แนะนำเกม และจัดการผู้ใช้ เป็นโปรเจกต์ที่ช่วยฝึกฝนทั้งด้าน front-end และ back-end",
    image: "/images/gamehub.jpg",
    type: "work",
  },
  {
    slug: "smart-distance-controller",
    title: "📡 Smart Distance Controller",
    date: "ปี 2023",
    description:
      "ระบบ IoT วัดระยะด้วย ultrasonic sensor แสดงผลบน OLED และส่งข้อมูลไปยัง ThingSpeak",
    content:
      "โปรเจกต์ IoT นี้ใช้ ultrasonic sensor ในการวัดระยะและควบคุม servo motor ผ่าน Blynk แสดงผลผ่าน OLED และส่งข้อมูลไปยัง ThingSpeak เพื่อวิเคราะห์ข้อมูลระยะทาง",
    image: "/images/iot-distance.jpg",
    type: "work",
  },
];
