// jQuery
window.$ = window.jQuery = require('jquery');

$('body').append('<p>Added jQuery</p>');

// Vue
window.Vue = require('vue');

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});
