import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      "process.env": env,
    },
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    resolve: {
      alias: {
        "@assets": "/src/assets",
        "@features": "/src/features",
        "@pages": "/src/pages",
        "@styles": "/src/styles",
      },
    },
  };
});
