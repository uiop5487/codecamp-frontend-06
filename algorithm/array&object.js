// 01. 배열의 선언과 할당

let fruits = []
fruits.push("사과", "바나나", "파인애플")

// 02. 배열의 기능 / 주어진 배열에서 마지막 요소를 꺼내 새로운 변수에 할당
// arr.length-1으로 마지막 배열에 접근
let frutis1 = ["사과", "바나나", "파인애플"]
let newFruits1 = []
newFruits1.push(fruits[fruits.length-1])

// 03. 배열의 기능 / 이름이 담긴 배열에 2번 째 요소까지의 데이터들을 뽑아 새로운 배열을 만듬
let student = ["철수", "영희", "훈이", "짱구", "유리"]
let newArr = [student.splice(0, 3)]

// 04. 배열의 기능 / 주어진 배열의 모든 요소에 맛있는 이라는 문자열 추가
let fruits2 = ["사과", "바나나"]
fruits2[0] = "맛있는" + " " + fruits2[0]
fruits2[1] = "맛있는" + " " + fruits2[1]

// 05. 문자열 배열 / 상우에 담긴 문자열을 3개로 나눈 배열을 만듬
const number = "01012345678";
const arr = [number.slice(0,3), number.slice(3, 7), number(7)]

// 08. 객체의 선언과 할당
let student1 = {}
student1.name = "철수"

// 09. 객체의 키&값 추가
const student2 = {
	name: "철수",
	age: 8,
};
const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}
student2.school = school

// 10. 객체의 킵&값 삭제
let student3 = {
	name: "철수",
	drink: "사이다"
};
delete student3.drink

// 11. 객체와 배열의 값 / 배열안에 객체의 밸류값 변경
const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];
classmates[1].school = "다람쥐초등학교"



// 배열 이메일 형식 확인 후 분리 저장

let eamil = "coDecAmp@gamil.com "

function saveEmail() {


	if(email.includes('@')) {
		let savemail = email.toLowerCase();
		console.log(savemail);
	} else {
		alert('잘못된 메일입니다.')
	}
}


// 카테고리별 정리 / fiter 사용

let movies = [
	{ title: "킹스맨", genre: "액션", 상영관: "메가박스" },
	{ title: "러브레터", genre: "로맨스", 상영관: "cgv" },
	{ title: "스폰지밥", genre: "코미디", 상영관: "메가박스" },
	  { title: "노트북", genre: "드라마", 상영관: "cgv" },
	  { title: "임파서블", genre: "액션", 상영관: "cgv" },
	{ title: "파리의 인어", genre: "로맨스", 상영관: "메가박스" },
	{ title: "심슨", genre: "코미디", 상영관: "메가박스" },
	  { title: "포레스트 검프", genre: "드라마", 상영관: "cgv" },
 ]

 let action = movies.filter(movies => movies.genre === "액션");
 let cgv = movies.filter(movies => movies.상영관 === "cgv");
 let romance = movies.filter(movies => movies.genre === "로맨스");
