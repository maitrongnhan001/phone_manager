import React from 'react';
import { Menu } from '../../partials/menu/menu';
import { ProductBody } from "../../partials/product_body/product_body";
import { Banner } from "../../partials/banner/banner";
import { Footer } from "../../partials/footer/footer";

export const Product = () => {
    return (
        <>
            <Menu/>
            <Banner title="Smart Phone Manager" />
            <ProductBody/>
            <Footer/>
        </>
    );
}