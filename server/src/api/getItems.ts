import axios from "axios";
import "dotenv/config";

const API = process.env.API_URL || "https://api.mercadolibre.com";
const amount = 4;

function getItems(query: string) {
  console.log(`${API}/sites/MLA/search`);
  return axios
    .get(`${API}/sites/MLA/search`, {
      params: {
        q: query,
      },
    })
    .then(({ data }) => {
      const map = {
        author: {
          name: "",
          lastname: "",
        },
        categories: data.filters
          ?.find((it) => it.id === "category")
          ?.values.map((it) => ({
            name: it.name,
            pathFromRoot: it.path_from_root.map((it) => it.name),
          })),
        items: data.results?.slice(0, amount).map((it) => ({
          id: it.id,
          title: it.title,
          price: {
            currency: it.currency_id,
            amount: it.price,
            decimals: 0,
          },
          picture: it.thumbnail,
          condition: it.condition,
          freeShipping: it.shipping.free_shipping,
          address: it.address.city_name,
        })),
      };
      return map;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export default getItems;
