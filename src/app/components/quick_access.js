export default function QuickAccess({quickAccessProducts = []}){
    return (
        <div className="p-2">
            <h1 className="text-center">Acceso rapido</h1>
            <div className="grid grid-cols-2 gap-3 ">
            {quickAccessProducts.map(product => <ProductAccessEntity key={product?.key} product={product}/>)}
            </div>
        </div>
    )
}

function ProductAccessEntity({product}){
    return (
        <button className="bg-red-400">
            {product?.name}
        </button>
    )
}