---
title: Configuration
description: Setting up PearAI
keywords: [setup, start, install, vscode, jetbrains]
---

# Configuration

Want a quick and easy setup for PearAI? We've got you covered with some sample ```config.json``` files for different scenarios. Just copy and paste them into your ````config.json ````by clicking the gear icon at the bottom right of the PearAI sidebar.

# Quick Setup Options

You can use Continue in different ways. Here are some quick setups for common uses:

### Intern
- You can download PearAI directly, and use our free trial, or your own API key 

### Junior Engineer
- Get the monthly subscription, and we'll take care of you

### 10X Engineer
- Pay one lump sum yearly, and you'll be treated like our VIP!

# Intern

The Intern lets new users PearAI directly, and use our free trial, or your own API key

- Free requests out of the box, no credit card required.
- Use our free trial, your own API key, or local models.
- Join our Community Discord server.

### Configuration (`~/.PearAI/config.json`)

```json
{
  "models": [
    {
      "title": "GPT-4o (trial)",
      "provider": "intern",
      "model": "gpt-4o"
    }
  ],
  "tabAutocompleteModel": {
    "title": "Codestral (trial)",
    "provider": "intern",
    "model": "AUTODETECT"
  },
  "embeddingsProvider": {
    "provider": "intern"
  },
  "reranker": {
    "name": "intern"
  }
}