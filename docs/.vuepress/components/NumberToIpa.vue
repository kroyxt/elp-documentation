<template>
 <section class="NumberToIpa">
   <div class="NumberToIpa__container">
     <input
       type="text"
       maxlength="36"
       :class="{'NumberToIpa__input--error': error, 'NumberToIpa__input': !error}"
       v-model="numberInput"
       @keyup="numbersToWord">
   </div>
   <p :class="{'NumberToIpa__output--error': error, 'NumberToIpa__output': !error}">{{ numberOutput }}</p>
   <ul class="NumberToIpa__listImg">
     <li
       class="NumberToIpa__itemImg"
       v-for="img in imgArray_"
       :key="img.id">
       <img
         class="NumberToIpa__img"
         :src="'/elp-documentation/numbers/number' + img + '.png'"
         :alt="img">
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
          '0': {
            consonant: 'v',
            vowel: 'i',
          },
          '1': {
            consonant: 'f',
            vowel: 'u',
          },
          '2': {
            consonant: 'ɣ',
            vowel: 'y',
          },
          '3': {
            consonant: 'x',
            vowel: 'a',
          },
          '4': {
            consonant: 'z',
            vowel: 'e',
          },
          '5': {
            consonant: 's',
            vowel: 'o',
          },
          '6': {
            consonant: 'ʒ',
            vowel: 'iː',
          },
          '7': {
            consonant: 'ʃ',
            vowel: 'uː',
          },
          '8': {
            consonant: 'd͡z' ,
            vowel: 'yː',
          },
          '9': {
            consonant: 't͡s' ,
            vowel: 'aː',
          },
          'X': {
            consonant: 'd͡ʒ' ,
            vowel: 'e:',
          },
          'E': {
            consonant: 't͡ʃ' ,
            vowel: 'oː',
          }
        },
        magnitudeVowel_: ["ei̯", "wa", "jo", "eu̯", "ai̯", "wo", "je", "au̯", "oi̯", "we", "ja", "ou̯"],
        digitMarker_: "n",
        fillerMarker_: "v",
        imgArray_: [],
      }
    },
    methods: {
      $_checkErrors(numbers) {
        if (/[^0-9XE,. ]/.test(numbers)) {
              this.error = true;
              return -1;
        } else {
          this.error = false;
        }
      },
      $_splitNumbers(numbers) {
        return numbers.replace(/[^0-9EX]/g, '').split(/(?=(?:...)*$)/);
      },
      $_numbersToIpa(numberArray) {
        let completeWord = "";
        for (let i = 0; i < numberArray.length; i++) {
          let numberPart = numberArray[i];
          let word = "";
          switch (numberPart.length) {
            case 1:
              let num = numberPart[0];
              word = this.numbers_[num].consonant + this.numbers_[num].vowel + this.digitMarker_;
              break;
            case 2:
              if (numberPart[0]=="0") {
                word = this.numbers_[numberPart[1]].consonant + this.numbers_[numberPart[1]].vowel + this.digitMarker_;
              } else {
                word = this.fillerMarker_ + this.numbers_[numberPart[0]].vowel + this.numbers_[numberPart[1]].consonant;
              }
              break;
            default:
              if (numberPart[0] == "0" && numberPart[1] == "0") {
                if (numberPart[2] == "0" && number.length > 1 && i != 0) {
                  word = '';
                } else {
                  word = this.numbers_[numberPart[2]].consonant + this.numbers_[numberPart[2]].vowel + this.digitMarker_;
                }
              } else {
                word = this.numbers_[numberPart[0]].consonant + this.numbers_[numberPart[1]].vowel + this.numbers_[numberPart[2]].consonant;
              }
          }
          let magnitude = ""
          if (numberArray.length > 1){
            magnitude = this.magnitudeVowel_[(numberArray.length - i - 1)];
          }
            completeWord += " " + magnitude + word

        }
       return completeWord;
      },
      numbersToWord() {
        let input = this.numberInput,
            inputUpper = input.toUpperCase(),
            inputSplit = this.$_splitNumbers(inputUpper);
        this.$_checkErrors(inputUpper);
        if (this.error) {
          this.numberOutput = 'Error Number';
          this.imgArray_ = [];
        } else {
          this.numberOutput = this.$_numbersToIpa(inputSplit);
          this.imgArray_ = inputUpper.split('');
        }
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
