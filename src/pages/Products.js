
// material
import { Container } from '@mui/material';
// components
import Page from '../components/Page';
import {  ProductList,  } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function EcommerceShop() {

  return (
    <Page title="Dashboard: Products">
      <Container>

        <ProductList products={PRODUCTS} />
       
      </Container>
    </Page>
  );
}
