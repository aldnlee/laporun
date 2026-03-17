export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Jalankan server Astro yang ada di folder dist
    return await import("../dist/server/entry.mjs").then(m => m.default.fetch(request, env));
  }
};