import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

const initialState ={
    isLoading : true,
    post : {},
    error : "",
}

const reducer = (state , action) =>{
    switch (action.type) {
        case "SUCCESS" :
            return {
                isLoading:false,
                post: action.payload,
                error:""
            }
        case "FAILED":
            return {
            isLoading:false,
            post: {},
            error:"An error occured"
        }
        default :
        return state;
    }
}

const NewGetData = () => {

    const [data , dispatch] = useReducer(reducer, initialState);

    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            dispatch({type : "SUCCESS" , payload:response.data})
            // setIsLoading(false);
            // setPost(response.data)
            // setError("")
        })
        .catch(error => {
            dispatch({type:"FAILED"})
            // setIsLoading(false);
            // setPost({});
            // setError("An error occured")
        })
    }, [])

    return (
        <div>
             {data.isLoading ? "Loading ..." : data.post.body}
             {data.error && data.error}
        </div>
    );
};

export default NewGetData;