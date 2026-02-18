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
  
 // Dans ton next.config.js, garde uniquement ce qui est nécessaire :
async redirects() {
    return [
      // 1. Redirection de /home et /Home (insensible à la casse par défaut) vers l'accueil
      // Le :path* permet de rediriger aussi /home/ (avec slash)
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
      // 2. Redirection des tags vers l'accueil
      {
        source: "/tag/:path*",
        destination: "/",
        permanent: true,
      },
      // 3. Redirection de toutes les catégories vers l'accueil
      // (On évite de mettre /feed ici pour qu'il reste accessible via le middleware si besoin)
      {
        source: "/category/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },


};

export default nextConfig;
