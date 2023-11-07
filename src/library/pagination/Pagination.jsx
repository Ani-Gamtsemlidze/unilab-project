import React, { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import { dropEllipsis } from "react-responsive-pagination/narrowBehaviour";
import "react-responsive-pagination/themes/classic.css";
import leftArrow from "../../assets/images/chevrons-left.png";
import rightArrow from "../../assets/images/chevrons-right.png";
import styles from "./Pagination.module.css";

function Pagination({
  currentPage,
  setCurrentPage,
  lastElement,
  firstElement,
  isActive,
  total,
}) {
  const totalPages = 5;
  return (
    <div className={styles.page_fluid}>
      <div className={styles.container}>
        <img className={styles.left} src={leftArrow} onClick={firstElement} />

        <ResponsivePagination
          narrowBehaviour={dropEllipsis}
          current={currentPage}
          total={total}
          onPageChange={setCurrentPage}
          nextLabel={">"}
          previousLabel={"<"}
        />

        <img onClick={lastElement} className={styles.right} src={rightArrow} />
      </div>
    </div>
  );
}
export default Pagination;
