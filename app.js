const express = require("express");
const app = express();
app.set("view engine", "ejs");

const port = 5000;

var atheletic_track_data = {
  lanes: 8,
  cost: 70000000,
  owned: 30,
  share: 55000000,
  land_area: 3000,
  distance_of_existing_facility: 50,
};

var global_user_data = [
  [
    "Prakhar Rai",
    "rai.prakhar1609@gmail.com",
    "+91 8955 867 921",
    "D-186, Nirman Nagar, Jaipur 302019",
    "Rajasthan",
    "Athelete Track",
    "Athelete tracks in JECRC Jaipur",
    "Jaipur",
    "1250 sq. ft",
    "Owned",
    "25",
    "7 Cr",
    "5.5 Cr",
    "None",
    "Athelete track with 8 lanes and clappers",
    "The proposal is required for the events in the college for the races and training athelets for 100 and 200 meter marathons so they can win in State and national championships",
  ],
  [
    "Parul Sharma",
    "parulsharma98776@gmail.com",
    "+91 932 9085 777",
    "A-32, Mahapura, Srinagar 224522",
    "Jammu & Kashmir",
    "Atheletic Track",
    "Atheletic Track in SNU College",
    "Srinagar",
    "16000 sq. ft",
    "Not Owned",
    "4 Cr",
    "7 Cr",
    "None",
    "Atheletic track with brown soil",
    "30",
    "5 months",
    "",
  ],
  [
    "Paras Jain",
    "parasjain76@gmail.com",
    "+91 832 9225 453",
    "B-38, Wasseypur, Patna 300001",
    "Bihar",
    "Hockey Field",
    "Hockey Field in BPS School",
    "Patna",
    "11000 sq. ft",
    "Owned",
    "8 Cr",
    "7 Cr",
    "None",
    "Hockey Field with green grass",
    "51",
    "2 months",
    "",
  ],
];

var old_proposal_data = [
  [
    "Pingaksh Pareek",
    "pareekpingaksh08@gmail.com",
    "+91 8504 020 850",
    "E-115, Vaishali Nagar, Delhi 302021 ",
    "Rajasthan",
    "Swimming Pool",
    "Swimming Pool in DPS",
    "Delhi",
    "1600 sq. ft",
    "Owned",
    "2 Cr",
    "5 Cr",
    "None",
    "swimming pool with blue water",
    "76",
    "1 months",
    "Accepted",
  ],

  [
    "Neeraj Kumawat",
    "neerajkumawat78@gmail.com",
    "+91 772 9031 398",
    "B-88, Ram Marg, HanumanNagar 302022",
    "Rajasthan",
    "Hockey Field",
    "Hockey field in Arya College",
    "Hanuman Nagar",
    "12000 sq. ft",
    "Not Owned",
    "8 Cr",
    "5.5 Cr",
    "None",
    "hockey field with good grass",
    "55",
    "5 months",
    "Rejected",
  ],
];

var user_data = [];
var weighted_data = [];

var in_review_proposals = [
  [
    "Jai Sharma",
    "jaisharma69@gmail.com",
    "+91 992 9831 697",
    "A-99, Devi Nagar, Chennai 302023",
    "Tamil Nadu",
    "Football Ground",
    "Football Ground in MPS School",
    "Chennai",
    "13000 sq. ft",
    "Owned",
    "4 Cr",
    "5 Cr",
    "None",
    "Football field with good grass",
    "88",
    "3 months",
    "Accepted",
  ],
  [
    "Pari Puri",
    "chiya776@gmail.com",
    "+91 992 9831 697",
    "M-32, MahaDevi Nagar, kolkata 302222",
    "West Bengal",
    "Multi Purpose Hall",
    "Multi Purpose Hall in NTS College",
    "kolkata",
    "11000 sq. ft",
    "Not Owned",
    "6 Cr",
    "8 Cr",
    "None",
    "hall with good lights",
    "69",
    "2 months",
    "Accepted",
  ],
];

var attributes = [
  "Proponent's name",
  "Proponent's email",
  "Mobile number",
  "Postal Address",
  "State",
  "Infrastructure",
  "Project Name",
  "Project location",
  "Land area",
  "Owner",
  "Facilities to be constructed",
  "Project cost",
  "Central share",
  "Difference b/w 9 and 10",
  "Existing facilities",
  "Date",
];

const user = {
  allowed_username: "Prakhar",
  allowed_password: "Rai@123",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// -- add new proposal

app.get("/newProposal1", (req, res) => {
  res.sendFile(__dirname + "/newProposal1.html");
});

app.post("/newProposal1", (req, res) => {
  // console.log(29);
  user_data = [];
  let s1name = req.body.s1name;
  let s1email = req.body.s1email;
  let s1number = req.body.s1number;
  let s1padd = req.body.s1padd;
  let s1state = req.body.s1state;
  let s1infra = req.body.s1infra;

  // console.log(s1name);
  user_data.push(s1name, s1email, s1number, s1padd, s1state, s1infra);
  // console.log(user_data);
  res.sendFile(__dirname + "/newProposal2.html");
});

app.get("/newProposal2", (req, res) => {
  res.sendFile(__dirname + "/newProposal2.html");
});

app.post("/newProposal2", (req, res) => {
  weighted_data = [];
  let s2projectname = req.body.s2projectname;
  let s2location = req.body.s2location;
  let s2area = req.body.s2area;
  let s2owner = req.body.s2owner;
  let s2facilities = req.body.s2facilities;
  let s2cost = req.body.s2cost;
  let s2share = req.body.s2share;
  let s2diff = req.body.s2diff;
  let s2existing = req.body.s2existing;
  let s2justify = req.body.s2justify;
  let s2month = req.body.s2month;

  // params with weightage

  let broken = false;
  let score = 0;
  let temp = atheletic_track_data.cost - Number(s2cost);
  if (temp >= 0) score = (score + temp) % 30;
  else broken = true;

  temp = atheletic_track_data.distance_of_existing_facility;
  if (temp < 50) broken = true;
  else score += 10;

  temp = atheletic_track_data.land_area - Number(s2area);
  if (temp >= 0) score = (score + temp) % 31;
  else broken = true;

  if (s2owner == "owner") score = (score + 20) % 31;
  else broken = true;

  if (broken) {
    res.sendFile(__dirname + "/reject.html");
  }

  user_data.push(
    s2projectname,
    s2location,
    s2area,
    s2owner,
    s2facilities,
    s2cost,
    s2share,
    s2diff,
    s2existing,
    s2justify,
    s2month
  );

  weighted_data.push({
    score,
    s2projectname,
    s2location,
    s2area,
    s2owner,
    s2facilities,
    s2cost,
    s2share,
    s2diff,
    s2existing,
    s2justify,
    s2month,
  });

  weighted_data.sort();

  console.log(user_data);
  global_user_data.push(user_data);

  res.sendFile(__dirname + "/newProposal3.html");
});

app.get("/newProposal3", (req, res) => {
  res.sendFile(__dirname + "/newProposal3.html");
});

// --- state1

app.get("/inreviewProposal", (req, res) => {
  res.render("central1", {
    global_user_data: in_review_proposals,
    attributes: attributes,
  });
});

app.get("/oldProposal", (req, res) => {
  res.render("central1", {
    global_user_data: old_proposal_data,
    attributes: attributes,
  });
});

app.get("/state1", (req, res) => {
  res.sendFile(__dirname + "/state1.html");
});

app.post("/state1", (req, res) => {
  const curr_user = {
    username: req.body.userId,
    password: req.body.userPass,
  };

  console.log(curr_user);

  if (
    user.allowed_username === curr_user.username &&
    user.allowed_password === curr_user.password
  ) {
    res.sendFile(__dirname + "/state2.html");
  } else {
    res.sendFile(__dirname + "/state1_witherr.html");
  }
});

// --- central

app.get("/central1", (req, res) => {
  res.render("central1", {
    global_user_data: global_user_data,
    attributes: attributes,
  });
});

app.get("/central", (req, res) => {
  res.render("central");
});

app.post("/central", (req, res) => {
  const curr_user = {
    username: req.body.userId,
    password: req.body.userPass,
  };

  console.log(curr_user);
  if (
    user.allowed_username === curr_user.username &&
    user.allowed_password === curr_user.password
  ) {
    // res.render("central1", {
    //   global_user_data: global_user_data,
    //   attributes: attributes,
    // });

    res.render("central3");
  } else {
    res.render("central");
  }
});

// app.get("/central1", (req, res) => {
//   res.render("central1", { user_data: user_data });
// });

app.listen(port, (req, res) => {
  console.log(`server is listening on port ${port}`);
});
