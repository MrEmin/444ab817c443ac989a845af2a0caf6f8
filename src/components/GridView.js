import React, { useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { useFilterContext } from "../context/filter_context";

const GridView = () => {
  const { filtered_products } = useFilterContext();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts =
    filtered_products.length <= productsPerPage
      ? filtered_products
      : filtered_products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filtered_products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Wrapper>
      <div className="products-container">
        {currentProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </Pagination>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const Pagination = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 0.5rem;
    padding: 0.3rem 0.6rem;
    cursor: pointer;
    border: 1px solid var(--clr-grey-5);
    background-color: var(--clr-white);
    color: var(--clr-grey-3);
    border-radius: 0.25rem;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: var(--clr-primary-5);
      color: var(--clr-white);
    }
  }
`;

export default GridView;
