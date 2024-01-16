import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice, getColorHex } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  ProductDescription,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  useEffect(() => {
    if (product && product.options) {
      // "Color" ismindeki seçeneğin bilgilerini al
      const colorOption = product.options.find(
        (option) => option.name === "Color"
      );

      if (colorOption) {
        const colorValues = colorOption.values;
        const updatedColors = colorValues.map((color) => getColorHex(color));
        setColors(updatedColors);
      }
    }
  }, [product]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    title: name,
    body_html: description,
    id: sku,
    vendor: company,
    images,
    variants,
  } = product;

  // Eğer variants dizisi varsa ve en az bir öğe içeriyorsa
  const hasVariants = variants && variants.length > 0;

  // Eğer variants varsa, price, weight ve weight_unit değerlerini al
  // Eğer yoksa, varsayılan değerleri null olarak ayarla
  const {
    price = null,
    weight = null,
    weight_unit = null,
    inventory_quantity: stock = null,
  } = hasVariants ? variants[0] : {};

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <h5 className="price">{formatPrice(price)}</h5>
            <div className="desc">
              <ProductDescription htmlContent={description} />
            </div>

            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <p className="info">
              <span>Weight : </span>
              {weight?.toFixed(2)} {weight_unit}
            </p>
            <hr />
            {/* Stokta ürün varsa AddToCart görünür. */}
            {stock > 0 && (
              <AddToCart product={{ id, colors, stock, images, price, name }} />
            )}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
    padding-bottom: 1rem;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
