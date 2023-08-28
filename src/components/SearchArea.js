import { useState } from "react";
import { Button, Input } from "semantic-ui-react";


const SearchArea = ({searchCampaign, setSearchCampaign, setSpendSort}) => {

    //!HandleSearch is controlled input
    const handleSearch = (e) => {
        setSearchCampaign(e.target.value)
    }

    const handleSortAscending = () => {
        setSpendSort("ascending")
    }

    const handleSortDescending = () => {
        setSpendSort("descending")
    }

    const handleClear = () => {
        setSpendSort("")
    }

    return (
        <div style={{display: "flex", justifyContent: "space-between", paddingRight:"10%", paddingLeft:"10%", paddingBottom:"50px"}}>
            <div>
                <h1>Sort Cards by "Send"</h1>
                <Button onClick={handleSortAscending} >Ascending</Button>
                <Button onClick={handleSortDescending} >Descending</Button>
                <Button onClick={handleClear} >Clear</Button>
            </div>
            <div >
                <h1>Search By Campaign</h1>
                <Input onChange={handleSearch} value={searchCampaign} />
            </div>
        </div>
    )
}

export default SearchArea;