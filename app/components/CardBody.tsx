interface Props {
  onAdd:        () => void;
  onReset:      () => void;
  onSubstract:  () => void;
}

export const CardBody = ({ onAdd, onReset, onSubstract }: Props) => {
  return (
    <>
    <div className="grid gap-2 grid-cols-2">
      <button
        className="whitespace-nowrap rounded-lg bg-indigo-500 mt-5 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
        onClick={ onAdd }
      >
        Add +1
      </button>
      
      <button
        className="whitespace-nowrap rounded-lg bg-red-500 mt-5 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-red-950/10 hover:bg-red-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-red-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
        onClick={ onSubstract }
      >
        Substract -1
      </button>
    </div>

    <button
      className="w-full whitespace-nowrap rounded-lg bg-gray-500 mt-2 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-gray-950/10 hover:bg-gray-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
      onClick={ onReset }
    >
      Reset
    </button>
    </>
  )
}
