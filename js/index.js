//vue method: http://bionicteaching.com/google-form-to-google-sheets-to-vue-website/, https://codepen.io/twwoodward/pen/Zrwyqp

// ID of the Google Spreadsheet
var spreadsheetID = "1vD1pKMCsBUhZmiIR0dkVyb5avchpa7FqgtG8K3J9x9Y";

// Make sure it is public or set to Anyone with link can view
var sheetUrl = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
var imageurl = "https://res.cloudinary.com/boazz/image/url2png/w_634,h_300,c_fill,g_north,dpr_2/";

//need-fallback
var favicourl = "https://www.google.com/s2/favicons?domain=";

//icons
Vue.component('icon-github', {
    template: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'
})
// register modal component
Vue.component('modal', {
    template: '#modal-template'
})

var app = new Vue({
    el: "#app",

    data: {
        showModal: false,
        searchQuery: '',
        entries: '',
        transformation: imageurl,
        favico: favicourl,
        loading: 0,
        headline: 'Animation Zietgiest'
    },

    watch: {
        currentPage: "fetchData"
    },

    created: function() {
        this.fetchData();
    },

    methods: {
        fetchData: function() {
            var xhr = new XMLHttpRequest();
            var self = this;
            self.loading = 5;
            xhr.open("GET", sheetUrl);

            xhr.onprogress = function() {
                console.log('LOADING/parsing', xhr.readyState);
                // doesnt work
                self.loading = 45;
            }
            xhr.onload = function() {
                self.entries = JSON.parse(xhr.responseText);
                self.entries = self.entries.feed.entry;
                console.log('OPENED');
                self.loading = 100;
            }

            xhr.send(null);self.loading = 35;
        },
        filterItems: function(entries) {
            var app1 = this;
            return entries.filter(function(entry) {
                let regex = new RegExp("(" + app1.searchQuery + ")","i");
                return entry.gsx$descreption.$t.match(regex);

            });

        }
        //functions
        //this.$refs.mySearch.$el.focus();

    }  //mounted:  function () {app.loading = 100;}
    //computed: {//filter should be here

});
