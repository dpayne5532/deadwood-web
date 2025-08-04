#!/bin/bash

current_branch=$(git rev-parse --abbrev-ref HEAD)
set -e  # Exit immediately if a command exits with a non-zero status

echo "📥 Pulling latest changes from GitHub..."
cd /home/dan/deadwood-web
git checkout master
git pull origin master
git checkout "$current_branch"

echo "🔧 Installing/updating dependencies..."
npm install

echo "🏗️ Building the React app for production..."
npm run build

echo "🧪 Testing nginx configuration..."
sudo nginx -t

echo "🔁 Reloading nginx..."
sudo systemctl reload nginx

echo "✅ Deployment complete! Frontend live at https://deadwood.rest"
