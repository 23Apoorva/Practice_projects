let panels = document.querySelectorAll('.pannel');

panels.forEach(pannel => {
      pannel.addEventListener('click', () => {
            removeActiveClasses()
            pannel.classList.add('active')
      })
})

function removeActiveClasses() {
      panels.forEach(
            pannel => {
                  pannel.classList.remove('active')
            }
      )
}
