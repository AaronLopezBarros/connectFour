const Cell = ({ onClick, value }: { onClick: () => void; value: null | number }) => {
  const paintBackground = () => {
    const colors: { [key: number]: string } = {
      1: 'bg-red-400',
      2: 'bg-yellow-400',
    };

    return value ? colors[value] : 'bg-white';
  };

  return (
    <td onClick={() => onClick()} className='h-12 w-12 cursor-pointer border bg-cyan-400'>
      <div className={`${paintBackground()} h-full w-full rounded-full`}></div>
    </td>
  );
};

export default Cell;
