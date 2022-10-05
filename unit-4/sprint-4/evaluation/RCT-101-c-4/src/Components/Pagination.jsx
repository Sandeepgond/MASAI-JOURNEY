import { Button, ButtonGroup } from '@chakra-ui/react'

function Pagination({
    // total pages
    total,
    // current page of the component
    page,
    // event handler when button is clicked,
    // changePage accepts the new page in number
    changePage
  }) {
    // fix code here
    // let pages = <button
    //     data-testid="page-btn"
    //     onClick={()=>changePage()}
    //     disabled={page==1}
    //   >
    //   </button>
    const n = new Array(4).fill(1).map((el, i) => {
      return i + 1;
    });
    return (
      <div>
        {n.map((el, i) => {
          return (
            <Button colorScheme='blue' onClick={() => changePage(el)}>{el}</Button>
            // <button data-testid="page-btn" onClick={() => changePage(el)}>
            //   {el}
            // </button>
          );
        })}
      </div>
    );
  }
  
  export default Pagination;
  