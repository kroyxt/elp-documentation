<template>
	<section class="Audio">
		<table class="Audio__table">
			<thead class="Audio__head">
				<tr>
					<th>Numbers</th>
					<th>Number Word</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>0</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">vin</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>1</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">fun</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">ɣyn</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">xan</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>4</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">zen</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>5</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">son</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>6</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">ʒiːn</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>7</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">ʃuːn</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>8</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">d͡zyːn</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>9</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">t͡saːn</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>X (10)</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">d͡ʒeːn</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>E (11)</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">t͡ʃoːn</span>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script charset="utf-8">
import { playAudio } from './playAudio.js';

export default {
	methods: {
		playAudio,
	}
}
</script>
