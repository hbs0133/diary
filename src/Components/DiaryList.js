import React from 'react'
import DiaryItem from './DiaryItem'

const DiaryList = ({diaryList, onRemove, onEdit}) => {
  return (
    <div className='DiaryList'>
      <h2> - 일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다</h4>
      <div>
        {diaryList.map((it) => <DiaryItem key={it.id} onEdit={onEdit} onRemove={onRemove} {...it} />)}
      </div>
    </div>
  )
}

export default DiaryList
