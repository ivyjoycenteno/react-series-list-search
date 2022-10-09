import { useEffect, useState, useContext } from 'react'
import ListView from '../ListView'
import { ISeries } from '../../types/series.type'
import DataService from '../../services/data.service'
import { store } from '../../context/seriesContext'

const AllSeries = () => {
    const [page, setPage] = useState(1)
    const { state, dispatch } = useContext(store)
    const [list, setList] = useState<ISeries[]>([])

    useEffect(() => {
        // set default data
        dispatch({type: 'request'})
        DataService.getAll(page)
            .then(r => {
                const data = r.data
                dispatch({type: 'success', results: data})
                setList(data)
            })
            .catch(e =>{
                dispatch({type: 'failure', error: e})
                console.log('Error fetching all data: ', e)
                alert('Error fetching all data: ' + e) // to be improved
            })

    }, [page])

    return (
        <>
            {list.length > 0 &&
                <ListView
                    page={page}
                    items={list}
                    // filterFn={(item) => item.value > 10}
                    renderer={(item: ISeries) => <div>{item.name}</div>}
                />
            }
        </>
    )
}

export default AllSeries