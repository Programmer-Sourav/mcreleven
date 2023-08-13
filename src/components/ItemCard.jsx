import "../card.css"
import "../buttons.css"

export default function ItemCard({data}){


    return(
        <div>
      <div class="card">
        <img
          src={data.imageURL}
          alt="CardImgDownloaded"
        />
        <div class="card-details">
          <h2>{data.title}</h2>
          <p>{data.summary}</p>
        </div>
        <div>
          <button className="hover-button" onClick={()=>{}}>Star</button>
          <button className="hover-button" onClick={()=>{}}>Add To Watchlist</button>
        </div>
      </div>
    </div>
    )
}