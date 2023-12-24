
const SearchBox = ({searchText})=>{
    return (
        <div className="pa2 ma4">
            <input className="tc br-pill pa2 ba bg-lightest-blue" 
            type="search" placeholder="Search Items"
            onChange={searchText} />
        </div>
    )
}

export default SearchBox;