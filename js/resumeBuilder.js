var bio = {
	"name" : "Max Compton",
	"role" : "Software Engineer",
	"welcomeMessage" : "Welcome to Max's CV",
	"biopic" : "images/leap.jpg",		
	"contacts" : {
		"mobile" : "55 2183 8926",
		"email" : "maxcct@cantab.net",
		"github" : "maxcct",
		"location" : ["Mexico City", "Cusco, Peru", "Sucre, Bolivia", "London, UK", "Hong Kong", "Bristol, UK"]
	},
	"skills" : ["Python", "Ruby", "JavaScript", "SQL", "HTML/CSS"]
}

var work = {
	"jobs" : [
		{
			"employer" : "wordy.com",
			"title" : "Editor",
			"dates" : "Dec 2015 to present",
			"description" : "Rewriting and copyediting for clients of this highly selective online provider of editorial services."
		},
		{
			"employer" : "Southbank Centre",
			"title" : "Editor",
			"dates" : "Aug 2015 to Sep 2016",
			"description" : "General editorial work (website content, brochures, programmes, marketing materials, etc.), performed remotely on a predominantly full-time basis."
		},
		{
			"employer" : "Groupon UK/IE",
			"title" : "Editor for London",
			"location" : "London, UK",
			"dates" : "Apr 2011 to Sep 2014",
			"description" : "Coordinated editorial for Greater London and Surrey (formerly Northern England). Was responsible for dozens of features a day, involving the collaboration of many people in various roles companywide. Liaised with other departments to ensure deadlines were met, errors minimised and revenues maximised."
		}	
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Multi-User Blog",
			"dates" : "Dec 2016",
			"description" : "Built using Python, Jinja2, HTML/CSS and Google App Engine. Used cookies, hashing and the Cloud Datastore to enable authenticated and authorised use of post, comment, edit, delete, ‘like’ and other functionality by multiple users.",
			"images" : "images/blog.jpg"
		},
		{
			"title" : "Tournament Simulator",
			"dates" : "Oct 2016",
			"description" : "Created a program that simulates ‘Swiss-system’ tournaments involving any number of participants and stores the results in a database, using Python, PostgreSQL and Vagrant. Implemented ‘bye’ system to allow for odd numbers of players; systems to pair players randomly in the first round then according to the Swiss system subsequently; system to rank tied players according to the total number of wins accumulated by their respective opponents so far in the tournament.",
			"images" : "images/swiss.jpg"
		}
	] 
}

projects.display = function() {
	for (i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
		var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images);
		var formattedProjectInfo = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage;
		$(".project-entry:last").append(formattedProjectInfo);
	}
}

var education = {
	"schools" : {
		"name" : "University of Cambridge",
		"location" : "Cambridge, UK",
		"degree" : "Master of Arts (Cantab) in English",
		"dates" : "2007 to 2010",
	},
	"onlineCourses" : [
		{
			"title" : "Full-Stack Web Developer",
			"school" : "Udacity",
			"dates" : "Dec 2016 to present",
			"url" : "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
		},
		{
			"title" : "Intoduction to Programming",
			"school" : "Udacity",
			"dates" : "Oct 2016",
			"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		}
	]
}

education.display = function() {
	$("#education").append(HTMLschoolStart);
	var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools.name);
	var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools.degree);
	var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools.dates);
	var formattedSchoolInfo = formattedSchoolName + formattedDegree + formattedSchoolDates;
	$(".education-entry").append(formattedSchoolInfo);	
	$("#education").append(HTMLonlineClasses);
	for (i = 0; i < education.onlineCourses.length; i++) {
		$("#education").append(HTMLschoolStart);
		var partiallyFormattedCourseTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
		var formattedCourseTitle = partiallyFormattedCourseTitle.replace('#', education.onlineCourses[i].url)
		var formattedCourseSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
		var formattedCourseDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
		var formattedOnlineCourseInfo = formattedCourseTitle + formattedCourseSchool + formattedCourseDates + "<br>";
		$(".education-entry:last").append(formattedOnlineCourseInfo);
	}
}

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedPhoto = HTMLbioPic.replace('%data%', bio.biopic);
var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

function displaySkills() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		formattedSkills = "";
		for (i = 0; i < bio.skills.length; i++) { 
	    	formattedSkills += HTMLskills.replace('%data%', bio.skills[i]);
	    }
	    $("#skills").append(formattedSkills);
    }
}

function displayWork(job) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
	var formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
	var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
	var formattedWorkDescription = HTMLworkDescription.replace('%data%', job.description);
	var formattedWorkInfo = formattedEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkDescription;
	$(".work-entry:last").append(formattedWorkInfo);
}

function displayContactInfo() {
	var formattedContactInfo = "<ul>";
    formattedContactInfo += HTMLmobile.replace('%data%', bio.contacts.mobile);
    formattedContactInfo += HTMLemail.replace('%data%', bio.contacts.email);
    formattedContactInfo += HTMLgithub.replace('%data%', bio.contacts.github);
    formattedContactInfo += HTMLlocation.replace('%data%', bio.contacts.location[0]);
    formattedContactInfo += "</ul>";
    return formattedContactInfo;
}

function inName() {
	names = bio.name.split(" ");
	surname = names[1].toUpperCase();
	name = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	return name + " " + surname;
}

$(document).click(function(loc) {
	logClicks(loc.pageX,loc.pageY);
});

$("#header").prepend(formattedPhoto);
$("#header").prepend(displayContactInfo());
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
displaySkills();
work.jobs.forEach(displayWork);
$("#main").append(internationalizeButton);
projects.display();
education.display();
$("#mapDiv").append(googleMap);
