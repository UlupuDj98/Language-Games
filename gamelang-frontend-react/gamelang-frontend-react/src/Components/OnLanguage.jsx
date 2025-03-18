import React from "react";
import '../Styles/OnLanguage.css'
import { useParams, useNavigate} from "react-router-dom";

const OnLanguage = () => {
    const {language} = useParams()
    const navigate = useNavigate()
    console.log('Component rendered');
    return (
        <div className="main-div">

        <div className="container-add" onClick={()=>{navigate(`/language-learn/${language}/edit-word`)}}>
            <h2 className="scritta add-text">Insert a new word</h2>
        </div>
        <div className="container-list list-text" onClick={()=>navigate(`/language-learn/${language}/word-list`)}>
            <h2 className="scritta">All learned words</h2>
        </div>

        <div className="container-menu menu-text" onClick={()=>{navigate('/home')}}>
        </div>

        </div>
    );
}

export default OnLanguage