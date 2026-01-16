Design and generate a COMPLETE FRONTEND UI for a Squid Game–themed college hackathon platform.
This is FRONTEND ONLY (no backend logic). The experience must feel dark, intense, intimidating,
and visually very close to the Squid Game Netflix series.

STRICT DESIGN REQUIREMENTS:
- Theme: Squid Game (Netflix)
- Mood: dark, silent, pressurizing, intimidating
- No bright colors, no gradients, no playful UI
- Entire site in DARK MODE ONLY
- Heavy use of shadows, grain/noise overlays, slow animations

--------------------------------------------------
FONTS:
- Primary font for headings, player numbers, round titles: "Game Of Squids"
- Secondary font for instructions and UI text: Inter or Montserrat
- Code editor font: Monospace

--------------------------------------------------
COLOR PALETTE (STRICT, DO NOT DEVIATE):
- Primary Blood Red: #D62828
- Pitch Black: #0B0B0B
- Dark Grey Panels: #1A1A1A
- Off White Text: #EDEDED
- Neon Survival Green (use VERY sparingly): #00FF9C

--------------------------------------------------
GLOBAL UI RULES:
- Background always dark (black or very dark grey)
- Red used for danger, titles, elimination, warnings
- Green used ONLY for “alive” or “survived”
- Big bold typography for round titles
- Subtle background images (blurred, darkened)
- Audio placeholders (heartbeat, buzzer, gunshot, morse beeps)
- Grain/noise overlay across screens

--------------------------------------------------
STRUCTURE / PAGES TO BUILD:

1) LANDING PAGE
- Fullscreen dark background
- Faded silhouettes of Squid Game guards and shapes (circle, triangle, square)
- Title (large, centered, Game Of Squids font):
  "ONE HACKATHON. MULTIPLE THRILLERS."
- Subtitle:
  "Code. Conquer. Win."
- Countdown timer block
- Buttons:
  - REGISTER
  - RULEBOOK
  - ENTER GAME
- Buttons have red glow on hover

--------------------------------------------------
2) PLAYER DASHBOARD
- Player identity is a NUMBER only (e.g., PLAYER 067)
- Player card shows:
  PLAYER NUMBER
  CURRENT ROUND
  STATUS: ALIVE / ELIMINATED
- Progress indicator for rounds
- Timer for next round
- Button: ENTER ARENA (enabled only during active rounds)
- Dashboard turns red and locks if eliminated

--------------------------------------------------
ROUND-SPECIFIC UI SCREENS:

--------------------------------------------------
ROUND 1: RED LIGHT – GREEN LIGHT CODE

VISUAL THEME:
- Inspired by the Squid Game doll scene
- Background: blurred dark playground image
- Doll silhouette at top center

TOP BAR:
- Left: PLAYER NUMBER (big, red)
- Center: LARGE CIRCLE INDICATOR
  - GREEN state: glowing, breathing animation
  - RED state: flashing, screen shake
- Right: Countdown timer (digital, red)

MAIN AREA:
- Fullscreen dark-themed code editor
- Cursor glows green ONLY during green light

RED LIGHT EFFECT:
- Screen flashes red
- Keyboard input visually disabled
- Warning sound placeholder

ELIMINATION SCREEN:
- Freeze frame
- Red glitch animation
- Text:
  "PLAYER 067 ELIMINATED"

SURVIVAL SCREEN:
- Text in green:
  "YOU SURVIVED ROUND 1"

--------------------------------------------------
ROUND 2: BROKEN CODE FIX

VISUAL THEME:
- Dark control-room environment
- Subtle red grid overlay

HEADER:
- Title:
  "ROUND 2 — BROKEN CODE FIX"
- Subtitle in red:
  "ONE SUBMISSION. NO MERCY."

LAYOUT:
- Split screen
- Left panel (read-only):
  Broken Code (red border)
- Right panel:
  Editable code area
- Vertical glowing red divider

SUBMIT FLOW:
- Single SUBMIT button
- On click, show modal:
  "THIS IS YOUR FINAL SUBMISSION. PROCEED?"
- After submission:
  Screen locks
  Text:
  "WAIT FOR VERDICT"
- Masked guard image fades in

--------------------------------------------------
ROUND 3: WAR OF CODE — RED vs BLUE

VISUAL THEME:
- Inspired by Tug of War
- Dark arena background
- Rope graphic stretched horizontally across center

TOP:
- Title:
  "WAR OF CODE"
  "RED vs BLUE"

TEAM UI:
- Left side: RED TEAM
- Right side: BLUE TEAM
- Progress bars visually pulling the rope
- Live-looking scoreboard UI

PLAYER VIEW:
- Code editor at bottom
- Team-colored glow around editor
- Submission causes rope to jerk visually

RESULT SCREEN:
- Winning side:
  "YOU ADVANCE"
- Losing side:
  "ELIMINATED"
- Screen fades to black

--------------------------------------------------
ROUND 4: MORSE CODING

VISUAL THEME:
- Underground terminal / secret message vibe
- Black background with blinking cursor
- Morse waveform visuals

SCREEN 1: DECODE
- Title:
  "DECODE THE MESSAGE"
- Monospace input field
- Morse beep audio placeholder

SCREEN 2: UNLOCKED PROBLEM
- Classified file animation slides in
- Red "CONFIDENTIAL" stamp effect
- Problem statement revealed

SUBMISSION CONFIRMATION:
- Terminal-style green text:
  "MESSAGE ACCEPTED"

--------------------------------------------------
COMMON ELEMENTS ACROSS ALL ROUNDS:
- Player Card:
  PLAYER NUMBER
  ROUND NUMBER
  STATUS
- Elimination screens are abrupt and dramatic
- Survival screens are minimal and calm
- No emojis, no playful elements

--------------------------------------------------
IMAGE USAGE:
- Use Squid Game–inspired images:
  - Doll silhouette
  - Masked guards (circle, triangle, square)
  - Dark playground
  - Control room
  - Arena / rope
- Images must be darkened, blurred, cinematic
- Do NOT use bright or cartoonish images

--------------------------------------------------
TECHNICAL NOTES:
- Build using modern React-style component structure
- Use Tailwind CSS for styling
- Ensure responsive design (desktop-first)
- Frontend only, mock data allowed

--------------------------------------------------
DESIGN PHILOSOPHY:
This UI must feel like the Squid Game world:
silent, tense, unforgiving, and serious.
Not fun. Not colorful. No mercy.
