const Information = {
  firstInfo: {
    greeting: "Hi!",
    introParagph:
      "I am Ramazan Ezel. I'm a full-stack developer. I can craft solid and scable frontend products. Let's meet!",
    email: "aksoy.ezel@gmail.com",
    photo:
      "https://media.licdn.com/dms/image/D4D03AQGTs6frgKfk9Q/profile-displayphoto-shrink_400_400/0/1678802128078?e=1684368000&v=beta&t=FYM1TBgBKbrr-Rsx4orFUYZFTjkV7toyfCFnIgfpJKU",
  },
  programs: [
    {
      name: "JAVASCRIPT",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      page: "https://www.javascript.com/",
      id: 1,
    },
    {
      name: "REACT",
      url: "https://pluspng.com/img-png/react-logo-png-react-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png",
      page: "https://reactjs.org/",
      id: 2,
    },
    {
      name: "REDUX",
      url: "https://uploads-ssl.webflow.com/5eacc8815c6b73d93d13b2f5/5ed819a41bec6275eade8334_Redux-p-800.jpeg",
      page: "https://redux.js.org/",
      id: 3,
    },
    {
      name: "NODE",
      url: "https://yt3.ggpht.com/ytc/AMLnZu97o0JASuPaUs0CwT_aVwrt9JZzbnyNvr6IGAZQ=s900-c-k-c0x00ffffff-no-rj",
      page: "https://nodejs.org/en/",
      id: 4,
    },
    {
      name: "VS CODE",
      url: "https://camo.githubusercontent.com/4facbe200b31135c3e8adc1c42a20f242f76910ffb094c82d5a7a8af384f619d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f392f39612f56697375616c5f53747564696f5f436f64655f312e33355f69636f6e2e7376672f3230343870782d56697375616c5f53747564696f5f436f64655f312e33355f69636f6e2e7376672e706e67",
      page: "https://code.visualstudio.com/",
      id: 5,
    },
    {
      name: "FIGMA",
      url: "https://s3-alpha.figma.com/hub/file/787485773/66821c0b-fb29-4ece-a775-195db0a7fc2e-cover.png",
      page: "https://www.figma.com",
      id: 6,
    },
  ],
  basicInfoKey: ["Birth Day", "City", "Education", "Prefered Position"],
  basicInfoValue: [
    "11.07.1987",
    "Istanbul",
    "ITU, Civil Engineer 2011",
    "Frontend-UI",
  ],
  about: [
    "I was born in 1987, Istanbul. I have been work international construction works as Construction Manager for 12 years.After that I intrested Software Development works",
    "Now I am a student of Workintech SoftWare Development Course and I hope I will finish my course with successfull",
  ],
  project: [
    {
      name: "Redux-Filmler",
      explanation:
        "In the project, UI shows lots of movies data which are obtanied from backend service. User could add selected movie to watchlist which all data stored in localstroge.",
      tools: ["react", "vercel", "router", "axios", "tailwind", "redux"],
      url: "../Photo/foto.png",
      gitHubPage: "https://github.com/EzelAksoy/fsweb-s10g2-redux-filmler",
      vercel:
        "https://fsweb-s10g2-redux-filmler-lajc0dska-ezelaksoy.vercel.app/movies",
      id: 1,
    },

    {
      name: "Book Shopping Cart",
      explanation:
        "In this project, user could select book which she/he would like to buy. In the shopping cart, user could see which book user will buy and total cost in the UI.",
      tools: ["react", "vercel", "router", "context api", "tailwind"],
      url: "../Photo/foto2.png",
      gitHubPage: "https://github.com/EzelAksoy/fsweb-s11g1-shopping-cart",
      vercel:
        "https://fsweb-s11g1-shopping-cart-ncihlc6cn-ezelaksoy.vercel.app/",
      id: 2,
    },
  ],
  foot: {
    header: "Send me a message!",
    paragraph: "Let's work together on your next project,you can just!!!",
    email: "aksoy.ezel@gmail.com",
  },
  form: JSON.parse(localStorage.getItem("form")),
  formError: {
    company: "",
    expectation: "",
    salary: "",
  },
  submitButtonDisabled: {
    status: true,
  },
};

export default Information;
