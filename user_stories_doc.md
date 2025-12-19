# User Stories

## Overview

This document contains all user stories for FocusFlow MVP (Version 1.0.0). Each story follows the format:

**As a [role], I want to [action], so I can [result].**

Stories are organized by feature area and include clear, testable acceptance criteria.

---

## Authentication & Account Management

### Story 1: User Registration
**As a** new user,  
**I want to** create an account with a username and password,  
**So I can** access the application and save my work.

**Acceptance Criteria:**
- System accepts usernames between 3-20 characters
- System validates username uniqueness
- System accepts passwords of any length
- System stores credentials in localStorage
- User is automatically logged in after registration
- User sees main application interface after successful registration
- Error message displays if username already exists

**Priority:** High  
**Story Points:** 3

---

### Story 2: User Login
**As a** returning user,  
**I want to** log in with my username and password,  
**So I can** access my saved content and continue working.

**Acceptance Criteria:**
- System accepts username and password input
- System validates credentials against stored data
- User is logged in with correct credentials
- User sees error message with incorrect credentials
- User session persists until logout
- User's previous content loads automatically after login

**Priority:** High  
**Story Points:** 2

---

### Story 3: User Logout
**As a** logged-in user,  
**I want to** log out of my account,  
**So I can** secure my data when leaving the application.

**Acceptance Criteria:**
- Logout button is visible in header
- Clicking logout saves all current data
- User session is cleared
- User is redirected to login screen
- User must log in again to access application

**Priority:** Medium  
**Story Points:** 1

---

## Markdown Editor

### Story 4: Write in Markdown
**As a** writer,  
**I want to** write text using Markdown syntax,  
**So I can** format my content without using a mouse.

**Acceptance Criteria:**
- Editor accepts text input in real-time
- Editor supports # headers, * lists, > quotes, **bold text**
- Content is preserved when typing
- No character limit (within localStorage capacity)
- Cursor position is maintained during typing

**Priority:** High  
**Story Points:** 5

---

### Story 5: View Markdown Preview
**As a** writer,  
**I want to** see a live preview of my formatted Markdown,  
**So I can** verify how my content will look.

**Acceptance Criteria:**
- Preview displays below editor
- Preview updates in real-time as user types
- Headers render in appropriate sizes (h1, h2, h3)
- Lists render as bullet points
- Quotes render with left border styling
- Bold text renders with bold font weight
- Preview matches standard Markdown rendering

**Priority:** High  
**Story Points:** 3

---

### Story 6: Save Markdown Content
**As a** writer,  
**I want to** have my Markdown content automatically saved,  
**So I can** not lose my work if I close the browser.

**Acceptance Criteria:**
- Content auto-saves every 30 seconds
- Manual save button is available
- Save indicator shows when save is successful
- Content persists after browser close and reopen
- Content loads automatically on next login

**Priority:** High  
**Story Points:** 2

---

### Story 7: Export Markdown File
**As a** writer,  
**I want to** download my Markdown as a .md file,  
**So I can** use it in other applications or publish it.

**Acceptance Criteria:**
- Download button is visible in toolbar
- Clicking download triggers file download
- File name can be customized before download
- File saves with .md extension
- File contains all current editor content
- Downloaded file is valid Markdown format

**Priority:** Medium  
**Story Points:** 2

---

## Code Editors

### Story 8: Write Java Code
**As a** CS student,  
**I want to** write Java code with syntax highlighting,  
**So I can** practice programming and see my code clearly.

**Acceptance Criteria:**
- Java editor mode is available
- Keywords display in purple color (public, class, static, void, etc.)
- Editor uses monospace font
- Code is preserved when typing
- Content persists separately from Markdown content
- Switching back to Java mode restores Java code

**Priority:** High  
**Story Points:** 4

---

### Story 9: Execute Java Code
**As a** CS student,  
**I want to** run my Java code and see the output,  
**So I can** test if my code works correctly.

**Acceptance Criteria:**
- Run button is visible when in Java mode
- System detects class name and main method
- System executes println() statements
- Output displays in console area below editor
- Multiple println() outputs appear on separate lines
- Error message shows if class or main method is missing

**Priority:** High  
**Story Points:** 5

---

### Story 10: Write Python Code
**As a** data science student,  
**I want to** write Python code with syntax highlighting,  
**So I can** practice Python programming.

**Acceptance Criteria:**
- Python editor mode is available
- Keywords display in purple color (def, class, return, if, etc.)
- Editor uses monospace font
- Code is preserved when typing
- Content persists separately from other modes
- Switching back to Python mode restores Python code

**Priority:** High  
**Story Points:** 4

---

### Story 11: Execute Python Code
**As a** data science student,  
**I want to** run my Python code and see the output,  
**So I can** verify my scripts work correctly.

**Acceptance Criteria:**
- Run button is visible when in Python mode
- System executes print() statements
- Output displays in console area below editor
- Multiple print() outputs appear on separate lines
- Basic variables work correctly

**Priority:** High  
**Story Points:** 5

---

### Story 12: Export Code Files
**As a** developer,  
**I want to** download my code as .java or .py files,  
**So I can** run them in proper IDEs or submit assignments.

**Acceptance Criteria:**
- Download button exports with correct extension
- Java mode exports as .java file
- Python mode exports as .py file
- File name can be customized
- Downloaded file contains all code content

**Priority:** Medium  
**Story Points:** 2

---

## Pomodoro Timer

### Story 13: Start Pomodoro Session
**As a** student,  
**I want to** start a Pomodoro timer for focused work,  
**So I can** structure my study sessions and stay focused.

**Acceptance Criteria:**
- Timer is visible in sidebar
- Default work duration is 25 minutes
- Default break duration is 5 minutes
- Play button starts the countdown
- Timer displays in MM:SS format
- Circular progress indicator updates in real-time
- Label shows "Work" or "Break" status

**Priority:** High  
**Story Points:** 5

---

### Story 14: Pause and Resume Timer
**As a** user,  
**I want to** pause and resume the timer,  
**So I can** handle unexpected interruptions.

**Acceptance Criteria:**
- Play button changes to Pause when timer is running
- Clicking Pause stops the countdown
- Time remaining is preserved
- Clicking Play resumes from paused time
- Progress indicator matches paused state

**Priority:** Medium  
**Story Points:** 2

---

### Story 15: Skip Timer Session
**As a** user,  
**I want to** skip the current timer session,  
**So I can** restart if I get interrupted.

**Acceptance Criteria:**
- Skip button is visible
- Clicking Skip resets timer to full duration
- Timer stops running
- Progress indicator resets to full circle
- Session counter does not increment on skip

**Priority:** Low  
**Story Points:** 1

---

### Story 16: Customize Timer Durations
**As a** user,  
**I want to** customize work and break durations,  
**So I can** adapt the timer to my personal workflow.

**Acceptance Criteria:**
- Settings icon is visible next to timer
- Clicking settings shows duration inputs
- Work duration accepts 1-60 minutes
- Break duration accepts 1-30 minutes
- Apply button saves new settings
- Timer resets with new durations
- Settings persist across sessions

**Priority:** High  
**Story Points:** 3

---

### Story 17: Track Completed Sessions
**As a** user,  
**I want to** see how many Pomodoro sessions I've completed,  
**So I can** measure my daily productivity.

**Acceptance Criteria:**
- Session counter displays below timer
- Counter increments after each work session
- Counter does not increment on break or skip
- Counter persists across browser sessions
- Counter displays in analytics dashboard

**Priority:** Medium  
**Story Points:** 2

---

## Task Management

### Story 18: Create Task
**As a** user,  
**I want to** create a task with a text description,  
**So I can** track what I need to do.

**Acceptance Criteria:**
- Task input field is visible in Tasks tab
- User can type task description
- Pressing Enter creates task
- Clicking + button creates task
- New task appears in task list
- Task input clears after creation
- Empty tasks are not created

**Priority:** High  
**Story Points:** 3

---

### Story 19: Set Task Priority
**As a** user,  
**I want to** assign priority levels to tasks,  
**So I can** focus on what's most important.

**Acceptance Criteria:**
- Each task has a priority dropdown
- Three options available: Urgent, Important, Low
- Urgent tasks show red border
- Important tasks show yellow border
- Low priority tasks show green border
- Priority can be changed after creation
- Default priority is "Important"

**Priority:** High  
**Story Points:** 3

---

### Story 20: Complete Task
**As a** user,  
**I want to** mark tasks as complete,  
**So I can** see what I've accomplished.

**Acceptance Criteria:**
- Each task has a checkbox
- Clicking checkbox marks task as complete
- Completed tasks show strikethrough text
- Completed tasks appear slightly faded
- Checkbox shows checkmark when complete
- Completion status persists across sessions
- Completed tasks count toward statistics

**Priority:** High  
**Story Points:** 2

---

### Story 21: Delete Task
**As a** user,  
**I want to** delete tasks I no longer need,  
**So I can** keep my task list clean.

**Acceptance Criteria:**
- Each task has a delete button (trash icon)
- Clicking delete removes task immediately
- Deleted tasks disappear from list
- Deletion is permanent (no undo in MVP)
- Task count updates after deletion

**Priority:** Medium  
**Story Points:** 1

---

### Story 22: View Empty Task State
**As a** new user,  
**I want to** see a helpful message when I have no tasks,  
**So I can** understand how to get started.

**Acceptance Criteria:**
- Message displays when task list is empty
- Message says "No tasks. Add your first!"
- Icon accompanies message
- Message disappears when first task is added

**Priority:** Low  
**Story Points:** 1

---

## Analytics & Progress Tracking

### Story 23: View Activity Heatmap
**As a** user,  
**I want to** see a visual representation of my activity over time,  
**So I can** identify patterns in my productivity.

**Acceptance Criteria:**
- Heatmap displays 12 weeks of data
- Each square represents one week
- Color intensity indicates session count (0-4+)
- Gray = 0 sessions
- Dark cyan = 1 session
- Medium cyan = 2 sessions
- Light cyan = 3 sessions
- Brightest cyan = 4+ sessions
- Hover shows exact session count
- Week labels (N1, N2, etc.) display below squares

**Priority:** High  
**Story Points:** 5

---

### Story 24: Track Daily Streak
**As a** user,  
**I want to** see my consecutive active days,  
**So I can** stay motivated to work every day.

**Acceptance Criteria:**
- Streak counter displays in statistics card
- Streak increments when user completes Pomodoro session
- Streak resets to 0 if user skips a day
- Streak persists across sessions
- Large, prominent number display
- Fire emoji accompanies streak

**Priority:** High  
**Story Points:** 3

---

### Story 25: View Session Statistics
**As a** user,  
**I want to** see my total Pomodoro sessions,  
**So I can** track my overall productivity.

**Acceptance Criteria:**
- Total sessions displays in statistics card
- Number updates in real-time after each session
- Count persists across browser sessions
- Large, prominent number display
- Timer emoji accompanies count

**Priority:** Medium  
**Story Points:** 2

---

### Story 26: View Task Completion Rate
**As a** user,  
**I want to** see how many tasks I've completed,  
**So I can** measure my task management effectiveness.

**Acceptance Criteria:**
- Completed tasks count displays in statistics card
- Total tasks count also displays
- Format shows "X completed / Y total"
- Updates immediately when task completed
- Large, prominent number display
- Checkmark emoji accompanies count

**Priority:** Medium  
**Story Points:** 2

---

### Story 27: View Weekly Progress
**As a** user,  
**I want to** compare my progress across recent weeks,  
**So I can** see if I'm improving over time.

**Acceptance Criteria:**
- Progress bars show last 3 weeks
- Each week shows session count out of 5 maximum
- Percentage displays in progress bar
- This week, last week, 2 weeks ago labeled
- Different gradient colors for each week
- Animated progress bar fill
- Week emojis accompany labels

**Priority:** Medium  
**Story Points:** 4

---

## Focus Modes

### Story 28: Enable Typewriter Mode
**As a** writer,  
**I want to** keep my active line centered vertically,  
**So I can** reduce eye strain during long writing sessions.

**Acceptance Criteria:**
- Typewriter Mode button is visible in toolbar
- Clicking button enables mode
- Active line stays centered on screen
- Scrolling happens automatically as user types
- Button shows active state when enabled
- Mode can be toggled off
- Works in all editor modes

**Priority:** Medium  
**Story Points:** 4

---

### Story 29: Enable Fullscreen Mode
**As a** user,  
**I want to** hide all UI elements except the editor,  
**So I can** eliminate distractions completely.

**Acceptance Criteria:**
- Fullscreen button is visible in toolbar
- Clicking button enters fullscreen
- Header, sidebar, and all navigation disappear
- Only editor content visible
- Escape key or button exits fullscreen
- Editor content is preserved
- Works on all browsers

**Priority:** Medium  
**Story Points:** 3

---

## Data Persistence

### Story 30: Auto-Save Content
**As a** user,  
**I want to** have my work saved automatically,  
**So I can** never lose my progress.

**Acceptance Criteria:**
- Content saves every 30 seconds automatically
- All three editor modes save separately
- Tasks save automatically
- Timer settings save automatically
- Analytics data saves automatically
- No user action required
- Save happens in background

**Priority:** High  
**Story Points:** 3

---

### Story 31: Load Previous Content
**As a** returning user,  
**I want to** see all my previous work when I log in,  
**So I can** continue where I left off.

**Acceptance Criteria:**
- Markdown content loads on login
- Java code loads on login
- Python code loads on login
- Tasks load with correct priorities and completion status
- Timer settings load with custom durations
- Analytics data loads with correct counts
- No data loss between sessions

**Priority:** High  
**Story Points:** 3

---

### Story 32: Isolate User Data
**As a** user,  
**I want to** have my data separated from other users,  
**So I can** keep my work private and organized.

**Acceptance Criteria:**
- Each user has separate localStorage key
- User A cannot access User B's data
- Switching users loads correct user's data
- No data mixing between accounts
- Logout clears current session only

**Priority:** High  
**Story Points:** 2

---

## Summary

**Total Stories:** 32  
**Total Story Points:** 93

**By Priority:**
- High Priority: 21 stories (65%)
- Medium Priority: 9 stories (28%)
- Low Priority: 2 stories (7%)

**By Feature Area:**
- Authentication: 3 stories
- Markdown Editor: 4 stories
- Code Editors: 5 stories
- Pomodoro Timer: 5 stories
- Task Management: 5 stories
- Analytics: 5 stories
- Focus Modes: 2 stories
- Data Persistence: 3 stories

**MVP Completion Status:** ✅ All 32 stories implemented in v1.0.0

---

**Document Version:** 1.0.0  
**Last Updated:** December 18, 2024  
**Document Owner:** Bekarys Koregenuly (PM)  
**Status:** Complete - All stories delivered