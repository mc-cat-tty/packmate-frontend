<template>
	<b-modal id="settingsModal" title="Settings" centered scrollable ok-only>
		<b-form-group
				label-cols-sm="4"
				label-cols-lg="3"
				description="The number of bytes to display in the binary representation of the packet"
				label="HEX block width"
				label-for="settings-hexdumpBlockSize">
			<b-form-input type="number" id="settings-hexdumpBlockSize" v-model.number="hexdumpBlockSize"/>
		</b-form-group>
		<b-form-group
				label-cols-sm="4"
				label-cols-lg="3"
				description="The number system used in line numbers of a binary representation of a packet"
				label="Line numbering"
				label-for="settings-hexdumpLineNumberBase">
			<b-form-select id="settings-hexdumpLineNumberBase" v-model="hexdumpLineNumberBase">
				<option :value="10" selected>Decimal</option>
				<option :value="16">Hexadecimal</option>
			</b-form-select>
		</b-form-group>
		<b-form-group
				label-cols-sm="4"
				label-cols-lg="3"
				description="The number of streams to download at a time"
				label="Page size"
				label-for="settings-pageSize">
			<b-form-input type="number" id="settings-pageSize" v-model.number="pageSize"/>
		</b-form-group>
    <b-form-group
        label-cols-sm="4"
        label-cols-lg="3"
        label="Pcap Filename"
        description="Pcap filename selected amongst files in pcaps/ folder"
        label-for="pcap-name">
      <b-form-input @keydown.native.enter="setPcapName" id="pcap-name" v-model="pcapName"/>
    </b-form-group>
	</b-modal>
</template>

<script>
	export default {
		name: 'Settings',
		computed: {
			hexdumpBlockSize: {
				get() {
					return this.$store.state.hexdumpBlockSize;
				},
				set(v) {
					this.$store.commit('setHexdumpBlockSize', v);
				},
			},
			hexdumpLineNumberBase: {
				get() {
					return this.$store.state.hexdumpLineNumberBase;
				},
				set(v) {
					this.$store.commit('setHexdumpLineNumberBase', v);
				},
			},
			pageSize: {
				get() {
					return this.$store.state.pageSize;
				},
				set(v) {
					this.$store.commit('setPageSize', v);
				},
			},
      pcapName: {
				get() {
					return this.$store.state.pcapName;
				},
				set(v) {
					this.$store.commit('setPcapName', v);
				},
			},
		},
	};
</script>
