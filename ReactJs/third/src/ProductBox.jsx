import { useState } from "react";

const ProductBox = (props) => {
    const [like, setLike] = useState(0)
    function addLike() {
        setLike(like + 1);
    }

    function removeLike() {
        setLike(like - 1);
    }
    return (
        <div className="col-lg-3 col-md-6 mb-2">
            <div className="card p-3 product-card">
                <img height={300} src={props.image} alt="" />
                <h5 className="text-center my-3">{props.name}</h5>
                <h6>Total Like : {like}</h6>
                <button className="btn" onClick={addLike}>Like 👍</button>
                <button className="btn" onClick={removeLike}>UnLike 👍</button>
            </div>
        </div>
    )
}

export default ProductBox;