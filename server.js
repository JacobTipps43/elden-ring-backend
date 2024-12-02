const express = require('express');
const cors = require('cors');
const app = express();
const Joi = require('joi');
app.use(cors());
app.use(express.static("public"));
const multer = require('multer');

const storageWeps = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/Weapons");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

const uploadWeps = multer({ storage: storageWeps });

const storageTali = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/talismans");
        },
        filename: (req, file, cb) => {
        cb(null, file.originalname);
        }
});

const uploadTalis = multer({ storage: storageTali });

const strengthWeapons = [
    {
        "_id" : 1,
        "name": "Greatsword",
        "img": "images/Weapons/Greatsword.png",
        "description": "The Greatsword in Elden Ring is a massive, heavy weapon, dealing devastating damage with wide swings. When paired with the Lion’s Claw Ash of War, it becomes even more powerful, allowing for a fierce, leaping attack that crushes enemies with overwhelming force."
    },
    {
        "_id" : 2,
        "name": "Grafted Blade Greatsword",
        "img": "images/Weapons/Grafted.png",
        "description": "The Grafted Blade Greatsword is a colossal sword forged from countless smaller blades, symbolizing power through conquest."
    },
    {
        "_id" : 3,
        "name": "Prelate's Inferno Crozier",
        "img": "images/Weapons/Prelates.png",
        "description": "The Prelate's Inferno Crozier is a colossal, flame-scorched hammer, delivering devastating fiery blows."
    },
    {
        "_id" : 4,
        "name": "Greatsword Of Solitude",
        "img": "images/Weapons/Solitude.png",
        "description": "The Greatsword of Solitude is a massive, somber blade, dealing heavy, slow strikes."
    },
    {
        "_id" : 5,
        "name": "Rusted Anchor",
        "img": "images/Weapons/Anchor.png",
        "description": "The Rusted Anchor is a heavy weapon, delivering powerful, sweeping strikes."
    }
]

const dexterityWeapons = [
    {
        "_id" : 1,
        "name": "Uchigatana",
        "img": "images/Weapons/Uchigatana.png",
        "description": "The Uchigatana is a sleek katana, known for its quick strikes and impressive bleed buildup."
    },
    {
        "_id" : 2,
        "name": "Nagakiba",
        "img": "images/Weapons/Nagakiba.png",
        "description": "The Nagakiba is a long, elegant katana with extended reach."
    },
    {
        "_id" : 3,
        "name": "The Dancing Blade of Ranah",
        "img": "images/Weapons/Rahan.png",
        "description": "The Dancing Blade of Ranah is an elegant sword, delivering fluid, graceful attacks."
    },
    {
        "_id" : 4,
        "name": "Hand of Malenia",
        "img": "images/Weapons/HandMalenia.png",
        "description": "The Hand of Malenia is a graceful, curved blade designed for swift, precise attacks."
    },
    {
        "_id" : 5,
        "name": "Rivers of Blood",
        "img": "images/Weapons/Rivers.png",
        "description": "The Rivers of Blood is a deadly katana, known for its exceptional bleed buildup."
    }
]

const mageWeapons = [
    {
        "_id" : 1,
        "name": "Dark Moon Greatsword",
        "img": "images/Weapons/DarkMoon.png",
        "description": "The Dark Moon Greatsword is a powerful, elegant weapon, known for its magical prowess."
    },
    {
        "_id" : 2,
        "name": "Fallingstar Beast Jaw",
        "img": "images/Weapons/FallingStar.png",
        "description": "The Fallingstar Beast Jaw is a massive, monstrous weapon crafted from the jaw of a fallen Star Beast."
    },
    {
        "_id" : 3,
        "name": "Azur's Glintstone Staff",
        "img": "images/Weapons/Azur_Staff.png",
        "description": "Azur's Glintstone Staff is a powerful catalyst, known for its high sorcery scaling."
    },
    {
        "_id" : 4,
        "name": "Rotten Crystal Sword",
        "img": "images/Weapons/RottenSword.png",
        "description": "The Rotten Crystal Sword is a unique weapon that combines beauty and decay."
    },
    {
        "_id" : 5,
        "name": "Scepter Of The All-Knowing",
        "img": "images/Weapons/AllKnowing.png",
        "description": "The Scepter of the All-Knowing is a powerful staff, embodying the essence of wisdom and arcane knowledge."
    }
]

const arcaneWeapons = [
    {
        "_id" : 1,
        "name": "Rivers Of Blood",
        "img": "images/Weapons/Rivers.png",
        "description": "The Rivers of Blood is a deadly katana, known for its exceptional bleed buildup."
    },
    {
        "_id" : 2,
        "name": "Serpent Bow",
        "img": "images/Weapons/SerpentBow.png",
        "description": "The Serpent Bow is a sleek, elegant bow, known for its rapid-fire capabilities."
    },
    {
        "_id" : 3,
        "name": "Morgott's Cursed Sword",
        "img": "images/Weapons/MorgotsSword.png",
        "description": "Morgott's Cursed Sword is a fearsome weapon, characterized by its imposing design."
    },
    {
        "_id" : 4,
        "name": "Mohgwyn's Sacred Spear",
        "img": "images/Weapons/Sacred_Spear.png",
        "description": "Mohgwyn's Sacred Spear is a powerful weapon, featuring a striking design that reflects its dark heritage."
    },
    {
        "_id" : 5,
        "name": "Bloody Helice",
        "img": "images/Weapons/Helice.png",
        "description": "Bloody Helice is a unique weapon, known for its swift, graceful attacks and distinctive design."
    }
]

const faithWeapons = [
    {
        "_id" : 1,
        "name": "Blasphemous Blade",
        "img": "images/Weapons/Blasphemous_Blade.png",
        "description": "Considered the best weapon in the entire game, the Blasphemous Blade is a powerful weapon with a striking design."
    },
    {
        "_id" : 2,
        "name": "Godslayer's Greatsword",
        "img": "images/Weapons/Godslayer_Greatsword.png",
        "description": "The Godslayer's Greatsword is an imposing weapon that exudes dark elegance."
    },
    {
        "_id" : 3,
        "name": "Winged Scythe",
        "img": "images/Weapons/Winged_Scythe.png",
        "description": "The Winged Scythe is a striking weapon with a unique design that combines elegance and lethality."
    },
    {
        "_id" : 4,
        "name": "Maliketh's Black Blade",
        "img": "images/Weapons/Maliketh_Black_Blade.png",
        "description": "Maliketh's Black Blade is a formidable weapon that embodies dark elegance and lethal precision."
    },
    {
        "_id" : 5,
        "name": "Sacred Relic Sword",
        "img": "images/Weapons/Sacred_Relic_Sword.png",
        "description": "The Sacred Relic Sword is a majestic weapon that exudes divine power."
    }
]

const strengthTalismans = [
    {
        "_id" : 1,
        "name": "Erdtree’s Favor",
        "img": "images/talismans/Erdtree_Favor.png",
        "description": "Erdtree’s Favor is not only favored by Bleed players in Elden Ring."
    },
    {
        "_id" : 2,
        "name": "Great-Jar’s Arsenal",
        "img": "images/talismans/Great-Jar_Arsenal.png",
        "description": "Equipment load is a crucial factor in building a strength character."
    },
    {
        "_id" : 3,
        "name": "Claw Talisman",
        "img": "images/talismans/Claw_Talisman.png",
        "description": "Using jump attacks with your strength weapon is the most effective way to maximize damage."
    }
]

const dexterityTalismans = [
    {
        "_id" : 1,
        "name": "Prosthesis-Wearer Heirloom",
        "img": "images/talismans/Prosthesis-Wearer_Heirloom.png",
        "description": "The Prosthesis-Wearer Heirloom is a valuable talisman in Elden Ring that enhances dexterity by 5 levels."
    },
    {
        "_id" : 2,
        "name": "Twinblade Talisman",
        "img": "images/talismans/Twinblade_Talisman.png",
        "description": "The Twinblade Talisman belongs to the same series as the Claw Talisman."
    },
    {
        "_id" : 3,
        "name": "Millicent's Prosthesis",
        "img": "images/talismans/Millicents_Prosthesis.png",
        "description": "Millicent's Prosthesis talisman offers an effect similar to the Rotten Winged Sword Insignia."
    }
]

const mageTalismans = [
    {
        "_id" : 1,
        "name": "Godfrey Icon",
        "img": "images/talismans/Godfrey_Icon.png",
        "description": "The Godfrey Icon talisman, featuring an emblem of Godfrey, boosts the power of charged spells."
    },
    {
        "_id" : 2,
        "name": "Magic Scorpion Charm",
        "img": "images/talismans/Magic_Scorpion_Charm.png",
        "description": "The Magic Scorpion Charm is part of a series of talismans that enhance damage for various elements."
    },
    {
        "_id" : 3,
        "name": "Primal Glintstone Blade",
        "img": "images/talismans/Primal_Glintstone_Blade.png",
        "description": "The Primal Glintstone Blade talisman enables players to cast spells more frequently."
    }
]

const arcaneTalismans = [
    {
        "_id" : 1,
        "name": "Lord of Blood’s Exultation",
        "img": "images/talismans/Lord_of_Blood_Exultation.png",
        "description": "Lord of Blood’s Exultation is a powerful talisman that boosts attack power by 20% when enemies are affected by blood loss."
    },
    {
        "_id" : 2,
        "name": "Shard of Alexander",
        "img": "images/talismans/Shard_of_Alexander.png",
        "description": "The Shard of Alexander enhances the power of your skills by 15%."
    },
    {
        "_id" : 3,
        "name": "Fire Scorpion Charm",
        "img": "images/talismans/Fire_Scorpion_Charm.png",
        "description": "The Fire Scorpion Charm boosts fire damage by 12%."
    }
]

const faithTalismans = [
    {
        "_id" : 1,
        "name": "Two Fingers Heirloom",
        "img": "images/talismans/Two_Fingers_Heirloom.png",
        "description": "The Two Fingers Heirloom talisman increases your faith by 5 levels."
    },
    {
        "_id" : 2,
        "name": "Marika's Soreseal",
        "img": "images/talismans/Marika_Soreseal.png",
        "description": "Marika's Soreseal enhances mind, intelligence, faith, and arcane by +5."
    },
    {
        "_id" : 3,
        "name": "Radagon's Soreseal",
        "img": "images/talismans/Radagon_Soreseal.png",
        "description": "Radagon's Soreseal boosts multiple stats by +5, though it increases damage taken by 15%."
    }
]

const strengthLocations =[
    {
        "_id" : "1",
        "name": "Greatsword",
        "img": "images/Weapons/Greatsword.png",
        "description": "Located inside a coffin carriage chest on the western side of the Caelid Region."
    },
    {
        "_id" : "2",
        "name": "Bullgoat Armor",
        "img": "images/Armor/bullgoat-set.png",
        "description": "Obtained after defeating the powerful Great Horned Tragoth in the Altus Plateau."
    },
    {
        "_id" : "3",
        "name": "Great-Jar’s Arsenal",
        "img": "images/talismans/Great-Jar_Arsenal.png",
        "description": "Obtained from the Great Jar in front of a colosseum in western Caelid's Dragonbarrow."
    }
]

const dexterityLocations =[
    {
        "_id" : "1",
        "name": "Rivers of Blood",
        "img": "images/Weapons/Rivers.png",
        "description": "Found exclusively in the hands of the invading NPC boss, Bloody Finger Okina."
    },
    {
        "_id" : "2",
        "name": "Hoslow's Set",
        "img": "images/Armor/hoslow-set.png",
        "description": "Dropped by Juno Hoslow, who is invaded after progressing through the Volcano Manor questline."
    },
    {
        "_id" : "3",
        "name": "Prosthesis-Wearer Heirloom",
        "img": "images/talismans/Prosthesis-Wearer_Heirloom.png",
        "description": "Obtained by completing Sage Gowry's questline in Caelid."
    }
]

const mageLocations =[
    {
        "_id" : "1",
        "name": "Azur's Glintstone Staff",
        "img": "images/Weapons/Azur_Staff.png",
        "description": "Located in the Academy of Raya Lucaria, on the second floor of the Church of the Cuckoo."
    },
    {
        "_id" : "2",
        "name": "Spellblade Set",
        "img": "images/Armor/spellblade-set.png",
        "description": "The set boosts sorcery, ideal for sorcerers, found in the Raya Lucaria Academy."
    },
    {
        "_id" : "3",
        "name": "Godfrey Icon",
        "img": "images/talismans/Godfrey_Icon.png",
        "description": "Obtained by defeating Godefroy the Grafted in the Golden Lineage Evergaol."
    }
]

const arcaneLocations =[
    {
        "_id" : "1",
        "name": "Mohgwyn's Sacred Spear",
        "img": "images/Weapons/Sacred_Spear.png",
        "description": "Exchanged from Finger Reader Enia for the Remembrance of the Blood Lord."
    },
    {
        "_id" : "2",
        "name": "War Surgeon Set",
        "img": "images/Armor/war_surgeon_set.png",
        "description": "Obtained by defeating the Nameless White Mask invaders in Mohgwyn Palace."
    },
    {
        "_id" : "3",
        "name": "Lord of Blood’s Exultation",
        "img": "images/talismans/Lord_of_Blood_Exultation.png",
        "description": "Acquired by defeating Esgar, Priest of Blood in the Leyndell Catacombs."
    }
]

const faithLocations =[
    {
        "_id" : "1",
        "name": "Blasphemous Blade",
        "img": "images/Weapons/Blasphemous_Blade.png",
        "description": "Exchanged with Finger Reader Enia after defeating the Shardbearer Boss, Rykard."
    },
    {
        "_id" : "2",
        "name": "Haligtree Knight Set",
        "img": "images/Armor/haligtree_knight_set.png",
        "description": "Located in the room above the Elphael Inner Wall grace site in the Haligtree."
    },
    {
        "_id" : "3",
        "name": "Radagon's Soreseal",
        "img": "images/talismans/Radagon_Soreseal.png",
        "description": "Found at Fort Faroth in Caelid's Dragonbarrow region."
    }
]

app.get('/api/Wepons/strengthWeapons', (req, res) => {
    res.json(strengthWeapons);
});

app.get('/api/Wepons/dexterityWeapons', (req, res) => {
    res.json(dexterityWeapons);
});

app.get('/api/Wepons/mageWeapons', (req, res) => {
    res.json(mageWeapons);
});

app.get('/api/Wepons/arcaneWeapons', (req, res) => {
    res.json(arcaneWeapons);
});

app.get('/api/Wepons/faithWeapons', (req, res) => {
    res.json(faithWeapons);
});

app.get('/api/talismans/strengthTalismans', (req, res) => {
    res.json(strengthTalismans);
});

app.get('/api/talismans/dexterityTalismans', (req, res) => {
    res.json(dexterityTalismans);
});

app.get('/api/talismans/mageTalismans', (req, res) => {
    res.json(mageTalismans);
});

app.get('/api/talismans/arcaneTalismans', (req, res) => {
    res.json(arcaneTalismans);
});

app.get('/api/talismans/faithTalismans', (req, res) => {
    res.json(faithTalismans);
});

app.get('/api/locations/strengthLocations', (req, res) => {
    res.json(strengthLocations);
});

app.get('/api/locations/dexterityLocations', (req, res) => {
    res.json(dexterityLocations);
});

app.get('/api/locations/mageLocations', (req, res) => {
    res.json(mageLocations);
});

app.get('/api/locations/arcaneLocations', (req, res) => {
    res.json(arcaneLocations);
});

app.get('/api/locations/faithLocations', (req, res) => {
    res.json(faithLocations);
});

app.get('/api/Weapons', (req, res) => {
    res.send(`<h1>Weapons</h1>
        <p>Strength Weapons: <a href="/api/Wepons/strengthWeapons">Strength Weapons</a></p>
        <p>Dexterity Weapons: <a href="/api/Wepons/dexterityWeapons">Dexterity Weapons</a></p>
        <p>Mage Weapons: <a href="/api/Wepons/mageWeapons">Mage Weapons</a></p>
        <p>Arcane Weapons: <a href="/api/Wepons/arcaneWeapons">Arcane Weapons</a></p>
        <p>Faith Weapons: <a href="/api/Wepons/faithWeapons">Faith Weapons</a></p>
        `);
});

app.get('/api/talismans', (req, res) => {
    res.send(`<h1>Talismans</h1>
        <p>Strength Talismans: <a href="/api/talismans/strengthTalismans">Strength Talismans</a></p>
        <p>Dexterity Talismans: <a href="/api/talismans/dexterityTalismans">Dexterity Talismans</a></p>
        <p>Mage Talismans: <a href="/api/talismans/mageTalismans">Mage Talismans</a></p>
        <p>Arcane Talismans: <a href="/api/talismans/arcaneTalismans">Arcane Talismans</a></p>
        <p>Faith Talismans: <a href="/api/talismans/faithTalismans">Faith Talismans</a></p>
        `);
});

app.get('/api/locations', (req, res) => {
    res.send(`<h1>Locations</h1>
        <p>Strength Locations: <a href="/api/locations/strengthLocations">Strength Locations</a></p>
        <p>Dexterity Locations: <a href="/api/locations/dexterityLocations">Dexterity Locations</a></p>
        <p>Mage Locations: <a href="/api/locations/mageLocations">Mage Locations</a></p>
        <p>Arcane Locations: <a href="/api/locations/arcaneLocations">Arcane Locations</a></p>
        <p>Faith Locations: <a href="/api/locations/faithLocations">Faith Locations</a></p>
        `);
});

const handleWepChange = (req, res, weaponType) => {
    console.log("Handling the request");
  
    const results = validateItem(req.body);
  
    if (results.error) {
      res.status(400).send(results.error.details[0].message);
      console.log("I have an error");
      console.log(results.error);
      return;
    }
  
    let _id;
    if (weaponType === "strength") {
        _id = strengthWeapons.length + 1;
    } else if (weaponType === "dexterity") {
        _id = dexterityWeapons.length + 1;
    } else if (weaponType === "mage") {
        _id = mageWeapons.length + 1;
    } else if (weaponType === "arcane") {
        _id = arcaneWeapons.length + 1;
    } else if (weaponType === "faith") {
        _id = faithWeapons.length + 1;
    }

    const item = {
        _id: _id,
        name: req.body.name,
        description: req.body.description,
    };
  
    if (req.file) {
      item.img = "images/Weapons/" + req.file.filename;
    }

    if (weaponType === "strength") {
        strengthWeapons.push(item);
      } else if (weaponType === "dexterity") {
        dexterityWeapons.push(item);
      } else if (weaponType === "mage") {
        mageWeapons.push(item);
      } else if (weaponType === "arcane") {
        arcaneWeapons.push(item);
      } else if (weaponType === "faith") {
        faithWeapons.push(item);
      }
  
    console.log(item);
    res.status(200).send(item);
  };

  const handleTalismanChange = (req, res, talismanType) => {
    console.log("Handling the request");
  
    const results = validateItem(req.body);
  
    if (results.error) {
      res.status(400).send(results.error.details[0].message);
      console.log("I have an error");
      console.log(results.error);
      return;
    }


    let _id;
    if (talismanType === "strength") {
        _id = strengthTalismans.length + 1;
    } else if (talismanType === "dexterity") {
        _id = dexterityTalismans.length + 1;
    } else if (talismanType === "mage") {
        _id = mageTalismans.length + 1;
    } else if (talismanType === "arcane") {
        _id = arcaneTalismans.length + 1;
    } else if (talismanType === "faith") {
        _id = faithTalismans.length + 1;
    }
  
    const item = { 
      _id: _id.toString(),
      name: req.body.name,
      description: req.body.description,
    };
  
    if (req.file) {
      item.img = "images/talismans/" + req.file.filename;
    }

    if (talismanType === "strength") {
        strengthTalismans.push(item);
      } else if (talismanType === "dexterity") {
        dexterityTalismans.push(item);
      } else if (talismanType === "mage") {
        mageTalismans.push(item);
      } else if (talismanType === "arcane") {
        arcaneTalismans.push(item);
      } else if (talismanType === "faith") {
        faithTalismans.push(item);
      }
  
    console.log(item);
    res.status(200).send(item);
  }
  
  app.post("/api/Wepons/strengthWeapons", uploadWeps.single("img"), (req, res) => {
    handleWepChange(req, res, "strength");
  });

    app.post("/api/Wepons/dexterityWeapons", uploadWeps.single("img"), (req, res) => {
        handleWepChange(req, res, "dexterity");
    });

    app.post("/api/Wepons/mageWeapons", uploadWeps.single("img"), (req, res) => {
        handleWepChange(req, res, "mage");
    });

    app.post("/api/Wepons/arcaneWeapons", uploadWeps.single("img"), (req, res) => {
        handleWepChange(req, res, "arcane");
    });

    app.post("/api/Wepons/faithWeapons", uploadWeps.single("img"), (req, res) => {
        handleWepChange(req, res, "faith");
    });

    app.post("/api/talismans/strengthTalismans", uploadTalis.single("img"), (req, res) => {
        handleTalismanChange(req, res, "strength");
    });

    app.post("/api/talismans/dexterityTalismans", uploadTalis.single("img"), (req, res) => {
        handleTalismanChange(req, res, "dexterity");
    });

    app.post("/api/talismans/mageTalismans", uploadTalis.single("img"), (req, res) => {
        handleTalismanChange(req, res, "mage");
    });

    app.post("/api/talismans/arcaneTalismans", uploadTalis.single("img"), (req, res) => {
        handleTalismanChange(req, res, "arcane");
    });

    app.post("/api/talismans/faithTalismans", uploadTalis.single("img"), (req, res) => {
        handleTalismanChange(req, res, "faith");
    });

    app.delete("/api/:category/:type/:id", (req, res) => {
        const category = req.params.category;
        const type = req.params.type;
        const id = req.params.id;

        console.log("Category: "+category);
        console.log("Type: "+type);
        console.log("ID: "+id);

        let item;

        if(category==="Wepons"){
            if(type === "strengthWeapons"){
                item = strengthWeapons.find(strengthWeapon => strengthWeapon._id === parseInt(id));
            } else if(type === "dexterityWeapons"){
                item = dexterityWeapons.find(dexterityWeapon => dexterityWeapon._id === parseInt(id));
            } else if(type === "mageWeapons"){
                item = mageWeapons.find(mageWeapon => mageWeapon._id === parseInt(id));
            } else if(type === "arcaneWeapons"){
                item = arcaneWeapons.find(arcaneWeapon => arcaneWeapon._id === parseInt(id));
            } else if(type === "faithWeapons"){
                item = faithWeapons.find(faithWeapon => faithWeapon._id === parseInt(id));
            }
        }else if(category==="talismans"){
            if(type === "strengthTalismans"){
                item = strengthTalismans.find(strengthTalisman => strengthTalisman._id === parseInt(id));
            } else if(type === "dexterityTalismans"){
                item = dexterityTalismans.find(dexterityTalisman => dexterityTalisman._id === parseInt(id));
            } else if(type === "mageTalismans"){
                item = mageTalismans.find(mageTalisman => mageTalisman._id === parseInt(id));
            } else if(type === "arcaneTalismans"){
                item = arcaneTalismans.find(arcaneTalisman => arcaneTalisman._id === parseInt(id));
            } else if(type === "faithTalismans"){
                item = faithTalismans.find(faithTalisman => faithTalisman._id === parseInt(id));
            }
        }

        console.log("Item: "+item);

        if(!item){
            res.status(404).send("The item with the given ID was not found");
            console.log("Item not found");
            return;
        }

        const index = type.indexOf(item);
        type.splice(index, 1);
        res.status(200).send(item);
    });

const validateItem = (item) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        description: Joi.string().required()
    });

    return schema.validate(item);
}

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});