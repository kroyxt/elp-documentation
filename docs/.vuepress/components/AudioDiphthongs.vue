<template>
	<div class="Audio">
		<table class="Audio__table">
			<thead class="Audio__head">
				<tr>
					<th>Diphthongs</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">ai̯ </span>
						</div>
					</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">ei̯ </span>
						</div>
					</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">oi̯ </span>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">au̯ </span>
						</div>
					</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">eu̯ </span>
						</div>
					</td>
					<td>
						<div class="Audio__wrap">
							<span class="Audio__item" @click="playAudio()">ou̯ </span>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { playAudio } from './playAudio.js';

export default {
	methods: {
		playAudio,
	}
}
</script>
