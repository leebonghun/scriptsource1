//아이디 유효성 검증
//영어 대소문자 사용, 숫자만 사용가능 6~12자리까지 허용

function idCheck(userid) {
  //   let userid = document.querySelector("#userid").value;
  let regId = /^(?=.*[A-Za-z])(?=.*[\d])[A-Za-z\d]{6,12}$/;

  // 유저 아이디에있는 값을 가져와야함

  if (!regId.test(userid)) {
    alert("아이디를 다시 확인해주세요");
    document.querySelector("#userid").select();
    return;
  }
}

//비밀번호 유효성 검증

function pwdCheck(password) {
  let regPwd = /^(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@#])[A-Za-z\d!@#]{8,15}$/;

  return regPwd.test(password);
}

function pwdCheck1(password) {
  if (pwdCheck(password)) {
    alert("비밀번호는 숫자,문자,특수문자를 포함해주세요");
    password.select();
    return;
  }
}
function pwdCheck2(password) {
  if (!pwdCheck(password.value)) {
    alert("오류");
    password.select();
    return;
  }
  if (document.querySelector("#userpw").value != password.value) {
    alert("비밀번호가 일치하지 않습니다");
    password.select();
    return;
  }
}

//성별 : 둘 중 무조건 하나 선택
function gender1() {
  var vrrRadio = document.getElementsByName("gender");

  for (var i = 0; i < vrrRadio.length; i++) {
    if (vrrRadio[i].checked) {
      alert(vrrRadio[i].value + "자를 선택하셨습니다");
    }
  }
}
function emailCheck(email) {
  let regEmail = /\w+@[A-Za-z]+\.(com|org|edu|ent)/;

  if (!regEmail.test(email)) {
    alert("이메일을 다시 확인해주세요");
    document.querySelector("#email").select();
    return;
  }
}
function telCheck(mobile) {
  let regTel = /\d{2,3}\d{3,4}\d{4}/g;

  if (!regTel.test(mobile)) {
    alert("핸드폰 번호를 다시 입력해주세요");
    document.querySelector("#mobile").select();
    return;
  }
}
