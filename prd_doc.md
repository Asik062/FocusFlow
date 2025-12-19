# Product Requirements Document (PRD)

## 1. Product Goal

The primary goal of FocusFlow is to provide an all-in-one productivity environment that enables students, developers, and professionals to achieve deep, focused work by combining text editing, code writing, task management, and productivity tracking in a single distraction-free interface.

**Success Metrics:**
- User productivity increase by 30% or more
- Average 6+ Pomodoro sessions per day per active user
- 70%+ task completion rate
- 10+ day average user streak
- User satisfaction score of 4.5/5.0 or higher

## 2. Problem Statement

Modern knowledge workers face three critical challenges that prevent deep, focused work:

**Problem 1: Constant Distractions**
- Users receive an average of 67 notifications per day
- Recovery from interruption takes approximately 23 minutes
- Results in fragmented work sessions and shallow work quality

**Problem 2: Scattered Tools**
- Users switch between 4-6 different applications daily for similar tasks
- Writing notes in one app, coding in another, task management in a third
- Context switching wastes time and depletes mental energy
- No unified view of productivity and progress

**Problem 3: Lack of Accountability**
- No way to track daily productivity patterns
- Difficult to maintain consistent work habits
- No visual feedback or motivation to continue streaks
- Unable to identify peak productivity hours

These problems result in decreased productivity, increased stress, and inability to achieve flow state for deep work.

## 3. Target Audience

**Primary Users:**

1. **Computer Science Students (Age 18-25)**
   - Need to practice coding in Java and Python
   - Study algorithms and data structures
   - Prepare for technical interviews
   - Take notes during lectures
   - Manage assignment deadlines

2. **Content Creators (Age 22-35)**
   - Write blog posts, articles, and documentation
   - Need distraction-free writing environment
   - Track writing streaks and daily word counts
   - Maintain consistent publishing schedule

3. **Freelance Developers (Age 25-40)**
   - Manage multiple client projects
   - Track billable time with Pomodoro sessions
   - Switch between coding and documentation
   - Need productivity reports for clients

4. **Graduate Students (Age 23-30)**
   - Write thesis and research papers
   - Analyze data using Python
   - Manage research tasks and deadlines
   - Track research progress over months

**User Demographics:**
- Tech-savvy individuals comfortable with web applications
- Value productivity and self-improvement
- Familiar with Markdown syntax
- Basic to intermediate programming knowledge
- Use computers for 4+ hours daily

## 4. User Roles

**Role 1: Student User**
- Creates account and logs in
- Writes code in Java/Python editors
- Takes notes in Markdown
- Uses Pomodoro timer for study sessions
- Tracks study streaks
- Manages assignment tasks

**Role 2: Writer User**
- Creates account and logs in
- Writes content in Markdown editor
- Uses Typewriter and Fullscreen modes
- Tracks writing sessions with Pomodoro
- Monitors daily writing streaks
- Exports content to .md files

**Role 3: Developer User**
- Creates account and logs in
- Writes and tests code snippets
- Documents code in Markdown
- Uses Pomodoro for time tracking
- Manages development tasks with priorities
- Reviews activity heatmap for productivity reports

## 5. User Scenarios

**Scenario 1: Student Studying for Exam**
1. Student logs into FocusFlow
2. Creates tasks for each exam topic
3. Starts Pomodoro timer (25 minutes)
4. Opens Java editor to practice coding problems
5. Takes notes in Markdown about solutions
6. Completes Pomodoro session
7. Marks task as complete
8. Reviews heatmap to see study progress

**Scenario 2: Writer Creating Blog Post**
1. Writer logs in
2. Opens Markdown editor
3. Enables Typewriter Mode for centered typing
4. Activates Fullscreen Mode to eliminate distractions
5. Starts Pomodoro timer
6. Writes 500 words during session
7. Saves document
8. Downloads as .md file for publishing

**Scenario 3: Developer Working on Project**
1. Developer logs in
2. Creates tasks for project features
3. Opens Python editor
4. Writes and tests code snippet
5. Uses Pomodoro timer to track billable time
6. Documents code in Markdown
7. Reviews analytics to report hours worked
8. Exports code files

## 6. Functional Requirements

The system must provide the following features:

**FR-1: User Authentication**
- System must allow user registration with username and password
- System must validate unique usernames
- System must securely store user credentials in localStorage
- System must maintain user session until logout
- System must isolate data between different users

**FR-2: Markdown Editor**
- System must support full Markdown syntax (headers, lists, quotes, bold)
- System must provide live preview of formatted content
- System must auto-save content every 30 seconds
- System must allow manual save at any time
- System must allow file export as .md format
- System must preserve content when switching modes

**FR-3: Java Code Editor**
- System must provide syntax highlighting for Java keywords
- System must allow code execution simulation
- System must display output from System.out.println() statements
- System must detect class and main method structure
- System must allow file export as .java format
- System must preserve code when switching modes

**FR-4: Python Code Editor**
- System must provide syntax highlighting for Python keywords
- System must allow code execution simulation
- System must display output from print() function
- System must support basic variable assignments
- System must allow file export as .py format
- System must preserve code when switching modes

**FR-5: Pomodoro Timer**
- System must provide customizable work duration (1-60 minutes)
- System must provide customizable break duration (1-30 minutes)
- System must display circular visual progress indicator
- System must provide play, pause, and skip controls
- System must distinguish between work and break sessions
- System must count and persist completed sessions
- System must update activity heatmap after each session

**FR-6: Task Manager**
- System must allow task creation via text input
- System must support three priority levels (Urgent, Important, Low)
- System must allow marking tasks as complete
- System must allow task deletion
- System must persist tasks across sessions
- System must provide visual indicators for priority levels
- System must show completion status with strikethrough

**FR-7: Activity Analytics**
- System must display 12-week activity heatmap
- System must use color intensity to represent session counts (0-4+)
- System must track consecutive active days (streak)
- System must display total Pomodoro sessions completed
- System must display total tasks and completion count
- System must show weekly progress for last 3 weeks
- System must update analytics in real-time

**FR-8: Focus Modes**
- System must provide Typewriter Mode (centered active line)
- System must provide Fullscreen Mode (hide all UI elements)
- System must allow toggling modes on/off
- System must maintain editor content in all modes

**FR-9: Data Persistence**
- System must auto-save all data every 30 seconds
- System must save data on logout
- System must load user data on login
- System must store data in browser localStorage
- System must handle localStorage errors gracefully

## 7. Non-Functional Requirements

**Performance:**
- Page load time must not exceed 2 seconds on standard broadband
- Application must respond to user input within 100ms
- Auto-save operation must complete within 500ms
- Code execution must display results within 1 second
- Application must support 100+ tasks per user without performance degradation

**Reliability:**
- Application must maintain 99% uptime during development
- Auto-save must succeed 100% of the time when localStorage is available
- No data loss should occur during normal operation
- Application must recover gracefully from localStorage quota errors

**Security:**
- User passwords must be stored (note: educational project, encryption not required)
- User data must be isolated between accounts
- No sensitive data should be transmitted over network (client-side only)
- Application must not execute arbitrary system commands

**Usability:**
- New users must complete first Pomodoro session within 5 minutes of registration
- Interface must follow consistent design patterns
- All actions must provide visual feedback
- Error messages must be clear and actionable
- Application must work without training or documentation for basic features

**Scalability:**
- Application must support up to 10MB of user data per account
- localStorage implementation must handle 50+ active users per browser
- Component architecture must support future feature additions
- Code must follow modular design for easy extension

**Compatibility:**
- Application must work on Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Application must function without internet connection after initial load
- Application must be responsive down to 1024px screen width
- Application must work with JavaScript enabled browsers

## 8. MVP Scope

**Features included in Version 1.0.0:**

1. ✅ User Authentication System
   - Registration with username/password
   - Login and logout functionality
   - Session management

2. ✅ Markdown Editor
   - Full syntax support
   - Live preview
   - Auto-save and manual save
   - File export (.md)

3. ✅ Java Code Editor
   - Syntax highlighting
   - Code execution simulation
   - println() output display
   - File export (.java)

4. ✅ Python Code Editor
   - Syntax highlighting
   - Code execution simulation
   - print() output display
   - File export (.py)

5. ✅ Pomodoro Timer
   - Customizable durations
   - Play/Pause/Skip controls
   - Session counter
   - Visual progress indicator

6. ✅ Task Manager
   - Create, complete, delete tasks
   - Three priority levels
   - Persistent storage

7. ✅ Activity Analytics
   - 12-week heatmap
   - Streak tracking
   - Statistics dashboard
   - Weekly progress bars

8. ✅ Focus Modes
   - Typewriter Mode
   - Fullscreen Mode

9. ✅ Data Persistence
   - localStorage integration
   - Auto-save every 30 seconds

## 9. Out-of-Scope (Backlog)

**Features NOT included in MVP (future versions):**

**Version 1.1 (Planned - January 2025):**
- Dark/Light theme toggle
- Custom color themes
- Additional programming languages (JavaScript, C++, Go)
- Code snippets library
- Advanced Markdown features (tables, diagrams)
- Task categories and tags
- Recurring tasks
- Long break after 4 Pomodoros
- Custom timer sounds
- Export to multiple formats

**Version 1.2 (Planned - February 2025):**
- Cloud synchronization
- Account backup and restore
- Cross-device sync
- Data import/export (JSON, CSV)
- PDF export
- Collaborative features (sharing links)

**Version 2.0 (Planned - Q2 2025):**
- Mobile applications (iOS and Android)
- Real-time collaboration
- AI writing assistant
- GitHub integration
- Plugin/extension system
- Advanced analytics dashboard
- Team accounts and workspaces
- Admin dashboard
- Custom branding options

**Explicitly Out of Scope:**
- Email notifications
- Third-party integrations (initially)
- Video/Audio features
- Real-time chat
- Payment processing
- Multi-language UI (English only for MVP)

## 10. Acceptance Criteria

**Feature: User Authentication**
- ✅ System accepts unique usernames between 3-20 characters
- ✅ System stores user credentials in localStorage
- ✅ User can log in with correct credentials
- ✅ User sees error message with incorrect credentials
- ✅ User session persists until logout
- ✅ Logout clears session and returns to login screen

**Feature: Markdown Editor**
- ✅ Editor displays text input in real-time
- ✅ Preview renders Markdown syntax correctly (headers, lists, quotes, bold)
- ✅ Content auto-saves every 30 seconds
- ✅ Manual save button successfully saves content
- ✅ Download button exports content as .md file
- ✅ Content persists when switching to other modes

**Feature: Java Code Editor**
- ✅ Keywords display with syntax highlighting
- ✅ Run button executes code simulation
- ✅ println() statements display in output console
- ✅ System detects class and main method
- ✅ Download button exports as .java file
- ✅ Code preserved when switching modes

**Feature: Python Code Editor**
- ✅ Keywords display with syntax highlighting
- ✅ Run button executes code simulation
- ✅ print() function displays in output console
- ✅ Basic variables work correctly
- ✅ Download button exports as .py file
- ✅ Code preserved when switching modes

**Feature: Pomodoro Timer**
- ✅ User can set work duration (1-60 minutes)
- ✅ User can set break duration (1-30 minutes)
- ✅ Timer counts down from set duration
- ✅ Circular progress indicator updates in real-time
- ✅ Play button starts timer
- ✅ Pause button stops timer
- ✅ Skip button resets current session
- ✅ Session counter increments after work session
- ✅ Timer switches to break automatically
- ✅ Settings persist across sessions

**Feature: Task Manager**
- ✅ User can add task by typing and pressing Enter
- ✅ User can add task by clicking add button
- ✅ User can select priority level (Urgent/Important/Low)
- ✅ Visual indicators show priority (red/yellow/green border)
- ✅ User can mark task as complete with checkbox
- ✅ Completed tasks show strikethrough styling
- ✅ User can delete task with trash icon
- ✅ All tasks persist after page reload

**Feature: Activity Analytics**
- ✅ Heatmap displays last 12 weeks
- ✅ Colors represent session intensity (5 levels: 0-4+)
- ✅ Hover shows session count for each week
- ✅ Streak counter shows consecutive active days
- ✅ Total sessions card shows all-time count
- ✅ Tasks completed card shows finished/total
- ✅ Weekly progress bars show last 3 weeks
- ✅ Progress bars display percentage
- ✅ Analytics update in real-time after session

**Feature: Focus Modes**
- ✅ Typewriter Mode keeps active line centered
- ✅ Fullscreen Mode hides all UI except editor
- ✅ Modes can be toggled on/off
- ✅ Editor content remains unchanged in all modes
- ✅ Exit fullscreen returns to normal view

**Feature: Data Persistence**
- ✅ All content auto-saves every 30 seconds
- ✅ Data saves immediately on logout
- ✅ Data loads automatically on login
- ✅ Each user has isolated data storage
- ✅ No data loss occurs during normal operation

---

**Document Version:** 1.0.0  
**Last Updated:** December 18, 2024  
**Document Owner:** Bekarys Koregenuly (PM)  
**Approved By:** FocusFlow Team