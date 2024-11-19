import React, { useState, useEffect, createContext } from 'react'

export const Context = createContext();

const ContextApi = ({ children }) => {
    const [posts, setPosts] = useState([])
    let url = "https://jsonplaceholder.typicode.com/posts"
    useEffect(() => {
        const getApi = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setPosts(data)
                console.log(data)
            }
            catch (error) {
                console.log(`Error: ${error}`)
            }
        }
        getApi()
    }, [url])
    const addreview = async (newreview) => {
        let url = "https://jsonplaceholder.typicode.com/posts"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newreview),
        })
        const data = await response.json()
        setPosts(prevValue => {
            return [data, ...prevValue]
        })

    }
    const deleteReview = async (id) => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            let url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const response = await fetch(url, {
                method: 'DELETE',
            })
            if (response.ok) {
                setPosts(prevValue => {
                    return prevValue.filter((x) => x.id !== id)
                })
            }
        }
    }
    return (
        <Context.Provider value={{ posts, setPosts, addreview, deleteReview }}>
            {children}
        </Context.Provider>
    )
}

export default ContextApi