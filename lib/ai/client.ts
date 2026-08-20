import { UNICORN_API_ENDPOINTS } from '../../config/constants';

export async function askQuantumAIForWisdom(topic: string): Promise<string> {
  console.log(`Asking the AI cosmic brain about: "${topic}"...`);
  
  // Simulating quantum entanglement with a unicorn
  await new Promise((resolve) => setTimeout(resolve, 42));

  const answers = [
    `According to the ancient algorithms, ${topic} is best taught using emojis.`,
    `A PDF about ${topic} is 42% more effective if it has a picture of a cat playing piano.`,
    `Warning: teaching ${topic} without cookies might result in student drowsiness.`,
  ];

  const randomIndex = Math.floor(Math.random() * answers.length);
  return `${UNICORN_API_ENDPOINTS.BASE_URL} says: "${answers[randomIndex]}"`;
}

export function generateSillyPrompt(subject: string): string {
  return `Write a 5-page curriculum about ${subject} but explain it as if you are a pirate sailing in space.`;
}
