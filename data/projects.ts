// data/projects.ts
export type ProjectCategory =
  | "training"     // โปรเจคฝึก
  | "course"       // โปรเจควิชา/โปรเจคโครงการในวิชา
  | "thesis"       // โปรเจคจบ
  | "scholarship"  // โปรเจคงานทุนทำงาน
  | "client"       // โปรเจครับจากบริษัท
  | "program"      // โปรเจคโครงการ (เช่น โครงการ วมว.)
  | "personal";    // โปรเจคส่วนตัว

export interface Project {
  slug: string;
  title: string;
  year: string;
  image: string;
  description: string;
  technologies: string[];
  status?: "ongoing" | "completed";   // สถานะการทำงาน
  progress?: number;                  // 0-100
  category?: ProjectCategory;         // ✅ ประเภทโปรเจกต์
  client?: string;                    // ชื่อลูกค้า (ถ้ามี)
  isRealProject?: boolean;            // งานจริง/ใช้งานจริง
}

export const projects: Project[] = [
  {
    slug: "agri-land-gis",
    title: "Agricultural Land GIS & Database System",
    year: "2025",
    image: "/NEXTJS-WEB/assets/Project/agri-land-gis.png",
    description:
      "พัฒนาเว็บแอปพลิเคชันสำหรับการจัดการข้อมูลทะเบียนเกษตร (เล่มเขียว) และแปลงที่ดิน ... รองรับการขยายระดับจังหวัดและคลาวด์",
    technologies: ["React", "NestJS", "TypeScript", "PostgreSQL", "PostGIS"],
    status: "ongoing",
    progress: 5,
    category: "client",                        // ✅ โปรเจครับจากบริษัท
    client: "Phatthalung Paratex Co., Ltd.",  // ✅ ชื่อลูกค้า
    isRealProject: true,                       // ✅ งานจริง
  },
  {
    slug: "ida-thalassemia-decision-support",
    title: "Decision Support — IDA vs Thalassemia (React Demo + Similarity Search)",
    year: "2025",
    image: "/NEXTJS-WEB/assets/Project/ida-thalassemia-demo.png",
    description: `โปรเจกต์นี้เป็นระบบช่วยตัดสินใจ (Decision Support) สำหรับคัดกรองภาวะโลหิตจางจากการขาดธาตุเหล็ก (Iron Deficiency Anemia: IDA) และธาลัสซีเมีย (Thalassemia) โดยเริ่มจากเดโมฝั่ง Frontend (React + Tailwind) ที่โฟกัสการรับค่าพารามิเตอร์ทางโลหิตวิทยา (CBC) และสาธิตการค้นหาเคสใกล้เคียงด้วย Cosine Distance รวมถึงการทำนายผลเบื้องต้นด้วยโมเดล Decision Tree แบบ mock (โครงสร้างจำลองจาก MATLAB-export JSON) พร้อมวางแผนต่อยอดสู่การใช้ ONNX สำหรับงานภาพเซลล์เม็ดเลือดในอนาคต

เหตุผลในการทำ:
- ต้องการเครื่องมือคัดกรองเบื้องต้นที่ใช้งานง่าย (input → ดูเคสคล้าย → ได้ผลทำนาย) เพื่อช่วยแพทย์/นักเทคนิคการแพทย์ในขั้น Pre-screen และช่วยนักศึกษาฝึกงาน/ทีมพัฒนาทดสอบแนวทาง ML ที่เชื่อมกับ UI จริง
- ออกแบบให้ยืดหยุ่น: เริ่มจาก mock DB และโมเดลเล็ก ๆ ก่อน แล้วจึงค่อยสลับเป็นบริการจริง/โมเดลจริง โดยไม่ต้องรื้อ UI

สิ่งที่มีในเดโมปัจจุบัน:
1) ฟอร์มรับค่าพารามิเตอร์ 10 ตัว: Sex, Age, Pregnancy, Hb, Hct, PLT, RDW, MCV, MCH, MCHC
   - คุมชนิดข้อมูลเป็นตัวเลขจริง, ใช้ select สำหรับค่าไบนารี (Sex/Pregnancy) เพื่อลด input error
   - ใส่ min/max/step ตามช่วงข้อมูลตัวอย่าง เพื่อช่วย validate เบื้องต้น

2) Normalization:
   - ใช้ min-max scale ไปยังช่วง [0..1] สำหรับค่าที่เป็นตัวเลขต่อเนื่อง (ยกเว้น Sex/Pregnancy เก็บเป็น 0/1)
   - มีการ clamp กันค่า NaN/Infinity และกันหารศูนย์ในขั้นคำนวณ cosine

3) Similarity Search (Top-5):
   - คำนวณ Cosine Distance ระหว่างเวกเตอร์อินพุต (normalize แล้ว) กับเคสในฐานข้อมูลตัวอย่าง (mock)
   - แสดงผล Top-5 เคสที่ใกล้ที่สุด พร้อมระยะห่าง (distance) และ class ของเคสนั้น
   - ออกแบบโครงให้เปลี่ยน backend เป็นเวกเตอร์ดาต้าเบสได้ในอนาคต (เช่น pgvector / Qdrant / SQLite vector)

4) Predict (Mock Decision Tree):
   - โมเดลต้นไม้ตัดสินใจ (เล็กมาก) ที่แตกกิ่งด้วยเงื่อนไขง่าย ๆ (เช่น MCV < 80 → แตกกิ่งไป MCH < 27 เป็นต้น)
   - เลือกแบบ mock เพื่อสาธิตเส้นทาง integration กับ UI ก่อน (พร้อมสลับเป็นโมเดลจริงภายหลัง เช่น RandomForest/XGBoost/ONNX)
   - โค้ด predict ป้องกัน edge case (loop ไม่จบ, ชี้ node ผิด, ดัชนีคุณลักษณะไม่พบ)

สถาปัตยกรรม/แผน backend ที่วางไว้:
- Endpoint ตัวอย่าง:
  - POST /DecisionPredict: ส่งตัวอย่างค่าพารามิเตอร์ → คืนผลทำนาย + เหตุผลประกอบ (อนาคต: prob/confidence/feature importance)
  - POST /case-vectors: บันทึกเคส (คุณลักษณะดิบ + เวกเตอร์ normalize + label) เพื่อสร้างฐานเคสสำหรับ similarity
  - GET  /neighbors?topK=5: คืนเคสใกล้เคียงที่สุดด้วย cosine distance (อนาคต: เปลี่ยนเป็น ANN/Index)
- DB Schema คร่าว ๆ: cases(id, raw_features(JSON), norm_vector(float[]), className, createdAt, meta)
- วางแผนเพิ่ม Model Registry/Versioning (เช่น เก็บไฟล์ MATLAB JSON/ONNX/คอนฟิกพารามิเตอร์), Logging/Audit, และ Job สำหรับรีคอมพิวต์เวกเตอร์เมื่ออัปเดต normalization

ความปลอดภัยและจริยธรรมข้อมูล:
- เน้นการทำให้ข้อมูลไม่ระบุตัวบุคคล (de-identification) และจัดการสิทธิ์การเข้าถึง
- ระบุข้อความกำกับว่าเป็นเครื่องมือช่วยตัดสินใจ ไม่ใช่วินิจฉัยทางการแพทย์แทนแพทย์
- เตรียมแนวทาง consent/การขอลบข้อมูลกรณีใช้งานจริง

บทเรียนระหว่างพัฒนา:
- UI/แบบฟอร์ม: ต้อง parseFloat/parseInt ให้ถูก, ใช้ select ลด error, ใส่ min/max/step ช่วยผู้ใช้
- เวกเตอร์/คณิตศาสตร์: ระวัง NaN/หารศูนย์ใน cosine, รักษาลำดับคุณลักษณะให้ตรงทั้งฝั่ง normalize และ predict
- โครงสร้างโมเดล: การ detect leaf ใน decision tree ต้องพิจารณา children ชัดเจน ไม่คืนผลก่อนเวลา
- TypeScript: ควรกำหนดชนิดให้ MOCK_DB ชัดเจน (number[]) จะลดการ cast แปลก ๆ และ error ตอนคอมไพล์

แผนพัฒนาต่อ:
- เพิ่มงานภาพ: อัปโหลดสเมียร์เลือด → รันโมเดล ONNX วิเคราะห์ลักษณะเม็ดเลือด → รวมคะแนนกับข้อมูลตาราง (tabular) ให้เป็น multi-modal score
- ย้าย similarity ไปใช้เวกเตอร์ดาต้าเบส (pgvector/Qdrant) เพื่อรองรับข้อมูลมากขึ้นและค้นหาเร็วขึ้น (ANN)
- เพิ่ม Explainability (เช่น SHAP) และ confidence score, รวมถึง Calibration ของเกณฑ์ตัดสินใจ
- ทำชุดทดสอบ/วัดผล: confusion matrix, ROC/AUC, precision/recall, และรายงานเวอร์ชันของโมเดล/คอนฟิก
- เตรียม Deploy: Docker Compose + Nginx Reverse Proxy + Let’s Encrypt, environment-based config, ติดตามด้วย Healthcheck/Monitoring

สถานะ:
- เดโม UI ใช้งานได้ครบ flow: ใส่ค่า → normalize → หาเคสใกล้ → ทำนายเบื้องต้น
- โค้ดถูกออกแบบให้สลับจาก mock → backend จริง/โมเดลจริง ได้โดยไม่ต้องเปลี่ยน UI ครั้งใหญ่
`,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js (Express)", "MySQL"],
    progress: 60,
    category: "scholarship",
    isRealProject: true,
  },

  {
    slug: "psu-soc-automation",
    title: "PSU SOC Automation & Network DB (Shodan + Firewall)",
    year: "2024–2025",
    image: "images/projects/psu-soc-automation.png",
    description:
      "โปรเจคงานจริง (งานทุน) ด้าน Cybersecurity / Network Security Automation สำหรับมหาวิทยาลัยสงขลานครินทร์ (PSU) จุดประสงค์หลักคือสร้างเว็บแอประดับภายในที่ช่วยรวบรวมข้อมูลระบบเครือข่าย (PSU Network DB) เชื่อมต่อ/ดึงข้อมูลจาก Shodan เพื่อตรวจสอบ service/port และทำงานอัตโนมัติร่วมกับ Firewall (FortiGate) เช่น เพิ่ม/ลบ IP, ใส่/เอาออกจากกลุ่มบล็อก, และยกเลิกบล็อกอัตโนมัติหลังเวลาที่กำหนด พร้อมระบบ Login ผ่าน PSU SSO (OAuth2/OIDC) และงานเบื้องหลังด้วย worker/cron เพื่อให้กระบวนการตรวจสอบและตอบสนองด้านความปลอดภัยทำได้รวดเร็วและเป็นระบบ\n\n" +
      "สิ่งที่ทำ/รับผิดชอบหลัก:\n" +
      "• Migration ORM → Document DB: แปลงโมเดลและโค้ดจาก SQLAlchemy (RDBMS) ไปเป็น MongoEngine (Document DB) จัดโครงสร้างฟิลด์ใหม่ เช่น roles จาก string → list, จัดค่า default/index, ปรับ query จาก .query.filter(...) เป็น .objects(...), ใส่ get_id() ให้เข้ากับ Flask-Login\n" +
      "• ออกแบบ/ปรับปรุง Data Model ผู้ใช้: รองรับ resources/meta_data, ดึงรูป/อีเมลจาก SSO, ตรวจสอบ role (เช่น student/staff) ตามรูปแบบอีเมล, เพิ่มเมธอดช่วยเช็คสิทธิ์ (has_role, has_any_role)\n" +
      "• Security Automation กับ FortiGate: เขียนฟังก์ชัน POST/DELETE ไปยัง API ของ hfw1/hfw2 (vdom แยก PSU/DC) เพื่อเพิ่มที่อยู่แบบ ipmask (ip + subnet mask แบบ dotted) ใส่/เอาออกสมาชิกใน address group เช่น TempBlockIntruder_from_Internet/PSU และตั้ง scheduler ให้ลบอัตโนมัติหลัง 1 ชั่วโมง (APScheduler)\n" +
      "• Network Intelligence & WHOIS: สคริปต์ค้นหา abuse email จาก WHOIS (กรองอีเมล/clean string) เพื่อใช้ติดต่อแจ้งปัญหา, และ utility ตรวจ DNAT ทั้งจาก public และ private IP ผ่าน endpoint ของ FortiGate\n" +
      "• Shodan Integration & PSU Network DB: สร้าง/เชื่อม endpoint สำหรับ trigger งานค้นหาช่องโหว่/พอร์ตจาก Shodan (ผ่าน cron container) และจัดเก็บ/แสดงผลข้อมูลเครือข่าย เช่น ชื่อโดเมน, private/public IP, service/port, campus, faculty, staff email, SR, direction, last_update ฯลฯ\n" +
      "• ระบบงานเบื้องหลัง: แยก worker (Redis + RQ) สำหรับงานหนัก/รอนาน และ cron_job container สำหรับ trigger งานเป็นช่วงๆ พร้อม backoff/retry, logging และ health behavior ที่คาดเดาได้ (เช่น ตอบ 200/202 แทน 301)\n" +
      "• การยืนยันตัวตน/โครงสร้างเว็บ: ใช้ PSU SSO ผ่าน Authlib (OAuth2/OIDC) map ข้อมูลผู้ใช้ → บันทึก token refresh/expires, หน้าเว็บ Jinja2 + Bootstrap, รันจริงด้วย Gunicorn หลัง Nginx reverse proxy\n" +
      "สถาปัตยกรรม/การดีพลอย:\n" +
      "• Docker Compose แยกบริการ: web (Flask+Gunicorn), nginx (serve static/media + reverse proxy), redis (queue), worker (RQ), cron_job (trigger งานตามเวลา) และฐานข้อมูลเดิม (PostgreSQL) เพื่อรองรับโมดูล legacy ระหว่าง transition ไป Document-first\n" +
      "• แยก volume สำหรับ static/media, ตั้งค่า log rotation, และวางไฟล์ env (.env.prod) เพื่อคุม secret/พารามิเตอร์การเชื่อมต่อ\n\n" +
      "ผลลัพธ์/ประโยชน์:\n" +
      "• ลดเวลาทำงานซ้ำ/มือของทีม SOC ด้วย automation (เพิ่ม/ลบ IP, บล็อก/ปลดบล็อกอัตโนมัติ, ตรวจ DNAT, ค้นหา Shodan) ทำให้ตอบสนองเหตุการณ์ได้เร็วขึ้นมาก\n" +
      "• โครงสร้างข้อมูลผู้ใช้และ network DB ชัดเจนขึ้น ยืดหยุ่นต่อการขยาย (เพิ่มฟิลด์/ดัชนี/คอลเลกชันใหม่ได้ง่าย) และปรับสเกลการเขียน/อ่านได้ดีขึ้นจากการย้ายไป Document\n" +
      "• การแยก worker/cron ลดภาระโหลดบน web ทำให้เว็บตอบสนองผู้ใช้ได้เสถียรแม้มีงานเบื้องหลังจำนวนมาก\n\n" +
      "ไฮไลต์ทางเทคนิคที่น่าจดจำ:\n" +
      "• ฟังก์ชันคำนวณ subnet mask จาก CIDR (/n → dotted) เพื่อสร้าง ipmask ให้ FortiGate ได้ถูกต้อง\n" +
      "• ใช้ APScheduler ตั้งงานลบสมาชิก group + เคลียร์ address object อัตโนมัติในชั่วโมงถัดไป เพื่อลดทิ้ง/ค้างของกฎ\n" +
      "• Utility WHOIS หา abuse email อัตโนมัติสำหรับการแจ้งเตือนเจ้าของโดเมน\n" +
      "• Login ผ่าน PSU SSO และบันทึก token ด้วย Authlib + MongoEngine model (OAuth2Token)\n\n" +
      "บทเรียนที่ได้:\n" +
      "• การพาโค้ดจากโลก SQL (ORM/Relational) ไปสู่ Document ต้องคิดใหม่เรื่อง query/index และรูปแบบการบันทึก (ฝัง/อ้างอิง) ให้เหมาะกับ use-case การอ่านจริง\n" +
      "• งาน SecOps ที่ทนทานควรแยกเส้นทาง: web (ตอบไว), worker (ทำงานหนัก), cron (กำหนดตาราง), และคุมสถานะด้วยคิว/ล็อก/รีไทร\n" +
      "• การออกแบบ endpoint สำหรับ automation ควรกำหนด status code ที่ชัดเจน (200/202) และลด redirect เพื่อให้ cron/monitor ตรวจจับสถานะได้ง่าย",
    technologies: [
      "Flask",
      "MongoDB (MongoEngine)",
      "Docker & Docker Compose",
      "Redis + RQ + APScheduler",
      "OAuth2/OIDC + Shodan/FortiGate API"
    ],
    category: "scholarship",
    isRealProject: true,
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard ด้วย WebService",
    year: "2023",
    image: "",
    description:
      "เว็บแอปแสดงสภาพอากาศแบบเรียลไทม์ โดยดึงข้อมูลจาก OpenWeatherMap API พร้อมแสดงกราฟและแผนที่ประกอบ",
    technologies: ["React", "OpenWeatherMap API", "Tailwind"],
    category: "course",
  },
  {
    slug: "task-management",
    title: "ระบบจัดการและติดตามงาน แอปพลิเคชันที่สามารถเชื่อมต่อกับ Asana API",
    year: "2023",
    image: "/NEXTJS-WEB/assets/Project/WebServiceProjectTaskManagement.png",
    description:
      "ระบบ Task Management ที่พัฒนาขึ้นนี้ถูกออกแบบมาเพื่อเชื่อมต่อกับ Asana API เพื่อให้ผู้ใช้งานสามารถติดตามงานได้ผ่านทางปฏิทิน พร้อมทั้งมีฟังก์ชันเพิ่มเติมสำหรับการสร้าง",
    technologies: ["Next.js", "TypeScript", "Asana API"],
    category: "course",
  },
  {
    slug: "flask-store-api",
    title: "Flask Store API",
    year: "2023",
    image: "",
    description:
      "RESTful API สำหรับร้านค้าออนไลน์ สร้างด้วย Flask และ SQLAlchemy มีฟีเจอร์ CRUD สินค้าและจัดการคำสั่งซื้อ",
    technologies: ["Python", "Flask", "SQLAlchemy"],
    category: "training",
  },
  {
    slug: "iot-ultrasonic-sensor",
    title: "IoT Sensor ควบคุมมอเตอร์ด้วย Blynk",
    year: "2023",
    image: "/NEXTJS-WEB/assets/Project/Mini_Project_IoT_200_480.jpeg",
    description:
      "โปรเจกต์ IoT ที่ใช้เซ็นเซอร์ HC-SR04 วัดระยะทาง และควบคุมเซอร์โวมอเตอร์ผ่านแอป Blynk พร้อมแสดงผลบน OLED และส่งข้อมูลขึ้น ThingSpeak",
    technologies: ["Arduino", "C++", "Blynk", "ThingSpeak"],
    category: "training",
  },
  {
    slug: "sql-practice-dashboard",
    title: "SQL Practice Dashboard",
    year: "2023",
    image: "",
    description:
      "แอปฝึกเขียน SQL พร้อมตัวอย่างและผลลัพธ์แบบโต้ตอบ พัฒนาเพื่อทบทวนคำสั่ง SQL และการจัดการฐานข้อมูลเบื้องต้น",
    technologies: ["React", "SQLite"],
    category: "training",
  },
  {
    slug: "aspnet-webshop",
    title: "ASP.NET Web Shop",
    year: "2023",
    image: "",
    description:
      "ระบบร้านค้าออนไลน์ที่พัฒนาด้วย ASP.NET Web Forms รองรับการแสดงรายการสินค้า ใส่ตะกร้า และสั่งซื้อ",
    technologies: ["C#", "ASP.NET"],
    category: "course",
  },
  {
    slug: "store-react",
    title: "Store React - เว็บขายสินค้า",
    year: "2024",
    image: "",
    description:
      "เว็บขายสินค้าจำลอง พัฒนาด้วย React และ Tailwind CSS พร้อมระบบเพิ่มสินค้าในตะกร้าและเช็คเอาท์",
    technologies: ["React", "Tailwind", "JavaScript"],
    category: "personal",
  },

  // // กำลังดำเนินการ
  // {
  //   slug: "dormitory-system-v2",
  //   title: "Dormitory System v2 — Re-architecture",
  //   year: "2025",
  //   image: "/NEXTJS-WEB/assets/Project/dormitory-v2.png",
  //   description:
  //     "รีแฟคเตอร์สถาปัตยกรรมเป็น Monorepo (Nx) แยก service, เพิ่ม WebSocket real-time, RBAC, และ CI/CD บน Oracle Cloud",
  //   technologies: ["Next.js 14", "NestJS", "MongoDB", "Nx", "Docker"],
  //   status: "ongoing",
  //   progress: 60,
  //   category: "program", // โครงการ วมว.
  //   isRealProject: true,
  // },
];

export const featuredProject: Project = {
  slug: "project-checkname-system",
  title: "🔥 ระบบบริหารจัดการนักเรียนในหอพักของโครงการ วมว. (My Best Project)",
  year: "2025",
  image: "/NEXTJS-WEB/assets/Project/VWVProjectfinal.png",
  description:
    "ระบบเช็คชื่อเข้าห้องเรียนแบบเรียลไทม์ แยกฝั่งครู/นักเรียน พร้อมระบบ QR Code และสถิติการเข้าเรียน (React + NestJS + MongoDB)",
  technologies: ["React", "NestJS", "MongoDB", "Tailwind"],
  status: "ongoing",
  progress: 60,
  category: "program",
  isRealProject: true,
};
