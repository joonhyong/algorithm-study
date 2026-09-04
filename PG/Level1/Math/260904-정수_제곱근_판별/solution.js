/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 정수 내림차순으로 배치하기
유형: 배열
날짜: 2026-09-03
Review 여부: false

# 📰 문제 설명
- 양의 정수 n이 주어짐
- n이 어떤 양의 정수 x의 제곱이면 x+1 반환, 아니라면 -1을 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. 반복문 사용
  0.[x, answer] = [1, 0] 로 초기화   
  1. while문 조건식: x*x < n
  2. x*x === n이면 return answer = x+1
  3. while문이 조건식에 의해 종료되면 return -1

- 방식2. Math.sqrt() 메서드 사용
  1. n에 Math.sqrt() 메서드 적용한 값을 변수 x에 할당
  2. Math.ceil(x) === Math.trunc(x)이면 x+1의 제곱 반환
  3. 아니라면 -1 반환

# ⏰ 시간복잡도: O(n)

# 🚀 알게 된 점

# 💭 아쉬운 점
*/

function solution(n) {
  // 방식1. while문 사용
  let x = 1;
  let answer = -1;

  while (x * x < n) {
    if (x * x === n) {
      answer = (x + 1) * (x + 1);
      break;
    }
    x++;
  }

  return answer;

  // 방식2. Math.sqrt() 메서드 사용
  /*
  const x = Math.sqrt(n);
  if (Math.ceil(x) === Math.trunc(x)) return (x + 1) * (x + 1);
  else return -1;
  */
}

console.log(solution(121));
