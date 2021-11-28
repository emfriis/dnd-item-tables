const consumable_tier1 = [
    {
        name: 'Potion of Healing',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 25
    }, {
        name: 'Spell Scroll (cantrip)',
        cost: 25,
        spell_level: 0,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 5
    }, {
        name: 'Spell Scroll (1st level)',
        cost: 50,
        spell_level: 1,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 10
    }, {
        name: 'Potion of Climbing',
        cost: 30,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: '+1 Ammunition',
        cost: 50,
        spell_level: null,
        weapon_type: 'ammunition',
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Spellwrought Tattoo (cantrip)',
        cost: 50,
        spell_level: 0,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 1
    }, {
        name: 'Spellwrought Tattoo (1st level)',
        cost: 75,
        spell_level: 1,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 1
    }, {
        name: 'Bead of Nourishment',
        cost: 25,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Bead of Refreshment',
        cost: 25,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Potion of Agility',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Potion of Bear Strength',
        cost: 75,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Potion of Darkvision',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Potion of Mimicry',
        cost: 75,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Potion of Mindfulness',
        cost: 75,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Potion of Swimming',
        cost: 30,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Empathic Charge',
        cost: 75,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Shimmer Charge',
        cost: 75,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Tremor Charge',
        cost: 75,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Bead of Recovery',
        cost: 75,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Bead of Restoration',
        cost: 75,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }
];



const consumable_tier2 = [
    {
        name: 'Potion of Greater Healing',
        cost: 300,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 25
    }, {
        name: 'Spell Scroll (2nd level)',
        cost: 150,
        spell_level: 2,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 10
    }, {
        name: 'Spell Scroll (3rd level)',
        cost: 270,
        spell_level: 3,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 10
    }, {
        name: '+2 Ammunition',
        cost: 250,
        spell_level: null,
        weapon_type: 'ammunition',
        armor_type: null,
        source: 'DMG',
        weight: 10
    }, {
        name: 'Potion of Waterbreathing',
        cost: 400,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 2
    }, {
        name: 'Potion of Growth',
        cost: 300,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Potion of Resistance',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 2
    }, {
        name: 'Potion of Hill Giant Strength',
        cost: 125,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 2
    }, {
        name: 'Potion of Animal Friendship',
        cost: 200,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Potion of Fire Breath',
        cost: 350,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Oil of Slipperiness',
        cost: 250,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Dust of Dissapearance',
        cost: 0,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: '',
        weight: 1
    }, {
        name: 'Dust of Dryness',
        cost: 0,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: '',
        weight: 1
    }, {
        name: 'Dust of Sneezing and Choking',
        cost: 0,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: '',
        weight: 1
    }, {
        name: 'Spellwrought Tattoo (2nd level)',
        cost: 0,
        spell_level: 2,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 2
    }, {
        name: 'Spellwrought Tattoo (3rd level)',
        cost: 0,
        spell_level: 3,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 2
    }
];



const permanent_tier1 = [
    {
        name: 'Driftglobe',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Boots of False Tracks',
        cost: 60,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Candle of the Deep',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 2
    }, {
        name: 'Cloak of Many Fashions',
        cost: 90,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Clockwork Amulet',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Clothes of Mending',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 2
    }, {
        name: 'Enduring Spellbook',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 2
    }, {
        name: 'Hat of Wizardry',
        cost: 75,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Horn of Silent Alarm',
        cost: 85,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 2
    }, {
        name: 'Instrument of Illusions',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Instrument of Scribing',
        cost: 80,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Lock of Trickery',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Moon-Touched Sword',
        cost: 75,
        spell_level: null,
        weapon_type: 'sword',
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Orb of Direction',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Orb of Time',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Pole of Collapsing',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 2
    }, {
        name: 'Rope of Mending',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 2
    }, {
        name: 'Ruby of the War Mage',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 2
    }, {
        name: 'Unbreakable Arrow',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: 'Walloping Ammunition',
        cost: 50,
        spell_level: null,
        weapon_type: 'ammunition',
        armor_type: null,
        source: 'XGE',
        weight: 1
    }, {
        name: "Illuminator's Tattoo",
        cost: 65,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 1
    }, {
        name: "Masquerade Tattoo",
        cost: 75,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 1
    }, {
        name: 'Amulet of Intuition',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Amulet of Respiration',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Clandestine Codex',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Companion Stones',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 2
    }, {
        name: 'Divining Rod',
        cost: 75,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Echo Stone',
        cost: 75,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Entropic Amulet',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: "Freya's Fathomless Flask",
        cost: 90,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: "Gilbert's Galvanic Gloves",
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Jar of Preservation',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Lock of Lucidity',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Luminescent Lenses',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Orb of Light',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Orb of Tracing',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Replicating Clay',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Ring of Comprehension',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 2
    }, {
        name: 'Ring of Recollection',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Rod of Resonance',
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Saddle of Symbiosis',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Splicing Gloves',
        cost: 90,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: "Tanya's Tremendous Toolset",
        cost: 50,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Umbral Tome',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Wristband of Oration',
        cost: 100,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Traceless Arrow',
        cost: 30,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Weightless Arrow',
        cost: 30,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }
];



const permanent_tier2_nonmartial = [
    {
        name: 'Immovable Rod',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: '+1 Rod of the Pact Keeper',
        cost: 400,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: '+1 Wand of the War Mage',
        cost: 400,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Wand of Magic Detection',
        cost: 150,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Wand of Magic Missiles',
        cost: 300,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Wand of Secrets',
        cost: 125,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Wand of Web',
        cost: 250,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Staff of the Adder',
        cost: 350,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Staff of the Python',
        cost: 250,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Ring of Jumping',
        cost: 250,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Ring of Mind Shielding',
        cost: 450,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Ring of Swimming',
        cost: 300,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Ring of Warmth',
        cost: 480,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Ring of Water Walking',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Cap of Water Breathing',
        cost: 450,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Circlet of Blasting',
        cost: 350,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Hat of Disguise',
        cost: 475,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Headband of Intellect',
        cost: 450,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Helm of Comprehend Languages',
        cost: 200,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Helm of Telepathy',
        cost: 300,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Eyes of Minute Seeing',
        cost: 150,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Eyes of the Eagles',
        cost: 400,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Goggles of Night',
        cost: 300,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Amulet of Proof against Detection and Location',
        cost: 400,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: '+1 Amulet of the Devout',
        cost: 425,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 1
    }, {
        name: 'Brooch of Shielding',
        cost: 375,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Necklace of Adaptation',
        cost: 450,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Periapt of Health',
        cost: 250,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Periapt of Wound Closure',
        cost: 375,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Cloak of Elvenkind',
        cost: 250,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Cloak of Protection',
        cost: 400,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Cloak of the Manta Ray',
        cost: 350,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'bracers of Archery',
        cost: 350,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Gauntlets of Ogre Power',
        cost: 450,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Gloves of Missile Snaring',
        cost: 325,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Gloves of Swimming and Climbing',
        cost: 250,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Boots of Elvenkind',
        cost: 400,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Boots of Striding and Springing',
        cost: 200,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Boots of the Winterlands',
        cost: 300,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Slippers of Spider Climbing',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: '+1 Arcane Grimoire',
        cost: 425,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 1
    }, {
        name: 'Bag of Holding',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Bag of Tricks',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: '+1 Bloodwell Vial',
        cost: 425,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 1
    }, {
        name: 'Deck of Illusions',
        cost: 450,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Feywild Shard',
        cost: 250,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 1
    }, {
        name: 'Figurine of Wondrous Power (Silver Raven)',
        cost: 380,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Gem of Brightness',
        cost: 250,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Guardian Emblem',
        cost: 300,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 1
    }, {
        name: 'Barrier Tattoo',
        cost: 200,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 1
    }, {
        name: 'Coiling Grasp Tattoo',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 1
    }, {
        name: 'Eldritch Claw Tattoo',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'TCE',
        weight: 1
    }, {
        name: 'Robe of Focus',
        cost: 400,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Wand of Shaping',
        cost: 350,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Wand of Spellweaving',
        cost: 300,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }, {
        name: 'Warding Robe',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 1
    }
];



const permanent_tier2_martial = [
    {
        name: '+1 Weapon',
        cost: 500,
        spell_level: null,
        weapon_type: 'weapon',
        armor_type: null,
        source: 'DMG',
        weight: 10
    }, {
        name: 'Javelin of Lightning',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Trident of Fish Command',
        cost: 300,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 1
    }, {
        name: 'Weapon of Warning',
        cost: 400,
        spell_level: null,
        weapon_type: 'weapon',
        armor_type: null,
        source: 'DMG',
        weight: 10
    }, {
        name: '+1 Shield',
        cost: 450,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 5
    }, {
        name: 'Sentinel Shield',
        cost: 300,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'DMG',
        weight: 5
    }, {
        name: 'Adamantine Armor',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: 'medium_heavy',
        source: 'DMG',
        weight: 10
    }, {
        name: "Mariner's Armor",
        cost: 400,
        spell_level: null,
        weapon_type: null,
        armor_type: 'armor',
        source: 'DMG',
        weight: 5
    }, {
        name: 'Mithral Armor',
        cost: 450,
        spell_level: null,
        weapon_type: null,
        armor_type: 'medium_heavy',
        source: 'DMG',
        weight: 10
    }, {
        name: 'Adaptive Armor',
        cost: 350,
        spell_level: null,
        weapon_type: null,
        armor_type: 'armor',
        source: 'MMM',
        weight: 10
    }, {
        name: 'Arcing Weapon',
        cost: 300,
        spell_level: null,
        weapon_type: 'weapon',
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Dazing Weapon',
        cost: 400,
        spell_level: null,
        weapon_type: 'weapon',
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Disruptive Armor',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: 'armor',
        source: 'MMM',
        weight: 10
    }, {
        name: 'Dragonhide Shield',
        cost: 300,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 5
    }, {
        name: 'Grevious Weapon',
        cost: 500,
        spell_level: null,
        weapon_type: 'weapon',
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Guardian Armor',
        cost: 400,
        spell_level: null,
        weapon_type: null,
        armor_type: 'medium_heavy',
        source: 'MMM',
        weight: 10
    }, {
        name: 'Imposing Weapon',
        cost: 400,
        spell_level: null,
        weapon_type: 'weapon',
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Keen Weapon',
        cost: 450,
        spell_level: null,
        weapon_type: 'weapon',
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Menacing Weapon',
        cost: 400,
        spell_level: null,
        weapon_type: 'weapon',
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Mirrorfold Studded Leather Armor',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Relentless Weapon',
        cost: 500,
        spell_level: null,
        weapon_type: 'weapon',
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Seeking Weapon',
        cost: 300,
        spell_level: null,
        weapon_type: 'weapon',
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Shimmerweave Studded Leather Armor',
        cost: 400,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Stoic Weapon',
        cost: 300,
        spell_level: null,
        weapon_type: 'weapon',
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Thirsting Weapon',
        cost: 400,
        spell_level: null,
        weapon_type: 'weapon',
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Vigilant Shield',
        cost: 250,
        spell_level: null,
        weapon_type: null,
        armor_type: null,
        source: 'MMM',
        weight: 10
    }, {
        name: 'Whitesteel Armor',
        cost: 500,
        spell_level: null,
        weapon_type: null,
        armor_type: 'medium_heavy',
        source: 'MMM',
        weight: 10
    }
];



const weapon_type_weapon = [
    {
        name: 'Dagger',
        cost: 2
    }, {
        name: 'Handaxe',
        cost: 5
    }, {
        name: 'Javelin',
        cost: 0.5
    }, {
        name: 'Mace',
        cost: 5
    }, {
        name: 'Quarterstaff',
        cost: 0.2
    }, {
        name: 'Spear',
        cost: 1
    }, {
        name: 'Crossbow, light',
        cost: 25
    }, {
        name: 'Shortbow',
        cost: 25
    }, {
        name: 'Battleaxe',
        cost: 10
    }, {
        name: 'Flail',
        cost: 10
    }, {
        name: 'Glaive',
        cost: 20
    }, {
        name: 'Greataxe',
        cost: 30
    }, {
        name: 'Greatsword',
        cost: 50
    }, {
        name: 'Halberd',
        cost: 20
    }, {
        name: 'Longsword',
        cost: 15
    }, {
        name: 'Maul',
        cost: 10
    }, {
        name: 'Morningstar',
        cost: 15
    }, {
        name: 'Pike',
        cost: 5
    }, {
        name: 'Rapier',
        cost: 25
    }, {
        name: 'Scimitar',
        cost: 25
    }, {
        name: 'Shortsword',
        cost: 10
    }, {
        name: 'Trident',
        cost: 5
    }, {
        name: 'War Pick',
        cost: 5
    }, {
        name: 'Warhammer',
        cost: 15
    }, {
        name: 'Crossbow, hand',
        cost: 75
    }, {
        name: 'Crossbow, heavy',
        cost: 50
    }, {
        name: 'Longbow',
        cost: 50
    }
];



const weapon_type_ammunition = [
    {
        name: 'Arrow'
    }, {
        name: 'Crossbow Bolt'
    }
];



const weapon_type_sword = [
    {
        name: 'Greatsword',
        cost: 50
    }, {
        name: 'Longsword',
        cost: 15
    }, {
        name: 'Rapier',
        cost: 5
    }, {
        name: 'Scimitar',
        cost: 5
    }, {
        name: 'Shortsword',
        cost: 5
    }
];



const armor_type_armor = [
    {
        name: 'Studded Leather',
        cost: 45
    }, {
        name: 'Scale Mail',
        cost: 50
    }, {
        name: 'Breastplate',
        cost: 400
    }, {
        name: 'Half-Plate',
        cost: 750
    }, {
        name: 'Splint',
        cost: 200
    }, {
        name: 'Plate',
        cost: 1500
    }
];



const armor_type_medium_heavy = [
    {
        name: 'Scale Mail',
        cost: 50
    }, {
        name: 'Breastplate',
        cost: 400
    }, {
        name: 'Half-Plate',
        cost: 750
    }, {
        name: 'Splint',
        cost: 200
    }, {
        name: 'Plate',
        cost: 1500
    }
];



const spell_level_0 = [
    {
        name: 'Control Flames', 
        cost: 0
    }, {
        name: 'Create Bonfire', 
        cost: 0
    }, {
        name: 'Dancing Lights', 
        cost: 0
    }, {
        name: 'Guidance', 
        cost: 0
    }, {
        name: 'Gust', 
        cost: 0
    }, {
        name: 'Light', 
        cost: 0
    }, {
        name: 'Mage Hand', 
        cost: 0
    }, {
        name: 'Mending', 
        cost: 0
    }, {
        name: 'Minor Illusion', 
        cost: 0
    }, {
        name: 'Mold Earth', 
        cost: 0
    }, {
        name: 'Prestidigitation', 
        cost: 0
    }, {
        name: 'Shape Water', 
        cost: 0
    }, {
        name: 'Spare the Dying', 
        cost: 0
    }, {
        name: 'Thaumaturgy', 
        cost: 0
    }
];



const spell_level_1 = [
    {
        name: 'Alarm', 
        cost: 0
    }, {
        name: 'Bless', 
        cost: 0
    }, {
        name: 'Ceremony', 
        cost: 25
    }, {
        name: 'Comprehend Languages', 
        cost: 0
    }, {
        name: 'Create or Destroy Water', 
        cost: 0
    }, {
        name: 'Cure Wounds', 
        cost: 0
    }, {
        name: 'Detect Evil and Good', 
        cost: 0
    }, {
        name: 'Detect Magic', 
        cost: 0
    }, {
        name: 'Detect Poison and Disease', 
        cost: 0
    }, {
        name: 'Find Familiar', 
        cost: 10
    }, {
        name: 'Floating Disk', 
        cost: 0
    }, {
        name: 'Fog Cloud', 
        cost: 0
    }, {
        name: 'Grease', 
        cost: 0
    }, {
        name: 'Healing Word', 
        cost: 0
    }, {
        name: 'Identify', 
        cost: 0
    }, {
        name: 'Illusory Script', 
        cost: 0
    }, {
        name: 'Jump', 
        cost: 0
    }, {
        name: 'Longstrider', 
        cost: 0
    }, {
        name: 'Protection from Evil and Good', 
        cost: 25
    }, {
        name: 'Purify Food and Drink', 
        cost: 0
    }, {
        name: 'Silent Image', 
        cost: 0
    }, {
        name: 'Sleep', 
        cost: 0
    }, {
        name: 'Snare', 
        cost: 0
    }, {
        name: 'Unseen Servant', 
        cost: 0
    }
];



const spell_level_2 = [
    {
        name: 'Arcane Lock', 
        cost: 25
    }, {
        name: 'Augury', 
        cost: 25
    }, {
        name: 'Continual Flame', 
        cost: 50
    }, {
        name: 'Darkness', 
        cost: 0
    }, {
        name: 'Darkvision', 
        cost: 0
    }, {
        name: 'Detect Thoughts', 
        cost: 0
    }, {
        name: 'Enhance Ability', 
        cost: 0
    }, {
        name: 'Enlarge/Reduce', 
        cost: 0
    }, {
        name: 'Gentle Repose', 
        cost: 0
    }, {
        name: 'Gust of Wind', 
        cost: 0
    }, {
        name: 'Invisibility', 
        cost: 0
    }, {
        name: 'Knock', 
        cost: 0
    }, {
        name: 'Lesser Restoration', 
        cost: 0
    }, {
        name: 'Levitate', 
        cost: 0
    }, {
        name: 'Locate Object', 
        cost: 0
    }, {
        name: 'Magic Mouth', 
        cost: 0
    }, {
        name: 'Prayer of healing', 
        cost: 0
    }, {
        name: 'Protection from Poison', 
        cost: 0
    }, {
        name: 'Rope Trick', 
        cost: 0
    }, {
        name: 'See Invisibility', 
        cost: 0
    }, {
        name: 'Silence', 
        cost: 0
    }, {
        name: 'Spider Climb', 
        cost: 0
    }, {
        name: 'Warding Wind', 
        cost: 0
    }, {
        name: 'Zone of Truth', 
        cost: 0
    }
];



const spell_level_3 = [
    {
        name: 'Beacon of Hope', 
        cost: 0
    }, {
        name: 'Clairvoyance', 
        cost: 0
    }, {
        name: 'Create Food and Water', 
        cost: 0
    }, {
        name: 'Daylight', 
        cost: 0
    }, {
        name: 'Dispel Magic', 
        cost: 0
    }, {
        name: 'Fly', 
        cost: 0
    }, {
        name: 'Gaseous Form', 
        cost: 0
    }, {
        name: "Leomund's Tiny Hut", 
        cost: 0
    }, {
        name: 'Magic Circle', 
        cost: 0
    }, {
        name: 'Major Image', 
        cost: 0
    }, {
        name: 'Mass Healing Word', 
        cost: 0
    }, {
        name: 'Nondetection', 
        cost: 0
    }, {
        name: 'Phantom Steed', 
        cost: 0
    }, {
        name: 'Protection from Energy', 
        cost: 0
    }, {
        name: 'Remove Curse', 
        cost: 0
    }, {
        name: 'Revivify', 
        cost: 300
    }, {
        name: 'Sending', 
        cost: 0
    }, {
        name: 'Speak with Dead', 
        cost: 0
    }, {
        name: 'Tiny Servant', 
        cost: 0
    }, {
        name: 'Tongues', 
        cost: 0
    }, {
        name: 'Water Breathing', 
        cost: 0
    }, {
        name: 'Water Walk',
        cost: 0
    }
];