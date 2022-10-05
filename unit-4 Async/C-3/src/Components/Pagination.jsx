function createArrayOfSize(totalPages) {
  return new Array(totalPages).fill(0);
}

export default function Pagination({handlePageChange,current,totalPages}) {
    var totalPages = new Array(totalPages).fill().map((el, i) => {
        return i + 1;
      });
    return (<div>
    {totalPages.map((el) => {
        return < button data-testid="page-btn" onClick={() => handlePageChange(el)}>{el}</button>;
      })}
  </div>);
}


