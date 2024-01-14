const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');

// engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const feedbacks = [
    {
        name: "@DevProBella23",
        message: "Thanks to AsyncBase, our development team has experienced a significant boost in productivity! Highly recommend this backend as a service platform. #AsyncBase #DeveloperTools",
        img: "/img/devprobella23.png",
    },
    {
        name: "@AppBuilderMax",
        message: "Switching to AsyncBase was a game-changer for our app's performance. Seamless integration, robust features, and excellent support! #BackendAsAService",
        img: "/img/appbuildermax.png",
    },
    {
        name: "@CodeWizardLena",
        message: "AsyncBase simplified our backend operations, allowing us to focus more on our app's core functionalities. Amazing service and easy-to-use interface! #AsyncBase #TechSolutions",
        img: "/img/codewizardlena.png",
    },
    {
        name: "@TechGuruDave87",
        message: "Impressed by the scalability of AsyncBase! As our user base grew, AsyncBase effortlessly handled increased data load without compromising speed. #ScalableTech #BackendSolutions",
        img: "/img/techgurudave87.png",
    },
    {
        name: "@BackendExpertKim",
        message: "Kudos to AsyncBase for their reliability! Our app's uptime has been exceptional since migrating to this platform. No more downtime worries! #ReliableBackend",
        img: "/img/backendexpertkim.png",
    },
    {
        name: "@DataSyncSara",
        message: "The flexibility and customization options offered by AsyncBase are unparalleled. Tailoring our backend to fit our unique needs has never been easier! #Customization #BackendDevelopment",
        img: "/img/datasyncsara.png",
    },
    {
        name: "@AppDevGenius123",
        message: "AsyncBase's security measures are top-notch. Our data is well-protected, giving us peace of mind as we focus on creating a stellar user experience. #DataSecurity #AsyncBase",
        img: "/img/appdevgenius123.png",
    },
    {
        name: "@CloudDevEliot",
        message: "From API integration to database management, AsyncBase has simplified our backend tasks. Seamless and efficient—our team couldn't be happier! #EfficientBackend #AsyncBase",
        img: "/img/clouddeveliot.png",
    },
];



app.get('/', (req, res) => {
    res.render('home', { feedbacks });
});

app.listen(3000, () => {
    console.log('running on http://localhost:8000');
})