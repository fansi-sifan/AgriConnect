//start by asking some keywords
import Anthropic from "@anthropic-ai/sdk";

//on response
// generate image
// start beginning of story

// conversation
// generate key themes & store key themes

interface ChatMessage {
  user_id: string;
  sender: string;
  text: string;
}

import { createCompletions } from "./anthropic";

export async function createStoryIntro(keywords: string) {
  const intro_prompt = `Responding to user: ${keywords} Greet him in his language, and suggest what questions he can ask`;
  const prompt = `${Anthropic.HUMAN_PROMPT} ${intro_prompt}${Anthropic.AI_PROMPT}`;
 
  const completion = await createCompletions(prompt);
  return completion;
}

export async function continueStory(userChatHistory: ChatMessage[]) {
  // console.log(userChatHistory);
  let chatString = `Please answer the user question based on the following context:\n`;

  if (userChatHistory.length > 0) {
    for (let i = 0; i < userChatHistory.length; i++) {
      let chat = userChatHistory[i];
      let prompt =
        chat.sender === "bot" ? Anthropic.AI_PROMPT : Anthropic.HUMAN_PROMPT;
      chatString += `${prompt} ${chat.text} `;
    }

    // Remove trailing space
    chatString = chatString.trim();
  }

  chatString += `\nBe short and suggest follow up questions`;

  const completion = await createCompletions(chatString);
  return completion;
}
