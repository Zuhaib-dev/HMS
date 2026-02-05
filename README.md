<div align="center">
  <br />
  <img src="https://img.freepik.com/premium-vector/online-doctor-hospital-service-illustration_108061-452.jpg?w=1060" alt="Hospital Management System Banner" width="100%" />
  <br />
  <br />
  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logo=appwrite&logoColor=white" />
    <img src="https://img.shields.io/badge/-Twilio-black?style=for-the-badge&logo=twilio&logoColor=white" />
  </div>

  <h3 align="center">CarePulse - Hospital Management System</h3>

  <div align="center">
    Built as a project while learning Next.js & Fullstack Development from <a href="https://sheryians.com/" target="_blank"><b>Sheryians Coding School</b></a>
  </div>
</div>

---

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🚀 [Getting Started](#getting-started)
5. 🤝 [Contributing](#contributing)
6. 👤 [About Me](#about-me)
7. 📜 [License](#license)

---

## 🤖 Introduction

**CarePulse** is a modern healthcare patient management application that allows patients to register, book, and manage their appointments with doctors. Administrators can schedule, cancel, and verify appointments, providing a seamless experience for both patients and healthcare providers.

This application abstracts complex healthcare management into a simple, user-friendly interface using the power of **Next.js** for the frontend and **Appwrite** for the backend infrastructure.

---

## ⚙️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Backend (BaaS):** [Appwrite](https://appwrite.io/) (Database, Auth, Storage)
- **Form Management:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **SMS & Notifications:** [Twilio](https://www.twilio.com/)

---

## 🔋 Features

✅ **Patient Registration** – Secure patient onboarding with detailed medical history.
✅ **Appointment Scheduling** – Easy booking system for patients.
✅ **Admin Dashboard** – Comprehensive view for admins to manage appointments.
✅ **SMS Notifications** – Real-time updates via Twilio for appointment confirmations.
✅ **File Uploads** – Secure storage for identification documents using Appwrite Storage.
✅ **Responsive Design** – Fully optimized for mobile, tablet, and desktop.
✅ **Dark Mode** – Modern, eye-friendly user interface.

---

## 🚀 Getting Started

To use this project on your local machine:

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)
- [Appwrite Account](https://appwrite.io/)
- [Twilio Account](https://www.twilio.com/) (Optional, for SMS)

### 🧑‍💻 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Zuhaib-dev/HMS.git
   cd HMS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### 🔐 Environment Setup

Create a `.env.local` file in the root directory and add the following keys:

```env
# Appwrite
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=your_project_id
API_KEY=your_api_key

# Database & Collections
DATABASE_ID=your_database_id
PATIENT_COLLECTION_ID=your_patient_collection_id
DOCTOR_COLLECTION_ID=your_doctor_collection_id
APPOINTMENT_COLLECTION_ID=your_appointment_collection_id

# Storage
NEXT_PUBLIC_BUCKET_ID=your_bucket_id

# Twilio (Optional)
NEXT_PUBLIC_ADMIN_PASSKEY=your_admin_passkey
```

> **Note:** You will need to set up your Appwrite project (Database, Collections, Storage) to match the schema expected by the application.

### 🏃 Run the Project

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🤝 Contributing

If you'd like to use or contribute to this project:

1. ⭐ Star this repository
2. 📥 Clone the repo
3. 🛠️ Make your changes
4. 🔁 Submit a Pull Request

---

## 👤 About Me

> This project was developed by **Zuhaib Rashid** while learning Fullstack Development.

📧 **Email:** zuhaibrashid01@gmail.com
📞 **Phone:** 6006414088
📍 **Location:** Srinagar, Jammu and Kashmir
🔗 **GitHub:** [github.com/Zuhaib-dev](https://github.com/Zuhaib-dev/Projects.git)
🔗 **LinkedIn:** [linkedin.com/in/xuhaib-rashid-661345318](https://www.linkedin.com/in/xuhaib-rashid-661345318)
🔗 **X.com:** [x.com/xuhaib_x9](https://x.com/xuhaib_x9)

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

> Made with ❤️ by **Zuhaib Rashid**
