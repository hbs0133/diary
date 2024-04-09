import React, { useRef, useState } from 'react'

const DiaryEditor = ({diaryList ,onCreate}) => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author : "",
    content : "",
    emotion : "좋음"
  });
  const onChangeState = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
      //아부분 배열인거 잘모르겠다.
    })
  }
  const onSubmit = () => {
    if(state.author == ""){
      authorInput.current.focus();
      alert("작성자를 입력해주십시오")
      return
    }
    if(state.content.length < 3) {
      contentInput.current.focus();
      alert("일기를 3자 이상 작성해주십시오")
      return
    }
    if(diaryList.length < 2){
      onCreate(state.author, state.content, state.emotion);
      alert("일기가 작성되었습니다")
      setState({
        author :"",
        content : "",
        emotion : "좋음"
      })
    }else {
      alert("일기는 2개까지 작성할수있습니다")
    }
  }
  return (
    <div className='DiaryEditor'>
      <h1>오늘의 일기</h1>
      <div>
        <input ref={authorInput} name='author'  value={state.author} onChange={onChangeState} placeholder='이름을 입력해주세요'/>
      </div>
      <div>
        <textarea ref={contentInput}  name='content' value={state.content} onChange={onChangeState} placeholder='일기를 작성해주세요'/>
      </div>
      <div>
        <span>오늘 기분 : </span>
        <select name='emotion' value={state.emotion} onChange={onChangeState}>
          <option value={"좋음"} > 좋음</option>
          <option value={"보통"} > 보통</option>
          <option value={"나쁨"} > 나쁨</option>
        </select>
      </div>
      <div>
        <button onClick={onSubmit}>일기 저장하기</button>
      </div>
    </div>
  )
}

export default DiaryEditor
