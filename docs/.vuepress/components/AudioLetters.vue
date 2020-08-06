<template>
  <section class="AudioLetters">
    <h2>Phonology</h2>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Bilabial</th>
          <th>Alveolar</th>
          <th>Post-Alveolar</th>
          <th>Palatal</th>
          <th>Velar</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Nasal</td>
          <td @click="playAudio('m')">m</td>
          <td>n</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Plosive</td>
          <td>p b</td>
          <td>t d</td>
          <td></td>
          <td></td>
          <td>k g</td>
        </tr>
        <tr>
          <td>Fricative</td>
          <td>f v</td>
          <td>s z</td>
          <td>ʃ ʒ</td>
          <td></td>
          <td>x ɣ</td>
        </tr>
        <tr>
          <td>Affricate</td>
          <td></td>
          <td>t͡s d͡z</td>
          <td>t͡ʃ d͡ʒ</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Approximant</td>
          <td></td>
          <td>l</td>
          <td></td>
          <td>j</td>
          <td>w</td>
        </tr>
        <tr>
          <td>Tap or Flap</td>
          <td></td>
          <td>ɾ</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  export default {
    methods: {
      playAudio(letter) {
        let Letter = new Audio(`audio/${letter}.mp3`);
        Letter.play();
      }
    }
  }
</script>

<style>
</style>
