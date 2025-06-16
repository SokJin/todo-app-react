type StatusToggleProps = {
  completed: boolean;
  onToggle: () => void;
};

const StatusToggle = ({ completed, onToggle }: StatusToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className={`relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none
        ${completed ? 'bg-green-500' : 'bg-gray-300'}
      `}
      aria-pressed={completed}
      aria-label="完了状態の切り替え"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300
          ${completed ? 'translate-x-5' : 'translate-x-0'}
        `}
      />
    </button>
  );
};

export default StatusToggle;
