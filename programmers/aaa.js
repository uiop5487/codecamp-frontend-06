let profile = {
  name: "철수",
  age: 8,
  school: "다람쥐초등하교",
};

let friendprofile = profile;

console.log(friendprofile);

profile.name = "영희";

console.log(friendprofile);
console.log(profile);
