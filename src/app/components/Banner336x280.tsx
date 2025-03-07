"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Banner336x280: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [randomNumber, setRandomNumber] = useState<number>(Math.floor(Math.random() * 1000000));

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Générer un nouveau numéro aléatoire toutes les 30 secondes (si nécessaire)
    const interval = setInterval(() => {
      setRandomNumber(Math.floor(Math.random() * 1000000));
    }, 30000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  if (!isClient) return null; // Empêche le rendu côté serveur

  return (
    <div style={{ textAlign: "center", marginTop: "0px" }}>
      {/* Affichage de l'iframe publicitaire */}
      <iframe
        id="afb1865f"
        name="afb1865f"
        src={`https://client.cynomedia-africa.com/www/delivery/afr.php?zoneid=208&cb=${randomNumber}`}
        frameBorder="0"
        scrolling="no"
        width="336"
        height="280"
        allow="autoplay"
      >
        <a href={`https://client.cynomedia-africa.com/www/delivery/ck.php?n=a5c548db&cb=${randomNumber}`} target="_blank" rel="noopener noreferrer">
          <Image
            src={`https://client.cynomedia-africa.com/www/delivery/avw.php?zoneid=208&cb=${randomNumber}&n=a5c548db`}
            width={336}
            height={280}
            alt="Advertisement"
          />
        </a>
      </iframe>
    </div>
  );
};

export default Banner336x280;
