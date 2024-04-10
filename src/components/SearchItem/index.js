const SearchItem = props => {
  const {data} = props
  return (
    <li key={data.id}>
      <img src={data.posterPath} alt={data.title} />
    </li>
  )
}

export default SearchItem
