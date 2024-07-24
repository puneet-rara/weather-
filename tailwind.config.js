/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
      "image":"url('/src/media/sky-background-video-conferencing_23-2148623068.avif')",
      "left":"url('/src/media/MicrosoftTeams-image (3).png')"
    }},
  },
  plugins: [],
}