import { useState, useEffect } from 'react';

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const bodyElement = document.querySelector('body');
    const textElements = document.querySelectorAll('.text-color-change');
    
    bodyElement.style.backgroundImage = isDarkMode ? 'url(/assets/images/darkbg.png)' : 'url(/assets/images/lightbg.png)';
    textElements.forEach((element) => {
        element.classList.toggle('text-white', isDarkMode);
        element.classList.toggle('text-black', !isDarkMode);
      });
  }, [isDarkMode]);
  

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className={`bg-transparent outline-none focus:outline-none transition duration-300 ease-in-out ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}
      onClick={handleToggle}
    >
      <img
        src={isDarkMode ? '/assets/icons/moon.svg' : '/assets/icons/sun.svg'}
        alt={isDarkMode ? 'Dark Mode' : 'Light Mode'}
        className="w-7 h-7 bg-white rounded p-1"
      />
    </button>
  );
};

export default ToggleButton;
