# get_hired

Career Transition Helper is an application developed during the **HackYeah Hackathon** in Kraków, built within 24 hours by a 5-person team. The app is designed to assist individuals in transitioning to a new career by conducting interviews and generating personalized learning plans. 

This project was created using **Next.js**, **Java**, **TypeScript**, **TailwindCSS**, and **ShadCN**. The UI and design mockups were made in **Figma**. 

The application scored **3.5/5 points** in the Hackathon evaluation.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Team](#team)
- [Demo Video](#demo-video)

---

## Overview

Career Transition Helper is an app designed to help users switch careers by guiding them through a personalized learning path. The app asks users a series of questions, analyzes their answers, and generates a custom learning plan based on their goals and skills.

The app consists of multiple pages:
- **Landing Page** – Overview of the app and its benefits.
- **Authentication (Login/Sign-up)** – Users can log in and sign up using Clerk authentication.
- **Courses Page** – Displays a list of career transition courses.
- **Selected Course Page** – Shows detailed information about a specific course, including the progress bar and tasks.
- **Chat Page** – An AI-driven chat to assist users with additional career advice and guidance.

### Features:
- User interviews for career path analysis.
- Automatically generated personalized learning plans.
- Progress tracking with a progress bar and task completion tracking.
- Integration with Clerk for user authentication.
- Clean and modern UI/UX designed in Figma.
- Task expansion to show detailed descriptions and allow marking tasks as done.
- Landing page, course page, and a chat system to interact with users.

---

## Screenshots

### Landing Page
![Landing Page](../frontend/public/images/Dashboard_dla_nowego_uzytkownika.jpg)

### Courses Page
![Courses Page](../frontend/public/images/Kurs.png.jpg)

### Chat Page
![Chat Page](../frontend/public/images/Chat.png)

### Selected Course Page
![Selected Course Page](../frontend/public/images/task_menu.png)

---

## Tech Stack

### Frontend:
- **Next.js**
- **TypeScript**
- **TailwindCSS**
- **ShadCN UI**

### Backend:
- **Java**
- **Node.js**
- **OpenAI API**

### Design:
- **Figma**

---

## Getting Started

### Prerequisites:
- **Node.js** (v16 or later)
- **npm**

### Installation:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>

2. ** Navigate to the frontend directory:**

   ```bash
   cd frontend 

3. **Clone the repository:**

   ```bash
   npm install

4. **Create .env.local file in the root directory:**

   ```bash
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_dW5pZmllZC1zdG9yay02Ny5jbGVyay5hY2NvdW50cy5kZXYk

5. **Add your OpenAI API key and Clerk API key in the .env file:**

    ```bash
    OPENAI_API_KEY=<your-openai-api-key>
    CLERK_SECRET_KEY=<your-secret-clerk-key>

6. **Run the application locally:**

    ```bash
    npm run dev

The app will be running at http://localhost:3000.


## Team

- **Frontend Developers**: 2
- **Backend Developers**: 2
- **UX/UI Designer**: 1

---

## Demo Video

Watch the full demo of our application on YouTube:  
[YouTube Demo Video](https://www.youtube.com/watch?v=Dy2ruSHzO44)

## Live demo  

Watch the full demo of our application on YouTube:  
[Live Demo](https://hack-yeah2024-hire-me.vercel.app/)

---

### Contributions

Feel free to contribute to this project by forking the repository and submitting a pull request. Any improvements or new features are welcome!

---

## License

This project is licensed under the MIT License.






