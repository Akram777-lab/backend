# Deployment Guide

## Server Details

- **Server IP:** 72.61.229.197
- **Platform:** CloudPanel
- **Admin Panel:** https://72.61.229.197:8443
- **App Directory:** `/home/user/htdocs/backend`
- **Node Version:** 20.19.6
- **Process Manager:** PM2

## SSH Access

```bash
ssh root@72.61.229.197
```

**Password:** `Edubrights@19`

## Deployment Steps

### 1. Connect to Server

```bash
ssh root@72.61.229.197
```

### 2. Navigate to Backend Directory

```bash
cd /home/user/htdocs/backend
```

### 3. Pull Latest Changes

```bash
git pull origin main
```

If you encounter merge conflicts:

```bash
# Stash local changes if needed
git stash

# Pull latest
git pull origin main

# Apply stashed changes (if applicable)
git stash pop
```

Or if you want to keep local changes:

```bash
git add .
git commit -m "Save local changes before pulling"
git pull origin main --no-rebase
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Build the Application

```bash
npm run build
```

### 6. Restart PM2 Process

```bash
pm2 restart strapi --update-env
```

## PM2 Commands Reference

| Command | Description |
|---------|-------------|
| `pm2 list` | List all running processes |
| `pm2 describe strapi` | Show detailed info about strapi process |
| `pm2 restart strapi` | Restart the strapi process |
| `pm2 restart strapi --update-env` | Restart with updated environment variables |
| `pm2 logs strapi` | View strapi logs |
| `pm2 logs strapi --lines 100` | View last 100 lines of logs |
| `pm2 monit` | Monitor CPU and Memory usage |

## Quick Deploy (One-liner)

```bash
cd /home/user/htdocs/backend && git pull origin main && npm install && npm run build && pm2 restart strapi --update-env
```

## Troubleshooting

### Check Process Status

```bash
pm2 list
pm2 describe strapi
```

### View Logs

```bash
pm2 logs strapi --lines 200
```

### Log Paths

- **Error Log:** `/root/.pm2/logs/strapi-error.log`
- **Output Log:** `/root/.pm2/logs/strapi-out.log`

### Git Conflicts

If `git pull` fails due to local changes:

```bash
# Option 1: Discard local changes
git checkout -- .
git pull origin main

# Option 2: Stash and reapply
git stash
git pull origin main
git stash pop

# Option 3: Commit local changes first
git add .
git commit -m "Local changes"
git pull origin main --no-rebase
```

## Environment

The application uses environment variables from `.env` file. After updating `.env`, restart PM2 with:

```bash
pm2 restart strapi --update-env
```
