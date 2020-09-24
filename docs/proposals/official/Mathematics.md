# Mathematics

The Encapsulated Language uses a prefix notation system for mathematics.

| Approved Date |    Vote Summary    | Link                                                                                                                    |
| ------------- | :----------------: | ----------------------------------------------------------------------------------------------------------------------- |
| 02/09/2020    | 15 for / 7 against | [See](https://www.reddit.com/r/EncapsulatedLanguage/comments/ijsjnq/official_proposal_vote_to_establish_a_prefix/)      |

## Written Mathematics

The Encapsulated Language uses the following prefix notation system for written mathematics.

Brackets always come in pairs. What's opened must be closed and vice versa. They enclose the operator and all necessary parts of the operation.

| Infix              | Written Prefix       |
| ------------------ | -------------------- | 
| 1 + 2              | (+ 1 2)              |
| 1 / 2              | (/ 1 2)              |
| 1 + 2 \* 3 + 4     | (+ 1 (\* 2 3) 4)     |
| (1 + 2) \* (3 + 4) | (\* (+ 1 2) (+ 3 4)) |

In unambiguous cases, the outermost pair of brackets may be omitted. So simple expressions may be written without brackets.

| Infix              | Written Prefix       |
| ------------------ | -------------------- |
| 1 + 2              | + 1 2                |
| (1 + 2) \* (3 + 4) | \* (+ 1 2) (+ 3 4)   |
| (1 + 2) \* 3 \* 4  | \* (+ 1 2) 3 4       |

Operators may not follow each other without a number or bracket between them.

So for (1 + 2) \* (3 + 4)
- This notation could be allowed because it's unambiguous: x (+ 1 2) + 3 4
- But this notation isn’t allowed even though it unambiguous: x + 1 2 (+ 3 4) or x + 1 2 + 3 4

**Examples:**

| Equation                 | Infix                                   | Prefix                                                      |
| ------------------------ | --------------------------------------- | ----------------------------------------------------------- |
| Quadratic equation       | (-b ± (b^2 -4\*a\*c)^(1/2))/(2\*a) = x  | / (± (-b (^ (+ (^ b 2) (\* -4 a c)) (/ 1 2)))) (\* 2 a) = x |
| Compound interest        | (P(1 + r/n)^(n\*t)) - P = I             | - (\* P (^ (+ 1 (/ r n)) (\* n t))) P = I                   | 
| Cosine theorem           | a^2 + b^2 -4\*a\*b\*cos(𝛾) = c^2        | + (^ a 2) (^ b 2) (\* -4 a b (cos 𝛾)) = ^ c 2               |
| Euler's formula          | e^(i\*θ) = cos(θ) + i sin(θ)            | ^ e (\* i θ) = + (cos θ) (\* i (sin θ))                     |
| Change of base formula   | logb(a)=logc(a)/logc(b)                 | log b a = / (log c a) (log c b)                             |
| Log summation            | logb(a + c) = logb(a) + log10(1 + c/a)  | log b (+ a c) = + (log b a) (log 10 (+ 1 (/ c a)))          |

| Approved Date |    Vote Summary    | Link                                                                                                                    |
| ------------- | :----------------: | ----------------------------------------------------------------------------------------------------------------------- |
| 24/09/2020    | 14 for / 6 against | [See](https://www.reddit.com/r/EncapsulatedLanguage/comments/ixnr7b/official_proposal_vote_to_establish_prefix/)        |

## Spoken Mathematics

The Encapsulated Language uses the following prefix notation system for spoken mathematics.

Operations have a fixed arity unless they have an opening bracket. These opening brackets are not optional and must be paired with a closing bracket unless that closing bracket would be immediately before an equals sign or at the end of the equation and not immediately followed by another equation. Both the opening and closing brackets are words that must be spoken.

| Equation                 | Infix                                   | Prefix                                                      |
| ------------------------ | --------------------------------------- | ----------------------------------------------------------- |
| Quadratic equation       | (-b ± (b^2 -4\*a\*c)^(1/2))/(2\*a) = x  | / ± -b ^ + ^ b 2 \*( -4 a c) / 1 2 \* 2 a = x               |
| Compound interest        | (P(1 + r/n)^(n\*t)) - P = I             | - \* P ^ + 1 / r n \* n t P = I                             | 
| Cosine theorem           | a^2 + b^2 -4\*a\*b\*cos(𝛾) = c^2        | +( ^ a 2 ^ b 2 \*( -4 a b cos 𝛾 = ^ c 2                     |
| Euler's formula          | e^(i\*θ) = cos(θ) + i sin(θ)            | ^ e \* i θ = + cos θ \* i sin θ                             |
| Change of base formula   | logb(a)=logc(a)/logc(b)                 | log b a = / log c a log c b                                 |
| Log summation            | logb(a + c) = logb(a) + log10(1 + c/a)  | log b + a c = + log b a log 10 + 1 / c a                    |

| Approved Date |    Vote Summary    | Link                                                                                                                    |
| ------------- | :----------------: | ----------------------------------------------------------------------------------------------------------------------- |
| 24/09/2020    | 11 for / 4 against | [See](https://www.reddit.com/r/EncapsulatedLanguage/comments/ixnph6/official_proposal_vote_to_establish_prefix/)        |