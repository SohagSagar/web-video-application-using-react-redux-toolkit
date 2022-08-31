import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searched } from '../../features/filter/filterSlice'

const Search = () => {
    const navigate = useNavigate()
    const disPatch = useDispatch()
    const { search } = useSelector((state) => state.filter)
    const [input, setInput] = useState(search);
    console.log('object',search);


    function debounce(fn, delay) {
        let timer;
        return (() => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(), delay);
        })();

    };

    // usage
    function searchedText() {
        disPatch(searched(input))
        // navigate('/');
    };

    useEffect(() => {
        debounce(searchedText, 1000);
        // setInput(search)
    }, [input])

    useEffect(()=>{
        if(!search) setInput('')
    },[search])





    return (

        <input
            className="outline-none border-none mr-2"
            type="search"
            name="search"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />

    );
};

export default Search;