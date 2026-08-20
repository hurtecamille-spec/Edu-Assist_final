import { NextRequest, NextResponse } from 'next/server';
import { askQuantumAIForWisdom, generateSillyPrompt } from '../../../lib/ai/client';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const topic = searchParams.get('topic') || 'quantum physics for unicorns';

  const prompt = generateSillyPrompt(topic);
  const wisdom = await askQuantumAIForWisdom(topic);

  return NextResponse.json({
    generatedPrompt: prompt,
    aiWisdom: wisdom,
    timestamp: new Date().toISOString(),
  });
}
