/**
 * jQuery and Bootstrap loading
 */
import 'bootstrap'

/**
 * Axios loading
 */
import axios from 'axios'

/**
 * Frontend plugins loading
 */
import 'slick-carousel'
import swal from 'sweetalert2'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

window.axios = axios

Vue.use(BootstrapVue)

new Vue().$mount('#app');

(function ($) {
  /**
   * Bind all bootstrap tooltips
   */
  $('[data-toggle="tooltip"]').tooltip()

  /**
   * Bind all bootstrap popovers
   */
  $('[data-toggle="popover"]').popover()

  $('.slider').not('.slick-initialized').removeAttr('hidden').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1
  })

  $('button.sweet').click(() => {
    swal({
      title: 'Yo!',
      text: 'Yeaaah!',
      type: 'success',
      confirmButtonText: 'Cool'
    })
  })
})(window.jQuery)
