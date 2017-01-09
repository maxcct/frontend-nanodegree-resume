var bio = {
	"name" : "Max Compton",
	"role" : "Software Engineer",
	"contact info" : {
		"email" : "maxcct@cantab.net",
		"mobile" : "55 2183 8926",
		"location" : "Mexico City"
	},
	"photo" : "images/leap.jpg",
	"welcome" : "Welcome to Max's CV",
	"skills" : ['Python', 'Ruby', 'JavaScript', 'SQL', 'HTML/CSS']
}

var work = {};
work.position = 'Editor';
work.employer = 'wordy.com';
work.years = 1;

var education = {
	"university" : {
		"name" : "University of Cambridge",
		"subject" : "English",
		"years" : "2007 to 2010",
		"city" : "Cambridge, UK"
	},
	"online" : {
		"name" : "Udacity",
		"subject" : "Full-Stack Web Developer",
		"years" : "2016 to 2017"
	}
}

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedPhoto = HTMLbioPic.replace('%data%', bio.photo);
var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcome);

function listSkills() {
	formattedSkills = HTMLskillsStart.slice(0, -5);
	for (i = 0; i < bio.skills.length; i++) { 
    	formattedSkills += HTMLskills.replace('%data%', bio.skills[i]);
    }
    formattedSkills.concat(HTMLskillsStart.slice(-5));
    return formattedSkills
}

function listContactInfo() {
	var formattedContactInfo = "<ul>";
    formattedContactInfo += HTMLemail.replace('%data%', bio["contact info"].email);
    formattedContactInfo += HTMLmobile.replace('%data%', bio["contact info"].mobile);
    formattedContactInfo += HTMLlocation.replace('%data%', bio["contact info"].location);
    formattedContactInfo += "</ul>";
    return formattedContactInfo
}

$("#header").prepend(listSkills());
$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedPhoto);
$("#header").prepend(listContactInfo());
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(work["position"]);
$("#header").append(education.name);