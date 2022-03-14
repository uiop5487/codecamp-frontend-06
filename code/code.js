
// //push의 사용방법**
// let fruits1 = ["포도","복숭아","딸기","수박"]
// fruits.push("샤인 머스캣", "귤")

// //> 결과 <
// fruits = ["포도","복숭아","딸기","수박","샤인머스캣", "귤"]

// //pop의 사용방법**
// let fruits2 = ["포도","복숭아","딸기","수박"]
// let one = fruits.pop()

// //> 결과 <
// one = "수박"
// fruits = ["포도","복숭아","딸기"]




// // unshift 사용방법**
// let catName1 = ["자몽", "서리"]
// catName.unshift("유자","코코")

// //> 결과 <
// catName = ["유자","코코", "자몽", "서리" ]

// // shift 사용방법**
// let catName2 = ["자몽", "서리"]
// let cat = catName.shift()

// //> 결과 <
// cat = "자몽"
// catName = ["서리"]



// /* spilce 사용방법 */
// //arr.splice(원소가공을 시작할 인덱스 위치, 제거할 원소갯수, 추가해줄 원소)

// /* 추가 */
// let need1 = ["떡볶이","레드콤보","초코라떼","삼겹살"]
// need.splice(2,0,"딸기생크림케이크")

// //> 결과 <
// // 2번째 인덱스에 요소삭제 없이 "딸기생크림케이크" 추가
// need = ["떡볶이","레드콤보","딸기생크림케이크","초코라떼","삼겹살"]

// /* 추가 */
// let need2 = ["떡볶이","레드콤보","초코라떼","삼겹살"]
// need.splice(2,0,"딸기생크림케이크")

// // > 결과 <
// // 2번째 인덱스에 요소삭제 없이 "딸기생크림케이크" 추가
// need = ["떡볶이","레드콤보","딸기생크림케이크","초코라떼","삼겹살"]

// /* 교체 */
// let need = ["떡볶이","레드콤보","초코라떼","삼겹살"]
// let one1 = need.splice(2,1,"딸기생크림케이크")

// //> 결과 <
// one1 = ["초코라떼"]
// need = ["떡볶이","레드콤보","딸기생크림케이크","삼겹살"]


// /* slice 사용방법 */

// //arr.slice(자르기 시작할 인덱스, 자르기를 종료할 인덱스)

// // slice 예제
// let frontTeam = ["은정","혜원","시윤","세준","재훈"]
// let mentoTeam = frontTeam.slice(0,3)

// //> 결과 <
// mentoTeam = ["은정","혜원","시윤"]
// frontTeam = ["은정","혜원","시윤","세준","재훈"]


// /* concat의 사용방법 */
// // 배열 합치기
// arr1.concat(arr2,arr3)

// // 원소 이어붙이기
// arr.concat(추가할 원소)

// /* concat 예제 */
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = ["한","글"]

// let concatArr = arr1.concat(arr2,"여기는 한글",arr3)

// //> 결과 <
// concatArr = [1,2,3,4,5,6,"여기는 한글","한","글"]


// /* map 사용방법 */

// arr.map((arr_item)=>{
//     // 모든 배열의 원소에게 반복실행할 코드	
// })

// /* map의 예제 */
// let num = [1,2,3,4,5]
// let newNum = num.map(num_item => num_item*3)

// //> 결과 <
// newNum = [3,6,9,12,15]



// /* sort의 사용방법 */
// arr.sort(()=>{
// 		//비교기준 함수**
// 		//없을시엔 기본적인 정렬에 따라 정렬됩니다.
// 	})

// /* 숫자열에서 비교기준 함수 */
// //오름차순 _ 작은것에서부터 큰것으로 가는 것
// arr.sort((a,b)=>{
// 		return a-b
// 	})
// //내림차순 _ 큰것에서부터 작은것으로 가는 것
// arr.sort((a,b)=>{
// 		return b-a
// 	})

// /* 문자열에서 비교기준 함수 */
// //오름차순
// arr.sort((a,b)=>{
// 		return a < b ? -1 : 1
// 	})
// //내림차순
// arr.sort((a,b)=>{
// 		return a > b ? -1 : 1
// 	})


//     // sort 예제 _ 문자열의 오름차순
// let array = ["c","o","d","e","c","a","m","p"]
// array.sort((a,b)=>{
// 		return a < b ? -1 : 1
// 	})

// > 결과 <
// array = ["a", "c", "c", "d", "e", "m", "o", "p"]


// //sort 예제 _ 숫자열의 내림차순
// let array = [5,4,6,2,8,1]
// array.sort((a,b)=>{
// 		return b-a
// 	})

// > 결과 <
// array = [8, 6, 5, 4, 2, 1]



// /* reverse의 사용방법 */
// let array = ["three","two","one"]
// let reverseArray = array.**reverse()**

// //> 결과 <
// reverse = ["one","two","three"]



// /* split 사용방법 */
// str.split(구분자,횟수 제한)

// // split 예제
// let num = "010-8954-4608"
// let splitNum = num.split("-")

// //> 결과 <
// splitNum = ["010","1234","5678"]


// // split 예제2 _ 끊어주는 횟수 제한하기
// let mail = "hi@google.com , my@google.com, name@google.com"
// let splitMail = mail.split("@" , 2)

// //> 결과 <
// // 2번까지만 끊어서 결과물을 가지고 옵니다.
// splitMail = ["hi", "google.com", "my"]


// /* join 사용방법 */
// arr.join(구분자)

// /* join의 예제 */
// let arr = ["우","주","최","강","코","캠"]
// let str = arr.join("")

// //> 결과 <
// str = "우주최강코캠"

// /* join의 예제 */
// let arr = ["우","주","최","강","코","캠"]
// let str = arr.join("와")

// //> 결과 <
// str = "우와주와최와강와코와캠"


// /* reduce 사용방법 */
// arr.reduce((누적값, 현재값)=>{
//     // 현재값+누적값을 리턴
// },초기값)

// // reduce의 예제 _ 초기값 없이
// let arr = [1,2,3,4,5,6,7,8,9]
// arr.reduce((acc,cur)=>{
// 		console.log(`누적값 : ${acc} , 현재값 : ${cur}`)
//     return acc+cur
// })

// //> 결과 <
// 누적값 : 1 , 현재값 : 2
// 누적값 : 3 , 현재값 : 3
// 누적값 : 6 , 현재값 : 4
// 누적값 : 10 , 현재값 : 5
// 누적값 : 15 , 현재값 : 6
// 누적값 : 21 , 현재값 : 7
// 누적값 : 28 , 현재값 : 8
// 누적값 : 36 , 현재값 : 9
// 45


// // reduce의 예제 _ 초기값 있이
// let arr = [1,2,3,4,5,6,7,8,9]
// arr.reduce((acc,cur)=>{
// 		console.log(`누적값 : ${acc} , 현재값 : ${cur}`)
// 		return acc+cur
// 	},10)

// //> 결과 <
// 누적값 : 10 , 현재값 : 1
// 누적값 : 11 , 현재값 : 2
// 누적값 : 13 , 현재값 : 3
// 누적값 : 16 , 현재값 : 4
// 누적값 : 20 , 현재값 : 5
// 누적값 : 25 , 현재값 : 6
// 누적값 : 31 , 현재값 : 7
// 누적값 : 38 , 현재값 : 8
// 누적값 : 46 , 현재값 : 9
// 55


// /* reduceRight 사용방법 */
// arr.reduceRight((누적값,현재값)=>{
//     // 현재값 + 누적값을 리턴
// })

// // reduceRight의 예제
// //let arr = [1,2,3,4]
// arr.reduceRight((acc, cur)=>{
// 		console.log(`누적값 : ${acc} , 현재값 : ${cur}`)
// 		return acc + cur
// 	} ,20)

// //> 결과 <
// 누적값 : 20 ,현재값 : 4
// 누적값 : 24 ,현재값 : 3
// 누적값 : 27 ,현재값 : 2
// 누적값 : 29 ,현재값 : 1
// 30


// /* forEach의 사용방법 */
// arr.forEch(()=>{
//     // 각 배열의 원소에 반복하고싶은 코드
// })

// // forEach의 예제
// let arr = [1,2,3,4,5,6]
// arr.forEach((item)=>{return console.log(item*2)})

// //> 결과 <
// 2
// 4
// 6
// 8
// 10
// 12
// undefined


// /* indexOf의 사용법 */
// arr.indexOf("탐색하고싶은 요소",탐색을 시작할 위치=인덱스)

// // indexOf의 예제**
// let name = ["은정","시윤","혜원","재훈","세준","혜원"]
// name.indexOf("혜원")

// //> 결과 <
// 2

// **// 배열의 마지막에 있는 "혜원"을 데리고 오고싶을 때
// // 탐색을 시작할 위치를 지정해주시면 됩니다.**
// name.indexOf("혜원",3)

// //> 결과 <
// 5

// // lastIndexOf의 예제
// let name = ["은정","혜원","재훈","세준","혜원","시윤"]
// name.lastIndexOf("혜원")

// //> 결과 <
// 4

// // 탐색을 시작할 위치 지정해보기 예제
// name.lastIndexOf("혜원",3)

// //> 결과 <
// 1


// /* includes의 사용방법 */
// arr.includes("탐색하고싶은 요소",탐색을 시작할 위치)

// //includes의 예제
// let name = ["혜원","은정","시윤","세준","재훈","우엽"]
// name.includes("시윤")

// > 결과 <
// true


// //includes의 예제 _ 탐색위치 지정하기
// name.includes("시윤", 3)

// > 결과 <
// false


// /* find의 사용방법 */
// arr.find(()=>{
//     // 판별함수
// })

// // find 예제
// let arr = [1,2,3,4,5,6,7]
// arr.find((item)=>{
// 		return item > 4
// 	})

// > 결과 <
// 5


// /* findIndex의 사용방법 */
// arr.findIndex(()=>{
//     // 판별함수
// })


// // findIndex의 예제
// let arr = [1,2,3,4,5,6,7]
// arr.findIndex((item)=>{
// 		return item > 4
// 	})

// > 결과 <
// // 5가 위치한 인덱스 반환)
// 4

// /* filter의 사용방법 */
// arr.filter(()=>{
//     // 일정한 기준을 줄 함수
// })

// //filter 예제
// let arr = [1,2,3,4,5,6,7,8]
// arr.filter((item)=>{
// 		return item > 3
// 	})

// > 결과 <
// [4,5,6,7,8]

// /* some의 사용방방법 */
// const 콜백함수 = (arr_item)=>{//판별하고싶은 것}

//     arr.some(//콜백함수)

// // some의 예제
// const array = [1,2,3,4,5,6,7,8]
// const elFunc = (item)=>{return item%2===o}

// console.log(array.some(elFunc))

// > 결과 <
// true


// /* every의 사용방법 */
// const 콜백함수 = (arr_item)=>{//판별하고싶은 것}

//     arr.every(//콜백함수)

// // every의 예제
// const array = [2,4,6,8]
// const elFunc = (item)=>{return item%2===o}

// console.log(array.every(elFunc))

// > 결과 <
// true