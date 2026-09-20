/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 같은 숫자는 싫어
유형: 문자열
날짜: 2026-09-20
Review 여부: true

# 📰 문제 설명
- 숫자 배열 arr가 주어짐
- 연속적으로 나타나는 숫자는 하나만 남기고 제거
- 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 함
- 예시: arr = [1, 1, 3, 3, 0, 1, 1] 일 때, [1, 3, 0, 1]을 반환

# 💡 문제 풀이
- 기존 방식 -> 오답
  1. answer 변수를 빈배열로 초기화
  2. for문으로 arr를 순회하며 다음 작업을 수행
    - answer 배열에 arr[i]값을 추가
    - answer의 i번째 인덱스와 i-1번째 인덱스의 값이 같다면, pop() 메서드 실행
  3. for문 종료 후 answer 배열 반환

- 개선 방식1. answer 배열을 빈배열로 초기화
  1. answer 변수를 빈배열로 초기화
  2. for문으로 arr 배열을 순회하며 다음 작업을 수행
    - answer 배열의 마지막 인덱스의 요소와 arr[i]의 값이 다르다면 answer 배열에 arr[i]를 추가
    - 이 때 i가 0인 경우 answer[-1]과 arr[i]를 비교하는데, answer[-1]은 undefined를 반환하므로 코드는 정상적으로 작동한다.
  3. for문 종료 후 answer 배열 반환

- 개선 방식2. answer 배열을 arr[0] 을 갖는 배열로 초기화
  1. answer 변수를 arr[0] 요소를 갖는 배열로 초기화
  2. for문으로 arr 배열을 순회하며 다음 작업을 수행
    - answer 배열의 마지막 인덱스의 요소와 arr[i]값이 다르다면 answer 배열에 arr[i]를 추가
  3. for문 종료 후 answer 배열 반환

- 개선 방식3. for문 내부에서 arr 배열만 참조
  1. answer 배열을 빈배열로 초기화
  2. for문으로 arr 배열을 순회하며 다음 작업을 수행
    - i가 0인 경우 answer 배열에 arr[0]을 추가하고 continue
    - i가 0이 아닌 경우 다음 작업을 수행
      - arr[i]가 arr[i-1]과 다르면 answer 배열에 arr[i] 추가
  3. for문 종료 후 answer 배열 반환 

# ⏰ 시간복잡도 O(n)
- for문은 arr배열의 길이만큼 작업을 수행하며 내부 수행 작업은 O(1)의 시간복잡도를 가지므로,
- 전체 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- 기존 방식에서 알게된 점
  - for문으로 특정 배열을 탐색할 때, 다른 배열을 참조하는 경우 i번째 인덱스가 두 배열 모두 같은 순서를 참조하는지 확인하는 것이 필요하다.
  - answer에서 중복을 제거하면서 원소의 개수가 달라졌기 때문

- 개선방식1에서 알게된 점
  - 배열의 존재하지 않는 인덱스를 호출해도 오류는 발생시키지 않고 undefined를 반환한다.

- 개선방식3에서 알게된 점
  - arr[i]가 arr[i-1]과 같다면 arr[i]를 추가하지 않는다. -> answer 배열에 arr[i]와 같은 값이 이미 추가되어있기 때문 
  - arr[i]가 arr[i-1]과 다르다면 arr[i]를 추가한다. -> answer 배열의 마지막 요소가 arr[i]와 다르기 때문

# 💭 아쉬운 점
- 문제의 유형이 스택/큐라는 것을 보고 스택의 특성을 활용하는 것에 대한 집착을 하면서 풀었던 것 같다.
- 그 결과 pop()을 사용하기 위한 풀이를 위한 코드를 작성하게 되었고, 
- 이는 arr, answer 두 배열을 참조하는 인덱스의 순서가 어긋나게 되며 오류가 발생하는 풀이로 이어졌다.
- 만약 의도한대로 풀게되었더라도, push후 answer 배열 내에서 판단하여 pop을 하는 행위는 arr 배열 내에서 판단하여 push를 하는 방식보다 비효율적인 방법이었다.
*/

function solution(arr) {
  // 기존 방식 -> 오답
  /*
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    answer.push(arr[i]);
    if (answer[i] === answer[i - 1]) answer.pop();
  }

  return answer;
  */

  // 개선 방식1. answer 배열을 빈배열로 초기화
  /*
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) answer.push(arr[i]);
  }

  return answer;
  */

  // 개선 방식2. answer 배열에 arr[i]요소를 갖는 배열로 초기화
  /*
  const answer = [arr[0]];
  
  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) answer.push(arr[i]);
    }
    
    return answer;
    */

  // 개선 방식3. for문 내부에서 arr 배열만 참조하기
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      answer.push(arr[i]);
      continue;
    }

    if (arr[i] !== arr[i - 1]) answer.push(arr[i]);
  }

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
