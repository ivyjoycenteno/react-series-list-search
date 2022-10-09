import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import DetailsView from './components/DetailsView'
import AllSeries from './components/list/AllSeries'
import Search from './components/Search'
import SearchSeries from './components/list/SearchSeries'
import PageNotFound from './components/PageNotFound'
import Header from './components/Header'
import Spinner from './components/Spinner'


const App = () => (
  <Router>
    <Search />
    <Header/>
    <Spinner/>
    <Routes>
      <Route path="/" element={<AllSeries />} />
      <Route path="/search/:query" element={<SearchSeries />} />
      <Route path="/details/:id" element={<DetailsView />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
    
  </Router>
)

export default App