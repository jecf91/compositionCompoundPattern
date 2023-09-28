import ProductButton from '../../Components/ProductCard/ProductButton'
import ProductCard from '../../Components/ProductCard/ProductCard';
import ProductImage from '../../Components/ProductCard/ProductImage';
import ProductPrice from '../../Components/ProductCard/ProductPrice';
import ProductTitle from '../../Components/ProductCard/ProductTitle';

import { Product } from '../../types';

function Compound() {
    const product: Product = {
        image: 'https://images.unsplash.com/photo-1619646176605-b7417fb53b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
        title: '"SK8-Hi" Sneaker high black/white',
        price: 35.99
    };


    return (
        <div className='cardContainer'>
            <ProductCard
                product={product}
                image={<ProductImage />}
                info={
                    <>
                        <ProductTitle />
                        <ProductPrice />
                    </>
                }
                action={
                    <ProductButton onClick={() => alert("add to cart")}>Add  to cart</ProductButton>
                }
            />
        </div>
    );
}


export default Compound;
