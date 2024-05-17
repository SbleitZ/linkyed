# Linkyed
A simple template to show your links that allows customization using nextjs and tailwindcss.
<p align="center">
  <a>
    <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
  <a/>
  <a>
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <a/>
  <a>
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <a/>
</p>
<img src="https://i.imgur.com/yMw2p1r.png" alt="web example dark mode"/>

## Instalation
  1. Clone the project using the following command: 

   ```bash
    git clone https://github.com/SbleitZ/linkyed.git
   ```
  2. Access the folder:

   ```bash
   cd linkyed
   ```
  3. Install the packages:
   ```bash
   npm install
   ```
  4. Starts developing:
   ```bash
   npm run dev
   ```
## Configuration

You can configure the project using [mis-links.json](./mis-links.json) for the overall design and [tailwind.config.ts](tailwind.config.ts) for tailwind colors.

1. For example, if you want to add your amazon wish list, your json should look like this (without animations):
 ```json
  {
      "icon":"amazon",
      "href":"https://amazon.com/your-wish-list",
      "label":"Amazon Wishlist",
      "background":"#ecae1d",
      "effects":{
        "duration":"",
        "animation":""
      }
    },
 ```
 <img src="https://i.imgur.com/ivFdUHj.png" alt="example"/>

2. to modify the background modify the class of the main tag in [page.tsx](./src/app/page.tsx#L8,C98)
3. [You can edit the boxes in this file](/src/app/components/Links.tsx)

### Utils
- [Icons](https://www.svgrepo.com)
- [Animations](https://codepen.io/davideast/pen/MWxvzjm)

### Animations
- wiggle
- shake
- pulse
- glitch
- tonyhawk
- flip
- fill
- sheen
- glow
- blur

### Icons
- Default
- Amazon
- Discord
- Email
- Facebook
- Instagram
- Spotify
- Tiktok
- Twitch
- Twitter
- Youtube

