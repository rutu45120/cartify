import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className=" w-96">
      <div
        className="bg-white
        rounded-sm
         py-1
        flex
        
        items-center
        

        "
      >
        <input
          type="text"
          className="px-3 w-8/9 outline-none bg-transparent"
          placeholder="Search"
        />
        <button
          className="flex w-1/9 items-center    justify-center  cursor-pointer  
         rounded-e-sm
         border-s
         border-s-gray-300
         
         "
        >
          <FiSearch className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
