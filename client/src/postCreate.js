import React, { useState } from 'react';
import axios from 'axios'


export default () => {
    const [title, setTitle] = useState('');
    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('http://localhost:4002/post', { title })
        console.log(res)

    }
    return <div>
        <form onSubmit={onSubmit}>
            <div className="fromgroup">
                <label>
                    Title
                </label>
                <input
                    value={title}
                    onChange={e =>
                        setTitle(e.target.value)
                    }
                    className="form-control">

                </input>
            </div>

            <button className="btn btn-primary">Submit</button>
        </form>

    </div>
}