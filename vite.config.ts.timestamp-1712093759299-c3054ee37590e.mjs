// vite.config.ts
import react from "file:///C:/Users/Zakaoai/GitProject/WeissSchwarz-FR/.yarn/__virtual__/@vitejs-plugin-react-virtual-3cb7c323fd/3/AppData/Local/Yarn/Berry/cache/@vitejs-plugin-react-npm-4.2.1-8b9705c544-10c0.zip/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import DynamicPublicDirectory from "file:///C:/Users/Zakaoai/GitProject/WeissSchwarz-FR/.yarn/__virtual__/vite-multiple-assets-virtual-3cb09dcc80/3/AppData/Local/Yarn/Berry/cache/vite-multiple-assets-npm-1.2.10-6567e374bf-10c0.zip/node_modules/vite-multiple-assets/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/Zakaoai/GitProject/WeissSchwarz-FR/.yarn/__virtual__/vite-virtual-4fad23a219/3/AppData/Local/Yarn/Berry/cache/vite-npm-5.2.7-1f49e4d865-10c0.zip/node_modules/vite/dist/node/index.js";
import eslint from "file:///C:/Users/Zakaoai/GitProject/WeissSchwarz-FR/.yarn/__virtual__/vite-plugin-eslint-virtual-f3b0db385f/3/AppData/Local/Yarn/Berry/cache/vite-plugin-eslint-npm-1.8.1-844ad445f5-10c0.zip/node_modules/vite-plugin-eslint/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Zakaoai\\GitProject\\WeissSchwarz-FR";
var dirAssets = ["public", "DB"];
var vite_config_default = defineConfig((env) => ({
  plugins: [
    react(),
    env.mode !== "test" && eslint(),
    DynamicPublicDirectory(dirAssets, {
      ssr: true
    })
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  },
  build: {
    target: "esnext"
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
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
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaYWthb2FpXFxcXEdpdFByb2plY3RcXFxcV2Vpc3NTY2h3YXJ6LUZSXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaYWthb2FpXFxcXEdpdFByb2plY3RcXFxcV2Vpc3NTY2h3YXJ6LUZSXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9aYWthb2FpL0dpdFByb2plY3QvV2Vpc3NTY2h3YXJ6LUZSL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXG5pbXBvcnQgRHluYW1pY1B1YmxpY0RpcmVjdG9yeSBmcm9tIFwidml0ZS1tdWx0aXBsZS1hc3NldHNcIlxuXG5jb25zdCBkaXJBc3NldHMgPSBbXCJwdWJsaWNcIiwgXCJEQlwiXVxuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgZXNsaW50IGZyb20gXCJ2aXRlLXBsdWdpbi1lc2xpbnRcIlxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKGVudiA9PiAoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBlbnYubW9kZSAhPT0gXCJ0ZXN0XCIgJiYgZXNsaW50KCksXG4gICAgRHluYW1pY1B1YmxpY0RpcmVjdG9yeShkaXJBc3NldHMsIHtcbiAgICAgIHNzcjogdHJ1ZVxuICAgIH0pXG4gIF0sXG4gIGRlZmluZToge1xuICAgIEFQUF9WRVJTSU9OOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5ucG1fcGFja2FnZV92ZXJzaW9uKVxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogXCJlc25leHRcIlxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFt7IGZpbmQ6IFwiQFwiLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIikgfV1cbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgIGpzeDogXCJhdXRvbWF0aWNcIlxuICAgIH1cbiAgfSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6IFwiaGFwcHktZG9tXCIsXG4gICAgc2V0dXBGaWxlczogW1wiLi9zcmMvc2V0dXBUZXN0cy50c1wiXSxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgcHJvdmlkZXI6IFwidjhcIixcbiAgICAgIHJlcG9ydGVyOiBbXCJsY292XCIsIFwianNvblwiLCBcImh0bWxcIl1cbiAgICB9LFxuICAgIGluY2x1ZGU6IFtcInNyYy8qKi8qLnt0ZXN0LHNwZWN9LntqcyxtanMsY2pzLHRzLG10cyxjdHMsanN4LHRzeH1cIl1cbiAgfVxufSkpXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLDRCQUE0QjtBQUluQyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFlBQVk7QUFSbkIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxZQUFZLENBQUMsVUFBVSxJQUFJO0FBTWpDLElBQU8sc0JBQVEsYUFBYSxVQUFRO0FBQUEsRUFDbEMsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSSxTQUFTLFVBQVUsT0FBTztBQUFBLElBQzlCLHVCQUF1QixXQUFXO0FBQUEsTUFDaEMsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLGFBQWEsS0FBSyxVQUFVLFFBQVEsSUFBSSxtQkFBbUI7QUFBQSxFQUM3RDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU8sQ0FBQyxFQUFFLE1BQU0sS0FBSyxhQUFhLEtBQUssUUFBUSxrQ0FBVyxLQUFLLEVBQUUsQ0FBQztBQUFBLEVBQ3BFO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixnQkFBZ0I7QUFBQSxNQUNkLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWSxDQUFDLHFCQUFxQjtBQUFBLElBQ2xDLFVBQVU7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVUsQ0FBQyxRQUFRLFFBQVEsTUFBTTtBQUFBLElBQ25DO0FBQUEsSUFDQSxTQUFTLENBQUMsc0RBQXNEO0FBQUEsRUFDbEU7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
