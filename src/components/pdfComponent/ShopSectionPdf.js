import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../homeComponents/Rating";
import Pagination from "../homeComponents/pagination";
import { useDispatch, useSelector } from "react-redux";
import { listPdf } from "../../Redux/Actions/PdfActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const ShopSectionPdf = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.pdfList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listPdf());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/pdf/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/pdf/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* Pagination */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSectionPdf;
