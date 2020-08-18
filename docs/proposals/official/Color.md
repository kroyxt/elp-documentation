## Color

The Encapsulated Language constructs colors in the following way:

If **head initial** is Officialized, then color words are formed in the following way:

| Lightness                     | Core Color | Hue                           | Chroma                        |
| ----------------------------- | ---------- | ----------------------------- | ----------------------------- |
| Represented by a  number word | Wil        | Represented by a  number word | Represented by a  number word |

If **head final** is Officialized, then color words are formed in the following way:

| Chroma                        | Hue                            | Core Color | Lightness                    |
| ----------------------------- | ------------------------------ | ---------- | ---------------------------- |
| Represented by a  number word |  Represented by a  number word | Wil        |Represented by a  number word |

### Lightness

A number word represents the lightness of the final color. For example:

- A value of 0 is equal to pure black.
- A value of 6 is equal to grey.
- A value of E (11) is equal to pure white.

The addition of the lightness isn’t mandatory. If the lightness isn’t specified, then a value of 6 is assumed for the lightness. However, an unspecified brightness is more vague than a brightness of 6.

### Core Color

The core word, “wil” is mandatory to form a color.

### Hue

A number word represents the hue of the final color. This represents the hue in the CIELCh color space. For example:

- A value of 0 is equal to 0°. This represents a magentish color.
- A value of 6 is equal to 165°. This represents a greenish color.
- A value of E (11) is equal to 330°. This represents purplish color.

The addition of the hue isn’t mandatory. If the hue isn't specified, then a value of 0 is assumed for the chroma. This represents an achromatic color (greyscale color).

### Chroma

A number word represents the chroma of the final color. This represents the chroma in the CIELCh color space. For example:

- A value of 0 is equal to 16⅔. This represents a dull color.
- A value of E (11) is equal to 200. This represents a vibrant color.

The addition of the chroma isn’t mandatory. If the chroma is added then the hue must also be added. If the chroma isn’t specified, but the hue is, then a value of 5 is assumed for the chroma. However, an unspecified chroma is more vague than a chroma of 5.

### Relative Precision

The numbers used for the **lightness**, **hue**, and **chroma** can be scaled down to increase precision. This level of precision isn’t required by the majority of speakers and is reserved for technical use only.

| Color Word         | Meaning                       |
| ------------------ | ----------------------------- |
| wil **fun**        | one twelfth of a hue rotation |
| wil **vif**        | 0.001 of a hue rotation       |
| wil **wafun fun**  | 0.1001 of a hue rotation      |

### Summary

The below picture represents one lightness slice of the CIELCh color space. 

- The rotation of the small squares clockwise represents the hue. 
- The outward radiating of the small squares represents the chroma. 
- The areas of the color circle that aren’t visible represent those colors that can’t be displayed by a monitor but (mostly) are visible to the human eye.

### Examples

The Encapsulated Language color words are actually more precise than their English color word equivalents.
These examples use **head initial** ordering. If **head final** is Officialize then these examples will change.