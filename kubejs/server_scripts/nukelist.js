// Based off Qwerty's Nukelist
const nukelist = [
    'theurgy:alchemical_salt_creature',
    'theurgy:alchemical_salt_mineral',
    'theurgy:alchemical_salt_plant',
    'theurgy:alchemical_salt_strata',

    'theurgy:alchemical_sulfur_earthen_matters_abundant', 
    'theurgy:alchemical_sulfur_earthen_matters_common', 
    'theurgy:alchemical_sulfur_gems_abundant', 
    'theurgy:alchemical_sulfur_gems_common', 
    'theurgy:alchemical_sulfur_gems_rare', 
    'theurgy:alchemical_sulfur_gems_precious', 
    'theurgy:alchemical_sulfur_metals_abundant', 
    'theurgy:alchemical_sulfur_metals_common', 
    'theurgy:alchemical_sulfur_metals_rare',
    'theurgy:alchemical_sulfur_metals_precious',
    'theurgy:alchemical_sulfur_other_minerals_abundant',
    'theurgy:alchemical_sulfur_other_minerals_common',
    'theurgy:alchemical_sulfur_other_minerals_rare',
    'theurgy:alchemical_sulfur_other_minerals_precious',
    'theurgy:alchemical_sulfur_logs_abundant',
    'theurgy:alchemical_sulfur_crops_abundant',
    'theurgy:alchemical_sulfur_animals_abundant',
    'theurgy:alchemical_sulfur_animals_common',
    'theurgy:alchemical_sulfur_animals_rare',
    'theurgy:alchemical_sulfur_mobs_abundant',
    'theurgy:alchemical_sulfur_mobs_common',
    'theurgy:alchemical_sulfur_mobs_rare',
    'theurgy:alchemical_sulfur_mobs_precious',

    'minecraft:wooden_sword',
    'minecraft:wooden_pickaxe',
    'minecraft:wooden_shovel',
    'minecraft:wooden_axe',
    'minecraft:wooden_hoe',
    'forbidden_arcanus:wooden_blacksmith_gavel',
    
    'minecraft:stone_sword',
    'minecraft:stone_pickaxe',
    'minecraft:stone_shovel',
    'minecraft:stone_axe',
    'minecraft:stone_hoe',
    'forbidden_arcanus:stone_blacksmith_gavel',

    'sophisticatedstorage:basic_tier_upgrade',
    'sophisticatedstorage:basic_to_iron_tier_upgrade',
    'sophisticatedstorage:basic_to_gold_tier_upgrade',
    'sophisticatedstorage:basic_to_diamond_tier_upgrade',
    'sophisticatedstorage:basic_to_netherite_tier_upgrade',
    'sophisticatedstorage:copper_to_gold_tier_upgrade',
    'sophisticatedstorage:copper_to_diamond_tier_upgrade',
    'sophisticatedstorage:copper_to_netherite_tier_upgrade',
    'sophisticatedstorage:iron_to_diamond_tier_upgrade',
    'sophisticatedstorage:iron_to_netherite_tier_upgrade',
    'sophisticatedstorage:gold_to_netherite_tier_upgrade'
]

ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(nukelist)
    event.add('c:hidden_from_recipe_viewers', nukelist)
})

ServerEvents.recipes(event => {
    event.remove({output: nukelist})
})