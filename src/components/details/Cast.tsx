import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ICast } from '../../types/series.type'
import DataService from '../../services/data.service'
import { initCasts } from '../../services/initial.state'
import { store } from '../../context/seriesContext'


const Casts = () => {
    const [casts, setCasts] = useState([initCasts])
    const { id } = useParams()
    const { dispatch } = useContext(store)
    const [isError, setError] = useState(false)

    useEffect(() => {
        if (id) {
            dispatch({ type: 'request' })
            DataService.getCasts(id)
                .then(r => {
                    const data = r.data
                    setCasts(data)
                })
                .catch(e => {
                    dispatch({ type: 'failure', error: e })
                    console.log('Error fetching cast data: ', e)
                    alert('Error fetching cast data: ' + e)
                    setError(true)
                })
        }
    }, [])

    return (
        <>
            {isError || casts.length < 1
                ?
                <div className='sr-err'>Casts: No data found.</div>
                :
                <div className='sr-flex sr-cast-wrapper'>
                    <h2 className='sr-w-full'>The Casts</h2>
                    <div className='sr-cs-thumbn-wrap'>
                        {casts.map((cast: ICast, i: number) => {
                            const { character, person } = cast
                            const { image } = character
                            return (
                                <div key={i} className='sr-flex sr-cs-thumbn'>
                                    <div className='cs-thumn-cont'>
                                        <img className="img-tg sr-thumbn-img" src={image?.medium} />
                                    </div>
                                    <div className='sr-cs-desc'>
                                        <div className='sr-rl-name'>{person?.name || ''}</div>
                                        <div className='sr-chr-name'>as {character.name}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
}

export default Casts