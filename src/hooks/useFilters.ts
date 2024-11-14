import queryString from "query-string";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useFiltersHandler(initialFilters: any) {
  const [filters, setFilters] = useState<{ page: number; size: number } | any>(
    initialFilters
  );
  const navigate = useNavigate();

  const handleChangePage = (page: number, size: number) => {
    setFilters((prev: object) => {
      return {
        ...prev,
        page: page - 1,
      };
    });
    navigate(`${location.pathname}?page=${page}&size=${size}`);
  };

  const handlePagesize = (page: number, size: number) => {
    setFilters((prev: object) => {
      return {
        ...prev,
        page: 0,
        size: size,
      };
    });
    navigate(`${location.pathname}?page=${page}&size=${size}`);
  };

  const handleAddParams = (params: object) => {
    const paramsObj = { ...filters, ...params, page: 1 };
    const paramsToString = queryString.stringify(paramsObj);
    navigate(`${location.pathname}?${paramsToString}`);

    setFilters((prev: object) => {
      return {
        ...prev,
        ...params,
        page: 0,
      };
    });
  };

  const handleFirstPage = () => {
    setFilters((prev: object) => {
      return {
        ...prev,
        page: 0,
      };
    });
  };

  const refetch = () => {
    const cloneFilters = { ...filters };
    setFilters(cloneFilters);
  };

  return {
    filters,
    handleAddParams,
    refetch,
    handleChangePage,
    handlePagesize,
    handleFirstPage,
  };
}

export default useFiltersHandler;
