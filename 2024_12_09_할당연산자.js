// 할당연산자 (Assignment operators)

let name = '김률희';
let x = 5;

x = x - 2;
// 오른편 : x - 2 부터 계산해주면 됨.
// 즉 x 의 값을 2만큼 줄여주는 연산이 됨.
console.log(x); // x는 3이라는 값이 나옴.

//복합할당연산자 (Compound assignment operators)
// 할당 연산자와 결합해서 자주 쓰이는 표현을 더 간략하게 쓸 수 있는 연산자를 복합할당연산자라고 한다.

    x = x + 1
    x += 1

    x = x * 2
    x *= 2

    x = x - 3
    x -= 3

    x = x % 7
    x %= 7
//증가, 감소 연산자
// 변수의 값을 1개씩 증가하거나 감소시킬때, 복합 할당 연산자보다 더 간략하게 사용 가능하다.
// 더하기 기호를 연달아 쓰거나 (++) 빼기 기호를 연달아 쓰면 된다(--)
    x = x + 1
    x += 1
    x ++

    x = x - 1
    x -= 1
    x --

//응용 문제 
    //문제 풀이    
        function logParticipant (x) {
            console.log (`${x}(이)가 대화에 참여했습니다.` )
        }
    
    // 오답정리
        //(1) function logParticipatn 뒤 함수에 (x)를 넣지 않았다.
        //(2) console.log (${x}(이)가 대화에 참여했습니다`)를 만들 때, 햅틱을 씌우지 않았다.

//응용문제
    //문제풀이
        fuction expressMultiplication (x, y) {
            console.log (`${x} * ${y} = ` && (x * y))
        }
    //정답
    function expressMultiplication(x, y) {
        console.log(`${x} * ${y} = ${x * y}`);
    }
    
