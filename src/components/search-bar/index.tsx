type PropTypes = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  searching?: boolean;
};

function SearchBar(props: PropTypes) {
  const { value, onChange, onSearch, searching } = props;
  return (
    <div className="w-full h-9 flex items-center box-border">
      <input
        onChange={onChange}
        value={value}
        placeholder="Search..."
        className="border-[1.5px] w-full px-2 h-full  rounded border-[#9091a8] rounded-tr-none rounded-br-none  focus:outline-none"
      />
      <button
        disabled={searching}
        onClick={onSearch}
        className="w-[4.6875rem] py-1.5 h-full bg-[#0E612C] text-white text-sm rounded-tr rounded-br font-medium"
      >
        {searching ? <Loader /> : "Search"}
      </button>
    </div>
  );
}

function Loader() {
  return (
    <div
      className="inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

export default SearchBar;
