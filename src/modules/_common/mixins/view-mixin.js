const viewMixin = {
  methods: {
    updateNavbarHeightCSSVariable() {
      const navbarHeight = document.querySelector('.navigation').offsetHeight
      const root = document.querySelector(':root')

      root.style.setProperty('--navbar-height', `${navbarHeight}px`)
    },
    setupWindowEvents() {
      window.removeEventListener('resize', this.updateNavbarHeightCSSVariable)
      window.addEventListener('resize', this.updateNavbarHeightCSSVariable)
    }
  },
  mounted() {
    this.setupWindowEvents()
    this.updateNavbarHeightCSSVariable()
  }
}

export default viewMixin
