

// ID of the Google Spreadsheet
 var spreadsheetID = "1vD1pKMCsBUhZmiIR0dkVyb5avchpa7FqgtG8K3J9x9Y";

 // Make sure it is public or set to Anyone with link can view
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

 var blog = new Vue({
   el: '#list',

   data: {
 		sites: null,
     posts: null
 	},

   watch: {
 		currentPage: 'fetchSites',
     currentPage: 'fetchPosts'
 	},
   created: function () {
     this.fetchSites()
   },

   methods: {
     fetchSites: function () {
       var xhr = new XMLHttpRequest()
       var self = this
       xhr.open('GET', blogURL  )
       xhr.onload = function () {
         self.sites = JSON.parse(xhr.responseText)
         self.sites = self.sites.feed.entry
       }
       xhr.send()
     },

     theTitle: function(site) {
       return site.gsx$title.$t;
     },
     theLink: function(site) {
       return site.gsx$url.$t
     },
     theDescription: function(site){
       return site.gsx$description.$t;
     },
     getThumbnail: function(site){
       var stem = site.gsx$url.$t
       stem = stem.substring(7)
       return 'screenshots/' + stem + '.jpeg'
     },
     fetchPosts: function(post) {
       var postsUrl = post.gsx$url.$t + '/wp-json/wp/v2/posts/?per_page=3'
       var xhr = new XMLHttpRequest()
       var sitePosts = this
       xhr.open('GET', postsUrl  )
       xhr.onload = function () {
         sitePosts.posts = JSON.parse(xhr.responseText)
       }
       xhr.send()
       console.log(sitePosts.posts)
     },
     postTitle: function(thePosts){
       return sitePosts.posts[0].title.rendered
     },

 //need to do something w mounted https://vuejs.org/v2/api/#mounted
     getButtons: function() {
             $( document ).ready(function() {
               console.log( "ready!" );
           });
         }
   },
   mounted() {
     console.log(this.$el.getElementsByClassName('load')) // I'm text inside the component.
   }


 });
 blog.getButtons();
