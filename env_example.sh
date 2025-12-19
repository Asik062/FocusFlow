# FocusFlow Environment Variables
# Copy this file to .env and fill in your values

# ==================================
# Application Configuration
# ==================================

# Application name
VITE_APP_NAME=FocusFlow

# Application version
VITE_APP_VERSION=1.0.0

# Application environment (development, production, staging)
VITE_APP_ENV=development

# Application base URL
VITE_APP_BASE_URL=http://localhost:5173

# ==================================
# API Configuration (Future Use)
# ==================================

# API base URL (not used in v1.0.0, client-side only)
# Will be used in v1.1+ when backend is implemented
VITE_API_BASE_URL=http://localhost:3000/api/v1

# API timeout in milliseconds
VITE_API_TIMEOUT=10000

# ==================================
# Storage Configuration
# ==================================

# localStorage key prefix
VITE_STORAGE_PREFIX=focusflow_

# Maximum storage size in MB (localStorage limit)
VITE_MAX_STORAGE_MB=5

# Auto-save interval in seconds
VITE_AUTOSAVE_INTERVAL=30

# ==================================
# Feature Flags
# ==================================

# Enable debug mode (shows console logs)
VITE_DEBUG_MODE=false

# Enable analytics tracking
VITE_ENABLE_ANALYTICS=false

# Enable error reporting
VITE_ENABLE_ERROR_REPORTING=false

# ==================================
# Timer Defaults
# ==================================

# Default work duration in minutes
VITE_DEFAULT_WORK_DURATION=25

# Default break duration in minutes
VITE_DEFAULT_BREAK_DURATION=5

# Minimum work duration in minutes
VITE_MIN_WORK_DURATION=1

# Maximum work duration in minutes
VITE_MAX_WORK_DURATION=60

# Minimum break duration in minutes
VITE_MIN_BREAK_DURATION=1

# Maximum break duration in minutes
VITE_MAX_BREAK_DURATION=30

# ==================================
# Analytics Configuration (Future Use)
# ==================================

# Google Analytics ID (not used in v1.0.0)
# VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Mixpanel token (not used in v1.0.0)
# VITE_MIXPANEL_TOKEN=your_mixpanel_token

# ==================================
# Authentication (Future Use)
# ==================================

# JWT secret (not used in v1.0.0, localStorage only)
# Will be used when backend is implemented
# JWT_SECRET=your_super_secret_jwt_key_here

# JWT expiration time
# JWT_EXPIRATION=24h

# Refresh token expiration
# REFRESH_TOKEN_EXPIRATION=7d

# ==================================
# Database Configuration (Future Use)
# ==================================

# PostgreSQL connection (not used in v1.0.0)
# Will be used when backend is implemented
# DATABASE_URL=postgresql://user:password@localhost:5432/focusflow

# Database pool size
# DATABASE_POOL_MIN=2
# DATABASE_POOL_MAX=10

# ==================================
# Email Service (Future Use)
# ==================================

# Email service provider (not used in v1.0.0)
# EMAIL_SERVICE=SendGrid
# EMAIL_API_KEY=your_sendgrid_api_key
# EMAIL_FROM=noreply@focusflow.app
# EMAIL_FROM_NAME=FocusFlow Team

# ==================================
# Cloud Storage (Future Use)
# ==================================

# AWS S3 configuration (not used in v1.0.0)
# AWS_REGION=us-east-1
# AWS_ACCESS_KEY_ID=your_access_key
# AWS_SECRET_ACCESS_KEY=your_secret_key
# AWS_S3_BUCKET=focusflow-uploads

# ==================================
# External Services (Future Use)
# ==================================

# Sentry error tracking (not used in v1.0.0)
# SENTRY_DSN=https://your_sentry_dsn

# OpenAI API for AI features (future v2.0)
# OPENAI_API_KEY=your_openai_api_key

# ==================================
# Development Only
# ==================================

# Port for development server
VITE_PORT=5173

# Enable hot module replacement
VITE_HMR=true

# Source maps in development
VITE_SOURCEMAP=true

# ==================================
# Notes
# ==================================

# 1. Never commit the actual .env file to version control
# 2. Keep this .env.example file updated with new variables
# 3. Use VITE_ prefix for variables that need to be exposed to client
# 4. Variables without VITE_ prefix are for backend use only (future)
# 5. Current version (1.0.0) only uses VITE_ variables
# 6. Backend-related variables are placeholders for future versions