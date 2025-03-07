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
  
};

export default nextConfig;
