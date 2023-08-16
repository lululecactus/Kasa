import './Tag.scss';

export default function Tag({ tags }) {
  return (
    <ul className="tags">
      {/* Utilisation de la méthode map pour itérer à travers chaque tag dans le tableau 'tags' */}
      {tags.map((tag, index) => (
        <li key={index} className="tags_name">
          {tag}
        </li>
      ))}
    </ul>
  );
}
