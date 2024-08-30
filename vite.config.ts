import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    devtools({
      autoname: true,
      locator: {
        targetIDE: "vscode",
        key: "Alt",
        jsxLocation: true,
        componentLocation: true,
      },
    }),
    solidPlugin(),
  ],
  server: { port: 3000 },
  build: { target: "esnext" },
});
