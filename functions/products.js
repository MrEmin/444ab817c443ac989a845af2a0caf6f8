const dotenv = require("dotenv");
dotenv.config();

const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const apiUrl = process.env.API_URL;
    const accessToken = process.env.ACCESS_TOKEN;

    const response = await axios.get(apiUrl, {
      headers: {
        "X-Access-Token": accessToken,
      },
    });

    const products = response.data.products.map((product) => {
      const { id, title, body_html, vendor, product_type, image } = product;
      const { price } = product.variants[0];
      const { src } = image;
      return {
        id,
        name: title,
        price,
        company: vendor,
        description: body_html,
        category: product_type,
        image: src,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: "There was an Error",
    };
  }
};
