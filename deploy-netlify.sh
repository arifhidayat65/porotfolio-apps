#!/bin/bash

# Memastikan folder dist ada dengan melakukan build
echo "Membangun aplikasi..."
npm run build

# Cek apakah netlify-cli tersedia via npx
echo "Melakukan deployment ke Netlify..."
npx netlify-cli deploy --prod --dir=dist
