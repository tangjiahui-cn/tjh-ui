import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import alias from "./build/alias";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: "127.0.0.1",
    port: 10000,
    https: false
  },
  resolve: {
    alias,
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"]
  },
  plugins: [
    vue()
  ]
});
