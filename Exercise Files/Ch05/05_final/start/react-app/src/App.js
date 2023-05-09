import "./App.css";
import {useState} from "react";

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    return [
        {value, onChange: (event) => setValue(event.target.value)},
        () => setValue(initialValue)
    ]
}
function App() {

    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput('#000000');

    const submitHandler = (e) => {
        e.preventDefault();

        alert(`${titleProps.value} ${colorProps.value}`);

        resetTitle();
        resetColor();
    };
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                {...titleProps}
                placeholder="Enter Color Title"
            />
            <input
                type="color"
                {...colorProps}
            />
            <button>Add</button>
        </form>
    );
}

export default App;
