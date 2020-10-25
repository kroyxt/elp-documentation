# Encapsulation

Each area of the language encapsulates as much scientific and mathematical
knowledge as possible.

## Numerals

![Numerals](/elp-documentation/img/numbers/Numerals.png)

The numerals encapsulate the following mathematical knowledge:

### Base-6

The numerals have been designed with a Base-6 system in mind. Latin numerals
don't function cleanly with a Base-6 system.

### Component 1

The basic idea behind the numerals is to encapsulate not only a visual representation of the respective value, but their divisibility by the two prime factors of Base-6: 2 and 3.

This results in numerals that have two components.

Component 1 encapsulates the divisibility by 2:

![Component 1](/elp-documentation/img/numbers/Component01.png)

### Component 2

Component 2 encapsulates the divisibility by 3.

![Component 2](/elp-documentation/img/numbers/Component02.png)

### Proto-numerals

Combining both components results in the following proto-numerals:

![Proto-numerals](/elp-documentation/img/numbers/ProtoNumerals.png)

### Final Result

To make them easier to write and to avoid having both ascenders and descenders in the numerals (which might interfere with each other when writing e.g. on graph paper; a.k.a. squared paper), they were adapted into the proposed numerals:

![Final Result](/elp-documentation/img/numbers/FinalResult.png)

### The Zero Problem

In both components, the number zero has neither vertical lines nor arches, because it is divisible by both 2 and 3 but that division results in no whole number. So we're at a point where one always is when creating a symbol for zero: we have to write something to express the absence of something.

From the point of view of divisibility, we'd want something like a circle, because it would show that 0 divides without rest by both 2 and 3. However, in strict terms of each component, a circle would mean a number that divides by both 2 and 3 with the result of 1. Such a number doesn't exist. So actively hinting towards that with a perfect circle was out of the question.

The community discussed alternatives, such as to use a third signifier, something that is neither an arch nor a vertical line (e.g. a dash or diagonal lines). However symbols with diagonal lines (like e.g. "X") feel to much like protrusions and might lead future native-speaking children to intuit that 0 divided by both 2 and 3 with a rest of 2. The community wanted something with a smooth surface. A dash was ruled out, because it clashes with the minus-operator. Also a horizontal line is used to construct the corresponding vowel symbols. In the end, the Arabic 0 became a candidate, because it helps intuit that 0 divides without remainder by both 2 and 3, but it's not a perfect circle, so native-speaking children might intuit there is something special about that number.

## Numeral-Phoneme Mapping

The Numeral-Phoneme Mapping encapsulates the following mathematical knowledge:

### Consonants

| Number | Phoneme | Place of Articulation | Voicing  |
| ------ | ------- | --------------------- | -------- |
| 0      | ɕ       | Palatal               | Unvoiced |
| 1      | s       | Alveolar              | Unvoiced |
| 2      | f       | Labial                | Unvoiced |
| 3      | ʑ       | Palatal               | Voiced   |
| 4      | z       | Alveolar              | Voiced   |
| 5      | v       | Labial                | Voiced   |

- Post-Alveolars are a multiple of three.
- Alveolars are one greater than a multiple of three.
- Labials are one less than a multiple of three.
- Unvoiced consonants are greater than or equal to 0 and less than 3.
- Voiced consonants are greater than or equal to 3 and less than 10 (Base-6).

### Vowels

| Number | Phoneme | Openness | Position |
| ------ | ------- | -------- | -------- |
| 0      | e       | Open     | Front    |
| 1      | i       | Closed   |	Front    |
| 2      | a       | Open     |	Mid      |
| 3      | y       | Closed   |	Mid      |
| 4      | o       | Open     |	Back     |
| 5      | u       | Closed   |	Back     |

- Open vowels are even.
- Closed vowels are odd.
- Front vowels don't have any twos in them.
- Mid vowels have 1x two in them.
- Back vowels have 2x twos in them.

## Numeric Prefixes

The Encapsulation of Numeric Prefixes is based on their spoken form, not on their romanizations.

| Numbers | Numeric Prefix (Spoken) |
| ------- | ----------------------- |
| 0       | ei-                     |
| 1       | uwa-                    |
| 2       | ijo-                    |
| 3       | eu-                     |
| 4       | ai-                     |
| 5       | uwo-                    |
| 6       | ije-                    |
| 7       | au-                     |
| 8       | oi-                     |
| 9       | uwe-                    |
| X (10)  | ija-                    |
| E (11)  | ou-                     |

The numeric prefixes encapsulate the following mathematical knowledge:

### Evenness

Numeric prefixes that contain "j" represent **even numbers**.
Numeric prefixes that contain "w" represent **odd numbers**.

### 3x Multiplication

Numeric prefixes that contain "e" are part of the 3x multiplication table. This
matches with the Official Numerals which also shows the 3x multiplication table
through the number of strokes.

### 4x Multiplication

Numeric prefixes that end with "i" are part of the 4x multiplication table.

### Arithmetic

Swapping the position of the vowel within a numeric prefix either adds or
removes 6 from the total value. For example:

Swapping the position of the vowel in "ei" (0) will create "i**je**" (6).
Swapping the position of the vowel in "i**ja**" (10) will create "**ai**" (4).

### In depth Breakdown

![Breakdown](/elp-documentation/img/NumericPrefix.png)
