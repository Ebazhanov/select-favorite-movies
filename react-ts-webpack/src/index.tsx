import React, {Fragment, useState} from 'react'
import ReactDOM from 'react-dom'

export default function App(): JSX.Element {
    const [value, setValue] = useState('');
    debugger;
    return (
        <Fragment>
            <h1>Todo List</h1>
            <form>
                <input type='text'/>
                <button type = 'submit'> Add Todo</button>
            </form>
        </Fragment>
    )
}

const root = document.getElementById('app-root');

ReactDOM.render(<App/>, root);
