/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 두 정수의 합
유형: 구현
날짜: 2026-08-24
Review 여부: false

# 📰 문제 설명
- 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 반환하는 함수 만들기
- a와 b가 같은 경우 둘 중 아무 수나 리턴

# 💡 문제 풀이
- answer 변수 생성
- 조건문
    - a === b인 경우: answer = a
    - a < b인 경우: for문으로 a부터 b까지 answer에 순차적으로 더해나가기
    - a > b인 경우: for문으로 b부터 a까지 answer에 순차적으로 더해나가기 

# ⏰ 시간복잡도 O(N)
- for문의 반복횟수는 |a - b|으로 입력값에 의해 정해진다.
- 따라서 시간복잡도는 O(N)이다.

# 🚀 알게 된 점
- ES6문법보다 for문으로 구현하는게 더 코드가 깔끔한 경우도 있다.

# 💭 아쉬운 점
- Math 정적 메서드를 활용하여 가우스의 법칙으로 구현하는 방법을 생각해내지 못한점

*/

function solution(a, b) {
  // 방법1. 조건문과 for문
  /*
    let answer = 0;
    
    if (a===b) answer = a;
    else if (a > b) {
        for (let i = b ; i <= a ; i++) {
            answer += i;
        }
    }
    else if (a < b) {
        for (let i = a ; i <= b ; i++) {
            answer += i;
        }
    }
    
    return answer;
    */

  // 방법2. 배열과 reduce 메서드
  let answer = 0;

  if (a === b) answer = a;
  else if (a > b) {
    const arr = Array.from({ length: a - b + 1 }, (_, i) => i + b);
    answer = arr.reduce((acc, cur) => {
      return (acc += cur);
    });
  } else if (a < b) {
    const arr = Array.from({ length: b - a + 1 }, (_, i) => i + a);
    answer = arr.reduce((acc, cur) => {
      return (acc += cur);
    });
  }

  return answer;
}

console.log(solution(5, 3));
