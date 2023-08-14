import "./Home.scss"
import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card";
import data from "../../data/data.json"

 export default function Home() {
  
  return (
    <div>
      <Banner/>
      <section className="card-container">
        {/* Map through the 'data' array and render a Card component for each item */}
        {data.map(item => (
          <Card
            key={item.id} //Assign a unique 'key' prop to each Card component
            id={item.id} // Pass the 'id', cover, and title prop to the Card component
            cover={item.cover}
            title={item.title}
          />
        ))}
      </section>
    </div>
  );
}

