function SearchBar() {
  return (
    <div className="w-full h-9 flex items-center box-border">
      <input
        placeholder="Search..."
        className="border-[1.5px] w-full px-2 h-full  rounded border-[#9091a8] rounded-tr-none rounded-br-none  focus:outline-none"
      />
      <button className="px-4 py-1.5 h-full bg-[#0E612C] text-white text-sm rounded-tr rounded-br font-medium">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
