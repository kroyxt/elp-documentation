<template>
	<section class="Proposals">
		<!--Section Title-->
		<h1 v-if="selectedType === ''">Draft Proposals</h1>
		<h1 v-else>{{ selectedType }}</h1>
		<!--End of Section Title-->

		<!--List of Flair names-->

			<!--
				 -When one of the options is selected, the value of the option will be set to
				 -the variable selectedType. Next the getProposals() method will be called.
				 -->
		<select
			class="Proposals__select"
			v-model="selectedType"
			v-on:click="getProposals"
		>
			<option class="Proposals__option" selected disabled value=""
				>Select Proposal</option
			>
			<option class="Proposals__option" v-for="type in types">{{
				type
			}}</option>
		</select>
		<!--End of List of Flair names-->

		<!--Active Proposals-->

		<!--
			 when the variable activeProposals receives the data from the reddit API
			 this section will be shown.

			 by default the variable activeProposals is an empty object and this
			 section will not be displayed.
			 -->

		<transition name="fade">
			<section class="Proposals__posts" v-if="activeProposals.length > 0">
				<table>
					<thead>
						<tr>
							<th>Proponent</th>
							<th>Summary</th>
							<th>Date</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="proposal in activeProposals">
							<td>
								<a
									:href="'https://www.reddit.com/u/' + proposal.data.author"
									target="_blank"
									>{{ proposal.data.author }}</a
								>
							</td>
							<td>
								{{ proposal.data.title }}
							</td>
							<td>
								{{
									new Date(proposal.data.created * 1000).toLocaleString(
										"es-ES",
										{
											day: "numeric",
											month: "numeric",
											year: "numeric",
										}
									)
								}}
							</td>
							<td>
								<a
									:href="'https://www.reddit.com' + proposal.data.permalink"
									target="_blank"
									>see</a
								>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</transition>
		<!--End of Active Proposals-->

		<!--Invalid Proposals-->

		<!--
			 when the variable invalidProposals receives the data from the reddit API
			 this section will be shown.
			 
			 by default the variable invalidProposals is an empty object and this
			 section will not be displayed.
			 -->

		<transition name="fade">
			<section class="Proposals__lock" v-if="invalidProposals.length > 0">
				<div class="custom-block danger">
					<p class="custom-block-title">Invalid Proposals</p>
					<p>
						The following proposals are no longer valid because they've been
						superseded or voted on.
					</p>
				</div>
				<table>
					<thead>
						<tr>
							<th>Proponent</th>
							<th>Summary</th>
							<th>Date</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="lock in invalidProposals">
							<td>
								<s>
									<a
										:href="'https://www.reddit.com/u/' + lock.data.author"
										target="_blank"
										>{{ lock.data.author }}</a
									>
								</s>
							</td>
							<td>
								<s>
									{{ lock.data.title }}
								</s>
							</td>
							<td>
								{{
									new Date(lock.data.created * 1000).toLocaleString("es-ES", {
										day: "numeric",
										month: "numeric",
										year: "numeric",
									})
								}}
							</td>
							<td>
								<s>
									<a
										:href="'https://www.reddit.com' + lock.data.permalink"
										target="_blank"
										>see</a
									>
								</s>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</transition>
		<!--End of invalid Proposals-->
	</section>
</template>

<script charset="utf-8">
import axios from "axios";

export default {
	data() {
		return {
			types: [
				"Animals",
				"Arithmetic",
				"Astronomy",
				"Calendar",
				"Chemistry",
				"Colors",
				"Community Administration",
				"Country Names",
				"Flag",
				"Grammar",
				"Logo",
				"Meteorology",
				"Name",
				"Number Base",
				"Numbers",
				"Orthographic numerals",
				"Phonology",
				"Physics",
				"Prosody",
				"Script",
				"Shapes",
				"Touch alphabet",
			],
			selectedType: "",
			activeProposals: {},
			invalidProposals: {},
		};
	},

	methods: {
		async getProposals() {
			// request the data to the reddit api
			const getJsonData = await axios.get(
				`https://www.reddit.com/r/EncapsulatedLanguage/search.json?q=flair_name%3A%22${this.selectedType}%20Proposal%22&restrict_sr=1&show=all&sort=new`
			);

			// store all the proposals
			const proposals = getJsonData.data.data.children;

			// Separate proposals into active and invalid
			this.activeProposals = proposals.filter(
				(proposal) => proposal.data.locked == false
			);
			this.invalidProposals = proposals.filter(
				(proposal) => proposal.data.locked == true
			);
		},
	},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.Proposals__select {
	background-color: transparent;
	width: 100%;
	padding: 5px;
	border-radius: 10px;
	color: skyblue;
	font-size: 1rem;
	font-weight: bold;
}

.Proposals__select:focus {
	outline: none;
}
</style>
