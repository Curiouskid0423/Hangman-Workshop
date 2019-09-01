// const userInput = document.getElementById('userInput');
const hangman = localStorage.getItem('hangman');

//instance --> HangM.prototype --> Object.prototype --> null
class HangM{
    constructor(word, missGuess){
        this.word = word.toLowerCase().split(''),
        this.missGuess = missGuess,
        this.guessedLetters = [],
        this.status = 'playing' //default
    }
    // 1. prototype get the Puzzle with ****    
    get puzzle(){
        let puzzle = '';
        this.word.forEach((letter)=>{
            if(this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter;
            }else{
                puzzle += '*';
            }
        });
        return puzzle;
    }
    // 2. prototype generateHangDOM
    generateHangDOM(){
        const currentQues = document.createElement('h4');
        const guessRemainDiv = document.getElementById('guessesRemain');
        // clear tags for further display
        document.getElementById('showQuestion').innerHTML = '';
        guessRemainDiv.innerHTML = '';
        this.puzzle.split('').forEach((letter)=>{
            const letterEl = document.createElement('span');
            letterEl.textContent = letter;
            document.getElementById('showQuestion').appendChild(letterEl);
        });
        // currentQues.textContent = this.puzzle;
        // document.getElementById('showQuestion').appendChild(currentQues);
        guessRemainDiv.innerHTML = this.missGuess;
    }

    // 3. processGuess
    // to push miss guess into array, to subtract the remaining guess
    processGuess(){
        window.addEventListener('keypress', (e) => {
            console.log(e.key);
            const isUnique = !this.guessedLetters.includes(e.key);
            // const isAlphabet = e.target.value.length === 1;
            const isBadGuess = !this.word.includes(e.key);
            
            if(e.key){
                if(isUnique && this.missGuess){
                    this.guessedLetters.push(e.key);
                    saveItem(this);
                    if(isBadGuess){
                        this.missGuess--;
                    }
                    this.recalculateStatus();
                    this.generateHangDOM();
                }
            }
            return this.puzzle;
        });
    }
    // 4. re-calculate status:   playing / failed / finished
    recalculateStatus(){
        if(this.missGuess === 0){
            this.status = 'failed';
            this.displayResult();
        }else{
            let isFinished = (this.puzzle.includes('*'))? false:true;
            if(isFinished){
                this.status = 'finished';
                this.displayResult();
            }
        }
    }
    //5. display result
    displayResult(){
        switch(this.status){
            case 'playing':
                break;
            case 'failed':
                // document.getElementById('hangmanForm').style.display = 'none'; // remove the input field
                document.getElementById('showResult').innerHTML = `<h3>Nice try! The word is \"${this.word.join('')}\"</h3>`;
                break;
            case 'finished':
                // document.getElementById('hangmanForm').style.display = 'none'; // remove the input field
                document.getElementById('showResult').innerHTML = '<h3>You won!</h3>';
                break;
            default:
                alert('Unexpected error!');
                break;
        }
    }
}

const saveItem = (item) => {
    localStorage.setItem('hangman', JSON.stringify(item));
}

