/** @format */

import React, { useEffect, useRef, useState } from "react";

function Counter({onDelete}) {
    const [isRunning, setIsRunning] = useState(true);
    const [isUp, setIsUp] = useState(true);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(updateCount, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, isUp]);

    const updateCount = () => {
        setElapsedTime((prev) => (isUp ? prev + 1 : prev - 1));
    };

    const formatTime = (time) => {
        return time;
    };
    return (
        <>
            <div className="col-lg-3 col-md-6 col-12 my-2">
                <div className="card p-2 bg-transparent border-light-subtle">
                    <h3 className="text-white">{formatTime(elapsedTime)}</h3>
                    <div className="row justify-content-evenly">
                        <button
                            className="btn btn-secondary my-2"
                            style={{ width: "max-content" }}
                            onClick={() => setIsRunning((prev) => !prev)}
                        >
                            {isRunning ? "Pause" : "Play"}
                        </button>
                        <button
                            className="btn btn-secondary my-2"
                            style={{ width: "max-content" }}
                            onClick={() => setIsUp((prev) => !prev)}
                        >
                            {!isUp ? "up" : "down"}
                        </button>
                        <button
                            className="btn btn-secondary my-2"
                            style={{ width: "max-content" }}
                            onClick={() => onDelete()}
                        >
                            delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Counter;
