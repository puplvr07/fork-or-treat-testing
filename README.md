# Fork or Treat 🎃

*A GitHub Hands-On Workshop*

**Live Demo:** https://fork-or-treat.vercel.app/

A beginner-friendly, single-page Halloween profile card used for our GitHub Study Jam. It’s a **static** site (plain HTML/CSS + tiny JS for data rendering) you can fork, customize, and deploy. Perfect for learning repo basics, branching, commits, pull requests, and branch preview deployments.

## ✨ Features

* Responsive glassmorphism profile card (no JS framework)
* Easy content editing via a single data file (`profile.js`)
* Accessibility-minded HTML structure
* Cute seasonal accents (bats, web overlay, spooky fonts)
* Ready for **Vercel** (auto branch previews) or **GitHub Pages**

## 🗂 Folder Structure

```
fork-or-treat/
├─ index.html
├─ styles.css
├─ profile.js        # edit your info (name, bio, tags, facts, avatar)
├─ render.js         # maps profile.js → DOM
├─ assets/
│  ├─ img/           # images (avatar, bats, web, pumpkins, etc.)
│  └─ fonts/         
└─ README.md
```

## 🚀 Quick Start

```bash
# 1) Clone
git clone https://github.com/afgeloo/fork-or-treat.git .

# 2) Open locally
# Option A: Double-click index.html
# Option B (recommended): Use VS Code + Live Server extension
```

### Edit your details

Open `profile.js` and update the fields:

```js
window.__PROFILE__ = {
  name: "Your Name",
  role: "Your Future Role",
  bio: "One-liner about you.",
  avatar: "assets/img/profile.png",
  tags: ["#HTML", "#CSS", "#Git", "#Halloween"],
  facts: [
    { label: "Nickname", value: "Gelo" },
    { label: "Favorite Food", value: "Tonkatsu 🍱" },
    { label: "Course", value: "BS Computer Science" },
    { label: "College", value: "Pamantasan ng Lungsod ng Maynila" },
    { label: "Hobby", value: "Pixel art 🎨" },
    { label: "Location", value: "Manila, PH 📍" }
  ]
};
```

## 🌐 Deploy

### Vercel (recommended)

1. **Import GitHub Repo** in Vercel.
2. Keep default build (static): no build command, output is repository root.
3. **Enable Preview Deployments**: each branch gets a unique URL.
4. Push to `gelo-branch` or any feature branch → Vercel creates a preview URL.

### GitHub Pages (static)

1. Settings → Pages → Source: **Deploy from a branch**.
2. Branch: `main`, Folder: `/ (root)` → Save.

## 🔁 Git Basics Used in the Workshop

```bash
# create repo (local → remote)
git init
git add .
git commit -m "chore: initial commit"
git branch -M main
git remote add origin <your-repo-URL>
git push -u origin main

# clone (remote → local)
git clone <repo-url> .

# branch workflow
git checkout -b gelo-branch
# ...edit files...
git add .
git commit -m "feat: add animated bats and web overlay"
git push -u origin gelo-branch

# update feature branch with latest main
git fetch origin main
git merge origin/main      # or: git rebase origin/main
# resolve → add/commit → push
```

## 📥 Contributing (PR Flow)

1. Create a branch: `git checkout -b feature/my-change`
2. Commit using Conventional Commits:

   * `feat:` new feature
   * `fix:` bug fix
   * `docs:` docs only
   * `style:` formatting (no code change)
   * `refactor:` restructure (no behavior change)
   * `perf:` performance
   * `test:` add/modify tests
   * `build:` tooling/deps
   * `ci:` CI config/scripts
   * `revert:` revert a commit
3. Push and open a **Pull Request**.
4. Get a **Vercel preview** URL for review.
5. Merge when approved.

## 🧪 Verification Checklist

* [ ] Mobile view centers the card properly
* [ ] Avatar loads (correct `assets/img/profile.png`)
* [ ] Fonts load from `assets/fonts/` (Nosifer/Jolly Lodger)
* [ ] Tags/facts hover with pumpkin-glow animation
* [ ] No horizontal scroll on small screens

## 📜 License

MIT — do whatever, just keep the notice.

## 💖 Acknowledgments

* Participants of **Fork or Treat: A GitHub Hands-On Workshop**
* GDGoC PLM community and volunteer mentors
