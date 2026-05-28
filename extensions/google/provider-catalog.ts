import type {
  ModelDefinitionConfig,
  ModelProviderConfig,
} from "openclaw/plugin-sdk/provider-model-shared";

const GOOGLE_GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
const GOOGLE_GEMINI_COST = { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 } as const;
const GOOGLE_GEMINI_TEXT_MODELS: ModelDefinitionConfig[] = [
  {
    id: "gemini-3.1-pro-preview",
    name: "Gemini 3.1 Pro Preview",
    reasoning: true,
    input: ["text", "image"],
    cost: GOOGLE_GEMINI_COST,
    contextWindow: 1_048_576,
    maxTokens: 65_536,
  },
  {
    id: "gemini-3-flash-preview",
    name: "Gemini 3 Flash Preview",
    reasoning: true,
    input: ["text", "image"],
    cost: GOOGLE_GEMINI_COST,
    contextWindow: 1_048_576,
    maxTokens: 65_536,
  },
];

export function buildGoogleStaticCatalogProvider(): ModelProviderConfig {
  return {
    baseUrl: GOOGLE_GEMINI_BASE_URL,
    api: "google-generative-ai",
    models: GOOGLE_GEMINI_TEXT_MODELS,
  };
}

const GOOGLE_VERTEX_LATEST_ALIASES: ModelDefinitionConfig[] = [
  {
    id: "gemini-flash-latest",
    name: "Gemini Flash (latest)",
    reasoning: true,
    input: ["text", "image"],
    contextWindow: 1_048_576,
    maxTokens: 65_536,
    tags: ["default"],
  },
  {
    id: "gemini-pro-latest",
    name: "Gemini Pro (latest)",
    reasoning: true,
    input: ["text", "image"],
    contextWindow: 1_048_576,
    maxTokens: 65_536,
  },
  {
    id: "gemini-flash-lite-latest",
    name: "Gemini Flash-Lite (latest)",
    input: ["text", "image"],
    contextWindow: 1_048_576,
    maxTokens: 65_536,
  },
];

export function buildGoogleVertexStaticCatalogProvider(): ModelProviderConfig {
  return {
    api: "google-vertex",
    models: [...GOOGLE_VERTEX_LATEST_ALIASES, ...GOOGLE_GEMINI_TEXT_MODELS],
  };
}
