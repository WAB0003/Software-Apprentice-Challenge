import { useState, useEffect } from "react";
import AdCard from "./AdCard";
import { Card } from "semantic-ui-react";
import SearchArea from "./SearchArea";

const AdPage = ({allAds}) => {

    const [searchCampaign, setSearchCampaign] = useState("")
    const [spendSort, setSpendSort ] = useState("")


    //!Filter out all items that are being searched in the input found in the SearchArea Component. If nothing is searched, return All
    const seachedItems = allAds.filter((eachAd)=>{
        if (searchCampaign==="") {
          return true
        }else{
          return eachAd.campaign.toLowerCase().includes(searchCampaign.toLowerCase()) //Add lower case so that search works better
        }
      })

    //!Take all items that have been searched and sort based on Ascending, Descending, or Nothing (if cleared)
    if (spendSort === "ascending"){
        seachedItems.sort(function(a,b){return a.spend - b.spend})
    }else if (spendSort === "descending") {
        seachedItems.sort(function(a,b){return b.spend - a.spend})

    }
    
    //!Take the final sorted items and map through them to display each card

    const addsToDisplay = seachedItems?.map((eachAd, index)=>{
        return <AdCard key={index} eachAd={eachAd} />
    })


    //!Return (2) components: SearchBar and AddDisplay
    return(
        <div>
            <SearchArea searchCampaign={searchCampaign} setSearchCampaign={setSearchCampaign} setSpendSort={setSpendSort} />
            <Card.Group >
                {addsToDisplay}
            </Card.Group>
        </div>
    )
}

export default AdPage;