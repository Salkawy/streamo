# Next Streaming Starter

Next.js + TypeScript + Tailwind starter for a modern × luxury streaming UI.

## Features
- Next.js app router
- Tailwind CSS with design tokens
- Hero showcase, poster grid, and HLS player using `hls.js`
- API route to redirect to media manifests (swap with your signed-manifest generator / provider)
- Minimal demo catalog

## Quickstart

1. Clone this repo
2. Copy `.env.example` → `.env.local` and set `NEXT_PUBLIC_MEDIA_PROXY_URL` if you want to test non-demo manifests.
3. Install
```bash
npm install
