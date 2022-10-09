import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ISeries } from '../../types/series.type'
import DataService from '../../services/data.service'
import { store } from '../../context/seriesContext'

const MainDetail = () => {
    const { id } = useParams()
    const storeContext = useContext(store)

    const initialState: ISeries = {
        url: '',
        name: '',
        summary: '',
        image: {
            medium: '',
            original: '',
        },
        schedule: {
            days: [],
            time: '',
        },
        status: '',
        officialSite: '',
        type: '',
        genres: [],
        webChannel: null,
    }

    const [details, setDetails] = useState(initialState)
    const [isError, setError] = useState(false)
    useEffect(() => {
        const { state, dispatch } = storeContext
        const mappedData = state.data?.filter(detail => { detail.id + '' === id })

        if (mappedData && mappedData.length > 0) {
            setDetails(mappedData[0])
            dispatch({ type: 'set_details', resultDetails: mappedData[0] })
        } else {
            if (id) {
                dispatch({ type: 'request' })
                DataService.get(id)
                    .then(r => {
                        const data = r.data
                        dispatch({ type: 'set_details', resultDetails: data })
                        setDetails(data)
                    })
                    .catch(e => {
                        dispatch({ type: 'failure', error: e })
                        console.log('Error fetching details data: ', e)
                        alert('Error fetching details data: ' + e) // to be improved
                        setError(true)
                    })
            }
        }
    }, [])

    return (
        <>
            {isError ?
                <div className='sr-err'>Shows: No data found.</div>
                :
                <div>
                    <h2>{details.name}</h2>
                    <div className='sr-dt-wrapper'>
                        <div className='sr-dt-img'>
                            <img className='img-tg' src={details.image?.medium} />
                        </div>
                        <div className='sr-dt-summ'>
                            {details.summary}
                        </div>
                        <div className='sr-dt-info'>
                            <h3>Information:</h3>
                            <ul>
                                <li>
                                    <label>Web Channel: </label>
                                    {details.webChannel ? details.webChannel?.name : ''}
                                </li>
                                <li>
                                    <label>Schedule: </label>
                                    {
                                        details.schedule.days.map((r: string, i: number) =>
                                            <span key={i}> {r} </span>
                                        )
                                    }
                                    {details.schedule.time || ''}
                                </li>
                                <li>
                                    <label>Status: </label>
                                    {details.status || ''}
                                </li>
                                <li>
                                    <label>Show Type: </label>
                                    {details.type || ''}
                                </li>
                                <li>
                                    <label>Genres: </label>
                                    {
                                        details.genres.map((r: string, i: number) =>
                                            <span key={i}> {r} | </span>
                                        )
                                    }
                                </li>
                                <li>
                                    <label>Official Site: </label>
                                    <a href={details.officialSite || ''}>{details.officialSite || ''}</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MainDetail



