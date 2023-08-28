//!Import Card form Semantic for quick effective display
import { Card } from "semantic-ui-react";


const AdCard = ({eachAd}) => {

    //!Destructure each ad 
    const {campaign, adset, creative, spend, impressions, clicks, results} = eachAd

    return(
        <Card>
            <Card.Content textAlign="left">
                <Card.Description >
                    <strong>Campaign: </strong>{campaign}                
                </Card.Description>
                <Card.Description>
                    <strong>Adset: </strong>{adset}                
                </Card.Description>
                <Card.Description>
                    <strong>Creative: </strong>{creative}                
                </Card.Description>
                <Card.Description>
                    <strong>Spend: </strong>{spend}                
                </Card.Description>
                <Card.Description>
                    <strong>Impressions: </strong>{impressions}                
                </Card.Description>
                <Card.Description>
                    <strong>Clicks: </strong>{clicks}                
                </Card.Description>
                <Card.Description>
                    <strong>Results: </strong>{results}                
                </Card.Description>

            </Card.Content>
        </Card>
    )
}

export default AdCard;