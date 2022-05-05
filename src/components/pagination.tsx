import React, { FC } from 'react';

import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

import { UserDataType } from '../App';

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
`;

type PaginationPropsType = {
  userData: UserDataType;
  setUserData: (userData: UserDataType) => void;
};

export const Pagination: FC<PaginationPropsType> = ({
  userData: { username, reposCount, selectedPage },
  setUserData,
}) => {
  const handlePageClick = (e: any): void => {
    setUserData({
      selectedPage: e.selected + 1,
      username,
      reposCount,
    });
  };

  return (
    <PaginationStyle>
      <p>
        {selectedPage * 4 - 3}-
        {selectedPage * 4 > reposCount ? reposCount : selectedPage * 4} of {reposCount}{' '}
        items
      </p>
      <ReactPaginate
        previousLabel=" <-"
        nextLabel=" ->"
        forcePage={selectedPage - 1}
        breakLabel="..."
        breakClassName="break-me"
        pageCount={Math.ceil(reposCount / 4)}
        marginPagesDisplayed={3}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </PaginationStyle>
  );
};
