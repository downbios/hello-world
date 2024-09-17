import { useState } from "react";
import "./App.css";

function App() {
  // Lista de traduções com mais idiomas
  const translations = [
    { lang: "English", text: "Hello World!", flag: "🇬🇧" },
    { lang: "Português", text: "Olá Mundo!", flag: "🇧🇷" },
    { lang: "Español", text: "¡Hola Mundo!", flag: "🇪🇸" },
    { lang: "Français", text: "Bonjour le monde!", flag: "🇫🇷" },
    { lang: "Deutsch", text: "Hallo Welt!", flag: "🇩🇪" },
    { lang: "日本語", text: "こんにちは世界！", flag: "🇯🇵" },
    { lang: "中文", text: "你好，世界！", flag: "🇨🇳" },
    { lang: "Русский", text: "Здравствуй, мир!", flag: "🇷🇺" },
    { lang: "한국어", text: "안녕하세요 세계!", flag: "🇰🇷" },
    { lang: "Italiano", text: "Ciao mondo!", flag: "🇮🇹" },
    { lang: "العربية", text: "مرحبا بالعالم!", flag: "🇸🇦" },
    { lang: "हिन्दी", text: "नमस्ते दुनिया!", flag: "🇮🇳" },
  ];

  // Estado para controlar o idioma atual
  const [lang, setLang] = useState(0);

  // Função para mudar o idioma (ciclo)
  const changeLanguage = () => {
    setLang((prevLang) => (prevLang + 1) % translations.length);
  };

  return (
    <>
      <h1>{translations[lang].text}</h1>
      <div className="card">
        <button onClick={changeLanguage}>
          Language is {translations[lang].lang} {translations[lang].flag}
        </button>
      </div>
    </>
  );
}

export default App;
