import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImg, ProductTitle, ProductButtons } from '../.';

const App = () => {
  const product = {
    id: "1",
    title: "Coffe Cup",
    // img: "./coffee-mug.png",
  };
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}>
        {
          ({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
            <>
              <ProductImg />
              <ProductTitle />
              <ProductButtons />

            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
