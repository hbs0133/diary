import React, { useRef, useState } from 'react'

const DiaryItem = ({onEdit, onRemove, author, content, emotion, createdDate, id}) => {
  const ogContentInput = useRef();
  const [ogContent, setOgContent] = useState(content)
  const [isEdit, setIsEdit] = useState(false)
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const onClickRemove = () => {
    if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
      onRemove(id)
    }
  }
  const onClickEdit = () => {
    if(ogContent.length < 3) {
      ogContentInput.current.focus();
      alert("일기를 3자 이상 작성해주십시오")
      return;
    }
    if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, ogContent);
      toggleIsEdit();
    }
  } 


  const onClickQuitEdit = () => {
    setIsEdit(false);
    setOgContent(content)
  }
  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span>작성자 : {author}< br /> 감정 :  {emotion}</span>
        <span className='date'>{new Date(createdDate).toDateString()}</span>
      </div>
      <div className='content'>
      {isEdit ? (<textarea ref={ogContentInput} value={ogContent} onChange={(e) => setOgContent(e.target.value)} />) : (content)}
      </div>
      <div className='btn'>
        {isEdit ? (
        <>
          <button onClick={onClickQuitEdit}>수정취소</button>
          <button onClick={onClickEdit}>수정완료</button>
        </>) 
        : (
        <>
          <button onClick={onClickRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
        )

        }
      </div>
    </div>
  )
}

export default DiaryItem
