
// Lowercase, trim, and remove non-letter characters
function normalizeString(s:string){
    s = s.toLowerCase();
    s = s.replace("á", "a")
    s = s.replace("é", "e")
    s = s.replace("í", "i")
    s = s.replace("ó", "o")
    s = s.replace("ú", "u")
    s = s.replace("ü", "u")
    // Replace all non ascii characters
    s = s.replace(/[^a-z\s]/gi, "")

    return s
}
    
    

function cleanTextToWords(text:string):any{
    let ignore_letters = [
        ".", "?", "¡", "!", "¿", ",", "de", "en", "la", "el",
        "que", "un", "una", "etc", "amigo", "y", "pregunta",
        "duda", "a", "vi", "con", "i", "e", "o", "u",
        ]
    
    // nltk.word_tokenize(normalizeString(text))
    let words = normalizeString(text).split(" ")

    return words
}
    

export const bag_of_words = (sentence:string, words:string[]) =>{
    let sentence_words:string[] = cleanTextToWords(sentence)
    let bag:number[] = []
    let len_words:number = words.length;

    for (let index = 0; index < len_words; index++) {
        bag.push(0);        
    }
    console.log("DEBUG: ", sentence_words, words)
    for (let index = 0; index < sentence_words.length; index++) {
        const w = sentence_words[index];

        for (let j = 0; j < words.length; j++) {
            const vocabularyWord:string = words[j];
            // TODO: Add the same string processing as in python
            if((w.startsWith(vocabularyWord) && Math.abs(w.length-vocabularyWord.length) < 3) || (w == vocabularyWord)){
                bag[j] = 1;
                break;
            }
            
        }
        
    }
    
    return bag;
}