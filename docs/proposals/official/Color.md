# Color

::: tip This section is currently being updated by the Official Proposal Committee and will be corrected soon :::

The Encapsulated Language constructs colors in the following way:

If **head initial** is Officialized, then color words are formed in the
following way:

| Lightness                    | Core Color | Hue                          | Dullness                     |
| ---------------------------- | ---------- | ---------------------------- | ---------------------------- |
| Represented by a number word | Wil        | Represented by a number word | Represented by a number word |

If **head final** is Officialized, then color words are formed in the following way:

| Dullness                     | Hue                          | Core Color | Lightness                    |
| ---------------------------- | ---------------------------- | ---------- | ---------------------------- |
| Represented by a number word | Represented by a number word | Wil        | Represented by a number word |

## Lightness

A number word represents the lightness of the final color. For example:

- A value of 0 is equal to roughly pure black.
- A value of 6 is equal to grey.
- A value of E (11) is equal to roughly pure white.

The addition of the lightness isn’t mandatory. If the lightness isn’t
specified, then a value of 6 is assumed for the lightness. However, an
unspecified brightness is more vague than a brightness of 6.

## Core Color

The core word, “wil” is mandatory to form a color.

## Hue

A number word represents the hue of the final color. This represents the hue in
the CIELCh color space. For example:

- A value of 0 is equal to 0°. This represents a magentish color.
- A value of 6 is equal to 165°. This represents a greenish color.
- A value of E (11) is equal to 330°. This represents purplish color.

The addition of the hue isn’t mandatory. If the hue isn't specified, then the maximum possible value is assumed for the dullness. This represents an achromatic color (greyscale color).

## Dullness

A number word represents the dullness of the final color. This represents two hundred 
minus the chroma in the CIELCh color space. For example:

- A value of 0 is equal to a range from 200 down to 183⅓. This represents a vibrant color.
- A value of E (11) is equal to a range from 16⅔ down to 0. This represents a dull color.

The addition of the dullness isn’t mandatory. If the dullness is added then the hue must 
also be added. If the dullness isn’t specified, but the hue is, then a value of 5 is assumed 
for the dullness. However, an unspecified dullness is more vague than a dullness of 5.

## Relative Precision

The numbers used for the lightness, hue, and dullness have an implied dozenal point at the 
start of each number. This means they can be scaled down to increase precision. Additionally, 
numbers represent a range from their stated value to the next highest value. This level of 
precision isn’t required by the majority of speakers and is reserved for technical use only.

| Color Word        | Meaning                               |
| ----------------- | ------------------------------------- |
| wil **fun**       | one to two twelfths of a hue rotation |
| wil **vif**       | 0.001 to 0.002 of a hue rotation      |
| wil **wafun fun** | 0.1001 to 0.01002 of a hue rotation   |

### Summary

The below picture represents one lightness slice of the CIELCh color space.

- The rotation of the small squares counter-clockwise represents the hue.
- The outward radiating of the small squares represents the dullness.
- The areas of the color circle that aren’t visible represent those colors that
  can’t be displayed by a monitor but (mostly) are visible to the human eye.

![CIELCh wheel](/elp-documentation/img/colors/Colors.png)

## Examples

The Encapsulated Language color words are actually more precise than their
English color word equivalents.
These examples use **head initial** ordering. If **head final** is Officialize
then these examples will change.

| Color                                                 | Color Word             | Breakdown | English Equivalent |
|-------------------------------------------------------|------------------------|-----------|--------------------|
| ![Black](/elp-documentation/img/colors/Black.png)     | **vin** wil            | 0 Color   | Black              |
| ![Grey](/elp-documentation/img/colors/Grey.png)       | wil                    | Color     | Grey               |
| ![White](/elp-documentation/img/colors/White.png)     | **tshōn** wil          | E color   | White              |
| ![Red](/elp-documentation/img/colors/Red.png)         | wil **fun**            | Color 1   | Red                |
| ![Brown](/elp-documentation/img/colors/Brown.png)     | **son** wil **ghyn**   | 5 Color 2 | Brown              |
| ![Green](/elp-documentation/img/colors/Green.png)     | wil **son**            | Color 5   | Green              |
| ![Blue](/elp-documentation/img/colors/Blue.png)       | wil **tsān**           | Color 9   | Blue               |
| ![Magenta](/elp-documentation/img/colors/Magenta.png) | **dzhēn** wil **vin**  | X Color 0 | Purple / Magenta   |
| ![Yellow](/elp-documentation/img/colors/Yellow.png)   | **dzhēn** wil **khan** | X Color 3 | Yellow             |
| ![Pink](/elp-documentation/img/colors/Pink.png)       | **tsān** wil **vin**   | 9 Color 0 | Pink               |

| Approved Date |           Vote Summary            | Link                                                                                                                  |
| ------------- | :-------------------------------: | --------------------------------------------------------------------------------------------------------------------- |
| 08/09/2020    | 20 for / 1 against | [See](https://www.reddit.com/r/EncapsulatedLanguage/comments/infvrs/official_proposal_vote_to_modify_the_color_system/) |
| 18/08/2020    | 13 for AceGravity / 6 for Nadelis | [See](https://www.reddit.com/r/EncapsulatedLanguage/comments/iatlsz/official_proposal_vote_to_choose_a_color_system/) |

