import './index.css'

const VisitedItem = props => {
  const {countryDetails, onClickVisited} = props
  const {name, isVisited, id} = countryDetails

  return (
    <li className="item-container">
      <div className="item-inner-container">
        <p className="item-name">{name}</p>
        {isVisited ? (
          <p className="visited">Visited</p>
        ) : (
          <button
            type="button"
            onClick={() => onClickVisited(id)}
            className="visit-btn"
          >
            Visit
          </button>
        )}
      </div>
      <hr className="list-line" />
    </li>
  )
}

export default VisitedItem
