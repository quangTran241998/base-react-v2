import { Pagination as PaginationAndt, PaginationProps } from "antd";
import styled from "styled-components";

export interface PropsPagiantion extends PaginationProps {
  total: number;
  pageSize: number;
  page: number;
}

const StyledPagination = styled(PaginationAndt)`
  && {
    .ant-pagination-item {
      background-color: white;
      border-color: none;
      border-radius: 10px;
      a {
        color: #333333;
      }
    }

    .ant-pagination-item-active {
      background-color: #cc8f14;
      border-color: transparent;

      a {
        color: white;
      }
    }

    .ant-pagination-prev,
    .ant-pagination-next {
      display: flex;
      align-items: center;
      justify-content: center;
      .ant-pagination-item-link {
        color: #333;
        border-color: none;
      }

      &:hover {
        .ant-pagination-item-link {
          background-color: #e0e0e0;
        }
      }
    }

    .ant-pagination-jump-next,
    .ant-pagination-jump-prev {
      .ant-pagination-item-link-icon {
        color: #333;
      }
    }
  }
`;

const Pagination = (props: PropsPagiantion) => {
  return <StyledPagination defaultCurrent={1} style={{}} prevIcon={<PrevIcon />} nextIcon={<NextIcon />} {...props} />;
};

export default Pagination;

const PrevIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

const NextIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.91075 4.41107C7.23619 4.08563 7.76382 4.08563 8.08926 4.41107L13.0893 9.41108C13.4147 9.73649 13.4147 10.2642 13.0893 10.5896L8.08926 15.5896C7.76382 15.915 7.23619 15.915 6.91075 15.5896C6.58531 15.2642 6.58531 14.7365 6.91075 14.4111L11.3215 10.0003L6.91075 5.58958C6.58531 5.26414 6.58531 4.73651 6.91075 4.41107Z"
        fill="#333333"
      />
    </svg>
  );
};
