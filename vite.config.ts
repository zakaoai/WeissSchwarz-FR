/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import fs from "fs"
import path from "path"
import DynamicPublicDirectory from "vite-multiple-assets"
import generateFile from "vite-plugin-generate-file"

const dirAssets = ["public/**", { input: "DB/*.json", output: "/EN" }, { input: "JP-DB/DB/*.json", output: "/JP" }]

const getJsonDB = (path: string) =>
  fs.readdirSync(path, { withFileTypes: true }).map(({ name }) => {
    const filePath = path + "/" + name
    const file = fs.readFileSync(filePath, "utf8")
    try {
      const data = JSON.parse(file)
      return { file: name, name: data[0].expansion }
    } catch {
      console.log(name)
    }
  })

const assetJSON = [
  { output: "indexEN.json", data: getJsonDB("./EN-DB/DB") },
  { output: "indexJP.json", data: getJsonDB("./JP-DB/DB") }
]

import { defineConfig } from "vite"
import { nodePolyfills } from "vite-plugin-node-polyfills"
// import eslint from "vite-plugin-eslint2"

// https://vitejs.dev/config/
export default defineConfig(
  // _env =>
  {
    server: {
      host: true
    },
    plugins: [
      generateFile(assetJSON),
      DynamicPublicDirectory(dirAssets),
      nodePolyfills(),
      react({
        jsxImportSource: "@welldone-software/why-did-you-render" // <-----
      })
      // env.mode !== "test" && eslint()
    ],
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version)
    },
    build: {
      target: "esnext"
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
    },
    optimizeDeps: {
      esbuildOptions: {
        jsx: "automatic"
      }
    },
    test: {
      globals: true,
      environment: "happy-dom",
      setupFiles: ["./src/setupTests.ts"],
      coverage: {
        provider: "v8",
        reporter: ["lcov", "json", "html"]
      },
      include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
    }
  }
)
