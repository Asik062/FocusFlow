# System Architecture

## 1. Architecture Style

**Chosen Architecture:** Single Page Application (SPA) with Client-Side Storage

**Justification:**
- **Simplicity:** No backend infrastructure required for MVP, reducing complexity and deployment overhead
- **Performance:** All operations execute client-side with instant response times
- **Offline Capability:** Application works without internet connection after initial load
- **Cost Efficiency:** No server hosting costs, only static file hosting needed
- **Privacy:** All user data stays on user's device, no data transmission to servers
- **Development Speed:** Faster iteration and development cycles for educational project

**Architecture Pattern:** Component-Based Architecture with Unidirectional Data Flow

The application follows React's component-based architecture where UI is composed of reusable components. Data flows from parent to child components via props, and state updates trigger re-renders.

## 2. System Components

### Front End Components

**1. Authentication Module**
- **Purpose:** Manages user registration, login, and session
- **Technology:** React functional components with hooks
- **Storage:** localStorage for credentials and session tokens
- **Components:** LoginForm, RegisterForm, AuthContext

**2. Editor Module**
- **Purpose:** Provides text editing capabilities for Markdown, Java, and Python
- **Technology:** React with controlled textarea components
- **Features:** Syntax highlighting, live preview, mode switching
- **Components:** MarkdownEditor, JavaEditor, PythonEditor, CodeRunner, Toolbar

**3. Timer Module**
- **Purpose:** Implements Pomodoro Technique with customizable durations
- **Technology:** React with useEffect hooks for interval management
- **Features:** Play/pause/skip controls, circular progress indicator
- **Components:** PomodoroTimer, TimerDisplay, TimerSettings, CircularProgress

**4. Task Module**
- **Purpose:** Task management with priorities and completion tracking
- **Technology:** React with state management
- **Features:** CRUD operations, priority levels, persistence
- **Components:** TaskList, TaskItem, AddTask, TaskFilters

**5. Analytics Module**
- **Purpose:** Visualizes user productivity data
- **Technology:** React with SVG rendering for heatmap
- **Features:** Activity heatmap, statistics, weekly progress
- **Components:** Heatmap, StatsCards, WeeklyProgress, StreakTracker

**6. Layout Module**
- **Purpose:** Provides application structure and navigation
- **Technology:** React with responsive design
- **Features:** Header, navigation tabs, sidebar
- **Components:** Header, Sidebar, MainLayout, TabNavigation

### Data Storage Layer

**localStorage API**
- **Purpose:** Browser-based persistent storage
- **Capacity:** 5-10MB per origin
- **Structure:** Key-value pairs with JSON serialization
- **Keys Used:**
  - `focusflow_users` - User credentials registry
  - `focusflow_{username}` - Individual user data
  - Format: `{ content, tasks, activityData, pomodoroSessions, workDuration, breakDuration }`

### Utility Layer

**1. Storage Utilities**
- Functions for localStorage operations
- JSON serialization/deserialization
- Error handling for quota exceeded
- Data migration helpers

**2. Code Execution Simulator**
- Simulates Java System.out.println()
- Simulates Python print() function
- Regex-based output extraction
- Safe execution environment

**3. Markdown Parser**
- Converts Markdown syntax to React elements
- Supports headers, lists, quotes, bold text
- Real-time parsing for live preview

**4. Time Formatter**
- Converts seconds to MM:SS format
- Handles timer display updates
- Validates duration inputs

## 3. Component Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         Browser                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                    FocusFlow SPA                        │ │
│  │                                                         │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │ │
│  │  │     Auth     │  │    Editor    │  │    Timer    │ │ │
│  │  │   Module     │  │    Module    │  │   Module    │ │ │
│  │  └──────┬───────┘  └──────┬───────┘  └──────┬──────┘ │ │
│  │         │                 │                 │         │ │
│  │         └─────────────────┴─────────────────┘         │ │
│  │                           │                           │ │
│  │                    ┌──────▼───────┐                   │ │
│  │                    │  State Layer  │                   │ │
│  │                    │  (React Hooks)│                   │ │
│  │                    └──────┬───────┘                   │ │
│  │                           │                           │ │
│  │  ┌────────────────────────▼────────────────────────┐ │ │
│  │  │          Storage Utilities Layer               │ │ │
│  │  └─────────────────────┬──────────────────────────┘ │ │
│  │                        │                             │ │
│  └────────────────────────┼─────────────────────────────┘ │
│                           │                               │
│  ┌────────────────────────▼──────────────────────────────┐│
│  │              localStorage (5-10MB)                     ││
│  │  ┌──────────────────┐  ┌──────────────────────────┐  ││
│  │  │ focusflow_users  │  │ focusflow_{username}     │  ││
│  │  │ (credentials)    │  │ (user data)               │  ││
│  │  └──────────────────┘  └──────────────────────────┘  ││
│  └────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
```

**Component Interaction Flow:**
1. User interacts with UI components (Auth, Editor, Timer, Tasks, Analytics)
2. Components trigger state updates via React hooks (useState, useEffect)
3. State Layer manages application state and side effects
4. Storage Utilities serialize data and interact with localStorage
5. localStorage persists data in browser
6. On component mount, data flows back: localStorage → Storage Utilities → State Layer → Components

## 4. Data Flow

### User Registration Flow
```
1. User enters username and password → RegisterForm
2. RegisterForm validates input (length, uniqueness)
3. On validation success → Call handleAuth()
4. handleAuth() checks localStorage for existing users
5. If username unique → Store in focusflow_users key
6. Create user session → Set currentUser state
7. Initialize empty user data structure
8. Redirect to main application
```

### Content Editing Flow
```
1. User types in editor → onChange event
2. setContent() updates React state
3. State update triggers re-render
4. Every 30 seconds → Auto-save timer fires
5. saveUserData() serializes content to JSON
6. Store in localStorage under focusflow_{username}
7. On mode switch → Content preserved separately
8. On logout → Final save before clearing session
```

### Pomodoro Session Flow
```
1. User clicks Play → setPomodoroRunning(true)
2. useEffect hook starts interval timer
3. Every second → Decrement pomodoroTime
4. State update triggers circular progress re-render
5. When time reaches 0 → Session complete
6. Increment pomodoroSessions counter
7. Update activityData array (heatmap)
8. Auto-save updated data to localStorage
9. Switch to break mode or next work session
```

### Task Management Flow
```
1. User types task and presses Enter → addTask()
2. Create task object with id, text, priority, timestamp
3. Append to tasks array in state
4. State update triggers TaskList re-render
5. Every 30 seconds → Auto-save tasks array
6. User checks task → toggleTask(id)
7. Update completed property → Re-render with strikethrough
8. User deletes task → deleteTask(id)
9. Filter tasks array → Auto-save updated array
```

### Analytics Display Flow
```
1. Component mounts → useEffect loads data from localStorage
2. Parse activityData array (52 weeks of session counts)
3. Calculate streak from consecutive non-zero values
4. Render heatmap grid with color intensity based on count
5. Display statistics cards (streak, sessions, tasks)
6. Calculate weekly progress for last 3 weeks
7. On new Pomodoro session → Update activityData
8. Re-render analytics in real-time
```

## 5. Database Schema

Since FocusFlow uses localStorage (key-value store), there is no traditional database schema. However, data is structured as follows:

### User Registry Structure
```json
{
  "focusflow_users": {
    "john_doe": {
      "password": "hashedPassword123",
      "created": "2024-12-18T10:30:00.000Z"
    },
    "jane_smith": {
      "password": "hashedPassword456",
      "created": "2024-12-18T11:45:00.000Z"
    }
  }
}
```

### Individual User Data Structure
```json
{
  "focusflow_john_doe": {
    "markdownContent": "# My Notes\n\nContent here...",
    "javaContent": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello\");\n  }\n}",
    "pythonContent": "# Python code\nprint(\"Hello, World!\")",
    "tasks": [
      {
        "id": 1734518400000,
        "text": "Complete project presentation",
        "completed": false,
        "priority": "high",
        "createdAt": "2024-12-18T10:00:00.000Z"
      },
      {
        "id": 1734522000000,
        "text": "Study for algorithms exam",
        "completed": true,
        "priority": "medium",
        "createdAt": "2024-12-18T11:00:00.000Z"
      }
    ],
    "activityData": [0, 1, 2, 3, 4, 2, 1, ...], // 52 weeks, 0-4+ sessions
    "pomodoroSessions": 47,
    "workDuration": 25,
    "breakDuration": 5,
    "lastSaved": "2024-12-18T12:30:00.000Z"
  }
}
```

### Data Relationships
- **One-to-One:** Each user has one data object
- **Embedded:** Tasks are embedded within user data (no separate collection)
- **Array:** Activity data stored as array of 52 integers
- **Isolation:** No cross-user data access or relationships

## 6. Technology Decisions

### React 18.2
**Decision:** Use React with hooks-based functional components  
**Justification:**
- Large ecosystem and community support
- Component reusability reduces code duplication
- Hooks provide clean state management without classes
- Virtual DOM ensures efficient re-renders
- Team has existing React expertise

**Alternatives Considered:**
- Vue.js - Less familiar to team
- Vanilla JavaScript - More code, harder to maintain
- Angular - Heavier framework, steeper learning curve

### Tailwind CSS 3.4
**Decision:** Use Tailwind for styling  
**Justification:**
- Utility-first approach enables rapid prototyping
- Consistent design system out of the box
- Smaller CSS bundle with PurgeCSS
- No naming conventions needed (no BEM, SMACSS)
- Responsive design utilities built-in

**Alternatives Considered:**
- CSS Modules - More boilerplate, slower development
- Styled Components - Runtime overhead, larger bundle
- Bootstrap - Less flexible, harder to customize

### Vite 5.0
**Decision:** Use Vite as build tool  
**Justification:**
- Extremely fast hot module replacement (<100ms)
- Native ES modules support
- Optimized production builds with Rollup
- Simple configuration
- Modern development experience

**Alternatives Considered:**
- Create React App - Slower, being deprecated
- Webpack - More complex configuration
- Parcel - Less mature ecosystem

### localStorage API
**Decision:** Use browser localStorage for persistence  
**Justification:**
- No backend infrastructure needed
- Synchronous API, simple to use
- 5-10MB storage sufficient for MVP
- Works offline by default
- No network latency

**Alternatives Considered:**
- IndexedDB - More complex API, overkill for MVP
- Backend database - Adds complexity, costs
- SessionStorage - Data lost on tab close

### Lucide React
**Decision:** Use Lucide for icons  
**Justification:**
- Lightweight icon library (tree-shakeable)
- Consistent design language
- Easy React integration
- Open source and actively maintained

**Alternatives Considered:**
- Font Awesome - Heavier, requires font loading
- Material Icons - Less flexible styling
- Custom SVG - More maintenance burden

## 7. Future Extensions

### Version 1.1 Extensions

**Backend API Addition**
- Migrate from localStorage to RESTful API
- Add Node.js/Express server
- Implement PostgreSQL database
- Enable cross-device synchronization

**Authentication Enhancement**
- Add JWT-based authentication
- Implement password hashing (bcrypt)
- Add email verification
- OAuth integration (Google, GitHub)

**Real-time Features**
- WebSocket connection for live updates
- Real-time collaboration on documents
- Presence indicators for multi-user editing

### Version 2.0 Extensions

**Microservices Architecture**
- Split into independent services:
  - Auth Service
  - Editor Service
  - Analytics Service
  - Notification Service
- API Gateway for routing
- Message queue for async operations (RabbitMQ)

**Mobile Applications**
- React Native for iOS and Android
- Shared business logic with web
- Native performance optimizations
- Offline-first architecture with sync

**AI Integration**
- AI writing assistant (OpenAI GPT API)
- Code completion suggestions
- Grammar and style checking
- Productivity insights

**Scalability Improvements**
- Redis for session management
- CDN for static assets
- Load balancer for high availability
- Database replication and sharding

**Advanced Analytics**
- Time-series database (InfluxDB) for metrics
- Machine learning models for productivity predictions
- Data visualization with D3.js
- Export to BI tools (Tableau, Power BI)

### Infrastructure Considerations

**Hosting Options:**
- Static hosting: Vercel, Netlify, GitHub Pages (current)
- Full-stack: AWS, Google Cloud, Azure (future)
- Database: PostgreSQL on RDS, MongoDB Atlas
- Storage: AWS S3 for file uploads

**Monitoring and Observability:**
- Error tracking: Sentry
- Analytics: Google Analytics, Mixpanel
- Performance monitoring: Lighthouse CI
- Logging: CloudWatch, Datadog

**CI/CD Pipeline:**
- GitHub Actions for automated testing
- Automated deployments on merge to main
- Staging environment for testing
- Blue-green deployments for zero downtime

---

**Document Version:** 1.0.0  
**Last Updated:** December 18, 2024  
**Document Owner:** Aslan Kazhgali (Backend Developer)  
**Reviewed By:** FocusFlow Team