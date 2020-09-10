<template>
	<section class="Proposals">
		<!--<h1 :id="type">-->
		<!--<a :href="'#' + type" class="header-anchor">#</a> {{ type }}-->
		<!--</h1>-->
		<section class="Proposals__posts" v-if="proposals.length > 0">
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
					<tr v-for="proposal in proposals">
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
								new Date(proposal.data.created * 1000).toLocaleString("es-ES", {
									day: "numeric",
									month: "numeric",
									year: "numeric",
								})
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

		<section class="Proposals__lock" v-if="locks.length > 0">
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
					<tr v-for="lock in locks">
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
	</section>
</template>

<script charset="utf-8">
import axios from 'axios';
export default {
	props: ["type"],
	data() {
		return {
			proposals: {},
			locks: {},
		};
	},
	async created() {
	const response = await axios.get(
	`https://www.reddit.com/r/EncapsulatedLanguage/search.json?q=flair_name%3A%22${this.type}%20Proposal%22&restrict_sr=1&show=all&sort=new`
	);
	const childrens = response.data.data.children;
	this.proposals = childrens.filter((posts) => posts.data.locked == false);
	this.locks = childrens.filter((posts) => posts.data.locked == true);
	},
};
</script>
