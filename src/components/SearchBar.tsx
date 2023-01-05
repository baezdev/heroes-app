import { BiSearchAlt } from "react-icons/bi";

interface Props {
  value: string;
  handleChange: (e: React.SyntheticEvent) => void;
}

export const SearchBar = ({ value, handleChange }: Props) => {
  return (
    <form className="mx-3 md:mx-0 md:w-2/5 border-4 px-5 py-2 rounded-lg flex items-center border-black gap-5">
      <span className="bg-black rounded-full p-3 text-2xl text-white">
        <BiSearchAlt />
      </span>
      <input
        type="text"
        className="w-full outline-none text-2xl font-bold capitalize placeholder:text-black leading-none"
        placeholder="Search Hero"
        name="search"
        autoComplete="off"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};
