import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: {
    prefix: 'w:'
  },
  theme: {
    extend: {
      colors: {
        secondary: '#0C8FE5',
      },
    },
  },
  plugins: [
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
  ],
})