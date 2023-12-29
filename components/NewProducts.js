import styled from "styled-components";
import ProductBox from "./ProductBox";
import Center from "./Center";
import Title from "./Title";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function NewProducts({ newProducts }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid>
        {newProducts?.length > 0 &&
          newProducts.map((product) => {
            return <ProductBox {...product}>{product.title}</ProductBox>;
          })}
      </ProductsGrid>
    </Center>
  );
}
