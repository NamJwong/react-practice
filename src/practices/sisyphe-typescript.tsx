/* eslint
@typescript-eslint/no-unused-vars: "off", 
prefer-const: "off", 
@typescript-eslint/no-inferrable-types: "off",
@typescript-eslint/no-explicit-any: "off" */

interface Crew {
  name: string;
  language: 'Java' | 'JavaScript';
  coach: 'poco' | 'gugu';
}

interface Coach {
  name: string;
  language: 'Java' | 'JavaScript';
}

const crew: Crew = {
  name: 'sisyphe',
  language: 'JavaScript',
  coach: 'gugu',
};

const coach: Coach = {
  name: 'poco',
  language: 'JavaScript',
};

const doCoding = (person: Coach) => `${person.name}이 ${person.language}를 다룹니다.}`;

// 충격! 타입 호환이 되다!
console.log(doCoding(crew));
console.log(doCoding(coach));

// => 타입 이름이 달라도 같은 타입으로 인식될 수 있다.
// => 같은 속성을 가지기만 하면 같은 타입으로 인식될 수 있다. => 구조적 서브 타이핑(Structural Subtyping)

// 구조적 서브 타이핑(Structural Subtyping): Super type에 Sub type이 들어갈 수 있는 시스템
// => 타입을 집합 관점에서 바라볼 수 있음.

// 궁금증 1. 반대의 경우는?
// 반대의 경우, 당연히 안됨. '서브' 타이핑!
const doCoding2 = (person: Crew) => `${person.name}이 ${person.language}를 다룹니다.}`;

console.log(doCoding2(crew));
// console.log(doCoding2(coach)); => error

// 궁금증 2. interface만 가능? 아니면 객체 형태 타입이라면 가능?
// => 객체 형태 타입이라면 가능하다!
type Crew2 = {
  name: string;
  language: 'Java' | 'JavaScript';
  coach: 'poco' | 'gugu';
};

type Coach2 = {
  name: string;
  language: 'Java' | 'JavaScript';
};

const crew2: Crew = {
  name: 'sisyphe',
  language: 'JavaScript',
  coach: 'gugu',
};

const coach2: Coach = {
  name: 'poco',
  language: 'JavaScript',
};

const doCoding3 = (person: Coach2) => `${person.name}이 ${person.language}를 다룹니다.}`;

console.log(doCoding3(crew2));
console.log(doCoding3(coach2));

// Super / Sub type example 1
// Super type
type StrNum = string | number;
// Sub Type
type str = string;

// 위는 익숙히 쓰던 아래 패턴과 같은 맥락이다.

import { useState } from 'react';

export default function Test() {
  type Animation = 'slide-in' | 'slide-out';
  const str = 'slide-in';
  const [animation, setAnimation] = useState<Animation>(str);
  return <></>;
}

// 여기서 str은 'slide-in'이라는 리터럴 타입이다.
// Animation이라는 Super type에 Sub type이 대입됐다.

// 그런데 이것이 객체 형태 타입의 속성에 대하여 가능하다는 것은 새롭게 느껴지는 사실이다.

// Super / Sub type example 2
// Super type
interface A {
  a: string;
}
// Sub type
interface AB {
  a: string;
  b: string;
}

// 객체 형태 타입의 Super / Sub type 구분은 헷갈릴 수 있다 해주셨는데,
// 둘 중 한 타입에 다른 타입을 대입한다고 생각했을 때 'AB에는 b가 없으면 절대 안된다'라는 익숙한 사실을 떠올려 보면 쉽게 구분할 수 있다.

// 타입을 집합 관점에서 바라본다 => 타입은 곧 할당 가능한 값들의 집합

// 궁금증 3. 이런 관점을 통해 얻을 수 있는 것이 무엇일까? 이를 활용하면 더 헷갈리기만 하진 않을까?

// 집합 중 가장 작은 집합 => 공집합 => never type
// example
type EmptySet = string & number;

// 집합의 원소가 1개인 타입 => literal type
// example
type One = 2022;

// 집합의 원소가 2개인 타입 => literal + union type
// example
type Two = 2022 | true;

// 그 다음으로 큰 집합 => string, object, number ...
// 이 모든 타입의 최상위 집합 => unknown
// example
let unknownType: unknown;
unknownType = 1;
unknownType = true;
unknownType = '김의진 선생님 짱';
unknownType = { name: '나는 모범생 ㅇㅈ?' };
unknownType = () => console.log();

// 궁금증 4. 그럼 any는?
// 뒤에서 말씀해주시겠다는

// 앞으로 나올 내용은 구조적 서브 타이핑을 거스른다.
// 타입스크립트를 설계할 때 이것을 거스르는 것이 더 효율적이라고 판단했기 때문

// 잉여 속성 체크(Excess property check)
// => 정의한 속성 이외에 추가적인(잉여) 속성이 있는지 체크하고, 있다면 에러를 띄운다.

// 궁금증 5.
// 위 28 line에서 'coach'가 잉여 속성이 되는데, 왜 되는거지?
// 와 바로 뒤에서 알려준다

// 어떤 경우에 구조적 서브 타이핑이 적용되지  않고, 잉여 속성 체크를 수행하는가?
// => 객체 리터럴을 사용할 때

interface Options {
  title: string;
  darkMode?: boolean;
}
const returnOptions = (options: Options) => {
  return options;
};

// 객체 리터럴 example
// returnOptions({ title: '시지프의 타스 도약', darkmode: true }); => error

// 객체 리터럴이 아닌 example (변수 할당)
// 구조적 서브 타이핑이 됨
const options = {
  title: '시지프의 타스 도약',
  darkmode: true,
};
returnOptions(options);

// 궁금증 6. 아무래도 구조적 서브 타이핑은 피할수록 좋을 것 같은데 어떻게 해야 조심할 수 있는지?
// 궁금증 7. 구조적 서브 타이핑을 활용하면 좋은 경우도 있는지? (궁금증 3과 같은 맥락)

// 'Type A is not assignable to Type B'를 두 가지 종류로 구분할 수 있음.

// 1) 구조적 서브 타이핑에 의한 타입 에러
// => Type A가 Type B의 Sub type이 아니다.

// 2) 잉여 속성 체크에 의한 타입 에러
// Type A에 잉여 속성이 있다.

// any는 구조적 서브 타이핑을 거스른다
let numberType: number = 3;
let anyType: any = numberType;
numberType = anyType;

// any는 모든 타입에 할당 가능하다. => any는 최하위 집합이다.
// 모든 타입이 any에 할당 가능하다. => any는 최상위 집합이다.

// 위 두 사실은 충돌한다.
// any는 기본적으로 타입 시스템을 따르지 않는다.

// 이래서 TS를 모르는 상태에서 급하게 적용해야 할 때,
// any 쓰면 JS랑 똑같으니 그냥 any 써라
// 라고 말해주는 경우가 있구나

// 어떤 타입이 들어올지 모를 경우 즉, 모든 타입이 들어올 수 있을 경우
// any가 아, unknown을 사용하는 것이 적절하다.

// 궁금증 8. unknown과 any 중 any를 썼을 때 문제 되는 것이 있을까? 왜 unknown을 쓰라고 하시쥐

// 궁금증 9. 함수의 리턴 타입을 명시하라 하셨는데, 예시에서는 이미 추론이 잘못되도록 코드를 짜셨다
// 올바른 추론이 되도록 코드를 짜면 되는 것 아닐까?
// 실수로 예시처럼 짜는 일을 방지하기 위해서인가?

// 구별된 유니온 사용하기 -> 얼마 전에 진짜 fetchReturn 타입 설정할 때 실제로 했던 고민 대박
// 유니온의 인터페이스 보다는 인터페이스의 유니온을 사용하라
// => 리턴 타입을 하나로 만들어 써야 한다는 내 선입견을 없애줬다.
