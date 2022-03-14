export default function Card(props){
    
    return(
<>
        <div className="card">
           <img src={props.imageUrl} className="card__img"></img>
            <div className="card__info-container">
                <div className="location__container">
                <span className="iconify" data-icon="carbon:location-filled"></span>
                <p className="location">{props.location}</p>
                <a href={props.googleMapsUrl} className="google__link">View on Google Maps</a>
                </div>
                <p className="card__title">{props.title}</p>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
            
        </div>
        <div className="card__line"></div>
</>
    )
}


// console.log(lastCard.lastElementChild);

// lastCard.removeChild(lastCard.lastElementChild)
    // console.log(lastCard.lastChild);

