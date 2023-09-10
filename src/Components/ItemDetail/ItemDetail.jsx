import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ItemDetail.scss"
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export const ItemDetail = ({ producto }) => {

    const {addItem} = useContext(CartContext)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    const formatter2 = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });


    const onAdd = (count) => addItem({ product: producto, quantity: count });

    return (
        <div className="container-detail">

            <div className="detail-content">
                <div className="img-container">
                    <img className="img-detail" src={producto.img} alt={producto.name} />
                </div>
                <div className="info-detail">
                    <h2 className="name-detail">{producto.name}</h2>
                    <hr />
                    <p className="detail-info" data-label="Categoría">{producto.category}</p>
                    <p className="detail-info" data-label="Artist">{producto.artist}</p>
                    <p className="detail-info" data-label="Origin"> {producto.origin}</p>
                    <p className="detail-info" data-label="Size"> {producto.size}</p>
                    <hr />
                    <span className="priceObras">{formatter2.format(producto.price)}</span>
                    <hr />
                    <div className="ItemCountContainer">
                        <p className="cantObras">Cant: {producto.cant}</p>
                        <ItemCount onAdd={onAdd} />
                    </div>

                        <Link className="btn btn-primary btn-volver" onClick={handleVolver}>Volver</Link>

                    </div>

                </div>

            </div>
    );

}

export default ItemDetail;