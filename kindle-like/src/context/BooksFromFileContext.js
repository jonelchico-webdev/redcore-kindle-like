import createDataContext from "./createDataContext";
import bookServer from "../api/bookServer";


const bookReducer = (state, action) => {
  switch (action.type) {
    case "get_books":
      return action.payload;
    default:
      return state;
  }
};


const getBooks = (dispatch) => async () => {
  try {
    const response = await bookServer.get("./bookList");
    dispatch({ type: "get_books", payload: response.data });
  } catch (e) {
    alert(e)
  }

};

export const { Provider, Context } = createDataContext(
  bookReducer,
  { getBooks },
  []
);
