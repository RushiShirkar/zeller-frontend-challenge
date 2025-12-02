import { render, screen, fireEvent } from "@testing-library/react";
import RadioGroup from "./index";
import { UserRole } from "../../types";

describe("RadioGroup", () => {
  const mockOptions = [
    { label: "Admin", value: UserRole.ADMIN },
    { label: "Manager", value: UserRole.MANAGER },
  ];

  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it("renders all radio options", () => {
    render(
      <RadioGroup
        value={UserRole.ADMIN}
        onChange={mockOnChange}
        options={mockOptions}
      />
    );

    expect(screen.getByLabelText("Admin")).toBeInTheDocument();
    expect(screen.getByLabelText("Manager")).toBeInTheDocument();
  });

  it("marks the correct option as checked", () => {
    render(
      <RadioGroup
        value={UserRole.ADMIN}
        onChange={mockOnChange}
        options={mockOptions}
      />
    );

    const adminRadio = screen.getByLabelText("Admin") as HTMLInputElement;
    const managerRadio = screen.getByLabelText("Manager") as HTMLInputElement;

    expect(adminRadio.checked).toBe(true);
    expect(managerRadio.checked).toBe(false);
  });

  it("calls onChange when a radio button is clicked", () => {
    render(
      <RadioGroup
        value={UserRole.ADMIN}
        onChange={mockOnChange}
        options={mockOptions}
      />
    );

    const managerRadio = screen.getByLabelText("Manager");
    fireEvent.click(managerRadio);

    expect(mockOnChange).toHaveBeenCalledWith(UserRole.MANAGER);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("calls onChange when clicking on the label", () => {
    render(
      <RadioGroup
        value={UserRole.ADMIN}
        onChange={mockOnChange}
        options={mockOptions}
      />
    );

    const managerLabel = screen.getByText("Manager");
    fireEvent.click(managerLabel);

    expect(mockOnChange).toHaveBeenCalledWith(UserRole.MANAGER);
  });

  it("supports keyboard navigation", () => {
    render(
      <RadioGroup
        value={UserRole.ADMIN}
        onChange={mockOnChange}
        options={mockOptions}
      />
    );

    const adminRadio = screen.getByLabelText("Admin");
    adminRadio.focus();

    // Verify the radio is focused
    expect(document.activeElement).toBe(adminRadio);
  });
});
