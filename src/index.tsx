import App from './App'
import { SeriesProvider } from './context/seriesContext'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <SeriesProvider>
        <App />
    </SeriesProvider>
)