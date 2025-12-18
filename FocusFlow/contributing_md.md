# Contributing to FocusFlow

First off, thank you for considering contributing to FocusFlow! It's people like you that make FocusFlow such a great tool for productivity and deep work.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

**Positive behavior includes:**
- ✅ Being respectful and inclusive
- ✅ Welcoming newcomers and helping them learn
- ✅ Focusing on what is best for the community
- ✅ Showing empathy towards other community members
- ✅ Accepting constructive criticism gracefully

**Unacceptable behavior includes:**
- ❌ Harassment and discriminatory language/behavior
- ❌ Trolling, insulting/derogatory comments
- ❌ Public or private harassment
- ❌ Publishing others' private information
- ❌ Other conduct which could reasonably be considered inappropriate

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the project team at:
- 📧 support@focusflow.app
- 📧 220107079@stu.sdu.edu.kz (Daniyal Muratbek)
- 📧 220107062@stu.sdu.edu.kz (Aslan Kazhgali)

All complaints will be reviewed and investigated promptly and fairly.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

```bash
Node.js >= 16.0.0
npm >= 8.0.0
Git >= 2.30.0
```

Verify installations:
```bash
node --version
npm --version
git --version
```

### Setting Up Development Environment

#### 1. Fork the Repository

Click the "Fork" button at the top right of the [FocusFlow repository](https://github.com/focusflow-team/focusflow).

#### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/focusflow.git
cd focusflow
```

#### 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/focusflow-team/focusflow.git
git remote -v
```

You should see:
```
origin    https://github.com/YOUR_USERNAME/focusflow.git (fetch)
origin    https://github.com/YOUR_USERNAME/focusflow.git (push)
upstream  https://github.com/focusflow-team/focusflow.git (fetch)
upstream  https://github.com/focusflow-team/focusflow.git (push)
```

#### 4. Install Dependencies

```bash
npm install
```

#### 5. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming convention:
- `feature/` - New features (e.g., `feature/add-dark-mode`)
- `fix/` - Bug fixes (e.g., `fix/timer-reset-bug`)
- `docs/` - Documentation (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/simplify-auth`)
- `test/` - Tests (e.g., `test/add-timer-tests`)
- `chore/` - Maintenance (e.g., `chore/update-dependencies`)

#### 6. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your changes in real-time.

---

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [existing issues](https://github.com/focusflow-team/focusflow/issues) to avoid duplicates.

**When creating a bug report, include:**

- ✅ Clear and descriptive title
- ✅ Steps to reproduce the behavior
- ✅ Expected behavior
- ✅ Actual behavior
- ✅ Screenshots (if applicable)
- ✅ Environment details (OS, browser, version)
- ✅ Console errors (press F12)

**Use this template:**

```markdown
## Bug Description
Brief description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Environment
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 120]
- FocusFlow Version: [e.g., 1.0.0]

## Screenshots
[Add screenshots if applicable]

## Console Errors
[Paste any console errors]
```

### Suggesting Features

Feature suggestions are welcome! Please:

- ✅ Check if the feature has already been suggested
- ✅ Provide a clear and detailed explanation
- ✅ Explain why this feature would be useful
- ✅ Provide examples or mockups if possible

**Use this template:**

```markdown
## Feature Description
Brief description of the feature

## Problem It Solves
What problem does this feature address?

## Proposed Solution
How should this feature work?

## Alternatives Considered
What other solutions did you consider?

## Additional Context
Any other relevant information
```

### Code Contributions

#### Finding Issues to Work On

Look for issues labeled:
- `good first issue` - Perfect for newcomers
- `help wanted` - We need your help
- `bug` - Bug fixes needed
- `enhancement` - New features

Comment on the issue to let others know you're working on it!

#### Making Changes

1. **Write clean, readable code**
   - Follow existing code style
   - Add comments for complex logic
   - Keep functions small and focused

2. **Test your changes**
   ```bash
   npm run test
   npm run lint
   ```

3. **Update documentation**
   - Update README.md if needed
   - Update USER_GUIDE.md for user-facing changes
   - Add JSDoc comments to new functions

4. **Commit your changes**
   - Follow commit message conventions (see below)
   - Keep commits atomic and focused
   - Reference issues in commit messages

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Use a clear and descriptive title
   - Fill out the PR template completely
   - Link related issues using `Closes #123`
   - Request review from maintainers

---

## 🔄 Development Process

### Workflow Diagram

```
Fork → Clone → Branch → Code → Test → Commit → Push → PR → Review → Merge
```

### Keeping Your Fork Updated

Regularly sync your fork with the upstream repository:

```bash
# Fetch upstream changes
git fetch upstream

# Switch to main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push to your fork
git push origin main
```

### Working on Multiple Features

```bash
# Start new feature from updated main
git checkout main
git pull upstream main
git checkout -b feature/new-feature

# Continue working...
```

---

## 📝 Style Guidelines

### JavaScript/React

**General Rules:**
- ✅ Use ES6+ features (arrow functions, destructuring, etc.)
- ✅ Use functional components with hooks
- ✅ Prefer `const` over `let`, avoid `var`
- ✅ Use meaningful variable names
- ✅ Add JSDoc comments for functions

**Code Examples:**

```javascript
// ❌ Bad
var x = 5;
function foo(a, b) {
  return a + b;
}

// ✅ Good
const sum = 5;
const addNumbers = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};
```

**React Components:**

```javascript
// ✅ Good - Functional component with hooks
import React, { useState, useEffect } from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="task-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{task.text}</span>
      {isHovered && (
        <button onClick={() => onDelete(task.id)}>Delete</button>
      )}
    </div>
  );
};

export default TaskItem;
```

**JSDoc Comments:**

```javascript
/**
 * Formats time in MM:SS format
 * @param {number} seconds - Time in seconds
 * @returns {string} Formatted time string (e.g., "25:30")
 * @example
 * formatTime(90) // Returns "01:30"
 */
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};
```

### CSS/Tailwind

**Use Tailwind utility classes:**

```jsx
// ✅ Good
<div className="flex items-center gap-4 p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg hover:shadow-xl transition-all">
  {/* Content */}
</div>

// ❌ Avoid custom CSS unless necessary
<div className="custom-container">
  {/* Content */}
</div>
```

**Grouping Classes:**
```jsx
// Group related classes for readability
<div className={`
  flex items-center justify-between
  p-4 rounded-lg
  bg-white/10 border border-white/20
  hover:bg-white/20 transition-all
`}>
  {/* Content */}
</div>
```

### File Organization

**Component Structure:**
```
components/
├── Timer/
│   ├── index.js              # Export all components
│   ├── PomodoroTimer.jsx     # Main timer component
│   ├── TimerSettings.jsx     # Settings panel
│   └── TimerDisplay.jsx      # Visual display
```

**Component Template:**
```jsx
import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

/**
 * PomodoroTimer component
 * Displays and controls the Pomodoro timer
 */
const PomodoroTimer = ({ workDuration, breakDuration }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(workDuration * 60);

  useEffect(() => {
    // Effect logic
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="pomodoro-timer">
      {/* Component JSX */}
    </div>
  );
};

export default PomodoroTimer;
```

---

## 💬 Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Code style (formatting, semicolons, etc.)
- `refactor:` - Code refactoring (no functional changes)
- `perf:` - Performance improvement
- `test:` - Adding tests
- `chore:` - Maintenance tasks
- `ci:` - CI/CD changes
- `build:` - Build system changes

### Examples

**Feature:**
```bash
git commit -m "feat(timer): add custom timer duration settings

- Add input fields for work and break durations
- Add validation for min/max values (1-60 min work, 1-30 min break)
- Update timer logic to use custom durations
- Add settings icon to toggle settings panel

Closes #123"
```

**Bug Fix:**
```bash
git commit -m "fix(auth): resolve login state persistence issue

- Fix localStorage key collision between users
- Add error handling for corrupted data
- Update unit tests for auth module

Fixes #456"
```

**Documentation:**
```bash
git commit -m "docs(readme): update installation instructions

- Add Node.js version requirement (>= 16.0.0)
- Clarify npm install steps
- Add troubleshooting section for common errors
- Update screenshots"
```

**Refactoring:**
```bash
git commit -m "refactor(tasks): simplify task state management

- Extract task logic into custom hook (useTasks)
- Remove duplicate code in TaskList component
- Improve type definitions
- No functional changes"
```

### Rules

- ✅ Use imperative mood ("add" not "added" or "adds")
- ✅ Don't capitalize first letter of subject
- ✅ No period at the end of subject
- ✅ Subject line max 72 characters
- ✅ Reference issues and PRs in footer
- ✅ Body explains "what" and "why", not "how"

---

## 🔍 Pull Request Process

### Before Submitting

**Checklist:**
- [ ] Code follows style guidelines
- [ ] All tests pass (`npm run test`)
- [ ] Linter passes (`npm run lint`)
- [ ] Documentation updated (if needed)
- [ ] Commits follow convention
- [ ] Branch is up-to-date with main
- [ ] Self-review completed

### Creating a Pull Request

1. **Go to your fork on GitHub**
2. **Click "New Pull Request"**
3. **Select branches:**
   - Base: `focusflow-team/focusflow` `main`
   - Compare: `your-username/focusflow` `your-branch`
4. **Fill out the PR template**
5. **Add reviewers:**
   - @daniyal-muratbek (QA)
   - @aslan-kazhgali (Backend)
6. **Submit!**

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] 🐛 Bug fix
- [ ] ✨ New feature
- [ ] 💥 Breaking change
- [ ] 📝 Documentation update

## Related Issues
Closes #(issue number)

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
How was this tested?

## Screenshots (if applicable)
Before | After

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests passing
- [ ] Documentation updated
```

### Review Process

1. **Automated Checks** - CI/CD runs tests
2. **Code Review** - Team member reviews code
3. **Discussion** - Address review comments
4. **Approval** - Reviewer approves PR
5. **Merge** - PR merged to main branch

**Timeline:**
- First review: Within 48 hours
- Follow-up reviews: Within 24 hours
- Merge after approval: Within 24 hours

### After Merge

1. **Delete your branch**
   ```bash
   git branch -d feature/your-feature-name
   ```

2. **Update your fork**
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

3. **Close related issues** (if not auto-closed)

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

**Test Structure:**
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';

describe('TaskItem', () => {
  const mockTask = {
    id: 1,
    text: 'Test task',
    completed: false,
    priority: 'high'
  };

  it('renders task text', () => {
    render(<TaskItem task={mockTask} />);
    expect(screen.getByText('Test task')).toBeInTheDocument();
  });

  it('calls onToggle when checkbox clicked', () => {
    const mockToggle = jest.fn();
    render(<TaskItem task={mockTask} onToggle={mockToggle} />);
    
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockToggle).toHaveBeenCalledWith(1);
  });
});
```

---

## 📚 Resources

### Learning Materials

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Git Tutorial](https://git-scm.com/docs/gittutorial)
- [Conventional Commits](https://www.conventionalcommits.org/)

### Project Documentation

- [User Guide](docs/USER_GUIDE.md)
- [API Documentation](docs/API.md)
- [Changelog](CHANGELOG.md)
- [README](README.md)

---

## 💬 Community

### Get Help

- 💬 [Discord Community](https://discord.gg/focusflow)
- 📧 Email: support@focusflow.app
- 🐛 [GitHub Issues](https://github.com/focusflow-team/focusflow/issues)
- 📖 [Discussions](https://github.com/focusflow-team/focusflow/discussions)

### Stay Updated

- 🐦 Twitter: [@focusflowapp](https://twitter.com/focusflowapp)
- 📰 Blog: [focusflow.app/blog](https://focusflow.app/blog)
- 📧 Newsletter: [Subscribe](https://focusflow.app/newsletter)

---

## ❓ Questions?

If you have questions that aren't covered in this guide:

1. Check [existing discussions](https://github.com/focusflow-team/focusflow/discussions)
2. Search [closed issues](https://github.com/focusflow-team/focusflow/issues?q=is%3Aissue+is%3Aclosed)
3. Join our [Discord](https://discord.gg/focusflow)
4. Open a new [discussion](https://github.com/focusflow-team/focusflow/discussions/new)

---

## 🎉 Thank You!

Your contributions make FocusFlow better for everyone. We appreciate your time, effort, and passion for improving productivity tools for students, developers, and professionals worldwide.

**Happy Coding! 🚀**

---

<div align="center">

**Made with ❤️ by the FocusFlow Team**

*Suleyman Demirel University | Software Engineering | 2024*

[⬆ Back to Top](#contributing-to-focusflow)

</div>