/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 폰켓몬
유형: 해시
날짜: 2026-10-27
Review 여부: false

# 📰 문제 설명
- 폰켓몬이 N마리 있을 때 N/2마리를 골라 가져갈 수 있음
- 폰켓몬은 종류별로 번호를 붙임 (예 - 1번 폰켓몬, 2번 폰켓몬, 3번 폰켓몬)
- N마리의 폰켓몬의 종류 번호가 담긴 배열 nums가 주어짐
- 폰켓몬을 최대한 다양한 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 함
- 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 반환하는 함수 만들기

# 💡 문제 풀이
- 변수 select를 nums.length/2 로 초기화
- 변수 map을 new Map() 생성자로 초기화
- for문으로 nums를 순회하며 다음 작업을 수행
    - map에 nums[i]가 존재하지 않는 경우, nums[i]와 1을 키와 값으로 갖는 순서쌍을 추가
    - 존재하는 경우, nums[i]의 키값을 1증가
- 변수 type을 map.size로 초기화

- 경우1. 고를 수 있는 수가 폰켓몬 종류보다 큰 경우: select > type
    - 가장 다양한 종류를 고르는 경우의 수는 
    - 모든 종류의 폰켓몬들을 한마리씩 고른 뒤, 남는 수를 아무 폰켓몬으로 채우는 경우이다.
    - 따라서 type을 반환한다.

- 경우2. 고를 수 있는 수가 폰켓몬 종류보다 작은 경우: select < type
    - 가장 다양한 종류를 고르는 경우의 수는 
    - 중복되는 종류의 폰켓몬이 없도록 고르는 경우이다.
    - 따라서 select를 반환한다.

- 경우3. select와 type이 같은 경우: select === type
    - select 혹은 type 모두 가능
    - 경우1,2가 아닌 상황에 반대쪽 경우로 포함된다.

# ⏰ 시간복잡도 O(N)
- nums의 길이: N
- map을 만들때 N회의 반복연산이 발생
- Map의 has(), set(), get()은 평균 O(1)
- 따라서 전체 시간복잡도는 O(N)

# 🚀 알게 된 점
- Set 생성자는 오직 하나의 인자(반복 가능한 객체 하나)만 받도록 설계되어있음
- 따라서 스프레드 연산자 사용 시 []로 감싸주자!

- new 키워드 앞에도 스프레드 연산자를 붙일 수 있다.

# 💭 아쉬운 점
- 고를 수 있는 마리의 수 select와 폰켓몬의 종류 type 두가지만 활용하는 문제였음
- 따라서 Map의 키의 값은 불필요한 정보이므로 Set을 활용하는 것이 더 효율적이었음

*/

function solution(nums) {
  // 개선 전
  /*
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], 1);
    else map.set(nums[i], map.get(nums[i]) + 1);
  }

  const select = nums.length / 2;
  const type = map.size;

  const answer = select > type ? type : select;
  return answer;
  */

  // 개선 후
  const select = nums.length / 2;
  const type = [...new Set([...nums])];
  return select > type.length ? type.length : select;
}

console.log(solution([3, 1, 2, 3]));
