import axios from "axios";
import "dotenv/config";

const API = process.env.API_URL;

function getDetail(id: string) {
  return axios.get(`${API}/items/${id}`);
}

function getDescription(id: string) {
  return axios.get(`${API}/items/${id}/description`);
}

function getItemsDetail(id: string) {
  return Promise.all([getDetail(id), getDescription(id)]).then(
    ([detail, description]) => {
      return {
        author: {
          name: "",
          lastname: "",
        },
        item: {
          id: detail.data.id,
          title: detail.data.title,
          price: {
            currency: detail.data.currency_id,
            amount: detail.data.price,
            decimals: 0,
          },
          picture: detail.data.pictures[0].url,
          condition: detail.data.condition,
          freeShipping: detail.data.shipping.free_shipping,
          soldQuantity: detail.data.sold_quantity,
          description: description.data.plain_text,
        },
      };
    }
  );
}

export default getItemsDetail;
