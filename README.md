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


### `/public/assets/`
Contains all the static assets, such as images used across the app.

---

### `/src/app/`
Holds the main pages and layouts of the application:
- **`quiz/page.tsx`**: The quiz page where users answer questions.
- **`result/page.tsx`**: The result page displaying quiz outcomes.
- **`layout.tsx`**: The global layout for consistent design and structure.

---

### `/src/components/`
Reusable components to build the UI:
- **`QuizHeader.tsx`**: Displays the header with module ID, timer, and progress bar.
- **`QuestionSlide.tsx`**: Handles the rendering of quiz questions and options.
- **`FinishDialog.tsx`**: Provides a confirmation dialog for finishing the quiz.
- **`ui/`**: Includes utility components such as `Toaster` for notifications.

---

### `/src/libs/`
Contains application logic or helper data:
- **`question.ts`**: Stores the quiz questions used in the app.

---

### `/src/__tests__/`
Unit tests for validating app functionality:
- **`Quiz.test.tsx`**: Tests for the quiz page.
- **`Result.test.tsx`**: Tests for the result page.
- **`Home.test.tsx`**: Tests for the home page.

---

### `/src/styles/`
Global styles for the application:
- **`globals.css`**: Defines overarching styles applied throughout the app.

---

### Root Files
- **`Dockerfile`**: Configuration for containerizing the app.
- **`package.json`**: Contains the dependencies and npm scripts for the project.
- **`README.md`**: Documentation for the project.

---

## Navigation
This structure ensures clear separation of concerns, modularity, and ease of scalability for future enhancements.




