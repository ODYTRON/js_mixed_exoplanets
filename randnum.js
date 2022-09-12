// array with all possible hex code digits
const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B","C","D","E","F"];
// array with 400 plus exoplanets
const exoplanets = ['Kepler-431 c','Kepler-431 d','K2-340 b','Kepler-131 b','Kepler-131 c','Kepler-548 b','HD 114729 A b','HD 208897 b','CoRoT-24 b','CoRoT-24 c','Kepler-1105 b','Kepler-211 c','Kepler-211 b','HD 10975 b','Kepler-294 c','Kepler-294 b','HD 164595 b','HIP 75092 b','Kepler-257 c','Kepler-257 b','Kepler-257 d','Kepler-1711 b','Kepler-214 c','Kepler-214 b','Kepler-1112 b','Kepler-130 c','Kepler-130 b','Kepler-130 d','WASP-108 b','K2-34 b','TOI-2497 b','Kepler-815 b','Kepler-1145 b','38 Vir b','Kepler-1575 b','HAT-P-70 b','NGTS-17 b','HD 332231 b','Kepler-1380 b','TOI-1107 b','GJ 625 b','Kepler-189 c','Kepler-189 b','K2-339 b','K2-401 b','TOI-1062 b','TOI-1062 c','WISE J2216+1952','Kepler-327 b','Kepler-327 d','Kepler-327 c','Kepler-1071 b','Kepler-101 b','Kepler-101 c','Kepler-156 c','Kepler-156 b','K2-347 b','K2-216 b','HIP 11952 b','HIP 11952 c','HD 122430 b','Kepler-827 b','Kepler-344 b','Kepler-344 c','Kepler-859 b','Kepler-227 b','Kepler-227 c','Kepler-843 b','OGLE-2017-BLG-1434L b','Kepler-404 b','Kepler-404 c','Kepler-1483 b','Gliese 86 b','HD 211810 b','K2-212 b','Kepler-1314 b','K2-387 b','K2-349 b','Kepler-1099 b','HD 145377 b','HD 75289 A b','HD 5608 b','HATS-28 b','Kepler-1187 b','HD 68988 b','HD 68988 c','Kepler-1612 b','HD 87646 b','HD 183263 b','HD 183263 c','MOA-2011-BLG-291L b','TOI-2154 b','HD 154672 b','K2-200 b','Kepler-761 b','Kepler-1687 b','Kepler-1417 b','Kepler-196 b','Kepler-196 c','Kepler-695 b','beta Ursae Minoris b','Kepler-225 c','Kepler-225 b','Kepler-409 b','OGLE-TR-10 b','Kepler-128 b','Kepler-128 c','WASP-11 b','K2-368 b','K2-368 c','K2-368 d','Kepler-834 b','HATS-18 b','HD 27969 b','TOI-1266 b','TOI-1266 c','Kepler-654 b','KELT-16 b','TOI-1272 b','TOI-1272 c','Kepler-603 b','Kepler-603 c','Kepler-603 d','Kepler-579 b','TOI-1246 b','TOI-1246 c','TOI-1246 d','TOI-1246 e','HD 106315 b','HD 106315 c','K2-84 b','K2-84 c','Kepler-1049 b','EPIC 206011691 b','EPIC 206011691 c','TOI-1807 b','Kepler-794 b','Kepler-756 b','Kepler-784 b','WASP-62 b','K2-271 b','Kepler-150 c','Kepler-150 d','Kepler-150 e','Kepler-150 b','Kepler-663 b','WASP-14 b','Kepler-708 b','HD 2952 b','WASP-127 b','Kepler-699 b','TOI-1601 b','Kepler-791 b','Kepler-173 c','Kepler-173 b','Kepler-611 b','KOI-1299 b','KOI-1299 c','Kepler-34 (AB) b','Rho Coronae Borealis b','Rho Coronae Borealis c','BD+03 2562 b','Kepler-260 b','Kepler-260 c','Kepler-906 b','HIP 97166 b','HIP 97166 c','KELT-10 b','Kepler-1677 b','Gliese 3634 b','Kepler-504 b','HD 156279 b','HD 156279 c','OGLE-2016-BLG-1093L b','K2-118 b','Kepler-864 b','Kepler-247 c','Kepler-247 d','Kepler-247 b','HD 113996 b','Kepler-942 b','Kepler-166 b','Kepler-166 c','Kepler-166 d','EPIC 211901114 b','K2-70 b','Kepler-819 b','OGLE-2016-BLG-1190L b','Kepler-554 b','TOI-2081 b','Kepler-8 b','OGLE-2017-BLG-0373L b','HAT-P-56 b','Kepler-266 b','Kepler-266 c','HATS-64 b','Kepler-920 b','Kepler-920 c','TOI-561 b','TOI-561 c','TOI-561 d','TOI-561 e','TOI-561 f','Kepler-890 b','HD 12661 b','HD 12661 c','K2-240 c','K2-240 b','Kepler-213 b','Kepler-213 c','KOI-1783 c','KOI-1783 b','HD 128311 b','HD 128311 c','WASP-49 b','Kepler-44 b','K2-371 b','HD 72892 b','Kepler-1043 b','Kepler-1306 b','Kepler-821 b','WASP-138 b','K2-354 b','GJ 9066 b','GJ 9066 c','Kepler-242 b','Kepler-242 c','LTT 3780 b','LTT 3780 c','TYC 0434-04538-1 b','Kepler-518 b','Kepler-1069 b','Kepler-1475 b','Kepler-706 b','HD 183579 b','Kepler-170 b','Kepler-170 c','Kepler-1065 b','Kepler-1065 c','HD 175167 b','Kepler-725 b','Kepler-1394 b','Kepler-795 b','GJ 338 B b','Kepler-94 b','Kepler-94 c','TYC 3667-1280-1 b','Kepler-1329 b','OGLE-2018-BLG-0506 b','K2-184 b','HD 202206 b','HD 202206 c','Kepler-918 b','Kepler-1326 b','Kepler-924 b','OGLE-2011-BLG-251L b','Kepler-1255 b','EPIC 211990866 b','EPIC 201828749 b','HD 131664 b','Kepler-728 b','WASP-92 b','OGLE-2015-BLG-0954L b','Kepler-968 c','Kepler-968 b','Kepler-968 d','Kepler-1085 b','Kepler-1085 c','HAT-P-47 b','Kepler-709 b','Kepler-1639 b','Kepler-1256 b','Kepler-977 b','Kepler-951 b','TOI-125 b','TOI-125 c','TOI-125 d','CoRoT-21 b','KIC 6185331 b','EPIC 211945201 b','Kepler-395 c','Kepler-395 b','HD 9174 b','Kepler-805 b','CoRoT-31 b','GJ 251 b','EPIC 201855371 b','GJ 317 b','GJ 317 c','HATS-56 b','HD 66428 b','HD 66428 c','Kepler-626 b','WASP-189 b','K2-91 b','WASP-33 b','K2-47 b','2M 1252+2735 b','Kepler-1037 b','Gliese 3293 b','Gliese 3293 d','Gliese 3293 c','Kepler-568 b','Kepler-91 b','Kepler-91 b Trojan','Kepler-1346 b','HD 27631 b','HATS-66 b','CHXR 73 b','PSR J1311-3430 b','KMT-2017-BLG-1038L b','TOI-451 b','TOI-451 c','TOI-451 d','MASCARA-1 b','EPIC 201403446 b','2MASS J01033563-5515561 A b','Kepler-277 b','Kepler-277 c','TOI-776 b','TOI-776 c','Kepler-1273 b','Kepler-1686 b','Kepler-58 b','Kepler-58 c','Kepler-58 d','Ross 508 b','Kepler-1166 b','OGLE-2012-BLG-0950L b','HD 12484 b','Kepler-245 b','Kepler-245 d','Kepler-245 c','Kepler-245 e','Kepler-1073 b','Kepler-1073 c','Kepler-559 b','TOI-1696 b','HD 35759 b','Kepler-782 b','Kepler-1629 b','Kepler-1016 b','Kepler-1016 c','HATS-49 b','NY Vir b','NY Vir c','HD 219077 b','HW Vir (AB) b','WASP-13 b','HD 215152 b','HD 215152 c','HD 215152 d','HD 215152 e','18 Del b','MOA 2008-BLG-310L b','Kepler-1748 b','Kepler-210 c','Kepler-210 b','HD 210702 b','Kepler-1110 b','K2-348 b','K2-348 c','HD 165155 b','HD 210277 b','LHS 3844 b','WASP-135 b','HIP 67537 b','Kepler-532 b','Kepler-1390 b','OGLE-2018-BLG-0567L b','GJ 15 A b','GJ 15 A c','HD 330075 b','Kepler-891 b','Kepler-1930 b','Kepler-1402 b','Kepler-1182 b','HAT-P-55 b','K2-156 b','Kepler-45 b','Kepler-1490 b','WASP-121 b','Kepler-25 b','Kepler-25 c','Kepler-25 d','WASP-151 b','KMT-2018-BLG-1996L b','TOI-628 b','WASP-70 A b','HD 102956 b','HD 148284 b','HD 23472 b','HD 23472 c','WTS-1 b','BD+49 828 b','HD 66141 b','CoRoT-2 b','XO-7 b','HD 76920 b','HD 176051 b','Kepler-894 b','Kepler-295 b','Kepler-295 c','Kepler-295 d','XO-5 b','K2-74 b','KMT-2021-BLG-0171L b','Kepler-1650 b','WASP-147 b','Kepler-1093 b','Kepler-1093 c','2MASS J0030-1450','HATS-71 b','HD 213472 b','KMT-2018-BLG-2718 b','Gl 686 b','Kepler-1632 b','Kepler-1407 b','2MASS 0122-2439 B','Kepler-229 c'];
// first digit of the hex color
const firstDigit = "#";
// function to get a random digit from the hexDigits
const randomHex = () => {
  return hexDigits[Math.floor(Math.random() * 16)];
};
   

// function to get the first hex color
const getColorOne = () => {
  const firstColor = [];
   firstColor[0] = firstDigit;
   for (let i=1; i<7; i++) {
      firstColor.push(randomHex());
  }
  return firstColor;
  
};
// function to get the second hex color
const getColorTwo = () => {
  const SecondColor = [];
   SecondColor[0] = firstDigit;
   for (let j=1; j<7; j++) {
      SecondColor.push(randomHex());
  }
  
  return SecondColor;
};

// function to compare two hex colors and calculate the final result
const getFinalColor = () => {
    var apotelesma1 = getColorOne();
    var apotelesma2 = getColorTwo();
  // check point to compare the two hex nums, uncomment the next two lines
  // console.log(apotelesma1);
  // console.log(apotelesma2);
    
    for (x=1; x<apotelesma1.length; x++) {
     
        if (apotelesma1[x] != apotelesma2[x]) {
          apotelesma1[x] = randomHex();
        }
    
    }
    return apotelesma1;
  };

  // function to get a random exoplanet
const randomExoplanet = () => {
    return exoplanets[Math.floor(Math.random() * exoplanets.length)];
  };

  // function to compare the two inserted ages and return the lucky number
const birthdateLucky = (age1, age2) => {
    const finalage = age1 + age2;
    const randomnumber = Math.floor(Math.random() * 1000);
    const luckynumber = Math.floor(randomnumber / finalage);
    return luckynumber;
  };
  
  
  