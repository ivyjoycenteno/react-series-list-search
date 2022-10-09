import { useEffect, useState, useContext } from 'react'
import ListView from '../ListView'
import { ISeries } from '../../types/series.type'
import DataService from '../../services/data.service'
import { store } from '../../context/seriesContext'
import { useParams } from 'react-router-dom'

const SearchSeries = () => {
    const [page, setPage] = useState(1)
    const { dispatch } = useContext(store)
    const [list, setList] = useState<ISeries[]>([])
    const {query} = useParams()

    useEffect(() => {
        const searchTerm = query
        if (searchTerm) {
            dispatch({ type: 'request'})
            DataService.getSearch(searchTerm)
                .then(r => {
                    const data = r.data
                    const dataMap = data.map(r => r.show)
                    setList(dataMap)
                    dispatch({ type: 'success', results: dataMap })
                })
                .catch(e => {
                    dispatch({ type: 'failure', error: e })
                    console.log('Error searching data:', e)
                    alert('Error searching data:' + e) // to be improved
                })
        }
    }, [query])

    return (
        <>
            {list.length > 0 ?
                <ListView
                    page={page}
                    items={list}
                    renderer={(item: ISeries) => <div>{item.name}</div>}
                />
                :
                <div className='sr-err'>Shows: No data found.</div>
            }
        </>
    )
}

export default SearchSeries