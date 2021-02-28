
export const Grid = ({ row, children, _class, repeat = 1, fragment = '1fr' }) => {
  /* istanbul ignore next */
  const gridStyling = {
    display: 'grid',
    [row ? 'gridRowColumns' : 'gridTemplateColumns']: `repeat(${repeat}, ${fragment}`,
  };

  return (
    <div className={_class} style={gridStyling}>
      {children}
    </div>
  );
}
