import React, { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Devin');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName("DeeKay");
        setAge(26);
    }

    return (<div className="home">
        <h1>Home Page</h1>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click Me</button>
    </div>);
}

export default Home;