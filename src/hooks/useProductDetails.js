import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

function useProductDetails() {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  console.log(productId);

  useEffect(() => {
    async function fetchAProduct() {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        console.log(res);
        setProduct(res.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    fetchAProduct();
  }, [productId]);

  return { product };
}

export default useProductDetails;
