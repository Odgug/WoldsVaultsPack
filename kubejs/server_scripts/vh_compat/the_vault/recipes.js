onEvent("recipes", event => {

    event.shaped(Item.of('the_vault:crystal_budding'),
        [
            'AEA',
            'ECE',
            'AEA'
        ], {
        C: 'the_vault:living_rock_block_cobble',
        E: 'the_vault:mystical_powder',
        A: 'minecraft:amethyst_block'
    })

    event.shapeless('the_vault:vault_palladium', ['9x the_vault:vault_platinum'])
    event.shapeless('the_vault:vault_iridium', ['9x the_vault:vault_palladium'])
    event.shapeless('9x the_vault:vault_platinum', ['the_vault:vault_palladium'])
    event.shapeless('9x the_vault:vault_palladium', ['the_vault:vault_iridium'])
})