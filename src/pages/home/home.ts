import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalculatorPage } from '../calculator/calculator'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public states: any[];
  public cities: any[];

  public selectedCities: any[];

  public sState: any;
  public sCity: any;


  constructor(public navCtrl: NavController) {
    this.initializeState();
    this.initializeCity();
  }
  initializeState() {
  this.states = [
    {id: 1, name: 'Andra Pradesh'},
    {id: 2, name: 'Arunachal Pradesh'},
    {id: 3, name: 'Assam'},
    {id: 4, name: 'Bihar'},
    {id: 5, name: 'Chattisgarh'},
    {id: 6, name: 'Goa'},
    {id: 7, name: 'Gujarat'},
    {id: 8, name: 'Haryana'},
    {id: 9, name: 'Himachal Pradesh'},
    {id: 10, name: 'Jammu and Kashmir'},
    {id: 11, name: 'Jharkhand'},
    {id: 12, name: 'Karnataka'},
    {id: 13, name: 'Kerala'},
    {id: 14, name: 'Madya Pradesh'},
    {id: 15, name: 'Maharashtra'},
    {id: 16, name: 'Manipur'},
    {id: 17, name: 'Meghalaya'},
    {id: 18, name: 'Mizoram'},
    {id: 19, name: 'Nagaland'},
    {id: 20, name: 'Orissa'},
    {id: 21, name: 'Punjab'},
    {id: 22, name: 'Rajasthan'},
    {id: 23, name: 'Sikkim'},
    {id: 24, name: 'Tamil Nadu'},
    {id: 25, name: 'Telagana'},
    {id: 26, name: 'Tripura'},
    {id: 27, name: 'Uttarakhand'},
    {id: 28, name: 'Uttar Pradesh'},
    {id: 29, name: 'West Bengal'},
    {id: 30, name: 'Delhi'},
    {id: 31, name: 'Chandigarh'},
    {id: 32, name: 'Puducherry'}
  ];
  }

  initializeCity(){
  this.cities = [
    {id: 1, name: 'Delhi', state_id: 29},
    {id: 2, name: 'Chandigarh', state_id: 30},

    {id: 3, name: 'Hyderabad', state_id: 1},
    {id: 4, name: 'Visakhapatnam', state_id: 1},
    {id: 5, name: 'Vijayawada', state_id: 1},
    {id: 6, name: 'Guntur', state_id: 1},
    {id: 7, name: 'Nellore', state_id: 1},
    {id: 8, name: 'Tirupati', state_id: 1},

    {id: 9, name: 'Itanagar', state_id: 2},
    {id: 10, name: 'Tawang', state_id: 2},
    {id: 11, name: 'Bhismaknagar', state_id: 2},
    {id: 12, name: 'Pasighat', state_id: 2},
    {id: 13, name: 'Ziro', state_id: 2},
    {id: 14, name: 'Bomdila', state_id: 2},

    {id: 15, name: 'Dispur', state_id: 3},
    {id: 16, name: 'Guwahati', state_id: 3},
    {id: 17, name: 'Tezpur', state_id: 3},
    {id: 18, name: 'Dibrugarh', state_id: 3},
    {id: 19, name: 'Silchar', state_id: 3},

    {id: 20, name: 'Patna', state_id: 4},
    {id: 21, name: 'Gaya', state_id: 4},
    {id: 22, name: 'Biharsharif', state_id: 4},
    {id: 23, name: 'Darbhanga', state_id: 4},
    {id: 24, name: ' Bhagalpur', state_id: 4},

    {id: 25, name: 'Raipur', state_id: 5},
    {id: 26, name: 'Bilaspur,', state_id: 5},
    {id: 27, name: 'Korba', state_id: 5},
    {id: 28, name: 'Durg-Bhilainagar', state_id: 5},
    {id: 29, name: 'Raigarh', state_id: 5},
    {id: 30, name: 'Rajnandgaon', state_id: 5},

    {id: 31, name: 'Panaji', state_id: 6},
    {id: 32, name: 'Vasco-da-Gama', state_id: 6},
    {id: 33, name: 'Ponda', state_id: 6},
    {id: 34, name: 'Margao', state_id: 6},
    {id: 35, name: 'Mapusa', state_id: 6},
    {id: 36, name: 'Goa Velha', state_id: 6},

    {id: 37, name: 'Gandhinagar', state_id: 7},
    {id: 38, name: 'Ahmedabad', state_id: 7},
    {id: 39, name: 'Surat', state_id: 7},
    {id: 40, name: 'Rajkot', state_id: 7},
    {id: 41, name: 'Junagadh', state_id: 7},
    {id: 42, name: 'Vadodara', state_id: 7},

    {id: 43, name: 'Faridabad', state_id: 8},
    {id: 44, name: 'Gurgaon', state_id: 8},
    {id: 45, name: 'Sonipat', state_id: 8},
    {id: 46, name: 'Panipat', state_id: 8},
    {id: 47, name: 'Ambala', state_id: 8},

    {id: 48, name: 'Shimla', state_id: 9},
    {id: 49, name: 'Dharamshala', state_id: 9},
    {id: 50, name: 'Mandi', state_id: 9},
    {id: 51, name: 'Solan', state_id: 9},
    {id: 52, name: 'Bilaspur', state_id: 9},
    {id: 53, name: 'Chamba', state_id: 9},

    {id: 54, name: 'Jammu', state_id: 10},
    {id: 55, name: 'Srinagar', state_id: 10},
    {id: 56, name: 'Anantnag', state_id: 10},
    {id: 57, name: 'Leh', state_id: 10},
    {id: 58, name: 'Udhampur', state_id: 10},
    {id: 59, name: 'Ramnagar', state_id: 10},
    {id: 60, name: 'Baramulla', state_id: 10},

    {id: 61, name: 'Ranchi', state_id: 11},
    {id: 62, name: 'Bokaro Steel City', state_id: 11},
    {id: 63, name: 'Jamshedpur', state_id: 11},
    {id: 64, name: 'Deoghar', state_id: 11},
    {id: 65, name: 'Hazaribagh', state_id: 11},
    {id: 66, name: 'Dhanbad', state_id: 11},

    {id: 67, name: 'Bengaluru', state_id: 12},
    {id: 68, name: 'Mysore', state_id: 12},
    {id: 69, name: 'Davangere', state_id: 12},
    {id: 70, name: 'Mangalore', state_id: 12},
    {id: 71, name: 'Hubli-Dharwad', state_id: 12},
    {id: 72, name: 'Belgaum', state_id: 12},

    {id: 73, name: 'Thiruvananthapuram', state_id: 13},
    {id: 74, name: 'Kochi', state_id: 13},
    {id: 75, name: 'Kozhikode', state_id: 13},
    {id: 76, name: 'Thrissur', state_id: 13},
    {id: 77, name: 'Malappuram', state_id: 13},

    {id: 78, name: 'Bhopal', state_id: 14},
    {id: 79, name: 'Indore', state_id: 14},
    {id: 80, name: 'Gwalior', state_id: 14},
    {id: 81, name: 'Jabalpur', state_id: 14},
    {id: 82, name: 'Ujjain', state_id: 14},
    {id: 83, name: 'Sagar', state_id: 14},

    {id: 84, name: 'Mumbai', state_id: 15},
    {id: 85, name: 'Pune', state_id: 15},
    {id: 86, name: 'Nagpur', state_id: 15},
    {id: 87, name: 'Nashik', state_id: 15},
    {id: 88, name: 'Aurangabad', state_id: 15},
    {id: 89, name: 'Solapur', state_id: 15},

    {id: 90, name: 'Imphal', state_id: 16},
    {id: 91, name: 'Bishnupur', state_id: 16},
    {id: 92, name: 'Ukhrul', state_id: 16},
    {id: 93, name: 'Tamenglong', state_id: 16},
    {id: 94, name: 'Chandel', state_id: 16},
    {id: 95, name: 'Senapati', state_id: 16},

    {id: 96, name: 'Shillong', state_id: 17},
    {id: 97, name: 'Cherrapunji', state_id: 17},
    {id: 98, name: 'Tura', state_id: 17},
    {id: 99, name: 'Jowai', state_id: 17},
    {id: 100, name: 'Baghmara', state_id: 17},
    {id: 101, name: 'Nongpoh', state_id: 17},

    {id: 102, name: 'Aizawl', state_id: 18},
    {id: 103, name: 'Lunglei', state_id: 18},
    {id: 104, name: 'Serchhip', state_id: 18},
    {id: 105, name: 'Champhai', state_id: 18},
    {id: 106, name: 'Tuipang', state_id: 18},
    {id: 107, name: 'Mamit', state_id: 18},

    {id: 108, name: 'Kohima', state_id: 19},
    {id: 109, name: 'Tuensang', state_id: 19},
    {id: 110, name: 'Zunheboto', state_id: 19},
    {id: 111, name: 'Mokokchung', state_id: 19},
    {id: 112, name: 'Kiphire Sadar', state_id: 19},
    {id: 113, name: 'Phek', state_id: 19},

    {id: 108, name: 'Kohima', state_id: 19},
    {id: 109, name: 'Tuensang', state_id: 19},
    {id: 110, name: 'Zunheboto', state_id: 19},
    {id: 111, name: 'Mokokchung', state_id: 19},
    {id: 112, name: 'Kiphire Sadar', state_id: 19},
    {id: 113, name: 'Phek', state_id: 19},

    {id: 114, name: 'Bhubaneswar', state_id: 20},
    {id: 115, name: 'Rourkela', state_id: 20},
    {id: 116, name: 'Cuttack', state_id: 20},
    {id: 117, name: 'Brahmapur', state_id: 20},
    {id: 118, name: 'Puri', state_id: 20},
    {id: 119, name: 'Sambalpur', state_id: 20},

    {id: 120, name: 'Amritsar', state_id: 21},
    {id: 121, name: 'Jalandhar', state_id: 21},
    {id: 122, name: 'Ludhiana', state_id: 21},
    {id: 123, name: 'Patiala', state_id: 21},
    {id: 124, name: 'Kapurthala', state_id: 21},

    {id: 125, name: 'Jaipur', state_id: 22},
    {id: 126, name: 'Bikaner', state_id: 22},
    {id: 127, name: 'Jaisalmer', state_id: 22},
    {id: 128, name: 'Jodhpur', state_id: 22},
    {id: 129, name: 'Udaipur', state_id: 22},
    {id: 130, name: 'Ajmer', state_id: 22},

    {id: 131, name: 'Gangtok', state_id: 23},
    {id: 132, name: 'Namchi', state_id: 23},
    {id: 133, name: 'Gyalshing', state_id: 23},
    {id: 134, name: 'Mangan', state_id: 23},
    {id: 135, name: 'Rabdentse', state_id: 23},

    {id: 136, name: 'Chennai', state_id: 24},
    {id: 137, name: 'Tiruchirappalli', state_id: 24},
    {id: 138, name: 'Madurai', state_id: 24},
    {id: 139, name: 'Erode', state_id: 24},
    {id: 140, name: 'Vellore', state_id: 24},
    {id: 141, name: 'Coimbatore', state_id: 24},

    {id: 142, name: 'Hyderabad', state_id: 25},
    {id: 143, name: 'Warangal', state_id: 25},
    {id: 144, name: 'Nizamabad', state_id: 25},
    {id: 145, name: 'Karimnagar', state_id: 25},
    {id: 146, name: 'Adilabad', state_id: 25},
    {id: 147, name: 'Khammam', state_id: 25},

    {id: 148, name: 'Agartala', state_id: 26},
    {id: 149, name: 'Amarpur', state_id: 26},
    {id: 150, name: 'Kumarghat', state_id: 26},
    {id: 151, name: 'Udaipur', state_id: 26},
    {id: 152, name: 'Gakulnagar', state_id: 26},
    {id: 153, name: 'Kunjaban', state_id: 26},

    {id: 154, name: 'Lucknow', state_id: 28},
    {id: 155, name: 'Noida', state_id: 28},
    {id: 156, name: 'Varanasi', state_id: 28},
    {id: 157, name: 'Allahabad', state_id: 28},
    {id: 158, name: 'Agra', state_id: 28},
    {id: 159, name: 'Kanpur', state_id: 28},

    {id: 154, name: 'Lucknow', state_id: 28},
    {id: 155, name: 'Noida', state_id: 28},
    {id: 156, name: 'Varanasi', state_id: 28},
    {id: 157, name: 'Allahabad', state_id: 28},
    {id: 158, name: 'Agra', state_id: 28},
    {id: 159, name: 'Kanpur', state_id: 28},

    {id: 160, name: 'Dehradun', state_id: 27},
    {id: 161, name: 'Haridwar', state_id: 27},
    {id: 162, name: 'Roorkee', state_id: 27},
    {id: 163, name: 'Rishikesh', state_id: 27},
    {id: 164, name: 'Kashipur', state_id: 27},
    {id: 165, name: 'Haldwani', state_id: 27},

    {id: 166, name: 'Kolkata', state_id: 29},
    {id: 167, name: 'Darjeeling', state_id: 29},
    {id: 168, name: 'Siliguri', state_id: 29},
    {id: 169, name: 'Asansol', state_id: 29},
    {id: 170, name: 'Howrah', state_id: 29},
    {id: 171, name: 'Durgapur', state_id: 29},

    {id: 172, name: 'Puducherry', state_id: 32}
  ];
}
setCityValues(sState) {
    this.selectedCities = this.cities.filter(city => city.state_id == sState.id)
}

goTo(sarea,area,mencount,womencount,concount) {
  this.navCtrl.push(CalculatorPage,
  { data1: sarea,
    data2: area,
    data3: mencount,
    data4: womencount,
    data5: concount,
  });
}



}
