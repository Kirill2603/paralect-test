import React, { FC, memo } from 'react';

import ReactPaginate from 'react-paginate';

import { PaginationStyle } from "./pagination.styles";

import { useAppDispatch } from "store/store";
import { setSelectedPage } from "store/userSlice";

type PaginationPropsType = {
  selectedPage : number,
  public_repos: number,
};

export const Pagination: FC<PaginationPropsType> = memo(({selectedPage,public_repos}) => {
  const dispatch = useAppDispatch();
  const handlePageClick = (event: any ): void => {
    dispatch(setSelectedPage(event.selected + 1))
  };

  return (
    <PaginationStyle>
      <p>
        {selectedPage * 4 - 3}
        -
        {selectedPage * 4 > public_repos ? public_repos : selectedPage * 4}
        of {public_repos}{' '}
        items
      </p>
      <ReactPaginate
        previousLabel='__'
        nextLabel='__'
        forcePage={selectedPage - 1}
        breakLabel="..."
        breakClassName="break-me"
        pageCount={Math.ceil(public_repos / 4)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </PaginationStyle>
  );
});
