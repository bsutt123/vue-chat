import idObj from 'identity-obj-proxy';
const show = jest.fn()
const hide = jest.fn()

const CssModuleTestHelperMixin = {
	install (Vue, options) {
		Vue.mixin({
			created () {
				this.$style = idObj;
			}
		})
	}
};

module.exports = { show, hide, CssModuleTestHelperMixin };
