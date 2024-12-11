
let filterBtn = document.querySelectorAll(".filterBtn")
filterBtn[0].classList.add("activeFilter")

let loaderContainer = document.querySelector(".loaderContainer")
filterBtn.forEach(element => {
element.addEventListener("click" , function (params) {
  $(".filterBtn").removeClass("activeFilter")
  element.classList.add("activeFilter")
  
})
});


$(document).ready(function () {
  $(".filterBtn").click(function (e) {
      var url4 = $(this).attr("data-blog");
      // $(".listContainer").load(url4);

    loaderContainer.style.display="flex"
      $.ajax({
        url: url4,
        method: 'GET',
        success: function(response) {
            // مخفی کردن لودینگ بعد از دریافت پاسخ
            $(".blogContainer").html(response);
             loaderContainer.style.display="none"
        },
       
    });
  });
});
