import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Para asegurar que las rutas terminen con '/'
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio', // Esto permite personalizar el subdirectorio /portfolio
  images: {
    unoptimized: true, // Necesario para exportar imágenes sin optimización
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
