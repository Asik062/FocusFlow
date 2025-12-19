# API Specification

## Base URL

**Current (v1.0.0):** N/A - Client-side only application  
**Future (v1.1+):** `https://api.focusflow.app/v1`

---

## Overview

**Note:** FocusFlow v1.0.0 is a client-side only application that uses localStorage for data persistence. This document describes the API endpoints that will be implemented in future versions when backend functionality is added.

The API will follow RESTful principles and use JSON for request and response bodies. All endpoints requiring authentication will use JWT tokens in the Authorization header.

---

## Authentication

All authenticated endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

Tokens expire after 24 hours and must be refreshed using the `/auth/refresh` endpoint.

---

## Endpoints

### Authentication Endpoints

---

## Endpoint: /auth/register

**Method:** `POST`  
**Purpose:** Register a new user account  
**Authentication:** Not required

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Validation Rules:**
- `username`: 3-20 characters, alphanumeric and underscores only
- `email`: Valid email format
- `password`: Minimum 8 characters, must include uppercase, lowercase, and number

**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "uuid-123-456",
      "username": "john_doe",
      "email": "john@example.com",
      "createdAt": "2024-12-18T10:30:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Responses:**

**400 Bad Request - Invalid Input:**
```json
{
  "success": false,
  "error": "Validation error",
  "details": {
    "username": "Username must be 3-20 characters",
    "password": "Password must include uppercase, lowercase, and number"
  }
}
```

**409 Conflict - User Already Exists:**
```json
{
  "success": false,
  "error": "User with this username or email already exists"
}
```

---

## Endpoint: /auth/login

**Method:** `POST`  
**Purpose:** Authenticate user and receive JWT token  
**Authentication:** Not required

**Request Body:**
```json
{
  "username": "john_doe",
  "password": "SecurePass123!"
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "uuid-123-456",
      "username": "john_doe",
      "email": "john@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": "24h"
  }
}
```

**Error Responses:**

**401 Unauthorized - Invalid Credentials:**
```json
{
  "success": false,
  "error": "Invalid username or password"
}
```

**400 Bad Request - Missing Fields:**
```json
{
  "success": false,
  "error": "Username and password are required"
}
```

---

## Endpoint: /auth/refresh

**Method:** `POST`  
**Purpose:** Refresh expired JWT token  
**Authentication:** Required (refresh token)

**Request Body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": "24h"
  }
}
```

**Error Responses:**

**401 Unauthorized - Invalid Token:**
```json
{
  "success": false,
  "error": "Invalid or expired refresh token"
}
```

---

### User Data Endpoints

---

## Endpoint: /users/me

**Method:** `GET`  
**Purpose:** Get current user profile  
**Authentication:** Required

**Request Headers:**
```
Authorization: Bearer <jwt_token>
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid-123-456",
      "username": "john_doe",
      "email": "john@example.com",
      "createdAt": "2024-12-18T10:30:00.000Z",
      "lastLogin": "2024-12-18T14:20:00.000Z",
      "settings": {
        "workDuration": 25,
        "breakDuration": 5,
        "theme": "dark"
      }
    }
  }
}
```

**Error Responses:**

**401 Unauthorized:**
```json
{
  "success": false,
  "error": "Authentication required"
}
```

---

## Endpoint: /users/me

**Method:** `PUT`  
**Purpose:** Update user profile  
**Authentication:** Required

**Request Body:**
```json
{
  "email": "newemail@example.com",
  "settings": {
    "workDuration": 30,
    "breakDuration": 10,
    "theme": "light"
  }
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "user": {
      "id": "uuid-123-456",
      "username": "john_doe",
      "email": "newemail@example.com",
      "settings": {
        "workDuration": 30,
        "breakDuration": 10,
        "theme": "light"
      }
    }
  }
}
```

---

### Content Endpoints

---

## Endpoint: /content

**Method:** `GET`  
**Purpose:** Get all user content (Markdown, Java, Python)  
**Authentication:** Required

**Query Parameters:**
- `type` (optional): Filter by content type (`markdown`, `java`, `python`)

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "markdown": {
      "content": "# My Notes\n\nContent here...",
      "lastModified": "2024-12-18T14:30:00.000Z"
    },
    "java": {
      "content": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello\");\n  }\n}",
      "lastModified": "2024-12-18T13:20:00.000Z"
    },
    "python": {
      "content": "print('Hello, World!')",
      "lastModified": "2024-12-18T12:10:00.000Z"
    }
  }
}
```

---

## Endpoint: /content

**Method:** `PUT`  
**Purpose:** Update user content  
**Authentication:** Required

**Request Body:**
```json
{
  "type": "markdown",
  "content": "# Updated Notes\n\nNew content..."
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Content saved successfully",
  "data": {
    "type": "markdown",
    "lastModified": "2024-12-18T15:00:00.000Z"
  }
}
```

**Error Responses:**

**400 Bad Request:**
```json
{
  "success": false,
  "error": "Invalid content type. Must be: markdown, java, or python"
}
```

---

### Task Endpoints

---

## Endpoint: /tasks

**Method:** `GET`  
**Purpose:** Get all user tasks  
**Authentication:** Required

**Query Parameters:**
- `completed` (optional): Filter by completion status (`true`, `false`)
- `priority` (optional): Filter by priority (`high`, `medium`, `low`)
- `limit` (optional): Number of tasks to return (default: 100)
- `offset` (optional): Pagination offset (default: 0)

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "tasks": [
      {
        "id": "task-uuid-1",
        "text": "Complete project presentation",
        "completed": false,
        "priority": "high",
        "createdAt": "2024-12-18T10:00:00.000Z",
        "updatedAt": "2024-12-18T10:00:00.000Z"
      },
      {
        "id": "task-uuid-2",
        "text": "Study for algorithms exam",
        "completed": true,
        "priority": "medium",
        "createdAt": "2024-12-18T09:00:00.000Z",
        "updatedAt": "2024-12-18T14:00:00.000Z",
        "completedAt": "2024-12-18T14:00:00.000Z"
      }
    ],
    "total": 25,
    "limit": 100,
    "offset": 0
  }
}
```

---

## Endpoint: /tasks

**Method:** `POST`  
**Purpose:** Create a new task  
**Authentication:** Required

**Request Body:**
```json
{
  "text": "Write documentation",
  "priority": "medium"
}
```

**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "task": {
      "id": "task-uuid-3",
      "text": "Write documentation",
      "completed": false,
      "priority": "medium",
      "createdAt": "2024-12-18T15:30:00.000Z",
      "updatedAt": "2024-12-18T15:30:00.000Z"
    }
  }
}
```

**Error Responses:**

**400 Bad Request:**
```json
{
  "success": false,
  "error": "Task text is required"
}
```

---

## Endpoint: /tasks/:id

**Method:** `PUT`  
**Purpose:** Update a task  
**Authentication:** Required

**URL Parameters:**
- `id`: Task ID

**Request Body:**
```json
{
  "text": "Updated task text",
  "completed": true,
  "priority": "high"
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "task": {
      "id": "task-uuid-3",
      "text": "Updated task text",
      "completed": true,
      "priority": "high",
      "createdAt": "2024-12-18T15:30:00.000Z",
      "updatedAt": "2024-12-18T16:00:00.000Z",
      "completedAt": "2024-12-18T16:00:00.000Z"
    }
  }
}
```

**Error Responses:**

**404 Not Found:**
```json
{
  "success": false,
  "error": "Task not found"
}
```

---

## Endpoint: /tasks/:id

**Method:** `DELETE`  
**Purpose:** Delete a task  
**Authentication:** Required

**URL Parameters:**
- `id`: Task ID

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

**Error Responses:**

**404 Not Found:**
```json
{
  "success": false,
  "error": "Task not found"
}
```

---

### Analytics Endpoints

---

## Endpoint: /analytics/activity

**Method:** `GET`  
**Purpose:** Get user activity data for heatmap  
**Authentication:** Required

**Query Parameters:**
- `weeks` (optional): Number of weeks to return (default: 52, max: 52)

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "activityData": [0, 1, 2, 3, 4, 2, 1, 3, 4, ...],
    "weekCount": 52,
    "totalSessions": 147,
    "currentStreak": 12,
    "longestStreak": 23
  }
}
```

---

## Endpoint: /analytics/sessions

**Method:** `GET`  
**Purpose:** Get Pomodoro session history  
**Authentication:** Required

**Query Parameters:**
- `startDate` (optional): ISO date string
- `endDate` (optional): ISO date string
- `limit` (optional): Number of sessions (default: 100)

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "sessions": [
      {
        "id": "session-uuid-1",
        "type": "work",
        "duration": 1500,
        "completedAt": "2024-12-18T14:00:00.000Z"
      },
      {
        "id": "session-uuid-2",
        "type": "break",
        "duration": 300,
        "completedAt": "2024-12-18T14:30:00.000Z"
      }
    ],
    "total": 147,
    "totalWorkMinutes": 3675,
    "totalBreakMinutes": 735
  }
}
```

---

## Endpoint: /analytics/sessions

**Method:** `POST`  
**Purpose:** Record a completed Pomodoro session  
**Authentication:** Required

**Request Body:**
```json
{
  "type": "work",
  "duration": 1500,
  "completedAt": "2024-12-18T16:00:00.000Z"
}
```

**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Session recorded successfully",
  "data": {
    "session": {
      "id": "session-uuid-3",
      "type": "work",
      "duration": 1500,
      "completedAt": "2024-12-18T16:00:00.000Z"
    },
    "newTotalSessions": 148
  }
}
```

---

## Endpoint: /analytics/stats

**Method:** `GET`  
**Purpose:** Get overall user statistics  
**Authentication:** Required

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "totalSessions": 147,
    "totalTasks": 52,
    "completedTasks": 38,
    "currentStreak": 12,
    "longestStreak": 23,
    "averageSessionsPerDay": 6.8,
    "totalProductiveMinutes": 3675,
    "accountAge": 45
  }
}
```

---

## Common Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": "Invalid request",
  "details": "Specific validation error message"
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "error": "Authentication required"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "error": "Access denied"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Resource not found"
}
```

### 429 Too Many Requests
```json
{
  "success": false,
  "error": "Rate limit exceeded",
  "retryAfter": 60
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Internal server error",
  "message": "An unexpected error occurred"
}
```

---

## Rate Limiting

**Default Limits:**
- Authentication endpoints: 5 requests per minute
- Content endpoints: 30 requests per minute
- Task endpoints: 60 requests per minute
- Analytics endpoints: 30 requests per minute

**Rate Limit Headers:**
```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1702908000
```

---

## Versioning

The API uses URL versioning. The current version is v1.

**Base URL Format:** `https://api.focusflow.app/v1/`

Breaking changes will result in a new version (v2, v3, etc.). Old versions will be supported for at least 6 months after a new version is released.

---

## Implementation Timeline

**Phase 1 (v1.1 - January 2025):**
- `/auth/*` endpoints
- `/users/*` endpoints
- `/content` endpoints

**Phase 2 (v1.2 - February 2025):**
- `/tasks/*` endpoints
- `/analytics/activity` endpoint

**Phase 3 (v2.0 - Q2 2025):**
- `/analytics/sessions` endpoints
- `/analytics/stats` endpoint
- WebSocket support for real-time updates

---

**Document Version:** 1.0.0 (Planned API)  
**Last Updated:** December 18, 2024  
**Document Owner:** Aslan Kazhgali (Backend Developer)  
**Status:** Draft - API not yet implemented