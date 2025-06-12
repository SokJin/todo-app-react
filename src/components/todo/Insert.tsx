type InsertProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleClick: () => void;
};

export default function Insert({
  inputValue,
  setInputValue,
  handleClick,
}: InsertProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex space-x-2 mb-4 items-center">
      <input
        id="todo-input"
        name="todo"
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="入力してください"
        className="border border-gray-300 rounded px-3 py-1 w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 px-3 py-2 text-sm font-medium text-white rounded transition-colors ml-2"
      >
        追加
      </button>
    </div>
  );
}
