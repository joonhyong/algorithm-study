/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 최빈값 구하기
유형: 구현
날짜: 2026-08-12
Review 여부: true

# 📰 문제 설명
- 정수 배열 array가 매개변수로 주어질 때, 최빈값을 반환하는 함수 구현하기
- 최빈값이 여러개면 -1을 반환

# 💡 문제 풀이
1. array의 최댓값 maxNum 찾기
2. 길이가 maxNum + 1인 countArr 배열 생성 -> 해당 배열의 인덱스를 array 요소로 보기 위함
3. array 배열을 순회하여 각 요소들의 개수를 카운팅 -> countArr의 array[i] 인덱스에 해당하는 요소를 1 증가
4. countArr의 최댓값 countMax 찾기
5. cnt 변수를 생성하고, countArr 배열을 순회하여 maxCount 값을 발견할 때 마다 cnt 변수 +1 증가
6. cnt 변수가 1이면 countArr에서 countMax값을 갖는 요소의 인덱스 반환, cnt 변수가 1이 아니면 -1 반환

# ⏰ 시간복잡도: O(n)
- Math.max(...array) -> O(n)
- for -> O(n)
- Math.max(...countArr) -> O(m)
- for -> O(m)
- 이므로 결과적으로 O(n + m)이다.
- 이 때, 문제의 array 요소의 최댓값이 1000 이하로 제한되어 있으므로
- m은 상수 취급하여 최종 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- 배열 생성 방법
    1. 길이가 n이고 요소를 0으로 초기화한 배열 생성 -> new Array(n).fill(0) 혹은 Array.from({length: n}, () => 0)
    2. 길이가 n이고 요소를 인덱스 + 1로 갖는 배열 생성 -> Array.from({length: n}, (_, i) => i + 1)
- 주어진 array 배열의 최댓값 + 1을 길이로 갖는 배열을 생성하여, 해당 요소들을 array 배열의 요소들로 보고 카운팅하는 방법
- indexOf() 메서드
    - 인수로 전달한 요소의 인덱스를 반환
    - countArr의 인덱스가 array의 요소이므로 사용됨

    # 💭 아쉬운 점
1. countArr 배열 생성을 헷갈림
2. 반환하는 값을 헷갈림
 */

function solution(array) {
  let answer = 0;
  const maxNum = Math.max(...array);
  const countArr = new Array(maxNum + 1).fill(0);

  for (let i = 0; i < array.length; i++) {
    countArr[array[i]]++;
  }

  const maxCount = Math.max(...countArr);
  let cnt = 0;

  for (let j = 0; j < countArr.length; j++) {
    if (countArr[j] === maxCount) {
      cnt++;
    }
  }

  cnt === 1 ? (answer = countArr.indexOf(maxCount)) : (answer = -1);

  return answer;
}

console.log(solution());
