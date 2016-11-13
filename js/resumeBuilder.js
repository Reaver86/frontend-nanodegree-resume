var bio = {
	"name": "Alexander Schuster",
	"role": "Junior Software Developer",
	"contacts": {
		"mobile": "+49 176 80861748",
		"email": "alexander.schuster@web.de",
		"github": "Reaver86",
		"twitter": "@heyitsalex86",
		"location": "Stuttgart"
	},
	"biopic": "images/alexander_schuster.JPG",
	"welcomeMessage": "Welcome to my ridiculously awesome resume",
	"skills": ["Angular2", "CSS", "JavaScript", "Spring-Boot"],
	"display": function() {
		var header = $("#header");
		header.prepend(HTMLheaderRole.replace("%data%", this.role))
			.prepend(HTMLheaderName.replace("%data%", this.name));
		$.each(this.contacts, function(key, value) {
			$("#topContacts").append(HTMLcontactGeneric.replace("%contact%", key).replace("%data%", value));
			$("#footerContacts").append(HTMLcontactGeneric.replace("%contact%", key).replace("%data%", value));
		});
		header.append(HTMLbioPic.replace("%data%", this.biopic))
			.append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
		if (bio.skills.length > 0) {
			header.append(HTMLskillsStart);
			bio.skills.forEach(function(element) {
				$("#skills").append(HTMLskills.replace("%data%", element));
			});
		}
	}
};

var work = {
	"jobs": [{
		"employer": "Swiss Engineering Institute",
		"title": "Portaljunior",
		"location": "Stuttgart",
		"dates": "07/2015 - now",
		"description": "Working on the Firmen Online 2.0 Project at Allianz Deutschland, building an application consisting of Front-End using Angular2 and Microservices using Spring-Boot."
	}],
	"display": function() {
		this.jobs.forEach(function(element) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", element.employer + HTMLworkTitle.replace("%data%", element.title)))
				.append(HTMLworkDates.replace("%data%", element.dates))
				.append(HTMLworkLocation.replace("%data%", element.location))
				.append(HTMLworkDescription.replace("%data%", element.description));
		});
	}
};

var projects = {
	"projects": [{
		"title": "Some project",
		"dates": "2016",
		"description": "Some description about the project",
		"images": ["http://placekitten.com/g/300/200", "http://lorempixel.com/300/200"]
	}],
	"display": function() {
		this.projects.forEach(function(project) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title))
				.append(HTMLprojectDates.replace("%data%", project.dates))
				.append(HTMLprojectDescription.replace("%data%", project.description));
			project.images.forEach(function(image) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
			});
		});
	}
};

var education = {
	"schools": [{
		"name": "HFT Stuttgart",
		"location": "Stuttgart",
		"degree": "Bachelor of Science",
		"url": "https://www.hft-stuttgart.de/",
		"majors": ["Math"],
		"dates": "2015"
	}],
	"onlineCourses": [{
		"title": "FEND",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}],
	"display": function() {
		var education = $("#education");
		this.schools.forEach(function(school) {
			education.append(HTMLschoolStart);
			$(".education-entry:last")
				.append(HTMLschoolName.replace("%data%", school.name).replace("#", school.url) +
					HTMLschoolDegree.replace("%data%", school.degree))
				.append(HTMLschoolDates.replace("%data%", school.dates))
				.append(HTMLschoolLocation.replace("%data%", school.location));
			school.majors.forEach(function(major) {
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
			});
		});
		education.append(HTMLonlineClasses);
		this.onlineCourses.forEach(function(course) {
			education.append(HTMLschoolStart);
			$(".education-entry:last")
				.append(HTMLonlineTitle.replace("%data%", course.title) +
					HTMLonlineSchool.replace("%data%", course.school))
				.append(HTMLonlineDates.replace("%data%", course.dates))
				.append(HTMLonlineURL.replace("%data%", course.url).replace("#", course.url));
		});
	}
};

function addMap() {
	$("#mapDiv").append(googleMap);
}

var objects = [bio, work, projects, education];
objects.forEach(function(obj) {
	obj.display();
});

addMap();