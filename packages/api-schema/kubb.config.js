import { defineConfig } from "@kubb/core";
import { pluginClient } from "@kubb/plugin-client";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginZod } from "@kubb/plugin-zod";

export default defineConfig(async () => {
  return {
    root: ".",
    input: {
      path: "../../apps/api/openapi.json",
    },
    output: {
      path: "./src",
      clean: true,
    },
    hooks: {
      done: ["npm run format"],
    },
    plugins: [
      pluginOas({ generators: [] }),
      pluginTs({
        output: {
          path: "./ts",
        },
        group: { type: "tag", name: ({ group }) => `${group}Types` },
        transformers: {
          name: (name, type) => {
            return `${name}Type`;
          },
        },
      }),
      pluginZod({
        output: {
          path: "./zod",
        },
        group: { type: "tag", name: ({ group }) => `${group}Schemas` },
        typed: true,
        dateType: "stringOffset",
        unknownType: "unknown",
        importPath: "zod",
      }),
      pluginClient({
        output: {
          path: "./zodClients.ts",
        },
        group: { type: "tag", name: ({ group }) => `${group}Requests` },
        parser: "zod",
        dataReturnType: "data",
        pathParamsType: "object",
      }),
    ],
  };
});
