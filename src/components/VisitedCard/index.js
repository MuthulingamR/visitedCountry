import './index.css'

const VisitedCard = props => {
  const {cardDetails, onClickVisited} = props
  const {imageUrl, name, id} = cardDetails

  return (
    <li className="card-container">
      <img src={imageUrl} className="flag-img" alt="thumbnail" />
      <div className="inner-card-container">
        <p className="card-name">{name}</p>
        <button
          className="remove-btn"
          onClick={() => onClickVisited(id)}
          type="button"
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCard
