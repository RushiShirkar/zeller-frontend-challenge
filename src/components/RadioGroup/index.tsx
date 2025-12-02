import { useId } from "react";

interface RadioOption<T> {
  label: string;
  value: T;
}

interface RadioGroupProps<T> {
  label?: string;
  name?: string;
  value: T;
  onChange: (value: T) => void;
  options: RadioOption<T>[];
  direction?: "horizontal" | "vertical";
}

function RadioGroup<T extends string | number>({
  label,
  name,
  value,
  onChange,
  options,
  direction = "vertical",
}: RadioGroupProps<T>) {
  const uniqueId = useId();
  const groupName = name || `radio-group-${uniqueId}`;

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
          const optionId = `${groupName}-${option.value}`;

          return (
            <div key={String(option.value)} className="flex items-center">
              <input
                id={optionId}
                type="radio"
                name={groupName}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className="h-5 w-5 cursor-pointer text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor={optionId}
                className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}

export default RadioGroup;
