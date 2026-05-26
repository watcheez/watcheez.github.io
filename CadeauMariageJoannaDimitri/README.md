# Cadeau Mariage Joanna & Dimitri — Digital Wedding Gift Page

## Project Overview
This project is a single-page website for Joanna & Dimitri's wedding, allowing guests to contribute to a digital gift fund ("urne numérique") via PayPal. The page is styled to look like an elegant wedding invitation, with floral backgrounds, gold accents, and a festive particle effect. It also features background music that plays on the first user interaction.

---

## Features
- **Elegant wedding invitation design** (HTML/CSS)
- **Responsive layout** for desktop and mobile
- **Floral watercolor background** and gold-accented borders
- **Digital urn (PayPal.me) button** for contributions
- **Secure payment notice**
- **Custom particle effect** (floating golden particles above all content)
- **Background music** ("marry-you-official-lyric-video.mp3") that auto-plays on first user interaction (touch/click)
- **All text in French**

---

## File Structure
- `index.html` — Main HTML file
- `style.css` — All styles for layout, fonts, backgrounds, and responsiveness
- `script.js` — Handles PayPal button, particle effect, and music playback
- `resource/marry-you-official-lyric-video.mp3` — Background music (must be provided)
- `resource/backgroung.png` — Watercolor/floral background image (must be provided)

---

## Key Implementation Details

### 1. HTML Structure
- Uses Google Fonts: 'Great Vibes' for names/headings, 'Montserrat' for body
- Main content is inside a `.container` div
- `<audio id="wedding-audio" src="resource/marry-you-official-lyric-video.mp3" autoplay hidden></audio>` for music
- `<canvas id="particles"></canvas>` for the particle effect, placed above all content
- PayPal contribution button triggers a new tab to PayPal.me

### 2. CSS Highlights
- `.container` is centered, with a max width and rounded corners
- Responsive adjustments for mobile (smaller margins, stacked indications)
- Particle canvas is fixed, full-screen, pointer-events: none, z-index: 1000
- Elegant color palette: golds, creams, greens

### 3. JavaScript Features
- **Particle Effect:**
  - Draws soft, floating golden particles on the canvas
  - Responsive to window resize
- **Music Playback:**
  - Music only plays after the first user interaction (touch or click), to comply with browser autoplay policies
- **PayPal Button:**
  - Opens the PayPal.me link in a new tab

---

## Usage Notes
- Place your actual PayPal.me link in the `contributeUrne()` function in `script.js`
- Place your actual MP3 file in `resource/marry-you-official-lyric-video.mp3`
- Place your background image in `resource/backgroung.png`
- The music will not play automatically until the user interacts with the page (touch/click)

---

## Example Conversation Summary
This project was built iteratively with the following requirements and solutions:
- Reproduce a wedding invitation as a web page (HTML/CSS/JS)
- Fix responsiveness and margin issues
- Add background music that auto-plays on first interaction
- Add a festive particle effect above all content
- Ensure all features work on both desktop and mobile

---

## Customization
- You can change the particle color, count, or behavior in `script.js`
- All text is in French, but can be translated as needed
- The design is easily adaptable for other events

---

## Credits
- Design and requirements provided by user
- Code and implementation by GitHub Copilot

---

## License
Personal use only (wedding gift page)
