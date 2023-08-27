// Write your code here.

import './index.css'

const CardItem = props => {
  const {key, cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`box ${className}`}>
      <h1 className="cardHeading">{title}</h1>
      <p className="para">{description}</p>
      <img className="cardImage" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
