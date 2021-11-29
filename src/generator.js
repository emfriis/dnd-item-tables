/* import { consumable_tier1 } from '../src/tables';
import { consumable_tier2 } from '../src/tables';
import { permanent_tier1 } from '../src/tables';
import { permanent_tier2_nonmartial } from '../src/tables';
import { permanent_tier2_martial } from '../src/tables';
import { weapon_type_weapon } from '../src/tables';
import { weapon_type_ammunition } from '../src/tables';
import { weapon_type_sword } from '../src/tables';
import { armor_type_armor } from '../src/tables';
import { armor_type_medium_heavy } from '../src/tables';
import { spell_0 } from '../src/tables';
import { spell_1 } from '../src/tables';
import { spell_2 } from '../src/tables';
import { spell_3 } from '../src/tables'; */

const tables = require('../src/tables')

function get_weighted_table(options) {
    var i;

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
            case 0:
                spell = get_random_table(spell_0);
                break;
            case 1:
                spell = get_random_table(spell_1);
                break;
            case 2:
                spell = get_random_table(spell_2);
                break;
            case 3:
                spell = get_random_table(spell_3);
                break;
        }

        item.name = item.name + spell.name
        item.spell = spell.name;
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

        if (item.name != ' of Warning') {
            item.name = item.name + weapon.name;
        } else {
            item.name = weapon.name + item.name;
        }
        item.weapon_type = weapon.name
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

        item.name = item_name + armor.name;
        item.armor_type = armor.name;
        item.cost += armor.cost;
    }

    return item;
}

function get_random_table(options) {
    return options[Math.floor(Math.random() * options.length)]
}


function get_x_from_table(x, table) {
    items = [];
    for (let i = 0; i < x; i++) {
        item = get_weighted_table(table);
        items.append(item);
    }

    items_map = items.reduce((prev, curr) => (prev[curr] = prev[curr] + 1 || 1, prev), {})

    console.log(items_map)
}

get_x_from_table(10, tables.consumable_tier1);