@echo off
title Initial Start

if exist node_modules\ (
    echo "Discord.js is installed"
    PAUSE
    exit
) else (
    echo "installing discord.js"
    call npm install discord.js
)
PAUSE