import "./App.css";
import Typescript from "./Typescript";
import Component from "./components/Component";
import State from "./components/State";

function App() {
  return (
    <div>
      <State />



      {/* {mock.map((item) => (<Component title={item.title} content={item.content} />))}
      { true && (<div>true</div>) }
      { true ? (<div>true</div>) : (<div>false</div>) } */}
    </div>
  );
}

export default App;

const mock = [
  {
    title: '1 번째 제목',
    content: '안녕하세요 반갑습니다.'
  },
  {
    title: '2 번째 제목',
    content: '안녕하세요 반갑습니다.'
  },
  {
    title: '3 번째 제목',
    content: '안녕하세요 반갑습니다.'
  },
  {
    title: '4 번째 제목',
    content: '안녕하세요 반갑습니다.'
  },
  {
    title: '5 번째 제목',
    content: '안녕하세요 반갑습니다.'
  },
  
];