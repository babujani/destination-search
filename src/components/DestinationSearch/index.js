import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  searchItem = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {initialDestinationsList} = this.props
    const results = initialDestinationsList.filter(itemsList =>
      itemsList.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="pg-bg">
        <div className="search-container">
          <h1>Destination Search</h1>
          <div className="search-box">
            <input
              type="search"
              placeholder="Search"
              onChange={this.searchItem}
              value={searchInput}
            />
            <img
              alt="ssearch icon"
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="cards-container">
            {results.map(eachitem => (
              <DestinationItem item={eachitem} key={eachitem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
