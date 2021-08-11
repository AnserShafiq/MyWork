const cricketGame = [
	{
		id: 1,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'India',
		location: 'Manchester',
		margin: '89 runs',
		matchDate: 'June 16, 2019',
	},
	{
		id: 2,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'India',
		location: 'Dubai (DSC)',
		margin: '9 wickets',
		matchDate: 'Sep 23, 2018',
	},
	{
		id: 3,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'India',
		location: 'Dubai (DSC)',
		margin: '8 wickets',
		matchDate: 'Sep 19, 2018',
	},
	{
		id: 4,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'Pakistan',
		location: 'The Oval',
		margin: '180 runs',
		matchDate: 'Jun 18, 2017',
	},
	{
		id: 5,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'India',
		location: 'Birmingham',
		margin: '124 runs',
		matchDate: 'Jun 4, 2017',
	},
	{
		id: 6,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'India',
		location: 'Adelaide',
		margin: '76 runs',
		matchDate: 'Feb 15, 2015',
	},
	{
		id: 7,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'Pakistan',
		location: 'Dhaka',
		margin: '1 wicket',
		matchDate: 'March 2, 2014',
	},
	{
		id: 8,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'India',
		location: 'Birmingham',
		margin: '8 wickets',
		matchDate: 'Jun 15, 2013',
	},
	{
		id: 9,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'India',
		location: 'Delhi',
		margin: '10 runs',
		matchDate: 'Jan 6, 2013',
	},
	{
		id: 10,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'Pakistan',
		location: 'Kolkata',
		margin: '85 runs',
		matchDate: 'Jan 3, 2013',
	},
	{
		id: 11,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'Pakistan',
		location: 'Chennai',
		margin: '6 wickets',
		matchDate: 'Dec 30, 2012',
	},
	{
		id: 12,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'India',
		location: 'Dhaka',
		margin: '6 wickets',
		matchDate: 'March 18, 2012',
	},
	{
		id: 13,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'India',
		location: 'Mohali',
		margin: '29 runs',
		matchDate: 'March 30, 2011',
	},
	{
		id: 14,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'India',
		location: 'Dambulla',
		margin: '3 wickets',
		matchDate: 'Jun 19, 2010',
	},
	{
		id: 15,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'Pakistan',
		location: 'Centurion',
		margin: '54 runs',
		matchDate: 'Sep 26, 2009',
	},
	{
		id: 16,
		team1: 'Pakistan',
		team2: 'India',
		winner: 'Pakistan',
		location: 'Karachi',
		margin: '8 wickets',
		matchDate: 'Jun 26, 2008',
	},
	{
		id: 17,
		team1: 'Pakistan',
		team2: 'India',
		winner: 'Pakistan',
		location: 'Karachi',
		margin: '6 wickets',
		matchDate: 'Jun 14, 2008',
	},
	{
		id: 18,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'India',
		location: 'Dhaka',
		margin: '25 runs',
		matchDate: 'Jun 10, 2008',
	},
	{
		id: 19,
		team1: 'India',
		team2: 'Pakistan',
		winner: 'Pakistan',
		location: 'Dhaka',
		margin: '140 runs',
		matchDate: 'Nov 18, 2007',
	},
];

const parentUl=document.querySelector('ul');
for(let i=0; i<cricketGame.length;i++){
	const newLi=document.createElement('li');
	newLi.style.listStyle='none';
	if (cricketGame[i].winner==='Pakistan'){
		const parentUl=document.querySelector('#pak');
		newLi.classList.add('pak-win');
		// newLi.innerText=`Pakistan defeated India at ${cricketGame[i].location} by ${cricketGame[i].margin} On ${cricketGame[i].matchDate}`;
		newLi.innerHTML=`Pakistan defeated India at ${cricketGame[i].location} by <b>${cricketGame[i].margin}</b> On ${cricketGame[i].matchDate}`;
		parentUl.append(newLi);
	}
	else{
		const parentUl=document.querySelector('#ind');
		newLi.classList.add('ind-win')
		// newLi.innerText=`Pakistan loss by India at ${cricketGame[i].location} by ${cricketGame[i].margin} On ${cricketGame[i].matchDate}`;
		newLi.innerHTML=`Pakistan defeated India at ${cricketGame[i].location} by <b>${cricketGame[i].margin}</b> On ${cricketGame[i].matchDate}`;
		parentUl.append(newLi);
	}
	
}