$(function () {
  $("#signupForm").validate({
    //검증 규칙 명시 - rules에 추가
    //규칙을 적용할 요소는 이름 사용
    rules: {
      userid: {
        required: true,
        validId: true,
      },

      username: {
        required: true,
        minlength: 2,
        maxlength: 4,
      },
      password: {
        required: true,
        rangelength: [8, 15],
      },
      confirm_password: {
        required: true,
        rangelength: [8, 15],
        equalTo: "#password",
      },
      email: {
        required: true,
        email: true,
      },
      policy: {
        required: true,
      },
      topic: {
        required: "#newsletter:checked",
        minlength: 2,
      },
    },
    //검증 규칙과 맞지 않는 경우 보여줄 메세지 작성
    messages: {
      userid: {
        required: "아이디는 필수요소 입니다.",
        validId: "true",
      },
      username: {
        required: "이름은 필수요소 입니다.",
        minlength: "이름은 최소 두자리 여야 합니다",
        maxlength: "이름이 너무 길어요",
      },
      password: {
        required: "비밀번호 입력",
        rangelength: "비밀번호 길이 확인요망",
      },
      confirm_password: {
        required: "비밀번호 입력",
        rangelength: "비밀번호 길이 확인요망",
        equalTo: "이전 비밀번호와 달라요",
      },
      email: {
        required: "이메일 필수",
        email: "이메일 형식이 틀려요",
      },
      policy: {
        required: "우리 사이트 정책에 동의를 필요로 합니다",
      },
      topic: "관심사를 적어도 2개는 선택해야 합니다",
    },
  });
  $("#newsletter").click(function () {
    let topics = $("#newsletter_topics");

    if (topics.css("display") == "none") {
      topics.css("display", "block");
    } else {
      topics.css("display", "none");
    }
  });
});

//사용자만의 규칙 정의
$.validator.addMethod(
  "validId",
  function (value) {
    let regId = /^(?=.*[A-Za-z])(?=.*[\d])[A-Za-z\d]{6,12}$/;
    return regId.test(value); // true or false
  },
  "아이디는 영대소문자,숫자의 조합으로 6~12자리로 만들어야합니다"
);
