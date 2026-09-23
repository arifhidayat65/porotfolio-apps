@echo off
echo Membangun aplikasi...
call npm run build

echo Melakukan deployment ke Netlify...
call npx netlify-cli deploy --prod --dir=dist

pause
