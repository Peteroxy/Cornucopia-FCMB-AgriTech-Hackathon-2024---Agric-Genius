var state_arr = new Array(
	"Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
	"Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", 
	"Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
	"Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
	"Sokoto", "Taraba", "Yobe", "Zamfara"
  );
  
  var s_a = new Array();
  s_a[0]="";
  s_a[1]=" Aba | Umuahia | Ohafia | Arochukwu | Ikwuano | Isiala Ngwa | Ugwunagbo ";
  s_a[2]=" Yola | Mubi | Gombi | Ganye | Maiha | Numan | Michika | Jimeta | Hong | Song ";
  s_a[3]=" Uyo | Ikot Ekpene | Eket | Oron | Abak | Etinan | Itu | Onna | Ibeno ";
  s_a[4]=" Awka | Onitsha | Nnewi | Ekwulobia | Ihiala | Aguata | Obosi ";
  s_a[5]=" Bauchi | Azare | Misau | Darazo | Jama'are | Ningi | Tafawa Balewa | Kirfi ";
  s_a[6]=" Yenagoa | Ogbia | Amassoma | Sagbama | Kaiama | Nembe | Brass ";
  s_a[7]=" Makurdi | Gboko | Otukpo | Katsina-Ala | Okpokwu | Buruku | Oju | Vandeikya ";
  s_a[8]=" Maiduguri | Biu | Bama | Gwoza | Ngala | Dikwa | Damboa ";
  s_a[9]=" Calabar | Ogoja | Ikom | Obudu | Ugep | Obubra | Akamkpa ";
  s_a[10]=" Asaba | Warri | Ughelli | Sapele | Agbor | Kwale | Ozoro | Abraka ";
  s_a[11]=" Abakaliki | Afikpo | Onicha | Ishielu | Ivo | Ohaozara ";
  s_a[12]=" Benin City | Auchi | Uromi | Ekpoma | Igarra | Irrua | Sabongida-Ora ";
  s_a[13]=" Ado Ekiti | Ikere Ekiti | Ijero Ekiti | Omuo Ekiti | Ikole Ekiti ";
  s_a[14]=" Enugu | Nsukka | Agbani | Udi | Oji River | Awgu ";
  s_a[15]=" Gombe | Kaltungo | Dukku | Billiri | Balanga | Deba ";
  s_a[16]=" Owerri | Orlu | Okigwe | Oguta | Mbaise ";
  s_a[17]=" Dutse | Gumel | Hadejia | Ringim | Kazaure ";
  s_a[18]=" Kaduna | Zaria | Kafanchan | Saminaka | Birnin Gwari | Giwa ";
  s_a[19]=" Kano | Wudil | Gwarzo | Rano | Tudun Wada | Bebeji | Dambatta ";
  s_a[20]=" Katsina | Daura | Funtua | Malumfashi | Dutsin-Ma ";
  s_a[21]=" Birnin Kebbi | Argungu | Yauri | Zuru ";
  s_a[22]=" Lokoja | Kabba | Okene | Idah | Ajaokuta | Ankpa ";
  s_a[23]=" Ilorin | Offa | Omu-Aran | Lafiagi | Patigi | Kaiama ";
  s_a[24]=" Lagos | Ikeja | Ikorodu | Epe | Badagry | Lekki ";
  s_a[25]=" Lafia | Akwanga | Keffi | Nasarawa | Karu | Doma ";
  s_a[26]=" Minna | Bida | Kontagora | Suleja | Agaie ";
  s_a[27]=" Abeokuta | Ijebu Ode | Sagamu | Ilaro | Ota ";
  s_a[28]=" Akure | Ondo Town | Owo | Ikare | Okitipupa | Igbokoda ";
  s_a[29]=" Osogbo | Ife | Ilesa | Iwo | Ede | Ejigbo ";
  s_a[30]=" Ibadan | Oyo | Ogbomoso | Iseyin | Saki | Igboho ";
  s_a[31]=" Jos | Barkin Ladi | Bokkos | Shendam | Langtang ";
  s_a[32]=" Port Harcourt | Bonny | Degema | Ahoada | Omoku ";
  s_a[33]=" Sokoto | Tambuwal | Gwadabawa | Gada | Bodinga ";
  s_a[34]=" Jalingo | Wukari | Sardauna | Gashaka | Takum ";
  s_a[35]=" Damaturu | Potiskum | Gashua | Geidam | Nguru ";
  s_a[36]=" Gusau | Kaura Namoda | Maru | Talata Mafara | Gummi ";
  

function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}
