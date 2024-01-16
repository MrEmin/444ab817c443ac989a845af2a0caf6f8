import React from "react";
const ProductDescription = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default ProductDescription;
