import { ReactNode } from 'react';

import ProductCardContext from './ProductContext';
import ProductImage from './ProductImage';
import ProductButton from './ProductButton';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';

import { Product } from '../../types';

import "./style.css"

type Props = {
    product: Product;
    image?: ReactNode;
    info?: ReactNode;
    action?: ReactNode;
};

function ProductCard({ image, info, action, product }: Props) {
    return (
        <ProductCardContext.Provider value={{ product }}>
            <div className="product-card">
                {image}
                <div className="product-card-bottom">
                    {info}
                    {action}
                </div>
            </div>
        </ProductCardContext.Provider>
    );
}

//Since functions in JS are objects
//so they can have their own properties
//so we can assign other components as properties of other component
//by using namespaces. This way we will reduce the number of imports

ProductCard.ProductImage = ProductImage;
ProductCard.Button = ProductButton;
ProductCard.Title = ProductTitle;
ProductCard.Price = ProductPrice;

export default ProductCard;
