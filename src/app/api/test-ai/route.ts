import { NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";

export async function GET() {
  try {
    // 1. Wake up the AI
    const model = new ChatOpenAI({
      modelName: "gpt-4o-mini", 
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    // 2. Ask it a simple question
    const response = await model.invoke(
      "Explain exactly how a PDF file works to a 5 year old in one sentence."
    );

    // 3. Send the answer back to the browser
    return NextResponse.json({ 
      message: "AI Connection Successful!", 
      ai_response: response.content 
    });

  } catch (error) {
    return NextResponse.json({ error: "AI Brain Freeze 🥶", details: error }, { status: 500 });
  }
}