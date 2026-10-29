/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 모의고사
유형: 구현
날짜: 2026-10-29
Review 여부: false

# 📰 문제 설명
- 수포자 3인방은 모의고사에서 수학 시험을 치를 때 문제를 모두 찍을 예정
- 학생 별 찍는 방식
    - 학생1: 1,2,3,4,5 반복
    - 학생2: 2,1,2,3,2,4,2,5 반복
    - 학생3: 3,3,1,1,2,2,4,4,5,5 반복
- 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어짐
- 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담에 반환하는 함수 만들기
- 학생은 1,2,3으로 구분
- 시험은 최대 10,000 문제
- 문제의 정답은 1-5번 중 하나
- 가장 높은 점수를 받은 사람이 여럿이라면 반환 값을 오름차순 정렬

# 💡 문제 풀이
1. 자료구조 선언
1-1. 학생1, 2, 3을 해시 형태로 생성 -> students 변수를 new Map([[1, 0], [2, 0], [3, 0]])으로 초기화
    - 키: 학생 번호 
    - 값: 맞춘 문제 수
1-2. 학생 별로 문제를 찍는 한 사이클에 대한 패턴을 배열로 셍성
    - 학생 1의 패턴: pattern1 변수를 [1,2,3,4,5]로 초기화
    - 학생 2의 패턴: pattern2 변수를 [2,1,2,3,2,4,2,5]로 초기화
    - 학생 3의 패턴: pattern3 변수를 [3,3,1,1,2,2,4,4,5,5]로 초기화
1-3. 정답 배열 answer를 []로 초기화

2. 찍은 문제 채점 
2-1. 학생1 채점 for문
    - const nth = i % 5
    - 만약 answers[i] === pattern1[nth] 이라면
    - students.set(1, students.get(1) + 1)
2-2. 학생2 채점 for문
    - const nth = i % 8
    - 만약 answers[i] === pattern2[nth] 이라면
    - students.set(2, students.get(2) + 1)
2-3. 학생3 채점 for문
    - const nth = i % 10
    - 만약 answers[i] === pattern3[nth] 이라면
    - students.set(3, students.get(3) + 1)

3. 가장 많이 맞춘 학생 찾기 
3-1. max 변수를 Math.max(...students.values())로 초기화
3-2. for문으로 students을 순회하며 다음 작업 수행
    - 만약 students.get(i)가 max라면, answer 배열 i추가
3-3. answer 배열을 sort()로 오름차순 정렬하여 반환

# ⏰ 시간복잡도 O(N)
- answers 배열의 길이: N
- 문제 채점 로직의 for문은 answers 배열을 순회하므로 N회 반복한다.
- for문 내부의 연산은 평균 O(1) 소요된다.
- 최고 점수 계산 및 학생 탐색은 학생수가 3명으로 고정되어 있으므로 O(1) 소요된다.
- 따라서 전체 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
1. 학생들의 점수를 채점할 때 answers만 순회하므로 for문을 1번만 돌릴 수 있었다.
2. answer 배열에 학생을 추가하는 순서가 오름차순이므로 return문에서 sort() 메서드를 작성할 필요가 없었다.
3. 학생의 수가 3명으로 고정되어 있으므로 Map 대신 단순히 배열로 점수를 관리할 수 있었음
*/

function solution(answers) {
  const answer = [];
  const [pattern1, pattern2, pattern3] = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const students = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
  ]);

  // 채점 로직 개선 전
  /*
  for (let i = 0; i < answers.length; i++) {
    const nth = i % 5;
    if (answers[i] === pattern1[nth]) students.set(1, students.get(1) + 1);
  }
  for (let i = 0; i < answers.length; i++) {
    const nth = i % 8;
    if (answers[i] === pattern2[nth]) students.set(2, students.get(2) + 1);
  }
  for (let i = 0; i < answers.length; i++) {
    const nth = i % 10;
    if (answers[i] === pattern3[nth]) students.set(3, students.get(3) + 1);
  }
  */

  // 채점 로직 개선 후
  for (let i = 0; i < answers.length; i++) {
    const fir = i % 5;
    const sec = i % 8;
    const thr = i % 10;

    if (answers[i] === pattern1[fir]) students.set(1, students.get(1) + 1);
    if (answers[i] === pattern2[sec]) students.set(2, students.get(2) + 1);
    if (answers[i] === pattern3[thr]) students.set(3, students.get(3) + 1);
  }

  const max = Math.max(...students.values());
  for (let i = 1; i <= 3; i++) {
    if (students.get(i) === max) answer.push(i);
  }

  return answer;
}

console.log(solution([1, 3, 2, 4, 2]));
