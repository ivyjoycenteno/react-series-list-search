
import { useContext, useEffect, useState } from 'react'
import { store } from '../context/seriesContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
const Spinner = () => {
    const { state } = useContext(store)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if(state.status === 'loading') {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [state.status])

    return (
        <>
        { isLoading &&
            <FontAwesomeIcon icon={faSpinner} spin className="sr-loading"/>
        }
        </>
    )
}

export default Spinner