import Nav from "./Nav"
import data from "./data"
import Card from "./Card"




export default function App(){
  const cards = data.map(item =>
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


