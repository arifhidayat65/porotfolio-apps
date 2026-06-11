#!/bin/bash

echo "Memulai proses deployment..."

# Pastikan npx tersedia
if ! command -v npx &> /dev/null
then
    echo "npx tidak ditemukan, harap instal Node.js"
    exit
fi

echo "1. Menginstal dependensi..."
npm install

echo "2. Membangun aplikasi..."
npm run build

echo "3. Restart PM2..."
pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js

echo "Deployment selesai!"
