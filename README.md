# My Study Tool

An intelligent, AI-powered study assistant that transforms PDF lecture notes into interactive learning tools. Upload slides, textbooks, or notes, and the application automatically generates study guides, quizzes, flashcards, and crossword puzzles to help users master the material.

**Live Demo:** [https://my-study-tool.vercel.app](https://my-study-tool.vercel.app)

## Features

- **Secure Authentication:** Multi-user support via Clerk. Users can only access their own private study sets.
- **Document Ingestion:** Robust PDF text extraction using unpdf and pdf-parse, capable of handling complex layouts.
- **AI Study Guides:** Automatically summarizes complex documents into clean, formatted HTML study notes.
- **Interactive Flashcards:** Generates 30-card decks with a smooth 3D flip animation for active recall.
- **Practice Quizzes:** Quick 5-question multiple-choice quizzes to test immediate retention.
- **Mock Exams:** Full 20-question midterms that simulate a real test environment and provide detailed explanations for every answer.
- **Crossword Puzzles:** Gamified learning using a custom algorithm to build valid, intersecting crossword grids from specific notes.
- **Progress Tracking:** Persists history of all quiz and exam attempts to visualize mastery over time.
- **Aesthetic UI:** A custom, modern interface with a responsive Pink/Teal/Green visual theme.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Actions)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Typography
- **Database:** PostgreSQL (via Neon Serverless)
- **ORM:** Prisma
- **Authentication:** Clerk
- **AI/LLM:** LangChain + OpenAI (GPT-4o)
- **Deployment:** Vercel