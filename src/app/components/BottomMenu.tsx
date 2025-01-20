import Styles from './styles/BottomNav.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { BiSearchAlt } from 'react-icons/bi';
import { FaMoon, FaRegMoon } from 'react-icons/fa';
import { TiHome } from 'react-icons/ti';
import { MdOutlineManageSearch } from 'react-icons/md';

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTabs, setActiveTabs] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Ajout de l'état de chargement

  // Vérification et application immédiate du mode sombre dès le chargement de la page
  useEffect(() => {
    const BunyadSchemeKey = "bunyad-scheme-6"; // Clé de stockage
    const scheme = localStorage.getItem(BunyadSchemeKey);
    const d = document.documentElement;
    const c = d.classList;
  
    if (scheme) {
      // Si une préférence est déjà enregistrée dans localStorage, l'appliquer
      d.dataset.origClass = c.toString(); // Sauvegarde des classes originales
  
      if (scheme === "dark") {
        c.remove("s-light", "site-s-light");
        c.add("site-s-dark", "s-dark");
        setDarkMode(true);
      } else {
        c.remove("s-dark", "site-s-dark");
        c.add("s-light", "site-s-light");
        setDarkMode(false);
      }
    } else {
      // Aucun mode enregistré : utiliser "light" comme défaut
      localStorage.setItem(BunyadSchemeKey, 'light'); // Définit light par défaut
      setDarkMode(false);
  
      c.remove("s-dark", "site-s-dark");
      c.add("s-light", "site-s-light");
    }
  
    setIsLoading(false); // Arrête le chargement
  }, []);
  

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    const BunyadSchemeKey = "bunyad-scheme-6";
    const d = document.documentElement;
    const c = d.classList;

    localStorage.setItem(BunyadSchemeKey, newMode ? 'dark' : 'light');
    console.log(newMode);
    if (newMode) {
      c.remove("s-light", "site-s-light");
      c.add("site-s-dark", "s-dark");
    } else {
      c.remove("s-dark", "site-s-dark");
      c.add("s-light", "site-s-light");
    }

    setDarkMode(newMode);
  };

  // Mise à jour de l'onglet actif en fonction du pathname
  useEffect(() => {
    switch (pathname) {
      case '/':
        setActiveTabs('home');
        break;
      case '/recherche':
        setActiveTabs('search');
        break;
      case '/saved':
        setActiveTabs('saved');
        break;
      case '/account':
        setActiveTabs('account');
        break;
      default:
        setActiveTabs('');
        break;
    }
  }, [pathname]);

  const handleTabClick = (tab: string) => {
    setActiveTabs(tab);
    switch (tab) {
      case 'home':
        router.push('/');
        break;
      case 'search':
        router.push('/recherche');
        break;
      case 'saved':
        router.push('/saved');
        break;
      case 'account':
        router.push('/account');
        break;
      default:
        router.push('/');
        break;
    }
  };

  // Ne pas rendre le composant avant que le mode ne soit chargé
  if (isLoading) {
    return <div className="loading-screen">Loading...</div>; // Vous pouvez remplacer par un spinner ou autre animation
  }

  return (
    <div className={Styles.bottomNav}>
      <div className={Styles.bnTab}>
      <TiHome
            size="30"
            color="#fff"
            onClick={() => handleTabClick('home')}
            style={{cursor:'pointer'}}
          />
      </div>

      <div className={Styles.bnTab}>
        {activeTabs === 'search' ? (
          <MdOutlineManageSearch
            size="40"
            color="#fff"
            onClick={() => handleTabClick('search')}
            style={{cursor:'pointer'}}
          />
        ) : (
          <BiSearchAlt
            size="30"
            color="#fff"
            onClick={() => handleTabClick('search')}
            style={{cursor:'pointer'}}
          />
        )}
      </div>

      {/* Icône pour le mode sombre */}
      <div className={Styles.bnTab}>
        <a
          href="#"
          className={`toggle is-icon ${darkMode ? 'toggle-light' : 'toggle-dark'}`}
          title="Switch to Dark Design - easier on eyes."
          onClick={(e) => {
            e.preventDefault(); // Empêche le comportement par défaut
            toggleDarkMode();
          }}
        >
          {darkMode ? (
            <FaRegMoon size="25" style={{ color: "#777" }} />
          ) : (
            <FaMoon size="25" style={{ color: "#fff" }} />
          )}
        </a>
      </div>

      {/* Commenté pour le moment */}
      {/* <div className={Styles.bnTab}>
        {activeTabs === 'account' ? (
          <RiUser5Fill
            size="35"
            color="#fff"
            onClick={() => handleTabClick('account')}
          />
        ) : (
          <RiUser5Line
            size="35"
            color="#fff"
            onClick={() => handleTabClick('account')}
          />
        )}
      </div> */}
    </div>
  );
};

export default BottomNav;
