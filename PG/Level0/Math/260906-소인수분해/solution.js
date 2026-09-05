/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 소인수분해
유형: 수학
날짜: 2026-09-06
Review 여부: true

# 📰 문제 설명
- 2이상인 자연수 n이 주어짐
- n의 소인수를 오름차순으로 담은 배열을 반환하는 함수 만들기 

# 💡 문제 풀이
- cntCD() 함수 만들기
    - 소수는 약수(Common Divisor)가 2개이다.
    - 약수의 개수를 반환하는 함수 cntCD()를 만든다. 
- 반복문
    - 소수는 2 이상이다.
    - 따라서 반복문을 2이상 n이하 범위로 지정한다.
    - 조건문으로 n을 i로 나눴을 때 0이면서 cntCD(i)가 2일 때 해당 숫자를 arr 배열에 추가한다.
- 반복문 종료 후 arr를 반환한다.
  - 이미 숫자들을 한번씩 확인해 나가므로 arr에는 중복된 요소가 추가되지 않는다.

# ⏰ 시간복잡도: O(n * sqrt(n))
- cntCD() 함수의 시간복잡도는 O(sqrt(n))이다.
- solution() 함수의 for문은 n번 반복하며, 반복마다 cntCD() 함수를 연산한다. 
- sqrt(2) + sqrt(3) + ... + sqrt(n)번의 연산이 수행되므로 최종적으로는 n * sqrt(n)번의 연산이 수행된다. 

# 🚀 알게 된 점

# 💭 아쉬운 점
- 함수를 새로 만드는 방식말고도 solution 함수 내에서 전부 해결하는 방식으로도 풀어보고싶다.
*/

function cntCD(k) {
  let cnt = 0;
  const sqrt = Math.sqrt(k);

  for (let i = 1; i <= sqrt; i++) {
    if (k % i === 0) {
      if (i * i === k) cnt += 1;
      else cnt += 2;
    }
  }

  return cnt;
}

function solution(n) {
  const arr = [];

  for (let i = 2; i <= n; i++) {
    if (cntCD(i) === 2 && n % i === 0) arr.push(i);
  }

  return arr;
}

console.log(solution(12));
