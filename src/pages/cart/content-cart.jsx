const DataShopp = ({data, Delete}) => {
  const { image, title,id } = data;
  return (
    <div className="item">
      <img className="img-card" src={image} alt="image"/>
      <div className="ms-5">
        <p>{title}</p>
        <button onClick={()=>Delete(id)} className="btn btn-primary">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default DataShopp;


const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };