import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function Home({ featuredProduct, newProducts }) {
  return (
    <>
      <Header>Hello</Header>
      <Featured featuredProduct={featuredProduct} />
      <NewProducts newProducts={newProducts} />
    </>
  );
}
export async function getServerSideProps() {
  const featuredProductId = "6585c9297b92623cfb3c264b";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 5,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
