
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { usePagination } from '../../hooks/usePagination';
import { ButtonArrow, Container, ContainerNumber, Number } from './styles';

type PaginationProps = {
  totalCount: number,
  pageSize: number,
  currentPage: number
  onPageChange: (page: number) => void,
  setCurrent: React.Dispatch<React.SetStateAction<number>>,
}

export const Pagination = ({ currentPage, onPageChange, pageSize, totalCount, setCurrent }: PaginationProps) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);

  const paginationRange = usePagination({ currentPage, pageSize, totalCount, totalPageCount });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 1)) {
    return null;
  }

  const onNext = () => {
    currentPage < totalPageCount
      ? setCurrent(currentPage + 1)
      : null
  }


  const onPrevius = () => {
    currentPage > 1
      ? setCurrent(currentPage - 1)
      : null

  }

  return (
    <Container>
      <ButtonArrow onClick={onPrevius}>
        <FiArrowLeft />
        <span>Anterior</span>
      </ButtonArrow>
      <ContainerNumber>
        {
          paginationRange && paginationRange.map(pageNumber => {
            return (
              <Number key={pageNumber} page={pageNumber === currentPage} onClick={() => onPageChange(pageNumber)} >
                {pageNumber}
              </Number>
            );
          })
        }
      </ContainerNumber>
      <ButtonArrow onClick={onNext}>
        <span>Próximo</span>
        <FiArrowRight />
      </ButtonArrow>
    </Container>
  );
};

