// User/organisation Pages repo (<username>.github.io) is served from the domain root,
// so no basePath is needed. If you deploy as "mariam-portfolio", set basePath: "/mariam-portfolio".
/** @type {import('next').NextConfig} */
const nextConfig = { output: "export", trailingSlash: true, images: { unoptimized: true } };
export default nextConfig;
