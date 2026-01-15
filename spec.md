# Squid Game College Hackathon Platform

## Overview
A dark, cinematic hackathon platform inspired by Squid Game aesthetics with five sequential rounds and immersive visual effects.

## Core Features

### Round Progression System
- Five sequential rounds that unlock automatically after completing the previous round
- Animated transitions between rounds using existing TransitionOverlay
- Progress tracking to show current round and completion status across all five rounds
- Smooth, cinematic transitions that build tension

### Visual Design
- Dark, cinematic color scheme with Squid Game-inspired aesthetics
- Atmospheric lighting effects throughout the interface using existing assets
- Tension-building transition animations between rounds
- Immersive visual elements that enhance the gaming experience
- Utilizes existing assets: arena-background, geometric-overlay, spotlight-effect, round-complete-icon, squid-hackathon-logo

### Five Round Structure

#### Round 1: Red Light-Green Light Code
- Description: Participants solve coding problems on the website
- Mechanism: Random red lights appear every 10–15 seconds; typing while red eliminates the participant
- Sound cue: Song plays and stops 1 second before light turns red
- Time: 9:45–10:45; result announced at 11:00 AM

#### Round 2: Broken Code Fix
- Description: Participants correct logic errors in broken code
- Constraint: Only one submission allowed
- Time: 11:15–12:45; result at 1:15 PM

#### Round 3: War of Code (Team Battle R–B)
- Red vs Blue teams with identical challenges
- Progress board for both teams
- First team to complete wins
- Time: 2:15–4:30; results in the evening

#### Round 4: Morse Coding
- Teams receive a paper with Morse code to decode a problem statement and complete it
- Time: 10:00–1:00; results afterwards

#### Round 5: Evaluation Styled Round
- Evaluation round with summarized results and cinematic ending scene

### User Interface
- Single-page application with animated content transitions
- Responsive design for various screen sizes
- Interactive elements with hover effects and animations
- Progress indicators showing advancement through all five rounds
- Timings and round rules visible within the UI for each stage
- English language content throughout

## Technical Requirements

### Frontend-Only Application
- All game state and progress stored in frontend
- No backend data persistence required
- Client-side round progression logic
- Local storage for maintaining progress across sessions

### Animation System
- Smooth transitions between different round content using TransitionOverlay
- Loading animations and visual effects
- Cinematic entrance/exit animations for round elements
- Atmospheric background effects and lighting using existing assets

## User Experience
- Immersive, game-like progression through five hackathon rounds
- Visual storytelling through transitions and effects
- Tension-building elements that maintain engagement
- Clear navigation and progress indication
- Automatic progression between completed rounds
