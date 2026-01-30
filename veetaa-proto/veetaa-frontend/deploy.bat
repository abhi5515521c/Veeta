@echo off
cd /d "%~dp0"
call netlify deploy --prod --dir=dist
