//배열의 같은 숫자 빼기
function solution(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result[result.length - 1] !== arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}

// 배열의 평균값 구하기
function solution(arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer / arr.length;
}

//배열의 특정부분 제거 후 변경

function solution(phone_number) {
    let answer = "";

    // 1. 뒷 4자리를 제외한 앞에 번호를 변경
    answer = answer.padStart(phone_number.length - 4, "*");
    console.log(answer);

    //2. 뒷 4자리 잘라서 문자열 추가
    answer += phone_number.slice(phone_number.length - 4, phone_number.length);
    console.log(answer);
}
