import React, { useEffect, useState } from 'react';
import '../Styles/EditWord.css';
import { useNavigate, useParams } from 'react-router-dom';
import { addWord, getWordById, updateWord } from '../Services/Services';

const EditWord = () => {

    const {id} = useParams()
    const {language} = useParams()
    const navigate = useNavigate()


    const [word, setWord] = useState('');
    const [translate, setTranslate] = useState('');
    const [example, setExample] = useState('');
    const [description, setDescription] = useState('');

    const [errors, setErrors] = useState({
        word: '',
        translate: '',
        example: '',
        description: ''
    });


    const handleWord = (e) => setWord(e.target.value);
    const handleTranslate = (e) => setTranslate(e.target.value);
    const handleExample = (e) => setExample(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };

        if (word.trim()) {
            errorsCopy.word = '';
        } else {
            errorsCopy.word = 'Word is required';
            valid = false;
        }


        if (translate.trim()) {
            errorsCopy.translate = '';
        } else {
            errorsCopy.translate = 'Translation is required';
            valid = false;
        }

        if (example.trim()) {
            errorsCopy.example = '';
        } else {
            errorsCopy.example = 'Example is required';
            valid = false;
        }

        if (description.trim()) {
            errorsCopy.description = '';
        } else {
            errorsCopy.description = 'Description is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    useEffect(() => {
        if(id){
            getWordById(id).then((response) => {
                setWord(response.data.word)
                setTranslate(response.data.translate)
                setExample(response.data.example)
                setDescription(response.data.description)

            }).catch(error => {
                console.error(error)
            })
        }

    },[id])

    const saveOrUpdateWord = (e) => {

        e.preventDefault()

        if (validateForm()) {

            const newWord = {word , translate , language , description , example}
            console.log(newWord)

            if(id){

                updateWord(id,newWord).then((response) => {
                    console.log(response.data)
                    navigate(`/language-learn/${language}/word-list`)

                }).catch(error => {
                    console.error(error)
                })
            }
            else{

                addWord(newWord).then((response)=>{
                    console.log(response.data)
                    navigate(`/language-learn/${language}/word-list`)
    
                }).catch(error => {
                    console.error(error)
                })

            }
           
         
        }
    };

    function formTitle(id){
        if(id){
            return <h2 className='formTitle'>Update word</h2>
        }
        else{
            return <h2 className='formTitle'>Add word in {language}</h2>
        }
    }

    return (
        <div className='main-div-edit'>
          {formTitle(id)}
            <div className='form-container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='form-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>New word</label>
                                    <input
                                        type='text'
                                        placeholder='Enter new word'
                                        value={word}
                                        className={`form-control ${errors.word ? 'is-invalid' : ''}`}
                                        onChange={handleWord}
                                    />
                                    {errors.word && <div className='invalid-feedback'>{errors.word}</div>}
                                </div>


                                <div className='form-group mb-2'>
                                    <label className='form-label'>Translation</label>
                                    <input
                                        type='text'
                                        placeholder='Enter translation'
                                        value={translate}
                                        className={`form-control ${errors.translate ? 'is-invalid' : ''}`}
                                        onChange={handleTranslate}
                                    />
                                    {errors.translate && <div className='invalid-feedback'>{errors.translate}</div>}
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Language</label>
                                    <input
                                        type='text'
                                        value={language}
                                        className='form-control'  
                                    />
            
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Example</label>
                                    <input
                                        type='text'
                                        placeholder='Enter example'
                                        value={example}
                                        className={`form-control ${errors.example ? 'is-invalid' : ''}`}
                                        onChange={handleExample}
                                    />
                                    {errors.example && <div className='invalid-feedback'>{errors.example}</div>}
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Description</label>
                                    <textarea                                        placeholder='Enter description'
                                        value={description}
                                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                        onChange={handleDescription}
                                    />
                                    {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
                                </div>
                            </form>

                            <button className='add-button' onClick={saveOrUpdateWord}>Submit</button>
                            <button className='menu-button' onClick={()=>navigate(`/language-learn/${language}`)}>Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditWord;

                                       
