const dateChoices = [
    "Kite Flying (Night or Day",
    "Rake leaves for someone as service then jump in them (and put them in the trash after)",
    "Make a gourmet dinner together (including shopping for ingredients; multiple couples = divide out dishes and make 1-2 each)",
    "Build a snowman or have a snowball fight (Summer = use cotton balls or pom poms)",
    "Get take-out and watch a dry bar comedian",
    "Attend a high school or community play",
    "Car races (matchbox mini cars or hot wheels)",
    "Enjoy ice cream cones while walking around a community flower garden or park",
    "Go on a hike",
    "Golf at a driving range",
    "Board game night (monopoly, risk, ticket to ride, clue, cover your assets, etc.)",
    "Test drive cars",
    "Water gun fight (kiddie pool or buckets for quick fill ups)",
    "Make Gingerbread houses for the nearest holiday",
    "Host an unbirthday party (celebrate everyone with cake, singing, and party games)",
    "Go to Hill Aerospace Museum (bonus points if you choose this)",
    "Photo scavenger hunt (alphabet not using letters, list of random items, etc.)",
    "Ice block ice sculpture contest",
    "Ice blocking",
    "Sledding",
    "If you have a dog, go for a walk with your dog and get ice cream after",
    "Game Haven game night ($5/table, outside food welcome but smoothies are available to purchase, usually Mondays, Fridays, and Saturdays)",
    "Get takeout and watch your favorite movie",
    "Make your favorite food dish together",
    "Where's Waldo at Mall (City Creek, Farmington Station, or Layton Hills = Designate and dress up one person (or a couple) that will walk around at the mall - first to find gets a dollar store prize)",
    "Carve soap",
    "Pretend to be tourists in Salt Lake City (cameras, fanny packs, and everything)",
    "Service scavenger hunt (food for local Food Pantry or make a list of service items and do as many as you can in a night)",
    "Play card games (Egyptian Ratscrew, Spit, Speed, Hearts, Wist, etc.)",
    "Gutter boat racing (cucumbers, zucchini, or oragami)",
    "Dancing lessons at the Murray arts center (lessons before dancing, then can stay dancing)",
    "Decorate someone's car for 'just married' (someone you know)",
    "Night time Tennis (glow in the dark ball, glowsticks, etc.)",
    "Indoor pickleball",
    "Pickleball",
    "Take a scuba diving intro course",
    "Paper airplane flying contest",
    "Play racquetball",
    "Paint night (Bob Ross or YouTube)",
    "Do each others hair (crazy style, or choose specific style)",
    "Build sand castles in the golf course sand traps",
    "Go watch planes at the airport while going for a walk",
    "Bowling",
    "Make cookies (choose your favorite recipe) and deliver to friend or neighbor",
    "Draw portraits in the mall for free",
    "Old movie night",
    "Church movie at the Joseph Smith memorial building or visitor center",
    "Walk or Scooter or Bike at Liberty Park",
    "Find a game at DI and play it together",
    "Gardner Village scavenger hunt or walk",
    "Game night with younger siblings or games for kids",
    "Attend a sporting event",
    "Draw chalk art on a random sidewalk",
    "See who can get the coolest items at Dollar store or Big Deal Outlets for $10",
    "Couples hide and seek in the mall",
    "Shooting range"
];

var listSelection = document.getElementById('date')

function countDates(list) {
    let dateCount = list.length;
        document.getElementById('count-string').innerHTML = `Our date is: `;
}

function generateRandomVar(list) {
    randomNum = Math.floor(Math.random() * list.length);
}

function generateRandomDate(list, randomInt) {
    document.getElementById('your-date-picked').innerHTML = (list[randomInt]);
}

function chooseDate() {
    countDates(dateChoices);
    generateRandomVar(dateChoices);
    generateRandomDate(dateChoices, randomNum);
}