import React, { useState } from 'react';

const LanguageToogle = () => {
    const [language, setLanguage] = useState('en'); // default language is english

    // handle toggle
    const LanguageBtn = () => { 
        setLanguage((prev) => (prev === 'en' ? 'de' : 'en'));
    }

    return (
        <div className={`flex items-center justify-between w-20 h-10  rounded-full p-1 cursor-pointer bg-gray-100/30 backdrop-blur-md bg:drop`}
        onClick={LanguageBtn}
        >
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${language === 'de' ? 'bg-white' : 'bg-gray-300/50'}`}>
                De
            </div>  

            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${language === 'en' ? 'bg-white' : 'bg-gray-300/50'}`}>
                En
            </div>  

        </div>
    )
}

export default LanguageToogle;