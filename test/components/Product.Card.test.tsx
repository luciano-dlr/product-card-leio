import React from "react"
import renderer from "react-test-renderer"
import { ProductCard } from '../../src/components';
import { product1 } from '../data/product';

const { act } = renderer


describe('Product title and Card', () => {

    test('Debe de mostrar el componente correctamente ', () => {

        const wraper = renderer.create(
            <ProductCard product={product1} >
                {
                    () => (
                        <h1>Product card</h1>
                    )
                }
            </ProductCard>
        )

        expect(wraper.toJSON()).toMatchSnapshot();


    })
    test('Debe incrementar el contador', () => {

        const wraper = renderer.create(
            <ProductCard product={product1} >
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(+1)}></button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = wraper.toJSON();
        // console.log(tree);

        expect(tree).toMatchSnapshot();

        act(() => {
            (tree as any).children[2].props.onClick();
        })

        tree = wraper.toJSON();

        expect((tree as any).children[1].children[0]).toBe('1')






    })
})