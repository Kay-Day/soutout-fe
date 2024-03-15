import {
  PDF_CREATE_REVIEW_FAIL,
  PDF_CREATE_REVIEW_REQUEST,
  PDF_CREATE_REVIEW_RESET,
  PDF_CREATE_REVIEW_SUCCESS,
  PDF_DETAILS_FAIL,
  PDF_DETAILS_REQUEST,
  PDF_DETAILS_SUCCESS,
  PDF_LIST_FAIL,
  PDF_LIST_REQUEST,
  PDF_LIST_SUCCESS,
} from "../Constants/PdfConstants";

// PRODUCT LIST
export const pdfListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PDF_LIST_REQUEST:
      return { loading: true, products: [] };
    case PDF_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PDF_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// SINGLE PRODUCT
export const pdfDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PDF_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PDF_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PDF_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// PRODUCT REVIEW CREATE
export const pdfCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case PDF_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PDF_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PDF_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PDF_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
