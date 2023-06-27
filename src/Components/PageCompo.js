import { getTotalPagesHere } from "./PagingUtility"
import PropTypes from "prop-types";


import styles from "../Css/PageCompo.module.css";

function PaginationCompo(props){
  const { usersLengthHere, setPageHere, pageHere, deleteSelectedHere } = props;

   // Here we have to navigate pages one to here

  const navigatePageHere = (index) => {
    if (index < 1) {
      index = 1;
    } else if (index > totalPagesHere) {
      index = totalPagesHere;
    }
    setPageHere(index);
  };



  // Here we have to see TotalPagesHere
  const totalPagesHere = getTotalPagesHere(usersLengthHere);
  const changePageHere = (index) => {
    setPageHere(index);
  };


  // TotalPagesArray

  let pagesHere = [];
  // this is for go to left page atmost
  pagesHere.push(
    <div
      key={-3}
      className={`${styles.page} ${pageHere === 1 ? styles.disabled : ""}`}
      onClick={() => changePageHere(1)}
    >
      <i className="fas fa-angle-double-left"></i>
    </div>
  );
  pagesHere.push(
    // for moving one by one at left
    <div
      key={-2}
      className={`${styles.page} ${pageHere === 1 ? styles.disabled : ""}`}
      onClick={() => navigatePageHere(pageHere - 1)}
    >
      <i className="fas fa-angle-left"></i>
    </div>
  );
  // for going to at right of the page 
  for (let i = 1; i <= totalPagesHere; i++) {
    pagesHere.push(
      <div
        key={i}
        onClick={() => changePageHere(i)}
        className={`${styles.page} ${pageHere === i ? styles.selected : ""}`}
      >
        {i}
      </div>
    );
  }
  pagesHere.push(
      // for going to at right of the page 
    <div
      key={-1}
      className={`${styles.page} ${pageHere === totalPagesHere ? styles.disabled : ""}`}
      onClick={() => navigatePageHere(pageHere + 1)}
    >
      <i className="fas fa-angle-right"></i>
    </div>
  );
  pagesHere.push(
      // for going to at right of the page 
    <div
      key={0}
      className={`${styles.page} ${pageHere === totalPagesHere ? styles.disabled : ""}`}
      onClick={() => changePageHere(totalPagesHere)}
    >
      <i className="fas fa-angle-double-right"></i>
    </div>
  );

  return (
    <div className={styles.paginationContainer}>
      <button className={styles.delete} onClick={() => deleteSelectedHere()}>
        DELETED 
      </button>
      <div className={styles.pagination}>{pagesHere}</div>
    </div>
  );
};

export default PaginationCompo;

PaginationCompo.propTypes = {
  usersLength: PropTypes.number,
  setPage: PropTypes.func,
  page: PropTypes.number,
  deleteSelected: PropTypes.func,
};


