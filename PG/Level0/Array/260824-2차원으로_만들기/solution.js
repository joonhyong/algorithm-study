/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 2차원으로 만들기
유형: 배열
날짜: 2026-08-24
Review 여부: false

# 📰 문제 설명
- 정수 배열 num_list와 정수 n이 주어짐
- 이 때 num_list의 길이는 n의 배수
- num_list를 길이가 n인 배열을 요소로 갖는 2차원 배열로 변환하기
- 2차원 배열은 num_list들의 원소들을 앞에서부터 n개씩 나눠진 배열을 요소로 가짐

# 💡 문제 풀이
- 방법1. 중첩 for문
    - 외부 반복문
        - answer에 추가할 요소 배열인 itemOfAnswer 배열 생성
        - 내부 반복문 작업 수행하여 itemOfAnswer 배열 채우기
        - 내부 반복문 종료 후 answer 배열에 itemOfAnswer 배열 추가
    - 내부 반복문
        - num_list 배열을 순회하며 itemOAnswer 배열의 요소로 추가
        - 시작 인덱스는 외부 반복문의 i이며 n만큼씩 순회

- 방법2. slice 메서드
    - answer 배열에 num_list의 요소들을 slice로 잘라내어 추가한다.
    - slice메서드의 반환값은 배열이므로 빈배열 생성할 필요가 없다.
    - 반복문의 루프 제어 변수 i를 n씩 증가시킨다.


# ⏰ 시간복잡도
- "방법1. 중첩 for문 사용"의 시간복잡도: O(N)
    - 외부 반복문은 num_list/n 회 반복하며
    - 내부 반복문은 n회 반복한다.
    - O(num_list.length/n * n)이므로 최종 시간복잡도는 O(N)이다.
- "방법2,3 splice 메서드"의 시간복잡도: O(n)
    - for문은 num_list/n회 반복
    - 내부 수행 작업에서 slice()메서드가 n회 연산을 수행
    - O(num_list.length/n * n)이므로 최종 시간복잡도는 O(N)이다.
- N은 입력값 num_list의 길이이다.


# 🚀 알게 된 점
- mutate란, 원본을 수정하는 메서드의 특징을,
- immutate란, 원본을 수정하지 않는 메서드의 특징을 의미한다.

# 💭 아쉬운 점
- 방법1 - 중첩 for문으로 문제를 풀었을 때,
    - 문제 발생
        - (1) 외부 반목문의 범위 지정 실수
            - i의 반복 범위를 num_list.length가 아닌 num_list.length/n으로
            - lenOfAnswer회 반복하는게 목적인데 이를 충족시키지 못함
        - (2) 2차원 배열의 요소 itemOfAnswer를 생성하는 위치 실수
            - itemOfAnswer 배열을 solution 함수의 지역 변수로 선언하고
            - 내부 반복문 종료 후에 answer 배열에 push 후 itemOfAnswer.splice(0)으로 초기화하는 방법을 사용함
            - 이 때, answer 배열에 추가된 것은 itemOfAnswer의 내용이 아닌 참조 주소이며,
            - itemOfAnswer 배열은 전역 변수이므로, 초기화 되었을 때 answer 배열의 요소 역시 초기화되는 문제 발생

    - 해결
        - (1) 외부 반복문의 범위 지정 수정
            - num_list.length/n가 아닌 num_list.length로 수정
            - 외부 반복문의 반복횟수가 올바르게 수행됨
        - (2) 2차원 배열의 요소 itemOfAnswer을 외부 반복문 시작지점에 지정
            - 내부 반복문을 통해 완성된 itemOfAnswer를 내부 반복문이 끝난 시점에 answer에 push
            - 이후 외부 반복문이 새로 반복될 때 itemOfAnswer가 새로 생성(주소 자체가 새로 생성)되므로,
            - 기존의 answer 배열의 요소에는 영향이 가지 않음 

*/

function solution(num_list, n) {
  // 방법1. 중첩 for문
  /*
  const answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    const itemOfAnswer = [];

    for (let j = i; j < i + n; j++) {
      itemOfAnswer.push(num_list[j]);
    }

    answer.push(itemOfAnswer);
  }

  return answer;
  */

  // 방법2. slice 메서드 사용
  /*
  const answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    const itemOfAnswer = num_list.slice(i, i + n);
    answer.push(itemOfAnswer);
  }

  return answer;
  */

  // 방법3. slice 메서드 사용 + 루프 제어 변수 간소화
  const answer = [];
  const lenOfAnswer = Math.floor(num_list.length / n);

  for (let i = 0; i < lenOfAnswer; i++) {
    const itemOfAnswer = num_list.slice(i * n, i * n + n);
    answer.push(itemOfAnswer);
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
