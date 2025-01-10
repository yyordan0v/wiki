---
sidebar_position: 3
---

# Drawers

## DRW_NUM

Specify number of drawers in the sub article

### Basic Info

| Label         | Type     | Initially available | 
|---------------|----------|---------------------|
| Drawer number | Checkbox | Yes                 |

###  Options

| Value | Translation Key | Label | Initially available | 
|-------|-----------------|-------|---------------------|
| 1     | tr_key_2        | 1     | Yes                 |
| 2     | tr_key_2        | 2     | Yes                 |
| 3     | tr_key_2        | 3     | Yes                 |
| 4     | tr_key_2        | 4     | Yes                 |

:::warning

The available options in the following articles are different:

1. [Unterschrank - frei konfigurierbar](/articles/ur100)
2. link two

:::

## ZONE_1

This option sets the height for the **first(bottom)** drawer in the sub-article.


### Basic Info
| Label | Type    | Available by default | Info           |
|-------|---------|----------------------|----------------|
| Label | Editbox | Yes                  | 513mm - 1000mm |

:::tip

Always locked value and being calculate somehow.

:::

## ZONE_2

This option sets the height for the **second** drawer in the sub-article.

### Basic Info

| Label | Type    | Available by default | Info           |
|-------|---------|----------------------|----------------|
| Label | Editbox | Yes                  | 513mm - 1000mm |


### Dependencies

1. This field is visible/active depending on [Drawer number](/variables/drawers#drw_num)
2. Gets deducted from if some calculations happen here.

## ZONE_3

This option sets the height for the **second** drawer in the sub-article.

### Basic Info

| Label | Type    | Available by default | Info           |
|-------|---------|----------------------|----------------|
| Label | Editbox | Yes                  | 513mm - 1000mm |


### Dependencies

1. This field is visible/active depending on [Drawer number](/variables/drawers#drw_num)
2. Gets deducted from if some calculations happen here.



