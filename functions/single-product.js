const dotenv = require("dotenv");
dotenv.config();

const axios = require("axios");

exports.handler = async (event, context) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const apiUrl = process.env.API_URL;
      const accessToken = process.env.ACCESS_TOKEN;

      const response = await axios.get(`${apiUrl}/${id}`, {
        headers: {
          "X-Access-Token": accessToken,
        },
      });
      const product = response.data.products.find((item) => item.id == id);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: "Server error",
      };
    }
  }

  return {
    statusCode: 400,
    body: "Please provide product id",
  };
};
