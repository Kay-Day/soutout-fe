import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Dialog from "../Dialog.js";

const Category = () => {
  const [listCategory, setListCategory] = useState([]);
  const history = useHistory();
  const { item } = useParams();
  const [idShow, setIdShow] = useState(null);
  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    return new Promise(async () => {
      const res = await axios.get("http://localhost:5000/api/category/all/status");
      if (res.status === 200) {
        setListCategory(res.data);
      }
    });
  }, []);

  const redirectPage = (href) => {
    // history.push(`/category/${href}`);
    setIdShow(href);
    setDialog(true);
  };

  return (
    <>
      <div className="row">
        <ul className="menu">
          {listCategory.map((i) => (
            <li
              className={item === i._id ? `active menu-item` : "menu-item "}
              onClick={() => redirectPage(i._id)}
            >
              {i.name}
            </li>
          ))}
        </ul>
      </div>
      {idShow && (
        <Dialog
          isOpenDialog={dialog}
          setCloseDialog={() => setDialog(false)}
          idParent={idShow}
        />
      )}
    </>
  );
};

export default Category;
