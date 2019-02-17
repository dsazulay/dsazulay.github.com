var app = new Vue({
    el: "#app",
    data() {
        return {
            name: myData.bio.name,
            occupation: myData.bio.role,
            location: myData.bio.contacts.location,
            email: myData.bio.contacts.email,
            phone: myData.bio.contacts.mobile,
            skills: myData.bio.skills,
            languages: myData.bio.languages,
            schools: myData.education.schools,
            jobs: myData.work.jobs
        }
    },
    methods: {
        showInfo: function(event) {
            var infoNode = event.target.parentNode.querySelector(".info")
            if (!infoNode) {
                infoNode = event.target.parentNode.parentNode.querySelector(".info")
            }
            infoNode.style.display = "block"
        },
        hideInfo: function(event) {
            var infoNode = event.target.parentNode.querySelector(".info")
            if (!infoNode) {
                infoNode = event.target.parentNode.parentNode.querySelector(".info")
            }
            infoNode.style.display = "none"
        }
    }
});