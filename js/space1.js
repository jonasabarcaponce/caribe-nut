$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// Get a reference to the navigation element
const navigation = document.querySelector('.caribe-navegacion');

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
  // Check the scroll position
  if (window.scrollY > 100) { // You can change the scroll threshold as needed
    // Display the navigation by removing the 'd-none' class and adding the 'd-block' class
    navigation.classList.remove('d-none');
    navigation.classList.add('d-block');
  } else {
    // Hide the navigation by adding the 'd-none' class and removing the 'd-block' class
    navigation.classList.add('d-none');
    navigation.classList.remove('d-block');
  }
});
