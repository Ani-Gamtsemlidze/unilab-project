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
  total,
}) {
  return (
    <div className={styles.page_fluid}>
      {total ? (
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

          <img
            onClick={lastElement}
            className={styles.right}
            src={rightArrow}
          />
        </div>
      ) : null}
    </div>
  );
}
export default Pagination;
