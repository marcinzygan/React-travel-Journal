import Nav from "./Nav"
import Card from "./Card"

import apiData from "./data"


export default function App(){
  const cards = apiData.map(item =>
    <Card
    key={item.id}
    {...item}
    />
    )


  return(
    <>
    <Nav/>
    <div className="card__container">
      {cards}
    </div>
    </>
  )
  
}


