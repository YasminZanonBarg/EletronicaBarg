import { PaginationContainer } from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <PaginationContainer>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <md-icon>chevron_left</md-icon>
      </button>
      
      <span>{currentPage} de {totalPages}</span>

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <md-icon>chevron_right</md-icon>
      </button>
    </PaginationContainer>
  );
}
