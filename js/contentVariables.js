let aboutHeader = "Who Am I?";

let workHeader1 = "ActiFi";
let workHeader2 = "temp1"
let workHeader3 = "temp2"

let firstButtons = `<button class="bottom" onclick="nextPage()">Next</button>`;
let middleButtons = `<button class="bottom" onclick="prevPage()">Prev</button>
<button class="bottom" onclick="nextPage()">Next</button>`;
let lastButtons = `<button class="bottom" onclick="prevPage()">Prev</button>`;

let aboutContent = `<p>Hello, I'm <span class="pink">Emily Renee Iverson</span>, 20 year old Computer science major (
Soon to be graduate) at the University of Minnesota, Preparing to work at UnitedHealth Group. 
My favorite Languages for projects are Python and Javascript, although I also have experience in
C, C++, Ocaml, Java, HTML, CSS, SQL, and PHP to name a few.</p>
<p>My main passions are Coding, Baking, Knitting, and Gaming, an interesting combo for sure.</p>`;

let projectsContent1 = `<a class = 'pink' href='https://step-set.org/'>Stepset</a> is a startup that aims to connect people looking to make startups. I was
contacted due to my interest in the project and experience in web development from a class I took. An AGILE
development porcess was used to ensure the team could finish on time. My responsibilites were mainly on the
back-end working with a MySQL database and PHP to create dynamic webpages, 
I created a login system with email verification as well as encrypted passwords,
A way to store and search for projects, and storage of profiles. I also taught other team members about best practices
with SQL to ensure SQL-injection was not possible and all data was properly encrypted.`

let projectsContent2 = `<a href="https://github.com/EmilyTheCleric/gopher_grades_bot" style="color:#6E5494">GopherGrades Bot</a> 
is a discord bot made for the University of Minnesota, based off of the website <a href="https://gophergrades.com/"> of the same name</a>.
Originally Written in Python I have been meaning to update it to Node.js since the wrapper I was using for Discord
in python has become depreciated`;

let projectsContent3 = `<p>Implemented part of a Drone Seach and rescue program in C++ for a class consisting of:
<ul>
<li>An image processesing system for identifying a robot in an image</li>
<li>A search pattern facade</li>
<li>A simulation facade since we couldn't use real drones</li>
<li>A composite abstract factory pattern to create entities for the simulation</li>
</ul>
All work was done with a team using the AGILE development process with daily scrums
</p>`

let projectsHeaderArr = ["<a href='https://step-set.org/'>Stepset</a>","<a href=\"https://github.com/EmilyTheCleric/gopher_grades_bot\">GopherGrades</a>", 
"Drone Search and Rescue"];
let projectsH2Arr = ["November 2021-Current","March 2021-Current", "October 2021-December 2021"]
let projectsContentArr = [projectsContent1, projectsContent2, projectsContent3];

let workContent1 = `I worked for The University of Minnesot's Electronic and Computer Engineering IT department 
as a student technician specialist between September 2021-May 2022. 
During this time, I had many responsibilities such as ensuring lab equipment stayed running,
replacing/repairing any faulty equipment, and miscelanious tasks that the University Depended on to keep
teaching Computer Engineering classes. This has helped me hone my technical skills, as well as work on
my people skills by talking to fellow co-workers and people coming in to get equipment fixed.`

let workContent2 = `I applied for UnitedHealth Group and got a job as a Technical Development Program Associate,
Expected to start May of 2022`


let workHeaderArr = ["ECE-IT","UnitedHealth Group"];
let workH2Arr = ["November 2021-May 2022","Starting May 2022"];
let workContentArr = [workContent1,workContent2];