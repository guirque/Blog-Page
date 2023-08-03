export function Searchbar()
{
    return (
        <div id="search-bar">
            <i className="fa-solid fa-location-dot"></i> 
            <input type="textfield" placeholder="Search..."/>
            <input id="search-button" type="button" value="Search"/>
        </div>
    );
}