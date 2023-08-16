import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import data from "../../data/data.json";
import HomeImage from '../../assets/home_pic.jpg';


export default function Home() {
  return (
    <>
      {/* Utilisation de la composante Banner pour afficher une bannière avec l'image d'accueil */}
      <Banner bannerImage={HomeImage} bannerTitle="Chez vous, partout et ailleurs" />
      <section className="card-container">
        {/* Utilisation de la méthode map pour itérer à travers chaque élément dans le tableau 'data' */}
        {data.map(item => (
          // Affiche une composante Card pour chaque élément avec les propriétés correspondantes
          <Card
            key={item.id} // Attribue une prop 'key' unique à chaque composante Card
            id={item.id} // Transmet les propriétés 'id', 'cover' et 'title' à la composante Card
            cover={item.cover}
            title={item.title}
          />
        ))}
      </section>
    </>
  );
}
