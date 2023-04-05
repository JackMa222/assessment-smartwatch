const dp1 = "Simple watches came long before the smart watch, originating from pocket watches between the 15th and 16th century. The popularity and widespread availability of 'wrist watches' (what we call today as simply 'watches') began in the 19th century, and has developed since, evolving to highly advanced watches including mechanical, automatic, electrical and quartz watches, all at a varying price. Some of these watches also included the date (day/date/month). 'Digital watches': battery-powered watches that displayed the time and usually date on a LED or LCD screen gained popularity in the 1970s and has led to the evolution to smart watches."
const dp2 = "The varying sensors and advanced trackers that are on smart watches have all significantly developed over time. Previously individual (or large, expensive, combined) machines had to be used in order to track health statistics including heart rate, VO2 max and Sp02 to name a few, and usually were only available in hospitals or medical/sports science  labs.  These machines usually were not portable and could not record a large amount of data. Smart watches now allow for this data to be not only measured on a wrist at a fraction of the former cost, but also allow health specialists to be able to track their patients data to make real world diagnoses. This also allows for remote appointments  or 'telehealth' to be more practical/successful. For example, the ability to measure stress has been key for some people in managing stressful times - preparing for these situations that are often stressful. As well as all of these 'health tracking' features, they also include a range of fitness or 'activity' tracking features. All of these combine multiple health metrics to generate 'reports' after each activity. In the past, this would have required the use of large bulky machinery at specialised locations."
const dp3 = "The broad categories of downloadable apps and features on smart watches are really a 'first' of their kind, and have only been previously matched by the rise of other electronic devices like computers and smartphones, and networks such as the internet. Many of these applications on smart watches originated from mobile/desktop applications. Before the rise of devices like smart phones, the ability to game, watch sport and news, receive information of all sorts all required to 'be somewhere', you had to 'go to it'. Since then, smart phones have changed this to it being 'on you', yet they still required you to 'take out' your phone, and smart watches have revolutionised this, making it all on your wrist."

function buttonChangeV(x) {
    ChangeV(x);
}

function ChangeV(x) {
    switch(x) {
        case 1:
        document.getElementById("dpst").textContent = dp1;
        transitionIn();
        break;
        case 2:
        document.getElementById("dpst").textContent = dp2;
        transitionIn();
        break;
        case 3:
        document.getElementById("dpst").textContent = dp3;
        transitionIn();
        break;
    }
}

function transitionIn() {
    const dpstText = document.getElementById("dpst");
    dpstText.classList.add("fade-in");
    dpstText.addEventListener("animationend", removeAnimationClass);
}


function removeAnimationClass() {
    const dpstText = document.getElementById("dpst");
    dpstText.classList.remove("fade-in");
  }