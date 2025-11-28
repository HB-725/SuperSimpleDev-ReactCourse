import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header.jsx';
import { ProductGrid } from './ProductGrid.jsx';
import './HomePage.css';



export function HomePage({ cart, loadCart }) {


    const [products, setProducts] = useState([]);


    useEffect(() => {
        const getHomedata = async () => {
            const response = await axios.get('/api/products')
            setProducts(response.data);
        };

        getHomedata();
    }, []);


    return (
        <>
            <title>Ecommerce Project</title>
            <Header cart={cart} />
            <div className="home-page">
                <ProductGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}

