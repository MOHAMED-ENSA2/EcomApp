import React,{useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';


import "./SearchBar.css"

const popularSearch = ["lenovo" , "dell" , "xps" , "nvidea" , "thinkpadd"]

function SearchBar() {
    const [showpopSearch, setPopSearch] = useState(false)
    return (
        
            <form className = "search">
            <OutsideClickHandler
                onOutsideClick={() =>  setPopSearch(false)   }
            >
                <div className="searchBar">
                        <input  
                            className = {showpopSearch ? "searchInput-onclick" : "searchInput"}
                            onClick = {() => setPopSearch(true)} 
                            type="text"
                            placeholder= "search for a product..." 
                        />
                    <button
                        className = {showpopSearch ?  "searchBtn-onclick" : "searchBtn"}
                        type="submit" 
                        value= "search"
                        >
                        <i class="fas fa-search"></i>
                    
                    </button>                    
                </div>
            </OutsideClickHandler>
            <ul 
                className = "popularSearch" 
                style = {{ color : "#999999" , display : showpopSearch ? "block" : "none" }}
            > 
                <div className = "word main-color"> Popular search </div>
                { popularSearch.map( elm  =>  {return(<li>{elm}</li>)}  )}
            </ul>
            </form>
       
    )
}

export default SearchBar
