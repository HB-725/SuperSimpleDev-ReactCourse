import './OrdersPage.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header.jsx';
import { OrderHeader } from './OrderHeader.jsx';
import { OrderPage } from './OrderPage.jsx';


export function OrdersPage({ cart }) {


    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setOrders(response.data);
            });
    }, []);



    return (
        <>

            <Header cart={cart} />

            <OrderHeader />
            <OrderPage orders={orders} />

        </>
    );
}
