import AddProduct from "../components/add-product";
import QuickAccess from "../components/quick_access";
import Buy from "../components/table-products/confirm-buy";
import ProductEntity from "../components/table-products/product-entity";
import F from "../components/table-products/si";
import TableProducts from "../components/table-products/table-products";
import OrderContextProvider from "../context/order";

export default function TicketPage(){
    return(
        <main>
            <h1>Ticket Page</h1>
            <F/>
        </main>
    )
}