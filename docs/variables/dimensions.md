---
sidebar_position: 2
---

# Dimensions

## Standard_cabinet_check

This checkbox shows/hides [Auswahl der äußeren Schrankbreite](/variables/dimensions#standard_cabinet_dim)

### Basic Info

| Label                             | Type     | Initially available | 
|-----------------------------------|----------|---------------------|
| Der Schrank soll Standardmaße habe | Checkbox | Yes                 |


## Standard_cabinet_dim

This option sets standard pre-set  widths for the articles via combobox.

| Label                             | Type     | Available by default | Info                                 |
|-----------------------------------|----------|----------------------|--------------------------------------|
| Auswahl der äußeren Schrankbreite | Combobox | No                   | Maßeingabe ohne Front 513mm - 1000mm |

#### Options

| Value | Translation Key | Label | Initially available | 
|-------|-----------------|-------|---------------------|
| 160   | tr_key_2        | 160mm | Yes                 |
| 260   | tr_key_2        | 260mm | Yes                 |
| 360   | tr_key_2        | 360mm | Yes                 |
| 460   | tr_key_2        | 460mm | Yes                 |

#### Dependencies
:::info

1. This option is only available when [Der Schrank soll Standardmaße habe](/variables/dimensions#standard_cabinet_check) is **checked**.

:::

## ART_SIZEZ

Article height

 #### Basic Info

| Label       | Type      | Initially available |
|-------------|-----------|---------------------|
| Korpushöhe  | Editbox   | Yes                 |

## ART_SIZEX

Article width

| Label       | Type        |
|-------------|-------------|
| Korpusbreite  | Editbox     |

:::info

### Dependencies

1. If [Der Schrank soll Standardmaße habe](/variables/dimensions#standard_cabinet_check) is **checked**, this combobox getting locked inherits value from  [Auswahl der äußeren Schrankbreite](/variables/dimensions#standard_cabinet_dim)

:::

## ART_SIZEY

Article depth

| Label       | Type      | Available by default  |
|-------------|-----------|-----------------------|
| Korpustiefe  | Editbox   | Yes                   | 
