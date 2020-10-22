# Color

The Encapsulated Language constructs colors in the following way:

Color words are formed in the following way:

| Lightness                    | Core Color | Hue                          | Dullness                     |
| ---------------------------- | ---------- | ---------------------------- | ---------------------------- |
| Represented by a number word | Wil        | Represented by a number word | Represented by a number word |

## Lightness

A number word represents the lightness of the final color. For example:

- A value of 0 is roughly black.
- A value of 3  is roughly grey.
- A value of 5 is roughly white.

The addition of the lightness isn’t mandatory. If the lightness isn’t specified, then a value of about 3 is assumed for the lightness. However, an unspecified brightness is more vague than a brightness of 3.

## Core Color

The core word, “wil” is mandatory to form a color.

## Hue

A number word represents the hue of the final color. This represents the hue in
the CIELCh color space. For example:

- A value of 0 represents a range from 0° to 60°. This represents a reddish color.
- A value of 3 represents a range from 180° to 240°. This represents a greenish color.
- A value of 5 represents a range from 300° to 360°. This represents a purplish color.

The addition of the hue isn’t mandatory. If the hue isn't specified, then the maximum possible value is assumed for the dullness. This represents an achromatic color (greyscale color).

## Dullness

A number word represents the dullness of the final color. This represents two hundred 
minus the chroma in the CIELCh color space. For example:

- A value of 0 represents a range from 200 down to 166⅔. This represents a vibrant color.
- A value of 5 represents a range from 33⅓ down to 0. This represents a dull color.

The addition of the dullness isn’t mandatory. If the dullness is added then the hue must also be added. If the dullness isn’t specified, but the hue is, then a value of 5 is assumed for the dullness. However, an unspecified dullness is more vague than a dullness of 5.

## Relative Precision

The numbers used for the lightness, hue, and dullness have an implied dozenal point at the 
start of each number. This means they can be scaled down to increase precision. Additionally, 
numbers represent a range from their stated value to the next highest value. This level of 
precision isn’t required by the majority of speakers and is reserved for technical use only.

| Color Word         | Meaning                               |
| ------------------ | ------------------------------------- |
| wil **sin**        | one to two sixths of a hue rotation   |
| wil **ches**       | 0.001 to 0.002 of a hue rotation      |
| wil **uwasin sin** | 0.1001 to 0.01002 of a hue rotation   |

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

| Color                                                 | Color Word             | Breakdown | English Equivalent |
|-------------------------------------------------------|------------------------|-----------|--------------------|
| ![Black](/elp-documentation/img/colors/Black.png)     | **chen** wil           | 0 Color   | Black              |
| ![Grey](/elp-documentation/img/colors/Grey.png)       | wil                    | Color     | Grey               |
| ![White](/elp-documentation/img/colors/White.png)     | **vun** wil            | 5 color   | White              |
| ![Red](/elp-documentation/img/colors/Red.png)         | wil **chen**           | Color 1   | Red                |
| ![Brown](/elp-documentation/img/colors/Brown.png)     | **fan** wil **sin**    | 2 Color 1 | Brown              |
| ![Green](/elp-documentation/img/colors/Green.png)     | wil **fan**            | Color 2   | Green              |
| ![Blue](/elp-documentation/img/colors/Blue.png)       | wil **zon**            | Color 4   | Blue               |
| ![Magenta](/elp-documentation/img/colors/Magenta.png) | **fan** wil **vun**    | 2 Color 5 | Purple / Magenta   |
| ![Yellow](/elp-documentation/img/colors/Yellow.png)   | **vun** wil **sin**    | 5 Color 1 | Yellow             |
| ![Pink](/elp-documentation/img/colors/Pink.png)       | **zon** wil **vun**    | 4 Color 5 | Pink               |

| Approved Date |           Vote Summary            | Link                                                                                                                  |
| ------------- | :-------------------------------: | --------------------------------------------------------------------------------------------------------------------- |
| 08/09/2020    | 20 for / 1 against | [See](https://www.reddit.com/r/EncapsulatedLanguage/comments/infvrs/official_proposal_vote_to_modify_the_color_system/) |
| 18/08/2020    | 13 for AceGravity / 6 for Nadelis | [See](https://www.reddit.com/r/EncapsulatedLanguage/comments/iatlsz/official_proposal_vote_to_choose_a_color_system/) |

