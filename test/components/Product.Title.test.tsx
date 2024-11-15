import React from "react"
import renderer from "react-test-renderer"
import { ProductTitle } from '../../src/components/ProductTitle';

describe('Product Title', () => {

    test('Debe de mostrar el componente correctamente con el titulo personalizado ', () => {

        const wraper = renderer.create(
            <ProductTitle title="Custom Product" className="custom-class" />
        )

        expect(wraper.toJSON()).toMatchSnapshot();


    })




})