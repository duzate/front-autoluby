import { Card } from "../../components/Card";
import { Default } from "../../components/Default";
import { categories } from "../../util/categories";

const Home = () => {
  const user = { name: 'Eduardo' }

  return (
    <Default title={`Bem-vindo, ${user.name}`} subtitle={'Menu'}>
      {
        categories.map(category => (

          <Card
            key={category.id}
            title={category.title}
            subtitle={category.subtitle}
            count={category.count}
            img={category.img}
            link={category.link}
          />

        ))
      }
    </Default>
  )
}

export default Home;
