// Single source of truth for all workers. Add a worker here and every page updates.
const SERVICES = { plumbing:'Plumbing', electrical:'Electrical', carpentry:'Carpentry', cleaning:'Cleaning' };
const WORKERS = [
 {id:1,name:'Suresh Kumar',service:'plumbing',years:5,jobs:36,rating:4.8,rate:300,available:true,skills:['Tap Repair','Pipe Fitting','Leakage Fixing','Water Tank Installation'],about:'Suresh handles tap repair, pipe fitting and leakage issues, and also installs water tanks and connections.'},
 {id:2,name:'Mahesh Yadav',service:'plumbing',years:3,jobs:22,rating:4.5,rate:250,available:false,skills:['Bathroom Fitting','Drain Cleaning','Motor Repair'],about:'Mahesh specialises in bathroom fittings, drain cleaning and water motor repair.'},
 {id:3,name:'Ramesh Sharma',service:'electrical',years:6,jobs:48,rating:4.9,rate:350,available:true,skills:['Wiring','Switchboards','Fan Installation','Appliance Repair'],about:'Ramesh has 6 years of experience in home electrical work, from wiring and switchboards to fan and appliance installation.'},
 {id:4,name:'Deepak Singh',service:'electrical',years:4,jobs:30,rating:4.6,rate:300,available:true,skills:['Inverter Setup','Light Fitting','MCB Repair'],about:'Deepak installs inverters and lights and fixes MCB and short-circuit problems.'},
 {id:5,name:'Anil Verma',service:'carpentry',years:8,jobs:52,rating:4.9,rate:400,available:true,skills:['Furniture Repair','Door Fitting','Cupboard Installation','Wood Polishing'],about:'Anil has 8 years of carpentry experience: furniture repair, door fitting and custom cupboards.'},
 {id:6,name:'Rakesh Pal',service:'carpentry',years:5,jobs:27,rating:4.4,rate:350,available:false,skills:['Modular Kitchen','Bed Repair','Window Frames'],about:'Rakesh builds and repairs kitchens, beds and window frames.'},
 {id:7,name:'Sunita Devi',service:'cleaning',years:4,jobs:41,rating:4.8,rate:250,available:true,skills:['Deep Cleaning','Kitchen Cleaning','Bathroom Sanitising','Sofa Cleaning'],about:'Sunita provides deep cleaning for kitchens, bathrooms and living areas.'},
 {id:8,name:'Pooja Rani',service:'cleaning',years:2,jobs:15,rating:4.3,rate:200,available:true,skills:['Floor Polishing','Window Cleaning','Move-in Cleaning'],about:'Pooja handles floor polishing, window cleaning and move-in cleaning.'}
];
const initials = n => n.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
const stars = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5-Math.round(r));
