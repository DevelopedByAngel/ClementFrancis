const checkImage=(event)=>
{
    var elmt=document.getElementsByClassName("slide-in")[0];
    var scrolled = window.scrollY+elmt.offsetHeight*1.5;
    if(scrolled>elmt.offsetTop)
    {
        elmt.style.transform="translateX(0)";
        elmt.style.opacity="100"
    }
    else
    {
        elmt.style.transform="translateX(-30vw)";
        elmt.style.opacity="0"
    }
}
window.addEventListener("scroll",checkImage);
