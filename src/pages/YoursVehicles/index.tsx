import { Default } from "../../components/Default"
import { Table } from "../../components/Table"
import { categories } from "../../util/categories"
import { tables } from "../../util/tables"

const YoursVehicles = () => {
  return (
    <Default title='Seus Veículos' >
      <Table title={categories[0].subtitle} header={tables[0].header} />
    </Default>
  )
}

export default YoursVehicles
