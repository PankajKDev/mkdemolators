import PropTypes from "prop-types"

 function Card({cardTitle,cardContent}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border  flex flex-col gap-4 w-full max-w-sm">
    <h1 className="text-2xl font-semibold text-gray-800">{cardTitle}</h1>
    <p className="text-gray-600">
      {cardContent}
    </p>
  </div>
  )
}
Card.propTypes={
  cardTitle:PropTypes.string.isRequired,
  cardContent:PropTypes.string.isRequired
}

export default Card