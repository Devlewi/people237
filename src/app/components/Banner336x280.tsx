'use client';

import Image from 'next/image';
import React from 'react';

const Banner336x280 = () => {
  return (
    <div>
      {/* Affichage de l'iframe publicitaire */}
      <iframe 
        id="a5699f99" 
        name="a5699f99" 
        src="https://client.cynomedia-africa.com/www/delivery/afr.php?zoneid=208&cb=INSERT_RANDOM_NUMBER_HERE" 
        frameBorder="0" 
        scrolling="no" 
        width="336" 
        height="280" 
        allow="autoplay"
        style={{ display: 'block', margin: '0 auto' }} // Assurer que l'iframe est centré
      >
        <a href="https://client.cynomedia-africa.com/www/delivery/ck.php?n=a51b5a16&cb=INSERT_RANDOM_NUMBER_HERE" target="_blank">
          <Image 
            src="https://client.cynomedia-africa.com/www/delivery/avw.php?zoneid=208&cb=INSERT_RANDOM_NUMBER_HERE&n=a51b5a16" 
            alt="" 
            width={336}
            height={280}
          />
        </a>
      </iframe>
    </div>
  );
};

export default Banner336x280;
