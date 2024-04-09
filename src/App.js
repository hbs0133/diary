import './App.css';
import DiaryEditor from './Components/DiaryEditor';
import DiaryList from './Components/DiaryList';
import { useRef, useState } from 'react';

function App() {
  const [diary, setDiary] = useState([]);
  const diaryId = useRef(1);
  const onCreate = (author, content, emotion) => {
    const createdDate = new Date().getTime();
    const newDiary = {
      author,
      content,
      emotion,
      createdDate,
      id: diaryId.current
    };
    diaryId.current += 1;
    setDiary([newDiary, ...diary])
  }
  const onRemove = (targetId) => {
    const newDiaryList = diary.filter((it) => it.id !== targetId);
    setDiary(newDiaryList)
  }
  const onEdit = (targetId, newContent) => {
    setDiary(
      diary.map((it) => it.id === targetId ? {...it, content : newContent} : it)
    )
  }
  return (
    <div className='wrap'>
      <div className="container">
        <DiaryEditor diaryList = {diary} onCreate={onCreate} />
        <DiaryList diaryList={diary} onEdit={onEdit} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default App;
