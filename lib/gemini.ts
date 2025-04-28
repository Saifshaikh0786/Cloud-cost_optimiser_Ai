import { GoogleGenerativeAI } from "@google/generative-ai"

// Initialize the Google Generative AI with the API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export const gemini = (modelName: string) => {
  return genAI.getGenerativeModel({ model: modelName })
}
