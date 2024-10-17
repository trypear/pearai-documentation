---
title: Select Models
description: Selecting models in PearAI
keywords: [autopilot, chatgpt, model]
---

# Select Models

# PearAI: Selecting Models for Chat, Autocomplete, and Embeddings

PearAI makes it easy to use different models for chat, autocomplete, and embeddings. To select the models you want to use, add them to your `config.json`.

## Chat

You likely want to use a model that is 30B+ parameters for chat.

### Open-source LLMs

We currently recommend the following open-source models:

- **Llama 3** from Meta:
  - Unlimited GPU: `llama3-70b`
  - Limited GPU: `llama3-8B`
- **DeepSeek Coder v2** from DeepSeek:
  - Unlimited GPU: `deepseek-coder-v2:236b`
  - Limited GPU: `deepseek-coder-v2:16b`

You can also use other open-source chat models by adding them to your `config.json`.

### Commercial LLMs

- **Claude 3** from Anthropic:
  - Unlimited budget: `claude-3-5-sonnet-20240620`
  - Limited budget: `claude-3-5-sonnet-20240620`
- **GPT-4o** from OpenAI:
  - Unlimited budget: `gpt-4o`
  - Limited budget: `gpt-4o-mini`
- **Gemini Pro** from Google:
  - Unlimited budget: `gemini-pro-1.5-latest`
  - Limited budget: `gemini-flash-1.5-latest` or `gemini-pro-1.0`

You can also use other commercial chat models by adding them to your `config.json`.

## Autocomplete

You likely want to use a model that is 1-15B parameters for autocomplete. You can read more about it [here](#).

### Commercial LLMs

- **Codestral** from Mistral:
  - Our current recommendation for autocomplete is `codestral-latest` from Mistral's API.

### Open-source LLMs

We currently recommend the following open-source models:

- **DeepSeek Coder v2** from DeepSeek:
  - Unlimited GPU: `deepseek-coder-v2:16b`
  - Limited GPU: `deepseek-coder:6.7b` or `deepseek-coder:1.3b`
- **StarCoder 2** from Hugging Face:
  - Unlimited GPU: `starcoder-2-7b`
  - Limited GPU: `starcoder-2-3b`

You can also use other autocomplete models by adding them to your `config.json`.

## Embeddings

We recommend the following embeddings models, which are used for codebase retrieval as described [here](#).

### Open-source Models

- `nomic-embed-text`

### Commercial Models

- `voyage-code-2`

You can also use other embeddings models by adding them to your `config.json`.

In addition to selecting models, you will need to figure out which model providers to use.
