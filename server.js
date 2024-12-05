const express = require('express');
const cors = require('cors');
const app = express();
const Joi = require('joi');
app.use(cors());
app.use(express.static("public"));
const multer = require('multer');
const mongoose = require("mongoose");

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

mongoose
  .connect("mongodb+srv://wWAE1dwKCocvdoWR:wWAE1dwKCocvdoWR@cluster0.tofc7.mongodb.net/?")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("couldn't connect to mongodb", error);
  });

    const strengthWepsSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
    });
    const dexWepsSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
    });
    const mageWepsSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
    });
    const arcaneWepsSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
    });
    const faithWepsSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
    });

    const strengthTalisSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
    });
    const dexTalisSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
    });
    const mageTalisSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
    });
    const arcaneTalisSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
    });
    const faithTalisSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
    });

    const strengthWepsItem = mongoose.model("strengthWepsItem", strengthWepsSchema);
    const dexterityWepsItem = mongoose.model("dexterityWepsItem", dexWepsSchema);
    const mageWepsItem = mongoose.model("mageWepsItem", mageWepsSchema);
    const arcaneWepsItem = mongoose.model("arcaneWepsItem", arcaneWepsSchema);
    const faithWepsItem = mongoose.model("faithWepsItem", faithWepsSchema);

    const strengthTalisItem = mongoose.model("strengthTalisItem", strengthTalisSchema);
    const dexterityTalisItem = mongoose.model("dexterityTalisItem", dexTalisSchema);
    const mageTalisItem = mongoose.model("mageTalisItem", mageTalisSchema);
    const arcaneTalisItem = mongoose.model("arcaneTalisItem", arcaneTalisSchema);
    const faithTalisItem = mongoose.model("faithTalisItem", faithTalisSchema);


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
    const items = strengthWepsItem.find();
    res.send(items);
});

app.get('/api/Wepons/dexterityWeapons', (req, res) => {
    const items = dexterityWepsItem.find();
    res.send(items);
});

app.get('/api/Wepons/mageWeapons', (req, res) => {
    const items = mageWepsItem.find();
    res.send(items);
});

app.get('/api/Wepons/arcaneWeapons', (req, res) => {
    const items = arcaneWepsItem.find();
    res.send(items);
});

app.get('/api/Wepons/faithWeapons', (req, res) => {
    const items = faithWepsItem.find();
    res.send(items);
});

app.get('/api/talismans/strengthTalismans', (req, res) => {
    const items = strengthTalisItem.find();
    res.send(items);
});

app.get('/api/talismans/dexterityTalismans', (req, res) => {
    const items = dexterityTalisItem.find();
    res.send(items);
});

app.get('/api/talismans/mageTalismans', (req, res) => {
    const items = mageTalisItem.find();
    res.send(items);
});

app.get('/api/talismans/arcaneTalismans', (req, res) => {
    const items = arcaneTalisItem.find();
    res.send(items);
});

app.get('/api/talismans/faithTalismans', (req, res) => {
    const items = faithTalisItem.find();
    res.send(items);
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

const handleWepChange = async (req, res, weaponType) => {
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
        const lastWeapon = strengthWeapons[strengthWeapons.length - 1];
        const newId = lastWeapon ? lastWeapon._id + 1 : 1;
        _id = newId;
    } else if (weaponType === "dexterity") {
        const lastWeapon = dexterityWeapons[dexterityWeapons.length - 1];
        const newId = lastWeapon ? lastWeapon._id + 1 : 1;
        _id = newId;
    } else if (weaponType === "mage") {
        const lastWeapon = mageWeapons[mageWeapons.length - 1];
        const newId = lastWeapon ? lastWeapon._id + 1 : 1;
        _id = newId;
    } else if (weaponType === "arcane") {
        const lastWeapon = arcaneWeapons[arcaneWeapons.length - 1];
        const newId = lastWeapon ? lastWeapon._id + 1 : 1;
        _id = newId;
    } else if (weaponType === "faith") {
        const lastWeapon = faithWeapons[faithWeapons.length - 1];
        const newId = lastWeapon ? lastWeapon._id + 1 : 1;
        _id = newId;
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
  
    const newItem = await item.save();
    console.log(newItem);
    res.status(200).send(newItem);
  };

  const handleTalismanChange = async (req, res, talismanType) => {
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
        const lastTalisman = strengthTalismans[strengthTalismans.length - 1];
        const newId = lastTalisman ? lastTalisman._id + 1 : 1;
        _id = newId;
    } else if (talismanType === "dexterity") {
        const lastTalisman = dexterityTalismans[dexterityTalismans.length - 1];
        const newId = lastTalisman ? lastTalisman._id + 1 : 1;
        _id = newId;
    } else if (talismanType === "mage") {
        const lastTalisman = mageTalismans[mageTalismans.length - 1];
        const newId = lastTalisman ? lastTalisman._id + 1 : 1;
        _id = newId;
    } else if (talismanType === "arcane") {
        const lastTalisman = arcaneTalismans[arcaneTalismans.length - 1];
        const newId = lastTalisman ? lastTalisman._id + 1 : 1;
        _id = newId;
    } else if (talismanType === "faith") {
        const lastTalisman = faithTalismans[faithTalismans.length - 1];
        const newId = lastTalisman ? lastTalisman._id + 1 : 1;
        _id = newId;
    }
  
    const item = { 
      _id: _id,
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
  
    const newItem = await item.save();
    console.log(newItem);
    res.status(200).send(newItem);
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
        const { category, type, id } = req.params;
    
        console.log("Category: " + category);
        console.log("Type: " + type);
        console.log("ID: " + id);
    
        let itemArray;
        let item;
    
        if (category === "Wepons") {
            if (type === "strengthWeapons") {
                itemArray = strengthWeapons;
            } else if (type === "dexterityWeapons") {
                itemArray = dexterityWeapons;
            } else if (type === "mageWeapons") {
                itemArray = mageWeapons;
            } else if (type === "arcaneWeapons") {
                itemArray = arcaneWeapons;
            } else if (type === "faithWeapons") {
                itemArray = faithWeapons;
            }
        } else if (category === "Talismans") {
            if (type === "strengthTalismans") {
                itemArray = strengthTalismans;
            } else if (type === "dexterityTalismans") {
                itemArray = dexterityTalismans;
            } else if (type === "mageTalismans") {
                itemArray = mageTalismans;
            } else if (type === "arcaneTalismans") {
                itemArray = arcaneTalismans;
            } else if (type === "faithTalismans") {
                itemArray = faithTalismans;
            }
        }
    
        if (!itemArray) {
            res.status(400).send("Invalid category or type");
            return;
        }
    
        item = itemArray.find(el => el._id === parseInt(id));
        console.log("Item: ", item);
    
        if (!item) {
            res.status(404).send("The item with the given ID was not found");
            return;
        }
    
        const index = itemArray.indexOf(item);
        itemArray.splice(index, 1);
        res.status(200).send(item);
    });

    app.put("/api/:category/:type/:id", uploadWeps.single("img"),(req, res) => {
        const { category, type, id } = req.params;
    
        console.log("Category:", category);
        console.log("Type:", type);
        console.log("ID:", id);
        console.log("Request Body:", req.body);
    
        let itemArray;
        let item;
    
        if (category === "Wepons") {
            if (type === "strengthWeapons") {
                itemArray = strengthWeapons;
            } else if (type === "dexterityWeapons") {
                itemArray = dexterityWeapons;
            } else if (type === "mageWeapons") {
                itemArray = mageWeapons;
            } else if (type === "arcaneWeapons") {
                itemArray = arcaneWeapons;
            } else if (type === "faithWeapons") {
                itemArray = faithWeapons;
            }
        } else if (category === "Talismans") {
            if (type === "strengthTalismans") {
                itemArray = strengthTalismans;
            } else if (type === "dexterityTalismans") {
                itemArray = dexterityTalismans;
            } else if (type === "mageTalismans") {
                itemArray = mageTalismans;
            } else if (type === "arcaneTalismans") {
                itemArray = arcaneTalismans;
            } else if (type === "faithTalismans") {
                itemArray = faithTalismans;
            }
        }
    
        if (!itemArray) {
            console.log("Invalid category or type");
            res.status(404).send("The specified category or type does not exist");
            return;
        }
    
        item = itemArray.find(el => el._id === parseInt(id));
        console.log("Item:", item);
    
        if (!item) {
            console.log("Item not found");
            res.status(404).send("The item with the given ID was not found");
            return;
        }
    
        const results = validateItem(req.body);
    
        if (results.error) {
            res.status(400).send(results.error.details[0].message);
            console.log("Validation Error:", results.error);
            return;
        }
    
        if (!req.body.name || !req.body.description) {
            console.log("Missing 'name' or 'description' in the request body");
            res.status(400).send("Missing 'name' or 'description' in the request body");
            return;
        }
    
        item.name = req.body.name;
        item.description = req.body.description;
    
        if (req.file) {
            item.img = "images/Weapons/" + req.file.filename;
        }
    
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