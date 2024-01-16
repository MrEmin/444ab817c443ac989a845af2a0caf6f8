export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export const getColorHex = (color) => {
  const hexColors = {
    Black: "#000000",
    Bandanner: "#8B4513",
    "Lei'd": "#808080",
    White: "#FFFFFF",
    Anthracite: "#404040",
    "True Black": "#1E1E1E",
    "Black/White": "#2E2E2E",
    "Black/Green": "#1F1F1F",
    "Camo/Floral Woody": "#556B2F",
    Cream: "#FFFACD",
    "GI Green": "#556B2F",
    "Mike Irish": "#008000",
    "Yellow/Blue": "#FFFF00",
    "Switchback Blue": "#0000FF",
    Brickyard: "#A0522D",
    "Black/Camo": "#2D2D2D",
    Floral: "#FFD700",
  };

  return hexColors[color];
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
