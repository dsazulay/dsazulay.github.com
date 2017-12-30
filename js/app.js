var app = new Vue({
    el: "#app",
    data: {
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
});