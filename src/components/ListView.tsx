import React from 'react'
import { ISeries } from '../types/series.type';
import { ReactTabulator } from 'react-tabulator'
import { useNavigate} from 'react-router-dom'
import { tileFormatter } from '../services/helper'
interface PropsType<T> {
    items: ISeries[];
    renderer: (item: ISeries) => React.ReactNode
    page: number
}

interface AbstractItem {
    key?: string
}

const ListView = <T extends AbstractItem>(
    props: PropsType<T>
) => {
    const navigate = useNavigate()

    const columns = [{ title: "", field: ""}]
    const items = props.items.map(item => item.show ? item.show : item)

    const formatter = (row: any) => {
        const data = row.getData()
        const { image, name, id, language, type } = data
 
        const el = row.getElement()
        const imgSrc = image ? image.medium : ''

        el.innerHTML = tileFormatter(imgSrc, name, language, type)
        el.addEventListener("click", () => {
            navigate(`/details/${id}`)
        })
    }

    return (
        <>
        <ReactTabulator
            data={items}
            columns={columns}
            layout={"fitColumns"}
            rowFormatter={formatter}
            pagination={true}
            paginationSize={20}
            paginationInitialPage={props.page}
            paginationCounter={"pages"}
            paginationSizeSelector={true}
        />
        </>
    )
}

export default ListView