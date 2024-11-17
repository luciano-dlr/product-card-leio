import React from "react"
import renderer from "react-test-renderer"
import { ProductImg, ProductCard } from '../../src/components/';
import { product2 } from '../data/product';


describe('Product title and Card', () => {

    test('Debe de mostrar el componente correctamente con Imagen Correspondiente', () => {

        const wraper = renderer.create(
            <ProductImg img="https://hola.jpg" />
        )

        expect(wraper.toJSON()).toMatchSnapshot();


    })
    test('Debe de mostrar el componente correctamente con Imagen Correspondiente', () => {

        const wraper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <>
                            <ProductImg />
                        </>
                    )
                }

            </ProductCard>
        )
        expect(wraper.toJSON()).toMatchSnapshot();
    })
})