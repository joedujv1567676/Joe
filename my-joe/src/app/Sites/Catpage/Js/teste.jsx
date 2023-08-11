'use client'

import React, { useState } from "react";
import { List, Twitch } from 'lucide-react';

const Teste = () => {
  const [menuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!menuHidden);
  };

  return (
    <div>
      <button onClick={toggleMenu}><List size={40} strokeWidth={2} /></button>
      <div id="menu" className={`sidebar ${menuHidden ? "hidden" : ""}`}>
        <ul>
          <li><a href='https://br.pinterest.com/' className=' p-1 text-[3.5vw]'>Mais</a></li>
          <li><a href='https://discord.gg/ZxVJb7g6F4' className=' p-1 text-[3.5vw]'>Discord</a></li>
          <li><a href='https://www.twitch.tv/yumis2owo' className=' p-1 text-[3.5vw] flex '>Yumis2owo<button className='pl-1'><Twitch /></button></a></li>
        </ul>
      </div>
      <div className="content">
        {/* O conteúdo da sua página vai aqui */}
      </div>
    </div>
  );
};

export default Teste;