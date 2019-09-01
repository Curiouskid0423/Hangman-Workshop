const allowMiss = 6;
const wordsLength = 4;

const startGame = async()=>{
   const data = await getPuzzle(wordsLength);
   const selectedPuzzle = new HangM(data.puzzle, allowMiss); // convert to Lower case
   selectedPuzzle.generateHangDOM();
   selectedPuzzle.processGuess();
}
startGame(); // the very first time
document.getElementById('reset').addEventListener('click', startGame);

// callback version

// getCountry('FR', (error, country)=>{
//     if(error){
//         console.log(`Error message: ${error}`);
//     }else{
//         console.log('The Country you are looking for is: ' + country.name);
//     }
// });

// // fetch function passes back a new 'Promise'
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     if(response.status === 200){
//         return response.json();
//     }else{
//         throw new Error('Unable to fetch new puzzle');
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });