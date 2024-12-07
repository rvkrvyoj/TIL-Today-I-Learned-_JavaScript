//형변환 (Type Conversion)
    //산술연산 (+.-, *, /, %, **)
    console.log (4+'2'); //42
    console.log (4+2); //6
    console.log (4-true); //3
    console.log (4 * false); //0

    //관계 비교 연산(<, <=,>, >=)
    console.log (1==='1') //일치, 불일치
    console.log (1=== true)
    console.log (1 == '1') //동등, 부등
    console.log (1 == ture);



    //템플릿문자열 (template strings)
        let year = 2018;
        let month = 3;
        let day = 11;

        console.log('생년월일은' + year + '년' + month + '월'+ day + '일 입니다.')
        console.log('생년월일은 ${year}년 ${month)월 ${day}입니다.')

//예시
    let myNumber = 3;

    function getTwice(x) {
        return x * 2;
    }

    console.log('${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.')


//실습문제
// 실습설명
//재원이는 카페 매니저입니다. 며칠 뒤면 아르바이트 근무자들 급여 정산을 해야 하는데요. 근무자별로 근무 시간을 계산해서 총급여를 계산하는 calcWage() 함수를 만들어 보려고 합니다.
//파라미터로 근무자 이름(name), 근무 시간(time), 그리고 시급(wage)을 전달받고 총급여를 계산하기 위해 total 변수에 시간과 시급을 곱한 값을 담는 것까진 작성했는데요. 마지막으로 콘솔에 출력하는 부분이 남았습니다.
//지난 시간에 배운 템플릿 문자열 개념을 이용해서 아래 실습 결과의 문장이 출력되도록 코드를 완성하세요. 반드시 주어진 변수와 템플릿 문자열을 이용하셔야 합니다.

    function calcWage(name, time, wage) {
        let total = time * wage;

        console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`);  // 괄호 안에 코드를 작성하세요
        }

    // 테스트 코드
        calcWage('김윤식', 208, 11340);
        calcWage('성규재', 175, 12160);
        calcWage('손태웅', 161, 13070);
        calcWage('허우선', 222, 10980);

//null과 undefined : 산안민 히거 아무런 값도 지정하지 않은 경우, 값이 없음을 의도적으로 밝힌 것인지의 차이
console.log(null == undefined); // true 라는 값
console.log(null === undefined); //false 라는 값

    //예시
    let cup;
    console.log (cup); //undifined
    cup = '물' 
    console.log (cup); //물
    cup = null;
    console.log(cup); //null

//undifined는 선언만 하고 아무런 값도 지정하지 않은 경우
//null은 의도적으로 값이 없음을 밝힌 경우

//복습코드
    let x;
    console.log(x); //undifined
    let y = x;
    x = null;
    console.log(y); //undifined
    console.log(x); //null
    x = y;
    console.log(x); //undifined


//복습코드
    let x;
    let y = null;

    console.log(x === y); //false
    console.log(x == y); //true
    console.log(x == null); //true
    console.log(y === undefined); //false

//해설
    //처음 아무런 값을 할당치 않고 변수 x를 선언하였고, y는 null을 할당
        //console.log(undefined === null);
        //console.log(undefined == null);
        //console.log(undefined == null);
        //console.log(null === undefined);
    // 두 값의 비교 관계를 살펴보면, null과 undifined는 동등하지만 일치하지 않음.
        //console.log(null == undefined)  // true
        //console.log(null === undefined)  // false

//실습문제
//숫자형을 담고 있는 변수들(material1, material3, material5)과 문자열을 담고 있는 변수들(material2, 
//material4)이 있습니다. 변수들끼리 연산해서 result1에는 문자열 '34'를, result2에는 숫자형 34를 만들어 
//담아 주세요. 단, 변수가 아닌 숫자를 직접 사용하지 마세요. result1과, result2는 반드시 material1~5 변수들과 
//연산식으로만 할당해야 합니다.

    // 숫자형과 문자열 재료
    let material1 = 3;
    let material2 = '3';
    let material3 = 10;
    let material4 = '4';
    let material5 = 4;

    // 연산 결과
    let result1 =  material2 + material4
    let result2 =  material1*material3+material5

    // 연산을 통해 result1에 문자열 '34'를, result2에 숫자형 34를 할당
    // 여기에 코드를 작성하세요

    // 테스트 코드
    console.log(result1);
    console.log(typeof result1);
    console.log(result2);
    console.log(typeof result2);

