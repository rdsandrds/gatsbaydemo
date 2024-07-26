// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = [{},
	{
	id:1,
	ProjectHeader: 
		{
		title: 'Skygge RBL Bank Project',
		Date: 'April- 2021',
		tags: 'UI / Frontend',
		},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'RBL Bank',
				details: 'RBL Bank is a Indian private sector bank headquartered in Mumbai, Maharashtra',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend/Backend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://rblbank.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '555 8888 888',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Skygge is a Field Force Automation solution that enables teams on the field with productivityfeatures like Customer Profiling, Order Taking, Appointment Management, Track Targeted V/S',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Java', 'JSP','Servlets', 'JDBC', 'JSP', 'MySQL and Tomcat'
				],
			},
		],
		ProjectDetailsHeading1: 'Challenge',
		ProjectDetails1: [
	        {
				id: 2,
				details: 'Actual, GPS assistance for tagging Customers and assistance with routes, Reminders to mention a few. Skygge Fin comes with some of the unique features and workflows that are tailor made to fit the way Finance world works today. Customer Profiling/Management,Lead/Sales,Management,Digitizing eKYC/Document scans/digital signatures with Geo tagging,Claims Management,Appointment Management,Performance Management,Call Tracking,Geo tagged customers,Auto calculation of time spent in the field/with customers with details of in/out time',
			}
		],
		ProjectDetailsHeading2: 'Roles & Responsibilities',
		ProjectDetails2: [
		    {
				id: 1,
				details:
					'1.Involved in gathering the requirements, analysis, design & development of the project. '
			},
			{
				id: 1,
				details:
					'2.Involved in development of Web Forms, classes using JAVA that incorporates both N-Tier Architecture, and Database Connectivity'
			},
			{
				id: 2,
				details:
					'3.Developed Web Forms using JSP  Used JQuery to enhance UI experience on Client-Side'
			},
			{
				id: 3,
				details:
					'4.Developed component classes using MVC patterns  Developed Persistence layer using Hibernate framework  Created server controls using Spring Controller classes  Used Apache POI api to export data to Excel sheets'
			},
			{
				id: 4,
				details:
					'5.Used AJAX to send asynchronous requests to server  Involved in code review using Sonar Qube  Used SVN for integration, maintenance and Security of code'
			},
			{
				id: 5,
				details:
					'6.Involved in the Unit test and Integration testing  Supported for SIT and UAT phases for defect fixing',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/realstoman',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/c/StomanStudio',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
},
{
	id:2,
	ProjectHeader: 
		{
		title: 'Project extension UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
		},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://company.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '555 8888 888',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
		ProjectDetailsHeading1: 'Challenge',
		ProjectDetails1: [
	        {
				id: 2,
				details: 'Actual, GPS assistance for tagging Customers and assistance with routes, Reminders to mention a few. Skygge Fin comes with some of the unique features and workflows that are tailor made to fit the way Finance world works today. Customer Profiling/Management,Lead/Sales,Management,Digitizing eKYC/Document scans/digital signatures with Geo tagging,Claims Management,Appointment Management,Performance Management,Call Tracking,Geo tagged customers,Auto calculation of time spent in the field/with customers with details of in/out time',
			}
		],
		ProjectDetailsHeading2: 'Roles & Responsibilities',
		ProjectDetails2: [
		    {
				id: 1,
				details:
					'1.Involved in gathering the requirements, analysis, design & development of the project. '
			},
			{
				id: 1,
				details:
					'2.Involved in development of Web Forms, classes using JAVA that incorporates both N-Tier Architecture, and Database Connectivity'
			},
			{
				id: 2,
				details:
					'3.Developed Web Forms using JSP  Used JQuery to enhance UI experience on Client-Side'
			},
			{
				id: 3,
				details:
					'4.Developed component classes using MVC patterns  Developed Persistence layer using Hibernate framework  Created server controls using Spring Controller classes  Used Apache POI api to export data to Excel sheets'
			},
			{
				id: 4,
				details:
					'5.Used AJAX to send asynchronous requests to server  Involved in code review using Sonar Qube  Used SVN for integration, maintenance and Security of code'
			},
			{
				id: 5,
				details:
					'6.Involved in the Unit test and Integration testing  Supported for SIT and UAT phases for defect fixing',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/realstoman',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/c/StomanStudio',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
},
{
	id:2,
	ProjectHeader: 
		{
		title: 'Project extension UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
		},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://company.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '555 8888 888',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
		ProjectDetailsHeading1: 'Challenge',
		ProjectDetails1: [
	        {
				id: 2,
				details: 'Actual, GPS assistance for tagging Customers and assistance with routes, Reminders to mention a few. Skygge Fin comes with some of the unique features and workflows that are tailor made to fit the way Finance world works today. Customer Profiling/Management,Lead/Sales,Management,Digitizing eKYC/Document scans/digital signatures with Geo tagging,Claims Management,Appointment Management,Performance Management,Call Tracking,Geo tagged customers,Auto calculation of time spent in the field/with customers with details of in/out time',
			}
		],
		ProjectDetailsHeading2: 'Roles & Responsibilities',
		ProjectDetails2: [
		    {
				id: 1,
				details:
					'1.Involved in gathering the requirements, analysis, design & development of the project. '
			},
			{
				id: 1,
				details:
					'2.Involved in development of Web Forms, classes using JAVA that incorporates both N-Tier Architecture, and Database Connectivity'
			},
			{
				id: 2,
				details:
					'3.Developed Web Forms using JSP  Used JQuery to enhance UI experience on Client-Side'
			},
			{
				id: 3,
				details:
					'4.Developed component classes using MVC patterns  Developed Persistence layer using Hibernate framework  Created server controls using Spring Controller classes  Used Apache POI api to export data to Excel sheets'
			},
			{
				id: 4,
				details:
					'5.Used AJAX to send asynchronous requests to server  Involved in code review using Sonar Qube  Used SVN for integration, maintenance and Security of code'
			},
			{
				id: 5,
				details:
					'6.Involved in the Unit test and Integration testing  Supported for SIT and UAT phases for defect fixing',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/realstoman',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/c/StomanStudio',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
},
{
	id:2,
	ProjectHeader: 
		{
		title: 'Project extension UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
		},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://company.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '555 8888 888',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
		ProjectDetailsHeading1: 'Challenge',
		ProjectDetails1: [
	        {
				id: 2,
				details: 'Actual, GPS assistance for tagging Customers and assistance with routes, Reminders to mention a few. Skygge Fin comes with some of the unique features and workflows that are tailor made to fit the way Finance world works today. Customer Profiling/Management,Lead/Sales,Management,Digitizing eKYC/Document scans/digital signatures with Geo tagging,Claims Management,Appointment Management,Performance Management,Call Tracking,Geo tagged customers,Auto calculation of time spent in the field/with customers with details of in/out time',
			}
		],
		ProjectDetailsHeading2: 'Roles & Responsibilities',
		ProjectDetails2: [
		    {
				id: 1,
				details:
					'1.Involved in gathering the requirements, analysis, design & development of the project. '
			},
			{
				id: 1,
				details:
					'2.Involved in development of Web Forms, classes using JAVA that incorporates both N-Tier Architecture, and Database Connectivity'
			},
			{
				id: 2,
				details:
					'3.Developed Web Forms using JSP  Used JQuery to enhance UI experience on Client-Side'
			},
			{
				id: 3,
				details:
					'4.Developed component classes using MVC patterns  Developed Persistence layer using Hibernate framework  Created server controls using Spring Controller classes  Used Apache POI api to export data to Excel sheets'
			},
			{
				id: 4,
				details:
					'5.Used AJAX to send asynchronous requests to server  Involved in code review using Sonar Qube  Used SVN for integration, maintenance and Security of code'
			},
			{
				id: 5,
				details:
					'6.Involved in the Unit test and Integration testing  Supported for SIT and UAT phases for defect fixing',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/realstoman',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/c/StomanStudio',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
},
{
	id:2,
	ProjectHeader: 
		{
		title: 'Project extension UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
		},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://company.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '555 8888 888',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
		ProjectDetailsHeading1: 'Challenge',
		ProjectDetails1: [
	        {
				id: 2,
				details: 'Actual, GPS assistance for tagging Customers and assistance with routes, Reminders to mention a few. Skygge Fin comes with some of the unique features and workflows that are tailor made to fit the way Finance world works today. Customer Profiling/Management,Lead/Sales,Management,Digitizing eKYC/Document scans/digital signatures with Geo tagging,Claims Management,Appointment Management,Performance Management,Call Tracking,Geo tagged customers,Auto calculation of time spent in the field/with customers with details of in/out time',
			}
		],
		ProjectDetailsHeading2: 'Roles & Responsibilities',
		ProjectDetails2: [
		    {
				id: 1,
				details:
					'1.Involved in gathering the requirements, analysis, design & development of the project. '
			},
			{
				id: 1,
				details:
					'2.Involved in development of Web Forms, classes using JAVA that incorporates both N-Tier Architecture, and Database Connectivity'
			},
			{
				id: 2,
				details:
					'3.Developed Web Forms using JSP  Used JQuery to enhance UI experience on Client-Side'
			},
			{
				id: 3,
				details:
					'4.Developed component classes using MVC patterns  Developed Persistence layer using Hibernate framework  Created server controls using Spring Controller classes  Used Apache POI api to export data to Excel sheets'
			},
			{
				id: 4,
				details:
					'5.Used AJAX to send asynchronous requests to server  Involved in code review using Sonar Qube  Used SVN for integration, maintenance and Security of code'
			},
			{
				id: 5,
				details:
					'6.Involved in the Unit test and Integration testing  Supported for SIT and UAT phases for defect fixing',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/realstoman',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/c/StomanStudio',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
},
{
	id:2,
	ProjectHeader: 
		{
		title: 'Project extension UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
		},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://company.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '555 8888 888',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
		ProjectDetailsHeading1: 'Challenge',
		ProjectDetails1: [
	        {
				id: 2,
				details: 'Actual, GPS assistance for tagging Customers and assistance with routes, Reminders to mention a few. Skygge Fin comes with some of the unique features and workflows that are tailor made to fit the way Finance world works today. Customer Profiling/Management,Lead/Sales,Management,Digitizing eKYC/Document scans/digital signatures with Geo tagging,Claims Management,Appointment Management,Performance Management,Call Tracking,Geo tagged customers,Auto calculation of time spent in the field/with customers with details of in/out time',
			}
		],
		ProjectDetailsHeading2: 'Roles & Responsibilities',
		ProjectDetails2: [
		    {
				id: 1,
				details:
					'1.Involved in gathering the requirements, analysis, design & development of the project. '
			},
			{
				id: 1,
				details:
					'2.Involved in development of Web Forms, classes using JAVA that incorporates both N-Tier Architecture, and Database Connectivity'
			},
			{
				id: 2,
				details:
					'3.Developed Web Forms using JSP  Used JQuery to enhance UI experience on Client-Side'
			},
			{
				id: 3,
				details:
					'4.Developed component classes using MVC patterns  Developed Persistence layer using Hibernate framework  Created server controls using Spring Controller classes  Used Apache POI api to export data to Excel sheets'
			},
			{
				id: 4,
				details:
					'5.Used AJAX to send asynchronous requests to server  Involved in code review using Sonar Qube  Used SVN for integration, maintenance and Security of code'
			},
			{
				id: 5,
				details:
					'6.Involved in the Unit test and Integration testing  Supported for SIT and UAT phases for defect fixing',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/realstoman',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/c/StomanStudio',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
}];
