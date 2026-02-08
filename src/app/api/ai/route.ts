import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
    // Read data from frontend
    const body = await req.json();
    const concern = await body.concern;
    const support = await body.supportType;
    const urgency = await body.patientUrgency;

    // Prompt (this is how you "talk" to AI)
    const prompt = `
    You are a healthcare support assistant for an NGO.
    
    Given a patient's concern:
    1. Summarize the concern in very few and easy to understandable sentence.
    2. Categorize it into one of:
        - General Inquiry
        - Care or treatment guidance
        - Appointment or scheduling help
        - Emotion or mental well-being support
    3. Also decide urgency:
        - General Questions
        - Needs Guidance
        - Urgent support needed
    4. Write a polite auto-response (2 lines) based on the patient's conditions as:
        - Concern: ${concern}
        - Type of support needed: ${support}
        - The level of urgency patient need: ${urgency}

    Analyze the patient's concern and return ONLY valid JSON
    (no markdown, no explanation, no extra text).

    JSON format:
        {
            "summary": "",
            "category": "",
            "urgency": "",
            "autoResponse": ""
        }
    `;

    const ai = new GoogleGenAI({});

     // Call AI for response
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
            temperature: 0.1,
        },
    });
        
    console.log(response.text);

    // Send back to client
    return NextResponse.json({
        aiOutput: response.text,
    });
}