import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react(), viteTsconfigPaths()],
})
