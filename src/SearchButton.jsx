import { useState } from 'react';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function SearchButton({ updateJoke }) {

    let JOKE_URL = "https://official-joke-api.appspot.com/random_joke";

    let getNewJoke = async() => {
        let response = await fetch(JOKE_URL);
        let jsonResponse = await response.json();
        let result = {
            statement: jsonResponse.setup,
            answer: jsonResponse.punchline,
        };
        // console.log(result);
        return result;
    };

    let handleOnClick = async(event) => {
        let newJoke = await getNewJoke();
        updateJoke(newJoke);
    };

    return (
        <div className="mt-8 mx-auto">
             <Button 
                variant="contained"
                onClick={handleOnClick}
            >
                <EmojiEmotionsIcon />&nbsp;Get a Joke
            </Button>
        </div>
    );
}