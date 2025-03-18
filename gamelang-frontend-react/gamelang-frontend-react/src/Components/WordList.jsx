import React, { useEffect, useState } from 'react';
import '../Styles/WordList.css';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteWord, getWords } from '../Services/Services';

const WordList = () => {


    const { language } = useParams();
    const navigate = useNavigate();
    const [words, setWords] = useState([]);

    const getWordList = () => {
        getWords(language)
            .then((response) => {
                setWords(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    function removeWord(wordId){
        deleteWord(wordId).then((response)=>{
            getWordList()
        }).catch(error => {
            console.error(error)
        })
        
    }

    useEffect(() => {
        getWordList();
    }, [language]); 

    return (
        <div className='main-div-list'>
            <table>
                <thead>
                    <tr> 
                        <th>Word</th>
                        <th>Translate</th>
                        <th>Language</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        words.map(word => (
                            <tr key={word._id}> 
                                <td>{word.word}</td>
                                <td>{word.translate}</td>
                                <td>{word.language}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={()=>navigate(`/language-learn/${language}/edit-word/${word._id}`)}>Update</button>
                                    <button className='btn btn-danger' onClick={()=>removeWord(word._id)}>Delete</button>
                                    <button className='btn btn-info' onClick={()=>navigate(`/language-learn/${language}/${word._id}`)}>Info</button>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button className='btn-menu' onClick={() => navigate(`/language-learn/${language}`)}>Menu</button>
        </div>
    );
};

export default WordList;
