interface RadioOption<T> {
  label: string;
  value: T;
}

interface RadioGroupProps<T> {
  label?: string;
  value: T;
  onChange: (value: T) => void;
  options: RadioOption<T>[];
  direction?: "horizontal" | "vertical"; // NEW
}

function RadioGroup<T extends string | number>({
  label,
  value,
  onChange,
  options,
  direction = "vertical",
}: RadioGroupProps<T>) {
  return (
    <fieldset className="space-y-3">
      {label && (
        <legend className="text-lg font-semibold text-gray-900">{label}</legend>
      )}

      <div
        className={
          direction === "horizontal"
            ? "flex flex-row space-x-6"
            : "flex flex-col space-y-3"
        }
      >
        {options.map((option) => {
          const id = `radio-${String(option.value)}`;

          return (
            <label
              key={option.value}
              htmlFor={id}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                id={id}
                type="radio"
                name={label}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className="h-5 w-5 cursor-pointer text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default RadioGroup;
