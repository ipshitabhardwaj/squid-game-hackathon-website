# 🦑 Squid Game Hackathon 

An immersive, Netflix-inspired **Squid Game–themed hackathon experience**.  
Built with **React + Tailwind CSS** and deployed on the **Internet Computer** with a **Motoko backend**.

Every page and round is designed to feel like stepping into the Squid Game set — dark, tense, and cinematic.

---

## 🎮 Overview

This project simulates a **five-round Squid Game–style hackathon** featuring cinematic visuals, masked guards, eerie transitions, and elimination mechanics.

Participants progress through themed coding rounds until a final evaluation reveals the winners.

---

## 🔴 Rounds

1. **Red Light — Green Light Code**  
   Typing challenge with red-light detection and instant elimination.

2. **Broken Code Fix**  
   One-attempt logic repair challenge inside the control room.

3. **War of Code (Red vs Blue)**  
   Team-based progress battle with rope-pull animation.

4. **Morse Coding**  
   Decode Morse signals to unlock a hidden problem in the bunker.

5. **Evaluation Round**  
   Cinematic finale with results visualization.

---

## 🌌 Core Features

- Authentic Squid Game aesthetic with masked guards and dark environments
- Cinematic landing page with breathing guards and glowing accents
- Automatic round progression with seamless transitions
- Thematic guard masks: Circle, Triangle, Square with red glow textures
- Cinematic animations: flicker, breathing, glitch, guard-step effects
- Elimination visuals with rifle silhouettes and glitch overlays

---

## 🧩 Project Structure

frontend/
├── src/
│   ├── pages/
│   │   ├── LandingPage.tsx
│   │   ├── RoundSelectionPage.tsx
│   │   ├── DemoRound1.tsx   # Red Light — Green Light
│   │   ├── DemoRound2.tsx   # Broken Code Fix
│   │   ├── DemoRound3.tsx   # War of Code
│   │   ├── DemoRound4.tsx   # Morse Coding
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── TransitionOverlay.tsx
│   │   ├── ProgressTracker.tsx
│   │   └── RoundDisplay.tsx
│   ├── hooks/
│   └── lib/
│
├── index.css
├── tailwind.config.js

backend/
└── main.mo


---

## 🧱 Assets

Located under `/generated`:

- Masked Guards: Circle, Triangle, Square  
- Backgrounds: Playground, Control Room, Arena, Bunker  
- Overlays: Grain, Spotlight, Metallic Symbols  

---

## ⚙️ Local Setup

### Prerequisites

- Node.js 18+
- pnpm
- dfx SDK

### Commands

```bash
pnpm install
pnpm dev

# Optional backend deployment
dfx start --background
dfx deploy
```
### Visit: http://localhost:5173
🌑 Design Guidelines

Font: Game of Squids (add to /public/fonts)

Visual mood: Psychological tension, minimal lighting

Colors: No bright colors

Audio: Ambient and event sounds (placeholder)

Animations: Slow and cinematic

🚀 Internet Computer Deployment

Deploy to the live Internet Computer network:

dfx start --background
dfx deploy


After deployment, canister URLs will be displayed in the terminal.

Example

Frontend: https://abcdefg-icp0.app

Backend: https://hijklmn-icp0.app

Open the frontend URL to experience the Squid Game Hackathon live.
