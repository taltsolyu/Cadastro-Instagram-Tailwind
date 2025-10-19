
function Footer() {
  const links = [
    'Meta', 'Sobre', 'Blog', 'Carreiras', 'Ajuda', 'API', 'Privacidade',
    'Termos', 'Localizações', 'Instagram Lite', 'Threads', 
    'Carregamento de contatos e não usuários', 'Meta Verified'
  ];

  return (
    <footer className="w-full max-w-[935px] mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
        {links.map((link) => (
          <a 
            key={link} 
            href="#" 
            className="text-xs text-insta-text-light hover:underline"
          >
            {link}
          </a>
        ))}
      </div>
      
      <div className="flex justify-center gap-4 text-xs text-insta-text-light">
        <select aria-label="Mudar idioma de exibição" className="bg-transparent border-none">
          <option value="pt-br">Português (Brasil)</option>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        <span>© {new Date().getFullYear()} Instagram from Meta</span>
      </div>
    </footer>
  );
}

export default Footer;