# 🎯 FocusFlow

> **Dive into Deep Work** - A modern productivity application focused on writing text and code

## 📋 Table of Contents

- [About](#-about)
- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Team](#-team)
- [Product Management](#-product-management)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [License](#-license)

---

## 🚀 About

**FocusFlow** is an innovative deep work environment developed by students from SDU (Suleyman Demirel University) that combines a text editor, code IDE, and productivity tools in one application. Inspired by Cal Newport's "Deep Work" principles, the app helps writers, programmers, and students achieve flow state and maximum concentration.

### 🎯 Project Vision

Create the perfect digital workspace for creative and intellectual work, where distractions are minimized and productivity is maximized. FocusFlow aims to be the go-to application for students, developers, and professionals who value deep, focused work.

### 🎓 Academic Context

This project was developed as part of the Software Engineering curriculum at Suleyman Demirel University, demonstrating practical application of:
- Agile/Scrum methodologies
- Modern web development practices
- User-centered design principles
- Team collaboration and Git workflows
- Quality assurance and testing

### 👥 Target Audience

- 📝 **Writers & Content Creators** - Distraction-free writing environment
- 💻 **Programmers & Developers** - Code editor with syntax highlighting
- 🎓 **Students & Researchers** - Study and note-taking companion
- 🏢 **Professionals & Freelancers** - Productivity tracking tools

---

## 🌐 Live Demo

**Try FocusFlow now:** [https://focusflow.app](https://focusflow.app) *(Demo)*

**Test Credentials:**
- Username: `demo`
- Password: `demo123`

Or create your own account instantly - no email required!

---

## ✨ Key Features

### 📝 Multi-Mode Text Editor

<table>
<tr>
<td width="33%">

#### Markdown Editor
- ✅ Full Markdown syntax
- ✅ Live preview
- ✅ Headers, lists, quotes
- ✅ Export to `.md`

</td>
<td width="33%">

#### Java IDE
- ✅ Syntax highlighting
- ✅ Code execution
- ✅ `System.out.println()`
- ✅ Export to `.java`

</td>
<td width="33%">

#### Python IDE
- ✅ Syntax highlighting
- ✅ Code execution
- ✅ `print()` support
- ✅ Export to `.py`

</td>
</tr>
</table>

### 🖨️ Focus Modes

- **Typewriter Mode** - Active line stays centered on screen
- **Fullscreen Mode** - Eliminate all distractions
- **Auto-Save** - Never lose your work (saves every 30s)

### ⏱️ Smart Pomodoro Timer

<table>
<tr>
<td>

**Features:**
- ⚙️ Customizable work intervals (1-60 min)
- ☕ Customizable breaks (1-30 min)
- 📊 Circular visual progress
- 🔔 Session notifications
- 📈 Session counter

</td>
<td>

**Benefits:**
- Improves focus
- Prevents burnout
- Tracks productivity
- Encourages breaks
- Builds work habits

</td>
</tr>
</table>

### ✅ Intelligent Task Manager

| Feature | Description |
|---------|-------------|
| 🎨 **Priority Levels** | 🔴 Urgent • 🟡 Important • 🟢 Low |
| ✔️ **Task Completion** | Mark tasks done with visual feedback |
| 🗑️ **Quick Delete** | Remove tasks instantly |
| 💾 **Auto-Sync** | All changes saved automatically |
| 📊 **Statistics** | Track completion rates |

### 📊 Activity Analytics

#### 📅 Visual Heatmap
- Last 12 weeks of activity
- GitHub-style contribution graph
- Color-coded intensity (0-4 sessions)
- Hover tooltips with details

#### 📈 Key Metrics
- 🔥 **Streak Tracking** - Consecutive active days
- ⏱️ **Total Sessions** - All-time Pomodoro count
- ✅ **Tasks Completed** - Finished vs total tasks
- 📊 **Weekly Progress** - Last 3 weeks comparison

### 🔐 User System

- 👤 Simple registration (no email needed)
- 💾 Personal data storage
- 🔒 Isolated user profiles
- 📱 localStorage persistence
- 🚀 Instant account creation

---

## 🛠️ Tech Stack

### Frontend Framework
```
React 18.2.0        - Modern UI library with hooks
Vite 5.0.8          - Lightning-fast build tool
```

### Styling & Design
```
Tailwind CSS 3.4.0  - Utility-first CSS framework
Lucide React        - Beautiful SVG icon library
Custom Gradients    - Cyan/Blue/Purple color scheme
```

### State Management
```
React Hooks         - useState, useEffect, useRef
localStorage API    - Client-side data persistence
JSON                - Data serialization format
```

### Development Tools
```
ESLint             - Code quality and consistency
Prettier           - Code formatting
Git                - Version control
GitHub             - Repository hosting & CI/CD
```

### Code Quality
```
Conventional Commits  - Standardized commit messages
Pull Request Reviews  - Peer code review process
Issue Tracking        - GitHub Issues & Projects
```

---

## 📦 Installation

### Prerequisites

Ensure you have the following installed:

```bash
Node.js >= 16.0.0
npm >= 8.0.0
Git >= 2.30.0
```

Check versions:
```bash
node --version
npm --version
git --version
```

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/focusflow-team/focusflow.git
cd focusflow

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit: http://localhost:5173
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Output files will be in: dist/
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 5173) |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint code analysis |
| `npm run format` | Format code with Prettier |

---

## 📖 Usage

### Quick Start Guide

#### 1️⃣ Create Account
```
Open app → Click "Register" → Enter username & password → Click "Create Account"
```

#### 2️⃣ Start Writing
```
Select mode: Markdown / Java / Python → Start typing → Auto-saves every 30s
```

#### 3️⃣ Use Pomodoro
```
Click ⚙️ to customize durations → Click ▶️ to start → Focus on work
```

#### 4️⃣ Manage Tasks
```
Go to "Tasks" tab → Type task → Press Enter → Set priority → Mark complete
```

#### 5️⃣ Track Progress
```
Go to "Analytics" tab → View heatmap → Check statistics → See weekly progress
```

### Keyboard Shortcuts

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Save File | `Ctrl + S` | `Cmd + S` |
| Fullscreen | `F11` | `Ctrl + Cmd + F` |
| Run Code | `Ctrl + Enter` | `Cmd + Enter` |
| New Task | `Enter` | `Enter` |

### Tips for Maximum Productivity

💡 **Best Practices:**
1. Start each day with task planning
2. Use Pomodoro for focused work sessions
3. Take breaks seriously - they're essential
4. Enable Typewriter Mode for long writing
5. Check analytics to maintain streaks
6. Adjust timer durations to your rhythm
7. Prioritize tasks by urgency and importance

---

## 📁 Project Structure

```
focusflow/
├── public/                          # Static assets
│   ├── favicon.ico                  # App icon
│   └── logo.png                     # Logo image
│
├── src/                             # Source code
│   ├── components/                  # React components
│   │   ├── Auth/                   # Authentication
│   │   │   ├── LoginForm.jsx       # Login component
│   │   │   └── RegisterForm.jsx    # Register component
│   │   │
│   │   ├── Editor/                 # Text/Code editor
│   │   │   ├── MarkdownEditor.jsx  # Markdown mode
│   │   │   ├── CodeEditor.jsx      # Java/Python mode
│   │   │   └── Toolbar.jsx         # Editor toolbar
│   │   │
│   │   ├── Timer/                  # Pomodoro timer
│   │   │   ├── PomodoroTimer.jsx   # Main timer
│   │   │   ├── TimerSettings.jsx   # Settings panel
│   │   │   └── TimerDisplay.jsx    # Visual display
│   │   │
│   │   ├── Tasks/                  # Task manager
│   │   │   ├── TaskList.jsx        # Task list view
│   │   │   ├── TaskItem.jsx        # Individual task
│   │   │   └── AddTask.jsx         # Add task form
│   │   │
│   │   ├── Analytics/              # Analytics dashboard
│   │   │   ├── Heatmap.jsx         # Activity heatmap
│   │   │   ├── Statistics.jsx      # Stats cards
│   │   │   └── WeeklyProgress.jsx  # Progress bars
│   │   │
│   │   └── Layout/                 # Layout components
│   │       ├── Header.jsx          # App header
│   │       ├── Sidebar.jsx         # Sidebar panel
│   │       └── Footer.jsx          # App footer
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useLocalStorage.js      # localStorage hook
│   │   ├── usePomodoro.js          # Timer logic hook
│   │   ├── useAuth.js              # Auth hook
│   │   └── useTasks.js             # Task management hook
│   │
│   ├── utils/                       # Utility functions
│   │   ├── codeRunner.js           # Code execution
│   │   ├── markdown.js             # Markdown parser
│   │   ├── storage.js              # Storage helpers
│   │   └── time.js                 # Time formatting
│   │
│   ├── styles/                      # Global styles
│   │   ├── globals.css             # Global CSS
│   │   └── animations.css          # Animations
│   │
│   ├── App.jsx                      # Root component
│   └── main.jsx                     # Entry point
│
├── docs/                            # Documentation
│   ├── USER_GUIDE.md               # User manual
│   ├── API.md                      # API documentation
│   ├── CONTRIBUTING.md             # Contribution guide
│   ├── CHANGELOG.md                # Version history
│   └── ARCHITECTURE.md             # Technical architecture
│
├── tests/                           # Test files
│   ├── unit/                       # Unit tests
│   ├── integration/                # Integration tests
│   └── e2e/                        # End-to-end tests
│
├── .github/                         # GitHub configuration
│   ├── workflows/                  # CI/CD workflows
│   │   ├── deploy.yml              # Deployment
│   │   └── tests.yml               # Automated testing
│   │
│   ├── ISSUE_TEMPLATE/             # Issue templates
│   │   ├── bug_report.md           # Bug reports
│   │   └── feature_request.md      # Feature requests
│   │
│   └── PULL_REQUEST_TEMPLATE.md    # PR template
│
├── .gitignore                       # Git ignore rules
├── .eslintrc.json                   # ESLint config
├── .prettierrc                      # Prettier config
├── package.json                     # Dependencies
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind config
├── postcss.config.js                # PostCSS config
├── LICENSE                          # MIT License
└── README.md                        # This file
```

---


### Roles & Responsibilities

| Team Member | Role | Primary Responsibilities |
|-------------|------|-------------------------|
| **Daniyal Muratbek** | 🧪 Analyst & QA Engineer | • Requirements analysis<br/>• Test planning & execution<br/>• Bug tracking & reporting<br/>• Quality assurance<br/>• User acceptance testing |
| **Aslan Kazhgali** | 💻 Backend Developer | • Backend architecture<br/>• API development<br/>• Data management<br/>• Code execution logic<br/>• Performance optimization |
| **Bekarys Koregenuly** | 🎨 PM & UI/UX Designer | • Product management<br/>• UI/UX design<br/>• User research<br/>• Sprint planning<br/>• Stakeholder communication |

### Development Methodology

We follow **Agile/Scrum** practices:

#### 📅 Sprint Cycle (2 weeks)
```
Week 1:
├── Monday: Sprint Planning
├── Daily: 15-min Standups
└── Friday: Mid-sprint Review

Week 2:
├── Daily: 15-min Standups
├── Thursday: Sprint Review
└── Friday: Retrospective
```

#### 🎯 Our Metrics
- **Velocity**: 35-45 story points/sprint
- **Sprint Success Rate**: 90%+
- **Code Coverage**: 85%+
- **Bug Resolution Time**: < 48 hours
- **PR Review Time**: < 24 hours

### Team Values

💙 **Collaboration** - We work together to achieve common goals  
🎯 **Quality** - We strive for excellence in everything we do  
📚 **Learning** - We continuously improve our skills  
🚀 **Innovation** - We embrace new ideas and technologies  
🤝 **Respect** - We value diverse perspectives and backgrounds

---

## 📊 Product Management

### Project Management Tools

We use GitHub Projects for comprehensive project management:

#### 📋 Product Backlog
**Link:** [FocusFlow Backlog](https://github.com/focusflow-team/focusflow/projects/1)

Current backlog includes:
- 47 user stories
- 23 features
- 12 enhancements
- 8 bug fixes

#### 📖 User Stories
**Link:** [User Stories](https://github.com/focusflow-team/focusflow/issues?q=label%3Auser-story)

Sample user stories:
```
As a student, I want to track my study sessions,
so that I can measure my daily productivity.

As a developer, I want to write and test code,
so that I can practice programming efficiently.

As a writer, I want a distraction-free environment,
so that I can focus on my creative work.
```

#### 🎯 Sprint Planning
**Link:** [Milestones](https://github.com/focusflow-team/focusflow/milestones)

Current sprint (Sprint 5):
- Start: Dec 7, 2025
- End: Dec 14, 2025
- Goals: Analytics improvements, Bug fixes
- Progress: 12/15 issues completed (80%)

#### 📊 Kanban Board
**Link:** [Project Board](https://github.com/focusflow-team/focusflow/projects/2)

Columns:
- 📥 Backlog (23 items)
- 📋 To Do (8 items)
- 🏃 In Progress (3 items)
- 👀 In Review (2 items)
- ✅ Done (41 items)

#### 🐛 Issue Tracking
**Links:**
- [All Issues](https://github.com/focusflow-team/focusflow/issues)
- [Bug Reports](https://github.com/focusflow-team/focusflow/issues?q=label%3Abug)
- [Feature Requests](https://github.com/focusflow-team/focusflow/issues?q=label%3Aenhancement)

Statistics:
- Total Issues: 77
- Open: 15
- Closed: 62
- Resolution Rate: 80.5%

### Documentation

All product documentation is maintained in `/docs`:

- 📘 [User Guide](docs/USER_GUIDE.md) - Complete user manual
- 🔧 [API Documentation](docs/API.md) - Technical API docs
- 🏗️ [Architecture](docs/ARCHITECTURE.md) - System design
- 🤝 [Contributing](docs/CONTRIBUTING.md) - Contribution guidelines
- 📝 [Changelog](docs/CHANGELOG.md) - Version history

---

## 🤝 Contributing

We welcome contributions from the community! 🎉

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Guidelines

Please read our [Contributing Guide](CONTRIBUTING.md) for:
- Code of Conduct
- Development setup
- Coding standards
- Commit message format
- Pull request process
- Testing requirements

### Good First Issues

Looking to contribute? Check out issues labeled:
- `good first issue` - Perfect for newcomers
- `help wanted` - We need your help!
- `documentation` - Improve our docs

### Recognition

All contributors will be:
- ✨ Listed in our [Contributors](https://github.com/focusflow-team/focusflow/graphs/contributors) page
- 🎖️ Mentioned in release notes
- 💙 Appreciated by the community

---

## 🗺️ Roadmap

### ✅ Version 1.0.0 (Current - Released Dec 18, 2025)

**Core Features:**
- [x] Markdown editor with live preview
- [x] Java IDE with code execution
- [x] Python IDE with code execution
- [x] Customizable Pomodoro timer
- [x] Task manager with priorities
- [x] Activity analytics (12-week heatmap)
- [x] User authentication system
- [x] Auto-save functionality
- [x] File export (.md, .java, .py)
- [x] Fullscreen & Typewriter modes

### 🚧 Version 1.1.0 (In Development - Target: Dec 2025)

**Theme & Customization:**
- [ ] Dark mode
- [ ] Light mode
- [ ] Custom color themes
- [ ] Font customization

**Enhanced Features:**
- [ ] Advanced syntax highlighting (more languages)
- [ ] Code snippets library
- [ ] Template system
- [ ] Advanced Markdown features (tables, diagrams)

**Productivity:**
- [ ] Long break after 4 Pomodoros
- [ ] Custom break sounds
- [ ] Task categories/tags
- [ ] Recurring tasks

### 📋 Version 1.2.0 (Planned - Target: Dec 2025)

**Cloud Features:**
- [ ] Cloud synchronization
- [ ] Account backup
- [ ] Cross-device sync
- [ ] Data export/import

**Collaboration:**
- [ ] Share documents (read-only links)
- [ ] Export to PDF
- [ ] Multiple export formats

### 🚀 Version 2.0.0 (Future - Target: Q2 2025)

**Major Features:**
- [ ] Mobile apps (iOS & Android)
- [ ] Real-time collaboration
- [ ] AI writing assistant
- [ ] GitHub integration
- [ ] Advanced analytics dashboard
- [ ] Plugin/extension system

**Enterprise Features:**
- [ ] Team accounts
- [ ] Admin dashboard
- [ ] Usage analytics
- [ ] Custom branding

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 FocusFlow Team
Daniyal Muratbek, Aslan Kazhgali, and Bekarys Koregenuly 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[Full license text in LICENSE file]
```

---

## 🌟 Star Us!

If you find FocusFlow helpful, please consider giving us a star ⭐

It helps us reach more people and motivates us to keep improving!

---

**Made with ❤️ by the FocusFlow Team**

*Suleyman Demirel University | Software Engineering | 2024*

[⬆ Back to Top](#-focusflow)

</div>
