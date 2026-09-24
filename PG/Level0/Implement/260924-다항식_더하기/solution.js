/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 다항식 더하기
유형: 구현
날짜: 2026-09-24
Review 여부: true

# 📰 문제 설명
- 다항식: 한 개 이상의 항의 합으로 이루어진 식
- 다항식을 더할 때는 동류항 끼리 계산하여 정리
- 덧셈으로 이루어진 다항식 polynomial가 매개변수로 주어짐
- 동류할끼리 더한 결과값을 문자열로 반환하는 함수 만들기
- 조건
    - 같은 식이라면 가장 짧은 수식을 반환
    - polynomial에 변수는 "x"만 존재
    - 상수항을 가장 마지막에 둠

# 💡 문제 풀이
- arr 변수를 polynomial에 split(" ")을 적용한 값으로 초기화
- sum, sumX 변수를 0으로 초기화

- for문으로 arr 배열을 순회하며 다음 작업을 수행 (루프 변수: i)
    - i는 2씩 증가 (짝수번째 요소는 "+" 부호이므로)
    - item 변수를 arr[i]로 초기화
    - item[item.length-1] === "x"이면 Number(item.slice(0, item.length-1))을 sumX에 더하기
    - 아니라면 Number(item.slice(0, item.length-1))을 sum에 더하기

- for문 종료 후 다음 작업을 수행
    - 변수 termX는 sumX !== 0이면 `${sumX}x`이고 아니라면 ""
    - 변수 term은 sum !== 0 이면 `${sum}`이고 아니라면 ""
    - termX + term을 반환

# ⏰ 시간복잡도 O(N)
- for문으로 arr 배열을 순회하므로 시간복잡도는 O(N)이다.
- for문 내부의 test() 메서드는 item원소의 길이가 50 미만이므로 상수 시간복잡도를 갖는다고 볼 수 있다.
- 따라서 전체 시간복잡도는 O(N)이다.

# 🚀 알게 된 점
1. split() 메서드로 분할할 때 " "말고 " + "로 하면 결과물이 더 깔끔해짐
2. 제어문(for/if문)을 선언형 메서드(reduce/filter)로 전환하하면 조건 분기의 복잡함을 줄일 수 있다.
3. 문자열 추출 방식을 내장 함수 대신 문자열 메서드(replace)로 전환

# 💭 아쉬운 점
- 이것 저것 아는 내용들을 이어붙이면서 만든 느낌이라 정돈된 느낌을 받지 못한 점이 아쉬웠다.
- 시간이 지난 후에 다시 풀어볼 예정이다.

*/

function solution(polynomial) {
  const answer = [];
  const arr = polynomial.split(" ");
  const len = arr.length;
  let sumX = 0;
  let sum = 0;

  for (let i = 0; i < len; i += 2) {
    const item = arr[i];

    if (/x/.test(item)) item === "x" ? sumX++ : (sumX += parseInt(item));
    else sum += parseInt(item);
  }

  if (sumX !== 0) {
    if (sumX === 1) answer.push("x");
    else answer.push(sumX + "x");
  }
  if (sum !== 0) answer.push(sum);

  return answer.join(" + ");
}

console.log(solution("3x + 7 + x"));
