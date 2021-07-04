import React, {useState} from 'react'
import './search.css';
import { useHistory } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../reducer';

function Search({hideButtons=false}) {

    const [{}, dispatch] = useStateValue();
    const history = useHistory();
    const [input,setInput] = useState("");
    const search = (e) => {
        e.preventDefault();
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })

        history.push('/search')
    };
    return (
        <form className='search'>
            <div className='search_input'>
                <SearchIcon className='search_inputIcon' />
                <input value={input} onChange={
                    e=>setInput(e.target.value)
                } />
                <MicIcon />
            </div>
            {!hideButtons?(
                <div className='search_buttons'>
                    <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                    <Button variant='outlined'>I'M FEELING LUCKY</Button>
                </div>
            ):(
                    <div className='search_buttons'>
                        <Button className='search_buttonsHidden' 
                        type='submit' onClick={search} variant='outlined'>Google Search</Button>
                        <Button className='search_buttonsHidden' type='submit' 
                        variant='outlined'>I'M FEELING LUCKY</Button>
                    </div>
            )}

            
        </form>
    );
}

export default Search;
