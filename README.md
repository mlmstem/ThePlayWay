# Quiz App

This is a **Quiz App** designed to teach parenting skills through online courses and interactive quizzes. The app has been dockerized for ease of deployment and development.

---

## Getting Started

You can run this project in two ways:

### 1. Using Docker

This app has been dockerized, allowing you to build and run it as a containerized application. Follow these steps:

1. **Build the Docker image:**

`docker build -t quiz-app` .

Run the Docker container:

`docker run -p 3000:3000 quiz-app`

Open http://localhost:3000 in your browser to access the app.

2. **Local Development Environment**

To run the app locally, follow these steps:

Install dependencies:

`npm install`

Start the development server:


`npm run dev`

Open http://localhost:3000 in your browser to access the app.

## Tech Stack and Choices

This project utilizes the following technologies:

*TypeScript*: For a strongly-typed development environment, improving code reliability and maintainability.
*React*: As the base library for building user interfaces.
*Next.js*: Custom Framework as suggested.
*Shadcn/UI*: Chosen for its ease of creating mobile-responsive components that are easy to style further.
*Framer Motion*: Used for smooth transitions between quiz questions, improving the user experience.
*Jest*: Employed to validate the app’s primary features through testing.

## Design Philosophy

The design of this app was crafted to be cute and cartoonish, aligning with the theme of parenting courses. Since the app aims to teach parents how to better understand their kids, the design conveys a sense of fun and warmth, making the learning experience engaging and approachable.

## Features and Behavior
* Quiz Progression
Non-Persistent State: The app intentionally does not store persistent states, meaning all progress is reset upon refresh. This decision was made to simplify the app's functionality for its prototype phase.

Only the current score is recorded, and no history of previous answers is maintained. This approach makes reviewing past answers impossible but aligns with the requirement for a lightweight prototype.

## Area for Improvement

Result Page
The result page currently displays only the user's final score, taking up more space than necessary.
Future Enhancements: 
Allow users to compare their current results with previous test results.
Display visual comparisons and trends to help users gauge their progress.

These features were not implemented as the project scope required a minimalistic prototype.

## Project Structure
Below is the folder structure for the project:

quiz-app/
├── public/
│   ├── assets/             # Static Assets (e.g., images)
├── src/
│   ├── app/
│   │   ├── quiz/
│   │   │   └── page.tsx    # Quiz Page
│   │   ├── result/
│   │   │   └── page.tsx    # Result Page
│   │   └── layout.tsx      # Global Layout
│   ├── components/
│   │   ├── QuizHeader.tsx  # Quiz Header Component
│   │   ├── QuestionSlide.tsx # Question Component
│   │   ├── FinishDialog.tsx # Dialog Component
│   │   └── ui/             # UI Utility Components (e.g., Toaster)
│   ├── libs/
│   │   └── question.ts     # List of Quiz Questions
│   ├── __tests__/
│   │   ├── Quiz.test.tsx   # Unit Tests for Quiz Page
│   │   ├── Result.test.tsx # Unit Tests for Result Page
│   │   └── Home.test.tsx   # Unit Tests for Home Page
│   ├── styles/
│   │   └── globals.css     # Global Styles
├── Dockerfile              # Docker Configuration
├── package.json            # Dependencies and Scripts
└── README.md               # Project Documentation





