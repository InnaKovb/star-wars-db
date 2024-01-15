import ReactPaginate from "react-paginate";
import './Pagination.scss'

function Pagination ({totalPages, handlePageChange, currentPage}) {
    return (
        <div className='container'>
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link prev-btn"
                nextClassName="page-item"
                nextLinkClassName="page-link next-btn"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={totalPages}
                marginPagesDisplayed={3}
                pageRangeDisplayed={5}
                onPageChange= {(page)=> handlePageChange(page)}
                containerClassName="pagination"
                activeClassName='active'
                forcePage={currentPage - 1} 
            />
            
        </div>
    )
}
// не работает переключение активной страницы, также не работают кнопки предыдущей и следуюзей страницы

export default Pagination