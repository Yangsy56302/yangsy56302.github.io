const splashes = [
    // technical
    // "* insert random splashes here *",
    "test message pls ingore",
    
    // uncategorized

    // ADOFAI
    "A Dance of Fire and Ice!",
    "Playing it Straight!",
    "North and South are Always Off Beat!",
    "SSSSSS!",
    "More SSSSSS!",
    "These Tutorials Are Inadequate for What's Coming, Forgive Me!",
    "Good Luck!",
    "SSSSSS Returns!",
    "Speed Trial!",
    "Swirly SSSSSS!",
    "Inside Squares, Outside Squares!",
    "Spin 2 Win!",
    "Introducing Hexagons!",
    "The Beast With Many Eyes!",
    "ZZZZZZ!",
    "Behold, The Right Triangle!",
    "North and South are Now On-Beat!",
    "Crumbling Boxes!",
    "For Added Flavor, Add Loops!",
    "Introducing Midspin Tiles!",
    "Trust Your Ears, not Your Eyes!",
    "Miko Skip!",
    "Subscribe to YouTube@OokamiOkoku!",
    "BBBB!",
    "EMOMOMO!",
    "U-turn Road!",
    "One Forgotten Night!",
    "It Go!",
    "Elevators!",
    "Elevator Dance!",
    "Unlimited Flexibility!",
    "NEO COSMOS!",
    "Introducing The Hold!",
    "Catch and Release!",
    "NEW LIFE!",
    "Catch and Release, Sixteenths!",
    "No Holds Barred!",
    "OK Maybe One Hint Here!",
    "No Hints Here!",
    "Disappearing Floor!!",
    "Almost there!! Don't get distracted!!",
    "The J!",
    "To Three To Two!",
    "My New Updated Maze (final) (1)",
    "My New Updated Maze (final) (1)",

    // ADOFAI Cursed by Firestix
    "A Dance of Fire and Ice but the levels are cursed!",
    "It's only a little longer!",
    "!eef etal ruoy yap ot tegrof t'noD",
    "Keep having nightmares about Classic Pursuit!",
    "Something is wrong with the train!",
    "Are you bored with normal ADOFAI? Are you one of the chosen few who can ace PULSE first try? Well, level 6-X? is for you!",
    "Please continue playing Firestix's levels!",
    "The final battle has begun!",
    "There's no fun allowed!",
    "If you play the drums or are good at rhythm, 8-X? will make you want to die!",
    "There's a twirl on every tile!",
    "You must fight The Midnight King in order to free the crabs from it's tyranny!",
    "haha funny song go du dudulu dudulu dudulu dudulu dudulu dudulu dudulu",
    "Way too many midspins!",
    "h",
    "One Forgotten Meme!",
    "Rid the world of these curses once and for all!",
    "haha funny song go du dudulu dudulu dudulu dudulu dudulu dudulu dudulu",

    // ADOFAI Cursed by Yangsy56302
    "Non-Explosive Memes!",
    "Party of !stiripS",
    "EEEEVEN MOMOMORE CURSED LED LEVELS!",
    "Novel Feature!",

    // ADOFAI Cursed
    "Exclamation mark!",

    // ADOFAI Cursed Notations
    "Your current speed is 60 seconds per minute",
    "You are now experiencing 0 extra tiles per beat",
    "Current curse: None",
    "Next curse: ...",
    "Current level: \"11-X\"(\"XT-X\"(PA-X))",
    "Next level: XT-6",
    "None = λx.x",

    // ADOFAI Cursed Mathematical Models
    "Function composition!",
    "Inverse function!",
    "Matrix!",
    "Lambda calculus!",

    // DDLC
    "Doki Doki Literature Club!",
    "Just Monika!",
    "Monika After Story!",
    "MAKE IT STOP!",
    "print(os.listdir('./characters/'), sep='\\n', end='\\n\\n')",

    // DDLC x BA
    "Doki Doki Heart Milestone Event!",
    "Rotating, Translating, Rewinding, and Scaling!",
    "Student('./archives/mil/sem/yuuka.chr').obj.mass = 100 * si.common.kilo",
    
    // BA
    "Vol1.3 sucks!",

    // BIY
    "Baba Is You!",
    "text_what what",
    "text_make text_it text_stop woah",

    // Minecraft

    // Website
    "Press F5 to refresh the page (and of course this splash)!",
    "!404 not Not Found!"
];

function randomSplash() {
    document.getElementById('splash').textContent = splashes[Math.floor(Math.random() * splashes.length)];
}

randomSplash();