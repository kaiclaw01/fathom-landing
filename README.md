# FATHOM — We Go Deeper

Strategic depth agency landing page with immersive scroll experience.

## Features

- 🌊 **Immersive Depth Journey** — Scroll-driven underwater experience
- 🎯 **Adaptive Navigation** — Nav blends seamlessly with each depth level
- 🪼 **Ambient Life** — Jellyfish, bubbles, bioluminescent particles
- 📝 **Lead Capture** — 4-step onboarding modal with form validation
- 📱 **Telegram Notifications** — Instant alerts when leads submit
- ⚡ **Vercel Serverless** — API for form submissions

## Local Development

```bash
npm run dev
```

Open http://localhost:3001

## Deployment

### Prerequisites

1. **Vercel CLI**
   ```bash
   npm i -g vercel
   vercel login
   ```

2. **GitHub CLI** (optional, for repo creation)
   ```bash
   winget install GitHub.cli
   gh auth login
   ```

### Deploy to Vercel

```bash
vercel --prod
```

### Environment Variables

Set these in Vercel Dashboard → Project → Settings → Environment Variables:

| Variable | Description |
|----------|-------------|
| `TELEGRAM_BOT_TOKEN` | Your Telegram bot token from @BotFather |
| `TELEGRAM_CHAT_ID` | Your Telegram chat/group ID |

## Telegram Setup

1. Create a bot via [@BotFather](https://t.me/BotFather)
2. Get your chat ID via [@userinfobot](https://t.me/userinfobot)
3. Add environment variables to Vercel

## Project Structure

```
showcase/
├── index.html          # Landing page
├── api/
│   └── submit.js       # Serverless form handler
├── vercel.json         # Vercel configuration
├── package.json        # Project metadata
└── README.md           # This file
```

## Tech Stack

- HTML/CSS/JS (no frameworks)
- Vercel Serverless Functions
- Telegram Bot API

---

Built by FATHOM 🌊
