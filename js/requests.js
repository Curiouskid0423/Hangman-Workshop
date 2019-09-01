const getPuzzle = async(wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if(response.status === 200){
        const data = await response.json();
        return data;
    }else{
        throw new Error('Response status in getPuzzle not 200');
    }
}




// const getPuzzleOld = (wordCount) => {
    //     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=>{
    //         if(response.status === 200){
    //             return response.json();
    //         }else{
    //             console.log('Successfully loaded by status not 200');
    //         }
    //     });
    // }


// get country Practice

    // const getCountry = async (country) => {
    //     const response = await fetch('https://restcountries.eu/rest/v2/all');
    //     if(response.status === 200){
    //         const data = await response.json();
    //         return data.find((item)=> item.alpha2Code === country);
    //     }else{
    //         console.log('error in response status');
    //     }
    // }

    // const getIPad = async() => {
    //     const response =  await fetch('http://ipinfo.io/json?token=11d62c08b3afdf');
    //     if(response.status === 200){
    //         return response.json();
    //     }else{
    //         console.log('I wanna sleep');
    //     }
    // }

// Paste this in app.js file

    // getCountry('FR').then((data)=>{
    //     console.log(data.name);
    // }).catch((error)=>{
    //     console.log(error);
    // });

    // getIPad().then((data)=>{
    //     console.log('City: ' + data.city);
    //     console.log('Country: ' + data.region.toLowerCase());
    // });

// Old version of getPuzzle (without Promise)

    // const getPuzzle = (wordCount) => new Promise((resolve, reject)=>{
    //     const request = new XMLHttpRequest();
    //     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    //     request.send();
    //     request.addEventListener('readystatechange', (e)=>{
    //         if(e.target.readyState === 4 && e.target.status === 200){ //status is a quick way of knowing if the request is effective
    //             const data = JSON.parse(e.target.responseText);
    //             resolve(data.puzzle); 
    //         }else if(e.target.readyState === 4){
    //             reject('An error has taken place')
    //         }
    //     });
    // });


