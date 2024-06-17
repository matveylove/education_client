import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import About from "../pages/About";
import Students from "../pages/Students";
import Support from "../pages/Support";
import PostList from "../pages/PostsList.js";

// Модули курса по моделированию
import Modeling from "../pages/AllCourses/Modeling/Modeling.js";
import OneModule from "../pages/AllCourses/Modeling/OneModule.js";
import TwoModule from "../pages/AllCourses/Modeling/TwoModule.js";
import FreeModule from "../pages/AllCourses/Modeling/FreeModule.js";
import FourModule from "../pages/AllCourses/Modeling/FourModule.js";
import FiveModule from "../pages/AllCourses/Modeling/FiveModule.js";
import SixModule from "../pages/AllCourses/Modeling/SixModule.js";
import SevenModule from "../pages/AllCourses/Modeling/SevenModule.js";
import EightModule from "../pages/AllCourses/Modeling/EightModule.js";
import NineModule from "../pages/AllCourses/Modeling/NineModule.js";
import TenModule from "../pages/AllCourses/Modeling/TenModule.js";
import TestModule from "../pages/AllCourses/Modeling/TestModule.js";
import ElevenModule from "../pages/AllCourses/Modeling/ElevenModule.js";
import TwelveModule from "../pages/AllCourses/Modeling/TwelveModule.js";
import FifteenModule from "../pages/AllCourses/Modeling/FifteenModule.js";
import ThirteenModule from "../pages/AllCourses/Modeling/ThirteenModule.js";
import SixteenModule from "../pages/AllCourses/Modeling/SixteenModule.js";
import FourteenModule from "../pages/AllCourses/Modeling/FourteenModule.js";
import SeventeenModule from "../pages/AllCourses/Modeling/SeventeenModule.js";


//  Модули курса по лазерной гравировке
import Lazer from "../pages/AllCourses/Lazer/Lazer.js";
import OneLazer from "../pages/AllCourses/Lazer/OneLazer.js";
import TwoLazer from "../pages/AllCourses/Lazer/TwoLazer.js";
import FreeLazer from "../pages/AllCourses/Lazer/FreeLazer.js";
import FourLazer from "../pages/AllCourses/Lazer/FourLazer.js";
import FiveLazer from "../pages/AllCourses/Lazer/FiveLazer.js";
import SixLazer from "../pages/AllCourses/Lazer/SixLazer.js";
import SevenLazer from "../pages/AllCourses/Lazer/SevenLazer.js";
import TestLazer from "../pages/AllCourses/Lazer/TestLazer.js";

// Модули для по курса по 3d печати
import Print from "../pages/AllCourses/Print/Print.js";
import OnePrint from "../pages/AllCourses/Print/OnePrint.js";
import TwoPrint from "../pages/AllCourses/Print/TwoPrint.js";
import FreePrint from "../pages/AllCourses/Print/FreePrint.js";
import FourPrint from "../pages/AllCourses/Print/FourPrint.js";
import FivePrint from "../pages/AllCourses/Print/FivePrint.js";
import SixPrint from "../pages/AllCourses/Print/SixPrint.js";
import SevenPrint from "../pages/AllCourses/Print/SevenPrint.js";
import EightPrint from "../pages/AllCourses/Print/EightPrint.js";
import NinePrint from "../pages/AllCourses/Print/NinePrint.js";
import TenPrint from "../pages/AllCourses/Print/TenPrint.js";
import ElevenPrint from "../pages/AllCourses/Print/ElevenPrint.js";
import TwelvePrint from "../pages/AllCourses/Print/TwelvePrint.js";
import FirteenPrint from "../pages/AllCourses/Print/FirteenPrint.js";
import TestPrint from "../pages/AllCourses/Print/TestPrint.js";


export const PRIVATE_PATHS = {
    home: {
        path: 'home',
        element: <Home />
    },
    courses: {
        path: 'courses',
        element: <Courses />
    },
    about: {
        path: 'about',
        element: <About />
    },
    students: {
        path: 'students',
        element: <Students />
    },
    support: {
        path: 'support',
        element: <Support />
    },
    modeling: {
        path: 'courses/modeling',
        element: <Modeling />
    },
    lazer: {
        path: 'courses/lazer',
        element: <Lazer />
    },
    print: {
        path: 'courses/print',
        element: <Print />
    },
    posts: {
        path: 'posts',
        element: <PostList />
    },
    onemodule: {
        path: 'courses/modeling/onemodule',
        element: <OneModule />
    },
    twomodule: {
        path: 'courses/modeling/twomodule',
        element: <TwoModule />
    },
    freemodule: {
        path: 'courses/modeling/freemodule',
        element: <FreeModule />
    },
    fourmodule: {
        path: 'courses/modeling/fourmodule',
        element: <FourModule />
    },
    fivemodule: {
        path: 'courses/modeling/fivemodule',
        element: <FiveModule />
    },
    sixmodule: {
        path: 'courses/modeling/sixmodule',
        element: <SixModule />
    },
    sevenmodule: {
        path: 'courses/modeling/sevenmodule',
        element: <SevenModule />
    },
    eightmodule: {
        path: 'courses/modeling/eightmodule',
        element: <EightModule />
    },
    ninemodule: {
        path: 'courses/modeling/ninemodule',
        element: <NineModule />
    },
    tenmodule: {
        path: 'courses/modeling/tenmodule',
        element: <TenModule />
    },
    elevenmodule: {
        path: 'courses/modeling/elevenmodule',
        element: <ElevenModule />
    },
    twelvemodule: {
        path: 'courses/modeling/twelvemodule',
        element: <TwelveModule />
    },
    thirteenmodule: {
        path: 'courses/modeling/thirteenmodule',
        element: <ThirteenModule />
    },
    fourteenmodule: {
        path: 'courses/modeling/fourteenmodule',
        element: <FourteenModule />
    },
    fifteenmodule: {
        path: 'courses/modeling/fifteenmodule',
        element: <FifteenModule />
    },
    sixteenmodule: {
        path: 'courses/modeling/sixteenmodule',
        element: <SixteenModule />
    },
    seventeenmodule: {
        path: 'courses/modeling/seventeenmodule',
        element: <SeventeenModule />
    },
    testonemodule: {
        path: 'courses/modeling/testonemodule',
        element: <TestModule />
    },
    onelazer: {
        path: 'courses/lazer/onelazer',
        element: <OneLazer />
    },
    twolazer: {
        path: 'courses/lazer/twolazer',
        element: <TwoLazer />
    },
    freelazer: {
        path: 'courses/lazer/freelazer',
        element: <FreeLazer />
    },
    fourlazer: {
        path: 'courses/lazer/fourlazer',
        element: <FourLazer />
    },
    fivelazer: {
        path: 'courses/lazer/fivelazer',
        element: <FiveLazer />
    },
    sixlazer: {
        path: 'courses/lazer/sixlazer',
        element: <SixLazer />
    },
    sevenlazer: {
        path: 'courses/lazer/sevenlazer',
        element: <SevenLazer />
    },
    testlazer: {
        path: 'courses/lazer/testlazer',
        element: <TestLazer />
    },
    oneprint: {
        path: 'courses/print/oneprint',
        element: <OnePrint />
    },
    twoprint: {
        path: 'courses/print/twoprint',
        element: <TwoPrint />
    },
    freeprint: {
        path: 'courses/print/freeprint',
        element: <FreePrint />
    },
    fourprint: {
        path: 'courses/print/fourprint',
        element: <FourPrint />
    },
    fiveprint: {
        path: 'courses/print/fiveprint',
        element: <FivePrint />
    },
    sixprint: {
        path: 'courses/print/sixprint',
        element: <SixPrint />
    },
    sevenprint: {
        path: 'courses/print/sevenprint',
        element: <SevenPrint />
    },
    eightprint: {
        path: 'courses/print/eightprint',
        element: <EightPrint />
    },
    nineprint: {
        path: 'courses/print/nineprint',
        element: <NinePrint />
    },
    tenprint: {
        path: 'courses/print/tenprint',
        element: <TenPrint />
    },
    elevenprint: {
        path: 'courses/print/elevenprint',
        element: <ElevenPrint />
    },
    twelveprint: {
        path: 'courses/print/twelveprint',
        element: <TwelvePrint />
    },
    firteenprint: {
        path: 'courses/print/firteenprint',
        element: <FirteenPrint />
    },
    testprint: {
        path: 'courses/print/testprint',
        element: <TestPrint />
    },
}

export const PUBLIC_PATHS = {
    home: {
        path: '/',
        element: <SignUp/>
    },
    login: {
        path: '/login',
        element: <SignIn />
    }
}