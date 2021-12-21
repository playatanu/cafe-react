import "../components/searchBox.css";

import { useDispatch } from "react-redux";
import { searchText } from "../actions";

const SerachBox = () => {
  const dispatch = useDispatch();
  const serchtext = (ele) => {
    console.log(ele.target.value);
    dispatch(searchText(ele.target.value));
  };

  return (
    <>
      <input className="searchbar" type="text" onChange={serchtext} />
    </>
  );
};

export default SerachBox;
