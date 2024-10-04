---
title: Overview
description: Overview ofPearAI
keywords: [setup, start, install, vscode, jetbrains, overview]
---

# Overview

PearAI is an Open Source AI-Powered code Editor that can be deeply customized. This is primarily accomplished by clicking in the ```Settings icon ```editing a local file located at ```~/pearai/config.json``` (MacOS / Linux) or ```%USERPROFILE%\.pearai\config.json``` (Windows). config.json is created the first time you use PearAI.

## Quick Start

- When you first install PearAI, Open the app and the chat window should appear on the right side (might load for a brief period on the first time).
- Select PearAI server and log in. 

## Choosing Your Models

PearAI works with a variety of LLMs:

- **Commercial models** (e.g., Claude 3 Opus via Anthropic API)
- **Open-source models** (e.g., Llama 3 running locally with Ollama)
- And many options in between

You'll need to select models for three main functions:

1. **Chat**
2. **Autocomplete**
3. **Embeddings**

## Customization Options

PearAI offers deep customization through `config.json` and `config.ts` files. These are located in:

- **MacOS**: `~/.PearAI/`
- **Windows**: `%userprofile%\.PearAI`

You can customize:

- **Basic Configuration**
- **Model Providers**
- **Model Selection**
- **Context Providers**
- **Slash Commands**
- **Advanced Options**

## Sharing Your Configuration

To share your PearAI setup with a team:

1. Create a `.PearAIrc.json` file in your project's root directory.
2. Use the same JSON Schema as `config.json`.
3. This file will automatically apply on top of the local `config.json`.

Get started with PearAI today and Speed up your development by integrating AI the correct way 🚀
