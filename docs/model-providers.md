---
title: Model Providers
description: Models for PearAI
keywords: [setup, install, autopilot, chatgpt, model]
---

# Model Providers

# Configure and Integrate Various LLM Providers

Configure and integrate various LLM (Large Language Model) providers for chat, autocomplete, and embedding models, whether self-hosted, remote, or via SaaS.
 
To select the ones you want to use, add them to your `config.json`.

## Self-hosted

### Local

You can run a model on your local computer using:

- **Ollama**
- **LM Studio**
- **Llama.cpp**
- **KoboldCpp** (OpenAI compatible server)
- **llamafile** (OpenAI compatible server)
- **LocalAI** (OpenAI compatible server)
- **Text generation web UI** (OpenAI compatible server)
- **FastChat** (OpenAI compatible server)
- **llama-cpp-python** (OpenAI compatible server)
- **TensorRT-LLM** (OpenAI compatible server)
- **IPEX-LLM** (Local LLM on Intel GPU)
- **Msty**
- **IBM watsonx**
- **Nvidia NIMS** (OpenAI compatible server)

### Remote

You can deploy a model in your AWS, GCP, Azure, Lambda, or other clouds using:

- **HuggingFace TGI**
- **vLLM**
- **SkyPilot**
- **Anyscale Private Endpoints** (OpenAI compatible API)
- **Lambda**

## SaaS

### Open-source and Commercial Models

You can access both open-source and commercial LLMs via:

- **OpenRouter**
- **Kindo**
- **Nvidia NIMS** (OpenAI compatible server)

### Open-source Models

You can run open-source LLMs with cloud services like:

- **Codestral API**
- **Together**
- **HuggingFace Inference Endpoints**
- **Anyscale Endpoints** (OpenAI compatible API)
- **Replicate**
- **Deepinfra**
- **Groq** (OpenAI compatible API)

### Commercial Models

You can use commercial LLMs via APIs using:

- **Anthropic API**
- **OpenAI API**
- **Azure OpenAI Service**
- **Amazon Bedrock**
- **Google Gemini API**
- **Mistral API**
- **Voyage AI API**
- **Cohere API**

In addition to selecting providers, you will need to figure out what models to use.
