# Product-Card-Leio

 This is a test package npm project created, just code! 

 ## Ejemplo 

 ```
import { ProductCard, ProductImg, ProductTitle, ProductButtons } form "product-card-leio"
 ```

```
   <ProductCard
        product={Product}
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
```

### Luciano de la Rubia