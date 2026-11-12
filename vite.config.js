import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), solid()],
  // Expose IK_* (public key / endpoint only) to the browser for ImageKit uploads.
  envPrefix: ['VITE_', 'IK_'],
})
