export default {
  async fetch(request, env) {
    // Ini akan memanggil entry point Astro di folder dist
    const { onRequest } = await import("../dist/server/entry.mjs");
    return onRequest({ request, env });
  }
};