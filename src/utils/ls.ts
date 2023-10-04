export const ls = (propsKey: string) => ({
	key: propsKey,

	get() {
		return JSON.parse(localStorage.getItem(this.key)!);
	},
	set(value: any) {
		localStorage.setItem(this.key, JSON.stringify(value));
	},
	clear() {
		localStorage.removeItem(this.key);
	},
});
