import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import externalGlobals from 'rollup-plugin-external-globals';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
	resolve: {
		alias: {
			'@':path.resolve(__dirname,'src'),
			'@ehs':path.resolve(__dirname,'src/pages/ehs'),
		}
	},
	build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        ehs: path.resolve(__dirname, 'src/pages/ehs/index.html')
      }
    },
     output:{
       inlineDynamicImports: true,
     },
      external: ['vue', 'vuex', 'vue-router', 'element-plus'],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          vuex: 'Vuex',
          'vue-router': 'VueRouter',
          'element-plus': 'ElementPlus'
        })
      ]
  },
	server: {
		port:3050,
	}
})
