/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 숨어있는 숫자의 덧셈 (2)
유형: 문자열
날짜: 2026-09-25
Review 여부: false

# 📰 문제 설명
- 문자열 my_string이 주어짐
- my_string안의 자연수들의 합을 반환하는 함수 만들기
- my_string은 영문 대소문자, 자연수로 구성됨

# 💡 문제 풀이
- sum 변수를 0으로 초기화
- word 변수를 ""으로 초기화
- for문으로 my_string을 순회하며 다음 작업을 수행
    - my_string[i]의 값이 문자열이라면, 
        - word === ""이면 continue
        - word !== ""이면 sum에 Number(word)를 더한 후 word에 ""를 재할당 
    - 아니라면(숫자라면) my_string[i]를 word에 더하기
- for문 종료 후, word !== ""이면 sum에 Number(word)를 더함
- sum 반환

# ⏰ 시간복잡도 O(N)
- for문은 my_string의 길이만큼 반복하므로 반복문의 시간복잡도는 O(N)이다.
- test() 메서드는 고정된 범위에 대해서 동작하므로 시간복잡도는 O(1)이다.
- 따라서 전체 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- ES6 문법으로 푸는 시도를 해보지 못했다.
- 시간이 지난 후에 다시 시도 해볼 예정이다.

*/

function solution(my_string) {
  let sum = 0;
  let word = "";
  const len = my_string.length;

  for (let i = 0; i < len; i++) {
    if (/[^0-9]/.test(my_string[i])) {
      if (word !== "") {
        sum += Number(word);
        word = "";
      }
    } else word += my_string[i];
  }

  if (word !== "") sum += Number(word);

  return sum;
}

console.log(solution("aAb1B2cC34oOp"));
