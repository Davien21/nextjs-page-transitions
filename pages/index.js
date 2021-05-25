import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
const Index = (props) => (
  <motion.div exit={{ opacity: 0 }}>
    <div className="container center">
      <div className="title">
        <h1>Select a protein</h1>
      </div>
      <div className="product-row">
        {props.products.map((product) => (
          <Link
            key={product.id}
            href="/products/[id]"
            as={`/products/${product.id}`}
          >
            <div className="card">
              <span className="category">Protein</span>
              <img key={product.image} src={product.image} width={250} />
              <div className="product-info">
                <h4>{product.name}</h4>
                <span>{product.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </motion.div>
);

Index.getInitialProps = async function () {
  const res = await fetch(
    "http://my-json-server.typicode.com/wrongakram/demo/products"
  );
  let imageUrl =
    "https://cdn.shopify.com/s/files/1/2060/6331/products/WheyCA.png?v=1596573521";

  const data = await res.json();
  data.map((thing) => (thing.image = imageUrl));
  return {
    products: data,
  };
};

export default Index;
