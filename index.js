//node는 브라우저가 아닌 곳에서도 javascript를 실행할 수 있도록 나온 어플리케이션입니다.
//우리가 브라우저가 아닌 곳에서도 node.js를 이용하면 javascript를 실행할 수 있습니다.
//우리가 React를 개발할 때는 ES6를 기반으로 하기에 import와 export를 사용해서 모듈을 불러왔습니다.
// 그러나 사실 Node 에서는 기본으로 채택된 문법이 ES6 문법이 아닌 Common JS 방식을 사용합니다.
//CommonJS는 ES6 문법과 유사합니다. 다만 모듈 로딩에서 차이가 있다는 정도만 알고 계시면 됩니다.
//export를 할 때 module.exports 를 이용합니다. import할 때는 require 방식을 이용해서 불러옵니다.

var http = require("http"); // node 내장 모듈 불러옴
var hostname = "127.0.0.1"; // localhost와 동일
var port = 8080;

// 서버에서 요청이 왔을 때 콜백 구조로 호출
//res는 response 객체를 의미하며 클라이언트에 응답을 해줄 때 사용됩니다.
//end 함수는 문자열을 보낸다.
const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;

  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" }); // 데이터의 형식의 타입을 알려주는 content-type
      const products = JSON.stringify([
        //배열 형태를 스트링으로 바꿔주는 함수
        {
          name: "농구공",
          price: 5000,
        },
      ]);
      res.end(products);
    } else if (method === "POST") {
      res.end("생성되었습니다!");
    } else {
      res.end("Good Bye");
    }
  }
  res.end("Good Bye");
});

server.listen(port, hostname); //port hostname으로 요청을 기다리겠다는 listen함수
//기다리고 있다가 요청이 왔을 때 createServer함수 실행

console.log("grab market server on!");
