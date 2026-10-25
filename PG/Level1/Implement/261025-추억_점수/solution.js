/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 추억 점수
유형: 구현
날짜: 2026-10-25
Review 여부: false

# 📰 문제 설명
- 그리워하는 사람의 이름을 담은 문자열 배열 name과
- 각 사람별 그리움 점수를 담은 정수 배열 yearning과
- 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어짐
- photo 배열의 요소에 있는 인물들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 반환하는 함수 만들기
- 추억 점수: 사진에 등장하는 인물들의 그리움 점수들을 더한 값

# 💡 문제 풀이
- 방식1. 중첩 for문
    - answer 변수를 []로 초기화
    
    - 중첩 for문
    - 외부 for문
        - photo 배열을 순회
        - score 변수를 0으로 초기화
        - 내부 for문 종료 후 score를 answer 배열에 추가
    - 내부 for문
        - photo[i]를 순회
        - photo[i][j]의 값이 name 배열에 존재하는지 확인
        - 존재한다면 yearning[name.indexOf(photo[i][j])]을 score에 더하기
    - 외부 for문 종료후 answer 반환

- 방식2. 해시 만들기
    - answer 변수를 []로 초기화
    - map 변수를 Map()로 초기화
    
    - for문으로 name, yearning 배열을 순회
        - map에 name[i]를 키로, yearning[i]를 값으로 갖는 요소 추가
    
    - 중첩 for문
    - 외부 for문
        - photo 배열을 순회
        - score 변수를 0으로 초기화
        - 내부 for문 종료 후 score를 answer 배열에 추가
    - 내부 for문
        - photo[i]를 순회
        - photo[i][j]가 map에 존재하는지 확인
        - 존재한다면 map에 해당 키값을 score에 더하기
    
    - for문 종료 후 answer 반환

# ⏰ 시간복잡도
- name 배열의 길이: N
- photo 배열의 길이: P
- photo[i] 배열의 길이: K

- 방식1의 시간복잡도: O(PKN)
    - 외부 for문: P회 반복
    - 내부 for문
        - K회 반복
        - includes() 메서드가 최악의 경우 O(N) 걸림
        - indexOf() 메서드가 최악의 경우 O(N) 걸림
    - 이름 하나를 처리할 때 O(2N)소요
    - 따라서 시간복잡도는 O(PxKx2N)이며 최고차항의 상수는 무시하므로
    - 전체 시간복잡도는 O(PKN)이다.

- 방식2의 시간복잡도: O(N + PK)
    - Map 생성 시 name 배열을 순회하므로 O(N) 소요
    - 외부 for문: P회 반복
    - 내부 for문
        - K회 반복
        - Map의 has(), get() 메서드는 평균 O(1) 소요
    - 내부 반복문은 P × K회 실행되며, 각 반복에서 Map 조회는 평균 O(1) 소요
    - 따라서 전체 시간복잡도는 O(N + PxK)이다.

# 🚀 알게 된 점
- includes(), indexOf() 메서드는 각각 최악의 경우 O(N)이 걸림

# 💭 아쉬운 점

*/

function solution(name, yearning, photo) {
  // 방식1. 중첩 for문 사용하기
  /*
  const answer = [];

  for (let i = 0; i < photo.length; i++) {
    const item = photo[i];
    let score = 0;

    for (let j = 0; j < item.length; j++) {
      if (name.includes(item[j])) score += yearning[name.indexOf(item[j])];
    }

    answer.push(score);
  }

  return answer;
  */

  // 방식2. 해시 사용하기
  const answer = [];
  const map = new Map();

  for (let i = 0; i < name.length; i++) {
    map.set(name[i], yearning[i]);
  }

  for (let i = 0; i < photo.length; i++) {
    const item = photo[i];
    let score = 0;

    for (let j = 0; j < item.length; j++) {
      if (map.has(item[j])) score += map.get(item[j]);
    }
    answer.push(score);
  }

  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ],
  ),
);
