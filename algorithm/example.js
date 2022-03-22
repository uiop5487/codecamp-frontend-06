let rob = 0;
let floor = 100;

for (let i = 0; i < floor; i + 2) {
    rob = rob + 1;
}

function solution(arr) {
    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

function solution(phone_number) {
    let answer = "";

    for (let i = 0; i < phone_number.length; i++) {
        if (i < phone_number.length - 4) {
            //뒷 4자리를 제외한 번호
            answer += "*";
        } else {
            console.log(i, phone_number[i]);
            answer += phone_number[i];
        }
    }
    return answer;
}
