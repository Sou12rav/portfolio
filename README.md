# Portfolio Website - Setup Guide

This is a professional portfolio website built with React, TypeScript, and Express.

## Prerequisites

Before you begin, make sure you have the following installed on your PC:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - To check if installed, open terminal/command prompt and type: `node --version`

2. **Git** (optional, for cloning)
   - Download from: https://git-scm.com/

## Step-by-Step Setup Instructions

### Step 1: Download the Project

If you have this project as a folder, skip to Step 2.

If using Git:
```bash
git clone <your-repository-url>
cd <project-folder-name>
```

### Step 2: Install Dependencies

Open your terminal/command prompt in the project folder and run:

```bash
npm install
```

This will install all required packages. It might take a few minutes.

### Step 3: Start the Application

After installation completes, run:

```bash
npm run dev
```

### Step 4: Open in Browser

Once the server starts, you'll see a message like:
```
Server running on http://localhost:5000
```

Open your web browser and go to:
```
http://localhost:5000
```

Your portfolio website should now be running!

## How to Stop the Application

In the terminal where the application is running, press:
- **Windows**: `Ctrl + C`
- **Mac/Linux**: `Ctrl + C` or `Cmd + C`

## Project Structure

```
portfolio/
├── client/              # Frontend React application
│   └── src/
│       ├── components/  # React components (navigation, sections, etc.)
│       ├── pages/       # Page components
│       └── App.tsx      # Main app component
├── server/              # Backend Express server
├── shared/              # Shared code between frontend and backend
└── attached_assets/     # Images, resume, and other assets
```

## Customization

### Update Your Information

1. **Profile Image**: Replace `attached_assets/dp_1761667356615.jpg` with your photo
2. **Resume**: Replace `attached_assets/Sourav_Acherjee_Software_Engineer_Resume_1761667072658.pdf` with your resume
3. **Personal Info**: Edit the components in `client/src/components/` to update:
   - `hero-section.tsx` - Your name and introduction
   - `education-section.tsx` - Your education details
   - `skills-section.tsx` - Your skills
   - `projects-section.tsx` - Your projects
   - `experience-section.tsx` - Your experience
   - `certifications-section.tsx` - Your certifications

### Change Colors/Theme

Edit `client/src/index.css` to modify the color scheme.

## Building for Production

To create a production-ready version:

```bash
npm run build
```

This creates optimized files in the `dist` folder.

## Troubleshooting

### Port 5000 is already in use

If you see an error about port 5000 being in use:

1. Find what's using port 5000:
   - Windows: `netstat -ano | findstr :5000`
   - Mac/Linux: `lsof -i :5000`

2. Stop that application or change the port in your project

### Installation fails

1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again
3. Make sure you're using Node.js version 18 or higher

### Application won't start

1. Make sure all dependencies installed successfully
2. Check that port 5000 is available
3. Try restarting your terminal and running `npm run dev` again

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **UI Components**: Shadcn/ui (Radix UI)
- **Build Tool**: Vite
- **Routing**: Wouter
- **State Management**: TanStack React Query

## Support

If you encounter any issues, check:
1. Node.js version is 18 or higher: `node --version`
2. All dependencies installed: `npm install`
3. No other application is using port 5000

---

Made with React and TypeScript
