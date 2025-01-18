import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '', // Si necesitas un subdirectorio, añade el basePath aquí.
  images: {
    unoptimized: true, // Necesario para exportar imágenes sin optimización
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
