const Home = () => {
    const handleClick = (e) => {
        console.log("Hello Devin", e)
    }

    const heandleClickAgain = (name) => {
        console.log('hello ' + name);
    }

    return (<div className="home">
        <h1>Home Page</h1>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => heandleClickAgain('Deekay')}>Click Me Again</button>
    </div>);
}

export default Home;