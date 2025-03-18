const Word = require("../models/word")
const mongoose = require('mongoose');
const dateFormatter = require("./functions/basicFunctions");
const ObjectId = mongoose.Types.ObjectId; // Aggiungi questa riga



const getAllWords = async (req,res) => {
            try {
                const words = await Word.find().sort(); 
                res.status(200).json(words);
            } catch (err) {
                console.error('Error fetching documents ', err);
                res.status(500).json({ error: 'Could not fetch the documents' });
            }

}


const getWordById = (req,res) => {
     if(!ObjectId.isValid(req.params.id)){
                return res.status(400).json({err : 'Invalid ID format'})
              
            }
            Word.findOne({_id : new ObjectId(req.params.id)})
            .then(doc => {
                if(doc){
                    res.status(200).json(doc)
                }else{
                    res.status(400).json({error : "Document not found"})
                }
               
            })
            .catch(err => {
                console.error('error ', err)
                res.status(500).json({error : "Could not fetch the document"})
            })
}

const addWord = (req,res) => {
    const word = req.body
    Word.create(word)
        .then(result => {
            res.status(201).json(result)
            console.log(result)
        })
        .catch(err => {
            res.status(500).json({err : 'Could not create document'})
        })
}

const updateWord = (req,res) => {
    const word = req.body
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).json({message : "Document with ID " + req.params.id +" not valid!"})
    }

    // Controlla se ci sono campi nel corpo della richiesta
    if (Object.keys(word).length === 0) {
    return res.status(400).json({ message: "No fields to update" });
        }

    Word.updateOne({_id : new ObjectId(req.params.id)} , {$set : word})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({message : "Could not update the document"})
        })

}

const deleteWord = (req,res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).json({error : "Invalid ID format"})
    }

    Word.deleteOne({_id: new ObjectId(req.params.id)})
        .then(result => {
            if(result.deletedCount === 0){
                return res.status(404).json({error : "Document not found"})
            }
            res.status(200).json({message : "Document with ID  " +req.params.id + " deleted"})
        })
        .catch(err => {
            console.error('Error deleting document ',err)
            res.status(500).json({error : 'Could not delete the document'})
        })

}

const getWordsPerDate = async (req,res) => {
    try{
        const date = req.params.date
        const words = await Word.find().sort()
        const filteredWords = []
        //ora voglio trasformare la data delle word con dateFormatter usando un ciclo
        //  e confrontarla con date per poi riempire un array chiamato filtereWords
        words.forEach(word => {
            const wordDate = new Date (word.date)
            const formattedDate = dateFormatter(wordDate)

            if(formattedDate === date){
                filteredWords.push(word)
            }
        })
        res.json(filteredWords)

    }catch(error){
        console.error(error)
        res.status(500).json({message: 'Could not fetch documents'})
    }
    

}

const getWordsByLanguage = async (req,res) => {
    try{
        const language = req.params.language

        if (!language) {
            return res.status(400).json({ message: 'Language parameter is required' });
        }
        
        const words = await Word.find().sort()
        const filteredWords = []

        words.forEach(word => {
            if(word.language.toLowerCase() === language.toLowerCase()){
                filteredWords.push(word)
            }
        })
        res.status(200).json(filteredWords)

    }catch(error){
        console.error(error)
        res.status(500).json({message : 'Error during fetching documents'})
    }
   
}

module.exports = {
    getAllWords,
    getWordById,
    addWord,
    updateWord,
    deleteWord,
    getWordsPerDate,
    getWordsByLanguage

}