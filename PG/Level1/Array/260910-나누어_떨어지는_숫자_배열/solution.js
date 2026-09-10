/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 나누어 떨어지는 숫자 배열
유형: 수학
날짜: 2026-09-10
Review 여부: false

# 📰 문제 설명
- 자연수 배열 array와 divisor 자연수가 주어짐
- array의 각 요소들 중 divisor로 나누어 떨어지는 수를 오름차순으로 정렬한 배열을 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. 반복문 활용
  - 빈배열 arr 생성
  - 반복분으로 array를 순회하면 각 요소들을 divisor로 나눠보기
      - 나머지가 0이라면 arr에 추가
      - 아니라면 continue
  - 반복문 종료 후 arr의 길이 확인
      - 0이 아니라면 arr에 sort() 메서드 적용 후 arr 배열 반환
      - 0이라면 -1 반환

- 방식2. filter 메서드 사용
  - array메서드에 filter() 메서드를 적용시킨 결과값을 변수 arr에 저장
  - arr의 길이가 0이라면 arr에 arr 배열에 -1을 추가
  - arr의 길이가 0이 아니라면 arr에 sort() 메서드 저굥ㅇ
  - arr 반환

# ⏰ 시간복잡도: O(n)
- array의 길이만큼 반복하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- filter 메서드는 원본 불변 메서드이다.

# 💭 아쉬운 점
- filter 메서드를 시도해보았지만 미숙함으로 인해 문제를 해결하지는 못했다.
*/

function solution(array, divisor) {
  // 방식1. 반복문 활용
  /*
  const arr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % divisor === 0) arr.push(array[i]);
  }

  if (arr.length === 0) {
    arr.push(-1);
    return arr;
  } else {
    arr.sort((a, b) => a - b);
    return arr;
  }
    */
  // 방식2. filter() 메서드 사용
  const arr = array.filter((item) => item % divisor === 0);

  arr.length === 0 ? arr.push(-1) : arr.sort((a, b) => a - b);

  return arr;
}

console.log(solution([5, 9, 7, 10], 5));
