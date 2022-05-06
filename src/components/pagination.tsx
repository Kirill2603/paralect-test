import React, { FC } from 'react';

import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

import { useAppDispatch } from "../store/store";
import { setSelectedPage } from "../store/userSlice";

const PaginationStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      list-style-type: none;
      padding: 5px;
      cursor: pointer;
    }
  }
  .active {
    background-color: blue;
    a {
      color: white;
    }
  }
`;

type PaginationPropsType = {
  selectedPage : number
  public_repos: number
};

export const Pagination: FC<PaginationPropsType> = ({selectedPage,public_repos}) => {
  const dispatch = useAppDispatch();
  const handlePageClick = (e: any): void => {
    dispatch(setSelectedPage(e.selected + 1))// e.selected + 1
  };

  return (
    <PaginationStyle>
      <p>
        {selectedPage * 4 - 3}-
        {selectedPage * 4 > public_repos ? public_repos : selectedPage * 4} of {public_repos}{' '}
        items
      </p>
      <ReactPaginate
        previousLabel=" <-"
        nextLabel=" ->"
        forcePage={selectedPage - 1}
        breakLabel="..."
        breakClassName="break-me"
        pageCount={Math.ceil(public_repos / 4)}
        marginPagesDisplayed={3}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </PaginationStyle>
  );
};
