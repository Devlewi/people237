"use client";

import React, { useEffect, useState } from "react";

const Banner336x280: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Empêche le rendu côté serveur
//text-align:center;background:#eae8e8;margin-top:0px;
  return (
    <div className='col-md-12 justify-content-center' style={{textAlign:'center', background:'#eae8e8'}}>
      {/* Affichage de l'iframe publicitaire */}
      {/* font-size:11px;padding-top:18px; */}
      <center>
      <p style={{fontSize:11, paddingTop:18}}>LA SUITE APRÈS LA PUBLICITÉ</p>        
      <iframe
        id="a5699f99"
        name="a5699f99"
        src={`https://client.cynomedia-africa.com/www/delivery/afr.php?zoneid=208&cb=${Date.now()}`}
        frameBorder="0"
        scrolling="no"
        width='336' 
        height='280'
        allow="autoplay"
        style={{ display: "block", margin: "0 auto" }}
      ></iframe>
      </center>
      <br/><br/>
    </div>
  );
};

export default Banner336x280;
