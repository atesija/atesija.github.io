export const games = [
  {
    title: "GourMelee",
    year: 2019,
    platforms: "PC",
    description:
      "GourMelee is a 2-8 player local multiplayer party game where friends share controllers with their teammates to become the best chef in the kitchen!",
    learnings: [
      "ScriptableObjects in Unity",
      "Building game systems around ScriptableObjects",
      "Balancing a game with shared resources",
      "Making controller sharing fun",
    ],
    storeLinks: [
      {
        store: "steam",
        link: "https://store.steampowered.com/app/1081410/GourMelee/",
      },
      {
        store: "itchio",
        link: "https://antontesh.itch.io/gourmelee",
      },
    ],
    screenshots: ["gourmelee.gif", "gourmelee2.gif"],
    videos: [
      {
        caption: "Trailer",
        link: "https://youtu.be/zYyuw5ZdBGg",
      },
      {
        caption: "Played by Funhaus",
        link: "https://youtu.be/dT4dSqM07Eo?t=266",
      },
      {
        caption: "Twitch @ E3 2019",
        link: "https://www.twitch.tv/videos/436936319?t=07h14m27s",
      },
    ],
  },
  {
    title: "Down to Fly",
    year: 2019,
    platforms: "PC",
    description:
      "Smack! Watch out for the swatter while you mate with your friends to keep your fly family alive. Down to Fly is a one vs. six game about mating and the circle of life. Down to Fly was made in three days for TrainJam 2019 and shown off at GDC 2019. The theme was circuitous.",
    learnings: [
      "Building a custom dialog system piggy-backing off of my font system",
    ],
    storeLinks: [
      {
        store: "itchio",
        link: "https://antontesh.itch.io/down-to-fly",
      },
    ],
    screenshots: ["downtofly.gif"],
  },
  {
    title: "Reflection",
    year: 2018,
    platforms: "PC",
    description:
      "Reflection is a game about a point in my life where I made a lot of big changes and what I did to cope with them. I started journaling to handle my anxiety and help clear my head. It's something that I still do daily and helps me manage my thoughts. This game was made in 6 hours for Meditations, a game launcher that lets you play a new, short, and poetic game each day.",
    storeLinks: [
      {
        store: "itchio",
        link: "https://antontesh.itch.io/reflection",
      },
    ],
    links: [
      { name: "Meditations Website", link: "http://meditations.games/" },
      {
        name: "Article about Reflection",
        link:
          "http://overlypositive.com/2019/01/27/27-365-meditation-games-27-blog-therapy/",
      },
      {
        name: "Video by Fangle Spangle",
        link: "https://www.youtube.com/watch?v=Wbgik_MLoUI",
      },
    ],
    screenshots: ["reflection.png"],
  },
  {
    title: "Randomizers",
    year: 2018,
    platforms: "Unity Asset",
    description:
      "Randomizers is a set of scripts to easily add variation to your games! Just drag and drop them on your game objects, no programming necessary. Works for 2D and 3D games.",
    storeLinks: [
      {
        store: "unity",
        link: "http://u3d.as/1niM",
      },
    ],
    screenshots: ["randomizers.png"],
    videos: [
      {
        caption: "Tutorial",
        link: "https://youtu.be/Cub_kqNRo_c",
      },
    ],
  },
  {
    title: "OddEyeSee",
    year: 2018,
    platforms: "PC",
    description:
      "You must hide in a sea of eyes so that the other players don't know where you are. Then copy what the other eyes are doing to blend in. Finally you get to poke anyone that you think didn't blend in. If you're left alive you win! OddEyeSee was made for TrainJam 2018 and shown off at GDC 2018 and ICGJ 2019.",

    storeLinks: [
      {
        store: "itchio",
        link: "https://antontesh.itch.io/oddeyesee",
      },
    ],
    screenshots: ["oddeyesee.gif"],
    videos: [
      {
        caption: "Gameplay",
        link: "https://youtu.be/vPX8kjx1i3Y",
      },
    ],
  },
  {
    title: "Glitch Slap",
    year: 2017,
    platforms: "PC",
    description:
      "Glitch Slap is a 2D, platform based, multiplayer, party game that will have co-op and vs. modes. The game features arenas with different objectives where players slap objects, enemies, and each other to win. Vs. mode has arenas where players compete against each other along with game mutations like a virus that you pass between players by slapping each other and player location swapping. The co-op mode has arenas like boss battles and fighting enemy waves along with persistent power-ups that carry between the arenas.",
    learnings: ["Creating SpriteRenderer shaders in Unity"],
    screenshots: ["glitchslap.gif"],
    videos: [
      {
        caption: "Stugan 2017 application",
        link: "https://youtu.be/YQ3quxmn8IU",
      },
    ],
  },
  {
    title: "Heart Hop",
    year: 2017,
    platforms: "PC",
    description:
      "Heart Hop is an eight player, team based, battle game played with four controllers. There are two teams, light and dark. Each team either needs to step on all their enemy's hearts or on the button at the back of their base. Players share a controller with their opponent with each player holding one side of it. The game has a continuous 2 second countdown and when it says \"go!\" each player moves in the direction they're holding. If two players land on the same spot they bounce back to their original space. This allows for some team members to stay back and block their opponents from hitting their hearts. This game was made for Wolverine Soft's 48 hour game competition and won 1st place out of 10 entries. The theme was \"3 lives, 2 buttons, 1 moment\". Wolverine Soft is University of Michigan's game development club.",

    storeLinks: [
      {
        store: "itchio",
        link: "https://antontesh.itch.io/heart-hop",
      },
      {
        store: "download",
        link: "https://www.dropbox.com/s/rsa1eb09svkttcj/HeartHop.zip?dl=0",
      },
    ],
    links: [
      {
        name: "Article about the game jam",
        link:
          "https://cse.engin.umich.edu/stories/wolverine-softs-january-game-jam-produces-strong-games-three-winners",
      },
    ],
    screenshots: ["hearthop.gif"],
    awards: ["First Place"],
  },
  {
    title: "Boardgame",
    year: 2016,
    platforms: "Real Life",
    description:
      '"Boardgame" is a programming style game where you choose three moves hidden from your opponents and then reveal them in order. Players have the option to move one space, attack one space next to them, defend from attacks, and push a player one space away from them. The game is played on a six by six grid and placement of players and items is done using two dice to index into the board. Between rounds items will be randomly placed on the board, and then each dead player can place an item on the board.',

    screenshots: ["boardgame.jpg", "boardgame2.jpg"],
  },
  {
    title: "Depersonalize Me",
    year: 2016,
    platforms: "Web",
    description:
      "Depersonalize Me is a game about anxiety, depression, and depersonalization. I tried to capture how anxiety can take over my mind and how it's hard, but not impossible, to recover when it happens.",
    learnings: [
      "Use and tweak Unity shaders",
      "Modify Unity audio mixer from code",
    ],
    storeLinks: [
      {
        store: "itchio",
        link: "https://antontesh.itch.io/depersonalize-me",
      },
      {
        store: "download",
        link:
          "https://www.dropbox.com/s/qs5n49hwodriqt0/DepersonalizeMeWindows.zip?dl=0",
      },
    ],
    links: [
      {
        name: "Writeup of the game",
        link: "http://pajamagaming.blogspot.com/2017/02/browser-games-2.html",
      },
    ],
    screenshots: ["depersonalizeme.png", "depersonalizeme2.png"],
    videos: [
      {
        caption: "Playthrough and commentary by Spacey Ghost",
        link: "https://youtu.be/yNNYt7it4EI",
      },
    ],
  },
  {
    title: "Sad Bunny Man",
    year: 2016,
    platforms: "PC",
    description:
      'Made in one hour for One Hour Game Jam with a theme of "Two Buttons".',
    storeLinks: [
      {
        store: "download",
        link:
          "https://www.dropbox.com/s/lduztnxi3v0legn/Sad%20Bunny-man.zip?dl=0",
      },
    ],
    screenshots: ["sadbunnyman.gif"],
  },
  {
    title: "Life Is Short",
    year: 2016,
    platforms: "PC and Mac",
    description:
      "Life is Short is a four player battle platformer where you strive to be the last player alive. A giant worm is destroying the world and you and your friends have to escape it! Along the way you can pick up and throw items to stun players or collect the powerups inside them. The powerups increase your stun duration, throw distance, jump height, and run speed. Use them to your advantage to take out your friends and be the last one alive! This game was made for the Capital City Film Festival Fortnight Game Jam 2016 which is a state wide game development competition in Michigan.",
    learnings: ["How to use the Unity audio mixer"],
    storeLinks: [
      {
        store: "itchio",
        link: "https://antontesh.itch.io/life-is-short",
      },
      {
        store: "download",
        link:
          "https://www.dropbox.com/s/8nieewpoo6ncb3v/Life%20is%20Short.zip?dl=0",
      },
    ],
    links: [
      {
        name: "Capital City Film Fest",
        link:
          "https://capitalcityfilmfest.com/event/fortnight-screening-awards-2016",
      },
    ],
    screenshots: ["lifeisshort.gif"],
    videos: [
      {
        caption: "Twitch @ E3 2019",
        link: "https://www.twitch.tv/videos/436936319?t=07h23m33s",
      },
    ],
    awards: ["Second Place", "Crowd Favorite"],
  },
];

//process.env.PUBLIC_URL

/*
  {
    title: "",
    year: 1,
    platforms: "PC",
    description: "",
    learnings: ["", "",],
    storeLinks: [
      {
        store: "itchio",
        link: "",
      },
    ],
    links: [
      { name: "", link: "" },
    ],
    screenshots: ["",],
    videos: [
      {
        caption: "This is a video about...",
        link: "",
      },
    ],
    awards: ["",],
  },
*/
