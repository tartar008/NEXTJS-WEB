export interface Project {
  slug: string;
  title: string;
  year: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard ด้วย WebService",
    year: "2023",
    image: "",
    description:
      "เว็บแอปแสดงสภาพอากาศแบบเรียลไทม์ โดยดึงข้อมูลจาก OpenWeatherMap API พร้อมแสดงกราฟและแผนที่ประกอบ",
  },
  {
    slug: "Task Management",
    title: "ระบบจัดการและติดตามงาน แอปพลิเคชันที่สามารถเชื่อมต่อกับ Asana API",
    year: "2023",
    image: "/NEXTJS-WEB/assets/Project/WebServiceProjectTaskManagement.png",
    description:
      "ระบบ Task Management ที่พัฒนาขึ้นนี้ถูกออกแบบมาเพื่อเชื่อมต่อกับ Asana API เพื่อให้ผู้ใช้งานสามารถติดตามงานได้ผ่านทางปฏิทิน พร้อมทั้งมีฟังก์ชันเพิ่มเติมสำหรับการสร้าง",
  },
  {
    slug: "flask-store-api",
    title: "Flask Store API",
    year: "2023",
    image: "",
    description:
      "RESTful API สำหรับร้านค้าออนไลน์ สร้างด้วย Flask และ SQLAlchemy มีฟีเจอร์ CRUD สินค้าและจัดการคำสั่งซื้อ",
  },
  {
    slug: "iot-ultrasonic-sensor",
    title: "IoT Sensor ควบคุมมอเตอร์ด้วย Blynk",
    year: "2023",
    image: "/NEXTJS-WEB/assets/Project/Mini_Project_IoT_200_480.jpeg",
    description:
      "โปรเจกต์ IoT ที่ใช้เซ็นเซอร์ HC-SR04 วัดระยะทาง และควบคุมเซอร์โวมอเตอร์ผ่านแอป Blynk พร้อมแสดงผลบน OLED และส่งข้อมูลขึ้น ThingSpeak",
  },
  {
    slug: "sql-practice-dashboard",
    title: "SQL Practice Dashboard",
    year: "2023",
    image: "",
    description:
      "แอปฝึกเขียน SQL พร้อมตัวอย่างและผลลัพธ์แบบโต้ตอบ พัฒนาเพื่อทบทวนคำสั่ง SQL และการจัดการฐานข้อมูลเบื้องต้น",
  },
  {
    slug: "aspnet-webshop",
    title: "ASP.NET Web Shop",
    year: "2023",
    image: "",
    description:
      "ระบบร้านค้าออนไลน์ที่พัฒนาด้วย ASP.NET Web Forms รองรับการแสดงรายการสินค้า ใส่ตะกร้า และสั่งซื้อ",
  },
  {
    slug: "store-react",
    title: "Store React - เว็บขายสินค้า",
    year: "2024",
    image: "",
    description:
      "เว็บขายสินค้าจำลอง พัฒนาด้วย React และ Tailwind CSS พร้อมระบบเพิ่มสินค้าในตะกร้าและเช็คเอาท์",
  },
];

export const featuredProject = {
  slug: "project-checkname-system",
  title: "🔥 ระบบบริหารจัดการนักเรียนในหอพักของโครงการ วมว. (My Best Project)",
  year: "2025",
  image: "/NEXTJS-WEB/assets/Project/VWVProjectfinal.png",
  description:
    "ระบบเช็คชื่อเข้าห้องเรียนแบบเรียลไทม์ แยกฝั่งครู/นักเรียน พร้อมระบบ QR Code และแสดงสถิติการเข้าเรียน พัฒนาแบบ Full Stack (React + NestJS + MongoDB)",
}