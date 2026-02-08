# Care Bridge – Mini Healthcare Support Web App

**Internship Assignment for Jarurat Care**  
**Role:** Full Stack Developer (AI-Enabled)

A concept-level healthcare support portal designed for NGOs to collect, understand, and prioritize patient support requests using AI-powered automation.

---

## Table of Contents

- [Live Demo](#live-demo)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [AI / Automation Idea](#ai--automation-idea)
- [NGO Use Case (Jarurat Care)](#ngo-use-case-jarurat-care)
- [How the AI Works](#how-the-ai-works)
- [Tech Stack](#tech-stack)
- [Environment Variables](#environment-variables)
- [Getting Started Locally](#getting-started-locally)
- [Disclaimer](#disclaimer)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Live Demo

Deployed link here — https://carebridge-ai.vercel.app

---

## Project Overview

Care Bridge is a simple healthcare support web application built as part of the **Jarurat Care – Full Stack Developer (AI-Enabled)** internship assignment.

The application allows patients, caregivers, or family members to submit healthcare-related support requests. An AI-powered automation processes these requests to summarize concerns, categorize them, and identify urgency, helping NGOs respond faster and more efficiently.

**Note:** This project focuses on clarity, effort, and real-world applicability rather than full-scale production features.

---

## Key Features

- Clean healthcare-focused support request form
- AI-powered concern summarization and categorization
- Automatic urgency detection
- AI-generated acknowledgment response
- Minimal and calm UI suitable for healthcare and NGO use cases

---

## AI / Automation Idea

### AI-Based Concern Summarization & Smart Routing

When a user submits a healthcare support request, the free-text concern is processed using the Google Gemini AI API to:

- Generate a concise summary of the issue
- Identify the type of support required (e.g., care guidance, emotional support)
- Estimate urgency level
- Generate an automated acknowledgment response

This converts unstructured user input into structured, actionable data.

---

## NGO Use Case (Jarurat Care)

Healthcare NGOs like Jarurat Care often receive a large number of support requests in free-text form. Manually reviewing and prioritizing these requests can be time-consuming.

This AI-based automation helps by:

- Reducing manual review effort
- Highlighting urgent cases early
- Improving response time
- Enabling better support coordination

---

## How the AI Works

**High-level flow:**

1. User submits the support form
2. The concern text is sent to a backend API route
3. The backend sends the text to the Gemini AI API
4. Gemini returns structured JSON containing:
   - Summary
   - Category
   - Urgency
   - Auto-response
5. The response is displayed as an Instant support acknowledgment card

---

## Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS

### Backend
- Next.js API Routes

### AI Integration
- Google Gemini API (Free Tier)

### Hosting
- Vercel

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

**Security note:** The API key is securely handled on the backend and never exposed to the frontend.

---

## Getting Started Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## Disclaimer

This application is a concept-level prototype developed solely for internship evaluation purposes.

**It does not provide medical advice and should not be used as a substitute for professional healthcare services.**

---

## Future Improvements

- Admin dashboard for NGO staff
- Request tracking and status updates
- Secure database integration
- Multilingual support
- Advanced AI-based triage rules

---

## Author

**Prakhar Gupta**  
Full Stack Developer | AI-Enabled Web Applications