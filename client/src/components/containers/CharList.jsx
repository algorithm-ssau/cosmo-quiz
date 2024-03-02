import CharBox from '../ui/CharBox';

export default function CharList({ charList }) {
  return (
    <div className='flex flex-wrap gap-2'>
      {charList.map((value, index) => {
        return (
          <CharBox key={index} pushClick={() => {}} spliceClick={() => {}}>
            {value}
          </CharBox>
        );
      })}
    </div>
  );
}
