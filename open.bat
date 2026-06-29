@echo off
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js is not installed. Opening index.html directly...
    start "" "index.html"
    exit /b
)
echo Installing dependencies if needed...
call npm install
echo Starting dev server...
npm run dev
