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
      <div className=""></div>
      <div className="px-10 py-10 ">
        <input
          className="bg-white searchbar w-[100%] h-[30px] rounded"
          type="text"
          onChange={serchtext}
        />
      </div>
    </>
  );
};

export default SerachBox;
