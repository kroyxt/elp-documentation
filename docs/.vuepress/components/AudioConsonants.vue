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
							<span class="Audio__item" @click="playAudio('m')">m</span>
						</div>
					</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio('n')">n</span>
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
							<span class="Audio__item" @click="playAudio('p')">p</span>
							<span class="Audio__item" @click="playAudio('b')">b</span>
						</div>
					</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio('t')">t</span>
							<span class="Audio__item" @click="playAudio('d')">d</span>
						</div>
					</td>
					<td></td>
					<td></td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio('k')">k</span>
							<span class="Audio__item" @click="playAudio('g')">g</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Fricative</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio('f')">f</span>
							<span class="Audio__item" @click="playAudio('v')">v</span>
						</div>
					</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio('s')">s</span>
							<span class="Audio__item" @click="playAudio('z')">z</span>
						</div>
					</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio('ʃ')">ʃ</span>
							<span class="Audio__item" @click="playAudio('ʒ')">ʒ</span>
						</div>
					</td>
					<td></td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio('x')">x</span>
							<span class="Audio__item" @click="playAudio('ɣ')">ɣ</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Affricate</td>
					<td></td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio('ts')">t͡s </span>
							<span class="Audio__item" @click="playAudio('dz')">d͡z </span>
						</div>
					</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio('tʃ')">t͡ʃ </span>
							<span class="Audio__item" @click="playAudio('dʒ')">d͡ʒ </span>
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
							<span class="Audio__item" @click="playAudio('l')">l</span>
						</div>
					</td>
					<td></td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio('j')">j</span>
						</div>
					</td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio('w')">w</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Tap or Flap</td>
					<td></td>
					<td class="Audio__td">
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio('ɾ')">ɾ</span>
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

