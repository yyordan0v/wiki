---
sidebar_position: 2
---

# Front Materials

## Product_Line

Selection of product line which filters available materials.

#### Basic Info

| Label                          | Type     | Initially available | 
|-------------------------------|----------|---------------------|
| Produktlinie auswählen        | Combobox | Yes                |

#### Options

| Value      | Translation Key | Label            | Initially available | Reference |
|------------|----------------|------------------|---------------------|-----------|
| WOODEN     | tr_prod_1      | Holzdekor        | Yes                | [Egger Wooden Materials](/materials/egger/wooden) |
| UNICOLOR   | tr_prod_2      | Unifarben        | Yes                | [Egger Unicolor Materials](/materials/egger/uni) |
| VENEER     | tr_prod_3      | Furnier          | Yes                | [Veneer Materials](/materials/veneer) |


:::info


In case of global settings being checked on this gets overwritten by [Global Settings](/globals).

:::

## Material_Selection

Material selection based on chosen product line.

| Label                         | Type     | Available by default | Info                    |
|------------------------------|----------|---------------------|-------------------------|
| Material auswählen           | Combobox | Yes                | Materialauswahl nach Produktlinie |

#### Dependencies
:::info

1. The available options in Material_Selection are filtered based on the selected Product_Line
2. Available materials and their specifications can be found in:
    - Wooden materials: [Egger Wooden Materials](/materials/egger/wooden)
    - Unicolor materials: [Egger Unicolor Materials](/materials/egger/uni)
    - Veneer materials: [Veneer Materials](/materials/veneer)
3. Each material has predefined properties that will be automatically set upon selection
4. Price calculations are based on the selected material and its properties

:::
