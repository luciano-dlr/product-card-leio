import React from "react"
import renderer from "react-test-renderer"
import { ProductTitle, ProductCard } from '../../src/components/';
import { product1 } from '../data/product';


describe('Product title and Card', () => {

    test('Debe de mostrar el componente correctamente con el titulo personalizado ', () => {

        const wraper = renderer.create(
            <ProductTitle title="Custom Product" />
        )

        expect(wraper.toJSON()).toMatchSnapshot();


    })
    test('Debe de mostrar el componente correctamente con el titulo personalizado ', () => {

        const wraper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <>
                            <ProductTitle />
                        </>
                    )
                }

            </ProductCard>
        )
        expect(wraper.toJSON()).toMatchSnapshot();
    })
})