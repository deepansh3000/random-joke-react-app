export default function JokeContainer({ joke }) {
    return (
        <>
            <div className="mt-4 font-sans text-lg">
                <h1 className="w-full font-normal">{joke.statement}</h1>
                <h2 className="w-full mt-2 font-semibold">{joke.answer}</h2>
            </div>
        </>
    );
}