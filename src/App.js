import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import AdPage from './components/AdPage';
import 'semantic-ui-css/semantic.min.css'

function App() {
  //!Create State Variable for handling all the information provided from server
  const [allAds, setAllAds] = useState([])

  //!create a UseEffect Function that fetches Data from json server for all adds for the (4) different platforms:
  useEffect(() => {
      fetch("http://localhost:3000/fakeDataSet")
      .then((r)=>{
      if (r.ok) {
          r.json().then((platforms) => {

              //!Using the standardized function above, pass aplicable informatino from each platform(FB, Twitter, SnapChat, GoogleAnalytics)
              //*Facebook
              const standardizedFacebook = platforms.facebook_ads?.map((eachAdd)=>{
                return standardizeAdFunction(
                  eachAdd.campaign_name, 
                  eachAdd.media_buy_name, 
                  eachAdd.ad_name, 
                  eachAdd.spend, 
                  eachAdd.impressions, 
                  eachAdd.clicks)
              })
              //*Twitter
              const standardizedTwitterAds = platforms.twitter_ads?.map((eachAdd)=>{
                return standardizeAdFunction(
                  eachAdd.campaign,
                  eachAdd.ad_group,
                  eachAdd.image_name,
                  eachAdd.spend,
                  eachAdd.impressions,
                  eachAdd.post_clicks
                )
              })
              //*SnapChat
              const standardizedSnapchatAds = platforms.snapchat_ads?.map((eachAdd)=>{
                return standardizeAdFunction(
                  eachAdd.campaign_name,
                  eachAdd.ad_squad_name,
                  eachAdd.creative_name,
                  eachAdd.cost,
                  eachAdd.impressions,
                  eachAdd.post_clicks
                )
              })
              //*Google
              const standardizedGoogleAds = platforms.google_analytics?.map((eachAdd)=>{
                return {
                  "campaign":eachAdd.utm_campaign,
                  "adset":eachAdd.utm_medium,
                  "creative":eachAdd.utm_content,
                  "spend":0,
                  "impressions":0,
                  "clicks":0,
                  "results":eachAdd.results
                }
              })

              //!Create ONE Array for All Ads that can be used throughout the app
              const allPlatformAds = [].concat(standardizedFacebook,standardizedSnapchatAds,standardizedTwitterAds,standardizedGoogleAds)
              setAllAds(allPlatformAds)
          })
      }
      });
  },[])

  //!Create a function to manipulate Each of the platforms to provide ONE data array that can be used throughout the rest of the program
  const standardizeAdFunction = (campaign,adset,creative,spend,impressions,clicks) => {
    return {
      "campaign":campaign,
      "adset":adset,
      "creative":creative,
      "spend":spend,
      "impressions":impressions,
      "clicks":clicks,
      "results":0
    }
  }


  //!Return one component called Ads Page and pass through the combined list standardized list of all Ads from each platform
  return (
    <div className="App">
      <AdPage allAds = {allAds} />
    </div>
  )  
}

export default App;
