import { useState } from 'react';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function SearchButton({ updateJoke }) {

    let [ error, setError ] = useState(false);

    let JOKE_URL = "https://official-joke-api.appspot.com/random_joke";

    let getNewJoke = async() => {
        try {
            let response = await fetch(JOKE_URL);
            let jsonResponse = await response.json();
            let result = {
                statement: jsonResponse.setup,
                answer: jsonResponse.punchline,
            };
            // console.log(result);
            return result;
        } catch(err) {
            throw err;
        };
    };

    let handleOnClick = async(event) => {
        try {
            let newJoke = await getNewJoke();
            updateJoke(newJoke);
        } catch(err) {
            setError(true);
        };
    };

    return (
        <div className="mt-8 mx-auto">
             <Button 
                variant="contained"
                onClick={handleOnClick}
            >
                <EmojiEmotionsIcon />&nbsp;Get a Joke
            </Button>
            {error && <p className="mt-2 text-red-500 text-sm">Some error occured!</p>}
        </div>
    );
}