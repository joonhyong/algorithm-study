/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 잘라서 배열로 저장하기
유형: 문자열
날짜: 2026-09-23
Review 여부: true

# 📰 문제 설명
- 문자열 my_str과 자연수 n이 매개변수로 주어짐
- my_str을 길이 n씩 잘라서 저장한 배열을 반환하는 함수 만들기
- my_str은 알파벳 대소문자, 숫자로 구성
- n은 1이상 my_str의 길이 이하
- 마지막 문자열은 길이가 n 이하여도 괜찮음

# 💡 문제 풀이
- answer 변수를 빈배열로 초기화
- len 변수를 my_str의 길이로 초기화
- loop 변수를 len을 n으로 나눈 몫으로 초기화
- for문으로 loop회 반복하며 다음 작업을 수행
    - 루프 변수 i의 범위: 0 이상 loop 미만
    - slice() 메서드로 my_str를 잘라내기
        - slice() 메서드의 첫번째 인수: n * i
        - slice() 메서드의 두번째 인수: n * i + n
    - 잘라낸 결과값을 answer 배열에 추가
- for문 종료 후 len을 n으로 나눈 나머지가 0이 아닌 경우, slice(loop+1)를 answer 배열에 추가
- answer 반환
    

# ⏰ 시간복잡도 O(N)
- for문은 loop회 반복하는데, loop는 my_str의 길이(N)를 n으로 나눈 값이다.
- slice() 메서드는 정해진 n글자만 복사하므로 시간복잡도를 O(n)이다.
- 따라서 전체 시간복잡도는 loop 회수(N/n)에 slice의 시간 O(n)을 곱한 O(N)이다.

# 🚀 알게 된 점
- 정규표현식과 while문으로 푸는 풀이법이 존재한다는 것을 알게되었다.

# 💭 아쉬운 점
- slice() 메서드를 사용하지 않는 방법의 코드를 봐도 이해가 가지 않았다.
- 시간이 지난 후에 다른 풀이법으로 시도해볼 예정이다.

*/

function solution(my_str, n) {
  const answer = [];
  const len = my_str.length;
  const loop = Math.trunc(len / n);

  for (let i = 0; i < loop; i++) {
    answer.push(my_str.slice(i * n, i * n + n));
  }

  if (len % n !== 0) answer.push(my_str.slice(loop * n));

  return answer;
}

console.log(solution("abc1Addfggg4556b", 6));
