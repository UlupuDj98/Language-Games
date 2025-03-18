import React from 'react'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import './App.css'
import HomeGame from './Components/HomeGame'
import Header from './Components/Header'
import Footer from './Components/Footer'
import OnLanguage from './Components/OnLanguage'
import EditWord from './Components/EditWord'
import WordList from './Components/WordList'
import WordInfo from './Components/WordInfo'
import WordListDate from './Components/WordListDate'

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Header />

      <Routes>

        {/*Rotte per la home page */}
        <Route path='/' element={<HomeGame/>}></Route>
        <Route path='/home' element={<HomeGame />}></Route>

        {/*Rotte per il menu della lingua selezionata */}
       <Route path='/language-learn/:language' element={<OnLanguage/>}></Route>

        {/*Rotte per l' inserimento e la modifica della word nella lingua selezionata */}
       <Route path='/language-learn/:language/edit-word' element={<EditWord />}></Route>
       <Route path='/language-learn/:language/edit-word/:id' element={<EditWord />}></Route>

        {/*Rotta per le info sulla word memorizzata */}
       <Route path='/language-learn/:language/:id' element={<WordInfo />}></Route>

        {/*Rotta per la lista della word nella lingua selezionata */}
       <Route path='/language-learn/:language/word-list' element={<WordList />}></Route>

        {/*Rotta per la lista della word nella data di inserimento */}
        <Route path='/word-list/:date' element={<WordListDate />}></Route>



      </Routes>

      <Footer />
      </BrowserRouter>
     
    </>
  )
}

export default App
