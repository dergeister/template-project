const navigationMixin = {
  methods: {
    /**
     * Updates the --navbar-height CSS variable based on the element nav.navigation height
     */
    updateNavbarHeightCSSVariable() {
      const navbarHeight = document.querySelector('.navigation').offsetHeight
      const root = document.querySelector(':root')

      root.style.setProperty('--navbar-height', `${navbarHeight}px`)
    },
    registerWindowEvents() {
      window.addEventListener('resize', this.updateNavbarHeightCSSVariable)
    },
    forgetWindowEvents() {
      window.removeEventListener('resize', this.updateNavbarHeightCSSVariable)
    }
  },
  mounted() {
    this.registerWindowEvents()
    this.updateNavbarHeightCSSVariable()
  },
  beforeUnmount() {
    this.forgetWindowEvents()
  }
}

export default navigationMixin
