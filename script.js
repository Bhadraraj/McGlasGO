const preloader = document.querySelector('[data_preload]');
let loadingComplete = false;
function addLoadedClass() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
}

window.addEventListener("load", function () {
    loadingComplete = true;
    setTimeout(function () {
        if (loadingComplete) {
            addLoadedClass();
        }
    }, 1000);
});

window.addEventListener("error", function () {
    loadingComplete = true;
    setTimeout(function () {
        if (loadingComplete) {
            addLoadedClass();
        }
    }, 1000);
});

setTimeout(function () {
    if (!loadingComplete) {
        addLoadedClass();
    }
}, 5000);

document.addEventListener('DOMContentLoaded', function () {
    gsap.to('.banner1SecRight', { duration: 2, y: -200, scale: 1 });
    // gsap.to('.ourStorySectionCon', { duration: 2, y: -500, scale: 1 });
    // gsap.to('.ourRD', { duration: 2, y: -500, scale: 1 });
    gsap.to('.model-section', { duration: 2, y: -200, });
    gsap.to('.ourStory', { duration: 2, y: -100, })

});

let number1 = document.querySelector('[number1]');
let number2 = document.querySelector('[number2]');
let number3 = document.querySelector('[number3]');
let number4 = document.querySelector('[number4]');
let number5 = document.querySelector('[number5]');

function increase() {

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    setInterval(() => {

        if (count1 < 8) {

            count1++
            return number1.textContent = count1;
        }

    }, 30);

    setInterval(() => {
        if (count2 < 63) {

            count2++

            return number2.textContent = count2;
        }
    }, 30);

    setInterval(() => {
        if (count3 < 18) {
            count3++
            return number3.textContent = count3;
        }
    }, 30)
    setInterval(() => {
        if (count4 < 56) {

            count4++

            return number4.textContent = count4;
        }
    }, 30)
    setInterval(() => {
        if (count5 < 80) {

            count5++

            return number5.textContent = `${count5} k`;
        }
    }, 30)

}


document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = form.querySelector('input[placeholder="Enter Your Name"]').value.trim();
        const city = form.querySelector('input[placeholder="Enter Your City"]').value.trim();
        const email = form.querySelector('input[placeholder="Enter Your Mail"]').value.trim();
        const mobile = form.querySelector('input[placeholder="Enter Your Mobile No"]').value.trim();
        const reason = form.querySelector('input[placeholder="Reason For Enquiry"]').value.trim();
        const comments = form.querySelector('textarea[placeholder="Comments"]').value.trim();

        resetStyles();

        if (name === '') {
            showError(form.querySelector('input[placeholder="Enter Your Name"]'));
        }
        else if (name !== '') {
            noError(form.querySelector('input[placeholder="Enter Your Name"]'))
        }
        if (city === '') {
            showError(form.querySelector('input[placeholder="Enter Your City"]'));
        }
        else if (city !== '') {
            noError(form.querySelector('input[placeholder="Enter Your City"]'));
        }
        if (email === '') {
            showError(form.querySelector('input[placeholder="Enter Your Mail"]'));
        }
        else if (email !== '') {
            noError(form.querySelector('input[placeholder="Enter Your Mail"]'));
        }
        if (mobile === '') {
            showError(form.querySelector('input[placeholder="Enter Your Mobile No"]'));
        }
        else if (mobile !== '') {
            noError(form.querySelector('input[placeholder="Enter Your Mobile No"]'));
        }
        if (reason === '') {
            showError(form.querySelector('input[placeholder="Reason For Enquiry"]'));
        }
        else if (reason !== '') {
            noError(form.querySelector('input[placeholder="Reason For Enquiry"]'));
        }
        if (comments === '') {
            showError(form.querySelector('textarea[placeholder="Comments"]'));
        }
        else if (comments !== '') {
            noError(form.querySelector('textarea[placeholder="Comments"]'));
        }
        else {
            form.submit();

            clearForm();
        }

        if (name !== '' && city !== '' && email !== '' && mobile !== '' && reason !== '' && comments !== '') {
            form.submit();
        }
    });

    function clearForm() {
        name.value = '';
        city.value = '';
        email.value = '';
        mobile.value = '';
        reason.value = '';
        comments.value = '';


    }
    function resetStyles() {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(function (input) {
            input.classList.remove('error-input');
            input.classList.remove('noerror-input');
        });
    }

    function showError(element) {
        element.classList.add('error-input');
    }

    function noError(element) {
        element.classList.add('noerror-input');
    }
});



// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {


//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);

//         if (targetElement) {
//             targetElement.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start' // Scroll to the top of the target element
//             });
//         }
//     });
// });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault(); // Prevent default anchor behavior

//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);

//         if (targetElement) {
//             targetElement.style.position = 'absolute'; // Set position to relative
//             targetElement.style.top = '2000px'; // Apply top offset of 100px

//             targetElement.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start',
//                 inline: 'start'
//             });

//             setTimeout(() => {
//                 targetElement.style.position = '';
//                 targetElement.style.top = '';
//             }, 1000); // Adjust the timeout value as needed
//         }
//     });
// });

document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    // if (scrollPosition > 500) {
    //     gsap.to('.businessModalSection', { duration: 2, y: -200, scale: 1 });
    // }

    if (scrollPosition > 1500) {
        increase()

    }

});

// Function to check the screen width and update the image source
function updateImageSource() {
    const bannerImg1 = document.getElementById('banner1');
    const bannerImg2 = document.getElementById('banner2');

    if (window.innerWidth >= 1400) {

        // bannerImg1.src = "./assets/img/banner1-xl.png";
        // bannerImg2.src = "./assets/img/Banner2-xxll.png";

    }

    else if ((window.innerWidth < 1400) && (window.innerWidth > 500)) {
        bannerImg1.src = "./assets/img/banner1.png";
        bannerImg2.src = "./assets/img/banner2.png";


    }
    else {

        bannerImg1.src = "./assets/img/banner1-sm.png";
        bannerImg2.src = "./assets/img/banner2-sm.png";

    }

    // else {
    //     bannerImg1.src = "./assets/img/banner1.png";
    //     bannerImg2.src = "./assets/img/banner2.png";

    // }
}

// Call the function initially
updateImageSource();

// Add event listener for window resize to update image source dynamically
window.addEventListener('resize', updateImageSource);

const anchorElements = document.querySelectorAll('.topRightNav li a');

anchorElements.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        anchorElements.forEach(a => {
            a.classList.remove('active');
        });
        anchor.classList.add('active');
    });
});


// const inputs = document.querySelectorAll('input, textarea');

// // Add event listener to each input and textarea
// inputs.forEach(input => {
//     input.addEventListener('focus', function () {
//         this.style.border = '1px solid black'; // Apply black border when clicked
//     });

//     input.addEventListener('blur', function () {
//         this.style.border = 'none'; // Remove border when clicked outside
//     });
// });  