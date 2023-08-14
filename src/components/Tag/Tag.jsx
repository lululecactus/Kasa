import './Tag.scss'

export default function Tag ({tags}){
    return (   
    <div className="tags">
      {tags.map((tag, index) => (
        <button key={index} className="tags_name">
          {tag}
        </button>
      ))}
    </div> 
    )
};