<template>
	<div class="Audio">
		<table class="Audio__table">
			<thead class="Audio__head">
				<tr>
					<th></th>
					<th>Front</th>
					<th>Back</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>High</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">i</span>
							<span class="Audio__item" @click="playAudio()">iː</span>
							<span class="Audio__item" @click="playAudio()">y</span>
							<span class="Audio__item" @click="playAudio()">yː</span>
						</div>
					</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">u</span>
							<span class="Audio__item" @click="playAudio()">uː</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Mid</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">e</span>
							<span class="Audio__item" @click="playAudio()">eː</span>
						</div>
					</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">o</span>
							<span class="Audio__item" @click="playAudio()">oː</span>
						</div>
					</td>
				</tr>
				<tr>
					<td>Low</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">a</span>
							<span class="Audio__item" @click="playAudio()">aː</span>
						</div>
					</td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { playAudio } from './playAudio.js';

export default {
	methos: {
		playAudio,
	}
}
</script>
