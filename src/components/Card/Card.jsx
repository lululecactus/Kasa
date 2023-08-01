import'./Card.scss'
export default function Card({ id, cover, title }) {
    return (
      <article className="card-lease">
        <div className='card-lease_overlay'></div>
          <img className="card-lease_img" src={cover} alt={title} />
          <h2 className="card-lease_title">{title}</h2>
      </article>
    );
  }
  