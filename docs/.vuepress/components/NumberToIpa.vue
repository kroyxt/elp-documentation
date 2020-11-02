<template>
  <section class="NumberToIpa">
    <div class="NumberToIpa__container">
      <input
        type="text"
        maxlength="36"
        :class="{
          'NumberToIpa__input--error': error,
          'NumberToIpa__input': !error,
        }"
        v-model="numberInput"
        @keyup="numbersToWord"
      />
    </div>
    <p
      :class="{
        'NumberToIpa__output--error': error,
        'NumberToIpa__output': !error,
      }"
    >
      {{ numberOutput }}
    </p>
    <ul class="NumberToIpa__listImg">
      <li class="NumberToIpa__itemImg" v-for="img in imgArray_" :key="img.id">
        <img
          class="NumberToIpa__img"
          :src="'/elp-documentation/img/numbers/number' + img + '.png'"
          :alt="img"
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      numberInput: "",
      numberOutput: "",
      error: false,
      numbers_: {
        "0": {
          consonant: "sj",
          vowel: "e",
        },
        "1": {
          consonant: "s",
          vowel: "i",
        },
        "2": {
          consonant: "f",
          vowel: "a",
        },
        "3": {
          consonant: "zj",
          vowel: "y",
        },
        "4": {
          consonant: "z",
          vowel: "o",
        },
        "5": {
          consonant: "v",
          vowel: "u",
        }
      },
      magnitudeVowel_: [
        "ei",
        "ua",
        "io",
        "eu",
        "ai",
        "uo",
        "ie",
        "au",
        "oi",
        "ue",
        "ia",
        "ou",
      ],
      digitMarker_: "n",
      fillerMarker_: "sj",
      dotMarker_: "ein",
      imgArray_: [],
    }
  },
  methods: {
    $_parseInput(numbers) {
      let countDot = (numbers.match(/\./g)||[]).length
      this.error = true
      if (/[^0-5. ]/.test(numbers) || countDot > 1) return -1
      this.error = false
      let numberArray = numbers.split('.')
      return [
        this.$_splitNumbers(numberArray[0]),
        (countDot == 0)? "":this.$_splitNumbers(numberArray[1])
      ]
    },
    $_splitNumbers(numbers) {
      return numbers.replace(/[^0-5]/g, "").split(/(?=(?:...)*$)/)
    },
    $_wordFormation(initialConsonant, vowel, finalConsonant, position) {
      let word = ""
      if (initialConsonant != "0") {
        word =
          this.numbers_[initialConsonant].consonant +
          this.numbers_[vowel].vowel +
          this.numbers_[finalConsonant].consonant
      } else if (vowel != "0") {
        word =
          this.fillerMarker_ +
          this.numbers_[vowel].vowel +
          this.numbers_[finalConsonant].consonant
      } else if (finalConsonant == "0" && position != 0) {
        word = ""
      } else {
        word =
          this.numbers_[finalConsonant].consonant +
          this.numbers_[finalConsonant].vowel +
          this.digitMarker_
      }
      return word
    },
    $_numbersToIpa(numberArray) {
      let completeWord = ""
      for (let i = 0; i < numberArray.length; i++) {
        let numberPart = numberArray[i]
        let word = ""
        switch (numberPart.length) {
          case 1:
            numberPart = "0" + numberPart
          case 2:
            numberPart = "0" + numberPart
          default:
            word = this.$_wordFormation(
              numberPart[0],
              numberPart[1],
              numberPart[2],
              i
            )
        }
        let magnitude = ""
        if (numberArray.length > 1 && word != "") {
          magnitude = this.magnitudeVowel_[numberArray.length - i - 1]
        }
        completeWord += " " + magnitude + word
      }
      return completeWord
    },
    numbersToWord() {
      let input = this.numberInput,
        inputUpper = input.toUpperCase(),
        numberArray = this.$_parseInput(inputUpper)
      if (this.error) {
        this.numberOutput = "Error Number"
        this.imgArray_ = []
      } else {
        let decimal = ""
        if (numberArray[1] != "") {
          decimal = " ein" + this.$_numbersToIpa(numberArray[1])
        }
        this.numberOutput = this.$_numbersToIpa(numberArray[0]) + decimal
        this.imgArray_ = inputUpper.split("")
      }
    },
  },
}
</script>

<style lang="css">
.NumberToIpa {
  margin: 20px 0;
}
.NumberToIpa * {
  box-sizing: border-box;
}
.NumberToIpa__container {
  width: 300px;
  margin: auto;
}
[class*="NumberToIpa__input"] {
  width: 100%;
  height: 35px;
  padding: 0 15px;
  border: 2px solid;
  border-radius: 15px;
  text-align: center;
}
[class*="NumberToIpa__input"]:focus {
  outline-width: 0;
}
.NumberToIpa__input {
  border-color: #25b6da;
}
.NumberToIpa__input--error {
  border-color: red;
}
[class*="NumberToIpa__output"] {
  min-height: 2rem;
  border-bottom: 2px solid #25b6da;
  padding-bottom: 10px;
  font-size: 1.5rem;
  text-align: center;
}
.NumberToIpa__output {
  color: #25b6da;
}
.NumberToIpa__output--error {
  color: red;
}
.NumberToIpa__listImg {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.NumberToIpa__itemImg {
  list-style: none;
}
.NumberToIpa__img {
  display: block;
  max-height: 80px;
}
</style>
