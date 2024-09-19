---
title: Configuration
description: Setting up PearAI
keywords: [setup, start, install, vscode, jetbrains]
---

# Configuration

Want a quick and easy setup for PearAI? We've got you covered with some sample `config.json` files for different scenarios. Just copy and paste them into your `config.json `by clicking the gear icon at the bottom right of the PearAI sidebar.

# Quick Setup Options

You can use PearAI in different ways. Here are some quick setups for common uses:

### Model

- You can download PearAI directly, and use our free trial, or your own API key

### Custom Commands

- Get the monthly subscription, and we'll take care of you

### Context Provider

- Pay one lump sum yearly, and you'll be treated like our VIP!

### Slash Commands

# Model Comfiguration

The Intern lets new users PearAI directly, and use our free trial, or your own API key

- Free requests out of the box, no credit card required.
- Use our free trial, your own API key, or local models.
- Join our Community Discord server.

### Configuration (`config.json`)

```json
{
  "models": [
    {
      "model": "pearai_model",
      "contextLength": 300000,
      "title": "PearAI Model",
      "systemMessage": "You are an expert software developer. You give helpful and concise responses.",
      "provider": "pearai_server",
      "isDefault": true
    },
    {
      "model": "gpt-4o",
      "contextLength": 300000,
      "title": "GPT-4o (PearAI)",
      "systemMessage": "You are an expert software developer. You give helpful and concise responses.",
      "provider": "pearai_server",
      "isDefault": true
    },
    {
      "model": "claude-3-5-sonnet-20240620",
      "contextLength": 3000000,
      "title": "Claude 3.5 Sonnet (PearAI)",
      "systemMessage": "You are an expert software developer. You give helpful and concise responses.",
      "provider": "pearai_server",
      "isDefault": true
    },
    {
      "model": "pearai_model",
      "contextLength": 300000,
      "title": "PearAI Model (1)",
      "systemMessage": "You are an expert software developer. You give helpful and concise responses.",
      "provider": "pearai_server"
    }
  ]
}
```

# Custom Commands

The Intern lets new users PearAI directly, and use our free trial, or your own API key

- Free requests out of the box, no credit card required.
- Use our free trial, your own API key, or local models.
- Join our Community Discord server.

### Configuration (`config.json`)

```json
{
  "customCommands": [
    {
      "name": "test",
      "prompt": "{{{ input }}}\n\nWrite a comprehensive set of unit tests for the selected code. It should setup, run tests that check for correctness including important edge cases, and teardown. Ensure that the tests are complete and sophisticated. Give the tests just as chat output, don't edit any file.",
      "description": "Write unit tests for highlighted code"
    }
  ]
}
```

# Context Providers

The Intern lets new users PearAI directly, and use our free trial, or your own API key

- Free requests out of the box, no credit card required.
- Use our free trial, your own API key, or local models.
- Join our Community Discord server.

### Configuration (`config.json`)

```json
{
  "contextProviders": [
    {
      "name": "code",
      "params": {}
    },
    {
      "name": "docs",
      "params": {}
    },
    {
      "name": "diff",
      "params": {}
    },
    {
      "name": "terminal",
      "params": {}
    },
    {
      "name": "problems",
      "params": {}
    },
    {
      "name": "folder",
      "params": {}
    },
    {
      "name": "codebase",
      "params": {}
    }
  ]
}
```

# Slash Commands

The Intern lets new users PearAI directly, and use our free trial, or your own API key

- Free requests out of the box, no credit card required.
- Use our free trial, your own API key, or local models.
- Join our Community Discord server.

### Configuration (`config.json`)

```json
{
  "slashCommands": [
    {
      "name": "edit",
      "description": "Edit selected code"
    },
    {
      "name": "comment",
      "description": "Write comments for the selected code"
    },
    {
      "name": "share",
      "description": "Export the current chat session to markdown"
    },
    {
      "name": "cmd",
      "description": "Generate a shell command"
    },
    {
      "name": "commit",
      "description": "Generate a git commit message"
    }
  ]
}
```
