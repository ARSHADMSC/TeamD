// const initSlider = ()=>{
//     const imageList = document.querySelectorAll(".slider-wrapper .image-list");
//     const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
//     const sliderScrollbar = document.querySelectorAll(".container .slider-scrollbar");
//     const ScrollbarThumb = document.querySelectorAll(".container .slider-scrollbar")
//     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

// ScrollbarThumb.addEventListener("mousedown", (e) =>{
//     const startX = e.clientX;
//     const thumbPosition = ScrollbarThumb.offsetLeft;
// // update thumb position on mouse move
//     const handleMouseMove = (e) =>{
//         const deltaX = e.clientX - startX;
//         const newThumbPosition = thumbPosition + deltaX;
//         const maxThumbPosition = sliderScrollbar.getBoundingClientReact().width - ScrollbarThumb.offsetWidth;

//         const boundedPosition = Math.max(0,Math.min(maxThumbPosition,newThumbPosition))
//         const scrollPosition = (boundedPosition /maxThumbPosition) * maxScrollLeft;
//         ScrollbarThumb.style.left = `${newThumbPosition}px`;
//         imageList.scollLeft = scrollPosition;
//     }


// // Remove eventListners for drag interaction
//     const handleMouseUp = ()=>{
//         document.removeEventListener("mousemove",handleMouseMove);
//         document.removeEventListener("mouseup",handleMouseUp);
    
//     }
// // Add eventListners for drag interaction
//     document.addEventListener("mousemove",handleMouseMove);
//     document.addEventListener("mouseup",handleMouseUp);

// })

// // Slide images according to the slide button clicks
//     slideButtons.forEach(button =>{
//         button.addEventListener("click",()=>{
//             const direction = button.id === "prev-slide" ? -1 : 1;
//             const scrollAmount = imageList.clientWidth * direction;
//             imageList.scrollBy({left: scrollAmount,behavior:"smooth"});

//         });
//     });
    
//     const handleSlideButtons = () =>{
//         slideButtons[0].style.display = imageList.scollLeft <= 0 ? "none" : "block";
//         slideButtons[1].style.display = imageList.scollLeft >=  maxScrollLeft  ? "none" : "block";

//     }

//     const updateScrollThumbPosition = () =>{
//         const scrollPosition = imageList.scollLeft;
//         const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - ScrollbarThumb.offsetWidth);
//         ScrollbarThumb.style.left = `${thumbPosition}px`;
//     }    

//     imageList.addEventListener("scroll", ()=>{
//         handleSlideButtons();
//         updateScrollThumbPosition();
//     });
// }

// window.addEventListener("load",initSlider)