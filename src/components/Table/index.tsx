import { Pagination } from "../Pagination"
import { Search } from "../Search"
import { Container, Header, HeaderEnd, SearchContainer } from "./styles"

export const Table = () => {
  return (
    <Container>
      <Header>
        <h4>Title</h4>
        <HeaderEnd>
          <Pagination />
          <SearchContainer>
            <Search />
          </SearchContainer>
        </HeaderEnd>
      </Header>

    </Container>
  )
}
