import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

console.log('env', env)
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // Add your components here
          blogPost: "storyblok/BlogPost",
          blogPostList: "storyblok/BlogPostList",
        page: 'storyblok/Page',
          placeholder: 'storyblok/Placeholder'
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: 'eu', // optional,  or 'eu' (default)
      },
    })
  ],
});