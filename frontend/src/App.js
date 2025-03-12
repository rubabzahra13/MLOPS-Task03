import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8000/")
            .then(res => res.json())
            .then(data => {
                setMessage(data.message);
                setCount(data.count);
            });
    }, []);

    return (
        <div>
            <h1>{message}</h1>
            <p>This page has been visited {count} times.</p>
        </div>
    );
}

export default App;
