import React, { useEffect, useState } from 'react';
import '../Styles/WordInfo.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getWordById } from '../Services/Services';

const WordInfo = () => {
    const { id, language } = useParams();
    const navigate = useNavigate();
    const [word, setWord] = useState(null);

    useEffect(() => {
        if (id) {
            getWordById(id).then((response) => {
                console.log(response.data); 
                setWord(response.data); 
            }).catch(error => {
                console.error(error);
            });
        }
    }, [id]);



    return (
        <div className='main-div-info'>
            <h2 className='info-id'>Word ID : {id}</h2>
            {word && (
                <div className='card-info'>
                    <div className='paragrafi'>
                    <p><p className='card-info-attr' >Word: </p>{word.word}</p>
                    <p className='card-info-attr' >Translate: </p><p>{word.translate}</p>
                    <p className='card-info-attr'>Language: </p><p> {word.language}</p>
                    <p className='card-info-attr'>Description: </p><p> {word.description}</p>
                    <p className='card-info-attr'>Example: </p><p> {word.example}</p>
                    </div>
                </div>
            )}
            <button className='btn-menu' onClick={() => navigate(`/language-learn/${language}/word-list`)}>
                Back to Word List
            </button>
        </div>
    );
}

export default WordInfo;
