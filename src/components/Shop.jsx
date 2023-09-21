import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {actionCreators} from "../state/index"
import { bindActionCreators } from "redux";

const Shop = () => {
  const [data, setData] = useState([]);

  const dispatch=useDispatch()
  const {addProduct,removeProduct}=bindActionCreators(actionCreators,dispatch)

  useEffect(() => {
    axios
      .get("https://world.openfoodfacts.org/api/v0/attribute_groups")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const imageStyle = {
    width: "100px", // Adjust as needed
    height: "100px", // Adjust as needed
    objectFit: "contain", // Add this
    
  };



  return (
    <div className="container mt-4">
      {data &&
        data.map((item, key) => (
          <div key={key} className="mb-4">
            <h1 className="text-center mb-4">{item.name}</h1>
            <div className="row row-cols-1 row-cols-md-4">
              {item.attributes.map((attr, attrKey) => (
                <div className="col mb-4" key={attrKey}>
                  <div className="card p-2">
                    <div className="d-flex justify-content-center align-items-center mt-3">
                      <img
                        src={attr.icon_url}
                        className="card-img-top"
                        style={imageStyle}
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center">{attr.name}</h5>
                      <p className="card-text">{attr.setting_note}</p>
                       {/* Code before bind action creaters*/}
                       {/*
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-success mx-2"
                        onClick={()=>{dispatch(actionCreators.removeProduct(100))}}
                        >-</button>
                        Add to Cart
                        <button className="btn btn-success mx-2"
                        onClick={()=>dispatch(actionCreators.addProduct(100))}
                        
                        >+</button>
                      </div> 
                      */}
                        {/* Code using bind action creaters*/}
                       <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-success mx-2"
                        onClick={()=>{removeProduct(100)}}>-</button>
                        Add to Cart
                        <button className="btn btn-success mx-2"
                        onClick={()=>addProduct(100)}
                        
                        >+</button>
                      </div> 
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shop;
