import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
 server : {
  host: '0.0.0.0'
 },
 base: '/si/'
}
)



// import { defineConfig } from 'vite'
// export default defineConfig({
//   plugins: [
//   ],
// })