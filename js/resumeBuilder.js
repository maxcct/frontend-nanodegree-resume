var model = {
	bio: {
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
		"skills" : ["Python", "JavaScript", "SQL", "HTML/CSS"],
	},

	work: [
		{
			"employer" : "Wildcat Dispatches: For Dangerous Times",
			"title" : "Executive Editor and Webmaster",
			"dates" : "Nov 2016 to present",
			"description" : "Co-founded this new web-based political magazine, and administer its <a id='unstyled' href='http://www.wildcatdispatches.org'>website</a> via Wordpress."
		},
		{
			"employer" : "Verso Books",
			"title" : "Freelance Editor",
			"dates" : "Oct 2016 to Jan 2017",
			"description" : "Prepared Priyamvada Gopal's book <em>Insurgent Empire</em> for publication."
		},
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
	],

	projects: [
		{
			"title" : "NGO Emporium",
			"dates" : "Jan 2017",
			"description" : "Database-backed web application with user authorisation and authentication. Built using Python, JavaScript/jQuery, Flask, SQLAlchemy, OAuth 2.",
			"images" : "images/ngos.jpg",
			"url" : "https://github.com/maxcct/catalog"			
		},
		{
			"title" : "Multi-User Blog",
			"dates" : "Dec 2016",
			"description" : "Built using Python, Jinja2, HTML/CSS and Google App Engine. Used cookies, hashing and the Cloud Datastore to enable authenticated and authorised use of post, comment, edit, delete, ‘like’ and other functionality by multiple users.",
			"images" : "images/blog.jpg",
			"url" : "https://hwapp123.appspot.com/blog"
		},
		{
			"title" : "Tournament Simulator",
			"dates" : "Oct 2016",
			"description" : "Created a program that simulates ‘Swiss-system’ tournaments involving any number of participants and stores the results in a database, using Python, PostgreSQL and Vagrant. Implemented ‘bye’ system to allow for odd numbers of players; systems to pair players randomly in the first round then according to the Swiss system subsequently; system to rank tied players according to the total number of wins accumulated by their respective opponents so far in the tournament.",
			"images" : "images/swiss.jpg",
			"url" : "https://github.com/maxcct/tournament"
		}
	],
	education: {
		"university" : {
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
				"title" : "Machine Learning",
				"school" : "Stanford University",
				"dates" : "Feb 2017 to present",
				"url" : "https://www.coursera.org/learn/machine-learning/home/welcome"
			},
			{
				"title" : "Introduction to Computer Science and Programming Using Python",
				"school" : "MIT",
				"dates" : "Jan 2017 to present",
				"url" : "https://courses.edx.org/courses/course-v1:MITx+6.00.1x_11+1T2017"
			},
			{
				"title" : "Intoduction to Programming",
				"school" : "Udacity",
				"dates" : "Oct 2016",
				"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
			}
		]
	}
};


$(document).ready(function() {
	var controller = {
		bio: {
			formatNameandRole: function() {
				formattedName = HTMLheaderName.replace('%data%', model.bio.name);
				formattedRole = HTMLheaderRole.replace('%data%', model.bio.role);
				return formattedName + formattedRole;
			},
			formatPhoto: function() {
				return formattedPhoto = HTMLbioPic.replace('%data%', model.bio.biopic);
			},
			formatContactInfo: function() {
				var formattedContactInfo = "<ul>";
			    formattedContactInfo += HTMLmobile.replace('%data%', model.bio.contacts.mobile);
			    formattedContactInfo += HTMLemail.replace('%data%', model.bio.contacts.email);
			    formattedContactInfo += HTMLgithub.replace('%data%', model.bio.contacts.github);
			    formattedContactInfo += HTMLlocation.replace('%data%', model.bio.contacts.location[0]);
			    formattedContactInfo += "</ul>";
			    return formattedContactInfo;
			},
			formatSkills: function() {
				formattedSkills = "";
				for (i = 0; i < model.bio.skills.length; i++) { 
			    	formattedSkills += HTMLskills.replace('%data%', model.bio.skills[i]);
			    };
			    return formattedSkills;
			}
		},
		work: {
			formatJobs: function() {
				var formattedJobs = [];
				for (job in model.work) {
					var formattedEmployer = HTMLworkEmployer.replace('%data%', model.work[job].employer);
					var formattedWorkTitle = HTMLworkTitle.replace('%data%', model.work[job].title);
					var formattedWorkDates = HTMLworkDates.replace('%data%', model.work[job].dates);
					var formattedWorkDescription = HTMLworkDescription.replace('%data%', model.work[job].description);
					var formattedWorkInfo = formattedEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkDescription;
					formattedJobs.push(formattedWorkInfo);
				};
				return formattedJobs;
			}
		},
		projects: {
			formatProjects: function() {
				var formattedProjects = [];
				for (project in model.projects) {
					var partiallyFormattedProjectTitle = HTMLprojectTitle.replace('%data%', model.projects[project].title);
					var formattedProjectTitle = partiallyFormattedProjectTitle.replace('#', model.projects[project].url);
					var formattedProjectDates = HTMLprojectDates.replace('%data%', model.projects[project].dates);
					var formattedProjectDescription = HTMLprojectDescription.replace('%data%', model.projects[project].description);
					var formattedProjectImage = HTMLprojectImage.replace('%data%', model.projects[project].images);
					var formattedProjectInfo = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage;	
					formattedProjects.push(formattedProjectInfo);
				};
				return formattedProjects;
			}
		},
		education: {
			formatUniversity: function() {
				var formattedUniName = HTMLschoolName.replace('%data%', model.education.university.name);
				var formattedDegree = HTMLschoolDegree.replace('%data%', model.education.university.degree);
				var formattedUniDates = HTMLschoolDates.replace('%data%', model.education.university.dates);
				var formattedUniInfo = formattedUniName + formattedDegree + formattedUniDates;
				return formattedUniInfo;
			},
			formatOnlineCourses: function() {		
				var formattedOnlineCourses = [];
				for (course in model.education.onlineCourses) {
					var partiallyFormattedCourseTitle = HTMLonlineTitle.replace('%data%', model.education.onlineCourses[course].title);
					var formattedCourseTitle = partiallyFormattedCourseTitle.replace('#', model.education.onlineCourses[course].url)
					var formattedCourseSchool = HTMLonlineSchool.replace('%data%', model.education.onlineCourses[course].school);
					var formattedCourseDates = HTMLonlineDates.replace('%data%', model.education.onlineCourses[course].dates);
					var formattedOnlineCourseInfo = formattedCourseTitle + formattedCourseSchool + formattedCourseDates + "<br>";
					formattedOnlineCourses.push(formattedOnlineCourseInfo);
				};
				return formattedOnlineCourses;
			}
		},
		init: function() {
			view.init();
		}
	};

	var view = {
		displayBio: function() {
			console.log('test');
			$("#header").prepend(controller.bio.formatPhoto());
			$("#header").prepend(controller.bio.formatContactInfo());
			$("#header").prepend(controller.bio.formatNameandRole());		
			$("#header").append(HTMLskillsStart);
			$("#skills").append(controller.bio.formatSkills());
		},
		displayWork: function() {
			var jobs = controller.work.formatJobs()
			for (job in jobs) {
				$("#workExperience").append(HTMLworkStart);
				$(".work-entry:last").append(jobs[job]);
			};
		},
		displayProjects: function() {
			var projects = controller.projects.formatProjects()
			for (project in projects) {
				$("#projects").append(HTMLprojectStart);
				$(".project-entry:last").append(projects[project]);
			};
		},
		displayEducation: function() {
			$("#education").append(HTMLschoolStart);
			$(".education-entry").append(controller.education.formatUniversity());
			$("#education").append(HTMLonlineClasses);
			var courses = controller.education.formatOnlineCourses();
			for (course in courses) {
				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(courses[course]);
			};
		},
		init: function() {
			this.displayBio();
			this.displayWork();
			this.displayProjects();
			this.displayEducation();
			$("#mapDiv").append(googleMap);
		}
	};
	controller.init();
});
