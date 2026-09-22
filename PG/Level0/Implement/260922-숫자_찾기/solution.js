/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 숫자 찾기
유형: 구현
날짜: 2026-09-21
Review 여부: false

# 📰 문제 설명
- 정수 num과 k가 매개변수로 주어짐
- num을 이루는 숫자 중에 k가 있으면, num의 그 숫자가 있는 자리를 반환하고
- 없다면, -1을 반환하는 함수 만들기

# 💡 문제 풀이
- num에 toString(), split(), map() 메서드를 적용시켜 각 자리의 수를 요소로 갖는 배열로 변환
- 해당 배열에 indexOf()메서드를 적용시킨 결과값에 1을 더하여 반환  

# ⏰ 시간복잡도 O(log n)
- 숫자값 n의 자릿수를 d라고 할 때, d = ⌊log10 n⌋ + 1 이다.
- toString() 메서드의 시간복잡도는 O(log n)이다.
- split(), map()의 시간복잡도와 indexOf()의 최악의 상황의 시간복잡도가 O(len)이다. (len는 대상 데이터의 길이)
- 해당 메서드의 연산은 순차적으로 진행되므로 전체 시간복잡도는 O(log n)이다.

# 🚀 알게 된 점
- falsy는 false, 0, -0, 0n, "", null, undefined, NaN로 총 8가지이다.

# 💭 아쉬운 점
- answer에 indexOf()의 결과값을 할당하고 해당 값이 -1이면 -1을, 아니라면 answer + 1을 반환하는 코드를 작성함
- 이 때, 삼항연산자를 사용하였는데 -1을 falsy값으로 착각함

*/

function solution(num, k) {
  const answer = num.toString().split("").map(Number).indexOf(k);
  return answer === -1 ? -1 : answer + 1;
}

console.log(solution(29183, 1));
