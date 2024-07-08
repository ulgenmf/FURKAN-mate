export const customModelTemp = {
  id: 'microsoft/phi-3-medium-128k-instruct:free',
  name: 'Phi-3 Medium 128K Instruct (free)',
  description:
    'Phi-3 128K Medium is a powerful 14-billion parameter model designed for advanced language understanding, reasoning, and instruction following. Optimized through supervised fine-tuning and preference adjustments, it excels in tasks involving common sense, mathematics, logical reasoning, and code processing.\n\nAt time of release, Phi-3 Medium demonstrated state-of-the-art performance among lightweight models. In the MMLU-Pro eval, the model even comes close to a Llama3 70B level of performance.\n\nFor 4k context length, try [Phi-3 Medium 4K](/models/microsoft/phi-3-medium-4k-instruct).\n\nNote: this is a free, rate-limited version of [Phi-3 Medium 128K Instruct](/models/microsoft/phi-3-medium-128k-instruct). Outputs may be cached. Read about rate limits [here](/docs/limits).',
  pricing: {
    prompt: '0',
    completion: '0',
    image: '0',
    request: '0'
  },
  context_length: 128000,
  architecture: {
    modality: 'text->text',
    tokenizer: 'Other',
    instruct_type: 'phi3'
  },
  top_provider: {
    max_completion_tokens: null,
    is_moderated: false
  },
  per_request_limits: {
    prompt_tokens: 'Infinity',
    completion_tokens: 'Infinity'
  }
}
