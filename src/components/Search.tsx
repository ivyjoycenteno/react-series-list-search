import { useState, useContext, useEffect, FormEvent } from 'react'
import { store } from '../context/seriesContext'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    const { query } = useParams()
    const [term, setTerm] = useState(query)
    const storeContext = useContext(store)
    const navigate = useNavigate()
    const { dispatch } = storeContext

    useEffect(() => {
        dispatch({ type: 'set_param', payload: term || '' })
    }, [term])

    const handleEvent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const term = (e.currentTarget[0] as HTMLInputElement).value

        setTerm(term)
        if (term) {
            navigate(`/search/${term}`)
            // dispatch({ type: 'set_param', payload: term })
        } else {
            navigate('/')
        }
        
    }
    return (
        <>
            <div className='sr-space-tb-1 sr-text-r'>
                <form onSubmit={handleEvent}>
                    <input className='sr-srch-inp' name='search' type='text' placeholder='Search TV Series' />
                    <button className='sr-btn-srch'>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        </>
    )
}

export default Search;