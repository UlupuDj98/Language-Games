import React, { useState } from 'react';
import CardLang from './CardLang';
import '../Styles/HomeGame.css';
import { useNavigate } from 'react-router-dom';

const HomeGame = () => {
    const [date, setDate] = useState('');
    const [error, setError] = useState(''); 

    const handleDate = (e) => setDate(e.target.value);

    const navigate = useNavigate();

    const isValidDateFormat = (date) => {
        // Verifica se la data è nel formato dd-mm-yyyy
        const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/;
        return regex.test(date);
    };

    const goToWordListDate = () => {
        if (isValidDateFormat(date)) {
            setError(''); 
            navigate(`/word-list/${date}`);
        } else {
            setError('Invalid date format'); 
            setDate('')
        }
    };

    const languages = [
        {
            name: 'Inglese',
            image: 'https://inglesedinamico.net/wp-content/uploads/2017/01/storia-della-bandiera-inglese-fb.jpg'
        },
        {
            name: 'Francese',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefNoApy0wLpf-vX6oCg6QdFmhXiftT_Qwyw&s'
        },
        {
            name: 'Tedesco',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4P9ZCl5_OdscDIAO4KlMdNCFn5CibOuKlA&s'
        },
        {
            name: 'Italiano',
            image: 'https://www.telejonio.com/wp-content/uploads/2018/01/bandiera-italiana-2.jpg'
        }
    ];

    return (
        <div className='home-div'>
            <div className="card-container">
                {languages.map((language, index) => (
                    <CardLang 
                        key={index} 
                        languageImage={language.image} 
                        languageName={language.name} 
                        onClick={() => navigate(`/language-learn/${language.name}`)}
                    />
                ))}
            </div>

            <div className='search'>
                <h2>Search words for insert date</h2>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder={error ? error : "Valid format (dd-mm-yyyy)"}
                        className="search-input"
                        value={date}
                        onChange={handleDate}
                    />
                    <button className="search-button" onClick={goToWordListDate}>Cerca</button>
                </div>
            </div>
        </div>
    );
}

export default HomeGame;
