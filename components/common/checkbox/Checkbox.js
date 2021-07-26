export default function Checkbox({
  id,
  text,
  dataAttributes,
  selector,
  onCheck,
}) {
  return (
    <div className={'custom-control custom-checkbox'}>
      <input
        type={'checkbox'}
        className={`custom-control-input ${selector && selector} border-1`}
        id={id}
        name={id}
        {...(dataAttributes ? dataAttributes : null)}
        {...(onCheck && { onClick: onCheck })}
      />
      <label className={'custom-control-label'} htmlFor={id}>
        {text}
      </label>
    </div>
  );
}
