import React, { useMemo } from 'react';

const Pagination = ({ totalCount, pageSize, setUrlQuery, currentPageNumber }) => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const firstPageNumber = 1;
    const lastPageNumer = totalPageCount;

    const activeSiblingPagination = 2;

    const startPaginationNumber = +currentPageNumber - 1 <= 1 ? 1 : +currentPageNumber - activeSiblingPagination;

    const endPaginationNumber = +currentPageNumber + 1 >= totalPageCount ? totalPageCount : +currentPageNumber + activeSiblingPagination;

    const createRange = (start, end) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
    };

    const paginationRange = createRange(startPaginationNumber, endPaginationNumber);

    const showLeftSideDot = +currentPageNumber <= 3;
    const hideRightSideDot = +currentPageNumber < totalPageCount - 3;

    const disablePrevBtn = +currentPageNumber - startPaginationNumber <= 1;
    const disableNextBtn = +currentPageNumber + 1 > totalPageCount;


    const setPreviouseBtnFunc = () => {
        if (!disablePrevBtn) {
            setUrlQuery(pre => {
                return {
                    ...pre,
                    pageNumberQuery: +pre.pageNumberQuery - 1
                }
            })
        };
        return;
    };

    const setNextBtnFunc = () => {
        if (!disableNextBtn) {
            setUrlQuery(pre => {
                return {
                    ...pre,
                    pageNumberQuery: +pre.pageNumberQuery + 1
                }
            })
        };
        return;
    };

    const setPaginationNumber = (indexNumber) => {
        setUrlQuery(pre => {
            return {
                ...pre,
                pageNumberQuery: +indexNumber
            }
        })
    };

    return (
        <nav ariaLabel="Page navigation example">
            <ul className="pagination justify-content-end">
                {/* previous btn  */}
                <li
                    onClick={setPreviouseBtnFunc}
                    className={`page-item ${disablePrevBtn && 'disabled'}`}>
                    <div>
                        <span className="page-link">Previous</span>
                    </div>
                </li>

                {/* dots */}
                {
                    !showLeftSideDot &&
                    <li
                        onClick={() => setPaginationNumber(firstPageNumber)}
                        className="button d-flex align-items-end gap-3">
                        <span
                            className={`page-link`}
                        >{firstPageNumber | 'loading..'}</span>
                        
                        <span className='px-3'>...</span>
                    </li>
                }

                {
                    paginationRange?.map((paginationBtn, index) => {
                        return (
                            <li key={index}
                                onClick={() => setPaginationNumber(paginationBtn)}
                                className="page-item disable button">
                                <span
                                    className={`page-link 
                                      ${paginationBtn == currentPageNumber && 'activePagination text-white'}`}
                                >{paginationBtn}</span>
                            </li>
                        )
                    })
                }

                {/* dots last */}
                {
                    hideRightSideDot &&
                    <li
                        onClick={() => setPaginationNumber(lastPageNumer)}
                        className="button d-flex align-items-end gap-3">
                        <span className='px-3'>...</span>
                        <span
                            className={`page-link`}
                        >{lastPageNumer | 'loading..'}</span>
                    </li>
                }

                {/* next button  */}
                <li
                    onClick={setNextBtnFunc}
                    className={`page-item button ${disableNextBtn ? 'disabled' : ''}`}>
                    <div>
                        <span className="page-link">Next</span>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;