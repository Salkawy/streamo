import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: any }) {
  const url = new URL(request.url);
  const id = params?.id ?? url.pathname.split('/').pop();

  // Demo behaviour: build a proxy manifest url from NEXT_PUBLIC_MEDIA_PROXY_URL or fallback
  const proxy = process.env.NEXT_PUBLIC_MEDIA_PROXY_URL ?? 'https://test-streams.mux.dev';
  // Example manifest (Mux test stream) or replace with your signed HLS manifest generator
  // For demo, we'll redirect to a public HLS manifest if id === 'demo-movie'
  const demoManifest = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

  const target = id === 'demo-movie' ? demoManifest : `${proxy}/manifests/${id}.m3u8`;

  return NextResponse.redirect(target);
}
