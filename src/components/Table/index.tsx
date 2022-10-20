import { useState } from "react"
import { Pagination } from "../Pagination"
import { Search } from "../Search"
import { Container, Header, HeaderEnd, SearchContainer } from "./styles"

export const Table = () => {

  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Container>
      <Header>
        <h3>Table</h3>
        <HeaderEnd>
          <Pagination
            key={currentPage}
            currentPage={currentPage}
            onPageChange={(page: number) => setCurrentPage(page)}
            totalCount={130}
            pageSize={10}
            setCurrent={setCurrentPage}
          />
          <SearchContainer>
            <Search />
          </SearchContainer>
        </HeaderEnd>
      </Header>
    </Container>
  )
}
