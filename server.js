const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static("public"));

const eldenRingWeps = [
    {
                "StrengthWeapons": [
                    {
                        "name": "Greatsword",
                        "img": "images/weapons/Greatsword.png",
                        "description": "The Greatsword in Elden Ring is a massive, heavy weapon, dealing devastating damage with wide swings. When paired with the Lion’s Claw Ash of War, it becomes even more powerful, allowing for a fierce, leaping attack that crushes enemies with overwhelming force."
                    },
                    {
                        "name": "Grafted Blade Greatsword",
                        "img": "images/weapons/Grafted.png",
                        "description": "The Grafted Blade Greatsword is a colossal sword forged from countless smaller blades, symbolizing power through conquest. This heavy weapon excels in raw damage and scales well with Strength. Its unique Oath of Vengeance Ash of War temporarily boosts all stats, increasing attack power and defense, making you a juggernaut in battle."
                    },
                    {
                        "name": "Prelate's Inferno Crozier",
                        "img": "images/weapons/Prelates.png",
                        "description": "The Prelate's Inferno Crozier is a colossal, flame-scorched hammer, delivering devastating fiery blows. Its Prelate’s Charge Ash of War lets you charge forward, hammer ablaze, crushing everything in your path with fiery destruction."
                    },
                    {
                        "name": "Greatsword Of Solitude",
                        "img": "images/weapons/Solitude.png",
                        "description": "The Greatsword of Solitude is a massive, somber blade, dealing heavy, slow strikes. Its Silent Resolve Ash of War surrounds the wielder in a calming aura, briefly boosting poise and reducing incoming damage, allowing for steadfast attacks amidst overwhelming odds."
                    },
                    {
                        "name": "Rusted Anchor",
                        "img": "images/weapons/Anchor.png",
                        "description": "The Rusted Anchor is a heavy weapon, delivering powerful, sweeping strikes. Its Anchor’s Grip Ash of War slams the weapon into the ground, creating a shockwave that disrupts and damages nearby enemies."
                    }
                ],
                "DexterityWeapons": [
                    {
                        "name": "Uchigatana",
                        "img": "images/weapons/Uchigatana.png",
                        "description": "The Uchigatana is a sleek katana, known for its quick strikes and impressive bleed buildup. Its Unsheathe Ash of War allows for a swift, devastating draw attack that catches foes off guard, making it a deadly choice for agile combatants seeking precision and speed."
                    },
                    {
                        "name": "Nagakiba",
                        "img": "images/weapons/Nagakiba.png",
                        "description": "The Nagakiba is a long, elegant katana with extended reach. Its design enhances quick, sweeping attacks and bleed buildup. Equipped with the Unsheathe Ash of War, it allows for a swift, devastating draw attack that strikes with deadly precision, making it a formidable choice in battle."
                    },
                    {
                        "name": "The Dancing Blade of Ranah",
                        "img": "images/weapons/Rahan.png",
                        "description": "The Dancing Blade of Ranah is an elegant sword, delivering fluid, graceful attacks. Its Moonlit Dance Ash of War unleashes rapid slashes followed by a powerful thrust, making it a mesmerizing weapon that combines beauty and deadly precision."
                    },
                    {
                        "name": "Hand of Malenia",
                        "img": "images/weapons/HandMalenia.png",
                        "description": "The Hand of Malenia is a graceful, curved blade designed for swift, precise attacks. Its unique aesthetic reflects the elegance of its namesake. Its Waterfoul Ash of War allows for a powerful, rapid flurry of strikes, making it a lethal choice that embodies speed and finesse in combat."
                    },
                    {
                        "name": "Rivers of Blood",
                        "img": "images/weapons/Rivers.png",
                        "description": "The Rivers of Blood is a deadly katana, known for its exceptional bleed buildup. Its striking design complements its swift, lethal attacks. The Corpse Piler Ash of War unleashes a series of slashes that send out a wave of blood, devastating enemies and making it a formidable choice in both PvE and PvP."
                    }
                ],
                "MageWeapons": [
                    {
                        "name": "Dark Moon Greatsword",
                        "img": "images/weapons/DarkMoon.png",
                        "description": "The Dark Moon Greatsword is a powerful, elegant weapon, known for its magical prowess. Its unique design reflects the moon's beauty and strength. The Moonlight Greatsword Ash of War allows for a charged magical attack that releases a wave of moonlight, dealing significant damage and enhancing the sword's mystical allure in battle."
                    },
                    {
                        "name": "Fallingstar Beast Jaw",
                        "img": "images/weapons/FallingStar.png",
                        "description": "The Fallingstar Beast Jaw is a massive, monstrous weapon crafted from the jaw of a fallen Star Beast. Its brutal design delivers heavy, crushing strikes. The Beast Roar Ash of War unleashes a powerful roar that boosts damage and enhances the wielder's attacks, embodying the ferocity of the beast it came from."
                    },
                    {
                        "name": "Azur's Glintstone Staff",
                        "img": "images/weapons/Azur_Staff.png",
                        "description": "Azur's Glintstone Staff is a powerful catalyst, known for its high sorcery scaling. Its elegant design channels the magic of the stars. The Glintstone Sorcery Ash of War enhances sorcery spells cast with the staff, boosting their potency and allowing for devastating magical attacks that pierce through foes with glintstone brilliance."
                    },
                    {
                        "name": "Rotten Crystal Sword",
                        "img": "images/weapons/RottenSword.png",
                        "description": "The Rotten Crystal Sword is a unique weapon that combines beauty and decay. Its striking design features crystalline elements that emit a toxic aura. The Crystal Release Ash of War unleashes a powerful thrust that releases a wave of rot, dealing damage over time and inflicting a debilitating status effect on enemies."
                    },
                    {
                        "name": "Scepter Of The All-Knowing",
                        "img": "images/weapons/AllKnowing.png",
                        "description": "The Scepter of the All-Knowing is a powerful staff, embodying the essence of wisdom and arcane knowledge. Its intricate design allows for enhanced sorcery. The Scepter’s Insight Ash of War boosts the potency of sorcery spells cast with the staff, providing a significant advantage in magical combat and unlocking the secrets of the arcane."
                    }
                ],
                "ArcaneWeapons": [
                    {
                        "name": "Rivers Of Blood",
                        "img": "images/weapons/Rivers.png",
                        "description": "The Rivers of Blood is a deadly katana, known for its exceptional bleed buildup. Its striking design complements its swift, lethal attacks. The Corpse Piler Ash of War unleashes a series of slashes that send out a wave of blood, devastating enemies and making it a formidable choice in both PvE and PvP."
                    },
                    {
                        "name": "Serpent Bow",
                        "img": "images/weapons/SerpentBow.png",
                        "description": "The Serpent Bow is a sleek, elegant bow, known for its rapid-fire capabilities and unique aesthetic. Its design allows for quick, precise shots. The Serpent's Arrow Ash of War imbues arrows with a venomous effect, dealing poison damage over time and making it a lethal choice for ranged combat against unsuspecting foes."
                    },
                    {
                        "name": "Morgott's Cursed Sword",
                        "img": "images/weapons/MorgotsSword.png",
                        "description": "Morgott's Cursed Sword is a fearsome weapon, characterized by its imposing design and dark lore. This sword deals significant damage with each swing. The Cursed Slash Ash of War allows the wielder to unleash a cursed slash that inflicts damage and applies a unique status effect, making it a formidable choice in both offense and strategy."
                    },
                    {
                        "name": "Mohgwyn's Sacred Spear",
                        "img": "images/weapons/Sacred_Spear.png",
                        "description": "Mohgwyn's Sacred Spear is a powerful weapon, featuring a striking design that reflects its dark heritage. This spear excels in both range and damage output. The Bloodboon Ash of War allows the wielder to unleash a devastating blood attack that inflicts heavy damage and applies bleed buildup, making it a fearsome choice for those who embrace the power of blood in battle."
                    },
                    {
                        "name": "Bloody Helice",
                        "img": "images/weapons/Helice.png",
                        "description": "Bloody Helice is a unique weapon, known for its swift, graceful attacks and distinctive design. This spear excels in quick strikes and bleed buildup. The Blood Surge Ash of War enables the wielder to perform a rapid thrust that sends out a wave of blood, inflicting damage and applying bleed status to enemies, making it a lethal option for aggressive combatants."
                    }
                ],
                "FaithWeapons": [
                    {
                        "name": "Blasphemous Blade",
                        "img": "images/weapons/Blasphemous_Blade.png",
                        "description": "Considered the best weapon in the entire game, the Blasphemous Blade is a powerful weapon with a striking design that reflects its dark lore. It delivers heavy damage with each swing. The Taker's Flames Ash of War allows the wielder to unleash a fiery attack that restores health based on damage dealt, making it a formidable choice in both offense and sustainability during combat."
                    },
                    {
                        "name": "Godslayer's Greatsword",
                        "img": "images/weapons/Godslayer_Greatsword.png",
                        "description": "The Godslayer's Greatsword is an imposing weapon that exudes dark elegance. It delivers devastating damage with powerful strikes. The Godslayer's Flame Ash of War unleashes a fiery attack that inflicts both physical and fire damage, making it a fearsome choice for overwhelming enemies in battle."
                    },
                    {
                        "name": "Winged Scythe",
                        "img": "images/weapons/Winged_Scythe.png",
                        "description": "The Winged Scythe is a striking weapon with a unique design that combines elegance and lethality. It delivers sweeping, powerful attacks. The Horde of Scythes Ash of War unleashes a series of slashes that release a wave of spectral scythes, damaging enemies from a distance and making it a formidable option for crowd control in combat."
                    },
                    {
                        "name": "Maliketh's Black Blade",
                        "img": "images/weapons/Maliketh_Black_Blade.png",
                        "description": "Maliketh's Black Blade is a formidable weapon that embodies dark elegance and lethal precision. Its powerful strikes deal significant damage. The Black Blade Ash of War allows the wielder to perform a devastating attack that cuts through foes and applies a unique status effect, making it a fearsome choice in any confrontation."
                    },
                    {
                        "name": "Sacred Relic Sword",
                        "img": "images/weapons/Sacred_Relic_Sword.png",
                        "description": "The Sacred Relic Sword is a majestic weapon that exudes divine power. It delivers heavy, impactful strikes. The Golden Order Greatsword Ash of War unleashes a powerful wave of light that damages enemies in its path, making it a formidable choice for both offense and area control in battle."
                    } 
                ]
            }
];

const eldenRingTalismans = [
    {
                "StrengthTalismans": [
                    {
                        "name": "Erdtree’s Favor",
                        "img": "images/talismans/Erdtree_Favor.png",
                        "description": "Erdtree’s Favor is not only favored by Bleed players in Elden Ring, but it’s also one of the best talismans for strength builds. This talisman increases HP by 3%, stamina by 7%, and equipment load by 5%. Since strength builds heavily rely on health and stamina, this medallion is an invaluable asset for enhancing your survivability and combat effectiveness."
                    },
                    {
                        "name": "Great-Jar’s Arsenal",
                        "img": "images/talismans/Great-Jar_Arsenal.png",
                        "description": "Equipment load is a crucial factor in building a strength character in Elden Ring, and Great-Jar’s Arsenal is perfect for this purpose. This talisman boosts your character’s equipment load by 19%, allowing you to wield heavier greatswords without sacrificing mobility. With this enhancement, you can dodge and roll effectively, maintaining agility while dealing powerful attacks."
                    },
                    {
                        "name": "Claw",
                        "img": "images/talismans/Claw_Talisman.png",
                        "description": "Using jump attacks with your strength weapon is the most effective way to maximize damage, as they outperform standard slash attacks. To make your jump attacks hit even harder, consider equipping the Elden Ring Claw Talisman, which boosts jump attack damage by 15%. If you often rely on jump attacks, this talisman is a valuable addition to your setup."
                    }
                ],
                "DexterityTalismans": [
                    {
                        "name": "Prosthesis-Wearer Heirloom",
                        "img": "images/talismans/Prosthesis-Wearer_Heirloom.png",
                        "description": "The Prosthesis-Wearer Heirloom is a valuable talisman in Elden Ring that enhances dexterity by 5 levels. This makes it an excellent choice for players focused on dexterity builds, as it boosts both attack power and speed. Its design reflects the legacy of those who have embraced the power of prosthetics, making it a fitting addition for those who aim to maximize their agility and effectiveness in combat."
                    },
                    {
                        "name": "Twinblade Talisman",
                        "img": "images/talismans/Twinblade_Talisman.png",
                        "description": "The Twinblade Talisman belongs to the same series as the Claw Talisman and is highly beneficial for dual-wielding dexterity builds. This talisman boosts the damage of the final attack in a weapon combo by an impressive 20%, making it a great choice for maximizing your damage output during rapid strikes."
                    },
                    {
                        "name": "Millicent's Prosthesis",
                        "img": "images/talismans/Millicents_Prosthesis.png",
                        "description": "Millicent's Prosthesis talisman offers an effect similar to the Rotten Winged Sword Insignia, but with an added benefit. It not only increases the damage of successive attacks but also provides a 5-level boost to the wearer’s dexterity stat. This makes it a valuable choice for enhancing both damage output and dexterity-based builds."
                    }
                ],
                "MageTalismans": [
                    {
                        "name": "Godfrey Icon",
                        "img": "images/talismans/Godfrey_Icon.png",
                        "description": "The Godfrey Icon talisman, featuring an emblem of Godfrey, boosts the power of charged spells and skills by an impressive 15%. This enhancement allows charged spells to deal significantly more damage, making them more effective against a variety of enemies and adding extra punch to your magical arsenal."
                    },
                    {
                        "name": "Magic Scorpion Charm",
                        "img": "images/talismans/Magic_Scorpion_Charm.png",
                        "description": "The Magic Scorpion Charm is part of a series of talismans that enhance damage for various elements. Specifically, this talisman increases magic damage by 12%, making it an excellent choice for mages and magic-focused builds looking to maximize their spell potency."
                    },
                    {
                        "name": "Primal Glintstone Blade",
                        "img": "images/talismans/Primal_Glintstone_Blade.png",
                        "description": "The Primal Glintstone Blade talisman enables players to cast spells more frequently by reducing their FP cost by 25%. However, this comes at a cost, as it also decreases the player’s health by 8.5%. This trade-off makes it a strategic choice for those looking to enhance their spellcasting capabilities while managing their health."
                    }
                ],
                "ArcaneTalismans": [
                    {
                        "name": "Lord of Blood’s Exultation",
                        "img": "images/talismans/Lord_of_Blood_Exultation.png",
                        "description": "Lord of Blood’s Exultation is a powerful talisman in Elden Ring that boosts attack power by 20% when nearby enemies are affected by blood loss. This makes it particularly effective for builds that utilize bleed effects, allowing you to deal significant damage in combat. Its design reflects the theme of blood and carnage, perfectly suiting those who revel in the chaos of battle."
                    },
                    {
                        "name": "Shard of Alexander",
                        "img": "images/talismans/Shard_of_Alexander.png",
                        "description": "The Shard of Alexander is a unique talisman in Elden Ring that enhances the power of your skills by 15%. This makes it an excellent choice for players who rely on weapon skills or special abilities, allowing them to maximize their damage output. Its design, featuring the likeness of Alexander the Warrior, emphasizes strength and combat prowess, making it a valuable asset for any build that utilizes powerful skills."
                    },
                    {
                        "name": "Fire Scorpion Charm",
                        "img": "images/talismans/Fire_Scorpion_Charm.png",
                        "description": "The Fire Scorpion Charm is a talisman in Elden Ring that boosts fire damage by 12%. This makes it an excellent choice for builds focused on fire-based spells and attacks, allowing you to increase your damage output significantly. Its fiery design embodies the essence of flame, making it a perfect fit for pyromancers and anyone looking to harness the destructive power of fire in combat."
                    }
                ],
                "FaithTalismans": [
                    {
                        "name": "Two Fingers Heirloom",
                        "img": "images/talismans/Two_Fingers_Heirloom.png",
                        "description": "The Two Fingers Heirloom is a talisman in Elden Ring that increases your faith by 5 levels. This makes it a valuable addition for faith-focused builds, enhancing your spellcasting capabilities and increasing the effectiveness of faith-based incantations. Its design reflects the connection to the Two Fingers, symbolizing guidance and devotion, making it an essential choice for players who seek to wield divine power."
                    },
                    {
                        "name": "Marika's Soreseal",
                        "img": "images/talismans/Marika_Soreseal.png",
                        "description": "While many players prefer Radagon's Soreseal for its boosts to melee stats, Marika's Soreseal is ideal for magic builds, enhancing mind, intelligence, faith, and arcane by +5. However, it also increases all damage taken by 15%, so players should pair it with a talisman to mitigate this drawback for a balanced approach to combat."
                    },
                    {
                        "name": "Radagon's Soreseal",
                        "img": "images/talismans/Radagon_Soreseal.png",
                        "description": "Radagon's Soreseal is considered one of the best talismans in Elden Ring due to its boosts to multiple stats by +5. Despite its negative effect of -15% damage negation, it remains a valuable choice for both PvE and PvP. The buffs it provides are equivalent to 20 levels, allowing players to conserve their Runes for other priorities. However, players nearing the soft cap for certain stats should be cautious, as the talisman may lead to diminishing returns."
                    }
                ]
            }
];

const eldenRingLocations = [
    {

                "StrengthLocations": [
                    {
                        "name": "Greatsword",
                        "img": "images/weapons/Greatsword.png",
                        "description": "The Greatsword is located inside a coffin carriage chest on the western side of the Caelid Region, along the road past the Rotview Balcony and northwest of the Caelid Ruins. Be wary of the scavenging giant dogs nearby, as they can be deadly if confronted all at once—approach the carriage with caution."
                    },
                    {
                        "name": "Bullgoat Armor",
                        "img": "images/Armor/bullgoat-set.png",
                        "description": "You can acquire the Bullgoat Set after defeating the powerful Great Horned Tragoth in the Altus Plateau. This battle takes place during the interconnected questlines of Tanith and Patches, adding depth to your journey. Be ready for a challenging encounter, as Tragoth guards this sought-after armor set, known for its exceptional poise and defensive capabilities."
                    },
                    {
                        "name": "Great-Jar’s Arsenal",
                        "img": "images/talismans/Great-Jar_Arsenal.png",
                        "description": "The Great-Jar's Arsenal is obtained from the Great Jar in front of a colosseum in western Caelid's Dragonbarrow, reachable via the Deep Siofra Well. To earn it, summon and defeat three randomly chosen Great Jar Knights with red summon signs. Each knight wields powerful legendary weapons, so prepare for a challenging fight without dying."
                    }
                ],
                "DexterityLocations": [
                    {
                        "name": "Rivers of Blood",
                        "img": "images/weapons/Rivers.png",
                        "description": "Rivers of Blood is a unique katana in Elden Ring, found exclusively in the hands of the invading NPC boss, Bloody Finger Okina. You can encounter Okina in the southern Mountaintops of the Giants, near the Church of Repose, where you’ll need to defeat him to claim this powerful weapon."
                    },
                    {
                        "name": "Hoslow's Set",
                        "img": "images/Armor/hoslow-set.png",
                        "description": "Hoslow's Armor can be found in Elden Ring as all pieces of Hoslow's Set are dropped by Juno Hoslow, along with Hoslow's Petal Whip. Juno Hoslow is a hostile NPC you can invade after progressing through the Volcano Manor questline, and he drops the armor as part of the final contract."
                    },
                    {
                        "name": "Prosthesis-Wearer Heirloom",
                        "img": "images/talismans/Prosthesis-Wearer_Heirloom.png",
                        "description": "The Prosthesis-Wearer Heirloom can be obtained by completing Sage Gowry's questline in Caelid. First, defeat Commander O'Neil in the Swamp of Aeonia to acquire the Unalloyed Gold Needle. Then, return to Milicent, give her the needle, and rest to receive your reward."
                    }
                ],
                "MageLocations": [
                    {
                        "name": "Azur's Glintstone Staff",
                        "img": "images/weapons/Azur_Staff.png",
                        "description": "Azur's Glintstone Staff is located in the Academy of Raya Lucaria, specifically on the second floor of the Church of the Cuckoo in Liurnia. You'll find it in a room guarded by a Page. Accessing the staff is straightforward if you've kicked down the ladder shortcut in the Church."
                    },
                    {
                        "name": "Spellblade Set",
                        "img": "images/Armor/spellblade-set.png",
                        "description": "The Spellblade Set in Elden Ring enhances sorcery and features a unique look. To collect the complete set, defeat specific enemies and bosses, primarily found in areas like the Raya Lucaria Academy. Wearing this set boosts your magical abilities, making it ideal for sorcerers."
                    },
                    {
                        "name": "Godfrey Icon",
                        "img": "images/talismans/Godfrey_Icon.png",
                        "description": "The Godfrey Icon is obtained by defeating Godefroy the Grafted, a challenging boss in the Golden Lineage Evergaol, located in the southern Altus Plateau, just below the Grand Lift of Dectus. After defeating Godefroy, you’ll receive the Godfrey Icon, which enhances your charged spells and incantations, making it a valuable asset for magic users."
                    }
                ],
                "ArcaneLocations": [
                    {
                        "name": "Mohgwyn's Sacred Spear",
                        "img": "images/weapons/Sacred_Spear.png",
                        "description": "Mohgwyn's Sacred Spear can be obtained from Finger Reader Enia in exchange for the Remembrance of the Blood Lord. This remembrance is earned by defeating Mohg, Lord of Blood, the Shardbearer Boss located at the top of Mohgwyn's Palace."
                    },
                    {
                        "name": "War Surgeon Set",
                        "img": "images/Armor/war_surgeon_set.png",
                        "description": "The War Surgeon Set is a complete armor set in Elden Ring that you can obtain by defeating all three Nameless White Mask invaders in Mohgwyn Palace, located in the Siofra River region. This set consists of the White Mask, War Surgeon Gown, War Surgeon Gloves, and War Surgeon Trousers, making it a distinctive choice for those seeking a unique look and enhanced protection."
                    },
                    {
                        "name": "Lord of Blood’s Exultation",
                        "img": "images/talismans/Lord_of_Blood_Exultation.png",
                        "description": "The Lord of Blood's Exultation can be acquired by defeating Esgar, Priest of Blood, a boss located in the mini dungeon of Leyndell Catacombs. This dungeon is situated deep below Leyndell, Royal Capital, within the Subterranean Shunning-Grounds. To find the entrance, look for it at the bottom of a large room filled with pipes, where Giant Crayfish patrol the muddy floor."
                    }
                ],
                "FaithLocations": [
                    {
                        "name": "Blasphemous Blade",
                        "img": "images/weapons/Blasphemous_Blade.png",
                        "description": "The Blasphemous Blade can be obtained from Finger Reader Enia in exchange for the Remembrance of the Blasphemous. This remembrance is earned by defeating the Shardbearer Boss, Rykard, Lord of Blasphemy, who rules over the Volcano Manor in Mt. Gelmir."
                    },
                    {
                        "name": "Haligtree Knight Set",
                        "img": "images/Armor/haligtree_knight_set.png",
                        "description": "The Haligtree Knight Set is a complete attire found in Elden Ring, located in the room above the Elphael Inner Wall grace site in the Haligtree. This set includes the Haligtree Knight Helm, Haligtree Knight Armor, Haligtree Knight Gauntlets, and Haligtree Knight Greaves, making it a striking choice for those seeking both style and protection."
                    },
                    {
                        "name": "Radagon's Soreseal",
                        "img": "images/talismans/Radagon_Soreseal.png",
                        "description": "Radagon's Soreseal can be found at Fort Faroth, situated on the eastern cliffs of Caelid's Dragonbarrow region. This talisman enhances several attributes, making it a valuable item for builds focused on strength and resilience."
                    }
                ]
            }
];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/eldenringWeps', (req, res) => {
    res.json(eldenRingWeps);
});

app.get('/api/eldenringTalismans', (req, res) => {
    res.json(eldenRingTalismans);
});

app.get('/api/eldenringLocations', (req, res) => {
    res.json(eldenRingLocations);
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});