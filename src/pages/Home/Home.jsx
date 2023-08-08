import "./Home.scss";
// Import du composant de bannière 
import Banner from "../../components/Banner/Banner";
// Import du composant card
import Card from "../../components/Card/Card";
// Import des données
import data from "../../data/data.json";


export default function Home() {
  return (
    <>
      <Banner />
      <section className="card-container">
        {data.map(item => (
          <Card
            key={item.id} // Propriété unique 'key' pour aider React à identifier les éléments lors de la mise à jour
            id={item.id} // Propriété 'id' de l'élément
            cover={item.cover} // Propriété 'cover' de l'élément
            title={item.title} // Propriété 'title' de l'élément
          />
        ))}
      </section>
    </>
  );
}
