import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Acss.css";
import acne1 from './Images/acne1.png';
import acne2 from './Images/acne2.png';
import acne3 from './Images/acne3.png';
export const Acne = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    const medicines = [
        { id: 1, title: "Medicine A", price: 300, price1: 350, discount: "15%", image: acne1, unitcount: "10 tablets" },
        { id: 2, title: "Medicine B", price: 150, price1: 200, discount: "25%", image: acne2, unitcount: "5 tablets" },
        { id: 3, title: "Medicine C", price: 500, price1: 550, discount: "19%", image: acne3, unitcount: "20 tablets" },
    ];

    useEffect(() => {
        const filteredMedicines = medicines.filter(medicine => {
            const discountValue = parseFloat(medicine.discount.replace('%', ''));
            return discountValue > 10;
        });
        setData(filteredMedicines);
        
        // Retrieve cart from local storage
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);

        // Calculate initial subtotal
        const initialSubtotal = storedCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setSubtotal(initialSubtotal);
    }, []);

    const addToCart = (medicine) => {
        let updatedCart;
        const existingMedicine = cart.find(item => item.id === medicine.id);
        if (existingMedicine) {
            updatedCart = cart.map(item =>
                item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedCart = [...cart, { ...medicine, quantity: 1 }];
        }

        setCart(updatedCart);
        setSubtotal(prevSubtotal => prevSubtotal + medicine.price);

        // Save updated cart to local storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id
                ? item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }  // Decrease quantity if more than 1
                    : null // If quantity is 1, remove the item completely
                : item
        ).filter(item => item !== null); // Remove null values (items with quantity 0)
    
        setCart(updatedCart);
    
        // Recalculate subtotal after removal
        const newSubtotal = updatedCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setSubtotal(newSubtotal);
    
        // Save updated cart to local storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    

    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);

        // Recalculate subtotal after increasing quantity
        const newSubtotal = updatedCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setSubtotal(newSubtotal);

        // Save updated cart to local storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCart(updatedCart);

        // Recalculate subtotal after decreasing quantity
        const newSubtotal = updatedCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setSubtotal(newSubtotal);

        // Save updated cart to local storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="container">
            <div className="medicine">
                {data.map((e, i) => (
                    <div className="mainMedicine" key={i}>
                        <Link className="know_more" to={`/acne/${e.id}`}>
                            <img className="M_img" src={e.image} alt="text" />
                        </Link>
                        <hr />
                        <p className="m_Name">{e.title}</p>
                        <p className="m_price">₹{e.price}&nbsp;&nbsp;<span className="m_price1">₹{e.price1}</span>&nbsp;&nbsp;<span className="m_discount">{e.discount}</span></p>
                        <div className="m_unitbtn">
                            <p>{e.unitcount}</p>
                            <button className="addtocart" onClick={() => addToCart(e)}>ADD</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart">
                <h3>CART</h3>
                {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <p>{item.title} - ₹{item.price} x {item.quantity}</p>
                        <div className="cart-actions">
                            
                            <button onClick={() => removeFromCart(item.id)}>Delete</button>
                        </div>
                    </div>
                ))}
                <h4 className="subtotal">Subtotal: ₹{subtotal}</h4>
            </div>
        </div>
    );
};
