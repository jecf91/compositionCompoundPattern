import { useProductCardContext } from './ProductContext';

function ProductTitle() {
    const { product } = useProductCardContext();
    return <div className="product-title">{product.title}</div>;
}

export default ProductTitle;

