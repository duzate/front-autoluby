import { useEffect, useState } from "react"
import { Default } from "../../components/Default"
import { Table } from "../../components/Table"
import { useApi } from "../../hooks/useApi"
import { categories } from "../../util/categories"
import { tables } from "../../util/tables"

export type ResponseProps = {
  id: string,
  marca: string,
  modelo: string,
  km: string,
  ano: string,
  cor: string,
  status: string,
  chassi: string,
  price: string
}

const AllVehicles = () => {
  const api = useApi()

  useEffect(() => {
    (async () => {
      try {
        const response = await api.vehicles()
        setResponse(response)
      } catch (err) {
        console.log(err);
      }
    })()
  }, [])

  const [response, setResponse] = useState<ResponseProps[]>([])
  return (
    <Default title='Todos Veículos' >
      <Table title={categories[1].subtitle} header={tables[0].header} response={
        response.map(value => (value))
      } />
    </Default>
  )
}

export default AllVehicles
