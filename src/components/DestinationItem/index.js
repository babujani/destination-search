import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {item} = this.props
    const {name, imgUrl} = item
    return (
      <li>
        <img className="image" src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}
export default DestinationItem
