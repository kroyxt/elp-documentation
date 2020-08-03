<template>
 <section class="NumberToIpa">
   <div class="NumberToIpa__container">
     <input
       type="text"
       maxlength="12"
       :class="{'NumberToIpa__input--error': error, 'NumberToIpa__input': !error}"
       v-model="numberInput"
       @keyup="numberToWord">
   </div>
   <p :class="{'NumberToIpa__text--error': error, 'NumberToIpa__text': !error}">{{ numberOutput }}</p>
 </section>
</template>

<script>
  export default {
    data() {
      return {
        numberInput: "",
        numberOutput: "",
        error: false,
      }
    },

    methods: {
      $_digitToInt(digit) {
        let num = 0

        switch (digit) {
          case "X":
            num = 10
            break;
          case "E":
            num = 11
            break;
          default:
            num = parseInt(digit)

        }

        return num
      },

      numberToWord() {
        let str = this.numberInput;
        let number_consonant = ["v", "f", "ɣ", "x", "z", "s", "ʒ", "ʃ", "d͡z", "t͡s", "d͡ʒ", "t͡ʃ"]
        let number_vowel = ["i", "u", "y", "a", "e", "o", "iː", "uː", "yː", "aː", "e:", "oː"]
        let magnitude_vowel = ["ei̯", "wa", "jo", "eu̯", "ai̯", "wo", "je", "au̯", "oi̯", "we", "ja", "ou̯"]
        let digit_marker = "n"
        let filler_marker = "v"

        let number_unchecked = str.toUpperCase()
        if (/[^0-9XE,. ]/.test(number_unchecked)) {
              this.numberOutput = "Error number"
              this.error = true
              return -1

        } else {
          this.error = false
        }
        let number = number_unchecked.replace(/[^0-9EX]/g, '').split(/(?=(?:...)*$)/)
        let complete_word = ""

        for (let i = 0; i < number.length; i++) {
          let number_part = number[i]
          let word = ""
          switch (number_part.length) {
            case 1:
              let num = this.$_digitToInt(number_part[0])
              word = number_consonant[num] + number_vowel[num] + digit_marker
              break;
            case 2:
              if (number_part[0]=="0") {
                word = number_consonant[number_part[1]] + number_vowel[number_part[1]] + digit_marker

              } else {
                word = filler_marker + number_vowel[this.$_digitToInt(number_part[0])] + number_consonant[this.$_digitToInt(number_part[1])]

              }
              break;
            default:
              if (number_part[0] == "0" && number_part[1] == "0") {
                word = number_consonant[number_part[2]] + number_vowel[number_part[2]] + digit_marker

              } else {
                word = number_consonant[this.$_digitToInt(number_part[0])] + number_vowel[this.$_digitToInt(number_part[1])] + number_consonant[this.$_digitToInt(number_part[2])]

              }

          }
          let magnitude = ""
          if (number.length > 1)
            magnitude = magnitude_vowel[(number.length - i - 1)*3]
          complete_word += " " + magnitude + word
        }
        this.numberOutput = complete_word
      }
    }
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
[class*="NumberToIpa__text"] {
  font-size: 1.5rem;
  text-align: center;
}
.NumberToIpa__text {
  color: #25b6da;
}
.NumberToIpa__text--error {
  color: red;
}
</style>
