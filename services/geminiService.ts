import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from '../constants';

// Initialize Gemini Client
// The API key is obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = "gemini-2.5-flash";

const SYSTEM_INSTRUCTION = `
You are an AI assistant representing ${RESUME_DATA.name}. 
Your goal is to answer questions from recruiters or visitors about ${RESUME_DATA.name}'s background, skills, and experience based strictly on the provided resume data.

RESUME DATA:
${JSON.stringify(RESUME_DATA, null, 2)}

GUIDELINES:
1. Be professional, polite, and concise.
2. Answer in the first person (as if you are representing ${RESUME_DATA.name} or his digital avatar).
3. If the answer is not in the resume data, say "I don't have that specific information in my records, but I'd be happy to discuss it in an interview."
4. Highlight key achievements when relevant.
5. Keep responses under 100 words unless asked for a detailed explanation.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, but I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
};