import React from 'react';

const CartItem = (props) => {
    const { title, price, qty } = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img src="" style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs: {price}</div>
                <div style={{ color: '#777' }}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* {buttons} */}
                    <img
                        onClick={() => onIncreaseQuantity(product)}
                        src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                        alt="increase"
                        className='action-icons'
                    />
                    <img
                        onClick={() => onDecreaseQuantity(product)}
                        src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                        alt="decrese"
                        className='action-icons'
                    />
                    <img
                        onClick={() => onDeleteProduct(product.id)}
                        src="https://t4.ftcdn.net/jpg/03/73/50/09/240_F_373500918_7vISJB85YXvvu7SgnpktP752LWRrLzyI.jpg"
                        alt="delete"
                        className='action-icons'
                    />
                </div>
            </div>
        </div>
    );

}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;