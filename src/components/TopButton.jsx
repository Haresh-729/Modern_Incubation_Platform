import React from "react";

const Topbutton = () => {
  let mybutton = document.getElementById("myBtn");
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <div>
      <button
        className="bg-[#ffffff] fixed sticky z-30 rounded-full p-[1.5rem]"
        onClick={topFunction()}
        id="myBtn"
        title="Go to top"
      >
        Top
      </button>
    </div>
  );
};

export default Topbutton;
