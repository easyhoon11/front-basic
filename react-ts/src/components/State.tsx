import { useEffect, useState } from "react";

export default function State() {
  // ! state: 컴포넌트가 관리하는 데이터
  // ! 컴포넌트의 렌더링에 영향을 미침
  // ! state가 변경되면 리렌더링 됨

  // ! const [상태명 상태변경함수] = useState<타입>(초기값);
  // ! 상태변경은 반드시 상태변경함수를 통해서 변경을 해야함

  // ! useState를 사용한 상태 선언은 반드시 함수형 컴포넌트
  // ! 자식 수준에서 선언되어야 함
  const [count, setCount] = useState<number>(0);
  const [object, setObject] = useState<Name>({ name: "홍길동" });
  // let count = 0;

  interface Name {
    name: string;
  }

  const onClickHandler1 = () => {
    // ! 상태변경함수를 사용하여 상태를 변경했다고해서
    // ! 그 즉시 상태가 변경되는 것이 아니라
    // ! 해당 함수가 모두 종료되고 변경됨
    setCount(count + 1);
    // alert(count);
  };

  const onClickHandler2 = () => {
    // ! object타입으로 되어있는 상태는
    // ! 그 상태의 속성 값만 변경했다고해서 렌더링이 다시 되지 않음
    // ! 완전 새로운 객체로 상태가 변경되어야 렌더링이 다시 됨
    const newObject = {
      name: "김철수",
    };
    setObject(newObject);
  };

  useEffect(() => {
    console.log("effect 동작!");
  }, []);

  useEffect(() => {
    console.log("count state 변경!");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("component 언마운트!");
    };
  }, []);

  return (
    <div>
      <h1 onClick={onClickHandler1}>{count}</h1>
      <h1 onClick={onClickHandler2}>{object.name}</h1>
    </div>
  );
}
