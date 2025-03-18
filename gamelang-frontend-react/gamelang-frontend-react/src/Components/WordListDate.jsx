import React, { useEffect, useState } from 'react'
import '../Styles/WordListDate.css'
import { useNavigate, useParams } from 'react-router-dom'
import { getWordsByDate } from '../Services/Services'

const WordListDate = () => {
    
    const {date} = useParams()
    const navigate = useNavigate()
    const [words,setWords] = useState([])

    function getWords(date){

        getWordsByDate(date).then((response) => {
            setWords(response.data)
            console.log(response.data)
        }).catch(error => {
            console.error(error)
        })

    }
    
    useEffect(() => {
        getWords(date)
    },[date])

  return (
    <div className='list-date-div'>

        <h1 style={{textAlign: 'center' , fontFamily:'Courier New'}}>Word inserted on {date}</h1>
        <button className='btn-menu' onClick={()=>navigate('/home')}>Home</button>

        <table>
                <thead>
                    <tr> 
                        <th>Word</th>
                        <th>Translate</th>
                        <th>Language</th>
                        <th>Other info</th>
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
                                    <button className='btn btn-info' onClick={()=>navigate(`/language-learn/${word.language}/${word._id}`)}>Info</button>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>



        
        </div>
  )
}

export default WordListDate