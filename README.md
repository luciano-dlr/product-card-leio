# Product-Card-Leio

 This is a test package npm project created, just code! 

 ## Example

 ```
  import { 
    ProductCard, 
    ProductImg, 
    ProductTitle, 
    ProductButtons 
  } from "product-card-leio"
 ```

```
  <ProductCard
        product={product}
        initialValues={{
          count: 5,
          maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, isMaxCountReached, maxCount, product }) => {

          return (
            <>
              {/* Product Image */}
              <ProductImg />

              {/* Product Title */}
              <ProductTitle />

              {/* Default Counter Buttons */}
              <ProductButtons />

              {/* Show Max Count Reached */}
              {isMaxCountReached && <div>Max Count Reached</div>}

              <hr />

              {/* Custom Counter Buttons */}
              <div>
                <button onClick={() => increaseBy(-3)}>-3</button>
                <span>{count}</span>
                <button onClick={() => increaseBy(+3)}>+3</button>
              </div>

              <hr />

              {/* Reset Button */}
              <button onClick={reset}>Reset Count Value</button>

              <hr />
              <h3>Show Product Information</h3>
              <p>{JSON.stringify(product, null, 2)}</p>
              <p>Max Count set: {maxCount}</p>
            </>
          );
        }}
      </ProductCard>
```

### Real use 

```

const App = () => {
  const product = {
    id: '1',
    title: 'Cafetera de Leonardo',
    img: "./src/assets/react.svg",
  };

  const [externalCount, setExternalCount] = useState(0);
  const [internalCount, setInternalCount] = useState(0);

  useEffect(() => {
    // Actualizar el estado externo cuando el interno cambia
    setExternalCount(internalCount);
  }, [internalCount]);

  return (
    <>
      <h1>Vite + React</h1>
      <h2>External Count: {externalCount}</h2> {/* External value*/}
      <ProductCard
        product={product}
        initialValues={{
          count: 5,
          maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, isMaxCountReached, maxCount, product }) => {
          // Update state
          useEffect(() => {
            setInternalCount(count);
          }, [count]);

          return (
            <>
              {/* Product Image */}
              <ProductImg />

              {/* Product Title */}
              <ProductTitle />

              {/* Default Counter Buttons */}
              <ProductButtons />

              {/* Show Max Count Reached */}
              {isMaxCountReached && <div>Max Count Reached</div>}

              <hr />

              {/* Custom Counter Buttons */}
              <div>
                <button onClick={() => increaseBy(-3)}>-3</button>
                <span>{count}</span>
                <button onClick={() => increaseBy(+3)}>+3</button>
              </div>

              <hr />

              {/* Reset Button */}
              <button onClick={reset}>Reset Count Value</button>

              <hr />
              <h3>Show Product Information</h3>
              <p>{JSON.stringify(product, null, 2)}</p>
              <p>Max Count set: {maxCount}</p>
            </>
          );
        }}
      </ProductCard>
    </>
  );
};

export default App;
```



### luciano-dlr