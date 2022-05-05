/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  /** 아이디를 통일 시켜줌 */
  generateBuildId: () => "tthh12",
  /** 정적파일을 지정해 줌 */
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
