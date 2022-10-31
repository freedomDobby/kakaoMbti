import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

function Main() {
  const navigation = useNavigate();

  return (
    <div className="mainBody">
      <img
        src="https://kakaofriendsmbti.netlify.app/static/media/00.88f71908.png"
        className="mainImg"
        alt="mainimg"
      ></img>
      <button
        type="button"
        className="btn"
        onClick={() => {
          navigation("/p1");
        }}
      >
        시작하기
      </button>
    </div>
  );
}

const ProgressBar = (props) => {
  const width = (480 / 5) * props.step;
  return (
    <div className="progress-bar">
      <div className="percent" style={{ width: width }}></div>
    </div>
  );
};

const QuestionImag = (props) => {
  return (
    <div>
      <img src={props.image} className="qImg1" alt="q"></img>
    </div>
  );
};

const Answer = (props) => {
  const navigation = useNavigate();

  const { setDispatchType } = React.useContext(StoreContext);

  return (
    <button
      className="btn"
      onClick={() => {
        setDispatchType({
          code: "답변",
          params: {
            value: props.value,
          },
        });

        // const pathname = window.location.pathname;
        // const nextStep = parseInt(pathname.charAt(pathname.length - 1)) + 1;
        // navigation(`/on${nextStep}`);

        // navigation('');
      }}
    >
      {props.text}
    </button>
  );
};

function Page1() {
  return (
    <div>
      <div className="body">
        <ProgressBar step={1} />
        <QuestionImag image="	https://kakaofriendsmbti.netlify.app/images/01-01.png" />
        <Answer
          text="당연하지! 어디서 할지 고민 중이야!"
          value="E"
          nextPathname={1}
        />
        <Answer
          text="그냥 맛있는거 먹으러 갈까 생각 중이야!"
          value="I"
          nextPathname={1}
        />
      </div>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <div className="body">
        <ProgressBar step={2} />
        <QuestionImag image="	https://kakaofriendsmbti.netlify.app/images/02-01.png" />
        <Answer
          text="영화 완전 재미었어! 너도 한번 봐봐!"
          value="S"
          nextPathname={2}
        />
        <Answer
          text="좀비가 너무 리얼했어. 실제 상황이면 난 바로 죽었을거야..."
          value="N"
          nextPathname={2}
        />
      </div>
    </div>
  );
}

function Page3() {
  return (
    <div>
      <div className="body">
        <ProgressBar step={3} />
        <QuestionImag image="		https://kakaofriendsmbti.netlify.app/images/03-01.png" />
        <Answer text="무슨 꽃 샀어? 향은 좋아?" value="T" nextPathname={3} />
        <Answer text="왜 우울해? 무슨 일 있어?" value="F" nextPathname={3} />
      </div>
    </div>
  );
}

function Page4() {
  return (
    <div>
      <div className="body">
        <ProgressBar step={4} />
        <QuestionImag image="	https://kakaofriendsmbti.netlify.app/images/04-01.png" />
        <Answer
          text="지금 PPT 만드는 중이니까 아마 한 2시간 뒤면 끝날거 같아!"
          value="J"
          nextPathname={4}
        />
        <Answer
          text="모르겠어. 근데 지금 PPT 만들고 있어!"
          value="P"
          nextPathname={4}
        />
      </div>
    </div>
  );
}

function Page5() {
  return (
    <div className="body">
      <ProgressBar step={5} />
      <QuestionImag image="		https://kakaofriendsmbti.netlify.app/images/05-01.png" />
      <Answer
        text="그래! 역시 사람 많고 유명한 벚꽃 명소가 예쁘겠지 어디로 갈까?"
        value="E"
        nextPathname={5}
      />
      <Answer
        text="그래! 사람 적은 벚꽃 명소 한 번 찾아볼까?"
        value="I"
        nextPathname={5}
      />
    </div>
  );
}

function Result() {
  return <div>결과화면 !!</div>;
}
const StoreContext = React.createContext({});

/**
 *
 * React useReducer [비지니스 로직 분리되어있는걸 한곳에 마법~]
 */
function App() {
  const [dispatch, setDispatchType] = React.useState({
    code: null,
    params: null,
  });
  const [mbti, setMbti] = React.useState([
    {
      I: 0, // 내향
      E: 0, // 외향
    },
    {
      S: 0, // 현실
      N: 0, // 이상주의
    },
    {
      T: 0, // 이성
      F: 0, // 감성
    },
    {
      P: 0, // 즉흥
      J: 0, // 계획
    },
  ]);

  React.useEffect(() => {
    switch (dispatch.code) {
      /**
       * mbti state값을 바꾸는 로직 구현
       */
      case "답변":
        const { value } = dispatch.params;

        break;

      default:
        break;
    }
  }, [dispatch]);

  return (
    <StoreContext.Provider value={{ setDispatchType }}>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/p1" element={<Page1 />}></Route>
        <Route exact path="/p2" element={<Page2 />}></Route>
        <Route exact path="/p3" element={<Page3 />}></Route>
        <Route exact path="/p4" element={<Page4 />}></Route>
        <Route exact path="/p5" element={<Page5 />}></Route>
        <Route exact path="/p6" element={<Result />}></Route>
      </Routes>
    </StoreContext.Provider>
  );
}

export default App;
