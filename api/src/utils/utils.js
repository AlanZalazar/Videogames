const { Genres } = require("../db");

const include = {
    include: [{
        model: Genres,
        attributes: ['name'],
        through: {
            attributes: [],
        },
    }],
}


const cleanGame = (game) =>{
    return {
    id: game.id,
    name: game.name,
    description: game.description,
    platforms: game.parent_platforms.map((platform) => platform.platform.name).join(", "),
    image: game.background_image,
    released: game.released,
    rating: game.rating,
    created: false,
    genres: game.genres.map((genre) => ({ name: genre.name })),
    }
  };

const cleanGamesApi= (arr) => {
    const clean = arr.map(elem=>{
        return{
            id: elem.id,
            name: elem.name,
            platforms: elem.platforms.map((platform) => platform.platform.name).join(", "),
            image: elem.background_image,
            released: elem.released,
            rating: elem.rating,
            created: false,
            genres: elem.genres.map((genre) => ({ name: genre.name })),

        };
    });
    return clean
}

const cleanGamesDb= (arr) => {
    const clean = arr.map(elem=>{
        return{
            id: elem.id,
            name: elem.name,
            platforms: elem.platforms,
            image: elem.image,
            released: elem.released,
            rating: elem.rating,
            created: elem.created,
            //Genres: elem.genres.map((genre) => genre.name), //como strings
            genres: elem.genres.map((genre) => ({ name: genre.name })), //como objs
            

        };
    });
    return clean
}

const games = [{
    "id": 3498,
    "name": "Grand Theft Auto V",
    "platforms": "PlayStation 5, Xbox Series S/X, PC, PlayStation 4, PlayStation 3, Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    "released": "2013-09-17",
    "rating": 4.47,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3328,
    "name": "The Witcher 3: Wild Hunt",
    "platforms": "Xbox Series S/X, PlayStation 4, Nintendo Switch, PC, Xbox One, PlayStation 5",
    "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    "released": "2015-05-18",
    "rating": 4.66,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 4200,
    "name": "Portal 2",
    "platforms": "PlayStation 3, PC, Xbox 360, Linux, macOS, Xbox One",
    "image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    "released": "2011-04-18",
    "rating": 4.61,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 5286,
    "name": "Tomb Raider (2013)",
    "platforms": "PlayStation 4, macOS, PC, Xbox One, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    "released": "2013-03-05",
    "rating": 4.05,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 4291,
    "name": "Counter-Strike: Global Offensive",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    "released": "2012-08-21",
    "rating": 3.56,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 13536,
    "name": "Portal",
    "platforms": "Android, PlayStation 3, Xbox 360, Linux, macOS, PC, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    "released": "2007-10-09",
    "rating": 4.51,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 12020,
    "name": "Left 4 Dead 2",
    "platforms": "macOS, Linux, PC, Xbox 360",
    "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    "released": "2009-11-17",
    "rating": 4.09,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 5679,
    "name": "The Elder Scrolls V: Skyrim",
    "platforms": "PC, Nintendo Switch, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    "released": "2011-11-11",
    "rating": 4.42,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 28,
    "name": "Red Dead Redemption 2",
    "platforms": "PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    "released": "2018-10-26",
    "rating": 4.59,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 4062,
    "name": "BioShock Infinite",
    "platforms": "PlayStation 4, Xbox 360, Nintendo Switch, Linux, PC, PlayStation 3, Xbox One",
    "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    "released": "2013-03-26",
    "rating": 4.38,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 802,
    "name": "Borderlands 2",
    "platforms": "PlayStation 3, macOS, PC, Android, Linux, PS Vita, Xbox 360",
    "image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    "released": "2012-09-18",
    "rating": 4.01,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3439,
    "name": "Life is Strange",
    "platforms": "PC, Linux, PlayStation 3, macOS, iOS, Xbox 360, Android, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    "released": "2015-01-29",
    "rating": 4.11,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 13537,
    "name": "Half-Life 2",
    "platforms": "PC, macOS, Xbox 360, Linux, Xbox, Android",
    "image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    "released": "2004-11-16",
    "rating": 4.49,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4286,
    "name": "BioShock",
    "platforms": "PlayStation 3, macOS, PC, Xbox 360",
    "image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
    "released": "2007-08-21",
    "rating": 4.36,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 32,
    "name": "Destiny 2",
    "platforms": "Xbox One, PC, PlayStation 4, Web, Xbox Series S/X, PlayStation 5",
    "image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    "released": "2017-09-06",
    "rating": 3.54,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 1030,
    "name": "Limbo",
    "platforms": "Linux, PS Vita, Android, Xbox One, Nintendo Switch, iOS, PC, macOS, Xbox 360, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    "released": "2010-07-21",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 58175,
    "name": "God of War (2018)",
    "platforms": "PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    "released": "2018-04-20",
    "rating": 4.58,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3070,
    "name": "Fallout 4",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    "released": "2015-11-09",
    "rating": 3.8,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 2454,
    "name": "DOOM (2016)",
    "platforms": "Xbox One, PC, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
    "released": "2016-05-13",
    "rating": 4.38,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 3939,
    "name": "PAYDAY 2",
    "platforms": "Linux, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    "released": "2013-08-13",
    "rating": 3.51,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 11859,
    "name": "Team Fortress 2",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
    "released": "2007-10-10",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 278,
    "name": "Horizon Zero Dawn",
    "platforms": "PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
    "released": "2017-02-28",
    "rating": 4.3,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 4459,
    "name": "Grand Theft Auto IV",
    "platforms": "Xbox 360, PlayStation 3, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
    "released": "2008-04-29",
    "rating": 4.26,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 41494,
    "name": "Cyberpunk 2077",
    "platforms": "PlayStation 4, PC, Xbox Series S/X, PlayStation 5, Xbox One",
    "image": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
    "released": "2020-12-10",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3272,
    "name": "Rocket League",
    "platforms": "Nintendo Switch, Linux, macOS, Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
    "released": "2015-07-07",
    "rating": 3.94,
    "created": false,
    "genres": [
        {
            "name": "Sports"
        },
        {
            "name": "Racing"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 422,
    "name": "Terraria",
    "platforms": "Xbox 360, Wii U, Nintendo 3DS, Xbox One, PlayStation 4, iOS, PC, macOS, Linux, Nintendo Switch, PlayStation 3, PS Vita, Android",
    "image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
    "released": "2011-05-16",
    "rating": 4.06,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 10213,
    "name": "Dota 2",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
    "released": "2013-07-09",
    "rating": 3.06,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 766,
    "name": "Warframe",
    "platforms": "Xbox Series S/X, PlayStation 5, PlayStation 4, Xbox One, Nintendo Switch, PC",
    "image": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
    "released": "2013-03-25",
    "rating": 3.42,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 29028,
    "name": "Metro 2033",
    "platforms": "Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
    "released": "2010-03-16",
    "rating": 3.93,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 3192,
    "name": "Metal Gear Solid V: The Phantom Pain",
    "platforms": "Xbox One, PlayStation 3, PlayStation 4, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
    "released": "2015-09-01",
    "rating": 4.16,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 7689,
    "name": "Rise of the Tomb Raider",
    "platforms": "Xbox One, PC, macOS, PlayStation 4",
    "image": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
    "released": "2015-11-10",
    "rating": 4.03,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 3287,
    "name": "Batman: Arkham Knight",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
    "released": "2015-06-23",
    "rating": 4.23,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 16944,
    "name": "The Witcher 2: Assassins of Kings Enhanced Edition",
    "platforms": "macOS, PC, Xbox 360",
    "image": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
    "released": "2012-04-16",
    "rating": 4.16,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 23027,
    "name": "The Walking Dead: Season 1",
    "platforms": "Android, PS Vita, macOS, PC, iOS, PlayStation 4, PlayStation 3, Xbox 360, Nintendo Switch, Xbox One",
    "image": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
    "released": "2012-04-23",
    "rating": 4.34,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 19103,
    "name": "Half-Life 2: Lost Coast",
    "platforms": "macOS, Linux, PC",
    "image": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
    "released": "2005-10-27",
    "rating": 3.45,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 416,
    "name": "Grand Theft Auto: San Andreas",
    "platforms": "Xbox One, Android, Xbox, iOS, PC, macOS, Xbox 360, PlayStation 2, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
    "released": "2004-10-26",
    "rating": 4.51,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 11973,
    "name": "Middle-earth: Shadow of Mordor",
    "platforms": "Linux, Xbox One, Xbox 360, PlayStation 3, PlayStation 4, macOS, PC",
    "image": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
    "released": "2014-09-30",
    "rating": 3.89,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 17822,
    "name": "The Witcher: Enhanced Edition Director's Cut",
    "platforms": "PC, macOS",
    "image": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
    "released": "2008-09-16",
    "rating": 4.07,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 290856,
    "name": "Apex Legends",
    "platforms": "PlayStation 4, Nintendo Switch, macOS, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
    "released": "2019-02-04",
    "rating": 3.66,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 19710,
    "name": "Half-Life 2: Episode One",
    "platforms": "Linux, PC, Xbox 360, Android, macOS",
    "image": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
    "released": "2006-06-01",
    "rating": 4.38,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4427,
    "name": "BioShock 2",
    "platforms": "PlayStation 4, Xbox One, Nintendo Switch, PC, macOS, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
    "released": "2010-02-09",
    "rating": 4.07,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 19709,
    "name": "Half-Life 2: Episode Two",
    "platforms": "Xbox 360, Android, macOS, Linux, PC",
    "image": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
    "released": "2007-10-09",
    "rating": 4.44,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 9767,
    "name": "Hollow Knight",
    "platforms": "Nintendo Switch, Xbox One, PS Vita, PC, macOS, Linux, PlayStation 4",
    "image": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
    "released": "2017-02-23",
    "rating": 4.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 41,
    "name": "Little Nightmares",
    "platforms": "PlayStation 4, PC, Xbox One, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
    "released": "2017-04-27",
    "rating": 4.04,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 10035,
    "name": "Hitman",
    "platforms": "PlayStation 4, Linux, macOS, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
    "released": "2016-03-11",
    "rating": 3.92,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 4252,
    "name": "Mirror's Edge",
    "platforms": "Xbox 360, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
    "released": "2008-11-11",
    "rating": 4.07,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 2551,
    "name": "Dark Souls III",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
    "released": "2016-04-11",
    "rating": 4.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3612,
    "name": "Hotline Miami",
    "platforms": "Linux, Nintendo Switch, Xbox One, PlayStation 4, PS Vita, PC",
    "image": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
    "released": "2012-10-22",
    "rating": 4.38,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3790,
    "name": "Outlast",
    "platforms": "Xbox One, PlayStation 4, Nintendo Switch, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
    "released": "2013-09-03",
    "rating": 3.72,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 1447,
    "name": "Deus Ex: Mankind Divided",
    "platforms": "Xbox One, Linux, macOS, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
    "released": "2016-08-22",
    "rating": 3.97,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 10754,
    "name": "BioShock Remastered",
    "platforms": "PlayStation 4, Nintendo Switch, macOS, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
    "released": "2016-09-15",
    "rating": 4.24,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4161,
    "name": "Far Cry 3",
    "platforms": "Xbox One, Xbox 360, PlayStation 3, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
    "released": "2012-11-28",
    "rating": 4.24,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 58134,
    "name": "Marvel's Spider-Man",
    "platforms": "PC, PlayStation 5, PlayStation 4",
    "image": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
    "released": "2018-09-07",
    "rating": 4.46,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 4332,
    "name": "Spec Ops: The Line",
    "platforms": "Xbox 360, PlayStation 3, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
    "released": "2012-06-26",
    "rating": 4.09,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 11936,
    "name": "Half-Life 2: Deathmatch",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
    "released": "2004-11-01",
    "rating": 3.28,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 13668,
    "name": "Amnesia: The Dark Descent",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
    "released": "2010-09-08",
    "rating": 3.65,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 18080,
    "name": "Half-Life",
    "platforms": "PlayStation 2, PC, macOS, Linux, Dreamcast",
    "image": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
    "released": "1998-11-19",
    "rating": 4.39,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 19487,
    "name": "Alan Wake",
    "platforms": "Xbox 360, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
    "released": "2010-05-14",
    "rating": 4.1,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 4386,
    "name": "Saints Row: The Third",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3, Linux",
    "image": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
    "released": "2011-11-14",
    "rating": 3.94,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3696,
    "name": "Wolfenstein: The New Order",
    "platforms": "Xbox One, PC, Xbox 360, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
    "released": "2014-05-19",
    "rating": 4.18,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 10533,
    "name": "Path of Exile",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
    "released": "2013-10-23",
    "rating": 3.64,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Massively Multiplayer"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 654,
    "name": "Stardew Valley",
    "platforms": "Nintendo Switch, Xbox One, PC, iOS, macOS, Linux, PlayStation 4, PS Vita, Android",
    "image": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
    "released": "2016-02-25",
    "rating": 4.4,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4828,
    "name": "Borderlands",
    "platforms": "Xbox 360, PlayStation 3, Xbox One, Nintendo Switch, PC",
    "image": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
    "released": "2009-10-20",
    "rating": 3.82,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 29177,
    "name": "Detroit: Become Human",
    "platforms": "PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
    "released": "2018-05-25",
    "rating": 4.3,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 10142,
    "name": "PlayerUnknown’s Battlegrounds",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg",
    "released": "2017-12-20",
    "rating": 3.28,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 9721,
    "name": "Garry's Mod",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
    "released": "2004-12-24",
    "rating": 3.79,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 39,
    "name": "Prey",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
    "released": "2017-05-05",
    "rating": 4.28,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 17540,
    "name": "Injustice: Gods Among Us Ultimate Edition",
    "platforms": "PlayStation 4, PS Vita, PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg",
    "released": "2013-11-12",
    "rating": 3.52,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 5563,
    "name": "Fallout: New Vegas",
    "platforms": "Xbox One, PlayStation 4, PlayStation 3, PC, Xbox 360",
    "image": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
    "released": "2010-10-19",
    "rating": 4.44,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 4514,
    "name": "L.A. Noire",
    "platforms": "PlayStation 4, PlayStation 3, Xbox 360, PC, Xbox One, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
    "released": "2011-05-17",
    "rating": 4.16,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3144,
    "name": "Super Meat Boy",
    "platforms": "Linux, Nintendo Switch, Wii U, Xbox 360, PlayStation 4, PS Vita, Android, Web, PC, macOS",
    "image": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
    "released": "2010-10-20",
    "rating": 3.97,
    "created": false,
    "genres": [
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 2462,
    "name": "Uncharted 4: A Thief’s End",
    "platforms": "PlayStation 4, PlayStation 5",
    "image": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
    "released": "2016-05-10",
    "rating": 4.5,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 362,
    "name": "For Honor",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
    "released": "2017-02-13",
    "rating": 3.3,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 13633,
    "name": "Sid Meier's Civilization V",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg",
    "released": "2010-09-21",
    "rating": 4.29,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 12447,
    "name": "The Elder Scrolls V: Skyrim Special Edition",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
    "released": "2016-10-27",
    "rating": 4.46,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 10243,
    "name": "Company of Heroes 2",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
    "released": "2013-06-25",
    "rating": 3.09,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 4248,
    "name": "Dishonored",
    "platforms": "PlayStation 4, PlayStation 3, Xbox 360, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
    "released": "2012-09-25",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 864,
    "name": "Dishonored 2",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
    "released": "2016-11-10",
    "rating": 4.26,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3841,
    "name": "Assassin’s Creed IV: Black Flag",
    "platforms": "Xbox 360, Xbox One, PC, Nintendo Switch, Wii U, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
    "released": "2013-10-29",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 4570,
    "name": "Dead Space (2008)",
    "platforms": "PlayStation 3, PC, Xbox One, Xbox 360",
    "image": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
    "released": "2008-10-13",
    "rating": 4.39,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 12536,
    "name": "Hellblade: Senua's Sacrifice",
    "platforms": "Xbox One, Nintendo Switch, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
    "released": "2017-08-07",
    "rating": 4.24,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 430,
    "name": "Grand Theft Auto: Vice City",
    "platforms": "Android, macOS, PC, iOS, PS Vita, PlayStation 2, Xbox",
    "image": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg",
    "released": "2002-10-27",
    "rating": 4.45,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 5583,
    "name": "Hitman: Absolution",
    "platforms": "PlayStation 4, PC, macOS, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg",
    "released": "2012-11-19",
    "rating": 3.73,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4806,
    "name": "Mass Effect 2",
    "platforms": "PC, Xbox One, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
    "released": "2010-01-26",
    "rating": 4.48,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 11935,
    "name": "Half-Life Deathmatch: Source",
    "platforms": "macOS, Linux, PC",
    "image": "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg",
    "released": "2006-05-01",
    "rating": 3.23,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 58812,
    "name": "Control",
    "platforms": "Xbox Series S/X, PlayStation 5, Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
    "released": "2019-08-27",
    "rating": 4.16,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3636,
    "name": "The Last Of Us Remastered",
    "platforms": "PlayStation 4",
    "image": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg",
    "released": "2014-07-29",
    "rating": 4.69,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 257201,
    "name": "Star Wars Jedi: Fallen Order",
    "platforms": "PlayStation 4, PC, PlayStation 5, Xbox One",
    "image": "https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg",
    "released": "2019-11-15",
    "rating": 4.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 9882,
    "name": "Don't Starve Together",
    "platforms": "Linux, Xbox One, PlayStation 4, macOS, PC",
    "image": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg",
    "released": "2016-04-21",
    "rating": 3.78,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 50738,
    "name": "Death Stranding",
    "platforms": "PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
    "released": "2019-11-08",
    "rating": 4.33,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 11934,
    "name": "Counter-Strike: Source",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
    "released": "2004-11-01",
    "rating": 3.74,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 3017,
    "name": "Just Cause 3",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg",
    "released": "2015-11-30",
    "rating": 3.39,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 3747,
    "name": "Metal Gear Solid V: Ground Zeroes",
    "platforms": "PlayStation 3, PlayStation 4, PC, Xbox One, Xbox 360",
    "image": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
    "released": "2014-03-18",
    "rating": 3.89,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 3543,
    "name": "Borderlands: The Pre-Sequel",
    "platforms": "PlayStation 3, Xbox 360, PlayStation 4, Nintendo Switch, PC, Linux, Android, macOS",
    "image": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg",
    "released": "2014-10-13",
    "rating": 3.55,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 4166,
    "name": "Mass Effect",
    "platforms": "Xbox One, Xbox 360, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
    "released": "2007-11-16",
    "rating": 4.39,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 108,
    "name": "Mortal Kombat X",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg",
    "released": "2015-04-07",
    "rating": 3.85,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 3387,
    "name": "Bloodborne",
    "platforms": "PlayStation 4",
    "image": "https://media.rawg.io/media/games/214/214b29aeff13a0ae6a70fc4426e85991.jpg",
    "released": "2015-03-24",
    "rating": 4.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3604,
    "name": "Metro: Last Light Redux",
    "platforms": "Nintendo Switch, PC, Linux, Xbox One, PlayStation 4, macOS",
    "image": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg",
    "released": "2014-08-25",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 19301,
    "name": "Counter-Strike",
    "platforms": "macOS, PC, Linux, Xbox",
    "image": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
    "released": "2000-11-01",
    "rating": 4.04,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 613,
    "name": "Bastion",
    "platforms": "PlayStation 4, PS Vita, Xbox One, PC, iOS, Linux, Nintendo Switch, Xbox 360, macOS",
    "image": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg",
    "released": "2011-07-20",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 13535,
    "name": "Left 4 Dead",
    "platforms": "PC, Xbox 360, macOS",
    "image": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg",
    "released": "2008-11-17",
    "rating": 4.1,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 3603,
    "name": "Metro 2033 Redux",
    "platforms": "PlayStation 4, Xbox One, Nintendo Switch, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg",
    "released": "2014-08-25",
    "rating": 4.09,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4513,
    "name": "Just Cause 2",
    "platforms": "Xbox 360, PlayStation 3, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg",
    "released": "2010-03-23",
    "rating": 3.6,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 326292,
    "name": "Fall Guys: Ultimate Knockout",
    "platforms": "Xbox One, PlayStation 4, PC, Nintendo Switch, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg",
    "released": "2020-08-04",
    "rating": 3.74,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Massively Multiplayer"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 11142,
    "name": "BioShock 2 Remastered",
    "platforms": "PlayStation 4, macOS, PC, Xbox One, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg",
    "released": "2016-09-15",
    "rating": 4.01,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3254,
    "name": "Journey",
    "platforms": "PC, iOS, PlayStation 4, PlayStation 3",
    "image": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg",
    "released": "2012-03-13",
    "rating": 4.32,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Family"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3191,
    "name": "Mad Max",
    "platforms": "Xbox One, PlayStation 4, Xbox 360, Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
    "released": "2015-08-31",
    "rating": 3.76,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 10141,
    "name": "NieR:Automata",
    "platforms": "PlayStation 4, Nintendo Switch, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg",
    "released": "2017-03-17",
    "rating": 4.38,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 46889,
    "name": "Monster Hunter: World",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
    "released": "2018-01-26",
    "rating": 4.02,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 22509,
    "name": "Minecraft",
    "platforms": "Android, PS Vita, PlayStation 4, PlayStation 3, Xbox 360, Nintendo 3DS, Nintendo Switch, macOS, PC, iOS, Wii U, Xbox One, Linux",
    "image": "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg",
    "released": "2009-05-10",
    "rating": 4.42,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Massively Multiplayer"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 13910,
    "name": "XCOM: Enemy Unknown",
    "platforms": "PC, Android, iOS, Xbox 360, PlayStation 3, macOS",
    "image": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg",
    "released": "2012-10-09",
    "rating": 4.2,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 480,
    "name": "Resident Evil 7: Biohazard",
    "platforms": "PlayStation 4, PC, Xbox One, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
    "released": "2017-01-23",
    "rating": 4.32,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 18240,
    "name": "Brothers: A Tale of Two Sons",
    "platforms": "PlayStation 3, Xbox One, iOS, Nintendo Switch, Xbox 360, PlayStation 4, Android, PC",
    "image": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg",
    "released": "2013-08-07",
    "rating": 4.19,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 5525,
    "name": "Brutal Legend",
    "platforms": "Xbox 360, PlayStation 3, Xbox One, iOS, PC, Linux, macOS",
    "image": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg",
    "released": "2009-10-12",
    "rating": 3.65,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 10065,
    "name": "Cities: Skylines",
    "platforms": "Xbox One, PC, macOS, Linux, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg",
    "released": "2015-03-10",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 923,
    "name": "Titanfall 2",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg",
    "released": "2016-10-28",
    "rating": 4.3,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 10989,
    "name": "Paladins",
    "platforms": "PlayStation 4, Xbox One, Nintendo Switch, macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg",
    "released": "2016-09-15",
    "rating": 3.09,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 17576,
    "name": "Batman: Arkham City - Game of the Year Edition",
    "platforms": "PlayStation 4, Xbox 360, Xbox One, PlayStation 3, macOS, PC",
    "image": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg",
    "released": "2012-09-07",
    "rating": 4.39,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 2743,
    "name": "Heavy Rain",
    "platforms": "PlayStation 4, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg",
    "released": "2010-02-23",
    "rating": 4.1,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 25,
    "name": "Middle-earth: Shadow of War",
    "platforms": "PC, Xbox One, PlayStation 4, Android",
    "image": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg",
    "released": "2017-09-27",
    "rating": 3.84,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 28179,
    "name": "SEGA Mega Drive and Genesis Classics",
    "platforms": "PlayStation 4, macOS, Linux, Xbox One, Nintendo Switch, PC",
    "image": "https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg",
    "released": "2010-06-01",
    "rating": 2.99,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Fighting"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 1416,
    "name": "Mafia II",
    "platforms": "PlayStation 3, Xbox 360, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg",
    "released": "2010-08-24",
    "rating": 4.22,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 2361,
    "name": "Psychonauts",
    "platforms": "PlayStation 3, Xbox One, iOS, PC, macOS, Linux, Xbox 360, PlayStation 2, PlayStation 4, Xbox",
    "image": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
    "released": "2005-04-01",
    "rating": 4.02,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 274755,
    "name": "Hades",
    "platforms": "PlayStation 5, Xbox Series S/X, PlayStation 4, Nintendo Switch, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
    "released": "2020-09-17",
    "rating": 4.46,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 17572,
    "name": "Batman: Arkham Asylum Game of the Year Edition",
    "platforms": "PlayStation 3, PC, PlayStation 4, Xbox 360",
    "image": "https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg",
    "released": "2010-03-26",
    "rating": 4.38,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 3687,
    "name": "Watch Dogs",
    "platforms": "Xbox One, Wii U, Xbox 360, PlayStation 3, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg",
    "released": "2014-05-27",
    "rating": 3.57,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 11147,
    "name": "ARK: Survival Of The Fittest",
    "platforms": "Android, Linux, macOS, PC, iOS",
    "image": "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg",
    "released": "2016-03-15",
    "rating": 2.61,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Massively Multiplayer"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 23585,
    "name": "Far Cry 5",
    "platforms": "PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg",
    "released": "2018-03-27",
    "rating": 3.71,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4280,
    "name": "Max Payne 3",
    "platforms": "PlayStation 3, PC, Xbox 360, macOS",
    "image": "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg",
    "released": "2012-05-15",
    "rating": 4.26,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 13554,
    "name": "Fallout",
    "platforms": "PC, macOS, Classic Macintosh",
    "image": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg",
    "released": "1997-09-30",
    "rating": 4.2,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 51329,
    "name": "Shadow of the Tomb Raider",
    "platforms": "Xbox One, PC, PlayStation 4, macOS, Linux",
    "image": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg",
    "released": "2018-09-14",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 1450,
    "name": "INSIDE",
    "platforms": "Nintendo Switch, PC, iOS, macOS, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
    "released": "2016-06-28",
    "rating": 4.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 3931,
    "name": "Saints Row IV",
    "platforms": "PlayStation 3, PC, Xbox One, PlayStation 4, Xbox 360, Linux",
    "image": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg",
    "released": "2013-08-20",
    "rating": 3.82,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 4223,
    "name": "The Darkness II",
    "platforms": "PlayStation 3, macOS, PC, Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg",
    "released": "2012-02-07",
    "rating": 3.7,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 13627,
    "name": "Undertale",
    "platforms": "Xbox Series S/X, Nintendo Switch, Xbox One, PC, macOS, Linux, PlayStation 4, PS Vita",
    "image": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
    "released": "2015-09-14",
    "rating": 4.34,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3556,
    "name": "Alien: Isolation",
    "platforms": "PC, Xbox One, Nintendo Switch, Android, iOS, PlayStation 4",
    "image": "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
    "released": "2014-10-05",
    "rating": 4.2,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 2819,
    "name": "Firewatch",
    "platforms": "macOS, Linux, Nintendo Switch, PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg",
    "released": "2016-02-08",
    "rating": 4.3,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 28568,
    "name": "Assassin's Creed II",
    "platforms": "Xbox 360, PlayStation 3, Xbox One, PC, macOS, PlayStation 4",
    "image": "https://media.rawg.io/media/games/1be/1bed7fae69d1004c09dfe1101d5a3a94.jpg",
    "released": "2009-11-17",
    "rating": 4.42,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 4502,
    "name": "Darksiders",
    "platforms": "PlayStation 3, Xbox One, Xbox 360, Nintendo Switch, PC",
    "image": "https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg",
    "released": "2010-01-27",
    "rating": 3.76,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 58616,
    "name": "Assassin's Creed Odyssey",
    "platforms": "Xbox One, PC, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg",
    "released": "2018-10-05",
    "rating": 4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 45969,
    "name": "Warhammer: Vermintide 2",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/5be/5bec14622f6faf804a592176577c1347.jpg",
    "released": "2018-03-08",
    "rating": 3.61,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 1010,
    "name": "Transistor",
    "platforms": "Nintendo Switch, PlayStation 4, PC, iOS, macOS, Linux",
    "image": "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg",
    "released": "2014-05-20",
    "rating": 4.18,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 8488,
    "name": "Tom Clancy's Rainbow Six Siege",
    "platforms": "Xbox One, PC, PlayStation 4, Xbox Series S/X, PlayStation 5",
    "image": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg",
    "released": "2015-12-01",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 9743,
    "name": "Unturned",
    "platforms": "PlayStation 4, Linux, macOS, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg",
    "released": "2014-07-07",
    "rating": 2.7,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 50734,
    "name": "Sekiro: Shadows Die Twice",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
    "released": "2019-03-22",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 58654,
    "name": "Hitman 2",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg",
    "released": "2018-11-13",
    "rating": 4.03,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 9810,
    "name": "ARK: Survival Evolved",
    "platforms": "Nintendo Switch, Xbox One, PlayStation 4, Linux, macOS, PC, iOS",
    "image": "https://media.rawg.io/media/games/58a/58ac7f6569259dcc0b60b921869b19fc.jpg",
    "released": "2015-06-02",
    "rating": 3.02,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Massively Multiplayer"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 28154,
    "name": "Cuphead",
    "platforms": "PlayStation 4, Nintendo Switch, Xbox One, macOS, PC",
    "image": "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg",
    "released": "2017-09-29",
    "rating": 4.38,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 28201,
    "name": "Metro Exodus",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg",
    "released": "2019-02-13",
    "rating": 4.16,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 2235,
    "name": "Batman: Arkham Origins",
    "platforms": "PlayStation 3, PC, Android, Xbox 360",
    "image": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg",
    "released": "2013-10-25",
    "rating": 3.93,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 28153,
    "name": "Assassin's Creed Origins",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/336/336c6bd63d83cf8e59937ab8895d1240.jpg",
    "released": "2017-10-27",
    "rating": 3.98,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 11052,
    "name": "Titan Quest Anniversary Edition",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg",
    "released": "2016-08-31",
    "rating": 3.79,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 2093,
    "name": "No Man's Sky",
    "platforms": "Nintendo Switch, Xbox One, PC, PlayStation 4, PlayStation 5",
    "image": "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg",
    "released": "2016-08-09",
    "rating": 3.7,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Massively Multiplayer"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2792,
    "name": "Layers of Fear",
    "platforms": "macOS, PC, Nintendo Switch, Linux, PlayStation 4, Xbox One, iOS",
    "image": "https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg",
    "released": "2016-02-16",
    "rating": 3.52,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 998,
    "name": "Battlefield 1",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg",
    "released": "2016-10-21",
    "rating": 3.82,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4003,
    "name": "GRID 2",
    "platforms": "PlayStation 3, Xbox 360, macOS, PC",
    "image": "https://media.rawg.io/media/games/27b/27b02ffaab6b250cc31bf43baca1fc34.jpg",
    "released": "2013-05-27",
    "rating": 3.29,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 1682,
    "name": "The Wolf Among Us",
    "platforms": "PS Vita, PlayStation 4, Xbox One, iOS, PC, Android, Xbox 360, macOS",
    "image": "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg",
    "released": "2013-10-10",
    "rating": 4.39,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3678,
    "name": "War Thunder",
    "platforms": "Xbox One, PC, macOS, Linux, PlayStation 4",
    "image": "https://media.rawg.io/media/games/d07/d0790809a13027251b6d0f4dc7538c58.jpg",
    "released": "2013-08-15",
    "rating": 3.2,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 10340,
    "name": "Crusader Kings II",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg",
    "released": "2012-02-13",
    "rating": 3.59,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 15002,
    "name": "The Stanley Parable",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg",
    "released": "2013-10-17",
    "rating": 4.38,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 9830,
    "name": "Brawlhalla",
    "platforms": "Xbox One, Android, iOS, PC, macOS, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg",
    "released": "2014-04-30",
    "rating": 3.22,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Fighting"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3497,
    "name": "Far Cry 4",
    "platforms": "PlayStation 4, PlayStation 3, PC, Xbox One, Xbox 360",
    "image": "https://media.rawg.io/media/games/b39/b396dac1f3e0f538841aa0355dd066d3.jpg",
    "released": "2014-11-18",
    "rating": 3.81,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 3876,
    "name": "Deus Ex: Human Revolution - Director's Cut",
    "platforms": "Wii U, PC, macOS, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg",
    "released": "2013-10-22",
    "rating": 4.3,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 13461,
    "name": "Resident Evil 5",
    "platforms": "Xbox One, Xbox 360, PC, Nintendo Switch, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/974/974342a3959981a17bdbbff2fd7f97b0.jpg",
    "released": "2009-03-03",
    "rating": 3.81,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 58777,
    "name": "DOOM Eternal",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, PlayStation 5",
    "image": "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
    "released": "2020-03-20",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4527,
    "name": "Call of Duty: Modern Warfare 2",
    "platforms": "Xbox 360, Xbox One, PC, macOS, PlayStation 3",
    "image": "https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg",
    "released": "2009-11-10",
    "rating": 4.26,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 58751,
    "name": "Halo Infinite",
    "platforms": "Xbox One, PC, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg",
    "released": "2021-12-08",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 1256,
    "name": "XCOM 2",
    "platforms": "Nintendo Switch, macOS, PC, PlayStation 4, Linux",
    "image": "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
    "released": "2016-02-04",
    "rating": 4.09,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 3853,
    "name": "Trine 2: Complete Story",
    "platforms": "PlayStation 4, Nintendo Switch, PC, Linux, macOS",
    "image": "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg",
    "released": "2013-06-05",
    "rating": 3.72,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 12024,
    "name": "Insurgency",
    "platforms": "macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg",
    "released": "2014-01-22",
    "rating": 3.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4599,
    "name": "Saints Row 2",
    "platforms": "PlayStation 3, Xbox 360, PC, Linux, Xbox One",
    "image": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg",
    "released": "2008-10-14",
    "rating": 3.55,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 13305,
    "name": "Assassin’s Creed III",
    "platforms": "Wii U, Xbox 360, PlayStation 3, Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg",
    "released": "2012-10-30",
    "rating": 3.74,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 11435,
    "name": "Viscera Cleanup Detail: Shadow Warrior",
    "platforms": "macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg",
    "released": "2013-09-26",
    "rating": 2.58,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 17959,
    "name": "Ori and the Blind Forest: Definitive Edition",
    "platforms": "Xbox One, PC, Nintendo Switch, Xbox 360",
    "image": "https://media.rawg.io/media/games/04a/04a7e7e185fb51493bdcbe1693a8b3dc.jpg",
    "released": "2016-04-27",
    "rating": 4.43,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 18613,
    "name": "Counter-Strike: Condition Zero",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg",
    "released": "2004-03-01",
    "rating": 3.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 13268,
    "name": "Amnesia: A Machine for Pigs",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg",
    "released": "2013-09-09",
    "rating": 3.23,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3168,
    "name": "SOMA",
    "platforms": "PlayStation 4, Xbox One, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/149/149bbed9d90dc09328ba79bbacfda3c8.jpg",
    "released": "2015-09-21",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 10560,
    "name": "Total War: SHOGUN 2",
    "platforms": "macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg",
    "released": "2011-03-14",
    "rating": 3.6,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 262382,
    "name": "Disco Elysium",
    "platforms": "PC, macOS, Xbox One, Nintendo Switch, PlayStation 4, Xbox Series S/X, PlayStation 5",
    "image": "https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg",
    "released": "2019-10-14",
    "rating": 4.43,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4544,
    "name": "Red Dead Redemption",
    "platforms": "Nintendo Switch, PlayStation 4, Xbox One, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg",
    "released": "2010-05-18",
    "rating": 4.43,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 10061,
    "name": "Watch Dogs 2",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg",
    "released": "2016-11-28",
    "rating": 3.84,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 952,
    "name": "Shadowrun Returns",
    "platforms": "PC, macOS, Android, Linux, iOS",
    "image": "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg",
    "released": "2013-07-24",
    "rating": 3.5,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 356714,
    "name": "Among Us",
    "platforms": "Android, Nintendo Switch, PC, iOS, Xbox One",
    "image": "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg",
    "released": "2018-07-25",
    "rating": 3.84,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        }
    ]
},
{
    "id": 3766,
    "name": "Thief",
    "platforms": "PlayStation 4, PlayStation 3, Xbox 360, Xbox One, macOS, PC",
    "image": "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg",
    "released": "2014-02-25",
    "rating": 3.25,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 906,
    "name": "Call of Duty: Black Ops III",
    "platforms": "Xbox 360, Xbox One, PlayStation 3, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg",
    "released": "2015-11-06",
    "rating": 3.26,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 51325,
    "name": "The Last of Us Part II",
    "platforms": "PlayStation 4, PlayStation 5",
    "image": "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
    "released": "2020-06-19",
    "rating": 4.42,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 432,
    "name": "Grand Theft Auto III",
    "platforms": "Android, macOS, PC, iOS, PS Vita, PlayStation 4, PlayStation 2, Xbox",
    "image": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg",
    "released": "2001-10-22",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 28202,
    "name": "Wolfenstein II: The New Colossus",
    "platforms": "PlayStation 4, PC, Nintendo Switch, Xbox One",
    "image": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg",
    "released": "2017-10-25",
    "rating": 4.09,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 28492,
    "name": "Dead Island",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/56e/56ed40948bebaf1968234aa6e3c74771.jpg",
    "released": "2011-09-06",
    "rating": 3.47,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3740,
    "name": "FEZ",
    "platforms": "Nintendo Switch, PlayStation 3, Xbox 360, PlayStation 4, PS Vita, iOS, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
    "released": "2012-04-13",
    "rating": 3.99,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 18272,
    "name": "Magicka",
    "platforms": "Android, PC",
    "image": "https://media.rawg.io/media/games/c7a/c7a71a0531a9518236d99d0d60abe447.jpg",
    "released": "2011-01-25",
    "rating": 3.8,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 19590,
    "name": "Ori and the Blind Forest",
    "platforms": "Xbox 360, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg",
    "released": "2015-03-10",
    "rating": 4.39,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 3474,
    "name": "Lara Croft and the Temple of Osiris",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/1fb/1fb1c5f7a71d771f440b27ce7f71e7eb.jpg",
    "released": "2014-12-08",
    "rating": 3.11,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 1090,
    "name": "This War of Mine",
    "platforms": "Android, PS Vita, Nintendo Switch, Linux, macOS, PC, iOS",
    "image": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg",
    "released": "2014-11-14",
    "rating": 4.07,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 10548,
    "name": "Darksiders Warmastered Edition",
    "platforms": "Xbox One, PC, Nintendo Switch, Wii U, PlayStation 4",
    "image": "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg",
    "released": "2016-11-29",
    "rating": 3.69,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 17352,
    "name": "Killing Floor",
    "platforms": "PC, Linux, macOS",
    "image": "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg",
    "released": "2009-05-14",
    "rating": 3.44,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 3990,
    "name": "The Last Of Us",
    "platforms": "PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg",
    "released": "2013-06-14",
    "rating": 4.58,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 28172,
    "name": "Kingdom Come: Deliverance",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/d8f/d8f3b28fc747ed6f92943cdd33fb91b5.jpeg",
    "released": "2018-02-13",
    "rating": 4.03,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 1358,
    "name": "Papers, Please",
    "platforms": "Linux, macOS, PC, iOS, Android, PS Vita",
    "image": "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg",
    "released": "2013-08-08",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Educational"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 865,
    "name": "Call of Duty: Black Ops",
    "platforms": "iOS, Nintendo DS, PlayStation 3, macOS, PC, Xbox One, Wii, Xbox 360",
    "image": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg",
    "released": "2010-11-09",
    "rating": 4.03,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4639,
    "name": "Dragon Age: Origins",
    "platforms": "Xbox 360, Xbox One, macOS, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg",
    "released": "2009-11-03",
    "rating": 4.4,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 10297,
    "name": "Sid Meier’s Civilization VI",
    "platforms": "iOS, PC, macOS, PlayStation 4, Xbox One, Nintendo Switch, Linux",
    "image": "https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg",
    "released": "2016-10-20",
    "rating": 4.17,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 3757,
    "name": "South Park: The Stick of Truth",
    "platforms": "Xbox One, PlayStation 4, PlayStation 3, PC, Nintendo Switch, Xbox 360",
    "image": "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg",
    "released": "2014-03-04",
    "rating": 4.22,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 43877,
    "name": "Quake Champions",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/fba/fbae1bcfae1feffda6a11fbc1c939420.jpg",
    "released": "2017-08-22",
    "rating": 3.26,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4013,
    "name": "Call of Juarez: Gunslinger",
    "platforms": "PlayStation 3, PC, Nintendo Switch, Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/a86/a86ce0afaf2d5ec2b0f048989f01795e.jpg",
    "released": "2013-05-14",
    "rating": 3.81,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 2572,
    "name": "DiRT Rally",
    "platforms": "PlayStation 4, PC, macOS, Xbox One, Linux",
    "image": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
    "released": "2015-12-07",
    "rating": 3.7,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Racing"
        }
    ]
},
{
    "id": 11726,
    "name": "Dead Cells",
    "platforms": "Xbox One, Nintendo Switch, PlayStation 4, macOS, Linux, iOS, PC",
    "image": "https://media.rawg.io/media/games/f90/f90ee1a4239247a822771c40488e68c5.jpg",
    "released": "2018-08-07",
    "rating": 4.24,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 3015,
    "name": "Chivalry: Medieval Warfare",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3, PlayStation 4, macOS, Linux",
    "image": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg",
    "released": "2012-10-16",
    "rating": 3.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 857,
    "name": "Halo: The Master Chief Collection",
    "platforms": "PC, Xbox One",
    "image": "https://media.rawg.io/media/games/c24/c24f4434882ae9c2c8d9d38de82cb7a5.jpg",
    "released": "2014-11-11",
    "rating": 4.24,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3771,
    "name": "Rayman Legends",
    "platforms": "Xbox One, Xbox 360, PlayStation 3, PC, Nintendo Switch, Wii U, PlayStation 4, PS Vita",
    "image": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg",
    "released": "2013-08-29",
    "rating": 4.16,
    "created": false,
    "genres": [
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 8146,
    "name": "Assassin's Creed Unity",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg",
    "released": "2014-11-11",
    "rating": 3.61,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 10419,
    "name": "Subnautica",
    "platforms": "PlayStation 4, Xbox Series S/X, PC, macOS, Nintendo Switch, Xbox One, PlayStation 5",
    "image": "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg",
    "released": "2018-01-23",
    "rating": 4.24,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4954,
    "name": "Castle Crashers",
    "platforms": "PlayStation 3, Xbox 360, Nintendo Switch, PC, macOS",
    "image": "https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg",
    "released": "2008-08-27",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 15859,
    "name": "Star Wars: Knights of the Old Republic",
    "platforms": "Xbox 360, Xbox, Nintendo Switch, Xbox One, Android, iOS, PC, macOS",
    "image": "https://media.rawg.io/media/games/6e0/6e0c19bb111bd4fa20cf0eb72a049519.jpg",
    "released": "2003-07-15",
    "rating": 4.38,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 22571,
    "name": "Black Desert Online",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg",
    "released": "2014-12-01",
    "rating": 2.96,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 326243,
    "name": "Elden Ring",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox Series S/X, PlayStation 5",
    "image": "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
    "released": "2022-02-25",
    "rating": 4.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 5703,
    "name": "Uncharted 3: Drake's Deception",
    "platforms": "PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/589/589fc47c5ae34160d65c4682e21fed66.jpg",
    "released": "2011-11-01",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 56184,
    "name": "Resident Evil 4 (2005)",
    "platforms": "GameCube, Android, iOS, PlayStation 2, Wii, PC",
    "image": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg",
    "released": "2005-01-11",
    "rating": 4.39,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 19384,
    "name": "The Binding of Isaac",
    "platforms": "macOS, PC",
    "image": "https://media.rawg.io/media/games/cef/cefedf18016cbab466861eb698daf988.jpg",
    "released": "2011-09-28",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 1244,
    "name": "Darkest Dungeon",
    "platforms": "PC, macOS, Nintendo Switch, Linux, PS Vita, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg",
    "released": "2016-01-18",
    "rating": 4.19,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 9475,
    "name": "Don't Starve",
    "platforms": "PlayStation 3, PS Vita, Linux, Wii U, Xbox One, PC, macOS, PlayStation 4",
    "image": "https://media.rawg.io/media/games/f3e/f3eec35c6218dcfd93a537751e6bfa61.jpg",
    "released": "2013-04-22",
    "rating": 3.86,
    "created": false,
    "genres": [
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3932,
    "name": "The Bureau: XCOM Declassified",
    "platforms": "Xbox 360, PC, PlayStation 3, macOS",
    "image": "https://media.rawg.io/media/games/5cc/5cc765484c6df567ed9207c1781b88cb.jpg",
    "released": "2013-08-20",
    "rating": 3.03,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 10073,
    "name": "Divinity: Original Sin 2",
    "platforms": "PlayStation 4, Nintendo Switch, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg",
    "released": "2017-09-14",
    "rating": 4.4,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 19542,
    "name": "Half-Life: Blue Shift",
    "platforms": "Dreamcast, Linux, PC, macOS",
    "image": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg",
    "released": "2001-06-01",
    "rating": 3.71,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 559,
    "name": "Fallout Shelter",
    "platforms": "PlayStation 4, Xbox One, PC, Nintendo Switch, Android, iOS",
    "image": "https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg",
    "released": "2015-06-15",
    "rating": 3.44,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 21265,
    "name": "Half-Life: Opposing Force",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/110/1106ebafac87cc573161f1f4f16e84cf.jpeg",
    "released": "1999-11-01",
    "rating": 3.84,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 18241,
    "name": "DmC: Devil May Cry",
    "platforms": "PlayStation 3, PC, Xbox One, PlayStation 4, Xbox 360",
    "image": "https://media.rawg.io/media/games/295/295eb868c241e6ad32ac033b8e6a2ede.jpg",
    "released": "2013-01-15",
    "rating": 4.02,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 4550,
    "name": "Dead Space 2",
    "platforms": "Xbox 360, PC, Xbox One, PlayStation 3",
    "image": "https://media.rawg.io/media/games/ae1/ae1518c3dc1e847344661905fd2a8d16.jpg",
    "released": "2011-01-25",
    "rating": 4.36,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 6617,
    "name": "Quantum Break",
    "platforms": "Xbox One, PC",
    "image": "https://media.rawg.io/media/games/a28/a289e23b4d4d84f26ab59125e3be4483.jpg",
    "released": "2016-04-05",
    "rating": 3.92,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 28623,
    "name": "Batman: Arkham City",
    "platforms": "Xbox 360, Xbox One, PC, macOS, Wii U, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/b5a/b5a1226bfd971284a735a4a0969086b3.jpg",
    "released": "2011-10-18",
    "rating": 4.42,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 5562,
    "name": "Fallout 3",
    "platforms": "Xbox 360, Xbox One, PC, PlayStation 3",
    "image": "https://media.rawg.io/media/games/5a4/5a4e70bb8a862829dbaa398aa5f66afc.jpg",
    "released": "2008-10-28",
    "rating": 4.08,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3486,
    "name": "Syberia",
    "platforms": "Android, Xbox 360, Nintendo DS, macOS, PC, iOS, Nintendo Switch, PlayStation 3",
    "image": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg",
    "released": "2002-05-28",
    "rating": 3.92,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 59359,
    "name": "A Plague Tale: Innocence",
    "platforms": "PC, Xbox Series S/X, PlayStation 4, PlayStation 5, Xbox One, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/b4a/b4adf80c36e267b35acc3497ed2af19c.jpg",
    "released": "2019-05-13",
    "rating": 4.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3842,
    "name": "Battlefield 4",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/ac7/ac7b8327343da12c971cfc418f390a11.jpg",
    "released": "2013-10-29",
    "rating": 3.94,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 1774,
    "name": "Grim Fandango Remastered",
    "platforms": "PC, PlayStation 4, PS Vita, Xbox One, Nintendo Switch, iOS, Linux, macOS, Android",
    "image": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg",
    "released": "2015-01-26",
    "rating": 3.99,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 17875,
    "name": "Guacamelee! Super Turbo Championship Edition",
    "platforms": "PlayStation 4, Xbox 360, Wii U, Nintendo Switch, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg",
    "released": "2014-07-01",
    "rating": 3.55,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 1959,
    "name": "Goat Simulator",
    "platforms": "Xbox One, Xbox 360, PlayStation 3, PlayStation 4, Android, iOS, macOS, Linux, PC",
    "image": "https://media.rawg.io/media/games/a44/a444a7628bdb49b24d06a7672f805814.jpg",
    "released": "2014-04-01",
    "rating": 3.17,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3028,
    "name": "Beyond: Two Souls",
    "platforms": "PlayStation 3, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg",
    "released": "2013-10-08",
    "rating": 3.79,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 21924,
    "name": "Call of Duty: WWII",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg",
    "released": "2017-11-03",
    "rating": 3.52,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 17126,
    "name": "Torchlight II",
    "platforms": "PC, PlayStation 4, Nintendo Switch, Xbox One, macOS, Linux",
    "image": "https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg",
    "released": "2012-09-20",
    "rating": 3.83,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 42,
    "name": "What Remains of Edith Finch",
    "platforms": "Xbox One, iOS, PC, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/34e/34e100b1f648de99f32d477065f04653.jpg",
    "released": "2017-04-23",
    "rating": 4.39,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 1169,
    "name": "Mafia III",
    "platforms": "PC, macOS, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/a34/a348e613424260bc7e034fb6031c762e.jpg",
    "released": "2016-10-06",
    "rating": 3.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 14348,
    "name": "Dying Light: The Following - Enhanced Edition",
    "platforms": "macOS, Xbox One, PlayStation 4, PC, Linux",
    "image": "https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg",
    "released": "2015-01-26",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 19365,
    "name": "Homefront",
    "platforms": "Xbox 360, PC, PlayStation 3",
    "image": "https://media.rawg.io/media/games/657/657574cd437df9102f511b3be095b0ea.jpg",
    "released": "2011-03-15",
    "rating": 2.95,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 58755,
    "name": "Devil May Cry 5",
    "platforms": "PlayStation 5, Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg",
    "released": "2019-03-08",
    "rating": 4.24,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 492,
    "name": "Yakuza 0",
    "platforms": "PC, PlayStation 4, PlayStation 3, Xbox One",
    "image": "https://media.rawg.io/media/games/ca1/ca16da30f86d8f4d36261de45fb35430.jpg",
    "released": "2015-03-12",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 7819,
    "name": "SUPERHOT",
    "platforms": "PlayStation 4, Nintendo Switch, macOS, Xbox One, Linux, Web, PC",
    "image": "https://media.rawg.io/media/screenshots/ad4/ad445a12ee46543d4d117f3893041ebf.jpg",
    "released": "2016-02-24",
    "rating": 4.2,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2873,
    "name": "The Witness",
    "platforms": "Android, macOS, PC, iOS, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/00b/00b164224ebaf381104d0b215a37afb3.jpg",
    "released": "2016-01-25",
    "rating": 4,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 16112,
    "name": "Sleeping Dogs: Definitive Edition",
    "platforms": "Xbox One, PC, macOS, PlayStation 4",
    "image": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg",
    "released": "2014-10-08",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3892,
    "name": "Sniper Elite V2",
    "platforms": "Wii U, Xbox 360, PlayStation 3, Nintendo Switch, PC",
    "image": "https://media.rawg.io/media/games/03d/03d17d237f9541b67a13f9425ced4ca4.jpg",
    "released": "2012-05-01",
    "rating": 3.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 2733,
    "name": "Broforce",
    "platforms": "Nintendo Switch, PlayStation 4, Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg",
    "released": "2015-10-15",
    "rating": 4.01,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 624,
    "name": "FTL: Faster Than Light",
    "platforms": "PC, Linux, iOS, macOS",
    "image": "https://media.rawg.io/media/games/5f4/5f4780690dbf04900cbac5f05b9305f3.jpg",
    "released": "2012-09-14",
    "rating": 4.26,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 28559,
    "name": "Dragon Age: Inquisition",
    "platforms": "Xbox 360, PlayStation 3, PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/260/26023c855f1769a93411d6a7ea084632.jpeg",
    "released": "2014-11-18",
    "rating": 3.79,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 11276,
    "name": "Call of Duty: Modern Warfare 3",
    "platforms": "PC, macOS, Wii, Xbox 360, PlayStation 3, iOS, Xbox One",
    "image": "https://media.rawg.io/media/games/e9c/e9c042d14515eb3ff7cb4db9fe78e435.jpg",
    "released": "2011-11-08",
    "rating": 3.76,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 2553,
    "name": "Ratchet & Clank",
    "platforms": "PlayStation 4",
    "image": "https://media.rawg.io/media/games/d30/d30ef0c7dd4878161b1f781e297ae6a0.jpg",
    "released": "2016-04-12",
    "rating": 4.05,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 29338,
    "name": "Days Gone",
    "platforms": "PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg",
    "released": "2019-04-26",
    "rating": 3.94,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 15834,
    "name": "The Walking Dead: Season 2",
    "platforms": "macOS, PC, iOS, Android, PS Vita, PlayStation 3, Xbox 360, Nintendo Switch, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg",
    "released": "2013-12-16",
    "rating": 4.04,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3408,
    "name": "Hotline Miami 2: Wrong Number",
    "platforms": "Android, PS Vita, PlayStation 4, PlayStation 3, Linux, macOS, PC, Nintendo Switch, iOS",
    "image": "https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg",
    "released": "2015-03-09",
    "rating": 4.28,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3631,
    "name": "inFAMOUS Second Son",
    "platforms": "PlayStation 4",
    "image": "https://media.rawg.io/media/games/be2/be239d5eb4d0bf02bf722aff51e694ad.jpg",
    "released": "2014-03-21",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 16113,
    "name": "Sleeping Dogs",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/3d9/3d9bac98d79bcd2d445f829e8d6be902.jpg",
    "released": "2012-08-14",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 4440,
    "name": "Deus Ex: Human Revolution",
    "platforms": "PlayStation 3, Xbox One, PC, macOS, Xbox 360",
    "image": "https://media.rawg.io/media/games/81e/81e6c6819d4322caf375b6735c3043ec.jpg",
    "released": "2011-08-22",
    "rating": 4.36,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 2623,
    "name": "Resident Evil 6",
    "platforms": "Web, Nintendo Switch, PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/f6f/f6f39c5b56413f7f4513b25989a1b747.jpg",
    "released": "2012-10-02",
    "rating": 3.42,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 5159,
    "name": "Resident Evil 2 (1998)",
    "platforms": "Dreamcast, GameCube, Nintendo 64, PC, PlayStation",
    "image": "https://media.rawg.io/media/games/d64/d646810b629081cc12aec49ed9f49441.jpg",
    "released": "1998-01-21",
    "rating": 4.32,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 2728,
    "name": "Tom Clancy’s The Division",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/c73/c73c4ffebfe968ba0982a56c2b5020ef.jpg",
    "released": "2016-03-07",
    "rating": 3.7,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 58753,
    "name": "Forza Horizon 4",
    "platforms": "Xbox Series S/X, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg",
    "released": "2018-10-02",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 16209,
    "name": "Kingdom: Classic",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg",
    "released": "2015-09-21",
    "rating": 3.38,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 274762,
    "name": "The Outer Worlds",
    "platforms": "PlayStation 4, PC, Nintendo Switch, Xbox One",
    "image": "https://media.rawg.io/media/games/704/704f831d2d132e9614931f1c4eab9e86.jpg",
    "released": "2019-10-25",
    "rating": 3.87,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 28199,
    "name": "Ori and the Will of the Wisps",
    "platforms": "Xbox One, PC, Nintendo Switch, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg",
    "released": "2020-03-10",
    "rating": 4.47,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 4101,
    "name": "Bayonetta",
    "platforms": "PlayStation 4, PlayStation 3, Xbox 360, Wii U, PC, Xbox One, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/bee/bee483efadcf9d7e657e52184316a34e.jpg",
    "released": "2009-06-23",
    "rating": 4.3,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 16343,
    "name": "A Story About My Uncle",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/37a/37a9536e92cf8fe3b60045aa75dbd41f.jpg",
    "released": "2014-05-27",
    "rating": 3.16,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 23322,
    "name": "Surviving Mars",
    "platforms": "PlayStation 4, Xbox One, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/08b/08b2eee52a9876a48b955e5149affe5b.jpg",
    "released": "2018-03-14",
    "rating": 3.48,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 13194,
    "name": "To the Moon",
    "platforms": "Nintendo Switch, PC, Android, Linux, iOS, macOS",
    "image": "https://media.rawg.io/media/games/fae/faebf3c8cbf30db3f46bfbecf6ada3d6.jpg",
    "released": "2011-01-10",
    "rating": 4.28,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4573,
    "name": "PAYDAY The Heist",
    "platforms": "PC, PlayStation 3",
    "image": "https://media.rawg.io/media/games/546/546cf59a24b0ae308e311a07611ca22f.jpg",
    "released": "2011-10-18",
    "rating": 3.33,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 14446,
    "name": "Call of Duty: Black Ops II",
    "platforms": "Wii U, Xbox One, Xbox 360, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/games/8ee/8eed88e297441ef9202b5d1d35d7d86f.jpg",
    "released": "2012-11-13",
    "rating": 3.94,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 11686,
    "name": "POSTAL 2",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/2a2/2a2f9a0035544500e59a171c7038ec3a.jpg",
    "released": "2003-04-13",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3209,
    "name": "Until Dawn",
    "platforms": "PlayStation 4, PlayStation 3",
    "image": "https://media.rawg.io/media/games/d64/d6443375f9971152866ea76bff97d6d6.jpg",
    "released": "2015-08-25",
    "rating": 4.1,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 18336,
    "name": "Alan Wake's American Nightmare",
    "platforms": "Xbox 360, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/0b3/0b34647c42271600399b93d19b10f1aa.jpg",
    "released": "2012-02-22",
    "rating": 3.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 750,
    "name": "FINAL FANTASY XV",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/2ee/2eeed8524931b4fae1e4a40d0e5443b5.jpg",
    "released": "2016-11-29",
    "rating": 3.87,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 22781,
    "name": "Syberia 2",
    "platforms": "Xbox, Android, PlayStation 3, PlayStation 2, Nintendo Switch, macOS, PC, iOS, Xbox 360",
    "image": "https://media.rawg.io/media/games/c00/c003705c0eaed100397ae408b7b89e90.jpg",
    "released": "2004-03-28",
    "rating": 3.88,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 2115,
    "name": "Overcooked",
    "platforms": "PlayStation 4, Nintendo Switch, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/270/270b412b66688081497b3d70c100b208.jpg",
    "released": "2016-08-01",
    "rating": 4.07,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 28152,
    "name": "STAR WARS Battlefront II",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/f54/f54e9fb2f4aac37810ea1a69a3e4480a.jpg",
    "released": "2017-11-17",
    "rating": 3.57,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 4123,
    "name": "Batman: Arkham Asylum",
    "platforms": "Xbox One, PC, macOS, PlayStation 3, PlayStation 4, Xbox 360",
    "image": "https://media.rawg.io/media/games/d56/d564ee964eb3c17892b3b35dd607f836.jpg",
    "released": "2009-08-25",
    "rating": 4.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 12756,
    "name": "Warhammer 40,000: Space Marine",
    "platforms": "PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg",
    "released": "2011-09-05",
    "rating": 3.45,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 22511,
    "name": "The Legend of Zelda: Breath of the Wild",
    "platforms": "Nintendo Switch, Wii U",
    "image": "https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg",
    "released": "2017-03-03",
    "rating": 4.54,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 14512,
    "name": "Age of Wonders III",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/f95/f95ec06eddda5c5bf206618c49cd3e68.jpg",
    "released": "2014-03-31",
    "rating": 2.93,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 3371,
    "name": "Dark Souls II: Scholar of the First Sin",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/8fc/8fc59e74133fd8a8a436b7e2d0fb36c2.jpg",
    "released": "2015-04-01",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 9609,
    "name": "Euro Truck Simulator 2",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/1f5/1f5ddf7199f2778ff83663b93b5cb330.jpg",
    "released": "2012-10-19",
    "rating": 4.1,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 306124,
    "name": "Borderlands Game of the Year Enhanced",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/df9/df988191048e92cf86dabd2987c47b62.jpg",
    "released": "2019-04-03",
    "rating": 3.8,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 20406,
    "name": "Team Fortress Classic",
    "platforms": "macOS, Linux, PC",
    "image": "https://media.rawg.io/media/games/abd/abdb7e589f0a8ccd36c0582673120b1e.jpg",
    "released": "1999-04-01",
    "rating": 2.93,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 752,
    "name": "SMITE",
    "platforms": "PlayStation 4, Nintendo Switch, Xbox One, macOS, PC",
    "image": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg",
    "released": "2015-08-19",
    "rating": 3.08,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 42895,
    "name": "Assassin's Creed Syndicate",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/9f1/9f189c639f70f91166df415811a8b525.jpg",
    "released": "2015-10-13",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 4094,
    "name": "Metal Gear Rising: Revengeance",
    "platforms": "Android, Xbox One, PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/8e6/8e699e91cf77c2060b6d515e2135b1b1.jpg",
    "released": "2013-02-19",
    "rating": 4.23,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 14962,
    "name": "Dark Souls: Prepare To Die Edition",
    "platforms": "Xbox 360, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/games/511/5116b4524cea34c6b3f12e0ca027d850.jpg",
    "released": "2012-08-23",
    "rating": 4.35,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 58617,
    "name": "Borderlands 3",
    "platforms": "PC, Xbox One, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    "released": "2019-09-13",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 42187,
    "name": "The Sims 4",
    "platforms": "PlayStation 4, macOS, PC, Xbox One, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg",
    "released": "2014-09-02",
    "rating": 3.68,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        }
    ]
},
{
    "id": 13913,
    "name": "Deus Ex: Game of the Year Edition",
    "platforms": "macOS, PlayStation 2, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/screenshots/67e/67e5be6ad7a555248f50bd367e9a071c.jpg",
    "released": "2000-06-22",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 18183,
    "name": "Company of Heroes",
    "platforms": "PC, iOS",
    "image": "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg",
    "released": "2006-09-11",
    "rating": 3.65,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 5193,
    "name": "Oddworld: Abe's Oddysee",
    "platforms": "PlayStation 5, PlayStation 4, PC, PlayStation",
    "image": "https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg",
    "released": "1997-09-19",
    "rating": 3.53,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 22121,
    "name": "Celeste",
    "platforms": "Xbox One, PC, macOS, Nintendo Switch, PlayStation 4, Linux",
    "image": "https://media.rawg.io/media/games/594/59487800889ebac294c7c2c070d02356.jpg",
    "released": "2018-01-25",
    "rating": 4.4,
    "created": false,
    "genres": [
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 18614,
    "name": "Half-Life: Source",
    "platforms": "Linux, PC, macOS",
    "image": "https://media.rawg.io/media/games/d54/d54f0267a042f44c032d8ca264584ecf.jpg",
    "released": "2004-06-01",
    "rating": 3.76,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 15426,
    "name": "Black Mesa",
    "platforms": "PC, Linux",
    "image": "https://media.rawg.io/media/games/009/009e4e84975d6a60173ec1199db25aa3.jpg",
    "released": "2020-03-06",
    "rating": 4.34,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19569,
    "name": "Hitman: Blood Money",
    "platforms": "Xbox 360, PlayStation 4, PC, PlayStation 2, PlayStation 3, Xbox",
    "image": "https://media.rawg.io/media/games/233/233cdc08cce0228f6f35222eca3bff92.jpg",
    "released": "2006-05-29",
    "rating": 4.3,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 50778,
    "name": "A Way Out",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg",
    "released": "2018-03-23",
    "rating": 4.12,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 58550,
    "name": "Ghost of Tsushima",
    "platforms": "PlayStation 4, PlayStation 5",
    "image": "https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg",
    "released": "2020-07-17",
    "rating": 4.45,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 13247,
    "name": "Human: Fall Flat",
    "platforms": "Android, Linux, macOS, PC, iOS, PlayStation 4, Xbox One, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/74d/74dafeb9a442b87b9dd4a1d4a2faa37b.jpg",
    "released": "2016-07-22",
    "rating": 3.83,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 30899,
    "name": "Mafia: The City of Lost Heaven",
    "platforms": "PlayStation 2, Xbox, PC",
    "image": "https://media.rawg.io/media/games/74c/74ca0ec569682a150f3c6f9f661fb6a5.jpg",
    "released": "2002-08-28",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 9600,
    "name": "The Forest",
    "platforms": "PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/1be/1be575aa6de86de328433a63fb534d9a.jpg",
    "released": "2018-04-30",
    "rating": 3.75,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 9966,
    "name": "Dead by Daylight",
    "platforms": "Nintendo Switch, PC, PlayStation 4, Xbox One, PlayStation 5",
    "image": "https://media.rawg.io/media/games/e11/e11325e2f89151d31f612e38dee3b6a0.jpg",
    "released": "2016-06-14",
    "rating": 3.47,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 11312,
    "name": "The Long Dark",
    "platforms": "PlayStation 4, Xbox One, Nintendo Switch, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/fd2/fd20a68d7ef195855588c937865dd0a7.jpg",
    "released": "2014-09-22",
    "rating": 3.91,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 9671,
    "name": "Rust",
    "platforms": "PlayStation 4, Xbox One, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg",
    "released": "2018-02-09",
    "rating": 3.37,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Massively Multiplayer"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 17857,
    "name": "S.T.A.L.K.E.R.: Shadow of Chernobyl",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/348/348640e78a7fcd4bb7dcad4fea014eeb.jpg",
    "released": "2007-03-19",
    "rating": 4.3,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 2597,
    "name": "LEGO The Lord of the Rings",
    "platforms": "Nintendo DS, PC, PlayStation 3, Nintendo 3DS, Xbox 360, Wii, PS Vita, Android, iOS",
    "image": "https://media.rawg.io/media/games/89a/89a700d3c6a76bd0610ca89ccd20da54.jpg",
    "released": "2012-09-28",
    "rating": 3.51,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Family"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 3368,
    "name": "Titan Souls",
    "platforms": "PlayStation 4, PS Vita, PC, macOS",
    "image": "https://media.rawg.io/media/screenshots/2fc/2fc6994425146f9dba3133400b414e29.jpg",
    "released": "2015-04-13",
    "rating": 3.36,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 45821,
    "name": "Frostpunk",
    "platforms": "Xbox One, Nintendo Switch, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/a88/a886c37bf112d009e318b106db9d420a.jpg",
    "released": "2018-04-24",
    "rating": 4.18,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 5578,
    "name": "Race Driver: Grid",
    "platforms": "Xbox 360, Nintendo DS, PC, PlayStation 3, Xbox One",
    "image": "https://media.rawg.io/media/games/fc0/fc076b974197660a582abd34ebccc27f.jpg",
    "released": "2008-06-03",
    "rating": 3.64,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        }
    ]
},
{
    "id": 17803,
    "name": "Ryse: Son of Rome",
    "platforms": "Xbox One, PC",
    "image": "https://media.rawg.io/media/games/736/736c0eaec96d848d7824b33298a182f2.jpg",
    "released": "2013-11-22",
    "rating": 3.57,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 14016,
    "name": "Tropico 4",
    "platforms": "PC, Xbox 360, Xbox One, macOS",
    "image": "https://media.rawg.io/media/games/d1e/d1e70ce3762efcfc170c6bd067d7e9e3.jpg",
    "released": "2011-08-24",
    "rating": 3.49,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 250,
    "name": "The Binding of Isaac: Rebirth",
    "platforms": "Xbox One, macOS, Linux, Nintendo Switch, Nintendo 3DS, Wii U, PlayStation 4, PS Vita, iOS, PC",
    "image": "https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg",
    "released": "2014-11-03",
    "rating": 4.33,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 9793,
    "name": "Guns of Icarus Online",
    "platforms": "Linux, PC, macOS",
    "image": "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg",
    "released": "2012-09-30",
    "rating": 2.61,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3346,
    "name": "Wolfenstein: The Old Blood",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg",
    "released": "2015-05-04",
    "rating": 4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 10449,
    "name": "Darksiders II Deathinitive Edition",
    "platforms": "PlayStation 4, Xbox One, Nintendo Switch, PC",
    "image": "https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg",
    "released": "2015-11-05",
    "rating": 3.79,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 817974,
    "name": "Wallpaper Engine",
    "platforms": "Android, PC",
    "image": "https://media.rawg.io/media/screenshots/5a7/5a72aed79451d8fbd6a7b82f784002bd.jpg",
    "released": "2016-10-10",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Casual"
        }
    ]
},
{
    "id": 16359,
    "name": "Divinity: Original Sin - Enhanced Edition",
    "platforms": "PC, Linux, macOS, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg",
    "released": "2015-10-27",
    "rating": 4.27,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 13628,
    "name": "Dear Esther: Landmark Edition",
    "platforms": "PlayStation 4, Xbox One, PC, macOS",
    "image": "https://media.rawg.io/media/screenshots/b20/b20a20205954f9765e82298dbd41e48a.jpg",
    "released": "2017-02-14",
    "rating": 3.34,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 17380,
    "name": "Sid Meier's Civilization III Complete",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/054/0549f1a0a5e782d4e81cdf8d022073fa.jpg",
    "released": "2001-10-29",
    "rating": 3.68,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 2518,
    "name": "Max Payne",
    "platforms": "PlayStation 3, PC, Xbox, Classic Macintosh, PlayStation 2, Xbox 360, PlayStation 4, PS Vita",
    "image": "https://media.rawg.io/media/games/2f5/2f5eb72fe45540e93ac2726877551a20.jpg",
    "released": "2001-07-23",
    "rating": 4.46,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 15274,
    "name": "Jotun: Valhalla Edition",
    "platforms": "PlayStation 4, Nintendo Switch, PC, Xbox One, Linux, macOS",
    "image": "https://media.rawg.io/media/games/032/0329db96e252aa41e672da2ba16f914c.jpg",
    "released": "2015-09-29",
    "rating": 3.07,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 5161,
    "name": "Braid",
    "platforms": "PlayStation 3, Xbox One, iOS, PC, macOS, Linux, Xbox 360",
    "image": "https://media.rawg.io/media/games/a5a/a5abaa1b5cc1567b026fa3aa9fbd828e.jpg",
    "released": "2008-08-06",
    "rating": 4.17,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 15858,
    "name": "Star Wars: Knights of the Old Republic II – The Sith Lords",
    "platforms": "Xbox, Xbox 360, Linux, macOS, PC, Nintendo Switch, Android",
    "image": "https://media.rawg.io/media/games/046/0464f4a36cd975a37c95b93b06058855.jpg",
    "released": "2004-12-06",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 9653,
    "name": "Hacknet",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg",
    "released": "2015-08-11",
    "rating": 3.18,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 46956,
    "name": "Doki Doki Literature Club!",
    "platforms": "Linux, PC, macOS",
    "image": "https://media.rawg.io/media/games/972/972aea3c9eb253e893947bec2d2cfbb9.jpg",
    "released": "2017-09-22",
    "rating": 4.05,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3427,
    "name": "Murdered: Soul Suspect",
    "platforms": "Xbox One, PC, PlayStation 4, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/54a/54a3e4c617217848dc43c4de9989fe37.jpg",
    "released": "2014-06-03",
    "rating": 3.47,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3554,
    "name": "The Evil Within",
    "platforms": "PlayStation 3, PlayStation 4, Xbox 360, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/157/1570121f5c4d240504f1eae5c3854733.jpg",
    "released": "2014-10-12",
    "rating": 3.96,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 50781,
    "name": "Sea of Thieves",
    "platforms": "Xbox Series S/X, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/539/53911178036df07d518dd492ddc25289.jpg",
    "released": "2018-03-20",
    "rating": 3.69,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 12320,
    "name": "Prison Architect",
    "platforms": "Xbox One, PC, macOS, Linux, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/6bc/6bc79f5bc023b1e6938f6eaf9926f073.jpg",
    "released": "2015-10-05",
    "rating": 3.73,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 14062,
    "name": "Red Orchestra 2: Heroes of Stalingrad with Rising Storm",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/bff/bff077fb7c3b037bd5ed920bf447c863.jpg",
    "released": "2011-09-13",
    "rating": 3.24,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 4179,
    "name": "Darksiders II",
    "platforms": "PC, Wii U, PlayStation 3, Nintendo Switch, Xbox 360",
    "image": "https://media.rawg.io/media/games/848/8482235332f4518da363c3cb4e5cd075.jpg",
    "released": "2012-08-14",
    "rating": 3.75,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 274480,
    "name": "Mortal Kombat 11",
    "platforms": "Nintendo Switch, Xbox One, PC, PlayStation 4, Xbox Series S/X, PlayStation 5",
    "image": "https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg",
    "released": "2019-04-22",
    "rating": 3.98,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 5687,
    "name": "The Playroom",
    "platforms": "PlayStation 4",
    "image": "https://media.rawg.io/media/games/363/36306deef81e7955a5d0f5c3b43fccee.jpg",
    "released": "2013-11-15",
    "rating": 2.28,
    "created": false,
    "genres": [
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 3912,
    "name": "Sanctum 2",
    "platforms": "macOS, Linux, PlayStation 3, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/963/963815b2a1a88475a31f311b591e70fb.jpg",
    "released": "2013-05-15",
    "rating": 2.95,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2166,
    "name": "Game of Thrones - A Telltale Games Series",
    "platforms": "Xbox 360, PlayStation 3, Xbox One, PlayStation 4, Android, PC, macOS, iOS",
    "image": "https://media.rawg.io/media/games/c81/c812e158129e00c9b0f096ae8a0bb7d6.jpg",
    "released": "2014-12-02",
    "rating": 3.21,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 10001,
    "name": "Serious Sam Fusion 2017 (beta)",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/21b/21babfc41e2a6972290833d1b860f13e.jpg",
    "released": "2017-03-20",
    "rating": 3.08,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2047,
    "name": "Lords of the Fallen",
    "platforms": "Xbox One, iOS, PC, PlayStation 4, Android",
    "image": "https://media.rawg.io/media/games/d09/d096ad37b7f522e11c02848252213a9a.jpg",
    "released": "2014-10-28",
    "rating": 2.93,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 4729,
    "name": "Assassin's Creed",
    "platforms": "Xbox 360, PC, Xbox One, PlayStation 3",
    "image": "https://media.rawg.io/media/games/0bc/0bcc108295a244b488d5c25f7d867220.jpg",
    "released": "2007-11-13",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3449,
    "name": "Resident Evil",
    "platforms": "Xbox One, PlayStation 3, PlayStation 4, PC, Xbox 360, GameCube, PlayStation, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/510/51039d0ec5dc8c3e08ae4374dfceecec.jpg",
    "released": "1996-03-22",
    "rating": 4.19,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 11974,
    "name": "Mark of the Ninja",
    "platforms": "Nintendo Switch, PC, Linux, macOS, Xbox 360",
    "image": "https://media.rawg.io/media/games/b17/b17485d757ca36b5f1ad376b6b096885.jpg",
    "released": "2012-09-07",
    "rating": 3.99,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 51610,
    "name": "Dark Souls: Remastered",
    "platforms": "Nintendo Switch, PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/29c/29c6c21cc0c78cff6f45d23631cc82f4.jpg",
    "released": "2018-05-23",
    "rating": 4.47,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 894,
    "name": "Destiny",
    "platforms": "PlayStation 3, PlayStation 4, Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/062/062420d85c7143f72ad3557f32c41ead.jpg",
    "released": "2014-09-09",
    "rating": 3.68,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 14690,
    "name": "Trine Enchanted Edition",
    "platforms": "Nintendo Switch, PlayStation 4, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg",
    "released": "2009-07-02",
    "rating": 3.83,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 670682,
    "name": "Counter-Strike: Condition Zero Deleted Scenes",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/screenshots/9fd/9fd128fef547eb630182a1995b1edeb5.jpg",
    "released": "2004-03-23",
    "rating": 2.92,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 19375,
    "name": "Far Cry 3: Blood Dragon",
    "platforms": "PlayStation 3, PC, Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/5e4/5e4bff02098b2b6f824c68286d5da1a6.jpg",
    "released": "2013-04-30",
    "rating": 4,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 10090,
    "name": "Beholder",
    "platforms": "Nintendo Switch, iOS, Xbox One, PC, macOS, Linux, PlayStation 4, Android",
    "image": "https://media.rawg.io/media/games/40a/40ab95c1639aa1d7ec04d4cd523af6b1.jpg",
    "released": "2016-11-08",
    "rating": 3.8,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 678,
    "name": "Neverwinter",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/26b/26b27e1da9e3727fcb12e3e4e86c8c19.jpg",
    "released": "2013-06-20",
    "rating": 2.94,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 12569,
    "name": "Starbound",
    "platforms": "Linux, PC, macOS",
    "image": "https://media.rawg.io/media/games/6d9/6d92d50affeebf2eb3894d178eb1117e.jpg",
    "released": "2016-07-22",
    "rating": 3.84,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 58813,
    "name": "Resident Evil 2",
    "platforms": "PlayStation 4, PC, PlayStation 5, Nintendo Switch, Xbox One",
    "image": "https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg",
    "released": "2019-01-25",
    "rating": 4.49,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 53341,
    "name": "Jet Set Radio",
    "platforms": "iOS, Xbox 360, Android, Game Boy Advance, Dreamcast, PlayStation 3, PS Vita, PC",
    "image": "https://media.rawg.io/media/games/fd7/fd794a9f0ffe816038d981b3acc3eec9.jpg",
    "released": "2000-06-29",
    "rating": 3.42,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 3697,
    "name": "Serious Sam 3: BFE",
    "platforms": "PlayStation 3, Xbox 360, Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/12e/12ea6b35b65df38258e25885a0a392a6.jpg",
    "released": "2011-11-22",
    "rating": 3.46,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 10092,
    "name": "Minion Masters",
    "platforms": "Xbox One, PC",
    "image": "https://media.rawg.io/media/games/e4a/e4ab7f784bdc38c76ce6e4cef9715d18.jpg",
    "released": "2019-05-24",
    "rating": 2.31,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19299,
    "name": "Fallout 2",
    "platforms": "macOS, PC",
    "image": "https://media.rawg.io/media/games/218/218167ff4011acc825c844d0070940a0.jpg",
    "released": "1998-09-30",
    "rating": 4.36,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 14317,
    "name": "Endless Space - Collection",
    "platforms": "PC, macOS",
    "image": "https://media.rawg.io/media/screenshots/bf7/bf71c819eace914e6c42ae3ecb667308.jpg",
    "released": "2012-07-04",
    "rating": 3.11,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 3647,
    "name": "Child of Light",
    "platforms": "PlayStation 3, PlayStation 4, PS Vita, Wii U, Xbox 360, Xbox One, PC, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/c47/c4796c4c49e7e06ad328e07aa8944cdd.jpg",
    "released": "2014-04-29",
    "rating": 3.86,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2574,
    "name": "Enter the Gungeon",
    "platforms": "Nintendo Switch, Linux, macOS, PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/3be/3be0e624424d3453005019799a760af2.jpg",
    "released": "2016-04-04",
    "rating": 4.08,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 259801,
    "name": "Final Fantasy VII",
    "platforms": "PC, PlayStation 5, PlayStation 4",
    "image": "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg",
    "released": "2020-04-10",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 19452,
    "name": "F.E.A.R.",
    "platforms": "PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/89a/89a8378d49732505cdb28babe505df9e.jpg",
    "released": "2005-10-18",
    "rating": 4.27,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 829,
    "name": "Killing Floor 2",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/192/1921ec949024a5fbd1e1c7008f54b5af.jpg",
    "released": "2016-11-18",
    "rating": 3.51,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 17174,
    "name": "Resident Evil Revelations 2 / Biohazard Revelations 2",
    "platforms": "Nintendo Switch, Xbox One, Xbox 360, PlayStation 3, PlayStation 4, PS Vita, PC",
    "image": "https://media.rawg.io/media/games/ea3/ea3228b5c6c749019a9ed42e90a4e7c6.jpg",
    "released": "2015-02-24",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3300,
    "name": "The Elder Scrolls Online: Tamriel Unlimited",
    "platforms": "macOS, PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/596/596a48ef3b62b63b4cc59633e28be903.jpg",
    "released": "2015-03-17",
    "rating": 3.47,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 12019,
    "name": "BattleBlock Theater",
    "platforms": "Xbox 360, Xbox One, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg",
    "released": "2013-04-03",
    "rating": 3.84,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 3350,
    "name": "Broken Age",
    "platforms": "Android, PS Vita, Nintendo Switch, Linux, macOS, PC, iOS, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/3ef/3eff92562640e452d3487c04ba6d7fae.jpg",
    "released": "2014-01-28",
    "rating": 3.66,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Family"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 47137,
    "name": "Fortnite Battle Royale",
    "platforms": "macOS, PlayStation 4, Xbox One, iOS, PC, Android, Xbox Series S/X, PlayStation 5, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg",
    "released": "2017-09-26",
    "rating": 3.2,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4000,
    "name": "Remember Me",
    "platforms": "PlayStation 3, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/569/569ea25d2b56bd05c7fa309ddabe81ff.jpg",
    "released": "2013-06-04",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 295021,
    "name": "Orwell: Keeping an Eye On You",
    "platforms": "Android, iOS, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg",
    "released": "2016-10-27",
    "rating": 3.26,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 3729,
    "name": "LEGO The Hobbit",
    "platforms": "PlayStation 3, Nintendo 3DS, Xbox 360, Xbox One, Wii U, PlayStation 4, PS Vita, macOS, PC",
    "image": "https://media.rawg.io/media/games/e4f/e4fb3fd188f61fabec48dca22e6ef28a.jpg",
    "released": "2014-04-08",
    "rating": 3.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Family"
        }
    ]
},
{
    "id": 7381,
    "name": "ABZU",
    "platforms": "PlayStation 4, Nintendo Switch, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg",
    "released": "2016-08-02",
    "rating": 3.92,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3052,
    "name": "STAR WARS Battlefront",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/bd2/bd2cc7714e0b9b1adad1ba1b2400d436.jpg",
    "released": "2015-11-17",
    "rating": 3.29,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 19451,
    "name": "Fallout 3: Game of the Year Edition",
    "platforms": "Xbox 360, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/games/e53/e5372e767149bc88106e1da0ae7e9104.jpg",
    "released": "2009-10-13",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 10064,
    "name": "Assassin’s Creed Brotherhood",
    "platforms": "PlayStation 3, Xbox 360, Xbox One, PlayStation 4, PC, macOS",
    "image": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg",
    "released": "2010-11-16",
    "rating": 4.26,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 295,
    "name": "Oxenfree",
    "platforms": "Nintendo Switch, Xbox One, PlayStation 4, iOS, PC, Linux, Android, macOS",
    "image": "https://media.rawg.io/media/games/7ba/7baf4663962bad7197e2470d59a6e322.jpg",
    "released": "2016-01-14",
    "rating": 3.91,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2100,
    "name": "Tales from the Borderlands",
    "platforms": "PlayStation 4, Xbox 360, PlayStation 3, macOS, PC, iOS, Xbox One",
    "image": "https://media.rawg.io/media/games/264/2642b17a7885f7abc4fd018e98943242.jpg",
    "released": "2015-10-21",
    "rating": 4.19,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 19600,
    "name": "Far Cry 2",
    "platforms": "PC, PlayStation 3, Xbox One, Xbox 360",
    "image": "https://media.rawg.io/media/games/cdc/cdc5d82aff9b69d9dbd1fb0e3abc4c52.jpg",
    "released": "2008-10-21",
    "rating": 3.45,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 23587,
    "name": "Sonic Mania",
    "platforms": "PlayStation 4, Xbox One, PC, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg",
    "released": "2017-08-15",
    "rating": 3.86,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 17037,
    "name": "Monaco: What's Yours Is Mine",
    "platforms": "PC, Xbox 360, macOS, Linux",
    "image": "https://media.rawg.io/media/screenshots/4f4/4f4722571e32954af43a4508607c1748.jpg",
    "released": "2013-04-24",
    "rating": 3,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 6879,
    "name": "The Flame in the Flood",
    "platforms": "macOS, Xbox One, Nintendo Switch, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/87a/87a29bcc56b6b6082ead1dd5e2510aaa.jpg",
    "released": "2016-02-23",
    "rating": 2.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4397,
    "name": "Battlefield 3",
    "platforms": "PlayStation 3, Xbox One, PC, Xbox 360",
    "image": "https://media.rawg.io/media/games/8bd/8bda6d876f3e241c6024022299553efd.jpg",
    "released": "2011-10-25",
    "rating": 4.06,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4882,
    "name": "Lara Croft and the Guardian of Light",
    "platforms": "PC, PlayStation 3, Xbox 360, Android, iOS",
    "image": "https://media.rawg.io/media/games/a92/a92272ea5cfc35b8ad6317fbd81ce0f6.jpg",
    "released": "2010-08-05",
    "rating": 3.42,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 42215,
    "name": "Dying Light",
    "platforms": "Xbox One, PlayStation 4, Nintendo Switch, PC",
    "image": "https://media.rawg.io/media/games/4a5/4a5ce21f529cf8fd4670b4c3188b25df.jpg",
    "released": "2015-01-27",
    "rating": 4.09,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3635,
    "name": "Rogue Legacy",
    "platforms": "PlayStation 4, Xbox 360, PC, iOS, PlayStation 3, PS Vita, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/598/59851e152a6898c8bf79069b5bf2f4db.jpg",
    "released": "2013-06-27",
    "rating": 3.87,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 5565,
    "name": "F.E.A.R. 3",
    "platforms": "PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/1da/1da9a7af524e81d257f972fbc06baefd.jpg",
    "released": "2011-03-25",
    "rating": 3.36,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 3290,
    "name": "PlanetSide 2",
    "platforms": "PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/2fd/2fd1b58116b10cc1f4442bee5593ca7c.jpg",
    "released": "2012-11-20",
    "rating": 2.99,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 892,
    "name": "Dust: An Elysian Tail",
    "platforms": "Xbox 360, iOS, PC, macOS, Linux, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/c40/c40f9f0a3d1b4601a7a44d230c95f126.jpg",
    "released": "2012-08-15",
    "rating": 3.63,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 5564,
    "name": "F.E.A.R. 2: Project Origin",
    "platforms": "PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/d1d/d1dd46e2ef7f8a1ee946d3ab779c3754.jpg",
    "released": "2009-02-10",
    "rating": 3.85,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 16199,
    "name": "Killer is Dead - Nightmare Edition",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/a72/a72e405a19f93dc68cbc06d7a39b2a4a.jpg",
    "released": "2014-05-23",
    "rating": 3.21,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 4032,
    "name": "Dragon's Dogma: Dark Arisen",
    "platforms": "Xbox One, PC, Nintendo Switch, Xbox 360, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg",
    "released": "2013-04-23",
    "rating": 3.93,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 28110,
    "name": "Vampyr",
    "platforms": "PlayStation 4, PC, Xbox One, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/23b/23b42b7a896140f4ce1d0df8c42fa012.jpg",
    "released": "2018-06-04",
    "rating": 3.47,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 13820,
    "name": "The Elder Scrolls III: Morrowind",
    "platforms": "Xbox 360, Xbox, PC",
    "image": "https://media.rawg.io/media/games/ccf/ccf26f6e3d553a04f0033a8107a521b8.jpg",
    "released": "2002-05-01",
    "rating": 4.38,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 442855,
    "name": "Mafia II: Definitive Edition",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/d73/d7364906c530ccc2d89b0b5d8695e03c.jpg",
    "released": "2020-05-19",
    "rating": 3.86,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 10040,
    "name": "Stellaris",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/92b/92bbf8a451e2742ab812a580546e593a.jpg",
    "released": "2016-05-08",
    "rating": 4.12,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 49,
    "name": "Persona 5",
    "platforms": "PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/3ea/3ea0e57ede873970c0f1130e30d88749.jpg",
    "released": "2016-09-15",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 2300,
    "name": "Drawful 2",
    "platforms": "Xbox One, Nintendo Switch, macOS, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/eeb/eeb9e668da5fd07bab9f655acfbbe579.jpg",
    "released": "2016-06-20",
    "rating": 3.26,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 719,
    "name": "Deponia",
    "platforms": "Nintendo Switch, iOS, PC, macOS, PlayStation 4, Xbox One, Linux",
    "image": "https://media.rawg.io/media/games/c2e/c2e6ad5c838d551aeff376f1f3d9d65e.jpg",
    "released": "2012-01-27",
    "rating": 3.83,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 17885,
    "name": "Overlord",
    "platforms": "macOS, Linux, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/d1c/d1cd8a226cb224357c1f59605577cbf2.jpg",
    "released": "2007-06-26",
    "rating": 3.8,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 397477,
    "name": "Resident Evil 3",
    "platforms": "PlayStation 4, PC, Nintendo Switch, Xbox One",
    "image": "https://media.rawg.io/media/games/a4b/a4bb55f42fe837ae7bf1307e7b41cc85.jpg",
    "released": "2020-04-02",
    "rating": 4.02,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 28121,
    "name": "Slay the Spire",
    "platforms": "Xbox One, iOS, PC, macOS, Linux, Nintendo Switch, PlayStation 4, Android",
    "image": "https://media.rawg.io/media/games/f52/f5206d55f918edf8ee07803101106fa6.jpg",
    "released": "2019-01-22",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Card"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 23557,
    "name": "Gwent: The Witcher Card Game",
    "platforms": "Xbox One, iOS, PC, PlayStation 4, Android",
    "image": "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg",
    "released": "2018-10-23",
    "rating": 3.58,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Board Games"
        },
        {
            "name": "Card"
        }
    ]
},
{
    "id": 3561,
    "name": "Spelunky",
    "platforms": "PlayStation 3, Xbox 360, PC, PlayStation 4, PS Vita",
    "image": "https://media.rawg.io/media/games/fad/fadc4be043ed07904012d47cd02671e4.jpg",
    "released": "2012-07-04",
    "rating": 3.68,
    "created": false,
    "genres": [
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 19647,
    "name": "Crysis 2 - Maximum Edition",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg",
    "released": "2011-03-22",
    "rating": 3.71,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 1758,
    "name": "Valiant Hearts: The Great War",
    "platforms": "Android, PlayStation 3, Xbox 360, Nintendo Switch, PC, iOS, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/39a/39a8aa7798b685f9625e857bc394259d.jpg",
    "released": "2014-06-24",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 452638,
    "name": "Stray",
    "platforms": "PlayStation 5, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg",
    "released": "2022-07-19",
    "rating": 4.16,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 19491,
    "name": "Burnout Paradise: The Ultimate Box",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/7cf/7cf38d2d80267c121c6d0d361e9429ce.jpg",
    "released": "2009-02-05",
    "rating": 3.96,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 4347,
    "name": "DiRT Showdown",
    "platforms": "Xbox 360, PC, PlayStation 3",
    "image": "https://media.rawg.io/media/games/23d/23d78acedbb5f40c9fb64e73af5af65d.jpg",
    "released": "2012-05-24",
    "rating": 3.3,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 12929,
    "name": "The Talos Principle",
    "platforms": "Xbox One, PlayStation 4, iOS, PC, macOS, Linux, Nintendo Switch, Android",
    "image": "https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg",
    "released": "2014-12-11",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 4491,
    "name": "Shadow of the Colossus (2011)",
    "platforms": "PlayStation 3",
    "image": "https://media.rawg.io/media/games/6ac/6ac602e70c837ababdf025e997391d9c.jpg",
    "released": "2011-09-22",
    "rating": 4.25,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 58494,
    "name": "Battlefield V",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/45b/45b57ed59de4b84effd8f6bc4b7bf515.jpg",
    "released": "2018-11-20",
    "rating": 3.5,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 41490,
    "name": "Divinity: Original Sin",
    "platforms": "PlayStation 4, macOS, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/963/9639183ff27251b0b686acaa6aac0297.jpg",
    "released": "2014-06-30",
    "rating": 4.17,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 5342,
    "name": "Medal of Honor",
    "platforms": "PlayStation 3, PC, Xbox 360",
    "image": "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg",
    "released": "2010-10-12",
    "rating": 3.26,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 10428,
    "name": "Heroes & Generals",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg",
    "released": "2016-10-18",
    "rating": 2.8,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Massively Multiplayer"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 13886,
    "name": "Star Wars: Battlefront II (2005)",
    "platforms": "Xbox, PSP, PlayStation 2, PC",
    "image": "https://media.rawg.io/media/games/662/6625a20ca1d13699ee7c191b20a02408.jpg",
    "released": "2005-10-30",
    "rating": 4.21,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 1789,
    "name": "The Swapper",
    "platforms": "Wii U, Xbox One, macOS, PS Vita, PC, Linux, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/6fc/6fcb1c529c764700d55f3bbc1b0fbb5b.jpg",
    "released": "2013-05-13",
    "rating": 3.51,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 34,
    "name": "Crash Bandicoot N. Sane Trilogy",
    "platforms": "PC, Nintendo Switch, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/444/4440f674e2bcb257e249a9ab595d8ab6.jpg",
    "released": "2017-06-30",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 3965,
    "name": "Binary Domain",
    "platforms": "PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/bcd/bcd9896b7c3b9fa80e5dcb67c961e2be.jpg",
    "released": "2012-02-16",
    "rating": 3.55,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4869,
    "name": "Tomb Raider: Underworld",
    "platforms": "Xbox 360, Wii, macOS, Nintendo DS, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/games/341/3413d7275fb1e919f00a925df8288b77.jpg",
    "released": "2008-11-18",
    "rating": 3.68,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 884,
    "name": "Call of Duty: Modern Warfare Remastered",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/509/509c81a5da92a8d0645d9e160d155017.jpg",
    "released": "2016-10-05",
    "rating": 3.96,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 15829,
    "name": "Pillars of Eternity",
    "platforms": "PlayStation 4, Xbox One, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/789/7896837ec22a83e4007018ddd55e8c9a.jpg",
    "released": "2015-03-26",
    "rating": 3.96,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 15566,
    "name": "Red Faction: Guerrilla",
    "platforms": "Xbox 360, PC, PlayStation 3",
    "image": "https://media.rawg.io/media/games/94a/94a59c5136a9b90eef5f23fea7bf997c.jpg",
    "released": "2009-06-02",
    "rating": 3.66,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 59313,
    "name": "Gris",
    "platforms": "macOS, PC, iOS, Android, PlayStation 4, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/51c/51c430f1795c79b78f863a9f22dc422d.jpg",
    "released": "2018-12-13",
    "rating": 4.21,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 4439,
    "name": "Mass Effect 3",
    "platforms": "PlayStation 3, Xbox One, PC, Wii U, Xbox 360",
    "image": "https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg",
    "released": "2012-03-05",
    "rating": 4.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 704634,
    "name": "Uncharted: Legacy of Thieves Collection",
    "platforms": "PC, PlayStation 5",
    "image": "https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg",
    "released": "2022-01-28",
    "rating": 4.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 398423,
    "name": "Gothic Playable Teaser",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/64e/64e4fc48c5d977188e8c47287f2a2cef.jpg",
    "released": "2019-12-14",
    "rating": 2.6,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 4358,
    "name": "Assassin's Creed Revelations",
    "platforms": "Xbox 360, PlayStation 4, Xbox One, PC, PlayStation 3",
    "image": "https://media.rawg.io/media/games/193/19390fa5e75e9048b22c9a736cf9992f.jpg",
    "released": "2011-11-15",
    "rating": 3.98,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 1259,
    "name": "Machinarium",
    "platforms": "PlayStation 3, PlayStation 4, PS Vita, Xbox One, iOS, PC, Android, Linux, Nintendo Switch, macOS",
    "image": "https://media.rawg.io/media/games/8cd/8cd179c85bd3de8f79bef245b15075fb.jpg",
    "released": "2009-10-16",
    "rating": 4.17,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Family"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 382,
    "name": "Sniper Elite 4",
    "platforms": "PC, PlayStation 4, Nintendo Switch, Xbox One",
    "image": "https://media.rawg.io/media/games/2fe/2feec1ba840f467a2280061b9e665c6e.jpg",
    "released": "2017-02-13",
    "rating": 3.58,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 9551,
    "name": "Deep Rock Galactic",
    "platforms": "PC, PlayStation 4, PlayStation 5",
    "image": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg",
    "released": "2020-05-13",
    "rating": 4.07,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 29153,
    "name": "Max Payne 2: The Fall of Max Payne",
    "platforms": "PC, Xbox, PlayStation 2",
    "image": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
    "released": "2003-10-14",
    "rating": 4.43,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 5636,
    "name": "Rage",
    "platforms": "PlayStation 3, PC, Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/8a7/8a75028028592f9323d1e6e86668bb91.jpg",
    "released": "2011-10-03",
    "rating": 3.42,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 326252,
    "name": "Gears 5",
    "platforms": "Xbox Series S/X, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg",
    "released": "2019-09-10",
    "rating": 3.93,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4581,
    "name": "Crysis",
    "platforms": "PlayStation 3, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/90f/90fd5e569bc4c4a666c588a732124908.jpg",
    "released": "2007-11-12",
    "rating": 4.01,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 9575,
    "name": "VRChat",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg",
    "released": "2017-02-01",
    "rating": 3.17,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 11279,
    "name": "Day of Defeat: Source",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg",
    "released": "2005-09-26",
    "rating": 3.21,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 44525,
    "name": "Yakuza Kiwami",
    "platforms": "PC, PlayStation 4, Xbox One, PlayStation 3",
    "image": "https://media.rawg.io/media/games/fbb/fbbd9fe21317bde9134114e2b1306069.jpg",
    "released": "2016-01-21",
    "rating": 4.08,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 9631,
    "name": "Sins of a Solar Empire: Rebellion",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/65c/65c9c15e274705b5fe343e424ce76ec8.jpg",
    "released": "2012-06-12",
    "rating": 2.73,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 5528,
    "name": "Call of Duty: World at War",
    "platforms": "Xbox 360, PlayStation 3, Nintendo DS, PC, Xbox One, Wii",
    "image": "https://media.rawg.io/media/games/da1/da15524e850ee9791b32973b748e08d5.jpg",
    "released": "2008-11-11",
    "rating": 3.95,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 45970,
    "name": "The LEGO NINJAGO Movie Video Game",
    "platforms": "PlayStation 4, Nintendo Switch, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/f60/f607e3212c540e3d25c2418c2edb6306.jpg",
    "released": "2017-09-22",
    "rating": 2.95,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 622492,
    "name": "Forza Horizon 5",
    "platforms": "iOS, PC, Xbox One, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg",
    "released": "2021-11-08",
    "rating": 4.32,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Racing"
        }
    ]
},
{
    "id": 1140,
    "name": "World of Goo",
    "platforms": "Android, iOS, PC, macOS, Linux, Nintendo Switch, Wii",
    "image": "https://media.rawg.io/media/games/d03/d030347839f74454afcd1008248b08ae.jpg",
    "released": "2008-10-13",
    "rating": 4.01,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Educational"
        },
        {
            "name": "Family"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 452649,
    "name": "Resident Evil: Village",
    "platforms": "PlayStation 5, Xbox Series S/X, PC, Nintendo Switch, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/6cc/6cc23249972a427f697a3d10eb57a820.jpg",
    "released": "2021-05-07",
    "rating": 4.38,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 442854,
    "name": "Mafia: Definitive Edition",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/345/3452d9d4483686c602372e0e6b3bb4cc.jpg",
    "released": "2020-09-25",
    "rating": 4.22,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3315,
    "name": "Magicka 2",
    "platforms": "Linux, macOS, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/516/516c6bfe36ddb498d860f68927448a75.jpg",
    "released": "2015-05-26",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 19592,
    "name": "Hitman 2: Silent Assassin",
    "platforms": "PlayStation 2, PC, PlayStation 3, Xbox 360, Xbox, GameCube",
    "image": "https://media.rawg.io/media/games/683/6833fbb183fd72a61c032501e3bc6d36.jpg",
    "released": "2002-09-30",
    "rating": 3.93,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 15642,
    "name": "The Elder Scrolls IV: Oblivion Game of the Year Edition",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/886/8868f9ea0c91d45316319ebf5dd4fc64.jpg",
    "released": "2009-06-16",
    "rating": 4.31,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 38,
    "name": "Injustice 2",
    "platforms": "Android, Xbox One, iOS, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/2c8/2c89e43515ed12aee51becc3dcfd8e7e.jpg",
    "released": "2017-05-09",
    "rating": 3.92,
    "created": false,
    "genres": [
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 455597,
    "name": "It Takes Two",
    "platforms": "PlayStation 5, Xbox Series S/X, PlayStation 4, PC, Nintendo Switch, Xbox One",
    "image": "https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg",
    "released": "2021-03-26",
    "rating": 4.53,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 10293,
    "name": "Tabletop Simulator",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/f86/f869253c68b38fa789f58cc5be2cb996.jpg",
    "released": "2015-06-05",
    "rating": 4.07,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 58752,
    "name": "The Awesome Adventures of Captain Spirit",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/efd/efd6b2cb621c41a2b6580d8ac260b8ba.jpg",
    "released": "2018-06-25",
    "rating": 3.62,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 19056,
    "name": "S.T.A.L.K.E.R.: Call of Pripyat",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/5ad/5adab016a307c2902a82b60d487fe287.jpg",
    "released": "2009-10-02",
    "rating": 4.28,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 58952,
    "name": "Life is Strange 2",
    "platforms": "PlayStation 4, Linux, macOS, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg",
    "released": "2018-09-27",
    "rating": 3.79,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 10767,
    "name": "Shadow Tactics: Blades of the Shogun",
    "platforms": "Xbox One, PlayStation 4, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/c35/c354856af9151dc63844be4f9843d2c2.jpg",
    "released": "2016-12-05",
    "rating": 4.08,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 58764,
    "name": "Outer Wilds",
    "platforms": "PlayStation 4, Nintendo Switch, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/9f4/9f418898f5415668ca47b5f4ab1ecfeb.jpg",
    "released": "2019-05-29",
    "rating": 4.35,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 15714,
    "name": "Deponia: The Complete Journey",
    "platforms": "Linux, PC, macOS, iOS",
    "image": "https://media.rawg.io/media/games/99d/99d7fadd2342f575d238a4e1f5c542b6.jpg",
    "released": "2014-06-03",
    "rating": 3.63,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 18003,
    "name": "Gone Home",
    "platforms": "Nintendo Switch, iOS, PlayStation 4, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/9e5/9e5b91a6d02e66b8d450a977a59ae123.jpg",
    "released": "2013-08-14",
    "rating": 3.73,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 28395,
    "name": "Metro: Last Light",
    "platforms": "PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/b1f/b1f1eeee149ef49c008a2258ee6c0d78.jpg",
    "released": "2013-05-13",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 14334,
    "name": "Satellite Reign",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/8df/8df64136042eb6e2ed4fa910a6ad96ac.jpg",
    "released": "2015-08-27",
    "rating": 2.64,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2805,
    "name": "Street Fighter V",
    "platforms": "PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/a32/a32c9c299488ca99afc3fcea605a7718.jpg",
    "released": "2016-02-15",
    "rating": 3.5,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 29215,
    "name": "Life is Strange: Before The Storm",
    "platforms": "PlayStation 4, Xbox One, iOS, macOS, Linux, Android, PC",
    "image": "https://media.rawg.io/media/games/214/2140885d34e3a3398b45036e5d870971.jpg",
    "released": "2017-08-31",
    "rating": 3.94,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 6773,
    "name": "Sunset Overdrive",
    "platforms": "PC, Xbox One",
    "image": "https://media.rawg.io/media/games/c2e/c2eb6021a2596644b437e943612af25c.jpg",
    "released": "2014-10-28",
    "rating": 3.89,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 15317,
    "name": "Shadow Warrior",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/screenshots/f7e/f7e70957c14ead1fa187a616dfa83e09.jpg",
    "released": "1997-05-13",
    "rating": 3.33,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4523,
    "name": "Red Faction: Armageddon",
    "platforms": "PlayStation 3, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/395/395ad028483d6cd9076b746a3eec993d.jpg",
    "released": "2011-06-07",
    "rating": 3.03,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 17127,
    "name": "Torchlight",
    "platforms": "Xbox 360, Xbox One, Linux, PC, macOS",
    "image": "https://media.rawg.io/media/games/b17/b175178f8842276b8b18b339fe3146a1.jpg",
    "released": "2009-10-26",
    "rating": 3.72,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 19057,
    "name": "S.T.A.L.K.E.R.: Clear Sky",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/68e/68e34eb2122fe9e23f634e0b5f5ea6ae.jpg",
    "released": "2008-08-22",
    "rating": 3.91,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 685577,
    "name": "Vampire Survivors",
    "platforms": "Android, PC, iOS, Xbox One, Web",
    "image": "https://media.rawg.io/media/games/501/501e7019925a3c692bf1c8062f07abe6.jpg",
    "released": "2022-10-20",
    "rating": 4.18,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19410,
    "name": "Day of Defeat",
    "platforms": "macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/ccc/ccc0d5396e3331d58e5eb58a6a1fa1b7.jpg",
    "released": "2003-05-01",
    "rating": 2.82,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 19429,
    "name": "Alien Swarm",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/a65/a65e9f01832997a4d913b3ea86319af4.jpg",
    "released": "2010-07-19",
    "rating": 3.31,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 42776,
    "name": "Never Alone",
    "platforms": "PlayStation 4, PlayStation 3, Wii U, Linux, macOS, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/23a/23acbd56da0c30bca0227967a5720c96.jpg",
    "released": "2014-11-18",
    "rating": 3.46,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 248521,
    "name": "Valheim",
    "platforms": "PC, Linux",
    "image": "https://media.rawg.io/media/games/adb/adb59be81367b19c2544457424bcf086.jpg",
    "released": "2021-02-02",
    "rating": 4.02,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 10615,
    "name": "System Shock 2",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/65f/65f661f1487395055ba05e0a95fc0330.jpg",
    "released": "1999-08-11",
    "rating": 4.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3265,
    "name": "God of War III Remastered",
    "platforms": "PlayStation 4",
    "image": "https://media.rawg.io/media/games/4b6/4b67558bf04c7211aabeff179271bdd8.jpg",
    "released": "2015-07-14",
    "rating": 4.1,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 4387,
    "name": "Awesomenauts",
    "platforms": "PlayStation 3, Xbox 360, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/4df/4df0b0812fd89af2285e683fb78f1323.jpg",
    "released": "2012-05-01",
    "rating": 3.04,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 1670,
    "name": "Shadowrun: Dragonfall - Director's Cut",
    "platforms": "Nintendo Switch, iOS, PC, macOS, Linux, Android",
    "image": "https://media.rawg.io/media/screenshots/7f8/7f8b58994fc420fefaa5fb9992335a11.jpg",
    "released": "2014-09-17",
    "rating": 3.82,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 14606,
    "name": "Ricochet",
    "platforms": "macOS, Linux, PC",
    "image": "https://media.rawg.io/media/screenshots/120/120d930368bc171c42f9caab94e33c65.jpg",
    "released": "2000-11-01",
    "rating": 2.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 16787,
    "name": "Bully: Scholarship Edition",
    "platforms": "PC, Wii, Xbox 360",
    "image": "https://media.rawg.io/media/games/e2b/e2b2bf36ff4af8f8495d2f4e08b1d392.jpg",
    "released": "2008-03-04",
    "rating": 4.12,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 4012,
    "name": "Resident Evil Revelations",
    "platforms": "Xbox One, Xbox 360, Nintendo 3DS, Wii U, PlayStation 3, Nintendo Switch, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/89a/89ac2742fcfeba3b95ac94457af766ef.jpg",
    "released": "2012-02-07",
    "rating": 3.77,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 17356,
    "name": "Orcs Must Die! 2",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/725/725eb4171c8aacee030a2d050ebf9fad.jpg",
    "released": "2012-07-30",
    "rating": 3.71,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 17252,
    "name": "Deadlight",
    "platforms": "PC, Xbox 360",
    "image": "https://media.rawg.io/media/games/595/59556e1839b2e79b6f11f2c68a197663.jpg",
    "released": "2012-06-01",
    "rating": 3.63,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 11970,
    "name": "Star Wars Jedi Knight: Jedi Academy",
    "platforms": "Xbox 360, Xbox One, PC, macOS, Nintendo Switch, PlayStation 4, Xbox",
    "image": "https://media.rawg.io/media/games/7e8/7e8890a662539b1bdefcf57409aef765.jpg",
    "released": "2003-09-16",
    "rating": 4.33,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 20405,
    "name": "Deathmatch Classic",
    "platforms": "macOS, Linux, PC",
    "image": "https://media.rawg.io/media/screenshots/b04/b042f8a7d3d9f8fe61d5af5d47ab6088.jpg",
    "released": "2001-06-01",
    "rating": 2.76,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 10310,
    "name": "Robocraft",
    "platforms": "macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/2b9/2b9a49e89c1ba892a648620194dcf327.jpg",
    "released": "2014-07-08",
    "rating": 2.59,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Massively Multiplayer"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19196,
    "name": "ARMA: Cold War Assault",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/109/10956e4561064fc4f1dda0baa540735e.jpg",
    "released": "2001-08-29",
    "rating": 2.86,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 9835,
    "name": "Outlast 2",
    "platforms": "Xbox One, PlayStation 4, PC, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/880/880f6aa65fe9d786f1a455963df76180.jpg",
    "released": "2017-04-24",
    "rating": 3.66,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4331,
    "name": "Sonic Generations",
    "platforms": "PC, Nintendo 3DS, Xbox 360, PlayStation 3, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/9a1/9a18c226cf379272c698f26d2b79b3da.jpg",
    "released": "2011-11-01",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Family"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 21926,
    "name": "Uncharted: The Lost Legacy",
    "platforms": "PlayStation 4, PlayStation 5",
    "image": "https://media.rawg.io/media/games/560/56056a71c74f751552c9baedebf8f317.jpg",
    "released": "2017-08-22",
    "rating": 4.27,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 326251,
    "name": "Deathloop",
    "platforms": "PlayStation 5, PC, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/018/01857c5ff9579c48fa8bd76b4d83a946.jpg",
    "released": "2021-09-14",
    "rating": 4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 437059,
    "name": "Assassin's Creed Valhalla",
    "platforms": "Xbox One, PlayStation 5, PC, PlayStation 4, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg",
    "released": "2020-11-10",
    "rating": 3.75,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 4676,
    "name": "Outland",
    "platforms": "PlayStation 3, Xbox 360, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/f80/f805774c679cca1a1a472d9ac39c78b7.jpg",
    "released": "2011-04-26",
    "rating": 2.89,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 4535,
    "name": "Call of Duty 4: Modern Warfare",
    "platforms": "Nintendo DS, PC, Xbox One, macOS, Wii, Xbox 360, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/9fb/9fbaea2168caea1f806546dfdaaeb1da.jpg",
    "released": "2007-11-05",
    "rating": 4.39,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 52939,
    "name": "Final Fantasy VII (1997)",
    "platforms": "PC, iOS, Android, Nintendo Switch, PlayStation, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/6c0/6c00ee85d1344f58c469e8e47fd8ae7c.jpg",
    "released": "1997-01-31",
    "rating": 4.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 2722,
    "name": "Kholat",
    "platforms": "Xbox One, Nintendo Switch, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/813/813f9dab418a3d549f8b9ad8ef2f3d9c.jpg",
    "released": "2015-06-08",
    "rating": 2.66,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4388,
    "name": "Battlefield: Bad Company 2",
    "platforms": "Xbox 360, PlayStation 3, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/e8f/e8f923180ecb9614ec564a15937cfd9e.jpg",
    "released": "2010-03-02",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4249,
    "name": "HELL YEAH! Wrath of the Dead Rabbit",
    "platforms": "PlayStation 3, Xbox 360, PC",
    "image": "https://media.rawg.io/media/screenshots/3f1/3f1c417b405a86ed7d92b903e0fcfd0c.jpg",
    "released": "2012-09-25",
    "rating": 2.43,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 5298,
    "name": "Tomb Raider: Legend",
    "platforms": "Xbox, PSP, PlayStation 3, PC, GameCube, PlayStation 2, Xbox 360",
    "image": "https://media.rawg.io/media/games/9d4/9d45e22df640fcb6f4b754aa3491ae09.jpg",
    "released": "2006-04-06",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 197,
    "name": "Trove",
    "platforms": "PlayStation 4, Xbox One, PC, macOS",
    "image": "https://media.rawg.io/media/screenshots/d68/d684c5ec81b8ea46bfd4b5c3bae4007f.jpg",
    "released": "2015-07-09",
    "rating": 2.66,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 616765,
    "name": "Marvel's Guardians of the Galaxy",
    "platforms": "Xbox One, Nintendo Switch, PC, PlayStation 4, Xbox Series S/X, PlayStation 5",
    "image": "https://media.rawg.io/media/games/708/7080e6c87e0825cb02888bf3c44b3889.jpg",
    "released": "2021-10-26",
    "rating": 4.33,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 29171,
    "name": "The Evil Within 2",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/d5f/d5fd2f970f48d0877a53aec98825faba.jpg",
    "released": "2017-10-11",
    "rating": 4.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 58133,
    "name": "Spyro Reignited Trilogy",
    "platforms": "Xbox One, PlayStation 4, PC, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/a50/a505bccdcfdc79970a93574c747f6e0d.jpg",
    "released": "2018-11-13",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 10031,
    "name": "Battlerite",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/54f/54fcf1a626faa92afa3f5d2834dbc5ce.jpg",
    "released": "2016-09-20",
    "rating": 3.24,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 137,
    "name": "Mass Effect: Andromeda",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/a9b/a9be26838e6d54d8fb008ffc70e0d59a.jpg",
    "released": "2017-03-21",
    "rating": 3.23,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 2559,
    "name": "Stories: The Path of Destinies",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/1aa/1aaf454e0d3809ba1c34df4514492237.jpg",
    "released": "2016-04-11",
    "rating": 3.21,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 4612,
    "name": "Renegade Ops",
    "platforms": "PlayStation 3, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/31b/31b1a1a45ad7103e52eed8ef658209a2.jpg",
    "released": "2011-09-13",
    "rating": 2.97,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 715,
    "name": "Steep",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/b22/b227810b1a1bcbe9cf3dda22534c686e.jpg",
    "released": "2016-12-02",
    "rating": 3.48,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Sports"
        }
    ]
},
{
    "id": 16191,
    "name": "Galactic Civilizations II: Ultimate Edition",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/3d8/3d8e76154123ef352d8d3216da061a2d.jpg",
    "released": "2011-12-02",
    "rating": 2.65,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 22859,
    "name": "Deus Ex 2: Invisible War",
    "platforms": "PC, Xbox",
    "image": "https://media.rawg.io/media/screenshots/ca0/ca06700d8184f451b99396c23b4ffbe4.jpg",
    "released": "2003-12-01",
    "rating": 3.07,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 2434,
    "name": "VVVVVV",
    "platforms": "PS Vita, PlayStation 4, Nintendo Switch, Nintendo 3DS, macOS, Linux, iOS, Android, PC",
    "image": "https://media.rawg.io/media/screenshots/6fe/6fe228662a253cd929cc78a103541ee0.jpg",
    "released": "2010-01-09",
    "rating": 3.76,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 204,
    "name": "Clicker Heroes",
    "platforms": "Xbox One, PlayStation 4, Android, PC, iOS, macOS",
    "image": "https://media.rawg.io/media/screenshots/054/054bf49d9e736edfda5aa8e9015faf9b.jpeg",
    "released": "2015-05-13",
    "rating": 2.67,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 13856,
    "name": "Katana ZERO",
    "platforms": "Xbox One, Nintendo Switch, macOS, PC",
    "image": "https://media.rawg.io/media/games/d37/d37e110ddcc0bd52d99f0f647b737a0a.jpg",
    "released": "2019-04-17",
    "rating": 4.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 327999,
    "name": "Dota Underlords",
    "platforms": "iOS, PC, macOS, Linux, Android",
    "image": "https://media.rawg.io/media/games/66e/66e90c9d7b9a17335b310ceb294e9365.jpg",
    "released": "2020-02-25",
    "rating": 3.03,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Board Games"
        },
        {
            "name": "Casual"
        }
    ]
},
{
    "id": 17599,
    "name": "Mortal Kombat Komplete Edition",
    "platforms": "PlayStation 3, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/297/297a51aa1f0999016d5a35e2e1d6d8ab.jpg",
    "released": "2013-07-03",
    "rating": 4.11,
    "created": false,
    "genres": [
        {
            "name": "Arcade"
        },
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 5297,
    "name": "Tomb Raider: Anniversary",
    "platforms": "macOS, PC, PSP, PlayStation 2, Xbox 360, Wii, iOS",
    "image": "https://media.rawg.io/media/games/791/791abcd56601482964f0fee6d8ab6a61.jpeg",
    "released": "2007-06-01",
    "rating": 3.95,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 13079,
    "name": "Everlasting Summer",
    "platforms": "Android, iOS, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/3b5/3b56220d6038b8b1ad66c4d05ef95215.jpg",
    "released": "2013-12-12",
    "rating": 3.98,
    "created": false,
    "genres": [
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 58827,
    "name": "Overcooked! 2",
    "platforms": "Xbox One, PlayStation 4, Nintendo Switch, Linux, PC, macOS",
    "image": "https://media.rawg.io/media/games/d11/d11470677a829e34562e95a4002c2c7f.jpg",
    "released": "2018-08-06",
    "rating": 4.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 22513,
    "name": "Uncharted 2: Among Thieves",
    "platforms": "PlayStation 4, PlayStation 3",
    "image": "https://media.rawg.io/media/games/74b/74b239f6ef0216a2f66e652d54abb2e6.jpg",
    "released": "2009-10-13",
    "rating": 4.39,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 16355,
    "name": "Evolve Stage 2",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/28a/28a895c2e05e508dca8fd73c51492d59.jpg",
    "released": "2015-02-10",
    "rating": 2.56,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 3450,
    "name": "Saints Row: Gat Out of Hell",
    "platforms": "Linux, PC, Xbox One, PlayStation 3, PlayStation 4, Xbox 360",
    "image": "https://media.rawg.io/media/games/1ad/1ad3737af2c4a4ff8e7f5540b5dcade8.jpg",
    "released": "2015-01-20",
    "rating": 3.15,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 20760,
    "name": "FINAL FANTASY XIII",
    "platforms": "Xbox One, Xbox 360, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/games/943/9432de383089b0a427a3cdf3687b2b73.jpg",
    "released": "2009-12-17",
    "rating": 3.45,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3562,
    "name": "Styx: Master of Shadows",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg",
    "released": "2014-10-06",
    "rating": 3.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 36,
    "name": "TEKKEN 7",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/62b/62b035add7205737540d66e082b85930.jpg",
    "released": "2015-03-18",
    "rating": 4.02,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 9545,
    "name": "Shadow Warrior 2",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/0b2/0b240149610b8b20eac098b8071f575a.jpg",
    "released": "2016-10-12",
    "rating": 3.51,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 2778,
    "name": "Surgeon Simulator",
    "platforms": "PlayStation 4, iOS, PC, macOS, Linux, Nintendo Switch, Android",
    "image": "https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg",
    "released": "2013-04-18",
    "rating": 3.43,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Educational"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19685,
    "name": "Just Cause",
    "platforms": "Xbox 360, PlayStation 2, Xbox, PC",
    "image": "https://media.rawg.io/media/games/e60/e601c02ec49ef4f1d5ef147994b3935f.jpg",
    "released": "2006-09-22",
    "rating": 3.33,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 2239,
    "name": "Furi",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg",
    "released": "2016-07-04",
    "rating": 3.91,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 4414,
    "name": "Grand Theft Auto: Episodes from Liberty City",
    "platforms": "PlayStation 3, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg",
    "released": "2009-10-29",
    "rating": 4.1,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 58651,
    "name": "Totally Accurate Battlegrounds",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/c88/c88463dcf1b3fc79c54a59c30076344a.jpg",
    "released": "2018-06-05",
    "rating": 2.81,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3251,
    "name": "F1 2015",
    "platforms": "Xbox One, PlayStation 4, PC, Linux",
    "image": "https://media.rawg.io/media/games/ff6/ff66ce127716df74175961831ad3a23a.jpg",
    "released": "2015-07-09",
    "rating": 2.69,
    "created": false,
    "genres": [
        {
            "name": "Sports"
        },
        {
            "name": "Racing"
        }
    ]
},
{
    "id": 3850,
    "name": "LEGO Marvel Super Heroes",
    "platforms": "PlayStation 3, Nintendo 3DS, Nintendo DS, Xbox One, iOS, PC, macOS, Wii U, Xbox 360, PlayStation 4, PS Vita, Android",
    "image": "https://media.rawg.io/media/games/a87/a8743bdee8627c55bb9f2f01b9136ac1.jpg",
    "released": "2013-10-22",
    "rating": 3.83,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Family"
        }
    ]
},
{
    "id": 1299,
    "name": "Mount & Blade: Warband",
    "platforms": "PlayStation 4, Linux, macOS, Android, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/ccd/ccd40e8f86c0ae10a082b610d31d4475.jpg",
    "released": "2010-03-30",
    "rating": 4.36,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 1225,
    "name": "Warhammer: End Times - Vermintide",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/1dc/1dc45435c09f844b24eb96cd66eb6325.jpg",
    "released": "2015-10-23",
    "rating": 3.48,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 123,
    "name": "Titan Quest",
    "platforms": "PC, Xbox One, Nintendo Switch, PlayStation 4, Android, iOS",
    "image": "https://media.rawg.io/media/games/910/910d547965a5c4928ca19112778a1b4f.jpg",
    "released": "2006-06-26",
    "rating": 3.89,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 17295,
    "name": "Enclave",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/de4/de4b7cb80b39d95943f2931093b46932.jpg",
    "released": "2002-07-18",
    "rating": 3.11,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 14990,
    "name": "Viking: Battle for Asgard",
    "platforms": "PlayStation 3, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/a1f/a1f93b9b287a0808161a35952635867e.jpg",
    "released": "2008-03-25",
    "rating": 2.48,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 4340,
    "name": "Uncharted: Drake's Fortune",
    "platforms": "PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/f2e/f2e6dcf9c27d99ba2551f1094ad41756.jpg",
    "released": "2007-11-19",
    "rating": 4.02,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3772,
    "name": "Strider",
    "platforms": "PC, Xbox One, PlayStation 3, PlayStation 4, Xbox 360",
    "image": "https://media.rawg.io/media/screenshots/12e/12ee2600684863837596c0dbb1923fca.jpg",
    "released": "2012-02-16",
    "rating": 3.32,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 22789,
    "name": "Serious Sam: The First Encounter",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/f0e/f0e050dc774d4ae3afced76b33516295.jpg",
    "released": "2001-03-21",
    "rating": 4.03,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3459,
    "name": "The Order: 1886",
    "platforms": "PlayStation 4",
    "image": "https://media.rawg.io/media/games/c5b/c5b3b6aa220050f7f504f4477cb51d3b.jpg",
    "released": "2015-01-13",
    "rating": 3.75,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 17925,
    "name": "Fable Anniversary",
    "platforms": "Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/071/0715f91a89d634d9183e2f23c0cb1a98.jpg",
    "released": "2014-02-04",
    "rating": 4.07,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3651,
    "name": "Sniper Elite 3",
    "platforms": "PlayStation 3, PlayStation 4, Xbox 360, Nintendo Switch, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/fe6/fe68940746007261e34da4d9cce81423.jpg",
    "released": "2014-06-26",
    "rating": 3.52,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 28261,
    "name": "Serious Sam HD:  The First Encounter",
    "platforms": "PC, Xbox 360",
    "image": "https://media.rawg.io/media/screenshots/d07/d07a7e2f7be2428c51ad26326c84e21d.jpg",
    "released": "2009-11-24",
    "rating": 3.93,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3748,
    "name": "SteamWorld Dig",
    "platforms": "Nintendo Switch, Nintendo 3DS, Xbox One, PC, macOS, Linux, Wii U, PlayStation 4, PS Vita",
    "image": "https://media.rawg.io/media/games/e07/e07737df8469bf32d132ba9eaffc3461.jpg",
    "released": "2013-08-08",
    "rating": 3.83,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 366850,
    "name": "Ghostrunner",
    "platforms": "PlayStation 5, Xbox Series S/X, Xbox One, PC, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/957/957154d665ae676b00c0859551c733b1.jpg",
    "released": "2020-10-27",
    "rating": 3.85,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 323065,
    "name": "Call of Duty: Modern Warfare (2019)",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/e43/e43f9f0a1429bd9332020ac5876bc693.jpg",
    "released": "2019-10-25",
    "rating": 3.74,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4744,
    "name": "Prince of Persia (2008)",
    "platforms": "PC, macOS, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/956/95640d5ea0288c187dbce849a4254a41.jpg",
    "released": "2008-12-02",
    "rating": 3.77,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3494,
    "name": "Thomas Was Alone",
    "platforms": "Android, PS Vita, PlayStation 4, PlayStation 3, Wii U, macOS, PC, iOS, Xbox One, Linux, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/6c8/6c8cb4780ce30b76b944cf656e8fff49.jpg",
    "released": "2012-06-30",
    "rating": 3.76,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Family"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 9853,
    "name": "H1Z1: King of the Kill",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/848/848253347dc93c762bfd51c7e4989b8f.jpg",
    "released": "2016-02-17",
    "rating": 2.36,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 2354,
    "name": "Mirror's Edge Catalyst",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/257/257c497aa4060f4a697ccbf5e99ec230.jpg",
    "released": "2016-06-07",
    "rating": 3.47,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 2913,
    "name": "The Banner Saga",
    "platforms": "PC, Xbox One, macOS, Linux, Nintendo Switch, PlayStation 4, Android, iOS",
    "image": "https://media.rawg.io/media/games/fa3/fa3dd043cba3a9cbfe3085e75d92bf7e.jpg",
    "released": "2014-01-14",
    "rating": 4.08,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 391399,
    "name": "Tell Me Why",
    "platforms": "Xbox One, PC",
    "image": "https://media.rawg.io/media/games/b28/b28a135fa6133e17b228f46902a4fda4.jpg",
    "released": "2020-08-27",
    "rating": 3.22,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 3268,
    "name": "The Vanishing of Ethan Carter",
    "platforms": "Xbox One, PC, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/90c/90caf1fcb836cad70013452f6f239008.jpg",
    "released": "2014-09-25",
    "rating": 3.76,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 401805,
    "name": "Genshin Impact",
    "platforms": "PlayStation 5, Android, PlayStation 4, Nintendo Switch, PC, iOS",
    "image": "https://media.rawg.io/media/games/c38/c38bdb5da139005777176d33c463d70f.jpg",
    "released": "2020-09-28",
    "rating": 3.55,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 13469,
    "name": "Warhammer 40,000: Dawn of War - Game of the Year Edition",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/0e6/0e60075818860647a1e6a9f9a8ebfada.jpg",
    "released": "2007-08-07",
    "rating": 3.95,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 2830,
    "name": "Unravel",
    "platforms": "PlayStation 4, Xbox 360, Nintendo Switch, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/cfe/cfe114c081281960bd79ace5209c0a4a.jpg",
    "released": "2016-02-09",
    "rating": 3.95,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 2213,
    "name": "Kerbal Space Program",
    "platforms": "Linux, macOS, PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/bda/bdab2603c0dc67268d0610449bc7df16.jpg",
    "released": "2015-04-26",
    "rating": 4.17,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 452634,
    "name": "Marvel's Spider-Man: Miles Morales",
    "platforms": "PC, PlayStation 4, PlayStation 5",
    "image": "https://media.rawg.io/media/games/048/048b46cdc66cbc7e235e1f359c2a77ec.jpg",
    "released": "2020-11-12",
    "rating": 4.32,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 10049,
    "name": "Hitman: Codename 47",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/3f6/3f6a397ec36acfcc18bb6ab3414c7658.jpg",
    "released": "2000-11-19",
    "rating": 3.82,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4923,
    "name": "Prototype",
    "platforms": "PlayStation 3, PlayStation 4, PC, Xbox One, Xbox 360",
    "image": "https://media.rawg.io/media/games/b74/b74b15a48ac7bc37fbb42ee4afcc0b91.jpg",
    "released": "2009-06-09",
    "rating": 3.78,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 2255,
    "name": "7 Days to Die",
    "platforms": "Xbox One, PlayStation 4, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/5cb/5cbbc5cd24677331c85253f961cad72a.jpg",
    "released": "2013-12-13",
    "rating": 3.36,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 9744,
    "name": "RiME",
    "platforms": "Xbox One, Nintendo Switch, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/5aa/5aa4c12a53bc5f606bf8d92461ec747d.jpg",
    "released": "2017-05-25",
    "rating": 3.68,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 3358,
    "name": "Tropico 5",
    "platforms": "PlayStation 4, PC, macOS, Linux, Xbox 360",
    "image": "https://media.rawg.io/media/games/3c9/3c994986d767f56e7b72a124a35d4c3c.jpg",
    "released": "2014-05-22",
    "rating": 3.63,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 2845,
    "name": "Crypt of the NecroDancer",
    "platforms": "Xbox One, iOS, PC, macOS, Linux, Nintendo Switch, PlayStation 4, PS Vita",
    "image": "https://media.rawg.io/media/games/70a/70a7a7b21d8fdf5f19622e5e14599bcd.jpg",
    "released": "2015-04-22",
    "rating": 4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 22597,
    "name": "Darksiders III",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/cb7/cb770f3f9871e1130f40812b05e401b2.jpg",
    "released": "2018-11-27",
    "rating": 3.43,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 1322,
    "name": "Dead Rising 2",
    "platforms": "Xbox One, PC, Xbox 360, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/7e7/7e79e3296a7f64e7535c9e5bb5aa4b53.jpg",
    "released": "2010-08-31",
    "rating": 3.53,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 14989,
    "name": "Alpha Protocol",
    "platforms": "PlayStation 3, PC, Xbox 360",
    "image": "https://media.rawg.io/media/games/8b9/8b9e77be7f0f7941b11ae4b21ca2db43.jpg",
    "released": "2010-04-08",
    "rating": 3.55,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 722,
    "name": "World of Tanks",
    "platforms": "PlayStation 4, PC, Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/c3b/c3be1d5f55cb9324c97ccb7aaaf42ad4.jpg",
    "released": "2010-08-12",
    "rating": 2.91,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 22938,
    "name": "Shadow Warrior (2013)",
    "platforms": "PC, iOS, Xbox One, PlayStation 4, Linux, macOS",
    "image": "https://media.rawg.io/media/games/907/90757eaa9dc7c5cf7c47bf4960843999.jpg",
    "released": "2013-09-25",
    "rating": 3.63,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 258322,
    "name": "Blasphemous",
    "platforms": "Xbox One, Nintendo Switch, PlayStation 4, PC, Linux, macOS",
    "image": "https://media.rawg.io/media/games/b01/b01aa6b2d6d4f683203e9471a8b8d5b5.jpg",
    "released": "2019-09-09",
    "rating": 4.04,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 3090,
    "name": "Need for Speed",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/19a/19a512a8c1293c22894b7364e1405ec1.jpg",
    "released": "2015-11-03",
    "rating": 3.36,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 9904,
    "name": "Age of Empires II HD",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/c07/c07e1c1e6908a2eeebd5dad0708abd01.jpg",
    "released": "2013-04-09",
    "rating": 4.21,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 58585,
    "name": "Fallout 76",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg",
    "released": "2018-11-14",
    "rating": 2.84,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 9465,
    "name": "Grim Dawn",
    "platforms": "PC, Xbox Series S/X, Xbox One",
    "image": "https://media.rawg.io/media/games/920/92039cd19460532b76f6244b2bb3e4ac.jpg",
    "released": "2016-02-24",
    "rating": 3.96,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3501,
    "name": "LittleBigPlanet 3",
    "platforms": "PlayStation 4, PlayStation 3",
    "image": "https://media.rawg.io/media/games/570/570c1e66b2a17c2dcb862252f7e64226.jpg",
    "released": "2014-11-18",
    "rating": 3.5,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 401,
    "name": "Nioh",
    "platforms": "PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/f84/f84c7c45e074117fb81fecf427f8b41f.jpg",
    "released": "2017-02-07",
    "rating": 3.83,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 18886,
    "name": "Overlord II",
    "platforms": "Xbox One, Xbox 360, PC, macOS, Linux, PlayStation 3",
    "image": "https://media.rawg.io/media/games/bfb/bfb2bf7a0413443b1fcf0be7c3244053.jpg",
    "released": "2009-06-22",
    "rating": 3.75,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 50677,
    "name": "Superhot: Mind Control Delete",
    "platforms": "Linux, macOS, PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/b56/b56853f28ecdc04b44f552f7b9c8ea69.jpg",
    "released": "2020-07-15",
    "rating": 3.85,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19309,
    "name": "Plants vs. Zombies GOTY Edition",
    "platforms": "Nintendo DS, Nintendo DSi, Xbox 360, PlayStation 3, PlayStation 4, PS Vita, Android, iOS, PC, macOS",
    "image": "https://media.rawg.io/media/games/096/0962642c3f74cd6306ad8bfdfd3d6150.jpg",
    "released": "2010-08-10",
    "rating": 4.31,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 9741,
    "name": "The Surge",
    "platforms": "PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/396/3963e0df75c22d5995368ec43dacc19e.jpg",
    "released": "2017-05-15",
    "rating": 3.21,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 263590,
    "name": "Risk of Rain 2",
    "platforms": "Nintendo Switch, Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/238/238e2b2b24c9838626700c69cacf1e3a.jpg",
    "released": "2020-08-11",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 23702,
    "name": "Need for Speed Payback",
    "platforms": "PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/a57/a57e3c73ca46cbf55b526c828e3545c0.jpg",
    "released": "2017-11-07",
    "rating": 3.18,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 10125,
    "name": "Tom Clancy's Ghost Recon Wildlands",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/72e/72e0e063c817e90c696b2da3ea78abaa.jpg",
    "released": "2017-03-06",
    "rating": 3.58,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 2412,
    "name": "Dungeons 2",
    "platforms": "PlayStation 4, iOS, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/476/4767c380895fd35a4f1b59016dc45967.jpg",
    "released": "2015-04-23",
    "rating": 2.82,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 29173,
    "name": "Dishonored: Death of the Outsider",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/742/74276457ebb9466e11d75a2be7722265.jpg",
    "released": "2017-09-14",
    "rating": 4.04,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 7485,
    "name": "Elite Dangerous",
    "platforms": "Xbox One, PC, macOS, PlayStation 4",
    "image": "https://media.rawg.io/media/games/b69/b69a67833630dd96d8eee9d2c8c27574.jpg",
    "released": "2015-04-02",
    "rating": 3.95,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 28026,
    "name": "Super Mario Odyssey",
    "platforms": "Nintendo Switch",
    "image": "https://media.rawg.io/media/games/267/267bd0dbc496f52692487d07d014c061.jpg",
    "released": "2017-10-27",
    "rating": 4.44,
    "created": false,
    "genres": [
        {
            "name": "Arcade"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 11228,
    "name": "SpeedRunners",
    "platforms": "PlayStation 4, PC, macOS, Linux, Nintendo Switch, Xbox One",
    "image": "https://media.rawg.io/media/games/9e5/9e52a797f049e701d4eee84774a99007.jpg",
    "released": "2016-04-19",
    "rating": 3.75,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Racing"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 20980,
    "name": "The Expendabros",
    "platforms": "macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/604/6046ad65ac38adfe0553823489bb7ed4.jpg",
    "released": "2014-08-05",
    "rating": 3.53,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 12018,
    "name": "Star Wars Jedi Knight II: Jedi Outcast",
    "platforms": "Nintendo Switch, PC, macOS, PlayStation 4, Classic Macintosh, Xbox, GameCube",
    "image": "https://media.rawg.io/media/games/0a5/0a56e2bb9ce95359e69ff9689c553a45.jpg",
    "released": "2002-03-01",
    "rating": 4.2,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 9494,
    "name": "ArmA II",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/c38/c38595cc04bdddaa84ed8feae5319849.jpg",
    "released": "2009-06-18",
    "rating": 3.17,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 2767,
    "name": "Far Cry Primal",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/119/119bb59e64c7956171a33df0d35aee6b.jpg",
    "released": "2016-02-23",
    "rating": 3.57,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 18184,
    "name": "Company of Heroes: Opposing Fronts",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/fcf/fcf81e19683092d40d519a6d6a9bcf6e.jpg",
    "released": "2007-09-24",
    "rating": 3.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 7317,
    "name": "Scribblenauts Unlimited",
    "platforms": "PC, Wii U, Nintendo 3DS, Android, iOS",
    "image": "https://media.rawg.io/media/screenshots/42d/42d770eb49f2ba01cd4045e0d92af7a9.jpg",
    "released": "2012-11-13",
    "rating": 3.62,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 2556,
    "name": "Risk of Rain",
    "platforms": "PlayStation 4, PS Vita, Linux, macOS, Nintendo Switch, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/f62/f62eb0901c7017776e0a5c6a94f979d5.jpg",
    "released": "2013-11-07",
    "rating": 3.92,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 60179,
    "name": "Hellblade: Senua's Sacrifice VR Edition",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/015/015988a097b5a0e78b4ecd631e85daba.jpg",
    "released": "2018-07-31",
    "rating": 3.59,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 22069,
    "name": "Ultimate Epic Battle Simulator",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/2a2/2a2a162a08f2bba053334ecfda25228d.jpg",
    "released": "2017-04-12",
    "rating": 2.67,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 10296,
    "name": "TERA",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/screenshots/6d3/6d367773c06886535620f2d7fb1cb866.jpg",
    "released": "2017-01-31",
    "rating": 2.85,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 20569,
    "name": "X-COM: UFO Defense",
    "platforms": "PlayStation, Commodore / Amiga, PC",
    "image": "https://media.rawg.io/media/screenshots/010/0101f021b2dc123c98969fda7e4bcd92.jpg",
    "released": "1993-12-30",
    "rating": 3.64,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 9979,
    "name": "Dirty Bomb",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/616/616437f375a1080756c917b1437404f3.jpg",
    "released": "2015-06-01",
    "rating": 2.72,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 13273,
    "name": "The Uncertain: Episode 1 - The Last Quiet Day",
    "platforms": "PC, macOS",
    "image": "https://media.rawg.io/media/screenshots/72c/72c1405b3524e40c44c7860f2b5fa7f9.jpg",
    "released": "2016-09-22",
    "rating": 2.7,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19633,
    "name": "Need For Speed: Hot Pursuit",
    "platforms": "Android, PlayStation 3, Xbox 360, PC, iOS, Nintendo Switch, Wii",
    "image": "https://media.rawg.io/media/games/367/367463d43c2a1465f27e830b5b1334ee.jpg",
    "released": "2010-11-16",
    "rating": 3.86,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 19380,
    "name": "Dark Messiah of Might and Magic",
    "platforms": "Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/330/330952c1726bbb56fc3b9f8a8c83ab1d.jpg",
    "released": "2006-10-24",
    "rating": 4.29,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 21736,
    "name": "Unreal Gold",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/8b5/8b591049784d961016852873bdcb5b2d.jpg",
    "released": "2000-01-20",
    "rating": 3.42,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 10327,
    "name": "SpaceChem",
    "platforms": "Android, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/95a/95a557d6dfa6430dd662a136d71e5915.jpg",
    "released": "2011-01-01",
    "rating": 3.09,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 3468,
    "name": "Loadout",
    "platforms": "PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/560/560847de3a0fd510bbe6c305abca0f0f.jpg",
    "released": "2014-01-10",
    "rating": 2.47,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4361,
    "name": "Rayman Origins",
    "platforms": "Nintendo 3DS, Wii, PC, macOS, PlayStation 3, PS Vita, Xbox One, iOS, Xbox 360",
    "image": "https://media.rawg.io/media/screenshots/375/375f84d018242d7519a230f623981217.jpg",
    "released": "2011-11-15",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Family"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 4602,
    "name": "Bulletstorm",
    "platforms": "PlayStation 3, Xbox 360, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/b42/b42b05096de6668833bbab38f6099c6a.jpg",
    "released": "2011-02-22",
    "rating": 4.07,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 364806,
    "name": "Need for Speed Heat",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg",
    "released": "2019-11-08",
    "rating": 3.23,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 18081,
    "name": "No More Room in Hell",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/screenshots/f34/f34c86335d0c51baa582aa93fa2d3f55.jpg",
    "released": "2013-10-31",
    "rating": 2.88,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19439,
    "name": "Risen",
    "platforms": "Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/155/155a7d8f464ef6029e11cc6a9c0f763d.jpg",
    "released": "2009-10-02",
    "rating": 3.79,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 2390,
    "name": "Plague Inc: Evolved",
    "platforms": "Nintendo Switch, Linux, macOS, PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/e31/e315213a5cb21645df8db3e5191e530c.jpg",
    "released": "2015-09-18",
    "rating": 3.98,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19284,
    "name": "Fallout Tactics: Brotherhood of Steel",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/27c/27c86ebfba2281ebe3ea8ca6c9e752f1.jpg",
    "released": "2001-03-01",
    "rating": 3.37,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 22508,
    "name": "Overwatch",
    "platforms": "Nintendo Switch, PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/4ea/4ea507ceebeabb43edbc09468f5aaac6.jpg",
    "released": "2016-05-24",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 11567,
    "name": "The Red Solstice",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/d87/d87268c4b7b33b278cbc1f152db39729.jpg",
    "released": "2015-07-09",
    "rating": 2.27,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 13498,
    "name": "EVE Online",
    "platforms": "PC, Linux, macOS",
    "image": "https://media.rawg.io/media/games/82b/82be203e68d737762846203811165933.jpg",
    "released": "2003-05-06",
    "rating": 3.37,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 122,
    "name": "This is the Police",
    "platforms": "Android, Linux, macOS, PC, iOS, Xbox One, PlayStation 4, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg",
    "released": "2016-08-01",
    "rating": 3.88,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2131,
    "name": "Race The Sun",
    "platforms": "Xbox One, Wii U, PlayStation 3, PlayStation 4, PS Vita, PC, Web, macOS, Linux, iOS",
    "image": "https://media.rawg.io/media/games/a01/a01b34c722ceec784817381eb1824fa5.jpg",
    "released": "2013-08-17",
    "rating": 3.15,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 14072,
    "name": "Tropico 3",
    "platforms": "Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/d49/d4974f5eb9e6c47794f681f149280d9d.jpg",
    "released": "2009-10-20",
    "rating": 3.33,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 11663,
    "name": "My Friend Pedro",
    "platforms": "PlayStation 4, Xbox One, iOS, PC, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/21d/21dfa5f7f5c0fa2b85f418c4e1c6ab1b.jpg",
    "released": "2019-06-19",
    "rating": 3.88,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 10050,
    "name": "Thief Gold",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/934/934db575e66d63f2a6e86a2c688c141b.jpeg",
    "released": "1999-10-29",
    "rating": 3.97,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 29,
    "name": "South Park: The Fractured But Whole",
    "platforms": "PlayStation 4, Xbox One, PC, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/63c/63cb04333dea1726e90b38dc3d10258f.jpg",
    "released": "2017-03-31",
    "rating": 4.04,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 2139,
    "name": "Hyper Light Drifter",
    "platforms": "Nintendo Switch, Xbox One, PC, PlayStation 4, iOS, macOS, Linux",
    "image": "https://media.rawg.io/media/games/578/57885b9590c9a9f80ceea34d147a34c4.jpg",
    "released": "2016-03-30",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 18726,
    "name": "Gothic",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/0bb/0bbceedd3e1420df0fdaf66a2e373b2b.jpg",
    "released": "2001-03-15",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 10537,
    "name": "RUINER",
    "platforms": "Nintendo Switch, Linux, macOS, PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/489/4899fe1e7b65e550ea619db02006ca6c.jpg",
    "released": "2017-09-26",
    "rating": 3.74,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 2889,
    "name": "Oddworld: New 'n' Tasty",
    "platforms": "Xbox One, Wii U, PS Vita, PlayStation 3, PlayStation 4, Nintendo Switch, PC, macOS, Linux, Android, iOS",
    "image": "https://media.rawg.io/media/games/ba0/ba006ef12175ad4773e5964c320099c4.jpg",
    "released": "2014-07-22",
    "rating": 3.52,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 516111,
    "name": "Mass Effect: Legendary Edition",
    "platforms": "PlayStation 5, Xbox Series S/X, PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/64e/64e2a77f37ddc48d102127234af99886.jpg",
    "released": "2021-05-14",
    "rating": 4.57,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 842,
    "name": "Call of Duty: Advanced Warfare",
    "platforms": "PlayStation 4, Xbox One, PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/e05/e053aae547e0978ad90280a1a3d8f177.jpg",
    "released": "2014-11-03",
    "rating": 3.45,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4206,
    "name": "Vanquish",
    "platforms": "PC, PlayStation 3, Xbox One, Xbox 360",
    "image": "https://media.rawg.io/media/games/88a/88af17cc08783ccdd1608ae63c47eeac.jpg",
    "released": "2010-10-19",
    "rating": 4.02,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19458,
    "name": "DOOM 3",
    "platforms": "PC, PlayStation 4, Xbox One, Linux, macOS, Nintendo Switch, Xbox",
    "image": "https://media.rawg.io/media/games/3b0/3b01313965c19adc6b6c37a3d9d33576.jpg",
    "released": "2004-08-03",
    "rating": 3.92,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 58698,
    "name": "Just Cause 4",
    "platforms": "PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/02a/02a7f96f5a1156642bc0f827fd1b63f0.jpg",
    "released": "2018-12-04",
    "rating": 3.02,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 9824,
    "name": "Skullgirls",
    "platforms": "Xbox 360, PC, PlayStation 3",
    "image": "https://media.rawg.io/media/games/416/4164ca654a339af5be8e63cc9c480c70.jpg",
    "released": "2012-02-14",
    "rating": 3.75,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 99,
    "name": "Snake Pass",
    "platforms": "Nintendo Switch, Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/f15/f15e1dbda32b588a981bbc6b222a4b4c.jpg",
    "released": "2017-03-28",
    "rating": 3.24,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 17357,
    "name": "Orcs Must Die!",
    "platforms": "Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/417/4176298c1b22ccd338ce3dfc34eb7e28.jpg",
    "released": "2011-10-05",
    "rating": 3.7,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 236694,
    "name": "Remnant: From the Ashes",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/30f/30f2c0f6890da6971102210c56d8513c.jpg",
    "released": "2019-08-20",
    "rating": 3.61,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 13387,
    "name": "Serious Sam HD: The Second Encounter",
    "platforms": "Xbox 360, PC",
    "image": "https://media.rawg.io/media/screenshots/46a/46ac84997152eaf4f760257a60099231.jpg",
    "released": "2010-04-28",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 27938,
    "name": "SteamWorld Dig 2",
    "platforms": "Nintendo Switch, PlayStation 4, Xbox One, PC, macOS, Linux, Nintendo 3DS, PS Vita",
    "image": "https://media.rawg.io/media/games/95a/95adc7a2135783dfd2204f694200c836.jpg",
    "released": "2017-09-21",
    "rating": 4.06,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 10281,
    "name": "Besiege",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/screenshots/570/5704316c673fab6994db582e0f43f924.jpg",
    "released": "2015-01-28",
    "rating": 3.81,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4477,
    "name": "Kane & Lynch 2: Dog Days",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/b50/b501727147644474562935f19a60134e.jpg",
    "released": "2010-08-17",
    "rating": 3.24,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 12884,
    "name": "HELLDIVERS",
    "platforms": "PlayStation 4, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/screenshots/c37/c3739a39b6c595cfeb1301af7604a609.jpg",
    "released": "2015-12-07",
    "rating": 3.59,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 15860,
    "name": "STAR WARS: The Force Unleashed II",
    "platforms": "PlayStation 3, Xbox One, Nintendo DS, Xbox 360, PC, Wii",
    "image": "https://media.rawg.io/media/games/693/693952316d4b90984a92e7ab0f5c9b81.jpg",
    "released": "2010-10-25",
    "rating": 3.65,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 19584,
    "name": "Risen 2: Dark Waters",
    "platforms": "PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/224/224bc150dfb159caf58ae504f507847e.jpg",
    "released": "2012-04-23",
    "rating": 3.43,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 19568,
    "name": "Tom Clancy's Splinter Cell: Conviction",
    "platforms": "PlayStation 3, Xbox One, Android, PC, macOS, Xbox 360",
    "image": "https://media.rawg.io/media/games/366/366e521df82c81218984915203aa3644.jpg",
    "released": "2010-04-13",
    "rating": 3.83,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 23191,
    "name": "Aegis Defenders",
    "platforms": "PlayStation 4, Nintendo Switch, macOS, PC",
    "image": "https://media.rawg.io/media/games/054/054ab7dd5e83f84f1ec8bedf849b627f.jpg",
    "released": "2018-02-07",
    "rating": 2.55,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19397,
    "name": "Vampire: The Masquerade - Bloodlines",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/6f0/6f0a69db053bce957d8328a7253fbb29.jpg",
    "released": "2004-11-15",
    "rating": 4.39,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 5538,
    "name": "Dark Souls",
    "platforms": "Xbox 360, PC, PlayStation 3",
    "image": "https://media.rawg.io/media/games/582/582b5518a52f5086d15dde128264b94d.jpg",
    "released": "2011-09-22",
    "rating": 4.33,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 18287,
    "name": "Anomaly: Warzone Earth",
    "platforms": "Xbox 360, PC, Android, PlayStation 3, Linux, iOS, macOS",
    "image": "https://media.rawg.io/media/games/d28/d28e64fd1af23d1846d20b47dfa933f8.jpeg",
    "released": "2011-04-07",
    "rating": 2.92,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3601,
    "name": "inFAMOUS: First Light",
    "platforms": "PlayStation 4",
    "image": "https://media.rawg.io/media/games/3bd/3bd37baee6dc6e15c278a83c787ebd8d.jpg",
    "released": "2014-08-26",
    "rating": 3.73,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 28615,
    "name": "Gears of War",
    "platforms": "Xbox 360, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/988/98834d39955e7f15d3717fac438128aa.jpg",
    "released": "2006-11-08",
    "rating": 4.11,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 10393,
    "name": "Gothic 3",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/8a3/8a3e91293e38dcc1126ae83d31bfd6e4.jpg",
    "released": "2006-10-12",
    "rating": 3.7,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 4111,
    "name": "Lord of the Rings: War in the North",
    "platforms": "PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/f32/f3240d0b7a9e6523c8d708129c512ac8.jpg",
    "released": "2011-11-01",
    "rating": 3.33,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 19560,
    "name": "Far Cry",
    "platforms": "PlayStation 3, PlayStation 2, Wii, PC, Xbox, Xbox 360",
    "image": "https://media.rawg.io/media/games/2ee/2eef5ed5e82c28d1299ecc2a0e60f2cb.jpg",
    "released": "2004-03-22",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 2055,
    "name": "AdVenture Capitalist",
    "platforms": "Linux, PlayStation 4, Android, iOS, PC, macOS",
    "image": "https://media.rawg.io/media/games/11b/11b81edff7f45024e36b88e880d86585.jpg",
    "released": "2015-02-19",
    "rating": 2.8,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Board Games"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 244716,
    "name": "DiRT Rally 2.0",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/8f3/8f306808c45a4dbe0cd698e0b142af08.jpg",
    "released": "2019-02-26",
    "rating": 3.57,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Racing"
        }
    ]
},
{
    "id": 13570,
    "name": "Game Dev Tycoon",
    "platforms": "Android, macOS, PC, Linux, iOS",
    "image": "https://media.rawg.io/media/screenshots/e70/e7009d889b38df2a16f78859a7343308.jpg",
    "released": "2012-12-10",
    "rating": 4.01,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 28631,
    "name": "Fable III",
    "platforms": "PC, Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/827/8276bc29cdc27752e27802b94aea255e.jpg",
    "released": "2010-10-25",
    "rating": 3.73,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 11425,
    "name": "SPORE",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/cae/caeb9d0cb154124b132d51861735431e.jpg",
    "released": "2008-09-04",
    "rating": 4.15,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Family"
        }
    ]
},
{
    "id": 59023,
    "name": "Red Faction Guerrilla Re-Mars-tered",
    "platforms": "PC, Nintendo Switch, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/b38/b3825d2c32be1c43d667cc20113230cf.jpg",
    "released": "2018-07-02",
    "rating": 3.5,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 3726,
    "name": "Trials Fusion",
    "platforms": "PlayStation 4, Xbox 360, PC, Xbox One",
    "image": "https://media.rawg.io/media/screenshots/69b/69bb243ea9896ddfc2e051b58e81624d.jpg",
    "released": "2014-04-15",
    "rating": 3.52,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        }
    ]
},
{
    "id": 10436,
    "name": "Golf With Your Friends",
    "platforms": "Nintendo Switch, Xbox One, macOS, PlayStation 4, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/f5a/f5abab52c4d606551cd5ec3ab709e501.jpg",
    "released": "2016-01-29",
    "rating": 3.83,
    "created": false,
    "genres": [
        {
            "name": "Sports"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 18185,
    "name": "Company of Heroes: Tales of Valor",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/249/249cb9b8c402ed713358fcf434bcca11.jpg",
    "released": "2009-04-07",
    "rating": 3.34,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 2287,
    "name": "Her Story",
    "platforms": "Android, macOS, PC, iOS",
    "image": "https://media.rawg.io/media/games/a9a/a9a4e45ad8e653df2295e8410b7e96fd.jpg",
    "released": "2015-06-23",
    "rating": 3.98,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 10900,
    "name": "Project Zomboid",
    "platforms": "Linux, PC, macOS",
    "image": "https://media.rawg.io/media/screenshots/243/2436b84b99f1121c302367f0c5901b84.jpg",
    "released": "2013-11-08",
    "rating": 3.87,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3838,
    "name": "Need for Speed Rivals",
    "platforms": "PlayStation 4, PlayStation 3, Xbox 360, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/1fa/1fa75f0895240b12fc65cc98ae9649fd.jpg",
    "released": "2013-11-15",
    "rating": 3.16,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 22162,
    "name": "Moonlighter",
    "platforms": "PlayStation 4, Nintendo Switch, Linux, macOS, PC, iOS, Xbox One, Android",
    "image": "https://media.rawg.io/media/games/5c2/5c2b78d4ee2647849d0bfb5d772345c8.jpg",
    "released": "2018-05-28",
    "rating": 3.75,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 5678,
    "name": "The Elder Scrolls IV: Oblivion",
    "platforms": "Xbox 360, PlayStation 3, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/615/61503312a95d451198d80d9bae275f79.jpg",
    "released": "2006-03-20",
    "rating": 4.33,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 35561,
    "name": "Star Wars: Republic Commando",
    "platforms": "Xbox 360, Xbox One, Xbox, Nintendo Switch, PlayStation 4, PlayStation 5, PC",
    "image": "https://media.rawg.io/media/games/b1d/b1de33eca64ad293702d9554f5ac5cd5.jpg",
    "released": "2005-03-01",
    "rating": 4.17,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 13909,
    "name": "Prince of Persia: The Sands of Time",
    "platforms": "PlayStation 2, PlayStation 3, Xbox, GameCube, PC",
    "image": "https://media.rawg.io/media/games/99b/99b39612e864d6ddfdb2c407fd9010a1.jpg",
    "released": "2003-10-28",
    "rating": 4.23,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 339961,
    "name": "The Dark Pictures Anthology: Man of Medan",
    "platforms": "PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/206/2060eda39e4646bbe90b55ab7495c173.jpg",
    "released": "2019-08-30",
    "rating": 3.61,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 17158,
    "name": "PAC-MAN CHAMPIONSHIP EDITION 2",
    "platforms": "Xbox One, Nintendo Switch, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/screenshots/7fa/7fa3e1fbabb9fb5c77525e47fa49e261.jpg",
    "released": "2016-09-13",
    "rating": 3.13,
    "created": false,
    "genres": [
        {
            "name": "Arcade"
        },
        {
            "name": "Casual"
        }
    ]
},
{
    "id": 12757,
    "name": "Warhammer 40,000: Dawn of War II",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/screenshots/4d9/4d9afae02fdf2896569b1c7bfeabb8c1.jpg",
    "released": "2009-02-18",
    "rating": 3.94,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 16856,
    "name": "AudioSurf",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/0f5/0f585fa72f534f62f9e5da051179f5de.jpg",
    "released": "2008-02-15",
    "rating": 3.93,
    "created": false,
    "genres": [
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4483,
    "name": "Duke Nukem Forever",
    "platforms": "Xbox 360, PlayStation 3, Xbox One, PC, macOS",
    "image": "https://media.rawg.io/media/games/08a/08aa92e004f13ad2d41127327314c3f9.jpg",
    "released": "2011-06-09",
    "rating": 2.85,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 693,
    "name": "The Last Guardian",
    "platforms": "PlayStation 4",
    "image": "https://media.rawg.io/media/games/276/2769b1982cd132a60c69dc5d574445fa.jpg",
    "released": "2016-10-25",
    "rating": 4.08,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 5711,
    "name": "The Incredible Adventures of Van Helsing",
    "platforms": "Xbox One, PC, macOS",
    "image": "https://media.rawg.io/media/games/3c3/3c363e31f4add887affadc82c641de72.jpg",
    "released": "2013-05-22",
    "rating": 3.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 12662,
    "name": "LEGO Star Wars - The Complete Saga",
    "platforms": "Android, Xbox 360, Wii, macOS, PC, iOS, Nintendo DS, PlayStation 3, Xbox One",
    "image": "https://media.rawg.io/media/games/cf3/cf39c637f18800b6d3f65d640a8ebbaa.jpg",
    "released": "2007-11-06",
    "rating": 4.1,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Family"
        }
    ]
},
{
    "id": 9495,
    "name": "ArmA II: Operation Arrowhead",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/cce/cce227a4ac4e432ee0ba19d0dfe77c30.jpg",
    "released": "2010-06-29",
    "rating": 3.25,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 61961,
    "name": "Headsnatchers",
    "platforms": "Nintendo Switch, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/screenshots/831/8317fca646c75922f2ba6f291f6aac6d.jpg",
    "released": "2018-07-24",
    "rating": 1.83,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 58754,
    "name": "Tom Clancy’s The Division 2",
    "platforms": "PC, PlayStation 4, Web, Xbox One",
    "image": "https://media.rawg.io/media/games/0e5/0e5e869f2e8f496b3f09e00187ea94fc.jpg",
    "released": "2019-03-15",
    "rating": 3.73,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 9782,
    "name": "Deceit",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/ff5/ff594fc8b1ada40fe2ae9a5d549dc197.jpg",
    "released": "2017-03-03",
    "rating": 2.95,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 11148,
    "name": "The Lab",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/d33/d331d95adf10b44ee3678129020bc31f.jpg",
    "released": "2016-04-05",
    "rating": 3.08,
    "created": false,
    "genres": []
},
{
    "id": 13512,
    "name": "Cortex Command",
    "platforms": "macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/f81/f81fd968a3161e7d35612d8c4232923e.jpg",
    "released": "2012-09-28",
    "rating": 2.55,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 7439,
    "name": "Call of Duty: Ghosts",
    "platforms": "Wii U, Xbox One, PC, Xbox 360, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/eb2/eb24800b4491701eca481e7c990bce4a.jpg",
    "released": "2013-11-05",
    "rating": 3.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 2639,
    "name": "Day of the Tentacle Remastered",
    "platforms": "PS Vita, PlayStation 4, Xbox One, iOS, PC, Linux, macOS",
    "image": "https://media.rawg.io/media/games/764/7648a8802fae5247298d775c85e9535f.jpg",
    "released": "2016-03-21",
    "rating": 3.66,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Family"
        }
    ]
},
{
    "id": 5706,
    "name": "Valkyria Chronicles",
    "platforms": "PlayStation 3, Nintendo Switch, PC",
    "image": "https://media.rawg.io/media/games/0d4/0d4e5446db732e2fcce34d1dcb4dd914.jpg",
    "released": "2008-04-24",
    "rating": 4.07,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 16649,
    "name": "Serious Sam 2",
    "platforms": "Xbox, PC",
    "image": "https://media.rawg.io/media/games/bc7/bc77b1eb8e35df2d90b952bac5342c75.jpg",
    "released": "2005-10-11",
    "rating": 3.52,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 10926,
    "name": "Factorio",
    "platforms": "Linux, macOS, PC, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/7e4/7e4e22b76da131e9690d5757555093c2.jpg",
    "released": "2020-08-14",
    "rating": 4.36,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3400,
    "name": "Battlefield Hardline",
    "platforms": "PC, Xbox 360, PlayStation 4, Xbox One, PlayStation 3",
    "image": "https://media.rawg.io/media/games/d2b/d2b33b26e0d61aca35d434c8a69e3711.jpg",
    "released": "2015-03-17",
    "rating": 3.2,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 887,
    "name": "Call of Duty: Infinite Warfare",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/6f7/6f7341dd656910be2c2cda39193a7ec9.jpg",
    "released": "2016-11-04",
    "rating": 3.56,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 61176,
    "name": "Bloodstained: Ritual of the Night",
    "platforms": "Xbox One, Android, iOS, PC, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/26c/26cacc55399ed6b2c14e20d2eca0620a.jpg",
    "released": "2019-06-18",
    "rating": 4.01,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 13566,
    "name": "Into the Breach",
    "platforms": "Nintendo Switch, macOS, PC, Android",
    "image": "https://media.rawg.io/media/games/800/800d07ca648a9778a8230f40088e0866.jpg",
    "released": "2018-02-26",
    "rating": 4.31,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 54491,
    "name": "Quake",
    "platforms": "Xbox One, macOS, Linux, Classic Macintosh, Xbox, Nintendo Switch, PlayStation 4, Nintendo 64, SEGA Saturn, Commodore / Amiga, PC, Xbox Series S/X, PlayStation 5",
    "image": "https://media.rawg.io/media/games/3a8/3a82d7f5c90ab082fe475e28d58bee8b.jpg",
    "released": "1996-06-22",
    "rating": 4.24,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 17998,
    "name": "Antichamber",
    "platforms": "macOS, Linux, PC",
    "image": "https://media.rawg.io/media/screenshots/76f/76ff4289a2a3ad7659cae129b859d67e.jpg",
    "released": "2013-01-31",
    "rating": 4.04,
    "created": false,
    "genres": [
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 4520,
    "name": "Alice: Madness Returns",
    "platforms": "PC, PlayStation 3, Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/0b5/0b5410b1e4b3fb72696dcefbf4f1cf40.jpg",
    "released": "2011-06-14",
    "rating": 4.01,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 58640,
    "name": "Realm Royale",
    "platforms": "Nintendo Switch, PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/621/62130da33398d23116ac8e61a7b3111a.jpg",
    "released": "2018-06-05",
    "rating": 2.64,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 17975,
    "name": "DOOM II",
    "platforms": "Xbox One, iOS, PC, PlayStation 4, Game Boy Advance, Classic Macintosh, Android, macOS, Nintendo Switch, Xbox 360",
    "image": "https://media.rawg.io/media/games/38a/38af969459ad6e5de116ec8a4a84218c.jpg",
    "released": "1994-09-30",
    "rating": 4.38,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 58735,
    "name": "Unravel Two",
    "platforms": "Nintendo Switch, Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/3e3/3e355e1b8a5ee47f4c76e28e3055236d.jpg",
    "released": "2018-06-09",
    "rating": 3.95,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 28589,
    "name": "Halo 3",
    "platforms": "PC, Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/982/982ff61d574fed5e416cb1867b40d9b0.jpg",
    "released": "2007-09-25",
    "rating": 4.35,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 18449,
    "name": "Divinity II: Developer's Cut",
    "platforms": "PC, Xbox 360",
    "image": "https://media.rawg.io/media/games/c88/c88c0929d09ec9270ca1207a0838c202.jpg",
    "released": "2012-10-29",
    "rating": 3.56,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 4571,
    "name": "Dungeon Defenders",
    "platforms": "PC, iOS, Android, PlayStation 3, macOS, Linux, Xbox 360",
    "image": "https://media.rawg.io/media/screenshots/321/3213f56333ca5e92a620f41bd3365637.jpg",
    "released": "2010-12-16",
    "rating": 3.31,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 9871,
    "name": "Guns of Icarus Alliance",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/57f/57fc2051dd27c9947d12cdf63790d122.jpg",
    "released": "2017-03-31",
    "rating": 2.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 57908,
    "name": "Tomb Raider II",
    "platforms": "Classic Macintosh, PSP, macOS, PC, iOS, PlayStation, PS Vita, PlayStation 3, Android",
    "image": "https://media.rawg.io/media/screenshots/c9c/c9c4e6d1792b5e12676819f3b57e5e26.jpeg",
    "released": "1997-10-31",
    "rating": 3.74,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 313843,
    "name": "Goat of Duty",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/eef/eef872fddedf40e6d2236bb981725cc6.jpg",
    "released": "2019-07-10",
    "rating": 2.28,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 9736,
    "name": "Slime Rancher",
    "platforms": "PlayStation 4, Linux, macOS, PC, Nintendo Switch, Xbox One",
    "image": "https://media.rawg.io/media/games/43f/43f4f3a50651f371c147ecce8ee841a9.jpg",
    "released": "2016-01-14",
    "rating": 3.86,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 50418,
    "name": "Deiland",
    "platforms": "PlayStation 4, Android, iOS, PC, macOS",
    "image": "https://media.rawg.io/media/screenshots/ee6/ee659c373573c9966dd773a59eb1af24.jpg",
    "released": "2016-02-19",
    "rating": 2.27,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3863,
    "name": "How to Survive",
    "platforms": "PlayStation 3, Xbox 360, Wii U, PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/screenshots/73a/73a2c7af85d51bbdb20516bf2128fd7d.jpg",
    "released": "2013-10-23",
    "rating": 3.06,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 15861,
    "name": "STAR WARS - The Force Unleashed Ultimate Sith Edition",
    "platforms": "macOS, PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/b2d/b2db4496b084b235742cf6e9894bbf36.jpg",
    "released": "2009-12-15",
    "rating": 3.85,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 13525,
    "name": "Assassin's Creed 2 Deluxe Edition",
    "platforms": "macOS, PC",
    "image": "https://media.rawg.io/media/games/c14/c14d85f2ec10e82e3d5cd837c9c0a56d.jpg",
    "released": "2010-03-04",
    "rating": 4.33,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 10389,
    "name": "Gothic II: Gold Edition",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/5b7/5b7929040526f74f5e6073c06e7de902.jpg",
    "released": "2010-01-13",
    "rating": 4.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 2296,
    "name": "Fahrenheit: Indigo Prophecy Remastered",
    "platforms": "PlayStation 4, Linux, macOS, PC, iOS",
    "image": "https://media.rawg.io/media/games/b51/b51c46cccb277e6451e2a67e4213a820.jpg",
    "released": "2015-01-28",
    "rating": 4.16,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 22790,
    "name": "Serious Sam: The Second Encounter",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/68e/68e7d64c8b37ae0de3616aca74cc4bba.jpg",
    "released": "2002-02-02",
    "rating": 4.02,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2659,
    "name": "Trackmania Turbo",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/82e/82eeea65ebb047cc7f366faf2fb062b6.jpg",
    "released": "2016-03-22",
    "rating": 3.48,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 28613,
    "name": "Halo: Reach",
    "platforms": "Xbox 360, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/045/0457f748c9492261ccb46147edf9c761.jpg",
    "released": "2010-09-14",
    "rating": 4.28,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 28418,
    "name": "Diablo III: Reaper of Souls",
    "platforms": "PC, Xbox 360, Xbox One, macOS, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/202/2023cb28ef354720a2ca4652727687d0.jpg",
    "released": "2014-03-25",
    "rating": 4.18,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 9831,
    "name": "Conan Exiles",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/c9e/c9e47fd222f631084879d395eee07d66.jpg",
    "released": "2017-01-30",
    "rating": 2.82,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 966,
    "name": "Sonic & All-Stars Racing Transformed",
    "platforms": "Xbox One, iOS, PC, Nintendo 3DS, Wii U, Xbox 360, PlayStation 3, PS Vita, Android",
    "image": "https://media.rawg.io/media/games/0c1/0c1c9965ba59166ab986a663ab2252dc.jpg",
    "released": "2012-11-16",
    "rating": 3.91,
    "created": false,
    "genres": [
        {
            "name": "Sports"
        },
        {
            "name": "Racing"
        },
        {
            "name": "Family"
        }
    ]
},
{
    "id": 1830,
    "name": "Dungeon of the Endless",
    "platforms": "Nintendo Switch, Xbox One, iOS, PC, macOS, PlayStation 4",
    "image": "https://media.rawg.io/media/games/a0c/a0cb0ac048c75b41d2620d2e6cb6f983.jpg",
    "released": "2014-10-27",
    "rating": 3.66,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 14422,
    "name": "Condemned: Criminal Origins",
    "platforms": "PC, Xbox 360",
    "image": "https://media.rawg.io/media/games/98d/98deaf99f06aa3d7e54e1fa69e4a9060.jpg",
    "released": "2005-11-15",
    "rating": 3.8,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 10056,
    "name": "Kane and Lynch: Dead Men",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/bef/bef072bb5a968347f40cbeefcf7b80db.jpg",
    "released": "2007-11-13",
    "rating": 3.6,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 47326,
    "name": "OKAMI HD",
    "platforms": "PlayStation 4, PlayStation 3, PC, Xbox One, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/a38/a3857b2445c70ac5dbe73b210a827ad8.jpg",
    "released": "2017-12-12",
    "rating": 4.18,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 14211,
    "name": "Children of Morta",
    "platforms": "Nintendo Switch, Linux, PC, Xbox One, macOS, PlayStation 4",
    "image": "https://media.rawg.io/media/games/434/43431e04f0cd5419a3d8e31a5c8c3d5d.jpg",
    "released": "2019-09-03",
    "rating": 3.93,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 10602,
    "name": "Dino D-Day",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/711/7115f17fd8453b9d4d93536446247404.jpg",
    "released": "2011-04-08",
    "rating": 2.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4154,
    "name": "Dead Space 3",
    "platforms": "Xbox One, PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/568/5689c58278e807c1574ceefb8dec026b.jpg",
    "released": "2013-02-05",
    "rating": 3.62,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 1612,
    "name": "Super Hexagon",
    "platforms": "PC, Linux, iOS, macOS, Android",
    "image": "https://media.rawg.io/media/screenshots/112/112c9ecfe850e318bb999660361782bb.jpeg",
    "released": "2012-08-31",
    "rating": 3.75,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 37669,
    "name": "Marvel Heroes",
    "platforms": "PC, Xbox One, PlayStation 4, macOS",
    "image": "https://media.rawg.io/media/screenshots/37f/37f6c595ddfc5050a02f0f95d8805d77.jpg",
    "released": "2013-06-03",
    "rating": 2.5,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 3374,
    "name": "Stealth Inc 2: A Game of Clones",
    "platforms": "PlayStation 3, PlayStation 4, Xbox One, PC, Wii U, PS Vita, Android",
    "image": "https://media.rawg.io/media/screenshots/2ff/2ffe731b3388bd795f94c38e9afed60f.jpg",
    "released": "2014-10-30",
    "rating": 2.84,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 965,
    "name": "Sherlock Holmes: The Devil's Daughter",
    "platforms": "Nintendo Switch, PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/8c3/8c33e956567aae5cfa839e8b4bb1fb39.jpg",
    "released": "2016-06-10",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 28619,
    "name": "Gears of War 2",
    "platforms": "Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/51b/51ba5f9b280c6fec71c293fe276e24ec.jpg",
    "released": "2008-11-07",
    "rating": 4.27,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 59197,
    "name": "F1 2018",
    "platforms": "PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/a1c/a1cea552040aecf9414548e209f9c0d8.jpg",
    "released": "2018-08-23",
    "rating": 3.36,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Racing"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4186,
    "name": "Persona 4 Golden",
    "platforms": "Nintendo Switch, Xbox Series S/X, PS Vita, PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/b2c/b2c9c6115114c8f7d461b5430e8a7d4a.jpg",
    "released": "2012-11-20",
    "rating": 4.41,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 4466,
    "name": "Catherine",
    "platforms": "PlayStation 3, Xbox 360, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/a91/a917f41bb87e4b9e7a762ac87d97a9dc.jpg",
    "released": "2011-02-17",
    "rating": 4.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 58859,
    "name": "Marvel’s Avengers",
    "platforms": "PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/1eb/1ebef06e55f756974654c35b9aedb127.jpg",
    "released": "2020-09-04",
    "rating": 2.68,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 16543,
    "name": "LEGO Batman",
    "platforms": "PlayStation 2, Xbox One, Xbox 360, PC, macOS, Nintendo DS, Wii, PlayStation 3, PSP",
    "image": "https://media.rawg.io/media/games/9f7/9f750cb69a31a42648f45e3681abed3a.jpg",
    "released": "2008-09-23",
    "rating": 3.79,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Family"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 28131,
    "name": "Fortnite: Save The World",
    "platforms": "Xbox One, PC, PlayStation 4, Nintendo Switch, iOS",
    "image": "https://media.rawg.io/media/games/d97/d97f663b752a6484df105993f17abb49.jpg",
    "released": "2017-07-21",
    "rating": 2.98,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 11887,
    "name": "Hero Siege",
    "platforms": "macOS, Linux, PC",
    "image": "https://media.rawg.io/media/screenshots/71c/71c015df012029897e87ac00b7a8de4c.jpg",
    "released": "2013-12-18",
    "rating": 3.35,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Massively Multiplayer"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 9659,
    "name": "Bulletstorm: Full Clip Edition",
    "platforms": "PlayStation 4, Xbox One, Nintendo Switch, PC",
    "image": "https://media.rawg.io/media/games/4ec/4ec6786820944f923eb212a3ed8d23be.jpg",
    "released": "2017-04-07",
    "rating": 3.92,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 11214,
    "name": "Northgard",
    "platforms": "Nintendo Switch, macOS, Linux, Xbox One, PlayStation 4, PC, iOS",
    "image": "https://media.rawg.io/media/games/725/725d08c4174c129ce5275c43cd0347c6.jpg",
    "released": "2018-03-06",
    "rating": 3.76,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 20466,
    "name": "Worms Armageddon",
    "platforms": "PC, Dreamcast, PlayStation, Game Boy Color, Nintendo 64",
    "image": "https://media.rawg.io/media/games/96a/96a48ac7487d9db9179d83170afcb16a.jpg",
    "released": "1999-01-29",
    "rating": 4.31,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 9515,
    "name": "We Were Here",
    "platforms": "PlayStation 4, Linux, macOS, PC, Xbox One",
    "image": "https://media.rawg.io/media/screenshots/77b/77bd0acea49153dc6c5a89d91eb568bc.jpg",
    "released": "2017-02-03",
    "rating": 3.79,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 4031,
    "name": "Dead Island Riptide",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/569/5695d8534579129ad6b40fefa2ef360c.jpg",
    "released": "2013-04-22",
    "rating": 3.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 17179,
    "name": "Resident Evil 0 / Biohazard 0 HD REMASTER",
    "platforms": "PlayStation 4, PlayStation 3, Xbox 360, Nintendo Switch, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/955/9554440f1c17236c0233b644e47909d2.jpg",
    "released": "2016-01-19",
    "rating": 3.81,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 17854,
    "name": "Teleglitch: Die More Edition",
    "platforms": "macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/f7b/f7be8b51b1f9d94ddeac27f7b7229440.jpg",
    "released": "2013-07-24",
    "rating": 2.75,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 22961,
    "name": "Hitman: Contracts",
    "platforms": "macOS, Xbox, PlayStation 3, PlayStation 2, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/07b/07b5abbe6330a76d6b30636d3aa5e0f3.jpg",
    "released": "2004-04-20",
    "rating": 3.94,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 709,
    "name": "Hawken",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/9da/9da42a4da370cc386c8578f0b2578e2c.jpg",
    "released": "2014-02-14",
    "rating": 2.82,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 20992,
    "name": "Cry of Fear",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/e06/e062facadfeb0a0339103bf7e81ca129.jpg",
    "released": "2012-02-22",
    "rating": 3.55,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 46399,
    "name": "Regions Of Ruin",
    "platforms": "Nintendo Switch, Xbox One, PC, macOS, Linux, PlayStation 4",
    "image": "https://media.rawg.io/media/screenshots/2cc/2cc8e0cfe5df94b586ad42f4319514e9.jpg",
    "released": "2018-02-04",
    "rating": 2.5,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 15851,
    "name": "Star Wars: Dark Forces",
    "platforms": "Classic Macintosh, PlayStation, PC",
    "image": "https://media.rawg.io/media/games/5ad/5ad8b055d14c14fd626d5eb42f218bc6.jpg",
    "released": "1995-02-28",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 31771,
    "name": "The Elder Scrolls II: Daggerfall",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/522/522f66c5f8542a945b9e2b1942f1ad63.jpg",
    "released": "1996-08-30",
    "rating": 3.3,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 10980,
    "name": "Serial Cleaner",
    "platforms": "PlayStation 4, Xbox One, Nintendo Switch, iOS, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/439/4397f836727bdd13bd38deeb4f7355bb_GacwmJ9.jpg",
    "released": "2016-09-28",
    "rating": 3.18,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 427930,
    "name": "Phasmophobia",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/370/370895ff725d74e26b8d30389222b397.jpg",
    "released": "2020-09-18",
    "rating": 3.88,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 43,
    "name": "Full Throttle Remastered",
    "platforms": "PlayStation 4, Xbox One, PS Vita, PC, iOS, macOS, Linux",
    "image": "https://media.rawg.io/media/games/ab1/ab1b125c1bf4899c58fe90226b9a1f5b.jpg",
    "released": "2017-04-17",
    "rating": 3.96,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 445442,
    "name": "Helltaker",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/67a/67aef58e8ead90609f7adbd20d72a033.jpg",
    "released": "2020-05-11",
    "rating": 3.97,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 16813,
    "name": "Mount & Blade",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/ee7/ee7e7b6d5dbf0adf7705eff6912a3e60.jpg",
    "released": "2008-09-16",
    "rating": 3.87,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 9811,
    "name": "DayZ",
    "platforms": "PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/7d7/7d7c89793578f721df56022c6cf53bb0.jpg",
    "released": "2013-12-16",
    "rating": 3.06,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Massively Multiplayer"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 16161,
    "name": "Hard Reset Extended Edition",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/e29/e29ce2369152515e9ae20c6e217cbe81.jpg",
    "released": "2012-07-12",
    "rating": 3.2,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 23479,
    "name": "Observеr",
    "platforms": "Nintendo Switch, Linux, macOS, PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/0f4/0f4f4764555736eebfeb01571e44e99e.jpg",
    "released": "2017-08-14",
    "rating": 3.93,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 22397,
    "name": "Command & Conquer: Red Alert 3 - Uprising",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/4a1/4a1e460708b6c2114e4735e04dc58510.jpg",
    "released": "2009-03-12",
    "rating": 3.58,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 13925,
    "name": "Prince of Persia: Warrior Within",
    "platforms": "GameCube, Xbox, PC, iOS, PlayStation 2, PlayStation 3",
    "image": "https://media.rawg.io/media/games/459/459ac8745027643ed7338516c0025cf7.jpg",
    "released": "2004-11-30",
    "rating": 4.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 10342,
    "name": "RaceRoom Racing Experience",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/c02/c02c64324edc2045ea1fc0601cdaaa0c.jpg",
    "released": "2013-02-12",
    "rating": 2.31,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Racing"
        }
    ]
},
{
    "id": 3189,
    "name": "Grow Home",
    "platforms": "PlayStation 4, Linux, PC",
    "image": "https://media.rawg.io/media/screenshots/dc2/dc2814dc50d61be1ea4fcd5d3c03ddb6.jpg",
    "released": "2014-02-04",
    "rating": 3.47,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2894,
    "name": "Invisible, Inc.",
    "platforms": "iOS, Nintendo Switch, PlayStation 4, Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/849/849c187c0b5d4cd1ee3283148f7e4cdb.jpg",
    "released": "2015-05-12",
    "rating": 3.53,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 441,
    "name": "Deus Ex: The Fall",
    "platforms": "iOS, Android, PC",
    "image": "https://media.rawg.io/media/games/24d/24df5a8d70c80c15dade8304dd4370a5.jpg",
    "released": "2013-07-10",
    "rating": 2.68,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 791638,
    "name": "MultiVersus",
    "platforms": "PC, Xbox Series S/X, Xbox One, PlayStation 4, PlayStation 5",
    "image": "https://media.rawg.io/media/games/d2e/d2ee15fda80056efef174da4ca5ae54f.jpg",
    "released": "2022-07-26",
    "rating": 3.24,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 19655,
    "name": "Guacamelee! Gold Edition",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/2eb/2eb8f1b4787c3beaa568bc52c0580cba.jpg",
    "released": "2013-08-08",
    "rating": 3.86,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 28126,
    "name": "FIFA 18",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/cb4/cb487ab3c54b81cb685388bab42ec848.jpeg",
    "released": "2017-09-26",
    "rating": 3.37,
    "created": false,
    "genres": [
        {
            "name": "Sports"
        }
    ]
},
{
    "id": 51687,
    "name": "Two Point Hospital",
    "platforms": "PlayStation 4, Nintendo Switch, PC, iOS, Xbox One, macOS",
    "image": "https://media.rawg.io/media/games/2b9/2b90a0b4cafe05eefaa2698d6613dc7f.jpg",
    "released": "2018-08-29",
    "rating": 3.77,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 17844,
    "name": "Divine Divinity",
    "platforms": "PC, macOS",
    "image": "https://media.rawg.io/media/games/7d8/7d89761cadbd930a2e3cf7ff2679882f.jpg",
    "released": "2002-09-13",
    "rating": 3.51,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 10724,
    "name": "Crossout",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/7a6/7a6f90e85a2e264c3b440bb4787cf378.jpg",
    "released": "2017-05-30",
    "rating": 2.82,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Racing"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 271,
    "name": "Kingdom: New Lands",
    "platforms": "Android, PlayStation 4, Nintendo Switch, Linux, macOS, PC, iOS, Xbox One",
    "image": "https://media.rawg.io/media/games/5f6/5f691054fdbec8705491fa1f54a06b8a.jpg",
    "released": "2015-10-21",
    "rating": 3.86,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 12980,
    "name": "Endless Legend",
    "platforms": "PC, macOS",
    "image": "https://media.rawg.io/media/screenshots/0a6/0a62ee096ef629d5c3c44cc4bcc8cbb5.jpg",
    "released": "2014-09-18",
    "rating": 3.73,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 3848,
    "name": "Killzone Shadow Fall",
    "platforms": "PlayStation 4",
    "image": "https://media.rawg.io/media/games/dfa/dfa0906773ebb8a50d15548ac5b8ee5e.jpg",
    "released": "2013-11-15",
    "rating": 3.17,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 19908,
    "name": "LEGO Batman 2 DC Super Heroes",
    "platforms": "Nintendo 3DS, PlayStation 3, PS Vita, Android, Nintendo DS, Wii U, Xbox One, iOS, PC, macOS, Wii, Xbox 360",
    "image": "https://media.rawg.io/media/games/3c1/3c139f67a73f0bf5ce0d8f2abf83c0d0.jpg",
    "released": "2012-06-19",
    "rating": 3.68,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Family"
        }
    ]
},
{
    "id": 372576,
    "name": "Lost Ark",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/d9e/d9e868382c48ec98c9b23b8fbe6a2045.jpg",
    "released": "2022-02-11",
    "rating": 3.27,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 17545,
    "name": "Assassin’s Creed Rogue",
    "platforms": "Xbox 360, PlayStation 3, Nintendo Switch, Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/3c4/3c4a44ed99c87c56e0cdcfaaaf5c3628.jpg",
    "released": "2014-11-11",
    "rating": 3.72,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 897,
    "name": "Superbrothers: Sword & Sworcery",
    "platforms": "Nintendo Switch, Android, iOS, PC, Linux, macOS",
    "image": "https://media.rawg.io/media/screenshots/db5/db5ab0d41a2a57274902d32ea8e6f1ec.jpg",
    "released": "2011-03-24",
    "rating": 3.51,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 58385,
    "name": "Rage 2",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/662/66261db966238da20c306c4b78ae4603.jpg",
    "released": "2019-05-14",
    "rating": 3.25,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Racing"
        }
    ]
},
{
    "id": 13199,
    "name": "Graveyard Keeper",
    "platforms": "Android, PlayStation 4, Linux, macOS, PC, iOS, Xbox One, Nintendo Switch",
    "image": "https://media.rawg.io/media/screenshots/066/066eb1b7a3f332b8089645fbf8c3ebdc.jpg",
    "released": "2018-08-14",
    "rating": 3.71,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 22846,
    "name": "Thief 3: Deadly Shadows",
    "platforms": "Xbox, PC",
    "image": "https://media.rawg.io/media/games/f89/f899f0bdeb6bcd7419d9b2281a693ad8.jpg",
    "released": "2004-05-24",
    "rating": 3.72,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 9911,
    "name": "Dungeon Defenders II",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/screenshots/ef8/ef8201008461d1c102b6c11c4114d08e.jpg",
    "released": "2014-12-05",
    "rating": 2.95,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 5488,
    "name": "Crash Bandicoot",
    "platforms": "PlayStation",
    "image": "https://media.rawg.io/media/games/bc1/bc141ec3f4ca8d1d14f0ab4e4f9e654d.jpg",
    "released": "1996-09-09",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 19635,
    "name": "Fable: The Lost Chapters",
    "platforms": "Xbox, PC, macOS",
    "image": "https://media.rawg.io/media/games/aa2/aa25254dbfa5b2073595bf69d8c8bac4.jpg",
    "released": "2005-09-01",
    "rating": 4.43,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 876,
    "name": "Legend of Grimrock",
    "platforms": "PC, Linux, iOS, macOS",
    "image": "https://media.rawg.io/media/games/237/237711d80fbd1658218271e362d85287.jpg",
    "released": "2012-04-10",
    "rating": 3.8,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 10309,
    "name": "Endless Space 2",
    "platforms": "PC, macOS",
    "image": "https://media.rawg.io/media/games/72b/72bf31a664fcbcb079baf4ef8221f308.jpg",
    "released": "2016-10-06",
    "rating": 3.88,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 14156,
    "name": "ENSLAVED: Odyssey to the West Premium Edition",
    "platforms": "PlayStation 3, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/780/7804a1ce365e2c30d51007b910b14acf.jpg",
    "released": "2013-10-24",
    "rating": 3.99,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 11164,
    "name": "A Hat in Time",
    "platforms": "Xbox One, PlayStation 4, PlayStation 3, Nintendo Switch, PC, macOS",
    "image": "https://media.rawg.io/media/games/594/5949baae74fe9e399adbce0c44e28783.jpg",
    "released": "2017-10-05",
    "rating": 4.34,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 46508,
    "name": "Return Of The Obra Dinn",
    "platforms": "Nintendo Switch, PlayStation 4, Xbox One, PC, macOS",
    "image": "https://media.rawg.io/media/games/052/052f9afc7aaeea3e2c5d46eafa92c64e.jpg",
    "released": "2018-10-17",
    "rating": 4.35,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 50214,
    "name": "Ring of Elysium",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/41b/41b396a56bcce431dfe1beb920e9faf5.jpg",
    "released": "2018-09-19",
    "rating": 2.96,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 10355,
    "name": "Fractured Space",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/e10/e10258b8e132c269dd2b0faeba0d8057.jpg",
    "released": "2016-09-22",
    "rating": 2.4,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 27,
    "name": "Pyre",
    "platforms": "PlayStation 4, macOS, Linux, PC",
    "image": "https://media.rawg.io/media/games/e63/e635b8c7fbe3ffd69ad6c1c586cd250e.jpg",
    "released": "2017-07-25",
    "rating": 4.17,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 46597,
    "name": "Aim Lab",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/998/998c7f9d1b765975cd6222f4e44503e5.jpg",
    "released": "2018-02-07",
    "rating": 3.08,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 295019,
    "name": "GreedFall",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/c68/c6842e7b1e4a8c5fdff79504b7284e49.jpg",
    "released": "2019-09-10",
    "rating": 3.36,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 5524,
    "name": "Brink",
    "platforms": "PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/55c/55c7e7a972d361db3677c1dd10a5558d.jpg",
    "released": "2011-05-09",
    "rating": 2.7,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 10023,
    "name": "Geneshift",
    "platforms": "PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/80a/80a0d07be6109fde6b92ac5283e7056c.jpg",
    "released": "2017-04-27",
    "rating": 2.15,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 58389,
    "name": "Call of Duty: Black Ops 4",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/450/4501d8493e6ed172bd4982a16b56e580.jpg",
    "released": "2018-10-12",
    "rating": 3.31,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 28580,
    "name": "Dragon Age 2",
    "platforms": "PlayStation 3, Xbox One, PC, macOS, Xbox 360",
    "image": "https://media.rawg.io/media/games/974/974d08635981db7677630327ce1fe4bb.jpg",
    "released": "2011-03-08",
    "rating": 3.84,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 58835,
    "name": "Yakuza Kiwami 2",
    "platforms": "PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/b32/b32735e3f7d95959cc39265f555f2aa8.jpg",
    "released": "2017-12-07",
    "rating": 4.37,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 17676,
    "name": "Doom 3: BFG Edition",
    "platforms": "PlayStation 3, PlayStation 4, Xbox 360, PC, Android",
    "image": "https://media.rawg.io/media/games/645/64578c2a6daa30995692525172fd13ef.jpg",
    "released": "2012-10-16",
    "rating": 3.79,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 17736,
    "name": "Two Worlds Epic Edition",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/6e5/6e504144ccbbc5c194c7f6cd6f544aaf.jpg",
    "released": "2009-04-30",
    "rating": 2.85,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 13780,
    "name": "Sid Meier's Civilization IV",
    "platforms": "PC, macOS",
    "image": "https://media.rawg.io/media/screenshots/85c/85c91c5064d2cdd56a949c8008868318.jpg",
    "released": "2005-10-25",
    "rating": 4.1,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 3751,
    "name": "Dark Souls II",
    "platforms": "PlayStation 4, Xbox One, PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/651/6512783a214618584d144d5d852ba595.jpg",
    "released": "2014-03-11",
    "rating": 4.05,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 1249,
    "name": "FIFA 17",
    "platforms": "PlayStation 3, Xbox 360, PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/1a7/1a77ee44d7e91949aa794597d32c2e28.jpg",
    "released": "2016-09-27",
    "rating": 3.32,
    "created": false,
    "genres": [
        {
            "name": "Sports"
        }
    ]
},
{
    "id": 10665,
    "name": "POSTAL",
    "platforms": "PC, Linux, macOS",
    "image": "https://media.rawg.io/media/screenshots/7ab/7ab68441389f60523d2f6cb75c6393f2.jpg",
    "released": "1997-11-14",
    "rating": 2.95,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 5544,
    "name": "DiRT 3",
    "platforms": "PlayStation 3, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/640/6409857596fe6553d3bb5af9a17f6160.jpg",
    "released": "2011-05-24",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Sports"
        },
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 17818,
    "name": "Overlord: Raising Hell",
    "platforms": "Xbox 360, PlayStation 3, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/f8c/f8c181db845de856e519558451b8e481.jpg",
    "released": "2008-02-15",
    "rating": 3.69,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 10390,
    "name": "Pixel Puzzles Ultimate",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/ab0/ab012b3fe017ab1dad34c7936200d24c.jpg",
    "released": "2016-09-09",
    "rating": 2,
    "created": false,
    "genres": [
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 10545,
    "name": "Warface: Ice Breaker",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/12a/12ab4965b0b871b61d5e8568df27be46.jpg",
    "released": "2014-07-01",
    "rating": 2.45,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 1726,
    "name": "10 Second Ninja X",
    "platforms": "Xbox One, PlayStation 4, PS Vita, PC",
    "image": "https://media.rawg.io/media/screenshots/085/0851d86b5e8250ee33af5ab56544989b.jpg",
    "released": "2016-07-19",
    "rating": 2.53,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 58758,
    "name": "Dying Light 2 Stay Human",
    "platforms": "PC, Xbox One, Xbox Series S/X, PlayStation 4, Nintendo Switch, PlayStation 5",
    "image": "https://media.rawg.io/media/games/73d/73db43df633477d4604c7248292f34b2.jpg",
    "released": "2022-02-04",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 11460,
    "name": "Astroneer",
    "platforms": "Nintendo Switch, PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/02f/02f775a806c6cd64c28d5aeca928dc76.jpg",
    "released": "2019-02-06",
    "rating": 3.76,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 441738,
    "name": "The Ascent",
    "platforms": "PlayStation 5, Xbox Series S/X, PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/3f4/3f43f03406a5ea087352bf32d60e3a0a.jpg",
    "released": "2021-07-29",
    "rating": 3.31,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 9997,
    "name": "Arma 3",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/7a2/7a2d3c0883f01e43bff02f0d124d4642.jpg",
    "released": "2013-09-12",
    "rating": 3.82,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 12108,
    "name": "DISTRAINT",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/b4c/b4c8dd2f639bf2e8b84b2f1c365406e0.jpg",
    "released": "2015-10-21",
    "rating": 3.06,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 10206,
    "name": "Ashes of the Singularity: Escalation",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/651/651f338d5c03b8c650543629ce486a52.jpg",
    "released": "2016-11-09",
    "rating": 2.42,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 12850,
    "name": "Cave Story+",
    "platforms": "Nintendo Switch, Nintendo 3DS, Nintendo DS, Wii, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/4f2/4f2246a85225b7a91d63990fe540b7c4.jpg",
    "released": "2010-03-22",
    "rating": 3.95,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 10039,
    "name": "Tyranny",
    "platforms": "PC, Linux, macOS",
    "image": "https://media.rawg.io/media/games/c81/c8120bf5faed7309c9812553da54da80.jpg",
    "released": "2016-11-10",
    "rating": 4.08,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 18852,
    "name": "Poker Night at the Inventory",
    "platforms": "PC, macOS",
    "image": "https://media.rawg.io/media/screenshots/1be/1be2141edae05d4ba9858182b081e604.jpg",
    "released": "2010-11-22",
    "rating": 3.39,
    "created": false,
    "genres": [
        {
            "name": "Sports"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Card"
        }
    ]
},
{
    "id": 392019,
    "name": "Half-Life: Alyx",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/855/8552c056d729f34c951c30f3cfef9da8.jpg",
    "released": "2020-03-23",
    "rating": 4.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 2119,
    "name": "Tricky Towers",
    "platforms": "Xbox One, Android, iOS, PC, macOS, Linux, PlayStation 4, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/df4/df464501be72da0052bc5e4c8896a0aa.jpg",
    "released": "2016-06-20",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Arcade"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 14364,
    "name": "Jagged Alliance 1: Gold Edition",
    "platforms": "macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/c98/c98c214657f024107f438d0eaa501d9f.jpg",
    "released": "1994-04-02",
    "rating": 2.54,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 58890,
    "name": "Need For Speed: Most Wanted",
    "platforms": "GameCube, Xbox, PlayStation 3, PlayStation 2, PC, Xbox 360, PSP",
    "image": "https://media.rawg.io/media/games/41b/41ba37b6a3e706dc1d27d49afbf0f72a.jpg",
    "released": "2005-11-15",
    "rating": 4.45,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 29658,
    "name": "The Elder Scrolls: Arena",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/ef8/ef823f3c46ff1e00803888b5c4476e10.jpg",
    "released": "1994-02-28",
    "rating": 2.83,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 17473,
    "name": "Quake Live",
    "platforms": "Web, PC",
    "image": "https://media.rawg.io/media/screenshots/bb7/bb71799efe642c69f28c92c835a1257d.jpg",
    "released": "2014-09-17",
    "rating": 3.56,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 1073,
    "name": "Keep Talking and Nobody Explodes",
    "platforms": "Xbox One, PC, macOS, Nintendo Switch, PlayStation 4, Android",
    "image": "https://media.rawg.io/media/games/e88/e88ccd83bb2d69ad04d18b06c5e0df3d.jpg",
    "released": "2015-10-08",
    "rating": 4.19,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 339958,
    "name": "Persona 5 Royal",
    "platforms": "Xbox Series S/X, PC, PlayStation 5, Nintendo Switch, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg",
    "released": "2020-03-31",
    "rating": 4.75,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3134,
    "name": "Wasteland 2: Director's Cut",
    "platforms": "Nintendo Switch, PlayStation 4, Linux, PC, macOS, Xbox One",
    "image": "https://media.rawg.io/media/games/4f4/4f4c0c0d2127fd67b1e894204029468b.jpg",
    "released": "2015-10-13",
    "rating": 3.64,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 5995,
    "name": "Little Inferno",
    "platforms": "Wii U, Nintendo Switch, Linux, macOS, Android, iOS, PC",
    "image": "https://media.rawg.io/media/games/d79/d794c9198ec994cc12ede5ebd4672623.jpg",
    "released": "2012-11-17",
    "rating": 3.8,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 4962,
    "name": "Shank",
    "platforms": "PlayStation 3, Xbox 360, PC, Linux, macOS",
    "image": "https://media.rawg.io/media/games/c80/c8050355992f431d0efd10a19630b6ea.jpg",
    "released": "2010-08-10",
    "rating": 3.69,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4473,
    "name": "Shank 2",
    "platforms": "PlayStation 3, Xbox 360, Linux, PC, macOS",
    "image": "https://media.rawg.io/media/games/a6e/a6e83e0f449883b6df57ae52b6805756.jpg",
    "released": "2012-02-07",
    "rating": 3.56,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 11223,
    "name": "Absolver",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/684/684ecc08397479de72c5f89ef6f16f4f.jpg",
    "released": "2017-08-28",
    "rating": 2.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Fighting"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4480,
    "name": "Mini Ninjas",
    "platforms": "Wii, PC, PlayStation 3, Nintendo DS, macOS, Xbox 360",
    "image": "https://media.rawg.io/media/screenshots/157/1571cdfb52888191eabaf53c2b897240.jpg",
    "released": "2009-09-08",
    "rating": 3.5,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Family"
        }
    ]
},
{
    "id": 12045,
    "name": "Two Worlds II",
    "platforms": "Xbox 360, macOS, PC",
    "image": "https://media.rawg.io/media/games/db7/db7ede330a09ddeb5c899900f70b1896.jpg",
    "released": "2010-11-09",
    "rating": 3.01,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 5403,
    "name": "Flower",
    "platforms": "PlayStation 4, PlayStation 3, iOS, PC, PS Vita",
    "image": "https://media.rawg.io/media/screenshots/4bc/4bc75319da5601d337452ca0462255ab.jpg",
    "released": "2009-02-12",
    "rating": 3.98,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Family"
        }
    ]
},
{
    "id": 4108,
    "name": "Demon's Souls",
    "platforms": "PlayStation 3",
    "image": "https://media.rawg.io/media/games/ac3/ac3a89bfbda76082402e42b933c5825a.jpg",
    "released": "2009-02-05",
    "rating": 4.29,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 58394,
    "name": "Horizon Chase Turbo",
    "platforms": "PlayStation 4, Nintendo Switch, PC, macOS, Linux, Xbox One",
    "image": "https://media.rawg.io/media/games/d16/d160819f22de73d29813f7b6dad815f9.jpg",
    "released": "2018-05-15",
    "rating": 3.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Racing"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 486,
    "name": "Tales of Berseria",
    "platforms": "PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/158/15880530ce424311f264671e4b0611ee.jpg",
    "released": "2016-08-18",
    "rating": 3.96,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 11975,
    "name": "STAR WARS Jedi Knight: Dark Forces II",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/841/841b827812b7e2bf8b00cd200f35406d.jpg",
    "released": "1997-09-30",
    "rating": 3.73,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 1854,
    "name": "Costume Quest",
    "platforms": "PlayStation 3, Xbox 360, Xbox One, Linux, macOS, PC, iOS",
    "image": "https://media.rawg.io/media/screenshots/2b4/2b47c5edfeea2970eeb44d1f8cbd562d.jpg",
    "released": "2010-10-19",
    "rating": 3.43,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Family"
        }
    ]
},
{
    "id": 442857,
    "name": "Tomb Raider: Definitive Edition",
    "platforms": "PlayStation 4, Xbox One, macOS, Xbox 360, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/screenshots/474/47478ccb205e4e0d0117986107625599.jpg",
    "released": "2014-01-31",
    "rating": 4.06,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 58637,
    "name": "Code Vein",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/16a/16a81cc458b0acb6ed2bcfd2a10f1527.jpg",
    "released": "2019-09-26",
    "rating": 3.57,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 18712,
    "name": "Dear Esther",
    "platforms": "iOS, PC, macOS",
    "image": "https://media.rawg.io/media/games/bc6/bc6b163403504d0c041253749e233ed3.jpg",
    "released": "2012-02-14",
    "rating": 3.46,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 16723,
    "name": "Gunpoint",
    "platforms": "macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/a12/a12eecf2feb2df9ceedd6e36ba758245.jpg",
    "released": "2013-06-03",
    "rating": 4.03,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 51324,
    "name": "Kingdom Hearts III",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/968/968e6210715fd61237139e3caa193be0.jpg",
    "released": "2019-01-29",
    "rating": 3.85,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 257192,
    "name": "Psychonauts 2",
    "platforms": "PlayStation 4, Xbox One, Xbox Series S/X, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/c3c/c3c536cc4d32623ba928020dfd39a648.jpg",
    "released": "2021-08-24",
    "rating": 4.36,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 3933,
    "name": "Tom Clancy’s Splinter Cell Blacklist",
    "platforms": "PC, Wii U, Xbox 360, PlayStation 3, Xbox One",
    "image": "https://media.rawg.io/media/games/de9/de93cd3e51d2c57e33bbf7dade34f25a.jpg",
    "released": "2013-08-20",
    "rating": 4.07,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 464,
    "name": "Baldur's Gate: Enhanced Edition",
    "platforms": "iOS, Xbox One, Nintendo Switch, PlayStation 4, Android, Linux, PC, macOS",
    "image": "https://media.rawg.io/media/games/313/3136687fb0b34490d082b7272a0868e2.jpg",
    "released": "2012-11-28",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 10028,
    "name": "Space Engineers",
    "platforms": "Xbox One, PC",
    "image": "https://media.rawg.io/media/screenshots/ac7/ac707457a89f1f7d15ef5934a26ea21a.jpg",
    "released": "2013-10-23",
    "rating": 3.53,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 5390,
    "name": "Burnout Paradise",
    "platforms": "PlayStation 3, Nintendo Switch, PC, Xbox 360, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/788/788b80cbc8c39167f7ed6dd89fd398dc.jpg",
    "released": "2008-01-22",
    "rating": 4.09,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 10037,
    "name": "Europa Universalis IV",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/eff/eff7b309ae98c32b48f22a10e7523106.jpg",
    "released": "2013-08-12",
    "rating": 4.24,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 19628,
    "name": "FlatOut 2",
    "platforms": "PC, Xbox, Linux, PlayStation 2",
    "image": "https://media.rawg.io/media/games/d3e/d3e2a3bc62a62bc9b70d6ebe0f54f040.jpg",
    "released": "2006-06-29",
    "rating": 4.31,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 490,
    "name": "The Turing Test",
    "platforms": "Nintendo Switch, PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/b90/b90af2554ee2660b2bf79afdabeea30b.jpg",
    "released": "2016-08-30",
    "rating": 3.58,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 54629,
    "name": "Crazy Taxi (1999)",
    "platforms": "PlayStation 3, PlayStation 2, Xbox 360, PC, iOS, Android, GameCube, Dreamcast",
    "image": "https://media.rawg.io/media/games/d9b/d9bbb8e69f53c4c42b8ff928cb581548.jpg",
    "released": "1999-01-01",
    "rating": 3.84,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 397473,
    "name": "Back 4 Blood",
    "platforms": "Xbox Series S/X, Xbox One, PlayStation 4, PlayStation 5, PC",
    "image": "https://media.rawg.io/media/games/4fe/4feffcec6315c5f5a96442a8444431ca.jpg",
    "released": "2021-10-07",
    "rating": 3.2,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 59637,
    "name": "Untitled Goose Game",
    "platforms": "Nintendo Switch, Xbox One, PlayStation 4, PC, macOS",
    "image": "https://media.rawg.io/media/games/199/1996ab6448cadb2ce4bea31536466333.jpg",
    "released": "2019-09-20",
    "rating": 4.04,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Family"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 9828,
    "name": "Natural Selection 2",
    "platforms": "Linux, PC",
    "image": "https://media.rawg.io/media/games/a2e/a2efc7b5801500e8d5223c3953ef9b0f.jpg",
    "released": "2012-10-30",
    "rating": 3.21,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 41498,
    "name": "Need for Speed: Most Wanted - A Criterion Game",
    "platforms": "Android, PS Vita, Wii U, PC, iOS, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/228/228e21229213695c8f6697a6b3387a2b.jpg",
    "released": "2012-10-30",
    "rating": 3.34,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 28632,
    "name": "Gears of War 3",
    "platforms": "Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/422/4228842dcfaef2a83bdb14c2a3ca2165.jpg",
    "released": "2011-09-20",
    "rating": 4.2,
    "created": false,
    "genres": [
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 12761,
    "name": "Warhammer 40,000: Dawn of War II: Retribution",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/ae4/ae4a8087739c065fb6ddda1308820ece.jpg",
    "released": "2011-02-28",
    "rating": 3.81,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 12073,
    "name": "The Secret of Monkey Island: Special Edition",
    "platforms": "Xbox 360, macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/656/65654f69256420c0126eb506c1a72d7f.jpg",
    "released": "2009-07-15",
    "rating": 4.19,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Family"
        }
    ]
},
{
    "id": 4185,
    "name": "Kingdoms of Amalur: Reckoning",
    "platforms": "PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/bad/bad95aa1f2edbbad2ae93981291b6560.jpg",
    "released": "2012-02-07",
    "rating": 3.61,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 17169,
    "name": "The Ship: Murder Party",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/a46/a46801970d3b30d7fc63d6db72b3dc0e.jpg",
    "released": "2006-07-11",
    "rating": 2.97,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 8278,
    "name": "Gears of War 4",
    "platforms": "Xbox One, PC, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/079/079175933a50b2bf202edd6aa17be19c.jpg",
    "released": "2016-10-11",
    "rating": 3.9,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 14331,
    "name": "Call of Duty 2",
    "platforms": "macOS, PC, Xbox 360, iOS, Xbox One",
    "image": "https://media.rawg.io/media/games/50c/50c69996b917ae50d8d319f6ce9bed37.jpg",
    "released": "2005-10-25",
    "rating": 4.21,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 3277,
    "name": "Quiplash",
    "platforms": "Xbox One, PlayStation 4, PlayStation 3, macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/680/6805c301d72c53ee9f4e8b8ed2d4558a.jpg",
    "released": "2015-06-30",
    "rating": 3.59,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 54,
    "name": "Punch Club",
    "platforms": "Xbox One, Linux, Android, iOS, PC, macOS, Nintendo Switch, Nintendo 3DS, PlayStation 4",
    "image": "https://media.rawg.io/media/screenshots/ad1/ad15e71b0a3d431ce0a59bcd783efa88.jpg",
    "released": "2016-01-07",
    "rating": 3.64,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Fighting"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4192,
    "name": "Pid",
    "platforms": "Xbox 360, PlayStation 3, macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/d93/d93e93149d781484bfc9c6ae7b48e1d4.jpg",
    "released": "2012-09-05",
    "rating": 2.63,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 637477,
    "name": "Splitgate",
    "platforms": "Xbox One, PC, PlayStation 4, Xbox Series S/X, PlayStation 5",
    "image": "https://media.rawg.io/media/games/278/27873379c6d27b968babbeefa9b44da3.jpg",
    "released": "2019-05-24",
    "rating": 3.45,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 43734,
    "name": "State of Decay 2",
    "platforms": "PC, Xbox One",
    "image": "https://media.rawg.io/media/games/20a/20a1892c6dbe9b820a2f0d79f9ed47a2.jpg",
    "released": "2018-05-22",
    "rating": 3.28,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 12130,
    "name": "RimWorld",
    "platforms": "macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/4d8/4d85fbe90066fdbef295a618640c4a82.jpg",
    "released": "2016-07-15",
    "rating": 4.35,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 11729,
    "name": "Gang Beasts",
    "platforms": "PlayStation 4, Xbox One, PC, Linux, macOS",
    "image": "https://media.rawg.io/media/screenshots/160/160f894fc774f4cc51a99f435abadd4e.jpg",
    "released": "2014-08-29",
    "rating": 3.87,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 49225,
    "name": "DRAGON BALL FighterZ",
    "platforms": "PC, Xbox One, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/96b/96b9420bbd4bd1b79bf2a67f7779733a.jpg",
    "released": "2018-01-25",
    "rating": 4.1,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 13926,
    "name": "Prince of Persia: The Two Thrones",
    "platforms": "Wii, PlayStation 3, PC, PlayStation 2, PSP, Classic Macintosh, Xbox, GameCube",
    "image": "https://media.rawg.io/media/games/dd7/dd72d8a527cd9245c7eb7cd05aa53efa.jpg",
    "released": "2005-12-01",
    "rating": 4.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 19151,
    "name": "The Ship: Single Player",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/506/5063f823789894332d3e0d16703854d1.jpg",
    "released": "2006-11-20",
    "rating": 2.67,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 45763,
    "name": "Bomber Crew",
    "platforms": "Xbox One, Nintendo Switch, PlayStation 4, macOS, Linux, PC",
    "image": "https://media.rawg.io/media/screenshots/9d1/9d12fe709e4bc87166b1cdb2101fa91b.jpg",
    "released": "2017-10-19",
    "rating": 3.11,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 3513,
    "name": "LEGO Batman 3: Beyond Gotham",
    "platforms": "PlayStation 4, PlayStation 3, Wii U, Nintendo 3DS, macOS, PC, iOS, Xbox One, Android, PS Vita",
    "image": "https://media.rawg.io/media/screenshots/a8c/a8cd58ee985ab6d509370bddada91dbd.jpeg",
    "released": "2014-11-10",
    "rating": 3.6,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Family"
        }
    ]
},
{
    "id": 46560,
    "name": "Stick Fight: The Game",
    "platforms": "macOS, Android, iOS, PC",
    "image": "https://media.rawg.io/media/screenshots/424/4246b028e70891609700f1566db8b8dd.jpg",
    "released": "2017-09-28",
    "rating": 3.86,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 1488,
    "name": "METAL SLUG 3",
    "platforms": "Android, PlayStation 4, PlayStation 3, Neo Geo, Wii, PC, iOS, Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/screenshots/df1/df1a27300bf1e4696734b437d81b0fcf.jpg",
    "released": "2000-03-23",
    "rating": 3.97,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 10108,
    "name": "Portal Knights",
    "platforms": "PlayStation 4, Xbox One, iOS, PC, Nintendo Switch, Android",
    "image": "https://media.rawg.io/media/screenshots/999/9996d2692128d717880d2be9f9351765.jpg",
    "released": "2016-02-25",
    "rating": 2.99,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 29180,
    "name": "Ni no Kuni II: Revenant Kingdom",
    "platforms": "Nintendo Switch, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/b92/b924c4beeed6617201d5d91511cfcf8e.jpg",
    "released": "2018-03-23",
    "rating": 3.89,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 12022,
    "name": "King's Bounty: The Legend",
    "platforms": "PC, macOS",
    "image": "https://media.rawg.io/media/games/1aa/1aa082df2dbde6940e9ccbee4aac0feb.jpg",
    "released": "2008-04-24",
    "rating": 4.18,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 39277,
    "name": "Aliens vs. Predator",
    "platforms": "Xbox 360, Xbox One, PC, PlayStation 3",
    "image": "https://media.rawg.io/media/games/fbc/fbced95c523be0444ce6d2fa83b1afc0.jpg",
    "released": "2010-02-16",
    "rating": 3.55,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 58921,
    "name": "Mutant Year Zero: Road to Eden",
    "platforms": "Xbox One, PlayStation 4, Nintendo Switch, PC",
    "image": "https://media.rawg.io/media/games/fcc/fccc143096ea188a7fb7daab52d26e35.jpg",
    "released": "2018-12-03",
    "rating": 3.74,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 17945,
    "name": "Knights and Merchants",
    "platforms": "PC, Linux, macOS",
    "image": "https://media.rawg.io/media/screenshots/b15/b15b55537e4fbaefe6e4b60ae4ce8d0d.jpg",
    "released": "2013-02-01",
    "rating": 2.81,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 39707,
    "name": "God of War II",
    "platforms": "PlayStation 2, PS Vita, PlayStation 3",
    "image": "https://media.rawg.io/media/games/615/615e9fc0a325e0d87b84dad029b8b7b9.jpg",
    "released": "2007-03-13",
    "rating": 4.41,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 16779,
    "name": "BIT.TRIP RUNNER",
    "platforms": "Wii, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/72f/72f1e176e1affdf7a6c0e49e167080d7.jpg",
    "released": "2010-05-16",
    "rating": 3.32,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 16014,
    "name": "Planetary Annihilation",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/20e/20ec6440ede691638c42684fd6551156.jpg",
    "released": "2014-09-05",
    "rating": 2.88,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 13466,
    "name": "Devil May Cry 4: Special Edition",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/8e7/8e79a8e6bd4e71c8ce0006544a17aaf2.jpg",
    "released": "2015-06-23",
    "rating": 4.21,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 440079,
    "name": "DiRT 5",
    "platforms": "PlayStation 5, PlayStation 4, PC, Xbox One, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/9c7/9c7dd09596246993169b356d7c1facf0.jpg",
    "released": "2020-11-06",
    "rating": 3.23,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 284664,
    "name": "Streets of Rage 4",
    "platforms": "iOS, PlayStation 4, Nintendo Switch, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/e56/e56d74b0a1072662eea7c1a194363884.jpg",
    "released": "2020-04-30",
    "rating": 4.06,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Fighting"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4057,
    "name": "Defiance",
    "platforms": "PlayStation 3, PC, Xbox 360",
    "image": "https://media.rawg.io/media/games/f63/f63bb0916d982394dfedc1900375c88e.jpg",
    "released": "2013-04-02",
    "rating": 2.21,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 59611,
    "name": "Pathfinder: Kingmaker",
    "platforms": "Linux, macOS, PC, PlayStation 4, Xbox One",
    "image": "https://media.rawg.io/media/games/4e6/4e6c6259ad910c31261d90b42c45e046.jpg",
    "released": "2018-09-25",
    "rating": 3.91,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 5426,
    "name": "Crash Bandicoot 3: Warped",
    "platforms": "PlayStation",
    "image": "https://media.rawg.io/media/games/837/837a609b0584db5d03534c8e767861b1.jpg",
    "released": "1998-10-31",
    "rating": 4.33,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 9644,
    "name": "Planet Coaster",
    "platforms": "Xbox One, PlayStation 4, Xbox Series S/X, PlayStation 5, PC",
    "image": "https://media.rawg.io/media/games/aea/aea1581227fa10cbc006a6594845a01e.jpg",
    "released": "2016-11-17",
    "rating": 3.81,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 798,
    "name": "Downwell",
    "platforms": "PS Vita, PlayStation 4, Nintendo Switch, iOS, Android, PC",
    "image": "https://media.rawg.io/media/screenshots/e9c/e9ce72a3e2c1ac344e8876d6bb0dcf50.jpeg",
    "released": "2015-10-14",
    "rating": 3.85,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 3987,
    "name": "Giana Sisters: Twisted Dreams",
    "platforms": "PlayStation 3, Xbox 360, Wii U, PC",
    "image": "https://media.rawg.io/media/screenshots/e5b/e5be8c031ac0dbd85bf058947d480375.jpg",
    "released": "2012-10-22",
    "rating": 3.09,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 343597,
    "name": "Sonic Adventure 2",
    "platforms": "Xbox 360, Xbox One, PC, PlayStation 3, GameCube, Dreamcast",
    "image": "https://media.rawg.io/media/games/4f5/4f57124f7c0285150626cd1411c45b6e.jpg",
    "released": "2001-06-18",
    "rating": 3.97,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 320,
    "name": "Night in the Woods",
    "platforms": "Linux, macOS, PC, iOS, Nintendo Switch, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/b0a/b0a370527fea0e824225269d4a8797db.jpg",
    "released": "2017-02-21",
    "rating": 4.23,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 58085,
    "name": "Jurassic World Evolution",
    "platforms": "Xbox One, PlayStation 4, Nintendo Switch, PC",
    "image": "https://media.rawg.io/media/games/ea6/ea6d85ea0239943ff31a86097fb3fbc3.jpg",
    "released": "2018-06-12",
    "rating": 3.62,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 3580,
    "name": "FIFA 15",
    "platforms": "PS Vita, PlayStation 4, Nintendo 3DS, Xbox One, Xbox 360, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/games/be5/be51faf9bec778b4ea1b06e9b084792c.jpg",
    "released": "2014-09-20",
    "rating": 3.37,
    "created": false,
    "genres": [
        {
            "name": "Sports"
        }
    ]
},
{
    "id": 1545,
    "name": "Hand of Fate",
    "platforms": "Xbox One, PlayStation 4, PC, Linux, macOS",
    "image": "https://media.rawg.io/media/screenshots/b9c/b9cb8c4e69907a68e33a4ebb2580f82a.jpg",
    "released": "2015-02-16",
    "rating": 3.7,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19962,
    "name": "No Time To Explain Remastered",
    "platforms": "macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/d5c/d5c4c4af04545fe14604b2807d83a927.jpg",
    "released": "2015-07-17",
    "rating": 2.76,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 18708,
    "name": "Pathologic Classic HD",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/55d/55dd16f70b86426359334a785a1888e6.jpg",
    "released": "2015-10-28",
    "rating": 3.87,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 5689,
    "name": "The Sims 3",
    "platforms": "PlayStation 3, PC, iOS, Nintendo DS, Nintendo 3DS, Xbox 360",
    "image": "https://media.rawg.io/media/games/369/36914d895c20e35f273286145c267764.jpg",
    "released": "2009-06-02",
    "rating": 4.02,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        }
    ]
},
{
    "id": 22734,
    "name": "Beneath a Steel Sky",
    "platforms": "Commodore / Amiga, iOS, Classic Macintosh, PC, Linux, macOS",
    "image": "https://media.rawg.io/media/screenshots/f6b/f6b3338889ec877c9d3d89fc4f665152.jpg",
    "released": "1994-04-10",
    "rating": 2.73,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 28300,
    "name": "NiGHTS into dreams...",
    "platforms": "PlayStation 3, Xbox 360, SEGA Saturn, PC",
    "image": "https://media.rawg.io/media/screenshots/fe0/fe0ccce931cdb5aaff9500a331e5c2eb.jpg",
    "released": "1995-02-11",
    "rating": 3.04,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 12048,
    "name": "ORION: Prelude",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/428/4286a224467623d23706dacb569a2ea1.jpg",
    "released": "2012-05-04",
    "rating": 2.26,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 38965,
    "name": "Star Wars: The Old Republic",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/baa/baac774072d6319a166a453b8b3506df.jpg",
    "released": "2011-12-20",
    "rating": 3.86,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 14625,
    "name": "Medieval II: Total War",
    "platforms": "PC, Linux, macOS",
    "image": "https://media.rawg.io/media/games/72f/72feeda516c44390c7ab218b8b328fda.jpg",
    "released": "2007-11-27",
    "rating": 4.09,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 40265,
    "name": "Dungeon Siege 3",
    "platforms": "PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/a8d/a8d08a70ce7a4f3263bedf5d764fc538.jpg",
    "released": "2011-05-31",
    "rating": 3.11,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 19640,
    "name": "Assassin's Creed: Director's Cut Edition",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/4b1/4b11e8fc75e054939c29e7319a643600.jpg",
    "released": "2008-04-09",
    "rating": 3.92,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 42060,
    "name": "Wreckfest",
    "platforms": "PC, PlayStation 4, iOS, Xbox One, Android, Xbox Series S/X, PlayStation 5, Nintendo Switch",
    "image": "https://media.rawg.io/media/games/ff2/ff2315fb895502efcbd40f1e5f37c170.jpg",
    "released": "2018-06-13",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 35613,
    "name": "Sonic Adventure DX: Director's Cut",
    "platforms": "Xbox 360, PC, PlayStation 3, GameCube",
    "image": "https://media.rawg.io/media/games/74c/74c68a8de3d4983ff932dd456ac2dc66.jpg",
    "released": "2003-06-06",
    "rating": 3.92,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 384567,
    "name": "Crusader Kings III",
    "platforms": "macOS, PlayStation 5, Xbox Series S/X, PC, Linux",
    "image": "https://media.rawg.io/media/games/77e/77e8a4a7b377a081aabd0dbf688417e1.jpg",
    "released": "2020-09-01",
    "rating": 4.32,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 52827,
    "name": "Crash Bandicoot 2: Cortex Strikes Back",
    "platforms": "PlayStation",
    "image": "https://media.rawg.io/media/games/a84/a84dc4980063ce934705ea5d8d241939.jpg",
    "released": "1997-11-01",
    "rating": 4.27,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 11839,
    "name": "Pathologic 2",
    "platforms": "PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/c4a/c4a948e3d1ab733f21641844c6df3e43.jpg",
    "released": "2019-05-22",
    "rating": 4.05,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 15857,
    "name": "STAR WARS Empire at War - Gold Pack",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/6c3/6c3cea606428109394ef18fbf7f3d8b5.jpg",
    "released": "2010-05-25",
    "rating": 3.78,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 63904,
    "name": "Steel Rats",
    "platforms": "Xbox One, PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/43c/43cfdb7fdc48d99b4a4c2525b411daf8.jpg",
    "released": "2018-11-06",
    "rating": 2.66,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Racing"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 479694,
    "name": "Inscryption",
    "platforms": "PlayStation 5, Linux, PC, Nintendo Switch, PlayStation 4, macOS",
    "image": "https://media.rawg.io/media/games/73e/73efc5c0ac6f354271dae610276f617c.jpg",
    "released": "2021-10-19",
    "rating": 4.41,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 12344,
    "name": "Counter-Strike Nexon: Zombies",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/5ff/5ff7e855a4d0f4de1bfa515cd0e19071.jpg",
    "released": "2014-09-23",
    "rating": 2.13,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 3226,
    "name": "Prototype 2",
    "platforms": "Xbox One, PC, Xbox 360, PlayStation 3, PlayStation 4",
    "image": "https://media.rawg.io/media/games/445/44507fdd60a8ec02b1c3c64a293ca754.jpg",
    "released": "2012-04-24",
    "rating": 3.78,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 2784,
    "name": "The Bridge",
    "platforms": "Nintendo Switch, Xbox One, Xbox 360, PS Vita, PlayStation 4, PlayStation 3, Wii U, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/5a3/5a36930b16d9b1949d8c8c92b5a28d89.jpg",
    "released": "2013-02-22",
    "rating": 3.27,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 2592,
    "name": "DuckTales: Remastered",
    "platforms": "PlayStation 3, Xbox 360, Wii U, iOS, Android, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/36d/36dbcc51d45ae1105c7cb744a5fa6e2a.jpg",
    "released": "2013-08-13",
    "rating": 3.78,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 9768,
    "name": "GameGuru",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/f24/f24122a8e3d30ec3e99472e3e826d0cb.jpg",
    "released": "2015-05-19",
    "rating": 1.88,
    "created": false,
    "genres": [
        {
            "name": "Educational"
        }
    ]
},
{
    "id": 17013,
    "name": "Lucius",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/679/67900b47263413bd65fc0032ad966e0b.jpg",
    "released": "2012-10-25",
    "rating": 3.12,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 10241,
    "name": "Thief II: The Metal Age",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/f04/f04030abc433df09da4bb70a74bdf339.jpg",
    "released": "2000-02-29",
    "rating": 4.08,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 558986,
    "name": "Capcom Arcade Stadium",
    "platforms": "PlayStation 4, Nintendo Switch, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/2a5/2a5072e5b28e1653a10e4f931f1991af.jpg",
    "released": "2021-02-17",
    "rating": 2.72,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 43078,
    "name": "Portal Stories: Mel",
    "platforms": "macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/9e5/9e5b25a276f9248c36c0fd78288738ce.jpg",
    "released": "2015-06-25",
    "rating": 4,
    "created": false,
    "genres": [
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 15422,
    "name": "Serious Sam Classics: Revolution",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/017/017e1f2c593b4f1a036f96b9ccdbd500.jpg",
    "released": "2014-04-30",
    "rating": 3.54,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 4125,
    "name": "Crysis 3",
    "platforms": "Xbox One, Xbox 360, PC, PlayStation 3",
    "image": "https://media.rawg.io/media/games/1c6/1c61ef4ce04bce876841118580b03ccb.jpg",
    "released": "2013-02-19",
    "rating": 3.69,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 447,
    "name": "LEGO Harry Potter: Years 1-4",
    "platforms": "Wii, Nintendo DS, PSP, PlayStation 3, PS Vita, PC, Xbox 360, macOS, Android",
    "image": "https://media.rawg.io/media/games/694/6940fa3fbe0d836e4a272c468e65e480.jpg",
    "released": "2010-06-03",
    "rating": 3.79,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Family"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 44029,
    "name": "My Time At Portia",
    "platforms": "Xbox One, iOS, PC, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/176/1765390b699b432edc3a208d544c6ba0.jpg",
    "released": "2019-01-14",
    "rating": 3.51,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Casual"
        }
    ]
},
{
    "id": 28608,
    "name": "Fable II",
    "platforms": "Xbox 360, Xbox One",
    "image": "https://media.rawg.io/media/games/cec/cec82d526f9d056d426c985562963eec.jpg",
    "released": "2008-10-21",
    "rating": 4.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3489,
    "name": "The Crew",
    "platforms": "PlayStation 4, Xbox One, PC, Xbox 360",
    "image": "https://media.rawg.io/media/screenshots/b79/b797325a14fc62444ca6032d59aa1c75.jpg",
    "released": "2014-12-01",
    "rating": 3.31,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Racing"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 295020,
    "name": "Wasteland 3",
    "platforms": "Xbox One, macOS, PC, Linux, PlayStation 4",
    "image": "https://media.rawg.io/media/games/370/370a4cbcfa75e5238ee8f74bf323694d.jpg",
    "released": "2020-08-28",
    "rating": 4.06,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 8444,
    "name": "Halo 5: Guardians",
    "platforms": "Xbox One",
    "image": "https://media.rawg.io/media/games/77f/77fb27e5b7ec6984f43a70a289376e6a.jpg",
    "released": "2015-10-27",
    "rating": 3.75,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 327219,
    "name": "Superliminal",
    "platforms": "PlayStation 4, macOS, PC, Linux, Nintendo Switch, Xbox One",
    "image": "https://media.rawg.io/media/screenshots/eca/eca35ae10f6e934ca79b7dc17ff71b23.jpg",
    "released": "2019-11-12",
    "rating": 4.18,
    "created": false,
    "genres": [
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 4489,
    "name": "Crysis 2",
    "platforms": "Xbox 360, PlayStation 3, PC",
    "image": "https://media.rawg.io/media/games/899/899ce332d07c3fc1dd924bf828d1f484.jpg",
    "released": "2011-03-22",
    "rating": 3.84,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 2828,
    "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/b1f/b1f0b19226228555d8b93b2f42b22349.jpg",
    "released": "2016-02-04",
    "rating": 4,
    "created": false,
    "genres": [
        {
            "name": "Fighting"
        }
    ]
},
{
    "id": 10606,
    "name": "Mirage: Arcane Warfare",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/bb6/bb69662c8fb265e790d07039dd30066c.jpg",
    "released": "2017-05-23",
    "rating": 2.18,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 548036,
    "name": "Loop Hero",
    "platforms": "Nintendo Switch, Linux, macOS, PC, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/cef/cef4c326dd57a8f39d696379eaa84411.jpg",
    "released": "2021-03-04",
    "rating": 4.07,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 28156,
    "name": "Tacoma",
    "platforms": "PlayStation 4, Xbox One, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/256/256a3188c2907eff4d7721ce044df5d7.jpg",
    "released": "2017-08-01",
    "rating": 3.67,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 311,
    "name": "Sunless Sea",
    "platforms": "Linux, iOS, PC, macOS",
    "image": "https://media.rawg.io/media/games/c32/c323f9c17ac95c363772bb9ff3693dc6.jpg",
    "released": "2015-02-05",
    "rating": 3.71,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 19409,
    "name": "Operation Flashpoint: Dragon Rising",
    "platforms": "Xbox One, PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/games/cd8/cd89ed5083a6cca9c2768ebca7a73b2d.jpg",
    "released": "2009-10-06",
    "rating": 2.75,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 10379,
    "name": "Fishing Planet",
    "platforms": "iOS, PlayStation 4, Linux, macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/28b/28bec9939d190ba619cad0693ebe304d.jpg",
    "released": "2015-08-11",
    "rating": 2.63,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 12323,
    "name": "Shadowrun: Hong Kong - Extended Edition",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/56c/56cdc9d4e29255e4a0d90cb2bce2dc14.jpg",
    "released": "2015-08-20",
    "rating": 3.81,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 366885,
    "name": "Dragon Age: Origins - Ultimate Edition",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/add/add07a75a3f1e479b55dbe920d9fb13d.jpg",
    "released": "2010-10-29",
    "rating": 4.43,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 10180,
    "name": "Wizard of Legend",
    "platforms": "Xbox One, PC, macOS, Linux, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/screenshots/cc3/cc3d477d3a03f9aa037194cb564f027f.jpg",
    "released": "2018-05-15",
    "rating": 3.52,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2944,
    "name": "Trine 3: The Artifacts of Power",
    "platforms": "Nintendo Switch, PlayStation 4, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/0fb/0fbd117f2417089f4527eeb05f7dca87.jpg",
    "released": "2015-04-20",
    "rating": 3.6,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2822,
    "name": "Lovers in a Dangerous Spacetime",
    "platforms": "Xbox One, Nintendo Switch, PlayStation 4, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/b47/b47da312357f548ceeb3a4d00021cd1d.jpg",
    "released": "2015-09-08",
    "rating": 3.58,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 570074,
    "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge",
    "platforms": "PlayStation 5, Android, Linux, PC, PlayStation 4, Nintendo Switch, iOS, Xbox One, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/aac/aac683272f862540a18625f02f5f3679.jpg",
    "released": "2022-06-16",
    "rating": 4.1,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Fighting"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 10715,
    "name": "Hearts of Iron IV",
    "platforms": "macOS, PC, Linux",
    "image": "https://media.rawg.io/media/games/2b6/2b6e8f8efaa2499e9a3a09dc76028d44.jpg",
    "released": "2016-06-06",
    "rating": 4.08,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 17010,
    "name": "Kentucky Route Zero",
    "platforms": "iOS, Nintendo Switch, PlayStation 4, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/177/1775aacedb915b0e0880476530dc87b4.jpg",
    "released": "2020-01-28",
    "rating": 3.98,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 3336,
    "name": "Project CARS",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/games/05a/05a6ca96307b25626d1af5607a8c96a8.jpg",
    "released": "2015-05-06",
    "rating": 3.57,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Sports"
        },
        {
            "name": "Racing"
        }
    ]
},
{
    "id": 4240,
    "name": "Worms Revolution",
    "platforms": "PC, PlayStation 3, Xbox 360",
    "image": "https://media.rawg.io/media/screenshots/197/197780c33719b9b2e4d3619a527f3c21.jpg",
    "released": "2012-10-09",
    "rating": 3.56,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 2925,
    "name": "Rebel Galaxy",
    "platforms": "macOS, PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/59f/59f8ff56cde745ceb56029f229ad4e43.jpg",
    "released": "2015-10-19",
    "rating": 2.96,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 445430,
    "name": "Mafia III: Definitive Edition",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/944/94497cb4d179b652ba8da2a52ab55a3e.jpg",
    "released": "2020-05-19",
    "rating": 3.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 15713,
    "name": "Chaos on Deponia",
    "platforms": "PlayStation 4, Nintendo Switch, Linux, macOS, PC, iOS, Xbox One",
    "image": "https://media.rawg.io/media/games/6bc/6bc337100b6f6b7afb638bc0806c0b6d.jpg",
    "released": "2012-10-12",
    "rating": 4.06,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 274767,
    "name": "Far Cry New Dawn",
    "platforms": "PlayStation 4, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/6d2/6d27cf9c22f2b28cf3ae706464d138f9.jpg",
    "released": "2019-02-15",
    "rating": 3.36,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 14230,
    "name": "Sang-Froid - Tales of Werewolves",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/6ec/6ec7245a6a69fa45d49cfc8a37787865.jpg",
    "released": "2013-04-05",
    "rating": 2.21,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 455532,
    "name": "Star Wars: Squadrons",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/b19/b191ff2b8ccb646d1d2d9297ed5c7e89.jpg",
    "released": "2020-10-02",
    "rating": 3.18,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Simulation"
        }
    ]
},
{
    "id": 16344,
    "name": "Sanctum",
    "platforms": "PC, macOS",
    "image": "https://media.rawg.io/media/screenshots/486/4867553de7f93ab572102c47570a9050.jpg",
    "released": "2011-04-15",
    "rating": 3.28,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 17087,
    "name": "The Tiny Bang Story",
    "platforms": "Nintendo Switch, iOS, Android, macOS, Linux, PC",
    "image": "https://media.rawg.io/media/screenshots/fb9/fb912e77c4295b0c47af632cd1b48522.jpeg",
    "released": "2011-04-21",
    "rating": 3.11,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Family"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 9880,
    "name": "Oxygen Not Included",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/000/0002b2686a50b30762fb6040a8d9187f.jpg",
    "released": "2017-05-18",
    "rating": 4.16,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 5877,
    "name": "Back to the Future: The Game",
    "platforms": "Wii, Xbox 360, PlayStation 3, PlayStation 4, iOS, macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/25d/25df88db8714961a93e5ae1ecaa50e45.jpg",
    "released": "2010-12-21",
    "rating": 3.38,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 19503,
    "name": "Unreal Tournament 3 Black",
    "platforms": "PlayStation 3, Xbox 360, PC",
    "image": "https://media.rawg.io/media/games/9e3/9e3f90e9d012bbf3f6bfa91be67d7572.jpg",
    "released": "2007-12-11",
    "rating": 3.79,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 3223,
    "name": "Everybody's Gone to the Rapture",
    "platforms": "PC, PlayStation 4",
    "image": "https://media.rawg.io/media/games/c64/c6463b164c3eab0c96e1fad70c8793e5.jpg",
    "released": "2015-08-11",
    "rating": 3.34,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 427,
    "name": "Plants vs. Zombies",
    "platforms": "PlayStation 3, Xbox 360, Android, Xbox One, Nintendo DS, iOS, PC",
    "image": "https://media.rawg.io/media/screenshots/590/590aa45fbab8d43b57f93dd60027af7f.jpg",
    "released": "2009-05-05",
    "rating": 4.23,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 58732,
    "name": "FIFA 19",
    "platforms": "PlayStation 4, PlayStation 3, Xbox 360, Nintendo Switch, PC, Xbox One",
    "image": "https://media.rawg.io/media/games/b59/b59560a7277b16b53e4786b4abe45baa.jpg",
    "released": "2018-09-28",
    "rating": 3.32,
    "created": false,
    "genres": [
        {
            "name": "Simulation"
        },
        {
            "name": "Sports"
        }
    ]
},
{
    "id": 3179,
    "name": "LittleBigPlanet",
    "platforms": "PlayStation 3",
    "image": "https://media.rawg.io/media/games/c32/c32fd6c512c48b3e2f10686a6e06690d.jpg",
    "released": "2008-10-27",
    "rating": 4.08,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 10416,
    "name": "Darkwood",
    "platforms": "Xbox One, Nintendo Switch, PlayStation 4, PC, macOS, Linux",
    "image": "https://media.rawg.io/media/games/341/3415bdd0f19cb034574e559f2ff163ab.jpg",
    "released": "2017-08-17",
    "rating": 3.76,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2666,
    "name": "Mini Metro",
    "platforms": "Nintendo Switch, iOS, PC, macOS, Linux, PlayStation 4, Android",
    "image": "https://media.rawg.io/media/games/c49/c4983df94a8a8167d652b812de742da8.jpg",
    "released": "2015-11-05",
    "rating": 4.1,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 17092,
    "name": "Receiver",
    "platforms": "Linux, macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/666/666bb577dbf6c3b012c67e2782d79b27.jpg",
    "released": "2012-06-18",
    "rating": 2.84,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 324992,
    "name": "Watch Dogs: Legion",
    "platforms": "PC, Xbox One, Xbox Series S/X, PlayStation 4, PlayStation 5",
    "image": "https://media.rawg.io/media/games/415/41563ce6cb061a210160687a4e5d39f6.jpg",
    "released": "2020-10-29",
    "rating": 3.09,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 54492,
    "name": "Quake II",
    "platforms": "Xbox 360, Linux, Commodore / Amiga, PC, PlayStation, Classic Macintosh, Nintendo 64",
    "image": "https://media.rawg.io/media/games/0c5/0c5fcdf04048200da14b90e0e6cfaf6b.jpg",
    "released": "1997-12-09",
    "rating": 4.17,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 4724,
    "name": "Puzzle Agent",
    "platforms": "PlayStation 3, iOS, macOS, PC",
    "image": "https://media.rawg.io/media/screenshots/332/3327c47e0abc76882fc96c434d2e06bd.jpg",
    "released": "2010-06-30",
    "rating": 3.17,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 52330,
    "name": "The Council",
    "platforms": "Xbox One, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/123/123e035701a975f5d96c233f4048eed2.jpg",
    "released": "2018-03-12",
    "rating": 3.66,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 19166,
    "name": "System Shock (1994)",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/202/20253cf9a7bd4f3ddb26bf68cf9117ba.jpg",
    "released": "1994-09-23",
    "rating": 3.99,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 46301,
    "name": "Raft",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/6b2/6b253d2d39fc05b2368e5e78bb4abffc.jpg",
    "released": "2022-01-20",
    "rating": 3.91,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        }
    ]
},
{
    "id": 19369,
    "name": "Call of Duty",
    "platforms": "macOS, PC, Xbox 360, PlayStation 3",
    "image": "https://media.rawg.io/media/games/9c5/9c5bc0b6e67102bc96dcf1ba41509e42.jpg",
    "released": "2003-10-29",
    "rating": 4.19,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 19615,
    "name": "Crysis Warhead",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/games/e34/e344d4b45f3d393d44cbed087279379c.jpg",
    "released": "2008-09-16",
    "rating": 3.81,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        }
    ]
},
{
    "id": 12319,
    "name": "DEFCON",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/screenshots/d6a/d6a68393fa48d1f2f2ae8e3406fc5ff9.jpg",
    "released": "2006-09-28",
    "rating": 3.02,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 59695,
    "name": "Cuisine Royale",
    "platforms": "PlayStation 4, Xbox One, PC",
    "image": "https://media.rawg.io/media/screenshots/319/319262248c762977f7f8d0557988b9e6.jpg",
    "released": "2018-06-15",
    "rating": 2.62,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Massively Multiplayer"
        }
    ]
},
{
    "id": 1116,
    "name": "Reus",
    "platforms": "Xbox One, Linux, macOS, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/screenshots/825/8259c21da3dcb834daec3675a4dcebd3.jpg",
    "released": "2013-05-15",
    "rating": 3.08,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 327227,
    "name": "Outriders",
    "platforms": "Xbox One, PlayStation 4, Xbox Series S/X, PlayStation 5, PC",
    "image": "https://media.rawg.io/media/games/faa/faa6a4a7a2e57faf2960329630aee211.jpg",
    "released": "2021-04-01",
    "rating": 3.38,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Shooter"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3437,
    "name": "Apotheon",
    "platforms": "PlayStation 4, macOS, PC, Linux",
    "image": "https://media.rawg.io/media/screenshots/e49/e497cca0e21625b8e36614399f0b970e.jpg",
    "released": "2015-02-02",
    "rating": 3.19,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 52215,
    "name": "Burnout Paradise Remastered",
    "platforms": "Nintendo Switch, PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/cb6/cb63a33e16f90fa6f008cc093239dad3.jpg",
    "released": "2018-03-16",
    "rating": 3.88,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        }
    ]
},
{
    "id": 19237,
    "name": "Warlock - Master of the Arcane",
    "platforms": "PC",
    "image": "https://media.rawg.io/media/screenshots/d3f/d3f90322b1e759f2cb071d64a9731406.jpg",
    "released": "2012-05-08",
    "rating": 2.65,
    "created": false,
    "genres": [
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 16351,
    "name": "Realm of the Mad God",
    "platforms": "macOS, Web, PC",
    "image": "https://media.rawg.io/media/screenshots/c20/c201f665fc1d461719833ec1320935d6.jpg",
    "released": "2012-02-20",
    "rating": 3.14,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Massively Multiplayer"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 12760,
    "name": "Warhammer 40,000: Dawn of War II Chaos Rising",
    "platforms": "PC, macOS, Linux",
    "image": "https://media.rawg.io/media/screenshots/6f3/6f3855fc42784a7da7bdc4cf325b0d30.jpg",
    "released": "2010-03-11",
    "rating": 3.94,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        }
    ]
},
{
    "id": 326236,
    "name": "Spiritfarer",
    "platforms": "Xbox One, PC, macOS, Linux, Nintendo Switch, PlayStation 4",
    "image": "https://media.rawg.io/media/games/727/727f889060e688bbdcba7b2a5d26a603.jpg",
    "released": "2020-08-18",
    "rating": 4.13,
    "created": false,
    "genres": [
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 2234,
    "name": "The Banner Saga 2",
    "platforms": "iOS, Nintendo Switch, Xbox One, PlayStation 4, PC, macOS, Android",
    "image": "https://media.rawg.io/media/games/3af/3af9976b83868a1042eac59531a1a986.jpg",
    "released": "2016-04-18",
    "rating": 4.19,
    "created": false,
    "genres": [
        {
            "name": "RPG"
        },
        {
            "name": "Strategy"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 35086,
    "name": "KAO the Kangaroo: Round 2",
    "platforms": "PC, Xbox, GameCube, PlayStation 2",
    "image": "https://media.rawg.io/media/screenshots/afc/afc146e4644b7a15282e4ad4af9b2444.jpg",
    "released": "2005-04-15",
    "rating": 2.61,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Racing"
        },
        {
            "name": "Arcade"
        },
        {
            "name": "Casual"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 19436,
    "name": "Beyond Divinity",
    "platforms": "PC, macOS",
    "image": "https://media.rawg.io/media/games/f69/f69d51606fb5d72b462c75e8de9383f5.jpg",
    "released": "2004-04-26",
    "rating": 3.2,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 45109,
    "name": "Maneater",
    "platforms": "PlayStation 5, PlayStation 4, PC, Xbox One, Nintendo Switch, Xbox Series S/X",
    "image": "https://media.rawg.io/media/games/895/8951013b8ace2d652727df2f9023cbb8.jpg",
    "released": "2020-05-22",
    "rating": 3.42,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 47,
    "name": "Yooka-Laylee",
    "platforms": "Xbox One, PlayStation 4, Nintendo Switch, Linux, macOS, PC",
    "image": "https://media.rawg.io/media/games/213/2138ba3c97d02b581ca0b50805fcd49c.jpg",
    "released": "2017-03-31",
    "rating": 3.04,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
},
{
    "id": 10302,
    "name": "Dead Island Definitive Edition",
    "platforms": "Xbox One, PC, Linux, PlayStation 4",
    "image": "https://media.rawg.io/media/games/dc9/dc9bfcddb7d0abc2d689193b3f43893a.jpg",
    "released": "2016-05-31",
    "rating": 3.54,
    "created": false,
    "genres": [
        {
            "name": "Action"
        }
    ]
},
{
    "id": 58831,
    "name": "Call of Cthulhu",
    "platforms": "Nintendo Switch, PC, Xbox One, PlayStation 4",
    "image": "https://media.rawg.io/media/games/1b8/1b8a3ed646ccea6375bd4d4b7dd67aa4.jpg",
    "released": "2018-10-30",
    "rating": 3.52,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "RPG"
        }
    ]
},
{
    "id": 3325,
    "name": "Octodad: Dadliest Catch",
    "platforms": "Xbox One, Wii U, PS Vita, PlayStation 4, Nintendo Switch, Android, macOS, PC, Linux, iOS",
    "image": "https://media.rawg.io/media/games/41e/41e431c48530788de5e8bddf8dcfba32.jpg",
    "released": "2014-01-29",
    "rating": 3.72,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Simulation"
        },
        {
            "name": "Family"
        },
        {
            "name": "Indie"
        }
    ]
},
{
    "id": 24,
    "name": "Gran Turismo Sport",
    "platforms": "PlayStation 4",
    "image": "https://media.rawg.io/media/games/e98/e989eb7026737bbb7bd386c1d16a5735.jpg",
    "released": "2017-10-17",
    "rating": 3.92,
    "created": false,
    "genres": [
        {
            "name": "Racing"
        }
    ]
},
{
    "id": 1720,
    "name": "Q.U.B.E: Director's Cut",
    "platforms": "Xbox One, Wii U, PlayStation 3, PlayStation 4, Linux, macOS, Android, PC",
    "image": "https://media.rawg.io/media/screenshots/0cf/0cfe4ec4dcffb8fcac999d7176c69176.jpg",
    "released": "2014-05-21",
    "rating": 3.2,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Puzzle"
        }
    ]
},
{
    "id": 10088,
    "name": "Owlboy",
    "platforms": "Xbox One, Linux, Nintendo Switch, PlayStation 4, PC",
    "image": "https://media.rawg.io/media/games/0fc/0fc933e3dfbbf4306840ef429d73fa9a.jpg",
    "released": "2016-10-31",
    "rating": 3.82,
    "created": false,
    "genres": [
        {
            "name": "Action"
        },
        {
            "name": "Adventure"
        },
        {
            "name": "Indie"
        },
        {
            "name": "Platformer"
        }
    ]
}]

module.exports = { cleanGamesApi, cleanGamesDb, include, cleanGame }