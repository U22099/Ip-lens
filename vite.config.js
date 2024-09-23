import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/Ip-lens/',
  plugins: [VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'IP Lens',
        short_name: 'IP Lens',
        description: 'Ip address tracker with map',
        background_color: 'black', 
        display: 'standalone', 
        start_url: '/Ip-lens',
        scope: '/',
        orientation: 'portrait',
        theme_color: 'purple',
        icons: [
		{
			src: "pwa-64x64.png",
			sizes: "64x64",
			type: "image/png"
		},
		{
			src: "pwa-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
  		{
    			src: "pwa-512x512.png",
    			sizes: "512x512",
    			type: "image/png"
  		},
  		{
    			src: "maskable-icon-512x512.png",
    			sizes: "512x512",
    			type: "image/png",
    			purpose: "maskable"
  		}
	]
      }
  })],
  build: {
    sourcemap: true,
  },
});
