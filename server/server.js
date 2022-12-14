const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("안녕하세요");
});

app.get("/mbti", (req, res) => {
  console.log(req.query);
  res.send("여기는 MBTI 결과값을 리턴해야합니다.");
});

app.listen(port, () => {
  console.log("서버가 실행되었습니다.");
});
