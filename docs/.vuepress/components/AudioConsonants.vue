<template>
  <section class="Audio">
		<table class="Audio__table">
			<thead class="Audio__head">
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
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">m</span>
						</div>
					</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">n</span>
						</div>
					</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>Plosive</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">p</span>
							<span class="Audio__item" @click="playAudio()">b</span>
						</div>
					</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">t</span>
							<span class="Audio__item" @click="playAudio()">d</span>
						</div>
					</td>
					<td></td>
					<td></td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">k</span>
							<span class="Audio__item" @click="playAudio()">g</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Fricative</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">f</span>
							<span class="Audio__item" @click="playAudio()">v</span>
						</div>
					</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">s</span>
							<span class="Audio__item" @click="playAudio()">z</span>
						</div>
					</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">ʃ</span>
							<span class="Audio__item" @click="playAudio()">ʒ</span>
						</div>
					</td>
					<td></td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">x</span>
							<span class="Audio__item" @click="playAudio()">ɣ</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Affricate</td>
					<td></td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">t͡s </span>
							<span class="Audio__item" @click="playAudio()">d͡z </span>
						</div>
					</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">t͡ʃ </span>
							<span class="Audio__item" @click="playAudio()">d͡ʒ </span>
						</div>
					</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>Approximant</td>
					<td></td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">l</span>
						</div>
					</td>
					<td></td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">j</span>
						</div>
					</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">w</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Tap or Flap</td>
					<td></td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">ɾ</span>
						</div>
					</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
import { playAudio } from './playAudio.js';
export default {
	methods: {
		playAudio,
	}
}
</script>

