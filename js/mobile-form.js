const host = {
  debug: !1,
  settings: {
    "connection.web.trust_login": "https://basispanel.ir/apicms",
    "connection.web.basiscore": "https://basispanel.ir/apicms",
    "connection.web.media": "https://basispanel.ir/apicms",
    "default.dbsource.verb": "post",
    "default.call.verb": "get",
    "default.viewCommand.groupColumn": "prpid",
    "default.dmnid": "4914",
    "default.binding.regex": "\\{##([^#]*)##\\}",
  },
};
window.scrollTo(0,0)
let loaderContainer = document.querySelector(".loaderContainer");

function onSource1(args) {
  console.log("onSource");
  const captcha = document.querySelector(
    ".homeForm1 #requestBox input[name='captcha']"
  ).value;
  const captchaid = document.querySelector(
    ".homeForm1 #requestBox input[name='captchaid']"
  ).value;
  const stringJson = JSON.stringify(args.source?.rows[0]);
  console.log("stringJson", stringJson);
  $bc.setSource("edit.object1", {
    value: stringJson,
    captcha: captcha,
    captchaid: captchaid,
  });
}

let responsMsg = document.querySelector(".responsMsg1");
let responsMsgIn = document.querySelector(".responsMsg1 span");

async function OnProcessedEditObject1(args) {
  console.log("OnProcessedEditObject1");
  const response = args.response;
  const json = await response.json();

  if (json.errorid == 6) {
    console.log(json);
    responsMsgIn.innerHTML = "فرم با موفقیت ثبت شد.";
    responsMsg.style.display = "block";
    document.querySelector("form").reset();
    let questions = document.querySelectorAll(
      ".homeForm1 div[data-bc-question]"
    );
    questions.forEach((element) => {
      element.classList.add("afterStar");
    });
    setTimeout(() => {
      responsMsg.style.display = "none";
    }, 2000);
  }
  if (json.errorid == 4) {
    console.log(json);
    responsMsgIn.innerHTML = "لطفا کپچا را به درستی وارد کنید.";

    responsMsg.style.display = "block";

    setTimeout(() => {
      responsMsg.style.display = "none";
    }, 2000);
  }
}

function renderFn1(params) {
  window.scrollTo(0,0)

  loaderContainer.style.display = "none";
  let questions = document.querySelectorAll(".homeForm1 div[data-bc-question]");
  questions.forEach((element) => {
    element.classList.add("afterStar");

    let title = element.querySelector(".homeForm1 [data-bc-question-title]");
    let qInput = element.querySelector(".homeForm1 input");
    let qTxtArea = element.querySelector(".homeForm1 _textarea");
    if (title) {
      title = element.querySelector(
        ".homeForm1 [data-bc-question-title]"
      ).innerHTML;
      if (qInput) {
        qInput.setAttribute("placeholder", title);
        qInput.setAttribute("aria-label", title);
      } else if (qTxtArea) {
        qTxtArea.setAttribute("placeholder", title);
        qTxtArea.setAttribute("aria-label", title);
      }
    }
    console.log("q", qInput);
  });
  let inputs = document.querySelectorAll("input");
  inputs.forEach((element) => {
    element.addEventListener("input", function (params) {
      if (this.value == "") {
        console.log("epmty");
        $(this).closest("div[data-bc-question]").addClass("afterStar");
      } else {
        $(this).closest("div[data-bc-question]").removeClass("afterStar");
      }
    });
  });

  let textAreas = document.querySelectorAll("textarea");
  textAreas.forEach((element) => {
    element.addEventListener("input", function (params) {
      console.log($(this).closest("div[data-bc-question]"));

      if (this.value == "") {
        console.log("epmty");
        $(this).closest("div[data-bc-question]").addClass("afterStar");
      } else {
        $(this).closest("div[data-bc-question]").removeClass("afterStar");
      }
    });
  });
}

function renderEditobject(params) {
  loaderContainer.style.display = "none";
}
