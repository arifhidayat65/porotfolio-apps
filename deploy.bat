@echo off
echo Memulai proses deployment...

echo 1. Menginstal dependensi...
call npm install

echo 2. Membangun aplikasi...
call npm run build

echo 3. Restart PM2...
call pm2 restart ecosystem.config.js || call pm2 start ecosystem.config.js

echo Deployment selesai!
pause
