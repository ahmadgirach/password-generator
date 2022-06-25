type Props = {
  id: string;
  checked: boolean;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ToggleButton = ({ id, checked, onChangeHandler }: Props) => {
  return (
    <div className="flex justify-end items-center">
      <input
        type="checkbox"
        name={id}
        id={id}
        className="hidden"
        checked={checked}
        onChange={onChangeHandler}
      />
      <label htmlFor={id} className="toggle-label cursor-pointer">
        <div className="w-12 h-7 flex items-center bg-indigo-300 rounded-full p-1">
          <div className="toggle-dot w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out"></div>
        </div>
      </label>
    </div>
  );
};
