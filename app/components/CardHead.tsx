interface Props {
  value: number;
}

export const CardHead = ({ value }: Props) => {
  return (
    <div className="grid justify-items-center">
      <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">Value</div>
      <div className="items-baseline mb-2">
        <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">{ value }</span>
      </div>
    </div>
  )
}
