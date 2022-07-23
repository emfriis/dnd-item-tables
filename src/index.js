const c1n = document.getElementById('c1n');
const c1m = document.getElementById('c1m');
const c2n = document.getElementById('c2n');
const c2m = document.getElementById('c2m');
const p1n = document.getElementById('p1n');
const p2n = document.getElementById('p2n');
const p2mb = document.getElementById('p2mb');
const p2mn = document.getElementById('p2mn');
const smallBtn = document.getElementById('small-btn');
const mediumBtn = document.getElementById('medium-btn');
const largeBtn = document.getElementById('large-btn');
const priceMod = document.getElementById('price-mod');
const genBtn = document.getElementById('gen-btn');
const itemTbl = document.getElementById('item-tbl');



function get_weighted_table(options) {
    var i;

    if (!isNaN(priceMod.value)) {
        xCost = priceMod.value / 100;
    } else {
        xCost = 1;
    }

    var weights = [];

    for (i = 0; i < options.length; i++)
        weights[i] = options[i].weight + (weights[i - 1] || 0);
    
    var random = Math.random() * weights[weights.length - 1];
    
    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;
    
    var item = Object.create(options[i]);

    if (item.spell != null) {
        switch (item.spell) {
            case '0':
                spell = get_random_table(spell_0);
                break;
            case '1':
                spell = get_random_table(spell_1);
                break;
            case '2':
                spell = get_random_table(spell_2);
                break;
            case '3':
                spell = get_random_table(spell_3);
                break;
            case '1_martial':
                spell = get_random_table(spell_1_martial);
                break;
            case '2_martial':
                spell = get_random_table(spell_2_martial);
                break;
            case '3_martial':
                spell = get_random_table(spell_3_martial);
                break;
        }

        item.name = item.name + spell.name
        item.cost += spell.cost;
    }

    if (item.weapon_type != null) {
        switch (item.weapon_type) {
            case 'weapon':
                weapon = get_random_table(weapon_type_weapon);
                break;
            case('ammunition'):
                weapon = get_random_table(weapon_type_ammunition);
                break;
            case('sword'):
                weapon = get_random_table(weapon_type_sword);
                break;
        }

        if (item.name != ' of Warning' && item.name != ' of Spite') {
            item.name = item.name + weapon.name;
        } else {
            item.name = weapon.name + item.name;
        }
        item.cost += weapon.cost;
    }

    if (item.armor_type != null) {
        switch (item.armor_type) {
            case 'armor':
                armor = get_random_table(armor_type_armor);
                break;
            case 'medium_heavy':
                armor = get_random_table(armor_type_medium_heavy);
                break;
        }

        item.name = item.name + armor.name;
        item.cost += armor.cost;
    }

    if (item.resistance != null) {
        switch (item.resistance) {
            case 'resistance_energy':
                resistance = get_random_table(resistance_energy);
                break;
            case 'resistance_dragon':
                resistance = get_random_table(resistance_dragon);
                break;
            case 'resistance_dragon_all':
                resistance = get_random_table(resistance_dragon_all);
                break;
        }

        item.name = item.name + " (" + resistance + ")";
    }

    item_new = {};
    item_new.name = item.name;
    item_new.cost = item.cost * xCost;
    item_new.source = item.source;

    return item_new;
}

function get_random_table(options) {
    return options[Math.floor(Math.random() * options.length)]
}

function get_x_from_table(x, table, items) {
    for (let i = 0; i < x; i++) {
        item = get_weighted_table(table);
        items.push(item);
    }

    return items;
}

function sort_items(items) {
    const items_sorted = [...items.reduce( (map, item) => {
        if (!map.has(item.name)) map.set(item.name, { ...item, count: 0 });
        map.get(item.name).count++;
        return map;
    }, new Map).values()];

    return items_sorted.sort((item1, item2) => (item1.cost > item2.cost) ? 1 : -1);
}

function gen_magic_shop() {
    items = []
    items = get_x_from_table(c1n.value, basic_consumable_common, items);
    items = get_x_from_table(c1m.value, martial_consumable_common, items);
    items = get_x_from_table(c2n.value, basic_consumable_uncommon, items);
    items = get_x_from_table(c2m.value, martial_consumable_uncommon, items);
    items = get_x_from_table(p1n.value, basic_item_common, items);
    items = get_x_from_table(p2n.value, basic_item_uncommon, items);
    items = get_x_from_table(p2mb.value, martial_item_uncommon, items);
    items = get_x_from_table(p2mn.value, arcane_item_uncommon, items); 
    items = sort_items(items);

    let headers = ['Name', 'Cost (gp)', 'Sourcebook', 'Quantity'];

    let table = document.createElement('table');
    table.setAttribute('id', 'tbl')
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    items.forEach(item => {
        let row = document.createElement('tr');
        Object.values(item).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
    itemTbl.appendChild(table);
} 




const basic_consumable_common = [
    {
        name: 'Potion of Healing',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 187',
        weight: 30
    }, {
        name: 'Spell Scroll of ',
        cost: 25,
        spell: '0',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 200',
        weight: 5
    }, {
        name: 'Spell Scroll of ',
        cost: 50,
        spell: '1',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 200',
        weight: 20
    }, {
        name: 'Potion of Climbing',
        cost: 30,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 187',
        weight: 1
    }, {
        name: 'Spellwrought Tattoo of ',
        cost: 50,
        spell: '0',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 135',
        weight: 1
    }, {
        name: 'Spellwrought Tattoo of ',
        cost: 75,
        spell: '1',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 135',
        weight: 1
    }, {
        name: 'Bead of Nourishment',
        cost: 25,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 136',
        weight: 1
    }, {
        name: 'Bead of Refreshment',
        cost: 25,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 136',
        weight: 1
    }, {
        name: 'Potion of Darkvision',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 1',
        weight: 1
    }, {
        name: 'Potion of Swimming',
        cost: 30,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 2',
        weight: 1
    }, {
        name: 'Bead of Recovery',
        cost: 75,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 1',
        weight: 1
    }, {
        name: 'Bead of Restoration',
        cost: 75,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 1',
        weight: 1
    }, {
        name: 'Bath Potion',
        cost: 25,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 33',
        weight: 1
    }
];



const martial_consumable_common = [
    {
        name: 'Potion of Healing',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 187',
        weight: 30
    }, {
        name: 'Spell Scroll of ',
        cost: 50,
        spell: '1_martial',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 200',
        weight: 20
    }, {
        name: '+1 ',
        cost: 50,
        spell: null,
        weapon_type: 'ammunition',
        armor_type: null,
        resistance: null,
        source: 'DMG 150',
        weight: 20
    }, {
        name: 'Spellwrought Tattoo of ',
        cost: 75,
        spell: '1_martial',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 135',
        weight: 2
    }, {
        name: 'Traceless Arrow',
        cost: 30,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 2',
        weight: 5
    }, {
        name: 'Potion of Agility',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 1',
        weight: 1
    }, {
        name: 'Potion of Bear Strength',
        cost: 75,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 1',
        weight: 1
    }
]



const basic_consumable_uncommon = [
    {
        name: 'Potion of Greater Healing',
        cost: 150,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 187',
        weight: 25
    }, {
        name: 'Spell Scroll of ',
        cost: 150,
        spell: '2',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 200',
        weight: 10
    }, {
        name: 'Spell Scroll of ',
        cost: 270,
        spell: '3',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 200',
        weight: 10
    }, {
        name: 'Dust of Dissapearance',
        cost: 150,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 166',
        weight: 1
    }, {
        name: 'Dust of Dryness',
        cost: 150,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 166',
        weight: 1
    }, {
        name: 'Spellwrought Tattoo of ',
        cost: 225,
        spell: '2',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 135',
        weight: 1
    }, {
        name: 'Spellwrought Tattoo of ',
        cost: 400,
        spell: '3',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 135',
        weight: 1
    }, {
        name: 'Bag of Sundrops',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 30',
        weight: 1
    }, {
        name: 'Shadow Ink',
        cost: 150,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 113',
        weight: 1
    }
];



const martial_consumable_uncommon = [
    {
        name: 'Potion of Greater Healing',
        cost: 150,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 187',
        weight: 25
    }, {
        name: 'Spell Scroll of ',
        cost: 150,
        spell: '2_martial',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 200',
        weight: 5
    }, {
        name: 'Spell Scroll of ',
        cost: 270,
        spell: '3_martial',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 200',
        weight: 20
    }, {
        name: '+2 ',
        cost: 250,
        spell: null,
        weapon_type: 'ammunition',
        armor_type: null,
        resistance: null,
        source: 'DMG 150',
        weight: 20
    }, {
        name: 'Dust of Sneezing and Choking',
        cost: 150,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 166',
        weight: 1
    }, {
        name: 'Oil of Slipperiness',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 184',
        weight: 1
    }, {
        name: 'Potion of Fire Breath',
        cost: 350,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 187',
        weight: 1
    }, {
        name: 'Potion of Growth',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 187',
        weight: 1
    }, {
        name: 'Potion of Resistance',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: 'resistance_energy',
        source: 'DMG 188',
        weight: 5
    }, {
        name: 'Potion of Hill Giant Strength',
        cost: 125,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 187',
        weight: 1
    }, {
        name: 'Spellwrought Tattoo of ',
        cost: 225,
        spell: '2_martial',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 135',
        weight: 2
    }, {
        name: 'Spellwrought Tattoo of ',
        cost: 400,
        spell: '3_martial',
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 135',
        weight: 2
    }, {
        name: 'Healing ',
        cost: 200,
        spell: null,
        weapon_type: 'ammunition',
        armor_type: null,
        resistance: null,
        source: 'TGS 76',
        weight: 1
    }, {
        name: "Potion of Dragon's Breath",
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: 'resistance_dragon',
        source: 'TGS 98',
        weight: 1
    }, {
        name: 'Void ',
        cost: 100,
        spell: null,
        weapon_type: 'ammunition',
        armor_type: null,
        resistance: null,
        source: 'TGS 139',
        weight: 1
    }
]



const basic_item_common = [
    {
        name: 'Driftglobe',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 166',
        weight: 1
    }, {
        name: 'Boots of False Tracks',
        cost: 60,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 136',
        weight: 1
    }, {
        name: 'Candle of the Deep',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 136',
        weight: 2
    }, {
        name: 'Cloak of Many Fashions',
        cost: 90,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 136',
        weight: 1
    }, {
        name: 'Clockwork Amulet',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 137',
        weight: 1
    }, {
        name: 'Clothes of Mending',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 137',
        weight: 2
    }, {
        name: 'Enduring Spellbook',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 137',
        weight: 2
    }, {
        name: 'Hat of Wizardry',
        cost: 75,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 137',
        weight: 1
    }, {
        name: 'Horn of Silent Alarm',
        cost: 85,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 137',
        weight: 2
    }, {
        name: 'Instrument of Illusions',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 137',
        weight: 1
    }, {
        name: 'Instrument of Scribing',
        cost: 80,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 138',
        weight: 1
    }, {
        name: 'Lock of Trickery',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 138',
        weight: 1
    }, {
        name: 'Orb of Direction',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 138',
        weight: 1
    }, {
        name: 'Orb of Time',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 138',
        weight: 1
    }, {
        name: 'Pole of Collapsing',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 138',
        weight: 2
    }, {
        name: 'Rope of Mending',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 138',
        weight: 2
    }, {
        name: "Illuminator's Tattoo",
        cost: 65,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 129',
        weight: 1
    }, {
        name: "Masquerade Tattoo",
        cost: 75,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 131',
        weight: 1
    }, {
        name: 'Amulet of Intuition',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 3',
        weight: 1
    }, {
        name: 'Amulet of Respiration',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 3',
        weight: 1
    }, {
        name: 'Clandestine Codex',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 3',
        weight: 1
    }, {
        name: 'Companion Stones',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 3',
        weight: 2
    }, {
        name: 'Divining Rod',
        cost: 75,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 3',
        weight: 1
    }, {
        name: 'Echo Stone',
        cost: 75,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 3',
        weight: 1
    }, {
        name: "Freya's Fathomless Flask",
        cost: 90,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 3',
        weight: 1
    }, {
        name: "Gilbert's Galvanic Gloves",
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 4',
        weight: 1
    }, {
        name: 'Jar of Preservation',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 4',
        weight: 1
    }, {
        name: 'Lock of Lucidity',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 4',
        weight: 1
    }, {
        name: 'Luminescent Lenses',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 4',
        weight: 1
    }, {
        name: 'Orb of Light',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 4',
        weight: 1
    }, {
        name: 'Orb of Tracing',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 4',
        weight: 1
    }, {
        name: 'Replicating Clay',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 4',
        weight: 1
    }, {
        name: 'Ring of Comprehension',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 4',
        weight: 2
    }, {
        name: 'Ring of Recollection',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 4',
        weight: 1
    }, {
        name: 'Rod of Resonance',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 5',
        weight: 1
    }, {
        name: 'Saddle of Symbiosis',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 5',
        weight: 1
    }, {
        name: "Tanya's Tremendous Toolset",
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 5',
        weight: 1
    }, {
        name: 'Umbral Tome',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 5',
        weight: 1
    }, {
        name: 'Wristband of Oration',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 5',
        weight: 1
    }, {
        name: 'Bard-in-a-Box',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 31',
        weight: 1
    }, {
        name: "Companion's Band",
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 46',
        weight: 1
    }, {
        name: 'Container of Heat and Frost',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 47',
        weight: 1
    }, {
        name: "Orator's Quill",
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 93',
        weight: 1
    }, {
        name: 'Permanent Parchment',
        cost: 50,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 95',
        weight: 1
    }, {
        name: 'Quicksilver Clay',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 102',
        weight: 1
    }, {
        name: 'Ring of the Fowl Sentinel',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 107',
        weight: 1
    }, {
        name: 'Webgrip Rucksack',
        cost: 75,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 143',
        weight: 1
    }
];



const basic_item_uncommon = [
    {
        name: 'Immovable Rod',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 175',
        weight: 1
    }, {
        name: 'Wand of Magic Detection',
        cost: 150,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 211',
        weight: 1
    }, {
        name: 'Wand of Secrets',
        cost: 125,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 211',
        weight: 1
    }, {
        name: 'Ring of Jumping',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 191',
        weight: 1
    }, {
        name: 'Ring of Mind Shielding',
        cost: 450,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 191',
        weight: 1
    }, {
        name: 'Ring of Swimming',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 193',
        weight: 1
    }, {
        name: 'Ring of Warmth',
        cost: 480,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 193',
        weight: 1
    }, {
        name: 'Ring of Water Walking',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 193',
        weight: 1
    }, {
        name: 'Cap of Water Breathing',
        cost: 450,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 157',
        weight: 1
    }, {
        name: 'Hat of Disguise',
        cost: 475,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 173',
        weight: 1
    }, {
        name: 'Headband of Intellect',
        cost: 450,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 173',
        weight: 1
    }, {
        name: 'Helm of Comprehend Languages',
        cost: 200,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 173',
        weight: 1
    }, {
        name: 'Helm of Telepathy',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 174',
        weight: 1
    }, {
        name: 'Eyes of Minute Seeing',
        cost: 150,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 168',
        weight: 1
    }, {
        name: 'Eyes of the Eagle',
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 168',
        weight: 1
    }, {
        name: 'Goggles of Night',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 172',
        weight: 1
    }, {
        name: 'Amulet of Proof against Detection and Location',
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 150',
        weight: 1
    }, {
        name: 'Necklace of Adaptation',
        cost: 450,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 182',
        weight: 1
    }, {
        name: 'Periapt of Health',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 184',
        weight: 1
    }, {
        name: 'Cloak of Elvenkind',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 158',
        weight: 1
    }, {
        name: 'Cloak of the Manta Ray',
        cost: 350,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 159',
        weight: 1
    }, {
        name: 'Gloves of Swimming and Climbing',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 172',
        weight: 1
    }, {
        name: 'Boots of Elvenkind',
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 155',
        weight: 1
    }, {
        name: 'Boots of Striding and Springing',
        cost: 200,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 156',
        weight: 1
    }, {
        name: 'Boots of the Winterlands',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 156',
        weight: 1
    }, {
        name: 'Slippers of Spider Climbing',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 200',
        weight: 1
    }, {
        name: 'Bag of Holding',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 153',
        weight: 1
    }, {
        name: 'Deck of Illusions',
        cost: 450,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 161',
        weight: 1
    }, {
        name: 'Figurine of Wondrous Power (Silver Raven)',
        cost: 380,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 170',
        weight: 1
    }, {
        name: 'Gem of Brightness',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 171',
        weight: 1
    }, {
        name: 'Bands of the Found and Lost',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 31',
        weight: 1
    }, {
        name: 'Boots of the Cloud Jumper',
        cost: 450,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 37',
        weight: 1
    }, {
        name: 'Candle of Anti-Light',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 40',
        weight: 1
    }, {
        name: "Charlatan's Wardrobe",
        cost: 200,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 42',
        weight: 1
    }, {
        name: "Devil's Detail Eyepatch",
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 52',
        weight: 1
    }, {
        name: 'Everice Box',
        cost: 150,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 60',
        weight: 1
    }, {
        name: 'Eye of the Bookwurm',
        cost: 150,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 61',
        weight: 1
    }, {
        name: 'Ironshod Trotters',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 81',
        weight: 1
    }, {
        name: "Locksmith's Bane",
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 84',
        weight: 1
    }, {
        name: 'Mammoth Boots',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 85',
        weight: 1
    }, {
        name: "Seafarer's Jacket",
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 110',
        weight: 1
    }
];



const martial_item_1_uncommon = [
    {
        name: '+1 ',
        cost: 500,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'DMG 213',
        weight: 10
    }, {
        name: 'Javelin of Lightning',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 178',
        weight: 1
    }, {
        name: ' of Warning',
        cost: 400,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'DMG 213',
        weight: 10
    }, {
        name: '+1 Shield',
        cost: 450,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 200',
        weight: 5
    }, {
        name: 'Sentinel Shield',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 199',
        weight: 5
    }, {
        name: 'Adamantine ',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: 'medium_heavy',
        resistance: null,
        source: 'DMG 150',
        weight: 10
    }, {
        name: "Mariner's ",
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: 'armor',
        resistance: null,
        source: 'DMG 181',
        weight: 5
    }, {
        name: 'Mithral ',
        cost: 450,
        spell: null,
        weapon_type: null,
        armor_type: 'medium_heavy',
        resistance: null,
        source: 'DMG 182',
        weight: 10
    }, {
        name: 'Moon-Touched ',
        cost: 75,
        spell: null,
        weapon_type: 'sword',
        armor_type: null,
        resistance: null,
        source: 'XGE 138',
        weight: 10
    }, {
        name: 'Unbreakable Arrow',
        cost: 30,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 139',
        weight: 1
    }, {
        name: 'Walloping Ammunition',
        cost: 30,
        spell: null,
        weapon_type: 'ammunition',
        armor_type: null,
        resistance: null,
        source: 'XGE 139',
        weight: 1
    }, {
        name: 'Adaptive ',
        cost: 350,
        spell: null,
        weapon_type: null,
        armor_type: 'armor',
        resistance: null,
        source: 'MMM 6',
        weight: 10
    }, {
        name: 'Arcing ',
        cost: 300,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'MMM 6',
        weight: 10
    }, {
        name: 'Dazing ',
        cost: 400,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'MMM 6',
        weight: 10
    }, {
        name: 'Disruptive ',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: 'armor',
        resistance: null,
        source: 'MMM 6',
        weight: 10
    }, {
        name: 'Dragonhide Shield',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: 'resistance_dragon',
        source: 'MMM 6',
        weight: 5
    }, {
        name: 'Grevious ',
        cost: 500,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'MMM 6',
        weight: 10
    }, {
        name: 'Guardian ',
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: 'medium_heavy',
        resistance: null,
        source: 'MMM 6',
        weight: 10
    }, {
        name: 'Imposing ',
        cost: 400,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'MMM 7',
        weight: 10
    }, {
        name: 'Keen ',
        cost: 450,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'MMM 7',
        weight: 10
    }, {
        name: 'Menacing ',
        cost: 400,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'MMM 7',
        weight: 10
    }, {
        name: 'Mirrorfold Studded Leather',
        cost: 545,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 7',
        weight: 10
    }, {
        name: 'Relentless ',
        cost: 500,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'MMM 7',
        weight: 10
    }, {
        name: 'Seeking ',
        cost: 300,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'MMM 7',
        weight: 10
    }, {
        name: 'Shimmerweave Studded Leather',
        cost: 445,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 8',
        weight: 10
    }, {
        name: 'Stoic ',
        cost: 300,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'MMM 8',
        weight: 10
    }, {
        name: 'Thirsting ',
        cost: 400,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'MMM 8',
        weight: 10
    }, {
        name: 'Vigilant Shield',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 8',
        weight: 10
    }, {
        name: 'Whitesteel ',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: 'medium_heavy',
        resistance: null,
        source: 'MMM 8',
        weight: 10
    }, {
        name: 'Weightless Arrow',
        cost: 30,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 2',
        weight: 5
    }, {
        name: 'Axe Beak Tomahawk',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 30',
        weight: 5
    }, {
        name: 'Barge Helm',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 32',
        weight: 5
    }, {
        name: 'Barricade Shield',
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 32',
        weight: 5
    }, {
        name: 'Battlement Bow',
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 34',
        weight: 5
    }, {
        name: 'Chromacloth',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 42',
        weight: 5
    }, {
        name: 'Discordant Thunderstave',
        cost: 600,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 52',
        weight: 5
    }, {
        name: 'Dragon Edge ',
        cost: 0,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: 'resistance_dragon',
        source: 'TGS 55',
        weight: 10
    }, {
        name: 'Festerwood Buckler',
        cost: 150,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 62',
        weight: 5
    }, {
        name: 'Festerwood Logger',
        cost: 350,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 62',
        weight: 5
    }, {
        name: 'Frostbitten Buckler',
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 70',
        weight: 5
    }, {
        name: 'Frozen Dagger',
        cost: 350,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 70',
        weight: 5
    }, {
        name: 'Ice Sickle',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 78',
        weight: 5
    }, {
        name: 'Overshield',
        cost: 750,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 93',
        weight: 5
    }, {
        name: 'Prismatic Javelin',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 98',
        weight: 5
    }, {
        name: "Torchbearer's Reach",
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 135',
        weight: 5
    }, {
        name: 'Venombane Studded Leather',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 138',
        weight: 5
    }, {
        name: ' of Spite',
        cost: 600,
        spell: null,
        weapon_type: 'weapon',
        armor_type: null,
        resistance: null,
        source: 'TGS 143',
        weight: 1
    }
];



const martial_item_2_uncommon = [
    {
        name: '+1 Wand of the War Mage',
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 212',
        weight: 1
    }, {
        name: 'Wand of Magic Missiles',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 211',
        weight: 1
    }, {
        name: 'Wand of Web',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 212',
        weight: 1
    }, {
        name: 'Circlet of Blasting',
        cost: 350,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 158',
        weight: 1
    }, {
        name: 'Brooch of Shielding',
        cost: 375,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 156',
        weight: 1
    }, {
        name: 'Periapt of Wound Closure',
        cost: 375,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 184',
        weight: 1
    }, {
        name: 'Cloak of Protection',
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 159',
        weight: 1
    }, {
        name: 'Bracers of Archery',
        cost: 350,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 156',
        weight: 1
    }, {
        name: 'Gauntlets of Ogre Power',
        cost: 450,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 171',
        weight: 1
    }, {
        name: 'Gloves of Missile Snaring',
        cost: 325,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'DMG 172',
        weight: 1
    }, {
        name: '+1 Arcane Grimoire',
        cost: 425,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 120',
        weight: 1
    }, {
        name: '+1 Bloodwell Vial',
        cost: 425,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 122',
        weight: 1
    }, {
        name: 'Barrier Tattoo',
        cost: 200,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 122',
        weight: 1
    }, {
        name: 'Coiling Grasp Tattoo',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 123',
        weight: 1
    }, {
        name: 'Eldritch Claw Tattoo',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 126',
        weight: 1
    }, {
        name: '+1 Moon Sickle',
        cost: 1500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 133',
        weight: 1
    }, {
        name: 'Guardian Emblem',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TCE 128',
        weight: 1
    }, {
        name: 'Ruby of the War Mage',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'XGE 138',
        weight: 1
    }, {
        name: 'Robe of Focus',
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 7',
        weight: 1
    }, {
        name: 'Splicing Gloves',
        cost: 100,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 5',
        weight: 1
    }, {
        name: 'Wand of Shaping',
        cost: 350,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 8',
        weight: 1
    }, {
        name: 'Wand of Spellweaving',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 8',
        weight: 1
    }, {
        name: 'Warding Robe',
        cost: 500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'MMM 8',
        weight: 1
    }, {
        name: "Abjurer's Gilder",
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 27',
        weight: 1
    }, {
        name: 'Amulet of Equilibrium',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 27',
        weight: 1
    }, {
        name: 'Clockwork Faefly',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 44',
        weight: 1
    }, {
        name: 'Eaglereign',
        cost: 600,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 58',
        weight: 1
    }, {
        name: 'Fireweaver Gloves',
        cost: 350,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 65',
        weight: 1
    }, {
        name: 'Inferno Rope',
        cost: 300,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 80',
        weight: 1
    }, {
        name: 'Ironleaf Oaken Shield',
        cost: 600,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 80',
        weight: 1
    }, {
        name: 'Relentless Bulwark',
        cost: 600,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 105',
        weight: 1
    }, {
        name: 'Ring of the Sandskimmer',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 107',
        weight: 1
    }, {
        name: 'Ring of Wind',
        cost: 350,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 107',
        weight: 1
    }, {
        name: 'Rocborne Robe',
        cost: 400,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 108',
        weight: 1
    }, {
        name: 'Sirensong Silencer',
        cost: 250,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 117',
        weight: 1
    }, {
        name: 'Spellwoven Robe',
        cost: 1500,
        spell: null,
        weapon_type: null,
        armor_type: null,
        resistance: null,
        source: 'TGS 118',
        weight: 1
    }
]



const weapon_type_weapon = [
    {
        name: 'Dagger',
        cost: 2
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
        name: 'Light Crossbow',
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
        name: 'Hand Crossbow',
        cost: 75
    }, {
        name: 'Heavy Crossbow',
        cost: 50
    }, {
        name: 'Longbow',
        cost: 50
    }
];



const weapon_type_ammunition = [
    {
        name: 'Arrow',
        cost: 0
    }, {
        name: 'Crossbow Bolt',
        cost: 0
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
        name: 'Chain Mail',
        cost: 75
    }, {
        name: 'Splint',
        cost: 200
    }, {
        name: 'Plate',
        cost: 1500
    }
];



const spell_0 = [
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



const spell_1 = [
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
        name: 'Purify Food and Drink', 
        cost: 0
    }, {
        name: 'Unseen Servant', 
        cost: 0
    }
];



const spell_2 = [
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
        name: 'Darkvision', 
        cost: 0
    }, {
        name: 'Detect Thoughts', 
        cost: 0
    }, {
        name: 'Enhance Ability', 
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
        name: 'Prayer of Healing', 
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



const spell_3 = [
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



const spell_1_martial = [
    {
        name: 'Bane', 
        cost: 0
    }, {
        name: 'Bless',
        cost: 0
    }, {
        name: 'Burning Hands', 
        cost: 0
    }, {
        name: 'Catapult', 
        cost: 0
    }, {
        name: 'Cause Fear', 
        cost: 0
    }, {
        name: 'Cure Wounds', 
        cost: 0
    }, {
        name: 'False Life', 
        cost: 0
    }, {
        name: 'Fog Cloud', 
        cost: 0
    }, {
        name: 'Grease', 
        cost: 0
    }, {
        name: 'Guiding Bolt', 
        cost: 0
    }, {
        name: 'Healing Word', 
        cost: 0
    }, {
        name: 'Ice Knife', 
        cost: 0
    }, {
        name: 'Inflict Wounds', 
        cost: 0
    }, {
        name: 'Longstrider', 
        cost: 0
    }, {
        name: 'Mage Armor', 
        cost: 0
    }, {
        name: 'Magic Missile', 
        cost: 0
    }, {
        name: 'Protection from Evil and Good', 
        cost: 25
    }, {
        name: 'Ray of Sickness', 
        cost: 0
    }, {
        name: 'Sanctuary', 
        cost: 0
    }, {
        name: 'Shield of Faith', 
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
        name: 'Thunderwave', 
        cost: 0
    }
];



const spell_2_martial = [
    {
        name: 'Acid Arrow', 
        cost: 0
    }, {
        name: "Aganazzar's Scorcher", 
        cost: 0
    }, {
        name: 'Aid', 
        cost: 0
    }, {
        name: 'Blur', 
        cost: 0
    }, {
        name: 'Cloud of Daggers', 
        cost: 0
    }, {
        name: 'Darkness', 
        cost: 0
    }, {
        name: "Dragon's Breath", 
        cost: 0
    }, {
        name: 'Dust Devil', 
        cost: 0
    }, {
        name: 'Earthbind', 
        cost: 0
    }, {
        name: 'Enlarge/Reduce', 
        cost: 0
    }, {
        name: 'Flaming Sphere', 
        cost: 0
    }, {
        name: 'Gust of Wind', 
        cost: 0
    }, {
        name: 'Hold Person', 
        cost: 0
    }, {
        name: 'Invisibility', 
        cost: 0
    }, {
        name: 'Lesser Restoration', 
        cost: 0
    }, {
        name: 'Levitate', 
        cost: 0
    }, {
        name: 'Magic Weapon', 
        cost: 0
    }, {
        name: "Maximilian's Earthen Grasp", 
        cost: 0
    }, {
        name: 'Mind Spike', 
        cost: 0
    }, {
        name: 'Mirror Image', 
        cost: 0
    }, {
        name: 'Misty Step', 
        cost: 0
    }, {
        name: 'Phantasmal Force', 
        cost: 0
    }, {
        name: 'Prayer of Healing', 
        cost: 0
    }, {
        name: 'Protection from Poison', 
        cost: 0
    }, {
        name: 'Ray of Enfeeblement', 
        cost: 0
    }, {
        name: 'Scorching Ray', 
        cost: 0
    }, {
        name: 'Shadow Blade', 
        cost: 0
    }, {
        name: 'Shatter', 
        cost: 0
    }, {
        name: 'Silence', 
        cost: 0
    }, {
        name: 'Spider Climb', 
        cost: 0
    }, {
        name: 'Spiritual Weapon', 
        cost: 0
    }, {
        name: "Tasha's Mind Whip", 
        cost: 0
    }, {
        name: 'Web', 
        cost: 0
    }
];



const spell_3_martial = [
    {
        name: 'Beacon of Hope', 
        cost: 0
    }, {
        name: 'Blink', 
        cost: 0
    }, {
        name: 'Dispel Magic', 
        cost: 0
    }, {
        name: 'Fear', 
        cost: 0
    }, {
        name: 'Fireball', 
        cost: 0
    }, {
        name: 'Fly', 
        cost: 0
    }, {
        name: 'Haste', 
        cost: 0
    }, {
        name: 'Hypnotic Pattern', 
        cost: 0
    }, {
        name: 'Intellect Fortress', 
        cost: 0
    }, {
        name: 'Life Transferance', 
        cost: 0
    }, {
        name: 'Lightning Bolt', 
        cost: 0
    }, {
        name: 'Major Image', 
        cost: 0
    }, {
        name: 'Mass Healing Word', 
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
        name: 'Sleet Storm', 
        cost: 0
    }, {
        name: 'Slow', 
        cost: 0
    }, {
        name: 'Spirit Guardians', 
        cost: 0
    }, {
        name: 'Spirit Shroud', 
        cost: 0
    }, {
        name: 'Stinking Cloud', 
        cost: 0
    }, {
        name: 'Thunder Step', 
        cost: 0
    }, {
        name: 'Tidal Wave', 
        cost: 0
    }, {
        name: 'Vampiric Touch', 
        cost: 0
    }, {
        name: 'Wall of Sand', 
        cost: 0
    }, {
        name: 'Wall of Water', 
        cost: 0
    }
];



resistance_energy = [
    'Acid', 'Cold', 'Fire', 'Lightning', 'Thunder'
]



resistance_dragon = [
    'Black', 'Blue', 'Green', 'Red', 'White'
]



resistance_dragon_all = [
    'Black', 'Blue', 'Brass', 'Bronze', 'Copper', 'Gold', 'Green', 'Red', 'Silver', 'White'
]



smallBtn.addEventListener('click', () => {
    c1n.value = '10';
    c1m.value = '5';
    c2n.value = '1';
    c2m.value = '0';
    p1n.value = '2';
    p2n.value = '0';
    p2mb.value = '0';
    p2mn.value = '0';
});

mediumBtn.addEventListener('click', () => {
    c1n.value = '30';
    c1m.value = '15';
    c2n.value = '15';
    c2m.value = '5';
    p1n.value = '5';
    p2n.value = '1';
    p2mb.value = '1';
    p2mn.value = '1';
});

largeBtn.addEventListener('click', () => {
    c1n.value = '30';
    c1m.value = '15';
    c2n.value = '15';
    c2m.value = '10';
    p1n.value = '10';
    p2n.value = '5';
    p2mb.value = '5';
    p2mn.value = '5';
});

genBtn.addEventListener('click', (e) => {
    e.preventDefault();

    itemTbl.innerHTML = "";

    items = []
    items = get_x_from_table(c1n.value, basic_consumable_common, items);
    items = get_x_from_table(c1m.value, martial_consumable_common, items);
    items = get_x_from_table(c2n.value, basic_consumable_uncommon, items);
    items = get_x_from_table(c2m.value, martial_consumable_uncommon, items);
    items = get_x_from_table(p1n.value, basic_item_common, items);
    items = get_x_from_table(p2n.value, basic_item_uncommon, items);
    items = get_x_from_table(p2mb.value, martial_item_1_uncommon, items);
    items = get_x_from_table(p2mn.value, martial_item_2_uncommon, items); 
    items = sort_items(items);

    let headers = ['Name', 'Cost (gp)', 'Sourcebook', 'Quantity'];

    let table = document.createElement('table');
    table.setAttribute('id', 'tbl')
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    items.forEach(item => {
        let row = document.createElement('tr');
        Object.values(item).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
    itemTbl.appendChild(table);
});