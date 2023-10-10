# AgriConnect

## How to install?

1. Download git and run `npm install`
2. Rename `.env.example` to `.env` and fill in the API keys
3. Go to your terminal and run `npx nodemon index.ts`

# About

- Saves messages into a Supabase db
- Acts as an agriculture expert that answers questions
- Has the `/reset` command to start over

# Telegram Framework

Can work as a framework for using Telegram bots as an interface for Gen-AI projects

- Has API calls to Anthropic
- Can accept voice messages, as it will transcribe it using OpenAI Whisper
