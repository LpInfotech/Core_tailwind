/*==================================================== */
    /* ========= core js ============== */
/*==================================================== */

//#region 

//====== navbar toggler

const navbarToggler = document.querySelector("#headstick .navbar-toggler");
const dropdownMenu = document.querySelector("#headstick .dropdown-menu");

navbarToggler.addEventListener("click", function(){  
if(dropdownMenu.classList.contains("hidden")){
    // === remove hidden class
    dropdownMenu.classList.remove("hidden");
    // === for toggler lines
    navbarToggler.children[1].style.display = "none"; 
    this.children[2].style.cssText =`transform:rotate(132deg); top:-3px;`;
    this.children[0].style.cssText =`transform:rotate(49deg); top:3px;`;
    // === dropdown menu height
   dropdownMenu.style.height = "auto";
    let heights = dropdownMenu.clientHeight + "px";
    dropdownMenu.style.height = "0px";
    setTimeout(() => {
        dropdownMenu.style.height = heights;
    }, 0) 
}else{
        // === add hidden class
    dropdownMenu.classList.add("hidden");
     // === for toggler lines
    navbarToggler.children[1].style.display = "block"; 
    this.children[2].style.cssText =`transform:rotate(0deg); top:0px;`;
    this.children[0].style.cssText =`transform:rotate(0deg); top:0px;`;
    dropdownMenu.style.height="0px";
}  
});



//#endregion 






//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

    $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top -65)
                }, 1200, "easeInOutExpo");
                return false;
            }
        }
    });

});

