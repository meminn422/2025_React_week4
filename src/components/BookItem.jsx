import AddToCart from './AddToCart'

function ProductDetail({ product }) {
    return (
        <div data-theme="luxury" className="flex flex-col items-center px-4 gap-6 max-w-4xl mx-auto">
            {/* 圖片在上 */}
            <img
                alt={product.title}
                className="w-full max-w-md h-96 object-cover object-center rounded-md"
                src={product.cover}
            />

            {/* 說明文字與按鈕在下 */}
            <div className="w-full max-w-2xl text-center">
                <h1 className="text-white text-2xl font-bold mb-2">{product.title}</h1>
                <h2 className="text-white opacity-40 mb-1 text-lg">{product.author}</h2>
                <p className="text-white opacity-60 text-base mb-4">{product.summary}</p>

                <div className="text-purple-400 flex flex-col items-center gap-4">
                    <p className="text-2xl font-semibold">US${product.price}.00</p>
                    <AddToCart />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
