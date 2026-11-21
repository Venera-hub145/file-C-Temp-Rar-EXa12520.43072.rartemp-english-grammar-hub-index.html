# English Grammar Hub — Grade 9

A responsive, game-style English grammar practice website built with vanilla HTML, CSS and JavaScript.

## Included
- 10 grammar topic cards with 5 multiple-choice questions per topic (50 questions total)
- Instant answer checking and explanations for correct and incorrect answers
- 20 points for each correct answer
- Levels: Rookie, Quick Learner, Rising Star, Word Wizard, Grammar Master
- Results screen after each challenge
- Progress dashboard with best score, accuracy and completion status
- Progress saved in the browser with `localStorage`
- Responsive layout for desktop, tablet and mobile

## Run locally
Open `index.html` in a modern browser. No installation or build step is required.

## Publish with GitHub Pages
1. Create a new GitHub repository, for example `english-grammar-hub`.
2. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. Wait for GitHub Pages to publish your site. Your URL will look like:
   `https://YOUR-USERNAME.github.io/english-grammar-hub/`

## Important notes
- Progress is saved separately in each browser/device. It is not a shared student database.
- Clearing browser data may erase saved progress.
- To add questions, edit the `topics` array in `script.js`. Each question has `q`, `opts`, `a` (zero-based correct answer index), and `why` (feedback explanation).
- The site uses Google Fonts when internet access is available; it falls back to the system sans-serif font otherwise.
