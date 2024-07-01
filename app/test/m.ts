export const m=[

    {
        "id": "openai/gpt-4o-2024-05-13",
        "data": {
            "id": "openai/gpt-4o-2024-05-13",
            "name": "OpenAI: GPT-4o (2024-05-13)",
            "pricing": {
                "image": "0.002312",
                "prompt": "0.000005",
                "request": "0",
                "completion": "0.000015"
            },
            "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.\n\nFor benchmarking against other models, it was briefly called [\"im-also-a-good-gpt2-chatbot\"](https://twitter.com/LiamFedus/status/1790064963966370209)\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "GPT",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 128000,
            "per_request_limits": null
        }
    },
    {
        "id": "openai/gpt-4-turbo",
        "data": {
            "id": "openai/gpt-4-turbo",
            "name": "OpenAI: GPT-4 Turbo",
            "pricing": {
                "image": "0.01445",
                "prompt": "0.00001",
                "request": "0",
                "completion": "0.00003"
            },
            "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling.\n\nTraining data: up to December 2023.",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "GPT",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 128000,
            "per_request_limits": null
        }
    },
    {
        "id": "openai/gpt-4-turbo-preview",
        "data": {
            "id": "openai/gpt-4-turbo-preview",
            "name": "OpenAI: GPT-4 Turbo Preview",
            "pricing": {
                "image": "0",
                "prompt": "0.00001",
                "request": "0",
                "completion": "0.00003"
            },
            "description": "The preview GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Dec 2023.\n\n**Note:** heavily rate limited by OpenAI while in preview.",
            "architecture": {
                "modality": "text",
                "tokenizer": "GPT",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 128000,
            "per_request_limits": null
        }
    },
    {
        "id": "openai/gpt-4-1106-preview",
        "data": {
            "id": "openai/gpt-4-1106-preview",
            "name": "OpenAI: GPT-4 Turbo (older v1106)",
            "pricing": {
                "image": "0",
                "prompt": "0.00001",
                "request": "0",
                "completion": "0.00003"
            },
            "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling.\n\nTraining data: up to April 2023.",
            "architecture": {
                "modality": "text",
                "tokenizer": "GPT",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 128000,
            "per_request_limits": null
        }
    },
    {
        "id": "openai/gpt-4",
        "data": {
            "id": "openai/gpt-4",
            "name": "OpenAI: GPT-4",
            "pricing": {
                "image": "0",
                "prompt": "0.00003",
                "request": "0",
                "completion": "0.00006"
            },
            "description": "OpenAI's flagship model, GPT-4 is a large-scale multimodal language model capable of solving difficult problems with greater accuracy than previous models due to its broader general knowledge and advanced reasoning capabilities. Training data: up to Sep 2021.",
            "architecture": {
                "modality": "text",
                "tokenizer": "GPT",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 8191,
            "per_request_limits": null
        }
    },
    {
        "id": "openai/gpt-4-0314",
        "data": {
            "id": "openai/gpt-4-0314",
            "name": "OpenAI: GPT-4 (older v0314)",
            "pricing": {
                "image": "0",
                "prompt": "0.00003",
                "request": "0",
                "completion": "0.00006"
            },
            "description": "GPT-4-0314 is the first version of GPT-4 released, with a context length of 8,192 tokens, and was supported until June 14. Training data: up to Sep 2021.",
            "architecture": {
                "modality": "text",
                "tokenizer": "GPT",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 8191,
            "per_request_limits": null
        }
    },
    {
        "id": "openai/gpt-4-vision-preview",
        "data": {
            "id": "openai/gpt-4-vision-preview",
            "name": "OpenAI: GPT-4 Vision",
            "pricing": {
                "image": "0.01445",
                "prompt": "0.00001",
                "request": "0",
                "completion": "0.00003"
            },
            "description": "Ability to understand images, in addition to all other [GPT-4 Turbo capabilties](/models/openai/gpt-4-turbo). Training data: up to Apr 2023.\n\n**Note:** heavily rate limited by OpenAI while in preview.\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "GPT",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 128000,
            "per_request_limits": null
        }
    },
    {
        "id": "microsoft/phi-3-mini-128k-instruct:free",
        "data": {
            "id": "microsoft/phi-3-mini-128k-instruct:free",
            "name": "Phi-3 Mini 128K Instruct (free)",
            "pricing": {
                "image": "0",
                "prompt": "0",
                "request": "0",
                "completion": "0"
            },
            "description": "Phi-3 Mini is a powerful 3.8B parameter model designed for advanced language understanding, reasoning, and instruction following. Optimized through supervised fine-tuning and preference adjustments, it excels in tasks involving common sense, mathematics, logical reasoning, and code processing.\n\nAt time of release, Phi-3 Medium demonstrated state-of-the-art performance among lightweight models. This model is static, trained on an offline dataset with an October 2023 cutoff date.\n\nNote: this is a free, rate-limited version of [Phi-3 Mini 128K Instruct](/models/microsoft/phi-3-mini-128k-instruct). Outputs may be cached. Read about rate limits [here](/docs/limits).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Other",
                "instruct_type": "phi3"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 128000,
            "per_request_limits": null
        }
    },
    {
        "id": "google/gemini-pro",
        "data": {
            "id": "google/gemini-pro",
            "name": "Google: Gemini Pro 1.0",
            "pricing": {
                "image": "0.0025",
                "prompt": "0.000000125",
                "request": "0",
                "completion": "0.000000375"
            },
            "description": "Google's flagship text generation model. Designed to handle natural language tasks, multiturn text and code chat, and code generation.\n\nSee the benchmarks and prompting guidelines from [Deepmind](https://deepmind.google/technologies/gemini/).\n\nUsage of Gemini is subject to Google's [Gemini Terms of Use](https://ai.google.dev/terms).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Gemini",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 22937
            },
            "context_length": 91728,
            "per_request_limits": null
        }
    },
    {
        "id": "openai/gpt-3.5-turbo-instruct",
        "data": {
            "id": "openai/gpt-3.5-turbo-instruct",
            "name": "OpenAI: GPT-3.5 Turbo Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.0000015",
                "request": "0",
                "completion": "0.000002"
            },
            "description": "This model is a variant of GPT-3.5 Turbo tuned for instructional prompts and omitting chat-related optimizations. Training data: up to Sep 2021.",
            "architecture": {
                "modality": "text",
                "tokenizer": "GPT",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 4095,
            "per_request_limits": null
        }
    },
    {
        "id": "openai/gpt-4-32k",
        "data": {
            "id": "openai/gpt-4-32k",
            "name": "OpenAI: GPT-4 32k",
            "pricing": {
                "image": "0",
                "prompt": "0.00006",
                "request": "0",
                "completion": "0.00012"
            },
            "description": "GPT-4-32k is an extended version of GPT-4, with the same capabilities but quadrupled context length, allowing for processing up to 40 pages of text in a single pass. This is particularly beneficial for handling longer content like interacting with PDFs without an external vector database. Training data: up to Sep 2021.",
            "architecture": {
                "modality": "text",
                "tokenizer": "GPT",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 32767,
            "per_request_limits": null
        }
    },
    {
        "id": "google/gemini-pro-1.5",
        "data": {
            "id": "google/gemini-pro-1.5",
            "name": "Google: Gemini Pro 1.5",
            "pricing": {
                "image": "0.00265",
                "prompt": "0.0000025",
                "request": "0",
                "completion": "0.0000075"
            },
            "description": "Google's latest multimodal model, supporting image and video in text or chat prompts.\n\nOptimized for language tasks including:\n\n- Code generation\n- Text generation\n- Text editing\n- Problem solving\n- Recommendations\n- Information extraction\n- Data extraction or generation\n- AI agents\n\nUsage of Gemini is subject to Google's [Gemini Terms of Use](https://ai.google.dev/terms).\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Gemini",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 22937
            },
            "context_length": 2800000,
            "per_request_limits": null
        }
    },
    {
        "id": "google/gemma-7b-it:free",
        "data": {
            "id": "google/gemma-7b-it:free",
            "name": "Google: Gemma 7B (free)",
            "pricing": {
                "image": "0",
                "prompt": "0",
                "request": "0",
                "completion": "0"
            },
            "description": "Gemma by Google is an advanced, open-source language model family, leveraging the latest in decoder-only, text-to-text technology. It offers English language capabilities across text generation tasks like question answering, summarization, and reasoning. The Gemma 7B variant is comparable in performance to leading open source models.\n\nUsage of Gemma is subject to Google's [Gemma Terms of Use](https://ai.google.dev/gemma/terms).\n\nNote: this is a free, rate-limited version of [Gemma 7B](/models/google/gemma-7b-it). Outputs may be cached. Read about rate limits [here](/docs/limits).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Gemini",
                "instruct_type": "gemma"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 8192,
            "per_request_limits": null
        }
    },
    {
        "id": "openai/gpt-4-32k-0314",
        "data": {
            "id": "openai/gpt-4-32k-0314",
            "name": "OpenAI: GPT-4 32k (older v0314)",
            "pricing": {
                "image": "0",
                "prompt": "0.00006",
                "request": "0",
                "completion": "0.00012"
            },
            "description": "GPT-4-32k is an extended version of GPT-4, with the same capabilities but quadrupled context length, allowing for processing up to 40 pages of text in a single pass. This is particularly beneficial for handling longer content like interacting with PDFs without an external vector database. Training data: up to Sep 2021.",
            "architecture": {
                "modality": "text",
                "tokenizer": "GPT",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 32767,
            "per_request_limits": null
        }
    },
    {
        "id": "google/palm-2-codechat-bison",
        "data": {
            "id": "google/palm-2-codechat-bison",
            "name": "Google: PaLM 2 Code Chat",
            "pricing": {
                "image": "0",
                "prompt": "0.00000025",
                "request": "0",
                "completion": "0.0000005"
            },
            "description": "PaLM 2 fine-tuned for chatbot conversations that help with code-related questions.",
            "architecture": {
                "modality": "text",
                "tokenizer": "PaLM",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 2867
            },
            "context_length": 20070,
            "per_request_limits": null
        }
    },
    {
        "id": "google/gemini-pro-vision",
        "data": {
            "id": "google/gemini-pro-vision",
            "name": "Google: Gemini Pro Vision 1.0",
            "pricing": {
                "image": "0.0025",
                "prompt": "0.000000125",
                "request": "0",
                "completion": "0.000000375"
            },
            "description": "Google's flagship multimodal model, supporting image and video in text or chat prompts for a text or code response.\n\nSee the benchmarks and prompting guidelines from [Deepmind](https://deepmind.google/technologies/gemini/).\n\nUsage of Gemini is subject to Google's [Gemini Terms of Use](https://ai.google.dev/terms).\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Gemini",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 5734
            },
            "context_length": 45875,
            "per_request_limits": null
        }
    },
    {
        "id": "neversleep/llama-3-lumimaid-8b:extended",
        "data": {
            "id": "neversleep/llama-3-lumimaid-8b:extended",
            "name": "Llama 3 Lumimaid 8B (extended)",
            "pricing": {
                "image": "0",
                "prompt": "0.0000001875",
                "request": "0",
                "completion": "0.000001125"
            },
            "description": "The NeverSleep team is back, with a Llama 3 8B finetune trained on their curated roleplay data. Striking a balance between eRP and RP, Lumimaid was designed to be serious, yet uncensored when necessary.\n\nTo enhance it's overall intelligence and chat capability, roughly 40% of the training data was not roleplay. This provides a breadth of knowledge to access, while still keeping roleplay as the primary strength.\n\nUsage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).\n\nNote: this is an extended-context version of [Llama 3 Lumimaid 8B](/models/neversleep/llama-3-lumimaid-8b). It may have higher prices and different outputs.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": "llama3"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 24576,
            "per_request_limits": null
        }
    },
    {
        "id": "open-orca/mistral-7b-openorca",
        "data": {
            "id": "open-orca/mistral-7b-openorca",
            "name": "Mistral OpenOrca 7B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000018",
                "request": "0",
                "completion": "0.00000018"
            },
            "description": "A fine-tune of Mistral using the OpenOrca dataset. First 7B model to beat all other models <30B.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 8192,
            "per_request_limits": null
        }
    },
    {
        "id": "google/palm-2-chat-bison-32k",
        "data": {
            "id": "google/palm-2-chat-bison-32k",
            "name": "Google: PaLM 2 Chat 32k",
            "pricing": {
                "image": "0",
                "prompt": "0.00000025",
                "request": "0",
                "completion": "0.0000005"
            },
            "description": "PaLM 2 is a language model by Google with improved multilingual, reasoning and coding capabilities.",
            "architecture": {
                "modality": "text",
                "tokenizer": "PaLM",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 22937
            },
            "context_length": 91750,
            "per_request_limits": null
        }
    },
    {
        "id": "google/palm-2-codechat-bison-32k",
        "data": {
            "id": "google/palm-2-codechat-bison-32k",
            "name": "Google: PaLM 2 Code Chat 32k",
            "pricing": {
                "image": "0",
                "prompt": "0.00000025",
                "request": "0",
                "completion": "0.0000005"
            },
            "description": "PaLM 2 fine-tuned for chatbot conversations that help with code-related questions.",
            "architecture": {
                "modality": "text",
                "tokenizer": "PaLM",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 22937
            },
            "context_length": 91750,
            "per_request_limits": null
        }
    },
    {
        "id": "gryphe/mythomist-7b",
        "data": {
            "id": "gryphe/mythomist-7b",
            "name": "MythoMist 7B",
            "pricing": {
                "image": "0",
                "prompt": "0.000000375",
                "request": "0",
                "completion": "0.000000375"
            },
            "description": "From the creator of [MythoMax](/models/gryphe/mythomax-l2-13b), merges a suite of models to reduce word anticipation, ministrations, and other undesirable words in ChatGPT roleplaying data.\n\nIt combines [Neural Chat 7B](/models/intel/neural-chat-7b), Airoboros 7b, [Toppy M 7B](/models/undi95/toppy-m-7b), [Zepher 7b beta](/models/huggingfaceh4/zephyr-7b-beta), [Nous Capybara 34B](/models/nousresearch/nous-capybara-34b), [OpenHeremes 2.5](/models/teknium/openhermes-2.5-mistral-7b), and many others.\n\n#merge",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "alpaca"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 2048
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "meta-llama/llama-3-8b-instruct:extended",
        "data": {
            "id": "meta-llama/llama-3-8b-instruct:extended",
            "name": "Meta: Llama 3 8B Instruct (extended)",
            "pricing": {
                "image": "0",
                "prompt": "0.0000001875",
                "request": "0",
                "completion": "0.000001125"
            },
            "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 8B instruct-tuned version was optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).\n\nNote: this is an extended-context version of [Llama 3 8B Instruct](/models/meta-llama/llama-3-8b-instruct). It may have higher prices and different outputs.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": "llama3"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 16384,
            "per_request_limits": null
        }
    },
    {
        "id": "xwin-lm/xwin-lm-70b",
        "data": {
            "id": "xwin-lm/xwin-lm-70b",
            "name": "Xwin 70B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000375",
                "request": "0",
                "completion": "0.00000375"
            },
            "description": "Xwin-LM aims to develop and open-source alignment tech for LLMs. Our first release, built-upon on the [Llama2](/models/${Model.Llama_2_13B_Chat}) base models, ranked TOP-1 on AlpacaEval. Notably, it's the first to surpass [GPT-4](/models/${Model.GPT_4}) on this benchmark. The project will be continuously updated.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "airoboros"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 400
            },
            "context_length": 8192,
            "per_request_limits": null
        }
    },
    {
        "id": "01-ai/yi-large",
        "data": {
            "id": "01-ai/yi-large",
            "name": "Yi Large",
            "pricing": {
                "image": "0",
                "prompt": "0.000003",
                "request": "0",
                "completion": "0.000003"
            },
            "description": "The Yi Large model was designed by 01.AI with the following usecases in mind: knowledge search, data classification, human-like chat bots, and customer service.\n\nIt stands out for its multilingual proficiency, particularly in Spanish, Chinese, Japanese, German, and French.\n\nCheck out the [launch announcement](https://01-ai.github.io/blog/01.ai-yi-large-llm-launch) to learn more.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Yi",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "mistralai/mistral-tiny",
        "data": {
            "id": "mistralai/mistral-tiny",
            "name": "Mistral Tiny",
            "pricing": {
                "image": "0",
                "prompt": "0.00000025",
                "request": "0",
                "completion": "0.00000025"
            },
            "description": "This model is currently powered by Mistral-7B-v0.2, and incorporates a \"better\" fine-tuning than [Mistral 7B](/models/mistralai/mistral-7b-instruct-v0.1), inspired by community work. It's best used for large batch processing tasks where cost is a significant factor but reasoning capabilities are not crucial.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32000,
            "per_request_limits": null
        }
    },
    {
        "id": "mistralai/mistral-small",
        "data": {
            "id": "mistralai/mistral-small",
            "name": "Mistral Small",
            "pricing": {
                "image": "0",
                "prompt": "0.000002",
                "request": "0",
                "completion": "0.000006"
            },
            "description": "This model is currently powered by Mixtral-8X7B-v0.1, a sparse mixture of experts model with 12B active parameters. It has better reasoning, exhibits more capabilities, can produce and reason about code, and is multiligual, supporting English, French, German, Italian, and Spanish.\n#moe",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32000,
            "per_request_limits": null
        }
    },
    {
        "id": "mistralai/mistral-medium",
        "data": {
            "id": "mistralai/mistral-medium",
            "name": "Mistral Medium",
            "pricing": {
                "image": "0",
                "prompt": "0.0000027",
                "request": "0",
                "completion": "0.0000081"
            },
            "description": "This is Mistral AI's closed-source, medium-sided model. It's powered by a closed-source prototype and excels at reasoning, code, JSON, chat, and more. In benchmarks, it compares with many of the flagship models of other companies.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32000,
            "per_request_limits": null
        }
    },
    {
        "id": "mistralai/mistral-large",
        "data": {
            "id": "mistralai/mistral-large",
            "name": "Mistral Large",
            "pricing": {
                "image": "0",
                "prompt": "0.000008",
                "request": "0",
                "completion": "0.000024"
            },
            "description": "This is Mistral AI's closed-source, flagship model. It's powered by a closed-source prototype and excels at reasoning, code, JSON, chat, and more. Read the launch announcement [here](https://mistral.ai/news/mistral-large/).\n\nIt is fluent in English, French, Spanish, German, and Italian, with high grammatical accuracy, and its 32K tokens context window allows precise information recall from large documents.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32000,
            "per_request_limits": null
        }
    },
    {
        "id": "perplexity/llama-3-sonar-small-32k-chat",
        "data": {
            "id": "perplexity/llama-3-sonar-small-32k-chat",
            "name": "Perplexity: Llama3 Sonar 8B",
            "pricing": {
                "image": "0",
                "prompt": "0.0000002",
                "request": "0",
                "completion": "0.0000002"
            },
            "description": "Llama3 Sonar is Perplexity's latest model family. It surpasses their earlier Sonar models in cost-efficiency, speed, and performance.\n\nThis is a normal offline LLM, but the [online version](/models/perplexity/llama-3-sonar-small-32k-online) of this model has Internet access.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "perplexity/llama-3-sonar-small-32k-online",
        "data": {
            "id": "perplexity/llama-3-sonar-small-32k-online",
            "name": "Perplexity: Llama3 Sonar 8B Online",
            "pricing": {
                "image": "0",
                "prompt": "0.0000002",
                "request": "0.005",
                "completion": "0.0000002"
            },
            "description": "Llama3 Sonar is Perplexity's latest model family. It surpasses their earlier Sonar models in cost-efficiency, speed, and performance.\n\nThis is the online version of the [offline chat model](/models/perplexity/llama-3-sonar-small-32k-chat). It is focused on delivering helpful, up-to-date, and factual responses. #online",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 28000,
            "per_request_limits": null
        }
    },
    {
        "id": "perplexity/llama-3-sonar-large-32k-chat",
        "data": {
            "id": "perplexity/llama-3-sonar-large-32k-chat",
            "name": "Perplexity: Llama3 Sonar 70B",
            "pricing": {
                "image": "0",
                "prompt": "0.000001",
                "request": "0",
                "completion": "0.000001"
            },
            "description": "Llama3 Sonar is Perplexity's latest model family. It surpasses their earlier Sonar models in cost-efficiency, speed, and performance.\n\nThis is a normal offline LLM, but the [online version](/models/perplexity/llama-3-sonar-large-32k-online) of this model has Internet access.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-3.5-sonnet",
        "data": {
            "id": "anthropic/claude-3.5-sonnet",
            "name": "Anthropic: Claude 3.5 Sonnet",
            "pricing": {
                "image": "0.0048",
                "prompt": "0.000003",
                "request": "0",
                "completion": "0.000015"
            },
            "description": "Claude 3.5 Sonnet delivers better-than-Opus capabilities, faster-than-Sonnet speeds, at the same Sonnet prices. Sonnet is particularly good at:\n\n- Coding: Autonomously writes, edits, and runs code with reasoning and troubleshooting\n- Data science: Augments human data science expertise; navigates unstructured data while using multiple tools for insights\n- Visual processing: excelling at interpreting charts, graphs, and images, accurately transcribing text to derive insights beyond just the text alone\n- Agentic tasks: exceptional tool use, making it great at agentic tasks (i.e. complex, multi-step problem solving tasks that require engaging with other systems)\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-2",
        "data": {
            "id": "anthropic/claude-2",
            "name": "Anthropic: Claude v2",
            "pricing": {
                "image": "0",
                "prompt": "0.000008",
                "request": "0",
                "completion": "0.000024"
            },
            "description": "Claude 2 delivers advancements in key capabilities for enterprises—including an industry-leading 200K token context window, significant reductions in rates of model hallucination, system prompts and a new beta feature: tool use.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-2.0",
        "data": {
            "id": "anthropic/claude-2.0",
            "name": "Anthropic: Claude v2.0",
            "pricing": {
                "image": "0",
                "prompt": "0.000008",
                "request": "0",
                "completion": "0.000024"
            },
            "description": "Anthropic's flagship model. Superior performance on tasks that require complex reasoning. Supports hundreds of pages of text.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 100000,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-2.1",
        "data": {
            "id": "anthropic/claude-2.1",
            "name": "Anthropic: Claude v2.1",
            "pricing": {
                "image": "0",
                "prompt": "0.000008",
                "request": "0",
                "completion": "0.000024"
            },
            "description": "Claude 2 delivers advancements in key capabilities for enterprises—including an industry-leading 200K token context window, significant reductions in rates of model hallucination, system prompts and a new beta feature: tool use.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-instant-1",
        "data": {
            "id": "anthropic/claude-instant-1",
            "name": "Anthropic: Claude Instant v1",
            "pricing": {
                "image": "0",
                "prompt": "0.0000008",
                "request": "0",
                "completion": "0.0000024"
            },
            "description": "Anthropic's model for low-latency, high throughput text generation. Supports hundreds of pages of text.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 100000,
            "per_request_limits": null
        }
    },
    {
        "id": "cohere/command",
        "data": {
            "id": "cohere/command",
            "name": "Cohere: Command",
            "pricing": {
                "image": "0",
                "prompt": "0.000001",
                "request": "0",
                "completion": "0.000002"
            },
            "description": "Command is an instruction-following conversational model that performs language tasks with high quality, more reliably and with a longer context than our base generative models.\n\nUse of this model is subject to Cohere's [Acceptable Use Policy](https://docs.cohere.com/docs/c4ai-acceptable-use-policy).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Cohere",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4000
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-3-opus",
        "data": {
            "id": "anthropic/claude-3-opus",
            "name": "Anthropic: Claude 3 Opus",
            "pricing": {
                "image": "0.024",
                "prompt": "0.000015",
                "request": "0",
                "completion": "0.000075"
            },
            "description": "Claude 3 Opus is Anthropic's most powerful model for highly complex tasks. It boasts top-level performance, intelligence, fluency, and understanding.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-family)\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-3-sonnet",
        "data": {
            "id": "anthropic/claude-3-sonnet",
            "name": "Anthropic: Claude 3 Sonnet",
            "pricing": {
                "image": "0.0048",
                "prompt": "0.000003",
                "request": "0",
                "completion": "0.000015"
            },
            "description": "Claude 3 Sonnet is an ideal balance of intelligence and speed for enterprise workloads. Maximum utility at a lower price, dependable, balanced for scaled deployments.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-family)\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-3-haiku",
        "data": {
            "id": "anthropic/claude-3-haiku",
            "name": "Anthropic: Claude 3 Haiku",
            "pricing": {
                "image": "0.0004",
                "prompt": "0.00000025",
                "request": "0",
                "completion": "0.00000125"
            },
            "description": "Claude 3 Haiku is Anthropic's fastest and most compact model for\nnear-instant responsiveness. Quick and accurate targeted performance.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-haiku)\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-instant-1.0",
        "data": {
            "id": "anthropic/claude-instant-1.0",
            "name": "Anthropic: Claude Instant v1.0",
            "pricing": {
                "image": "0",
                "prompt": "0.0000008",
                "request": "0",
                "completion": "0.0000024"
            },
            "description": "Anthropic's model for low-latency, high throughput text generation. Supports hundreds of pages of text.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Claude",
                "instruct_type": "claude"
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 100000,
            "per_request_limits": null
        }
    },
    {
        "id": "ai21/jamba-instruct",
        "data": {
            "id": "ai21/jamba-instruct",
            "name": "AI21: Jamba Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.0000005",
                "request": "0",
                "completion": "0.0000007"
            },
            "description": "The Jamba-Instruct model, introduced by AI21 Labs, is an instruction-tuned variant of their hybrid SSM-Transformer Jamba model, specifically optimized for enterprise applications.\n\n- 256K Context Window: It can process extensive information, equivalent to a 400-page novel, which is beneficial for tasks involving large documents such as financial reports or legal documents\n- Safety and Accuracy: Jamba-Instruct is designed with enhanced safety features to ensure secure deployment in enterprise environments, reducing the risk and cost of implementation\n\nRead their [announcement](https://www.ai21.com/blog/announcing-jamba) to learn more.\n\nJamba has a knowledge cutoff of February 2024.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Other",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 256000,
            "per_request_limits": null
        }
    },
    {
        "id": "huggingfaceh4/zephyr-orpo-141b-a35b",
        "data": {
            "id": "huggingfaceh4/zephyr-orpo-141b-a35b",
            "name": "Zephyr 141B-A35B",
            "pricing": {
                "image": "-1",
                "prompt": "-1",
                "request": "-1",
                "completion": "-1"
            },
            "description": "Zephyr 141B-A35B is A Mixture of Experts (MoE) model with 141B total parameters and 35B active parameters. Fine-tuned on a mix of publicly available, synthetic datasets.\n\nIt is an instruct finetune of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b).\n\n#moe",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "zephyr"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 65536,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-1",
        "data": {
            "id": "anthropic/claude-1",
            "name": "Anthropic: Claude v1",
            "pricing": {
                "image": "0",
                "prompt": "0.000008",
                "request": "0",
                "completion": "0.000024"
            },
            "description": "Anthropic's model for low-latency, high throughput text generation. Supports hundreds of pages of text.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Claude",
                "instruct_type": "claude"
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 100000,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-1.2",
        "data": {
            "id": "anthropic/claude-1.2",
            "name": "Anthropic: Claude v1.2",
            "pricing": {
                "image": "0",
                "prompt": "0.000008",
                "request": "0",
                "completion": "0.000024"
            },
            "description": "Anthropic's model for low-latency, high throughput text generation. Supports hundreds of pages of text.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Claude",
                "instruct_type": "claude"
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 100000,
            "per_request_limits": null
        }
    },
    {
        "id": "meta-llama/llama-3-8b-instruct",
        "data": {
            "id": "meta-llama/llama-3-8b-instruct",
            "name": "Meta: Llama 3 8B Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.000000065",
                "request": "0",
                "completion": "0.000000065"
            },
            "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 8B instruct-tuned version was optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": "llama3"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 8192,
            "per_request_limits": null
        }
    },
    {
        "id": "qwen/qwen-110b-chat",
        "data": {
            "id": "qwen/qwen-110b-chat",
            "name": "Qwen 1.5 110B Chat",
            "pricing": {
                "image": "0",
                "prompt": "0.00000162",
                "request": "0",
                "completion": "0.00000162"
            },
            "description": "Qwen1.5 110B is the beta version of Qwen2, a transformer-based decoder-only language model pretrained on a large amount of data. In comparison with the previous released Qwen, the improvements include:\n\n- Significant performance improvement in human preference for chat models\n- Multilingual support of both base and chat models\n- Stable support of 32K context length for models of all sizes\n\nFor more details, see this [blog post](https://qwenlm.github.io/blog/qwen1.5/) and [GitHub repo](https://github.com/QwenLM/Qwen1.5).\n\nUsage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Qwen",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-instant-1.1",
        "data": {
            "id": "anthropic/claude-instant-1.1",
            "name": "Anthropic: Claude Instant v1.1",
            "pricing": {
                "image": "0",
                "prompt": "0.0000008",
                "request": "0",
                "completion": "0.0000024"
            },
            "description": "Anthropic's model for low-latency, high throughput text generation. Supports hundreds of pages of text.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Claude",
                "instruct_type": "claude"
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 2048
            },
            "context_length": 100000,
            "per_request_limits": null
        }
    },
    {
        "id": "huggingfaceh4/zephyr-7b-beta",
        "data": {
            "id": "huggingfaceh4/zephyr-7b-beta",
            "name": "Hugging Face: Zephyr 7B",
            "pricing": {
                "image": "-1",
                "prompt": "-1",
                "request": "-1",
                "completion": "-1"
            },
            "description": "Zephyr is a series of language models that are trained to act as helpful assistants. Zephyr-7B-β is the second model in the series, and is a fine-tuned version of [mistralai/Mistral-7B-v0.1](/models/mistralai/mistral-7b-instruct-v0.1) that was trained on a mix of publicly available, synthetic datasets using Direct Preference Optimization (DPO).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "zephyr"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "microsoft/wizardlm-2-7b",
        "data": {
            "id": "microsoft/wizardlm-2-7b",
            "name": "WizardLM-2 7B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000007",
                "request": "0",
                "completion": "0.00000007"
            },
            "description": "WizardLM-2 7B is the smaller variant of Microsoft AI's latest Wizard model. It is the fastest and achieves comparable performance with existing 10x larger opensource leading models\n\nIt is a finetune of [Mistral 7B Instruct](/models/mistralai/mistral-7b-instruct), using the same technique as [WizardLM-2 8x22B](/models/microsoft/wizardlm-2-8x22b).\n\nTo read more about the model release, [click here](https://wizardlm.github.io/WizardLM2/).\n\n#moe",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "vicuna"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32000,
            "per_request_limits": null
        }
    },
    {
        "id": "microsoft/phi-3-medium-128k-instruct",
        "data": {
            "id": "microsoft/phi-3-medium-128k-instruct",
            "name": "Phi-3 Medium 128K Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.000001",
                "request": "0",
                "completion": "0.000001"
            },
            "description": "Phi-3 128K Medium is a powerful 14-billion parameter model designed for advanced language understanding, reasoning, and instruction following. Optimized through supervised fine-tuning and preference adjustments, it excels in tasks involving common sense, mathematics, logical reasoning, and code processing.\n\nAt time of release, Phi-3 Medium demonstrated state-of-the-art performance among lightweight models. In the MMLU-Pro eval, the model even comes close to a Llama3 70B level of performance.\n\nFor 4k context length, try [Phi-3 Medium 4K](/models/microsoft/phi-3-medium-4k-instruct).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Other",
                "instruct_type": "phi3"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 128000,
            "per_request_limits": null
        }
    },
    {
        "id": "openrouter/auto",
        "data": {
            "id": "openrouter/auto",
            "name": "Auto (best for prompt)",
            "pricing": {
                "image": "-1",
                "prompt": "-1",
                "request": "-1",
                "completion": "-1"
            },
            "description": "Depending on their size, subject, and complexity, your prompts will be sent to [Mistral Large](/models/mistralai/mistral-large), [Claude 3.5 Sonnet (self-moderated)](/models/anthropic/claude-3.5-sonnet:beta) or [GPT-4o](/models/openai/gpt-4o).  To see which model was used, visit [Activity](/activity).\n\nA major redesign of this router is coming soon. Stay tuned on [Discord](https://discord.gg/fVyRaUDgxW) for updates.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Router",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "microsoft/wizardlm-2-8x22b",
        "data": {
            "id": "microsoft/wizardlm-2-8x22b",
            "name": "WizardLM-2 8x22B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000065",
                "request": "0",
                "completion": "0.00000065"
            },
            "description": "WizardLM-2 8x22B is Microsoft AI's most advanced Wizard model. It demonstrates highly competitive performance compared to leading proprietary models, and it consistently outperforms all existing state-of-the-art opensource models.\n\nIt is an instruct finetune of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b).\n\nTo read more about the model release, [click here](https://wizardlm.github.io/WizardLM2/).\n\n#moe",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "vicuna"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 65536,
            "per_request_limits": null
        }
    },
    {
        "id": "austism/chronos-hermes-13b",
        "data": {
            "id": "austism/chronos-hermes-13b",
            "name": "Chronos Hermes 13B v2",
            "pricing": {
                "image": "0",
                "prompt": "0.00000013",
                "request": "0",
                "completion": "0.00000013"
            },
            "description": "A 75/25 merge of [Chronos 13b v2](https://huggingface.co/elinas/chronos-13b-v2) and [Nous Hermes Llama2 13b](/models/nousresearch/nous-hermes-llama2-13b). This offers the imaginative writing style of Chronos while retaining coherency. Outputs are long and use exceptional prose. #merge",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "alpaca"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "rwkv/rwkv-5-world-3b",
        "data": {
            "id": "rwkv/rwkv-5-world-3b",
            "name": "RWKV v5 World 3B",
            "pricing": {
                "image": "0",
                "prompt": "0",
                "request": "0",
                "completion": "0"
            },
            "description": "[RWKV](https://wiki.rwkv.com) is an RNN (recurrent neural network) with transformer-level performance. It aims to combine the best of RNNs and transformers - great performance, fast inference, low VRAM, fast training, \"infinite\" context length, and free sentence embedding.\n\nRWKV-5 is trained on 100+ world languages (70% English, 15% multilang, 15% code).\n\nRWKV 3B models are provided for free, by Recursal.AI, for the beta period. More details [here](https://substack.recursal.ai/p/public-rwkv-3b-model-via-openrouter).\n\n#rnn",
            "architecture": {
                "modality": "text",
                "tokenizer": "RWKV",
                "instruct_type": "rwkv"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 10000,
            "per_request_limits": null
        }
    },
    {
        "id": "recursal/eagle-7b",
        "data": {
            "id": "recursal/eagle-7b",
            "name": "RWKV v5: Eagle 7B",
            "pricing": {
                "image": "0",
                "prompt": "0",
                "request": "0",
                "completion": "0"
            },
            "description": "Eagle 7B is trained on 1.1 Trillion Tokens across 100+ world languages (70% English, 15% multilang, 15% code).\n\n- Built on the [RWKV-v5](/models?q=rwkv) architecture (a linear transformer with 10-100x+ lower inference cost)\n- Ranks as the world's greenest 7B model (per token)\n- Outperforms all 7B class models in multi-lingual benchmarks\n- Approaches Falcon (1.5T), LLaMA2 (2T), Mistral (>2T?) level of performance in English evals\n- Trade blows with MPT-7B (1T) in English evals\n- All while being an [\"Attention-Free Transformer\"](https://www.isattentionallyouneed.com/)\n\nEagle 7B models are provided for free, by [Recursal.AI](https://recursal.ai), for the beta period till end of March 2024\n\nFind out more [here](https://blog.rwkv.com/p/eagle-7b-soaring-past-transformers)\n\n[rnn](/models?q=rwkv)",
            "architecture": {
                "modality": "text",
                "tokenizer": "RWKV",
                "instruct_type": "rwkv"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 10000,
            "per_request_limits": null
        }
    },
    {
        "id": "jebcarter/psyfighter-13b",
        "data": {
            "id": "jebcarter/psyfighter-13b",
            "name": "Psyfighter 13B",
            "pricing": {
                "image": "-1",
                "prompt": "-1",
                "request": "-1",
                "completion": "-1"
            },
            "description": "A merge model based on [Llama-2-13B](/models/meta-llama/llama-2-13b-chat) and made possible thanks to the compute provided by the KoboldAI community. It's a merge between:\n\n- [KoboldAI/LLaMA2-13B-Tiefighter](https://huggingface.co/KoboldAI/LLaMA2-13B-Tiefighter)\n- [chaoyi-wu/MedLLaMA_13B](https://huggingface.co/chaoyi-wu/MedLLaMA_13B)\n- [Doctor-Shotgun/llama-2-13b-chat-limarp-v2-merged](https://huggingface.co/Doctor-Shotgun/llama-2-13b-chat-limarp-v2-merged).\n\n#merge",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "alpaca"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "liuhaotian/llava-yi-34b",
        "data": {
            "id": "liuhaotian/llava-yi-34b",
            "name": "LLaVA v1.6 34B",
            "pricing": {
                "image": "0.0005184",
                "prompt": "0.0000009",
                "request": "0",
                "completion": "0.0000009"
            },
            "description": "LLaVA Yi 34B is an open-source model trained by fine-tuning LLM on multimodal instruction-following data. It is an auto-regressive language model, based on the transformer architecture. Base LLM: [NousResearch/Nous-Hermes-2-Yi-34B](/models/nousresearch/nous-hermes-yi-34b)\n\nIt was trained in December 2023.",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Yi",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "mistralai/mixtral-8x7b",
        "data": {
            "id": "mistralai/mixtral-8x7b",
            "name": "Mixtral 8x7B (base)",
            "pricing": {
                "image": "0",
                "prompt": "0.0000005",
                "request": "0",
                "completion": "0.0000005"
            },
            "description": "A pretrained generative Sparse Mixture of Experts, by Mistral AI. Incorporates 8 experts (feed-forward networks) for a total of 47B parameters. Base model (not fine-tuned for instructions) - see [Mixtral 8x7B Instruct](/models/mistralai/mixtral-8x7b-instruct) for an instruct-tuned model.\n\n#moe",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "none"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "mistralai/mixtral-8x7b-instruct",
        "data": {
            "id": "mistralai/mixtral-8x7b-instruct",
            "name": "Mixtral 8x7B Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.00000024",
                "request": "0",
                "completion": "0.00000024"
            },
            "description": "A pretrained generative Sparse Mixture of Experts, by Mistral AI, for chat and instruction use. Incorporates 8 experts (feed-forward networks) for a total of 47 billion parameters.\n\nInstruct model fine-tuned by Mistral. #moe",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "mistral"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "nousresearch/nous-hermes-llama2-13b",
        "data": {
            "id": "nousresearch/nous-hermes-llama2-13b",
            "name": "Nous: Hermes 13B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000018",
                "request": "0",
                "completion": "0.00000018"
            },
            "description": "A state-of-the-art language model fine-tuned on over 300k instructions by Nous Research, with Teknium and Emozilla leading the fine tuning process.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "alpaca"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "lynn/soliloquy-l3",
        "data": {
            "id": "lynn/soliloquy-l3",
            "name": "Lynn: Llama 3 Soliloquy 8B v2",
            "pricing": {
                "image": "0",
                "prompt": "0.00000005",
                "request": "0",
                "completion": "0.00000005"
            },
            "description": "Soliloquy-L3 v2 is a fast, highly capable roleplaying model designed for immersive, dynamic experiences. Trained on over 250 million tokens of roleplaying data, Soliloquy-L3 has a vast knowledge base, rich literary expression, and support for up to 24k context length. It outperforms existing ~13B models, delivering enhanced roleplaying capabilities.\n\nUsage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": "llama3"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 24576,
            "per_request_limits": null
        }
    },
    {
        "id": "google/gemma-7b-it",
        "data": {
            "id": "google/gemma-7b-it",
            "name": "Google: Gemma 7B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000007",
                "request": "0",
                "completion": "0.00000007"
            },
            "description": "Gemma by Google is an advanced, open-source language model family, leveraging the latest in decoder-only, text-to-text technology. It offers English language capabilities across text generation tasks like question answering, summarization, and reasoning. The Gemma 7B variant is comparable in performance to leading open source models.\n\nUsage of Gemma is subject to Google's [Gemma Terms of Use](https://ai.google.dev/gemma/terms).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Gemini",
                "instruct_type": "gemma"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 8192,
            "per_request_limits": null
        }
    },
    {
        "id": "fireworks/firellava-13b",
        "data": {
            "id": "fireworks/firellava-13b",
            "name": "FireLLaVA 13B",
            "pricing": {
                "image": "0.0001152",
                "prompt": "0.0000002",
                "request": "0",
                "completion": "0.0000002"
            },
            "description": "A blazing fast vision-language model, FireLLaVA quickly understands both text and images. It achieves impressive chat skills in tests, and was designed to mimic multimodal GPT-4.\n\nThe first commercially permissive open source LLaVA model, trained entirely on open source LLM generated instruction following data.",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Llama2",
                "instruct_type": "vicuna"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "koboldai/psyfighter-13b-2",
        "data": {
            "id": "koboldai/psyfighter-13b-2",
            "name": "Psyfighter v2 13B",
            "pricing": {
                "image": "0",
                "prompt": "0.000001",
                "request": "0",
                "completion": "0.000001"
            },
            "description": "The v2 of [Psyfighter](/models/jebcarter/psyfighter-13b) - a merged model created by the KoboldAI community members Jeb Carter and TwistedShadows, made possible thanks to the KoboldAI merge request service.\n\nThe intent was to add medical data to supplement the model's fictional ability with more details on anatomy and mental states. This model should not be used for medical advice or therapy because of its high likelihood of pulling in fictional data.\n\nIt's a merge between:\n\n- [KoboldAI/LLaMA2-13B-Tiefighter](https://huggingface.co/KoboldAI/LLaMA2-13B-Tiefighter)\n- [Doctor-Shotgun/cat-v1.0-13b](https://huggingface.co/Doctor-Shotgun/cat-v1.0-13b)\n- [Doctor-Shotgun/llama-2-13b-chat-limarp-v2-merged](https://huggingface.co/Doctor-Shotgun/llama-2-13b-chat-limarp-v2-merged).\n\n#merge",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "alpaca"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "qwen/qwen-2-72b-instruct",
        "data": {
            "id": "qwen/qwen-2-72b-instruct",
            "name": "Qwen 2 72B Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.00000059",
                "request": "0",
                "completion": "0.00000079"
            },
            "description": "Qwen2 72B is a transformer-based model that excels in language understanding, multilingual capabilities, coding, mathematics, and reasoning.\n\nIt features SwiGLU activation, attention QKV bias, and group query attention. It is pretrained on extensive data with supervised finetuning and direct preference optimization.\n\nFor more details, see this [blog post](https://qwenlm.github.io/blog/qwen2/) and [GitHub repo](https://github.com/QwenLM/Qwen2).\n\nUsage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Qwen",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "deepseek/deepseek-chat",
        "data": {
            "id": "deepseek/deepseek-chat",
            "name": "DeepSeek-V2 Chat",
            "pricing": {
                "image": "0",
                "prompt": "0.00000014",
                "request": "0",
                "completion": "0.00000028"
            },
            "description": "DeepSeek-V2 Chat is a conversational finetune of DeepSeek-V2, a Mixture-of-Experts (MoE) language model. It comprises 236B total parameters, of which 21B are activated for each token.\n\nCompared with DeepSeek 67B, DeepSeek-V2 achieves stronger performance, and meanwhile saves 42.5% of training costs, reduces the KV cache by 93.3%, and boosts the maximum generation throughput to 5.76 times.\n\nDeepSeek-V2 achieves remarkable performance on both standard benchmarks and open-ended generation evaluations.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Other",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 128000,
            "per_request_limits": null
        }
    },
    {
        "id": "deepseek/deepseek-coder",
        "data": {
            "id": "deepseek/deepseek-coder",
            "name": "DeepSeek-Coder-V2",
            "pricing": {
                "image": "0",
                "prompt": "0.00000014",
                "request": "0",
                "completion": "0.00000028"
            },
            "description": "DeepSeek-Coder-V2, an open-source Mixture-of-Experts (MoE) code language model. It is further pre-trained from an intermediate checkpoint of DeepSeek-V2 with additional 6 trillion tokens.\n\nThe original V1 model was trained from scratch on 2T tokens, with a composition of 87% code and 13% natural language in both English and Chinese. It was pre-trained on project-level code corpus by employing a extra fill-in-the-blank task.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Other",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 128000,
            "per_request_limits": null
        }
    },
    {
        "id": "openai/gpt-4o",
        "data": {
            "id": "openai/gpt-4o",
            "name": "OpenAI: GPT-4o",
            "pricing": {
                "image": "0.002312",
                "prompt": "0.000005",
                "request": "0",
                "completion": "0.000015"
            },
            "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.\n\nFor benchmarking against other models, it was briefly called [\"im-also-a-good-gpt2-chatbot\"](https://twitter.com/LiamFedus/status/1790064963966370209)\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "GPT",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 128000,
            "per_request_limits": null
        }
    },
    {
        "id": "mistralai/mistral-7b-instruct",
        "data": {
            "id": "mistralai/mistral-7b-instruct",
            "name": "Mistral: Mistral 7B Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.00000007",
                "request": "0",
                "completion": "0.00000007"
            },
            "description": "A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "mistral"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "gryphe/mythomax-l2-13b",
        "data": {
            "id": "gryphe/mythomax-l2-13b",
            "name": "MythoMax 13B",
            "pricing": {
                "image": "0",
                "prompt": "0.000000125",
                "request": "0",
                "completion": "0.000000125"
            },
            "description": "One of the highest performing and most popular fine-tunes of Llama 2 13B, with rich descriptions and roleplay. #merge",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "alpaca"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "lizpreciatior/lzlv-70b-fp16-hf",
        "data": {
            "id": "lizpreciatior/lzlv-70b-fp16-hf",
            "name": "lzlv 70B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000059",
                "request": "0",
                "completion": "0.00000079"
            },
            "description": "A Mythomax/MLewd_13B-style merge of selected 70B models.\nA multi-model merge of several LLaMA2 70B finetunes for roleplaying and creative work. The goal was to create a model that combines creativity with intelligence for an enhanced experience.\n\n#merge #uncensored",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "airoboros"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "mistralai/mistral-7b-instruct-v0.1",
        "data": {
            "id": "mistralai/mistral-7b-instruct-v0.1",
            "name": "Mistral: Mistral 7B Instruct v0.1",
            "pricing": {
                "image": "0",
                "prompt": "0.00000007",
                "request": "0",
                "completion": "0.00000007"
            },
            "description": "A 7.3B parameter model that outperforms Llama 2 13B on all benchmarks, with optimizations for speed and context length.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "mistral"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "snowflake/snowflake-arctic-instruct",
        "data": {
            "id": "snowflake/snowflake-arctic-instruct",
            "name": "Snowflake: Arctic Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.00000216",
                "request": "0",
                "completion": "0.00000216"
            },
            "description": "Arctic is a dense-MoE Hybrid transformer architecture pre-trained from scratch by the Snowflake AI Research Team. Arctic combines a 10B dense transformer model with a residual 128x3.66B MoE MLP resulting in 480B total and 17B active parameters chosen using a top-2 gating.\n\nTo read more about this model's release, [click here](https://www.snowflake.com/blog/arctic-open-efficient-foundation-language-models-snowflake/).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "mistralai/mistral-7b-instruct-v0.2",
        "data": {
            "id": "mistralai/mistral-7b-instruct-v0.2",
            "name": "Mistral: Mistral 7B Instruct v0.2",
            "pricing": {
                "image": "0",
                "prompt": "0.00000007",
                "request": "0",
                "completion": "0.00000007"
            },
            "description": "A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.\n\nAn improved version of [Mistral 7B Instruct](/modelsmistralai/mistral-7b-instruct-v0.1), with the following changes:\n\n- 32k context window (vs 8k context in v0.1)\n- Rope-theta = 1e6\n- No Sliding-Window Attention",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "mistral"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "mistralai/mistral-7b-instruct-v0.3",
        "data": {
            "id": "mistralai/mistral-7b-instruct-v0.3",
            "name": "Mistral: Mistral 7B Instruct v0.3",
            "pricing": {
                "image": "0",
                "prompt": "0.00000007",
                "request": "0",
                "completion": "0.00000007"
            },
            "description": "A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.\n\nAn improved version of [Mistral 7B Instruct v0.2](/models/mistralai/mistral-7b-instruct-v0.2), with the following changes:\n\n- Extended vocabulary to 32768\n- Supports v3 Tokenizer\n- Supports function calling\n\nNOTE: Support for function calling depends on the provider.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "mistral"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "neversleep/noromaid-mixtral-8x7b-instruct",
        "data": {
            "id": "neversleep/noromaid-mixtral-8x7b-instruct",
            "name": "Noromaid Mixtral 8x7B Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.000008",
                "request": "0",
                "completion": "0.000008"
            },
            "description": "This model was trained for 8h(v1) + 8h(v2) + 12h(v3) on customized modified datasets, focusing on RP, uncensoring, and a modified version of the Alpaca prompting (that was already used in LimaRP), which should be at the same conversational level as ChatLM or Llama2-Chat without adding any additional special tokens.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "alpaca-modif"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 8000,
            "per_request_limits": null
        }
    },
    {
        "id": "nousresearch/nous-capybara-34b",
        "data": {
            "id": "nousresearch/nous-capybara-34b",
            "name": "Nous: Capybara 34B",
            "pricing": {
                "image": "0",
                "prompt": "0.0000009",
                "request": "0",
                "completion": "0.0000009"
            },
            "description": "This model is trained on the Yi-34B model for 3 epochs on the Capybara dataset. It's the first 34B Nous model and first 200K context length Nous model.\n\n**Note:** This endpoint currently supports 32k context.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "airoboros"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "nousresearch/nous-hermes-llama2-70b",
        "data": {
            "id": "nousresearch/nous-hermes-llama2-70b",
            "name": "Nous: Hermes 70B",
            "pricing": {
                "image": "-1",
                "prompt": "-1",
                "request": "-1",
                "completion": "-1"
            },
            "description": "A state-of-the-art language model fine-tuned on over 300k instructions by Nous Research, with Teknium and Emozilla leading the fine tuning process.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "alpaca"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "undi95/toppy-m-7b",
        "data": {
            "id": "undi95/toppy-m-7b",
            "name": "Toppy M 7B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000007",
                "request": "0",
                "completion": "0.00000007"
            },
            "description": "A wild 7B parameter model that merges several models using the new task_arithmetic merge method from mergekit.\nList of merged models:\n- NousResearch/Nous-Capybara-7B-V1.9\n- [HuggingFaceH4/zephyr-7b-beta](/models/huggingfaceh4/zephyr-7b-beta)\n- lemonilia/AshhLimaRP-Mistral-7B\n- Vulkane/120-Days-of-Sodom-LoRA-Mistral-7b\n- Undi95/Mistral-pippa-sharegpt-7b-qlora\n\n#merge #uncensored",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "alpaca"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "nousresearch/nous-hermes-2-mixtral-8x7b-dpo",
        "data": {
            "id": "nousresearch/nous-hermes-2-mixtral-8x7b-dpo",
            "name": "Nous: Hermes 2 Mixtral 8x7B DPO",
            "pricing": {
                "image": "0",
                "prompt": "0.00000027",
                "request": "0",
                "completion": "0.00000027"
            },
            "description": "Nous Hermes 2 Mixtral 8x7B DPO is the new flagship Nous Research model trained over the [Mixtral 8x7B MoE LLM](/models/mistralai/mixtral-8x7b).\n\nThe model was trained on over 1,000,000 entries of primarily [GPT-4](/models/openai/gpt-4) generated data, as well as other high quality data from open datasets across the AI landscape, achieving state of the art performance on a variety of tasks.\n\n#moe",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "recursal/rwkv-5-3b-ai-town",
        "data": {
            "id": "recursal/rwkv-5-3b-ai-town",
            "name": "RWKV v5 3B AI Town",
            "pricing": {
                "image": "0",
                "prompt": "0",
                "request": "0",
                "completion": "0"
            },
            "description": "This is an [RWKV 3B model](/models/rwkv/rwkv-5-world-3b) finetuned specifically for the [AI Town](https://github.com/a16z-infra/ai-town) project.\n\n[RWKV](https://wiki.rwkv.com) is an RNN (recurrent neural network) with transformer-level performance. It aims to combine the best of RNNs and transformers - great performance, fast inference, low VRAM, fast training, \"infinite\" context length, and free sentence embedding.\n\nRWKV 3B models are provided for free, by Recursal.AI, for the beta period. More details [here](https://substack.recursal.ai/p/public-rwkv-3b-model-via-openrouter).\n\n#rnn",
            "architecture": {
                "modality": "text",
                "tokenizer": "RWKV",
                "instruct_type": "rwkv"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 10000,
            "per_request_limits": null
        }
    },
    {
        "id": "jondurbin/bagel-34b",
        "data": {
            "id": "jondurbin/bagel-34b",
            "name": "Bagel 34B v0.2",
            "pricing": {
                "image": "-1",
                "prompt": "-1",
                "request": "-1",
                "completion": "-1"
            },
            "description": "An experimental fine-tune of [Yi 34b 200k](/models/01-ai/yi-34b-200k) using [bagel](https://github.com/jondurbin/bagel). This is the version of the fine-tune before direct preference optimization (DPO) has been applied. DPO performs better on benchmarks, but this version is likely better for creative writing, roleplay, etc.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Yi",
                "instruct_type": "alpaca"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "jondurbin/airoboros-l2-70b",
        "data": {
            "id": "jondurbin/airoboros-l2-70b",
            "name": "Airoboros 70B",
            "pricing": {
                "image": "-1",
                "prompt": "-1",
                "request": "-1",
                "completion": "-1"
            },
            "description": "A Llama 2 70B fine-tune using synthetic data (the Airoboros dataset).\n\nCurrently based on [jondurbin/airoboros-l2-70b](https://huggingface.co/jondurbin/airoboros-l2-70b-2.2.1), but might get updated in the future.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "airoboros"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "google/gemini-flash-1.5",
        "data": {
            "id": "google/gemini-flash-1.5",
            "name": "Google: Gemini Flash 1.5",
            "pricing": {
                "image": "0.000265",
                "prompt": "0.00000025",
                "request": "0",
                "completion": "0.00000075"
            },
            "description": "Gemini 1.5 Flash is a foundation model that performs well at a variety of multimodal tasks such as visual understanding, classification, summarization, and creating content from image, audio and video. It's adept at processing visual and text inputs such as photographs, documents, infographics, and screenshots.\n\nGemini 1.5 Flash is designed for high-volume, high-frequency tasks where cost and latency matter. On most common tasks, Flash achieves comparable quality to other Gemini Pro models at a significantly reduced cost. Flash is well-suited for applications like chat assistants and on-demand content generation where speed and scale matter.\n\nUsage of Gemini is subject to Google's [Gemini Terms of Use](https://ai.google.dev/terms).\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Gemini",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 22937
            },
            "context_length": 2800000,
            "per_request_limits": null
        }
    },
    {
        "id": "nousresearch/nous-hermes-2-mixtral-8x7b-sft",
        "data": {
            "id": "nousresearch/nous-hermes-2-mixtral-8x7b-sft",
            "name": "Nous: Hermes 2 Mixtral 8x7B SFT",
            "pricing": {
                "image": "0",
                "prompt": "0.00000054",
                "request": "0",
                "completion": "0.00000054"
            },
            "description": "Nous Hermes 2 Mixtral 8x7B SFT is the supervised finetune only version of [the Nous Research model](/models/nousresearch/nous-hermes-2-mixtral-8x7b-dpo) trained over the [Mixtral 8x7B MoE LLM](/models/mistralai/mixtral-8x7b).\n\nThe model was trained on over 1,000,000 entries of primarily GPT-4 generated data, as well as other high quality data from open datasets across the AI landscape, achieving state of the art performance on a variety of tasks.\n\n#moe",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "openchat/openchat-8b",
        "data": {
            "id": "openchat/openchat-8b",
            "name": "OpenChat 3.6 8B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000008",
                "request": "0",
                "completion": "0.00000008"
            },
            "description": "OpenChat 8B is a library of open-source language models, fine-tuned with \"C-RLFT (Conditioned Reinforcement Learning Fine-Tuning)\" - a strategy inspired by offline reinforcement learning. It has been trained on mixed-quality data without preference labels.\n\nIt outperforms many similarly sized models including [Llama 3 8B Instruct](/models/meta-llama/llama-3-8b-instruct) and various fine-tuned models. It excels in general conversation, coding assistance, and mathematical reasoning.\n\n- For OpenChat fine-tuned on Mistral 7B, check out [OpenChat 7B](/models/openchat/openchat-7b).\n- For OpenChat fine-tuned on Llama 8B, check out [OpenChat 8B](/models/openchat/openchat-8b).\n\n#open-source",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": "openchat"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 8192,
            "per_request_limits": null
        }
    },
    {
        "id": "cognitivecomputations/dolphin-mixtral-8x7b",
        "data": {
            "id": "cognitivecomputations/dolphin-mixtral-8x7b",
            "name": "Dolphin 2.6 Mixtral 8x7B 🐬",
            "pricing": {
                "image": "0",
                "prompt": "0.00000024",
                "request": "0",
                "completion": "0.00000024"
            },
            "description": "This is a 16k context fine-tune of [Mixtral-8x7b](/models/mistralai/mixtral-8x7b). It excels in coding tasks due to extensive training with coding data and is known for its obedience, although it lacks DPO tuning.\n\nThe model is uncensored and is stripped of alignment and bias. It requires an external alignment layer for ethical use. Users are cautioned to use this highly compliant model responsibly, as detailed in a blog post about uncensored models at [erichartford.com/uncensored-models](https://erichartford.com/uncensored-models).\n\n#moe #uncensored",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-2.1:beta",
        "data": {
            "id": "anthropic/claude-2.1:beta",
            "name": "Anthropic: Claude v2.1 (self-moderated)",
            "pricing": {
                "image": "0",
                "prompt": "0.000008",
                "request": "0",
                "completion": "0.000024"
            },
            "description": "This is a lower-latency version of [Claude v2.1](/models/anthropic/claude-2.1), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nClaude 2 delivers advancements in key capabilities for enterprises—including an industry-leading 200K token context window, significant reductions in rates of model hallucination, system prompts and a new beta feature: tool use.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "bigcode/starcoder2-15b-instruct",
        "data": {
            "id": "bigcode/starcoder2-15b-instruct",
            "name": "StarCoder2 15B Instruct",
            "pricing": {
                "image": "-1",
                "prompt": "-1",
                "request": "-1",
                "completion": "-1"
            },
            "description": "StarCoder2 15B Instruct excels in coding-related tasks, primarily in Python. It is the first self-aligned open-source LLM developed by BigCode. This model was fine-tuned without any human annotations or distilled data from proprietary LLMs.\n\nThe base model uses [Grouped Query Attention](https://arxiv.org/abs/2305.13245) and was trained using the [Fill-in-the-Middle objective](https://arxiv.org/abs/2207.14255) objective on 4+ trillion tokens.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Other",
                "instruct_type": "alpaca"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 16384,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-2.0:beta",
        "data": {
            "id": "anthropic/claude-2.0:beta",
            "name": "Anthropic: Claude v2.0 (self-moderated)",
            "pricing": {
                "image": "0",
                "prompt": "0.000008",
                "request": "0",
                "completion": "0.000024"
            },
            "description": "This is a lower-latency version of [Claude v2.0](/models/anthropic/claude-2.0), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nAnthropic's flagship model. Superior performance on tasks that require complex reasoning. Supports hundreds of pages of text.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 100000,
            "per_request_limits": null
        }
    },
    {
        "id": "cohere/command-r",
        "data": {
            "id": "cohere/command-r",
            "name": "Cohere: Command R",
            "pricing": {
                "image": "0",
                "prompt": "0.0000005",
                "request": "0",
                "completion": "0.0000015"
            },
            "description": "Command-R is a 35B parameter model that performs conversational language tasks at a higher quality, more reliably, and with a longer context than previous models. It can be used for complex workflows like code generation, retrieval augmented generation (RAG), tool use, and agents.\n\nRead the launch post [here](https://txt.cohere.com/command-r/).\n\nUse of this model is subject to Cohere's [Acceptable Use Policy](https://docs.cohere.com/docs/c4ai-acceptable-use-policy).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Cohere",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4000
            },
            "context_length": 128000,
            "per_request_limits": null
        }
    },
    {
        "id": "nousresearch/hermes-2-pro-llama-3-8b",
        "data": {
            "id": "nousresearch/hermes-2-pro-llama-3-8b",
            "name": "NousResearch: Hermes 2 Pro - Llama-3 8B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000015",
                "request": "0",
                "completion": "0.00000015"
            },
            "description": "Hermes 2 Pro is an upgraded, retrained version of Nous Hermes 2, consisting of an updated and cleaned version of the OpenHermes 2.5 Dataset, as well as a newly introduced Function Calling and JSON Mode dataset developed in-house.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 8192,
            "per_request_limits": null
        }
    },
    {
        "id": "nousresearch/nous-hermes-yi-34b",
        "data": {
            "id": "nousresearch/nous-hermes-yi-34b",
            "name": "Nous: Hermes 2 Yi 34B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000072",
                "request": "0",
                "completion": "0.00000072"
            },
            "description": "Nous Hermes 2 Yi 34B was trained on 1,000,000 entries of primarily GPT-4 generated data, as well as other high quality data from open datasets across the AI landscape.\n\nNous-Hermes 2 on Yi 34B outperforms all Nous-Hermes & Open-Hermes models of the past, achieving new heights in all benchmarks for a Nous Research LLM as well as surpassing many popular finetunes.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Yi",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "meta-llama/llama-3-70b-instruct:nitro",
        "data": {
            "id": "meta-llama/llama-3-70b-instruct:nitro",
            "name": "Meta: Llama 3 70B Instruct (nitro)",
            "pricing": {
                "image": "0",
                "prompt": "0.0000009",
                "request": "0",
                "completion": "0.0000009"
            },
            "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 70B instruct-tuned version was optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).\n\nNote: this is a higher-throughput version of [Llama 3 70B Instruct](/models/meta-llama/llama-3-70b-instruct). It may have higher prices and slightly different outputs.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": "llama3"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 8192,
            "per_request_limits": null
        }
    },
    {
        "id": "liuhaotian/llava-13b",
        "data": {
            "id": "liuhaotian/llava-13b",
            "name": "LLaVA 13B",
            "pricing": {
                "image": "-1",
                "prompt": "-1",
                "request": "-1",
                "completion": "-1"
            },
            "description": "LLaVA is a large multimodal model that combines a vision encoder and Vicuna for general-purpose visual and language understanding, achieving impressive chat capabilities and setting a new state-of-the-art accuracy on Science QA.\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Llama2",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 2048,
            "per_request_limits": null
        }
    },
    {
        "id": "meta-llama/llama-2-70b-chat:nitro",
        "data": {
            "id": "meta-llama/llama-2-70b-chat:nitro",
            "name": "Meta: Llama v2 70B Chat (nitro)",
            "pricing": {
                "image": "0",
                "prompt": "0.0000009",
                "request": "0",
                "completion": "0.0000009"
            },
            "description": "The flagship, 70 billion parameter language model from Meta, fine tuned for chat completions. Llama 2 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align to human preferences for helpfulness and safety.\n\nNote: this is a higher-throughput version of [Llama v2 70B Chat](/models/meta-llama/llama-2-70b-chat). It may have higher prices and slightly different outputs.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "llama2"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "gryphe/mythomax-l2-13b:nitro",
        "data": {
            "id": "gryphe/mythomax-l2-13b:nitro",
            "name": "MythoMax 13B (nitro)",
            "pricing": {
                "image": "0",
                "prompt": "0.0000002",
                "request": "0",
                "completion": "0.0000002"
            },
            "description": "One of the highest performing and most popular fine-tunes of Llama 2 13B, with rich descriptions and roleplay. #merge\n\nNote: this is a higher-throughput version of [MythoMax 13B](/models/gryphe/mythomax-l2-13b). It may have higher prices and slightly different outputs.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama2",
                "instruct_type": "alpaca"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "mistralai/mistral-7b-instruct:nitro",
        "data": {
            "id": "mistralai/mistral-7b-instruct:nitro",
            "name": "Mistral: Mistral 7B Instruct (nitro)",
            "pricing": {
                "image": "0",
                "prompt": "0.00000007",
                "request": "0",
                "completion": "0.00000007"
            },
            "description": "A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.\n\nNote: this is a higher-throughput version of [Mistral 7B Instruct](/models/mistralai/mistral-7b-instruct). It may have higher prices and slightly different outputs.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "mistral"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "undi95/toppy-m-7b:nitro",
        "data": {
            "id": "undi95/toppy-m-7b:nitro",
            "name": "Toppy M 7B (nitro)",
            "pricing": {
                "image": "0",
                "prompt": "0.00000007",
                "request": "0",
                "completion": "0.00000007"
            },
            "description": "A wild 7B parameter model that merges several models using the new task_arithmetic merge method from mergekit.\nList of merged models:\n- NousResearch/Nous-Capybara-7B-V1.9\n- [HuggingFaceH4/zephyr-7b-beta](/models/huggingfaceh4/zephyr-7b-beta)\n- lemonilia/AshhLimaRP-Mistral-7B\n- Vulkane/120-Days-of-Sodom-LoRA-Mistral-7b\n- Undi95/Mistral-pippa-sharegpt-7b-qlora\n\n#merge #uncensored\n\nNote: this is a higher-throughput version of [Toppy M 7B](/models/undi95/toppy-m-7b). It may have higher prices and slightly different outputs.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "alpaca"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "sao10k/l3-euryale-70b",
        "data": {
            "id": "sao10k/l3-euryale-70b",
            "name": "Llama 3 Euryale 70B v2.1",
            "pricing": {
                "image": "0",
                "prompt": "0.00000148",
                "request": "0",
                "completion": "0.00000148"
            },
            "description": "Euryale 70B v2.1 is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k).\n\n- Better prompt adherence.\n- Better anatomy / spatial awareness.\n- Adapts much better to unique and custom formatting / reply formats.\n- Very creative, lots of unique swipes.\n- Is not restrictive during roleplays.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": "llama3"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 16000
            },
            "context_length": 8192,
            "per_request_limits": null
        }
    },
    {
        "id": "sao10k/l3-stheno-8b",
        "data": {
            "id": "sao10k/l3-stheno-8b",
            "name": "Llama 3 Stheno 8B v3.3 32K",
            "pricing": {
                "image": "0",
                "prompt": "0.00000025",
                "request": "0",
                "completion": "0.0000015"
            },
            "description": "Stheno 8B 32K is a creative writing/roleplay model from [Sao10k](https://ko-fi.com/sao10k). It was trained at 8K context, then expanded to 32K context.\n\nCompared to older Stheno version, this model is trained on:\n- 2x the amount of creative writing samples\n- Cleaned up roleplaying samples\n- Fewer low quality samples",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": "llama3"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32000,
            "per_request_limits": null
        }
    },
    {
        "id": "nousresearch/nous-hermes-2-vision-7b",
        "data": {
            "id": "nousresearch/nous-hermes-2-vision-7b",
            "name": "Nous: Hermes 2 Vision 7B (alpha)",
            "pricing": {
                "image": "-1",
                "prompt": "-1",
                "request": "-1",
                "completion": "-1"
            },
            "description": "This vision-language model builds on innovations from the popular [OpenHermes-2.5](/models/teknium/openhermes-2.5-mistral-7b) model, by Teknium. It adds vision support, and is trained on a custom dataset enriched with function calling\n\nThis project is led by [qnguyen3](https://twitter.com/stablequan) and [teknium](https://twitter.com/Teknium1).\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Mistral",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-3-haiku:beta",
        "data": {
            "id": "anthropic/claude-3-haiku:beta",
            "name": "Anthropic: Claude 3 Haiku (self-moderated)",
            "pricing": {
                "image": "0.0004",
                "prompt": "0.00000025",
                "request": "0",
                "completion": "0.00000125"
            },
            "description": "This is a lower-latency version of [Claude 3 Haiku](/models/anthropic/claude-3-haiku), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nClaude 3 Haiku is Anthropic's fastest and most compact model for\nnear-instant responsiveness. Quick and accurate targeted performance.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-haiku)\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "databricks/dbrx-instruct",
        "data": {
            "id": "databricks/dbrx-instruct",
            "name": "Databricks: DBRX 132B Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.00000108",
                "request": "0",
                "completion": "0.00000108"
            },
            "description": "DBRX is a new open source large language model developed by Databricks. At 132B, it outperforms existing open source LLMs like Llama 2 70B and [Mixtral-8x7b](/models/mistralai/mixtral-8x7b) on standard industry benchmarks for language understanding, programming, math, and logic.\n\nIt uses a fine-grained mixture-of-experts (MoE) architecture. 36B parameters are active on any input. It was pre-trained on 12T tokens of text and code data. Compared to other open MoE models like Mixtral-8x7B and Grok-1, DBRX is fine-grained, meaning it uses a larger number of smaller experts.\n\nSee the launch announcement and benchmark results [here](https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm).\n\n#moe",
            "architecture": {
                "modality": "text",
                "tokenizer": "Other",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 32768,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-2:beta",
        "data": {
            "id": "anthropic/claude-2:beta",
            "name": "Anthropic: Claude v2 (self-moderated)",
            "pricing": {
                "image": "0",
                "prompt": "0.000008",
                "request": "0",
                "completion": "0.000024"
            },
            "description": "This is a lower-latency version of [Claude v2](/models/anthropic/claude-2), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nClaude 2 delivers advancements in key capabilities for enterprises—including an industry-leading 200K token context window, significant reductions in rates of model hallucination, system prompts and a new beta feature: tool use.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-3-sonnet:beta",
        "data": {
            "id": "anthropic/claude-3-sonnet:beta",
            "name": "Anthropic: Claude 3 Sonnet (self-moderated)",
            "pricing": {
                "image": "0.0048",
                "prompt": "0.000003",
                "request": "0",
                "completion": "0.000015"
            },
            "description": "This is a lower-latency version of [Claude 3 Sonnet](/models/anthropic/claude-3-sonnet), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nClaude 3 Sonnet is an ideal balance of intelligence and speed for enterprise workloads. Maximum utility at a lower price, dependable, balanced for scaled deployments.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-family)\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "openai/gpt-3.5-turbo-0301",
        "data": {
            "id": "openai/gpt-3.5-turbo-0301",
            "name": "OpenAI: GPT-3.5 Turbo (older v0301)",
            "pricing": {
                "image": "0",
                "prompt": "0.000001",
                "request": "0",
                "completion": "0.000002"
            },
            "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.\n\nTraining data up to Sep 2021.",
            "architecture": {
                "modality": "text",
                "tokenizer": "GPT",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": true,
                "max_completion_tokens": 4096
            },
            "context_length": 4095,
            "per_request_limits": null
        }
    },
    {
        "id": "perplexity/llama-3-sonar-large-32k-online",
        "data": {
            "id": "perplexity/llama-3-sonar-large-32k-online",
            "name": "Perplexity: Llama3 Sonar 70B Online",
            "pricing": {
                "image": "0",
                "prompt": "0.000001",
                "request": "0.005",
                "completion": "0.000001"
            },
            "description": "Llama3 Sonar is Perplexity's latest model family. It surpasses their earlier Sonar models in cost-efficiency, speed, and performance.\n\nThis is the online version of the [offline chat model](/models/perplexity/llama-3-sonar-large-32k-chat). It is focused on delivering helpful, up-to-date, and factual responses. #online",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 28000,
            "per_request_limits": null
        }
    },
    {
        "id": "meta-llama/llama-guard-2-8b",
        "data": {
            "id": "meta-llama/llama-guard-2-8b",
            "name": "Meta: LlamaGuard 2 8B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000015",
                "request": "0",
                "completion": "0.00000015"
            },
            "description": "This safeguard model has 8B parameters and is based on the Llama 3 family. Just like is predecessor, [LlamaGuard 1](https://huggingface.co/meta-llama/LlamaGuard-7b), it can do both prompt and response classification.\n\nLlamaGuard 2 acts as a normal LLM would, generating text that indicates whether the given input/output is safe/unsafe. If deemed unsafe, it will also share the content categories violated.\n\nFor best results, please use raw prompt input or the `/completions` endpoint, instead of the chat API.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Llama3",
                "instruct_type": "none"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 8192,
            "per_request_limits": null
        }
    },
    {
        "id": "microsoft/phi-3-medium-4k-instruct",
        "data": {
            "id": "microsoft/phi-3-medium-4k-instruct",
            "name": "Phi-3 Medium 4K Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.00000014",
                "request": "0",
                "completion": "0.00000014"
            },
            "description": "Phi-3 4K Medium is a powerful 14-billion parameter model designed for advanced language understanding, reasoning, and instruction following. Optimized through supervised fine-tuning and preference adjustments, it excels in tasks involving common sense, mathematics, logical reasoning, and code processing.\n\nAt time of release, Phi-3 Medium demonstrated state-of-the-art performance among lightweight models. In the MMLU-Pro eval, the model even comes close to a Llama3 70B level of performance.\n\nFor 128k context length, try [Phi-3 Medium 128K](/models/microsoft/phi-3-medium-128k-instruct).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Other",
                "instruct_type": "phi3"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4000,
            "per_request_limits": null
        }
    },
    {
        "id": "nvidia/nemotron-4-340b-instruct",
        "data": {
            "id": "nvidia/nemotron-4-340b-instruct",
            "name": "NVIDIA Nemotron-4 340B Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.0000042",
                "request": "0",
                "completion": "0.0000042"
            },
            "description": "Nemotron-4-340B-Instruct is an English-language chat model optimized for synthetic data generation. This large language model (LLM) is a fine-tuned version of Nemotron-4-340B-Base, designed for single and multi-turn chat use-cases with a 4,096 token context length.\n\nThe base model was pre-trained on 9 trillion tokens from diverse English texts, 50+ natural languages, and 40+ coding languages. The instruct model underwent additional alignment steps:\n\n1. Supervised Fine-tuning (SFT)\n2. Direct Preference Optimization (DPO)\n3. Reward-aware Preference Optimization (RPO)\n\nThe alignment process used approximately 20K human-annotated samples, while 98% of the data for fine-tuning was synthetically generated. Detailed information about the synthetic data generation pipeline is available in the [technical report](https://arxiv.org/html/2406.11704v1).",
            "architecture": {
                "modality": "text",
                "tokenizer": "Other",
                "instruct_type": "nemotron"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "microsoft/phi-3-mini-128k-instruct",
        "data": {
            "id": "microsoft/phi-3-mini-128k-instruct",
            "name": "Phi-3 Mini 128K Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.0000001",
                "request": "0",
                "completion": "0.0000001"
            },
            "description": "Phi-3 Mini is a powerful 3.8B parameter model designed for advanced language understanding, reasoning, and instruction following. Optimized through supervised fine-tuning and preference adjustments, it excels in tasks involving common sense, mathematics, logical reasoning, and code processing.\n\nAt time of release, Phi-3 Medium demonstrated state-of-the-art performance among lightweight models. This model is static, trained on an offline dataset with an October 2023 cutoff date.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Other",
                "instruct_type": "phi3"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 128000,
            "per_request_limits": null
        }
    },
    {
        "id": "mistralai/mixtral-8x22b-instruct",
        "data": {
            "id": "mistralai/mixtral-8x22b-instruct",
            "name": "Mistral: Mixtral 8x22B Instruct",
            "pricing": {
                "image": "0",
                "prompt": "0.00000065",
                "request": "0",
                "completion": "0.00000065"
            },
            "description": "Mistral's official instruct fine-tuned version of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b). It uses 39B active parameters out of 141B, offering unparalleled cost efficiency for its size. Its strengths include:\n- strong math, coding, and reasoning\n- large context length (64k)\n- fluency in English, French, Italian, German, and Spanish\n\nSee benchmarks on the launch announcement [here](https://mistral.ai/news/mixtral-8x22b/).\n#moe",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "mistral"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 65536,
            "per_request_limits": null
        }
    },
    {
        "id": "teknium/openhermes-2.5-mistral-7b",
        "data": {
            "id": "teknium/openhermes-2.5-mistral-7b",
            "name": "OpenHermes 2.5 Mistral 7B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000017",
                "request": "0",
                "completion": "0.00000017"
            },
            "description": "A continuation of [OpenHermes 2 model](/models/teknium/openhermes-2-mistral-7b), trained on additional code datasets.\nPotentially the most interesting finding from training on a good ratio (est. of around 7-14% of the total dataset) of code instruction was that it has boosted several non-code benchmarks, including TruthfulQA, AGIEval, and GPT4All suite. It did however reduce BigBench benchmark score, but the net gain overall is significant.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "chatml"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 4096,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-3.5-sonnet:beta",
        "data": {
            "id": "anthropic/claude-3.5-sonnet:beta",
            "name": "Anthropic: Claude 3.5 Sonnet (self-moderated)",
            "pricing": {
                "image": "0.0048",
                "prompt": "0.000003",
                "request": "0",
                "completion": "0.000015"
            },
            "description": "This is a lower-latency version of [Claude 3.5 Sonnet](/models/anthropic/claude-3.5-sonnet), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nClaude 3.5 Sonnet delivers better-than-Opus capabilities, faster-than-Sonnet speeds, at the same Sonnet prices. Sonnet is particularly good at:\n\n- Coding: Autonomously writes, edits, and runs code with reasoning and troubleshooting\n- Data science: Augments human data science expertise; navigates unstructured data while using multiple tools for insights\n- Visual processing: excelling at interpreting charts, graphs, and images, accurately transcribing text to derive insights beyond just the text alone\n- Agentic tasks: exceptional tool use, making it great at agentic tasks (i.e. complex, multi-step problem solving tasks that require engaging with other systems)\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "openchat/openchat-7b",
        "data": {
            "id": "openchat/openchat-7b",
            "name": "OpenChat 3.5 7B",
            "pricing": {
                "image": "0",
                "prompt": "0.00000007",
                "request": "0",
                "completion": "0.00000007"
            },
            "description": "OpenChat 7B is a library of open-source language models, fine-tuned with \"C-RLFT (Conditioned Reinforcement Learning Fine-Tuning)\" - a strategy inspired by offline reinforcement learning. It has been trained on mixed-quality data without preference labels.\n\n- For OpenChat fine-tuned on Mistral 7B, check out [OpenChat 7B](/models/openchat/openchat-7b).\n- For OpenChat fine-tuned on Llama 8B, check out [OpenChat 8B](/models/openchat/openchat-8b).\n\n#open-source",
            "architecture": {
                "modality": "text",
                "tokenizer": "Mistral",
                "instruct_type": "openchat"
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": null
            },
            "context_length": 8192,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-3-opus:beta",
        "data": {
            "id": "anthropic/claude-3-opus:beta",
            "name": "Anthropic: Claude 3 Opus (self-moderated)",
            "pricing": {
                "image": "0.024",
                "prompt": "0.000015",
                "request": "0",
                "completion": "0.000075"
            },
            "description": "This is a lower-latency version of [Claude 3 Opus](/models/anthropic/claude-3-opus), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nClaude 3 Opus is Anthropic's most powerful model for highly complex tasks. It boasts top-level performance, intelligence, fluency, and understanding.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-family)\n\n#multimodal",
            "architecture": {
                "modality": "multimodal",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 200000,
            "per_request_limits": null
        }
    },
    {
        "id": "anthropic/claude-instant-1:beta",
        "data": {
            "id": "anthropic/claude-instant-1:beta",
            "name": "Anthropic: Claude Instant v1 (self-moderated)",
            "pricing": {
                "image": "0",
                "prompt": "0.0000008",
                "request": "0",
                "completion": "0.0000024"
            },
            "description": "This is a lower-latency version of [Claude Instant v1](/models/anthropic/claude-instant-1), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nAnthropic's model for low-latency, high throughput text generation. Supports hundreds of pages of text.",
            "architecture": {
                "modality": "text",
                "tokenizer": "Claude",
                "instruct_type": null
            },
            "top_provider": {
                "is_moderated": false,
                "max_completion_tokens": 4096
            },
            "context_length": 100000,
            "per_request_limits": null
        }
    }
]