import Vue from 'vue';
import Vuex from 'vuex';
import createMutationsSharer from 'vuex-shared-mutations';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
export default new Vuex.Store({
	state: {
		theme: null,

		hexdumpBlockSize: 16,
		hexdumpLineNumberBase: 10,
		pageSize: 25,
		displayFavoritesOnly: false,
		pause: false,
		pcapStarted: true,
    pcapName: '',

		hexdumpMode: false,

		serviceModalName: '',
		serviceModalId: 0,

		patterns: [],
		services: [],

		currentPacketsCount: 0,
		currentStreamsCount: 0,
		currentServicesPacketsCount: {},
		currentServicesStreamsCount: {},
	},
	mutations: {
		setTheme: (s, p) => s.theme = p,
		setHexdumpBlockSize: (s, p) => s.hexdumpBlockSize = p,
		setHexdumpLineNumberBase: (s, p) => s.hexdumpLineNumberBase = p,
		setPageSize: (s, p) => s.pageSize = p,
		// eslint-disable-next-line no-unused-vars
		toggleDisplayFavoritesOnly: (s, p) => s.displayFavoritesOnly = !s.displayFavoritesOnly,
		// eslint-disable-next-line no-unused-vars
		togglePause: (s, p) => s.pause = !s.pause,
		// eslint-disable-next-line no-unused-vars
		startPcap: (s, p) => s.pcapStarted = true,
    setPcapName: (s, p) => s.pcapName = p,
		// eslint-disable-next-line no-unused-vars
		toggleHexdumpMode: (s, p) => s.hexdumpMode = !s.hexdumpMode,

		setServiceModalName: (s, p) => s.serviceModalName = p,
		setServiceModalId: (s, p) => s.serviceModalId = p,

		setPatterns: (s, p) => s.patterns = p,
		addPattern: (s, p) => s.patterns.push(p),

		setServices: (s, p) => s.services = p,
		addService: (s, p) => s.services.push(p),

		setCurrentPacketsCount: (s, p) => s.currentPacketsCount = p,
		setCurrentStreamsCount: (s, p) => s.currentStreamsCount = p,
		setCurrentServicesPacketsCount: (s, p) => s.currentServicesPacketsCount = p,
		setCurrentServicesStreamsCount: (s, p) => s.currentServicesStreamsCount = p,
	},
	actions: {},
	plugins: [
		createPersistedState(),
		createMutationsSharer({
			// eslint-disable-next-line no-unused-vars
			predicate: (mutation, state) => {
				console.debug('Got mutation:', mutation);
				const mName = mutation?.type;
				const process = mName !== 'toggleDisplayFavoritesOnly'
					&& mName !== 'setTheme'
					&& mName !== 'setServiceModalName'
					&& mName !== 'setServiceModalId'
					&& mName !== 'togglePause'
					&& mName !== 'startPcap'
					&& mName !== 'toggleHexdumpMode'
					&& mName !== 'setPatterns'
					&& mName !== 'addPattern'
					&& mName !== 'setServices'
					&& mName !== 'addService'
					&& mName !== 'setCurrentPacketsCount'
					&& mName !== 'setCurrentStreamsCount'
					&& mName !== 'setCurrentServicesPacketsCount'
					&& mName !== 'setCurrentServicesStreamsCount';
				console.debug('Processing?', process);
				return process;
			},
		}),
	],
});
