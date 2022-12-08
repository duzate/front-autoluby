import { useState } from "react"
import { ResponseProps } from "../../pages/AllVehicles"
import { Pagination } from "../Pagination"
import { Search } from "../Search"
import { Container, Header, HeaderEnd, Main, SearchContainer, TableBody, TableData, TableHeader, TableRow } from "./styles"

type TableProps = {
  title: string,
  header: string[],
  response: ResponseProps[]
}

export const Table = ({ title, header, response }: TableProps) => {

  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Container>
      <Header>
        <h3>{title}</h3>
        <HeaderEnd>
          <Pagination
            key={currentPage}
            currentPage={currentPage}
            onPageChange={(page: number) => setCurrentPage(page)}
            totalCount={response.length}
            pageSize={10}
            setCurrent={setCurrentPage}
          />
          <SearchContainer>
            <Search />
          </SearchContainer>
        </HeaderEnd>
      </Header>
      <Main>
        <TableHeader>
          <TableRow>
            {
              header.map(value => (
                <TableData key={value}>
                  {value}
                </TableData>
              ))
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            response.map(value => (
              <TableRow key={value.id}>
                <TableData >{value.marca}</TableData>
                <TableData >{value.modelo}</TableData>
                <TableData >{value.ano}</TableData>
                <TableData >{value.km}</TableData>
                <TableData >{value.cor}</TableData>
                <TableData >{value.status}</TableData>
                <TableData >{value.chassi.substring(0, 5)}</TableData>
                <TableData >{value.price}</TableData>
              </TableRow>
            ))
          }
        </TableBody>
      </Main>
    </Container >
  )
}
