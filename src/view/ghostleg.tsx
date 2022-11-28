import { useState } from 'react'

import './ghostleg.css'

type Column = { head: string, tail: string };

const newColumn = (head='name', tail='tail') => ({ head, tail });

const ghostLeg = () => {
  const [ columns, setColumns ] = useState<Column[]>([newColumn(), newColumn(), newColumn()])
  
  const addColumn = () => {
    setColumns([...columns, newColumn()])
  }
  
  const deleteColumn = (idx: number) => {
    if (idx < columns.length && idx >= 0)
      setColumns(columns.filter((_, i) => i != idx))
  }

  return (
    <>
    <main>  
      <div className='ladder'>
        { columns.map(({ head, tail }, idx) => (
          <div className='column' key={idx}>
            <div className='ladderHead'>
              <button>{head}</button>
            </div>
            <div className='line' />
            <div className='ladderTail'>
              <button>{tail}</button>
            </div>
            <div className='delete'>
              <button onClick = {() => deleteColumn(idx)}>-</button>
            </div>
          </div>
        )) }
        <div className='column' id='plusButton'>
          <button onClick = {addColumn} >+</button>
        </div>
      </div>
    </main>
    <div className='foot'>
      <h3> contact us </h3>
    </div>

    </>
  )
}

export default ghostLeg;
