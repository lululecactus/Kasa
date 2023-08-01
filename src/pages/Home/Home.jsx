import "./Home.scss"
import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card";
import data from "../../data/data.json"

function Home() {
  
  return (
    <div>
      <Banner/>
      <section className="card-container">
        {data.map(item => (
          <Card
            key={item.id}
            id={item.id}
            cover={item.cover}
            title={item.title}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;