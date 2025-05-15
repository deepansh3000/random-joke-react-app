import { useState } from 'react';
import SearchButton from "./SearchButton";
import JokeContainer from './JokeContainer';

export default function JokeBox() {

    let [ joke, setJoke ] = useState({
        statement: "Why does a Moon-rock taste better than an Earth-rock?",
        answer: "Because it's a little meteor.",
    });

    let updateJokeInfo = (newJoke) => {
        // console.log(newJoke);
        setJoke(newJoke);
    };

    return (
        <>
            <h1 className="font-serif text-center text-5xl mt-8 font-semibold">Random Joke</h1>
            <div className="w-1/3 h-[200px] mt-6 mx-auto bg-trasnparent text-center border rounded-xl ">
                <JokeContainer joke={joke}/>
                <SearchButton updateJoke={updateJokeInfo}/>
            </div>
        </>
    );
}