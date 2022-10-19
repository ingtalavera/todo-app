import { IconCheck } from "../assets";

export type CheckboxProps = {
  checked?: boolean
  onToggle?: () => void
}

export const Checkbox = ({ checked = false, onToggle }: CheckboxProps) => {

  const handleClick = () => {
    if (!onToggle) return;
    onToggle();
  }

  return (
    <div
      className="rounded-full w-5 h-5 bg-light-grayish-blue dark:bg-dark-very-grayish-blue p-[1px] hover:bg-gradient-to-br from-check-start to-check-end"
      role="button"
      aria-label="checkbox"
      onClick={handleClick}
    >
      <div
        className={`h-full w-full rounded-full bg-light-very-gray dark:bg-dark-very-desaturated-blue grid place-content-center
          ${checked && 'bg-gradient-to-br from-check-start to-check-end'}`}
      >
        {
          checked && <img src={IconCheck} alt="Icon Check" />
        }
      </div>
    </div>
  )

};

