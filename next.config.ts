import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {    
    unoptimized: true,//Désactiver l'optimisation d'images
    remotePatterns: [      
      {
        protocol: "https",
        hostname: "localhost",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "controlpanel.people237.com",
        pathname: "/wp-content/uploads/**",
      },        
    ],
    domains: ['people237.com','controlpanel.people237.com','people237-frontend.vercel.app', 'people237.vercel.app','client.cynomedia-africa.com'], // Ajoutez ici le domaine de votre image
  
  },
  
  async redirects() {
    return [
      // 1. Redirige /Home et TOUT ce qui suit (/Home/...) vers l'accueil
      {
        source: "/Home/:path*",
        destination: "/",
        permanent: true,
      },
      // 2. Redirige spécifiquement la catégorie supprimée et ses sous-pages
      {
        source: "/category/events/:path*",
        destination: "/",
        permanent: true,
      },
      // 3. Redirige tous les flux RSS (feed) qui polluent vos logs
      {
        source: "/:prefix*/feed",
        destination: "/",
        permanent: true,
      },
      // 4. Redirige les anciens tags WordPress vers l'accueil
      {
        source: "/tag/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
