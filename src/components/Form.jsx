import React, { useContext, useState } from 'react'
import { Context } from './Context';

const Form = () => {
    let { addreview } = useContext(Context)
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const getInfo = (e) => {
        let { name, value } = e.target
        if (name === "title") {
            setTitle(value)
        }
        else if (name === "body") {
            setBody(value)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newreview = { title, body }
        addreview(newreview)
        setTitle('')
        setBody('')
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={getInfo} />
                <label>Body</label>
                <input type="text" name="body" value={body} onChange={getInfo} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form