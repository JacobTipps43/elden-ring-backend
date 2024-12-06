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

app.get('/api/Wepons/strengthWeapons', async (req, res) => {
    const items = await strengthWepsItem.find();
    console.log(items);
    res.send(items);
});

app.get('/api/Wepons/dexterityWeapons', async (req, res) => {
    const items = await dexterityWepsItem.find();
    console.log(items);
    res.send(items);
});

app.get('/api/Wepons/mageWeapons', async (req, res) => {
    const items = await mageWepsItem.find();
    console.log(items);
    res.send(items);
});

app.get('/api/Wepons/arcaneWeapons', async (req, res) => {
    const items = await arcaneWepsItem.find();
    console.log(items);
    res.send(items);
});

app.get('/api/Wepons/faithWeapons', async (req, res) => {
    const items = await faithWepsItem.find();
    console.log(items);
    res.send(items);
});

app.get('/api/talismans/strengthTalismans', async (req, res) => {
    const items = await strengthTalisItem.find();
    console.log(items);
    res.send(items);
});

app.get('/api/talismans/dexterityTalismans', async (req, res) => {
    const items = await dexterityTalisItem.find();
    console.log(items);
    res.send(items);
});

app.get('/api/talismans/mageTalismans', async (req, res) => {
    const items = await mageTalisItem.find();
    console.log(items);
    res.send(items);
});

app.get('/api/talismans/arcaneTalismans', async (req, res) => {
    const items = await arcaneTalisItem.find();
    console.log(items);
    res.send(items);
});

app.get('/api/talismans/faithTalismans', async (req, res) => {
    const items = await faithTalisItem.find();
    console.log(items);
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
        console.log("Validation error:", results.error);
        return;
    }

    const item = {
        name: req.body.name,
        description: req.body.description,
    };

    if (req.file) {
        item.img = "images/Weapons/" + req.file.filename;
    }

    try {
        let newItem;
        if (weaponType === "strength") {
            newItem = new strengthWepsItem(item);
        } else if (weaponType === "dexterity") {
            newItem = new dexterityWepsItem(item);
        } else if (weaponType === "mage") {
            newItem = new mageWepsItem(item);
        } else if (weaponType === "arcane") {
            newItem = new arcaneWepsItem(item);
        } else if (weaponType === "faith") {
            newItem = new faithWepsItem(item);
        }

        await newItem.save();
        res.status(200).send(newItem);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving weapon data");
    }
};

const handleTalismanChange = async (req, res, talismanType) => {
    console.log("Handling the request");

    const results = validateItem(req.body);

    if (results.error) {
        res.status(400).send(results.error.details[0].message);
        console.log("Validation error:", results.error);
        return;
    }

    const item = {
        name: req.body.name,
        description: req.body.description,
    };

    if (req.file) {
        item.img = "images/talismans/" + req.file.filename;
    }

    try {
        let newItem;
        if (talismanType === "strength") {
            newItem = new strengthTalisItem(item);
        } else if (talismanType === "dexterity") {
            newItem = new dexterityTalisItem(item);
        } else if (talismanType === "mage") {
            newItem = new mageTalisItem(item);
        } else if (talismanType === "arcane") {
            newItem = new arcaneTalisItem(item);
        } else if (talismanType === "faith") {
            newItem = new faithTalisItem(item);
        }

        await newItem.save();
        res.status(200).send(newItem);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving talisman data");
    }
};
  
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

    app.delete("/api/:category/:type/:id", async (req, res) => {
        const { category, type, id } = req.params;
    
        let Model;
    
        if (category === "Wepons") {
            if (type === "strengthWeapons") {
                Model = strengthWepsItem;
            } else if (type === "dexterityWeapons") {
                Model = dexterityWepsItem;
            } else if (type === "mageWeapons") {
                Model = mageWepsItem;
            } else if (type === "arcaneWeapons") {
                Model = arcaneWepsItem;
            } else if (type === "faithWeapons") {
                Model = faithWepsItem;
            }
        } else if (category === "talismans") {
            if (type === "strengthTalismans") {
                Model = strengthTalisItem;
            } else if (type === "dexterityTalismans") {
                Model = dexterityTalisItem;
            } else if (type === "mageTalismans") {
                Model = mageTalisItem;
            } else if (type === "arcaneTalismans") {
                Model = arcaneTalisItem;
            } else if (type === "faithTalismans") {
                Model = faithTalisItem;
            }
        }
    
        if (!Model) {
            return res.status(400).send("Invalid category or type");
        }
    
        try {
            const item = await Model.findByIdAndDelete(id);
            if (!item) {
                return res.status(404).send("Item not found");
            }
            res.status(200).send(item);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error deleting the item");
        }
    });
    

    app.put("/api/:category/:type/:id", uploadWeps.single("img"), async (req, res) => {
        const { category, type, id } = req.params;
    
        let Model;
    
        if (category === "Wepons") {
            if (type === "strengthWeapons") {
                Model = strengthWepsItem;
            } else if (type === "dexterityWeapons") {
                Model = dexterityWepsItem;
            } else if (type === "mageWeapons") {
                Model = mageWepsItem;
            } else if (type === "arcaneWeapons") {
                Model = arcaneWepsItem;
            } else if (type === "faithWeapons") {
                Model = faithWepsItem;
            }
        } else if (category === "talismans") {
            if (type === "strengthTalismans") {
                Model = strengthTalisItem;
            } else if (type === "dexterityTalismans") {
                Model = dexterityTalisItem;
            } else if (type === "mageTalismans") {
                Model = mageTalisItem;
            } else if (type === "arcaneTalismans") {
                Model = arcaneTalisItem;
            } else if (type === "faithTalismans") {
                Model = faithTalisItem;
            }
        }
    
        if (!Model) {
            return res.status(400).send("Invalid category or type");
        }
    
        const results = validateItem(req.body);
        if (results.error) {
            return res.status(400).send(results.error.details[0].message);
        }
    
        const updateData = {
            name: req.body.name,
            description: req.body.description,
        };
          
        if (req.file) {
            updateData.img =
                category === "Wepons"
                    ? "images/Weapons/" + req.file.filename
                    : "images/talismans/" + req.file.filename;
        }
    
        try {
            const updatedItem = await Model.findByIdAndUpdate(id, updateData, {
                new: true,
            });
    
            if (!updatedItem) {
                return res.status(404).send("Item not found");
            }
    
            res.status(200).send(updatedItem);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error updating the item");
        }
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