import './Host.scss'

export default function Host ({name, picture}){
    return (   
    <div className="host">
      <img className="host_picture" src={picture} alt={name} />
      <h3 className="host_name">{name}</h3>
    </div>
      
    )
}