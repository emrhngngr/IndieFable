# IndieFable

[![Project Status: In Development](https://img.shields.io/badge/status-in_development-yellowgreen)](https://github.com/emrhn-gngr/IndieFable)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**A curated showcase for indie gems. Your personal quality filter for the next great game.**

IndieFable is a simple, beautiful, and manually curated showcase designed to find and feature the best "hidden gem" indie games.

<p align="center">
    <img src="./public/wishlist.jpg" alt="Wishlist preview" width="1000" />
</p>
<p align="center"><strong>Landing Page (Waitlist)</strong></p>
<p align="center"><a href="https://indie-fable.vercel.app">Live Preview</a></p>
---

## 💡 The Problem

Independent game developers create incredible games, but often struggle with marketing and visibility. With thousands of new titles released every year on platforms like Steam and Itch.io, it's impossible for players to find the truly special games. Many "hidden gems" get buried in the noise and are never discovered.

## ✨ The Solution: IndieFable

IndieFable is a **simple, beautiful, and manually curated showcase** of the best indie games. Think of it as a personal 'quality filter' for the indie scene.

Instead of an algorithm, this platform is run by a passionate human (me!) who personally reviews game submissions. The goal isn't to be the biggest catalog; it's to be the **best-tasting** one.

If a game is featured on IndieFable, it's because it's special and deserves your attention. The mission is simple: **help a few great indie games find a few more players.**

## 🚀 Core Features

* **✨ Hand-Picked Curation:** Every game on this site is reviewed and selected by a human.
* **🎮 Beautiful Showcase:** A clean, visual-first grid layout that lets the games' art and trailers shine.
* **🔗 Simple Submission:** An easy-to-use form for developers to submit their game for review.
* **🏷️ Genre & Tag Filtering:** Simple filtering to help players find the exact kind of game they love.

## 🛠️ Tech Stack

This project is built with a modern, scalable, and serverless-first technology stack.

| Category | Technology |
| :--- | :--- |
| **Frontend** | ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs) ![React](https://img.shields.io/badge/React-61DAFB?logo=react) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css) |
| **Backend** | ![Next.js API Routes](https://img.shields.io/badge/Next.js_API-000000?logo=nextdotjs) ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs) |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb) |
| **Storage** | ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary) |
| **Deployment**| ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel) |
| **Design** | ![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma) |

## ⚙️ Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/emrhn-gngr/IndieFable.git](https://github.com/emrhn-gngr/IndieFable.git)
    cd IndieFable
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the following variables.
    ```env
    # MongoDB Connection String
    MONGODB_URI=

    # Cloudinary Credentials (for game image uploads via the form)
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 👨‍💻 Author

Hi, I'm **Emirhan**, a Computer Engineer. I love building beautiful and functional web applications. This project is a demonstration of my full-stack development skills.

* **GitHub:** [@emrhngnr](https://github.com/emrhngngr)
* **LinkedIn:** [@emrhn-gngr](https://www.linkedin.com/in/emrhn-gngr)
* **Twitter:** [@justEmrhn](https://x.com/justEmrhn)

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.