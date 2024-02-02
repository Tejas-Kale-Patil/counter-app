/** @format */

import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
    const [cards, setCards] = useState([]);

    const deleteCounter = (index) => {
        setCards((prevCounters) =>
            prevCounters.filter((items) => {
                return +items.key !== index;
            })
        );
    };

    const addCounter = () => {
        setCards((prev) => [
            ...prev,
            <Counter
                itemNo={prev.length + 1}
                onDelete={() => deleteCounter(prev.length)}
                key={prev.length}
            />,
        ]);
    };

    return (
        <>
            <div>
                <button className="btn btn-dark bg-black" onClick={addCounter}>
                    Add Count
                </button>

                <div className="my-4 text-white">
                    <div className="row my-3">
                        {cards.length > 0 ? (
                            cards.map((item) => item)
                        ) : (
                            <p className=" text-white">Click on Add Counter</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
