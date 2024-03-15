let woodTypes = ['oak', 'birch', 'warped', 'spruce', 'dark_oak', 'crimson', 'acacia', 'jungle', 'vault_wooden_planks', 'overgrown', 'chromatic', 'tenos', 'velara', 'driftwood'];
let dyes = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
onEvent("recipes", event => {

    event.shaped(Item.of('sophisticatedstorage:chest', { 'woodType': `vault_wooden_planks` }),
        [
            'III',
            'ICI',
            'III'
        ], {
        I: 'the_vault:wooden_planks',
        C: 'minecraft:redstone_torch'
    })

    event.shaped(Item.of('sophisticatedstorage:chest', { 'woodType': `driftwood` }),
        [
            'III',
            'ICI',
            'III'
        ], {
        I: 'the_vault:driftwood_planks',
        C: 'minecraft:redstone_torch'
    })

    event.shaped(Item.of('sophisticatedstorage:chest', { 'woodType': `overgrown` }),
        [
            'III',
            'ICI',
            'III'
        ], {
        I: 'the_vault:overgrown_wooden_planks',
        C: 'minecraft:redstone_torch'
    })

    event.shaped(Item.of('sophisticatedstorage:chest', { 'woodType': `chromatic` }),
        [
            'III',
            'ICI',
            'III'
        ], {
        I: 'the_vault:chromatic_planks',
        C: 'minecraft:redstone_torch'
    })

    event.shaped(Item.of('sophisticatedstorage:chest', { 'woodType': `tenos` }),
        [
            'III',
            'ICI',
            'III'
        ], {
        I: 'the_vault:tenos_planks',
        C: 'minecraft:redstone_torch'
    })

    event.shaped(Item.of('sophisticatedstorage:chest', { 'woodType': `velara` }),
        [
            'III',
            'ICI',
            'III'
        ], {
        I: 'the_vault:velara_planks',
        C: 'minecraft:redstone_torch'
    })




    event.shaped(Item.of('sophisticatedstorage:barrel', { 'woodType': `vault_wooden_planks` }),
        [
            'IXI',
            'ICI',
            'IXI'
        ], {
        I: 'the_vault:wooden_planks',
        X: 'the_vault:wooden_slab',
        C: 'minecraft:redstone_torch'
    })

    event.shaped(Item.of('sophisticatedstorage:barrel', { 'woodType': `overgrown` }),
        [
            'IXI',
            'ICI',
            'IXI'
        ], {
        I: 'the_vault:overgrown_wooden_planks',
        X: 'the_vault:overgrown_wooden_slab',
        C: 'minecraft:redstone_torch'
    })

    event.shaped(Item.of('sophisticatedstorage:barrel', { 'woodType': `chromatic` }),
        [
            'IXI',
            'ICI',
            'IXI'
        ], {
        I: 'the_vault:chromatic_planks',
        X: 'the_vault:chromatic_slab',
        C: 'minecraft:redstone_torch'
    })

    event.shaped(Item.of('sophisticatedstorage:barrel', { 'woodType': `driftwood` }),
        [
            'IXI',
            'ICI',
            'IXI'
        ], {
        I: 'the_vault:driftwood_planks',
        X: 'the_vault:driftwood_slab',
        C: 'minecraft:redstone_torch'
    })

    event.shaped(Item.of('sophisticatedstorage:barrel', { 'woodType': `tenos` }),
        [
            'IXI',
            'ICI',
            'IXI'
        ], {
        I: 'the_vault:tenos_planks',
        X: 'the_vault:gem_larimar',
        C: 'minecraft:redstone_torch'
    })

    event.shaped(Item.of('sophisticatedstorage:barrel', { 'woodType': `velara` }),
        [
            'IXI',
            'ICI',
            'IXI'
        ], {
        I: 'the_vault:velara_planks',
        X: 'the_vault:gem_alexandrite',
        C: 'minecraft:redstone_torch'
    })


    woodTypes.forEach(wood => {

        event.shaped(Item.of('sophisticatedstorage:iron_chest', { 'woodType': `${wood}` }),
            [
                'III',
                'ICI',
                'III'
            ], {
            I: 'the_vault:chromatic_iron_ingot',
            C: Item.of('sophisticatedstorage:chest', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:gold_chest', { 'woodType': `${wood}` }),
            [
                'PIP',
                'DCD',
                'PIP'
            ], {
            P: 'minecraft:gold_ingot',
            I: 'the_vault:chromatic_iron_ingot',
            D: 'the_vault:perfect_larimar',
            C: Item.of('sophisticatedstorage:iron_chest', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:diamond_chest', { 'woodType': `${wood}` }),
            [
                'PDP',
                'DCD',
                'PDP'
            ], {
            P: 'the_vault:perfect_larimar',
            D: 'the_vault:vault_diamond',
            C: Item.of('sophisticatedstorage:gold_chest', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:netherite_chest', { 'woodType': `${wood}` }),
            [
                'IDI',
                'DCD',
                'IDI'
            ], {
            D: 'the_vault:vault_diamond',
            I: 'the_vault:black_chromatic_steel_ingot',
            C: Item.of('sophisticatedstorage:diamond_chest', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:iron_barrel', { 'woodType': `${wood}` }),
            [
                'III',
                'ICI',
                'III'
            ], {
            I: 'the_vault:chromatic_iron_ingot',
            C: Item.of('sophisticatedstorage:barrel', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:gold_barrel', { 'woodType': `${wood}` }),
            [
                'PIP',
                'DCD',
                'PIP'
            ], {
            P: 'minecraft:gold_ingot',
            I: 'the_vault:chromatic_iron_ingot',
            D: 'the_vault:perfect_larimar',
            C: Item.of('sophisticatedstorage:iron_barrel', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:diamond_barrel', { 'woodType': `${wood}` }),
            [
                'PDP',
                'DCD',
                'PDP'
            ], {
            P: 'the_vault:perfect_larimar',
            D: 'the_vault:vault_diamond',
            C: Item.of('sophisticatedstorage:gold_barrel', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:netherite_barrel', { 'woodType': `${wood}` }),
            [
                'IDI',
                'DCD',
                'IDI'
            ], {
            D: 'the_vault:vault_diamond',
            I: 'the_vault:black_chromatic_steel_ingot',
            C: Item.of('sophisticatedstorage:diamond_barrel', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_iron_barrel_1', { 'woodType': `${wood}` }),
            [
                'III',
                'ICI',
                'III'
            ], {
            I: 'the_vault:chromatic_iron_ingot',
            C: Item.of('sophisticatedstorage:limited_barrel_1', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_gold_barrel_1', { 'woodType': `${wood}` }),
            [
                'PIP',
                'DCD',
                'PIP'
            ], {
            P: 'minecraft:gold_ingot',
            I: 'the_vault:chromatic_iron_ingot',
            D: 'the_vault:perfect_larimar',
            C: Item.of('sophisticatedstorage:limited_iron_barrel_1', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_diamond_barrel_1', { 'woodType': `${wood}` }),
            [
                'PDP',
                'DCD',
                'PDP'
            ], {
            P: 'the_vault:perfect_larimar',
            D: 'the_vault:vault_diamond',
            C: Item.of('sophisticatedstorage:limited_gold_barrel_1', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_netherite_barrel_1', { 'woodType': `${wood}` }),
            [
                'IDI',
                'DCD',
                'IDI'
            ], {
            D: 'the_vault:vault_diamond',
            I: 'the_vault:black_chromatic_steel_ingot',
            C: Item.of('sophisticatedstorage:limited_diamond_barrel_1', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_iron_barrel_2', { 'woodType': `${wood}` }),
            [
                'III',
                'ICI',
                'III'
            ], {
            I: 'the_vault:chromatic_iron_ingot',
            C: Item.of('sophisticatedstorage:limited_barrel_2', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_gold_barrel_2', { 'woodType': `${wood}` }),
            [
                'PIP',
                'DCD',
                'PIP'
            ], {
            P: 'minecraft:gold_ingot',
            I: 'the_vault:chromatic_iron_ingot',
            D: 'the_vault:perfect_larimar',
            C: Item.of('sophisticatedstorage:limited_iron_barrel_2', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_diamond_barrel_2', { 'woodType': `${wood}` }),
            [
                'PDP',
                'DCD',
                'PDP'
            ], {
            P: 'the_vault:perfect_larimar',
            D: 'the_vault:vault_diamond',
            C: Item.of('sophisticatedstorage:limited_gold_barrel_2', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_netherite_barrel_2', { 'woodType': `${wood}` }),
            [
                'IDI',
                'DCD',
                'IDI'
            ], {
            D: 'the_vault:vault_diamond',
            I: 'the_vault:black_chromatic_steel_ingot',
            C: Item.of('sophisticatedstorage:limited_diamond_barrel_2', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_iron_barrel_3', { 'woodType': `${wood}` }),
            [
                'III',
                'ICI',
                'III'
            ], {
            I: 'the_vault:chromatic_iron_ingot',
            C: Item.of('sophisticatedstorage:limited_barrel_3', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_gold_barrel_3', { 'woodType': `${wood}` }),
            [
                'PIP',
                'DCD',
                'PIP'
            ], {
            P: 'minecraft:gold_ingot',
            I: 'the_vault:chromatic_iron_ingot',
            D: 'the_vault:perfect_larimar',
            C: Item.of('sophisticatedstorage:limited_iron_barrel_3', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_diamond_barrel_3', { 'woodType': `${wood}` }),
            [
                'PDP',
                'DCD',
                'PDP'
            ], {
            P: 'the_vault:perfect_larimar',
            D: 'the_vault:vault_diamond',
            C: Item.of('sophisticatedstorage:limited_gold_barrel_3', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_netherite_barrel_3', { 'woodType': `${wood}` }),
            [
                'IDI',
                'DCD',
                'IDI'
            ], {
            D: 'the_vault:vault_diamond',
            I: 'the_vault:black_chromatic_steel_ingot',
            C: Item.of('sophisticatedstorage:limited_diamond_barrel_3', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_iron_barrel_4', { 'woodType': `${wood}` }),
            [
                'III',
                'ICI',
                'III'
            ], {
            I: 'the_vault:chromatic_iron_ingot',
            C: Item.of('sophisticatedstorage:limited_barrel_4', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_gold_barrel_4', { 'woodType': `${wood}` }),
            [
                'PIP',
                'DCD',
                'PIP'
            ], {
            P: 'minecraft:gold_ingot',
            I: 'the_vault:chromatic_iron_ingot',
            D: 'the_vault:perfect_larimar',
            C: Item.of('sophisticatedstorage:limited_iron_barrel_4', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_diamond_barrel_4', { 'woodType': `${wood}` }),
            [
                'PDP',
                'DCD',
                'PDP'
            ], {
            P: 'the_vault:perfect_larimar',
            D: 'the_vault:vault_diamond',
            C: Item.of('sophisticatedstorage:limited_gold_barrel_4', { 'woodType': `${wood}` })
        })

        event.shaped(Item.of('sophisticatedstorage:limited_netherite_barrel_4', { 'woodType': `${wood}` }),
            [
                'IDI',
                'DCD',
                'IDI'
            ], {
            D: 'the_vault:vault_diamond',
            I: 'the_vault:black_chromatic_steel_ingot',
            C: Item.of('sophisticatedstorage:limited_diamond_barrel_4', { 'woodType': `${wood}` })
        })

    })

    event.remove({ id: 'sophisticatedstorage:upgrade_base' })
    event.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_1' })
    event.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_2' })
    event.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_3' })
    event.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_4' })
    event.remove({ id: 'sophisticatedstorage:controller' })
    event.remove({ output: 'sophisticatedstorage:iron_chest' })
    event.remove({ output: 'sophisticatedstorage:gold_chest' })
    event.remove({ output: 'sophisticatedstorage:diamond_chest' })
    event.remove({ output: 'sophisticatedstorage:netherite_chest' })
    event.remove({ output: 'sophisticatedstorage:iron_barrel' })
    event.remove({ output: 'sophisticatedstorage:gold_barrel' })
    event.remove({ output: 'sophisticatedstorage:diamond_barrel' })
    event.remove({ output: 'sophisticatedstorage:netherite_barrel' })
    event.remove({ output: 'sophisticatedstorage:iron_shulker_box' })
    event.remove({ output: 'sophisticatedstorage:gold_shulker_box' })
    event.remove({ output: 'sophisticatedstorage:diamond_shulker_box' })
    event.remove({ output: 'sophisticatedstorage:netherite_shulker_box' })
    event.remove({ output: 'sophisticatedstorage:limited_iron_barrel_1' })
    event.remove({ output: 'sophisticatedstorage:limited_gold_barrel_1' })
    event.remove({ output: 'sophisticatedstorage:limited_diamond_barrel_1' })
    event.remove({ output: 'sophisticatedstorage:limited_netherite_barrel_1' })
    event.remove({ output: 'sophisticatedstorage:limited_iron_barrel_2' })
    event.remove({ output: 'sophisticatedstorage:limited_gold_barrel_2' })
    event.remove({ output: 'sophisticatedstorage:limited_diamond_barrel_2' })
    event.remove({ output: 'sophisticatedstorage:limited_netherite_barrel_2' })
    event.remove({ output: 'sophisticatedstorage:limited_iron_barrel_3' })
    event.remove({ output: 'sophisticatedstorage:limited_gold_barrel_3' })
    event.remove({ output: 'sophisticatedstorage:limited_diamond_barrel_3' })
    event.remove({ output: 'sophisticatedstorage:limited_netherite_barrel_3' })
    event.remove({ output: 'sophisticatedstorage:limited_iron_barrel_4' })
    event.remove({ output: 'sophisticatedstorage:limited_gold_barrel_4' })
    event.remove({ output: 'sophisticatedstorage:limited_diamond_barrel_4' })
    event.remove({ output: 'sophisticatedstorage:limited_netherite_barrel_4' })
    event.remove({ id: 'sophisticatedstorage:basic_to_iron_tier_upgrade' })
    event.remove({ id: 'sophisticatedstorage:iron_to_gold_tier_upgrade' })
    event.remove({ id: 'sophisticatedstorage:gold_to_diamond_tier_upgrade' })
    event.remove({ id: 'sophisticatedstorage:diamond_to_netherite_tier_upgrade' })
    event.remove({ id: 'sophisticatedstorage:storage_tool' })
    event.remove({ id: 'sophisticatedstorage:pickup_upgrade' })
    event.remove({ id: 'sophisticatedstorage:advanced_pickup_upgrade' })
    event.remove({ id: 'sophisticatedstorage:filter_upgrade' })
    event.remove({ id: 'sophisticatedstorage:advanced_filter_upgrade' })
    event.remove({ id: 'sophisticatedstorage:magnet_upgrade' })
    event.remove({ id: 'sophisticatedstorage:advanced_magnet_upgrade' })
    event.remove({ id: 'sophisticatedstorage:advanced_magnet_upgrade_from_basic' })
    event.remove({ id: 'sophisticatedstorage:feeding_upgrade' })
    event.remove({ id: 'sophisticatedstorage:advanced_feeding_upgrade' })
    event.remove({ id: 'sophisticatedstorage:compacting_upgrade' })
    event.remove({ id: 'sophisticatedstorage:advanced_compacting_upgrade' })
    event.remove({ id: 'sophisticatedstorage:void_upgrade' })
    event.remove({ id: 'sophisticatedstorage:advanced_void_upgrade' })
    event.remove({ id: 'sophisticatedstorage:auto_smelting_upgrade' })
    event.remove({ id: 'sophisticatedstorage:auto_smoking_upgrade' })
    event.remove({ id: 'sophisticatedstorage:auto_blasting_upgrade' })
    event.remove({ id: 'sophisticatedstorage:compression_upgrade' })
    event.remove({ id: 'sophisticatedstorage:hopper_upgrade' })
    event.remove({ id: 'sophisticatedstorage:advanced_hopper_upgrade' })
    event.remove({ id: 'sophisticatedstorage:crafting_upgrade' })


    event.shaped(Item.of('sophisticatedstorage:iron_shulker_box'),
        [
            'III',
            'ICI',
            'III'
        ], {
        I: 'the_vault:chromatic_iron_ingot',
        C: Item.of('sophisticatedstorage:shulker_box')
    })

    event.shaped(Item.of('sophisticatedstorage:gold_shulker_box'),
        [
            'PIP',
            'DCD',
            'PIP'
        ], {
        P: 'minecraft:gold_ingot',
        I: 'the_vault:chromatic_iron_ingot',
        D: 'the_vault:perfect_larimar',
        C: Item.of('sophisticatedstorage:iron_shulker_box')
    })

    event.shaped(Item.of('sophisticatedstorage:diamond_shulker_box'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:perfect_larimar',
        D: 'the_vault:vault_diamond',
        C: Item.of('sophisticatedstorage:gold_shulker_box')
    })

    event.shaped(Item.of('sophisticatedstorage:netherite_shulker_box'),
        [
            'IDI',
            'DCD',
            'IDI'
        ], {
        D: 'the_vault:vault_diamond',
        I: 'the_vault:black_chromatic_steel_ingot',
        C: Item.of('sophisticatedstorage:diamond_shulker_box')
    })

    event.shaped('sophisticatedstorage:upgrade_base', [
        'PIP',
        'ILI',
        'PIP'
    ], {
        L: 'the_vault:gem_larimar',
        I: 'the_vault:chromatic_iron_ingot',
        P: 'the_vault:wooden_planks'
    }
    )

    event.shaped('sophisticatedstorage:stack_upgrade_tier_1', [
        'PPP',
        'PUP',
        'PPP'
    ], {
        U: 'sophisticatedstorage:upgrade_base',
        P: 'the_vault:wooden_planks'
    }
    )

    event.shaped('sophisticatedstorage:stack_upgrade_tier_2', [
        'III',
        'IUI',
        'BIB'
    ], {
        U: 'sophisticatedstorage:stack_upgrade_tier_1',
        I: 'the_vault:chromatic_iron_ingot',
        B: 'the_vault:chromatic_iron_block',
    }
    )

    event.shaped('sophisticatedstorage:stack_upgrade_tier_3', [
        'EIE',
        'IUI',
        'BIB'
    ], {
        U: 'sophisticatedstorage:stack_upgrade_tier_2',
        I: 'the_vault:chromatic_steel_ingot',
        B: 'the_vault:vault_diamond',
        E: 'the_vault:perfect_larimar',
    }
    )

    event.shaped('sophisticatedstorage:stack_upgrade_tier_4', [
        'EIE',
        'IUI',
        'BIB'
    ], {
        U: 'sophisticatedstorage:stack_upgrade_tier_3',
        I: 'the_vault:chromatic_steel_ingot',
        B: 'the_vault:vault_diamond_block',
        E: 'the_vault:extraordinary_larimar'
    }
    )

    event.shaped('sophisticatedstorage:controller', [
        'BIB',
        'LPL',
        'BIB'
    ], {
        I: 'the_vault:black_chromatic_steel_ingot',
        P: 'the_vault:pog_prism',
        B: 'the_vault:chromatic_iron_block',
        L: 'the_vault:extraordinary_larimar'
    }
    )

    event.shaped(Item.of('sophisticatedstorage:basic_to_iron_tier_upgrade'),
        [
            'III',
            'ICI',
            'III'
        ], {
        I: 'the_vault:chromatic_iron_ingot',
        C: 'sophisticatedstorage:basic_tier_upgrade'
    })











    event.shaped(Item.of('sophisticatedstorage:iron_to_gold_tier_upgrade'),
        [
            'PIP',
            'DCD',
            'PIP'
        ], {
        P: 'minecraft:gold_ingot',
        I: 'the_vault:chromatic_iron_ingot',
        D: 'the_vault:perfect_larimar',
        C: Item.of('minecraft:redstone_torch')
    })

    event.shaped(Item.of('sophisticatedstorage:gold_to_diamond_tier_upgrade'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:perfect_larimar',
        D: 'the_vault:vault_diamond',
        C: Item.of('minecraft:redstone_torch')
    })

    event.shaped(Item.of('sophisticatedstorage:diamond_to_netherite_tier_upgrade'),
        [
            'IDI',
            'DCD',
            'IDI'
        ], {
        D: 'the_vault:vault_diamond',
        I: 'the_vault:black_chromatic_steel_ingot',
        C: Item.of('minecraft:redstone_torch')
    })



    event.shaped(Item.of('sophisticatedstorage:storage_tool'),
        [
            ' PT',
            ' DA',
            'D  '
        ], {
        D: 'the_vault:driftwood',
        P: 'the_vault:bounty_pearl',
        T: 'the_vault:chromatic_iron_ingot',
        A: 'the_vault:perfect_painite'
    })

    event.shaped(Item.of('sophisticatedstorage:void_upgrade'),
        [
            ' P ',
            'OUO',
            'ROR'
        ], {
        O: 'minecraft:obsidian',
        P: 'the_vault:carbon',
        R: 'minecraft:redstone',
        U: 'sophisticatedstorage:upgrade_base'
    })

    event.shaped(Item.of('sophisticatedstorage:advanced_void_upgrade'),
        [
            ' P ',
            'OUO',
            'RRR'
        ], {
        O: 'the_vault:chromatic_iron_ingot',
        P: 'the_vault:vault_diamond',
        R: 'the_vault:carbon',
        U: 'sophisticatedstorage:void_upgrade'
    })

    event.shaped(Item.of('sophisticatedstorage:pickup_upgrade'),
        [
            ' P ',
            'OUO',
            'RLR'
        ], {
        O: 'the_vault:wooden_planks',
        P: 'minecraft:sticky_piston',
        R: 'the_vault:carbon',
        L: 'the_vault:perfect_larimar',
        U: 'sophisticatedstorage:upgrade_base'
    })

    event.shaped(Item.of('sophisticatedstorage:crafting_upgrade'),
        [
            ' P ',
            'OUO',
            'RLR'
        ], {
        O: 'the_vault:wooden_planks',
        P: 'minecraft:crafting_table',
        R: 'the_vault:vault_diamond',
        L: 'the_vault:extraordinary_larimar',
        U: 'sophisticatedstorage:upgrade_base'
    })

    event.shaped(Item.of('sophisticatedstorage:advanced_pickup_upgrade'),
        [
            ' P ',
            'OUO',
            'RRR'
        ], {
        O: 'the_vault:gilded_block',
        P: 'the_vault:vault_diamond',
        R: 'the_vault:carbon',
        U: 'sophisticatedstorage:pickup_upgrade'
    })

    event.shaped(Item.of('sophisticatedstorage:filter_upgrade'),
        [
            'POP',
            'OUO',
            'POP'
        ], {
        O: 'the_vault:magic_silk',
        P: 'minecraft:redstone',
        U: 'sophisticatedstorage:upgrade_base'
    })

    event.shaped(Item.of('sophisticatedstorage:advanced_filter_upgrade'),
        [
            ' E ',
            'OUO',
            'PPP'
        ], {
        O: 'minecraft:gold_ingot',
        P: 'minecraft:redstone',
        E: 'the_vault:carbon',
        U: 'sophisticatedstorage:upgrade_base'
    })

    event.shaped(Item.of('sophisticatedstorage:magnet_upgrade'),
        [
            'POP',
            'OUO',
            'R L'
        ], {
        O: 'the_vault:chromatic_steel_ingot',
        P: 'the_vault:perfect_larimar',
        R: 'minecraft:redstone_block',
        L: 'minecraft:lapis_block',
        U: 'sophisticatedstorage:pickup_upgrade'
    })

    event.shaped(Item.of('sophisticatedstorage:advanced_magnet_upgrade'),
        [
            ' D ',
            'OUO',
            'RRR'
        ], {
        O: 'the_vault:vault_ingot',
        R: 'minecraft:redstone_block',
        D: 'the_vault:vault_diamond',
        U: 'sophisticatedstorage:magnet_upgrade'
    })

    event.shaped(Item.of('sophisticatedstorage:feeding_upgrade'),
        [
            ' D ',
            'IUL',
            ' E '
        ], {
        I: 'minecraft:golden_apple',
        L: 'minecraft:glistering_melon_slice',
        D: 'minecraft:golden_carrot',
        E: 'the_vault:vault_meat_block',
        U: 'sophisticatedstorage:upgrade_base'
    })

    event.shaped(Item.of('sophisticatedstorage:advanced_feeding_upgrade'),
        [
            ' D ',
            'OUO',
            'RRR'
        ], {
        O: 'the_vault:vault_meat_block',
        R: 'minecraft:redstone_block',
        D: 'the_vault:vault_diamond',
        U: 'sophisticatedstorage:feeding_upgrade'
    })

    event.shaped(Item.of('sophisticatedstorage:compacting_upgrade'),
        [
            'RPR',
            'PUP',
            'RPR'
        ], {
        R: 'the_vault:chromatic_steel_ingot',
        P: 'minecraft:piston',
        U: 'sophisticatedstorage:upgrade_base'
    })

    event.shaped(Item.of('sophisticatedstorage:advanced_compacting_upgrade'),
        [
            ' D ',
            'OUO',
            'RRR'
        ], {
        O: 'the_vault:black_chromatic_steel_ingot',
        R: 'the_vault:carbon',
        D: 'the_vault:vault_diamond',
        U: 'sophisticatedstorage:compacting_upgrade'
    })

    event.shaped(Item.of('sophisticatedstorage:auto_smelting_upgrade'),
        [
            'PDP',
            'LUD',
            'RDR'
        ], {
        R: 'the_vault:chromatic_steel_ingot',
        D: 'minecraft:hopper',
        P: 'the_vault:vault_diamond',
        L: 'minecraft:redstone_block',
        U: 'sophisticatedstorage:smelting_upgrade'
    })

    event.shaped(Item.of('sophisticatedstorage:auto_smoking_upgrade'),
        [
            'PDP',
            'LUD',
            'RDR'
        ], {
        R: 'the_vault:chromatic_steel_ingot',
        D: 'minecraft:hopper',
        P: 'the_vault:vault_diamond',
        L: 'minecraft:redstone_block',
        U: 'sophisticatedstorage:smoking_upgrade'
    })

    event.shaped(Item.of('sophisticatedstorage:auto_blasting_upgrade'),
        [
            'PDP',
            'LUD',
            'RDR'
        ], {
        R: 'the_vault:chromatic_steel_ingot',
        D: 'minecraft:hopper',
        P: 'the_vault:vault_diamond',
        L: 'minecraft:redstone_block',
        U: 'sophisticatedstorage:blasting_upgrade'
    })

    event.shaped(Item.of('sophisticatedstorage:compression_upgrade'),
        [
            'RLR',
            'PUP',
            'RLR'
        ], {
        R: 'the_vault:chromatic_steel_ingot',
        P: 'minecraft:piston',
        L: 'the_vault:extraordinary_larimar',
        U: 'sophisticatedstorage:upgrade_base'
    })

    event.shaped(Item.of('sophisticatedstorage:hopper_upgrade'),
        [
            'HDH',
            'OUO',
            'RRR'
        ], {
        O: 'the_vault:chromatic_steel_ingot',
        R: 'the_vault:carbon',
        D: 'the_vault:vault_diamond',
        H: 'minecraft:hopper',
        U: 'sophisticatedstorage:upgrade_base'
    })

    event.shaped(Item.of('sophisticatedstorage:advanced_hopper_upgrade'),
        [
            ' D ',
            'DUD',
            'RHR'
        ], {
        R: 'the_vault:perfect_larimar',
        D: 'the_vault:vault_diamond',
        H: 'minecraft:dropper',
        U: 'sophisticatedstorage:hopper_upgrade'
    })
})
