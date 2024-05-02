type PropTypes = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

function SearchBar(props: PropTypes) {
  const { value, onChange, onSearch } = props;
  return (
    <div className="w-full h-9 flex items-center box-border">
      <input
        onChange={onChange}
        value={value}
        placeholder="Search..."
        className="border-[1.5px] w-full px-2 h-full  rounded border-[#9091a8] rounded-tr-none rounded-br-none  focus:outline-none"
      />
      <button
        onClick={onSearch}
        className="px-4 py-1.5 h-full bg-[#0E612C] text-white text-sm rounded-tr rounded-br font-medium"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
