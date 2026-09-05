/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 직각삼각형 출력하기
유형: 구현
날짜: 2026-08-19
Review 여부: false

# 📰 문제 설명
- 입력값 n에 따라서 너비, 높이가 n인 직각삼각형을 *을 이용하여 출력

# 💡 문제 풀이
- 중첩 반복문을 사용
- 외부 반복문
    - 높이를 담당
    - 가장 윗부분 부터 시작하여 n회 반복
- 내부 반복문
    - 직각삼각형 열의 너비를 담당
    - 반복마다 길이를 1씩 늘림

# ⏰ 시간복잡도: O(n^)
- 총 연산 횟수는 1 + 2 + 3 + ... + n 이다.
- 1 + 2 + 3 + ... + n ===  n(n+1)/2 이다.
- 따라서 시간복잡도는 O(n^)이다.

# 🚀 알게 된 점
- Node.js에서 표준입력(stdin)을 받는 방식
```js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  console.log(Number(input[0]));
});
```
1. readline 모듈 가져오기
    - readline은 Node.js에서 사용자의 입력을 한줄씩 읽기 위한 기능을 제공하는 모듈
    - 터미널에서 입력 들어오는 걸 읽을 수 있게 해줌
    - 입력 스트림을 한 줄씩 읽을 수 있도록 도와주는 기능

2. 입력을 읽는 객체 만들기
    - `readline`의 `createInterface()` 기능을 이용해서 입력을 처리할 수 있는 객체를 생성하여 
    - 해당 객체를 rl에 저장
    - `process.stdin`, `process.stdout`의 
        - process란, 현재 실행 중인 Node.js 프로그램 자체에 대한 정보를 제공하는 객체
        - stdin이란, 표준입력(standard input)으로 프로그램으로 들어오는 입력 통로를 의미
        - stdout이란, 표준출력(standard output)으로 프로그램에서 바깥으로 나가는 출력 통로를 의미
    - rl은 입력을 `process.stdin`에서 받고 출력을 `process.stdout`을 사용하는 객체

3. 입력을 저장할 배열 생성
    - let input = [];

4. line 이벤트
    - on() 메서드란
        - 이벤트가 발생했을 때 실행할 함수를 등록하는 메서드
        - 첫번째 인수: 감시할 이벤트
        - 두번째 인수: 이벤트 발생 시 실행할 함수
    - `rl.on('line', ...)`은 입력이 한줄로 들어오면 해당 함수를 실행하는 뜻

5. close 이벤트
   - `rl.on('close', ...)`은 입력받는 작업이 끝나면 해당 함수를 실행하는 뜻

- vscode로 입력 후 입력 종료 신호 보내는 방법
    - Crtl + D -> EOF (End Of File)을 전달
    - vscode에서는 입력 종료 신호를 직접 보내야 입력 종료

# 💭 아쉬운 점
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const n = Number(input[0]);
  let answer = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      answer += "*";
    }
    answer += "\n";
  }

  console.log(answer);
});
