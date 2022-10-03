import { keyframes } from "styled-components";

export const m = keyframes`
  0% {
    background-position:
      -200% 100%,-100% 100%,  0% 100%,100% 100%,
      0% 100%, 100% 100%,200% 100%,300% 100%
  }
  100%{
    background-position:   
      0% 100%, 100% 100%,200% 100%,300% 100%,
      -200% 100%,-100% 100%,  0% 100%,100% 100%
  }
`;

export const s = keyframes`
  0% {
    background-size: 50.1% 5%, 50.1% 5%, 50.1% 5%, 50.1% 5%, 50.1% 30%,
      50.1% 30%, 50.1% 30%, 50.1% 30%;
  }

  33% {
    background-size: 50.1% 80%, 50.1% 80%, 50.1% 80%, 50.1% 80%,
      50.1% 130%, 50.1% 130%, 50.1% 130%, 50.1% 130%;
  }

  66% {
    background-size: 50.1% 30%, 50.1% 30%, 50.1% 30%, 50.1% 30%, 50.1% 70%,
      50.1% 70%, 50.1% 70%, 50.1% 70%;
  }

  100% {
    background-size: 50.1% 120%, 50.1% 120%, 50.1% 120%, 50.1% 120%,
      50.1% 180%, 50.1% 180%, 50.1% 180%, 50.1% 180%;
  }
`;

export const hours = keyframes`
  0.00000% {
    --hours: "00";
  }

  2.08333% {
    --hours: "00";
  }

  6.25000% {
    --hours: "01";
  }

  10.41667% {
    --hours: "02";
  }

  14.58333% {
    --hours: "03";
  }

  18.75000% {
    --hours: "04";
  }

  22.91667% {
    --hours: "05";
  }

  27.08333% {
    --hours: "06";
  }

  31.25000% {
    --hours: "07";
  }

  35.41667% {
    --hours: "08";
  }

  39.58333% {
    --hours: "09";
  }

  43.75000% {
    --hours: "10";
  }

  47.91667% {
    --hours: "11";
  }

  52.08333% {
    --hours: "12";
  }

  56.25000% {
    --hours: "13";
  }

  60.41667% {
    --hours: "14";
  }

  64.58333% {
    --hours: "15";
  }

  68.75000% {
    --hours: "16";
  }

  72.91667% {
    --hours: "17";
  }

  77.08333% {
    --hours: "18";
  }

  81.25000% {
    --hours: "19";
  }

  85.41667% {
    --hours: "20";
  }

  89.58333% {
    --hours: "21";
  }

  93.75000% {
    --hours: "22";
  }

  97.91667% {
    --hours: "23";
  }

  100% {
    --hours: "0";
  }
`;

export const minutes = keyframes`
  0.00000% {
    --minutes: "00";
  }

  0.83333% {
    --minutes: "00";
  }

  2.50000% {
    --minutes: "01";
  }

  4.16667% {
    --minutes: "02";
  }

  5.83333% {
    --minutes: "03";
  }

  7.50000% {
    --minutes: "04";
  }

  9.16667% {
    --minutes: "05";
  }

  10.83333% {
    --minutes: "06";
  }

  12.50000% {
    --minutes: "07";
  }

  14.16667% {
    --minutes: "08";
  }

  15.83333% {
    --minutes: "09";
  }

  17.50000% {
    --minutes: "10";
  }

  19.16667% {
    --minutes: "11";
  }

  20.83333% {
    --minutes: "12";
  }

  22.50000% {
    --minutes: "13";
  }

  24.16667% {
    --minutes: "14";
  }

  25.83333% {
    --minutes: "15";
  }

  27.50000% {
    --minutes: "16";
  }

  29.16667% {
    --minutes: "17";
  }

  30.83333% {
    --minutes: "18";
  }

  32.50000% {
    --minutes: "19";
  }

  34.16667% {
    --minutes: "20";
  }

  35.83333% {
    --minutes: "21";
  }

  37.50000% {
    --minutes: "22";
  }

  39.16667% {
    --minutes: "23";
  }

  40.83333% {
    --minutes: "24";
  }

  42.50000% {
    --minutes: "25";
  }

  44.16667% {
    --minutes: "26";
  }

  45.83333% {
    --minutes: "27";
  }

  47.50000% {
    --minutes: "28";
  }

  49.16667% {
    --minutes: "29";
  }

  50.83333% {
    --minutes: "30";
  }

  52.50000% {
    --minutes: "31";
  }

  54.16667% {
    --minutes: "32";
  }

  55.83333% {
    --minutes: "33";
  }

  57.50000% {
    --minutes: "34";
  }

  59.16667% {
    --minutes: "35";
  }

  60.83333% {
    --minutes: "36";
  }

  62.50000% {
    --minutes: "37";
  }

  64.16667% {
    --minutes: "38";
  }

  65.83333% {
    --minutes: "39";
  }

  67.50000% {
    --minutes: "40";
  }

  69.16667% {
    --minutes: "41";
  }

  70.83333% {
    --minutes: "42";
  }

  72.50000% {
    --minutes: "43";
  }

  74.16667% {
    --minutes: "44";
  }

  75.83333% {
    --minutes: "45";
  }

  77.50000% {
    --minutes: "46";
  }

  79.16667% {
    --minutes: "47";
  }

  80.83333% {
    --minutes: "48";
  }

  82.50000% {
    --minutes: "49";
  }

  84.16667% {
    --minutes: "50";
  }

  85.83333% {
    --minutes: "51";
  }

  87.50000% {
    --minutes: "52";
  }

  89.16667% {
    --minutes: "53";
  }

  90.83333% {
    --minutes: "54";
  }

  92.50000% {
    --minutes: "55";
  }

  94.16667% {
    --minutes: "56";
  }

  95.83333% {
    --minutes: "57";
  }

  97.50000% {
    --minutes: "58";
  }

  99.16667% {
    --minutes: "59";
  }

  100% {
    --minutes: "0";
  }
`;

export const seconds = keyframes`
  0.00000% {
    --seconds: "00";
  }

  0.83333% {
    --seconds: "00";
  }

  2.50000% {
    --seconds: "01";
  }

  4.16667% {
    --seconds: "02";
  }

  5.83333% {
    --seconds: "03";
  }

  7.50000% {
    --seconds: "04";
  }

  9.16667% {
    --seconds: "05";
  }

  10.83333% {
    --seconds: "06";
  }

  12.50000% {
    --seconds: "07";
  }

  14.16667% {
    --seconds: "08";
  }

  15.83333% {
    --seconds: "09";
  }

  17.50000% {
    --seconds: "10";
  }

  19.16667% {
    --seconds: "11";
  }

  20.83333% {
    --seconds: "12";
  }

  22.50000% {
    --seconds: "13";
  }

  24.16667% {
    --seconds: "14";
  }

  25.83333% {
    --seconds: "15";
  }

  27.50000% {
    --seconds: "16";
  }

  29.16667% {
    --seconds: "17";
  }

  30.83333% {
    --seconds: "18";
  }

  32.50000% {
    --seconds: "19";
  }

  34.16667% {
    --seconds: "20";
  }

  35.83333% {
    --seconds: "21";
  }

  37.50000% {
    --seconds: "22";
  }

  39.16667% {
    --seconds: "23";
  }

  40.83333% {
    --seconds: "24";
  }

  42.50000% {
    --seconds: "25";
  }

  44.16667% {
    --seconds: "26";
  }

  45.83333% {
    --seconds: "27";
  }

  47.50000% {
    --seconds: "28";
  }

  49.16667% {
    --seconds: "29";
  }

  50.83333% {
    --seconds: "30";
  }

  52.50000% {
    --seconds: "31";
  }

  54.16667% {
    --seconds: "32";
  }

  55.83333% {
    --seconds: "33";
  }

  57.50000% {
    --seconds: "34";
  }

  59.16667% {
    --seconds: "35";
  }

  60.83333% {
    --seconds: "36";
  }

  62.50000% {
    --seconds: "37";
  }

  64.16667% {
    --seconds: "38";
  }

  65.83333% {
    --seconds: "39";
  }

  67.50000% {
    --seconds: "40";
  }

  69.16667% {
    --seconds: "41";
  }

  70.83333% {
    --seconds: "42";
  }

  72.50000% {
    --seconds: "43";
  }

  74.16667% {
    --seconds: "44";
  }

  75.83333% {
    --seconds: "45";
  }

  77.50000% {
    --seconds: "46";
  }

  79.16667% {
    --seconds: "47";
  }

  80.83333% {
    --seconds: "48";
  }

  82.50000% {
    --seconds: "49";
  }

  84.16667% {
    --seconds: "50";
  }

  85.83333% {
    --seconds: "51";
  }

  87.50000% {
    --seconds: "52";
  }

  89.16667% {
    --seconds: "53";
  }

  90.83333% {
    --seconds: "54";
  }

  92.50000% {
    --seconds: "55";
  }

  94.16667% {
    --seconds: "56";
  }

  95.83333% {
    --seconds: "57";
  }

  97.50000% {
    --seconds: "58";
  }

  99.16667% {
    --seconds: "59";
  }

  100% {
    --seconds: "0";
  }
`;

export const milliseconds = keyframes`
  0.05% { --milliseconds: "000"; }
  0.15% { --milliseconds: "001"; }
  0.25% { --milliseconds: "002"; }
  0.35% { --milliseconds: "003"; }
  0.45% { --milliseconds: "004"; }
  0.55% { --milliseconds: "005"; }
  0.65% { --milliseconds: "006"; }
  0.75% { --milliseconds: "007"; }
  0.85% { --milliseconds: "008"; }
  0.95% { --milliseconds: "009"; }
  1.05% { --milliseconds: "010"; }
  1.15% { --milliseconds: "011"; }
  1.25% { --milliseconds: "012"; }
  1.35% { --milliseconds: "013"; }
  1.45% { --milliseconds: "014"; }
  1.55% { --milliseconds: "015"; }
  1.65% { --milliseconds: "016"; }
  1.75% { --milliseconds: "017"; }
  1.85% { --milliseconds: "018"; }
  1.95% { --milliseconds: "019"; }
  2.05% { --milliseconds: "020"; }
  2.15% { --milliseconds: "021"; }
  2.25% { --milliseconds: "022"; }
  2.35% { --milliseconds: "023"; }
  2.45% { --milliseconds: "024"; }
  2.55% { --milliseconds: "025"; }
  2.65% { --milliseconds: "026"; }
  2.75% { --milliseconds: "027"; }
  2.85% { --milliseconds: "028"; }
  2.95% { --milliseconds: "029"; }
  3.05% { --milliseconds: "030"; }
  3.15% { --milliseconds: "031"; }
  3.25% { --milliseconds: "032"; }
  3.35% { --milliseconds: "033"; }
  3.45% { --milliseconds: "034"; }
  3.55% { --milliseconds: "035"; }
  3.65% { --milliseconds: "036"; }
  3.75% { --milliseconds: "037"; }
  3.85% { --milliseconds: "038"; }
  3.95% { --milliseconds: "039"; }
  4.05% { --milliseconds: "040"; }
  4.15% { --milliseconds: "041"; }
  4.25% { --milliseconds: "042"; }
  4.35% { --milliseconds: "043"; }
  4.45% { --milliseconds: "044"; }
  4.55% { --milliseconds: "045"; }
  4.65% { --milliseconds: "046"; }
  4.75% { --milliseconds: "047"; }
  4.85% { --milliseconds: "048"; }
  4.95% { --milliseconds: "049"; }
  5.05% { --milliseconds: "050"; }
  5.15% { --milliseconds: "051"; }
  5.25% { --milliseconds: "052"; }
  5.35% { --milliseconds: "053"; }
  5.45% { --milliseconds: "054"; }
  5.55% { --milliseconds: "055"; }
  5.65% { --milliseconds: "056"; }
  5.75% { --milliseconds: "057"; }
  5.85% { --milliseconds: "058"; }
  5.95% { --milliseconds: "059"; }
  6.05% { --milliseconds: "060"; }
  6.15% { --milliseconds: "061"; }
  6.25% { --milliseconds: "062"; }
  6.35% { --milliseconds: "063"; }
  6.45% { --milliseconds: "064"; }
  6.55% { --milliseconds: "065"; }
  6.65% { --milliseconds: "066"; }
  6.75% { --milliseconds: "067"; }
  6.85% { --milliseconds: "068"; }
  6.95% { --milliseconds: "069"; }
  7.05% { --milliseconds: "070"; }
  7.15% { --milliseconds: "071"; }
  7.25% { --milliseconds: "072"; }
  7.35% { --milliseconds: "073"; }
  7.45% { --milliseconds: "074"; }
  7.55% { --milliseconds: "075"; }
  7.65% { --milliseconds: "076"; }
  7.75% { --milliseconds: "077"; }
  7.85% { --milliseconds: "078"; }
  7.95% { --milliseconds: "079"; }
  8.05% { --milliseconds: "080"; }
  8.15% { --milliseconds: "081"; }
  8.25% { --milliseconds: "082"; }
  8.35% { --milliseconds: "083"; }
  8.45% { --milliseconds: "084"; }
  8.55% { --milliseconds: "085"; }
  8.65% { --milliseconds: "086"; }
  8.75% { --milliseconds: "087"; }
  8.85% { --milliseconds: "088"; }
  8.95% { --milliseconds: "089"; }
  9.05% { --milliseconds: "090"; }
  9.15% { --milliseconds: "091"; }
  9.25% { --milliseconds: "092"; }
  9.35% { --milliseconds: "093"; }
  9.45% { --milliseconds: "094"; }
  9.55% { --milliseconds: "095"; }
  9.65% { --milliseconds: "096"; }
  9.75% { --milliseconds: "097"; }
  9.85% { --milliseconds: "098"; }
  9.95% { --milliseconds: "099"; }
  10.05% { --milliseconds: "100"; }
  10.15% { --milliseconds: "101"; }
  10.25% { --milliseconds: "102"; }
  10.35% { --milliseconds: "103"; }
  10.45% { --milliseconds: "104"; }
  10.55% { --milliseconds: "105"; }
  10.65% { --milliseconds: "106"; }
  10.75% { --milliseconds: "107"; }
  10.85% { --milliseconds: "108"; }
  10.95% { --milliseconds: "109"; }
  11.05% { --milliseconds: "110"; }
  11.15% { --milliseconds: "111"; }
  11.25% { --milliseconds: "112"; }
  11.35% { --milliseconds: "113"; }
  11.45% { --milliseconds: "114"; }
  11.55% { --milliseconds: "115"; }
  11.65% { --milliseconds: "116"; }
  11.75% { --milliseconds: "117"; }
  11.85% { --milliseconds: "118"; }
  11.95% { --milliseconds: "119"; }
  12.05% { --milliseconds: "120"; }
  12.15% { --milliseconds: "121"; }
  12.25% { --milliseconds: "122"; }
  12.35% { --milliseconds: "123"; }
  12.45% { --milliseconds: "124"; }
  12.55% { --milliseconds: "125"; }
  12.65% { --milliseconds: "126"; }
  12.75% { --milliseconds: "127"; }
  12.85% { --milliseconds: "128"; }
  12.95% { --milliseconds: "129"; }
  13.05% { --milliseconds: "130"; }
  13.15% { --milliseconds: "131"; }
  13.25% { --milliseconds: "132"; }
  13.35% { --milliseconds: "133"; }
  13.45% { --milliseconds: "134"; }
  13.55% { --milliseconds: "135"; }
  13.65% { --milliseconds: "136"; }
  13.75% { --milliseconds: "137"; }
  13.85% { --milliseconds: "138"; }
  13.95% { --milliseconds: "139"; }
  14.05% { --milliseconds: "140"; }
  14.15% { --milliseconds: "141"; }
  14.25% { --milliseconds: "142"; }
  14.35% { --milliseconds: "143"; }
  14.45% { --milliseconds: "144"; }
  14.55% { --milliseconds: "145"; }
  14.65% { --milliseconds: "146"; }
  14.75% { --milliseconds: "147"; }
  14.85% { --milliseconds: "148"; }
  14.95% { --milliseconds: "149"; }
  15.05% { --milliseconds: "150"; }
  15.15% { --milliseconds: "151"; }
  15.25% { --milliseconds: "152"; }
  15.35% { --milliseconds: "153"; }
  15.45% { --milliseconds: "154"; }
  15.55% { --milliseconds: "155"; }
  15.65% { --milliseconds: "156"; }
  15.75% { --milliseconds: "157"; }
  15.85% { --milliseconds: "158"; }
  15.95% { --milliseconds: "159"; }
  16.05% { --milliseconds: "160"; }
  16.15% { --milliseconds: "161"; }
  16.25% { --milliseconds: "162"; }
  16.35% { --milliseconds: "163"; }
  16.45% { --milliseconds: "164"; }
  16.55% { --milliseconds: "165"; }
  16.65% { --milliseconds: "166"; }
  16.75% { --milliseconds: "167"; }
  16.85% { --milliseconds: "168"; }
  16.95% { --milliseconds: "169"; }
  17.05% { --milliseconds: "170"; }
  17.15% { --milliseconds: "171"; }
  17.25% { --milliseconds: "172"; }
  17.35% { --milliseconds: "173"; }
  17.45% { --milliseconds: "174"; }
  17.55% { --milliseconds: "175"; }
  17.65% { --milliseconds: "176"; }
  17.75% { --milliseconds: "177"; }
  17.85% { --milliseconds: "178"; }
  17.95% { --milliseconds: "179"; }
  18.05% { --milliseconds: "180"; }
  18.15% { --milliseconds: "181"; }
  18.25% { --milliseconds: "182"; }
  18.35% { --milliseconds: "183"; }
  18.45% { --milliseconds: "184"; }
  18.55% { --milliseconds: "185"; }
  18.65% { --milliseconds: "186"; }
  18.75% { --milliseconds: "187"; }
  18.85% { --milliseconds: "188"; }
  18.95% { --milliseconds: "189"; }
  19.05% { --milliseconds: "190"; }
  19.15% { --milliseconds: "191"; }
  19.25% { --milliseconds: "192"; }
  19.35% { --milliseconds: "193"; }
  19.45% { --milliseconds: "194"; }
  19.55% { --milliseconds: "195"; }
  19.65% { --milliseconds: "196"; }
  19.75% { --milliseconds: "197"; }
  19.85% { --milliseconds: "198"; }
  19.95% { --milliseconds: "199"; }
  20.05% { --milliseconds: "200"; }
  20.15% { --milliseconds: "201"; }
  20.25% { --milliseconds: "202"; }
  20.35% { --milliseconds: "203"; }
  20.45% { --milliseconds: "204"; }
  20.55% { --milliseconds: "205"; }
  20.65% { --milliseconds: "206"; }
  20.75% { --milliseconds: "207"; }
  20.85% { --milliseconds: "208"; }
  20.95% { --milliseconds: "209"; }
  21.05% { --milliseconds: "210"; }
  21.15% { --milliseconds: "211"; }
  21.25% { --milliseconds: "212"; }
  21.35% { --milliseconds: "213"; }
  21.45% { --milliseconds: "214"; }
  21.55% { --milliseconds: "215"; }
  21.65% { --milliseconds: "216"; }
  21.75% { --milliseconds: "217"; }
  21.85% { --milliseconds: "218"; }
  21.95% { --milliseconds: "219"; }
  22.05% { --milliseconds: "220"; }
  22.15% { --milliseconds: "221"; }
  22.25% { --milliseconds: "222"; }
  22.35% { --milliseconds: "223"; }
  22.45% { --milliseconds: "224"; }
  22.55% { --milliseconds: "225"; }
  22.65% { --milliseconds: "226"; }
  22.75% { --milliseconds: "227"; }
  22.85% { --milliseconds: "228"; }
  22.95% { --milliseconds: "229"; }
  23.05% { --milliseconds: "230"; }
  23.15% { --milliseconds: "231"; }
  23.25% { --milliseconds: "232"; }
  23.35% { --milliseconds: "233"; }
  23.45% { --milliseconds: "234"; }
  23.55% { --milliseconds: "235"; }
  23.65% { --milliseconds: "236"; }
  23.75% { --milliseconds: "237"; }
  23.85% { --milliseconds: "238"; }
  23.95% { --milliseconds: "239"; }
  24.05% { --milliseconds: "240"; }
  24.15% { --milliseconds: "241"; }
  24.25% { --milliseconds: "242"; }
  24.35% { --milliseconds: "243"; }
  24.45% { --milliseconds: "244"; }
  24.55% { --milliseconds: "245"; }
  24.65% { --milliseconds: "246"; }
  24.75% { --milliseconds: "247"; }
  24.85% { --milliseconds: "248"; }
  24.95% { --milliseconds: "249"; }
  25.05% { --milliseconds: "250"; }
  25.15% { --milliseconds: "251"; }
  25.25% { --milliseconds: "252"; }
  25.35% { --milliseconds: "253"; }
  25.45% { --milliseconds: "254"; }
  25.55% { --milliseconds: "255"; }
  25.65% { --milliseconds: "256"; }
  25.75% { --milliseconds: "257"; }
  25.85% { --milliseconds: "258"; }
  25.95% { --milliseconds: "259"; }
  26.05% { --milliseconds: "260"; }
  26.15% { --milliseconds: "261"; }
  26.25% { --milliseconds: "262"; }
  26.35% { --milliseconds: "263"; }
  26.45% { --milliseconds: "264"; }
  26.55% { --milliseconds: "265"; }
  26.65% { --milliseconds: "266"; }
  26.75% { --milliseconds: "267"; }
  26.85% { --milliseconds: "268"; }
  26.95% { --milliseconds: "269"; }
  27.05% { --milliseconds: "270"; }
  27.15% { --milliseconds: "271"; }
  27.25% { --milliseconds: "272"; }
  27.35% { --milliseconds: "273"; }
  27.45% { --milliseconds: "274"; }
  27.55% { --milliseconds: "275"; }
  27.65% { --milliseconds: "276"; }
  27.75% { --milliseconds: "277"; }
  27.85% { --milliseconds: "278"; }
  27.95% { --milliseconds: "279"; }
  28.05% { --milliseconds: "280"; }
  28.15% { --milliseconds: "281"; }
  28.25% { --milliseconds: "282"; }
  28.35% { --milliseconds: "283"; }
  28.45% { --milliseconds: "284"; }
  28.55% { --milliseconds: "285"; }
  28.65% { --milliseconds: "286"; }
  28.75% { --milliseconds: "287"; }
  28.85% { --milliseconds: "288"; }
  28.95% { --milliseconds: "289"; }
  29.05% { --milliseconds: "290"; }
  29.15% { --milliseconds: "291"; }
  29.25% { --milliseconds: "292"; }
  29.35% { --milliseconds: "293"; }
  29.45% { --milliseconds: "294"; }
  29.55% { --milliseconds: "295"; }
  29.65% { --milliseconds: "296"; }
  29.75% { --milliseconds: "297"; }
  29.85% { --milliseconds: "298"; }
  29.95% { --milliseconds: "299"; }
  30.05% { --milliseconds: "300"; }
  30.15% { --milliseconds: "301"; }
  30.25% { --milliseconds: "302"; }
  30.35% { --milliseconds: "303"; }
  30.45% { --milliseconds: "304"; }
  30.55% { --milliseconds: "305"; }
  30.65% { --milliseconds: "306"; }
  30.75% { --milliseconds: "307"; }
  30.85% { --milliseconds: "308"; }
  30.95% { --milliseconds: "309"; }
  31.05% { --milliseconds: "310"; }
  31.15% { --milliseconds: "311"; }
  31.25% { --milliseconds: "312"; }
  31.35% { --milliseconds: "313"; }
  31.45% { --milliseconds: "314"; }
  31.55% { --milliseconds: "315"; }
  31.65% { --milliseconds: "316"; }
  31.75% { --milliseconds: "317"; }
  31.85% { --milliseconds: "318"; }
  31.95% { --milliseconds: "319"; }
  32.05% { --milliseconds: "320"; }
  32.15% { --milliseconds: "321"; }
  32.25% { --milliseconds: "322"; }
  32.35% { --milliseconds: "323"; }
  32.45% { --milliseconds: "324"; }
  32.55% { --milliseconds: "325"; }
  32.65% { --milliseconds: "326"; }
  32.75% { --milliseconds: "327"; }
  32.85% { --milliseconds: "328"; }
  32.95% { --milliseconds: "329"; }
  33.05% { --milliseconds: "330"; }
  33.15% { --milliseconds: "331"; }
  33.25% { --milliseconds: "332"; }
  33.35% { --milliseconds: "333"; }
  33.45% { --milliseconds: "334"; }
  33.55% { --milliseconds: "335"; }
  33.65% { --milliseconds: "336"; }
  33.75% { --milliseconds: "337"; }
  33.85% { --milliseconds: "338"; }
  33.95% { --milliseconds: "339"; }
  34.05% { --milliseconds: "340"; }
  34.15% { --milliseconds: "341"; }
  34.25% { --milliseconds: "342"; }
  34.35% { --milliseconds: "343"; }
  34.45% { --milliseconds: "344"; }
  34.55% { --milliseconds: "345"; }
  34.65% { --milliseconds: "346"; }
  34.75% { --milliseconds: "347"; }
  34.85% { --milliseconds: "348"; }
  34.95% { --milliseconds: "349"; }
  35.05% { --milliseconds: "350"; }
  35.15% { --milliseconds: "351"; }
  35.25% { --milliseconds: "352"; }
  35.35% { --milliseconds: "353"; }
  35.45% { --milliseconds: "354"; }
  35.55% { --milliseconds: "355"; }
  35.65% { --milliseconds: "356"; }
  35.75% { --milliseconds: "357"; }
  35.85% { --milliseconds: "358"; }
  35.95% { --milliseconds: "359"; }
  36.05% { --milliseconds: "360"; }
  36.15% { --milliseconds: "361"; }
  36.25% { --milliseconds: "362"; }
  36.35% { --milliseconds: "363"; }
  36.45% { --milliseconds: "364"; }
  36.55% { --milliseconds: "365"; }
  36.65% { --milliseconds: "366"; }
  36.75% { --milliseconds: "367"; }
  36.85% { --milliseconds: "368"; }
  36.95% { --milliseconds: "369"; }
  37.05% { --milliseconds: "370"; }
  37.15% { --milliseconds: "371"; }
  37.25% { --milliseconds: "372"; }
  37.35% { --milliseconds: "373"; }
  37.45% { --milliseconds: "374"; }
  37.55% { --milliseconds: "375"; }
  37.65% { --milliseconds: "376"; }
  37.75% { --milliseconds: "377"; }
  37.85% { --milliseconds: "378"; }
  37.95% { --milliseconds: "379"; }
  38.05% { --milliseconds: "380"; }
  38.15% { --milliseconds: "381"; }
  38.25% { --milliseconds: "382"; }
  38.35% { --milliseconds: "383"; }
  38.45% { --milliseconds: "384"; }
  38.55% { --milliseconds: "385"; }
  38.65% { --milliseconds: "386"; }
  38.75% { --milliseconds: "387"; }
  38.85% { --milliseconds: "388"; }
  38.95% { --milliseconds: "389"; }
  39.05% { --milliseconds: "390"; }
  39.15% { --milliseconds: "391"; }
  39.25% { --milliseconds: "392"; }
  39.35% { --milliseconds: "393"; }
  39.45% { --milliseconds: "394"; }
  39.55% { --milliseconds: "395"; }
  39.65% { --milliseconds: "396"; }
  39.75% { --milliseconds: "397"; }
  39.85% { --milliseconds: "398"; }
  39.95% { --milliseconds: "399"; }
  40.05% { --milliseconds: "400"; }
  40.15% { --milliseconds: "401"; }
  40.25% { --milliseconds: "402"; }
  40.35% { --milliseconds: "403"; }
  40.45% { --milliseconds: "404"; }
  40.55% { --milliseconds: "405"; }
  40.65% { --milliseconds: "406"; }
  40.75% { --milliseconds: "407"; }
  40.85% { --milliseconds: "408"; }
  40.95% { --milliseconds: "409"; }
  41.05% { --milliseconds: "410"; }
  41.15% { --milliseconds: "411"; }
  41.25% { --milliseconds: "412"; }
  41.35% { --milliseconds: "413"; }
  41.45% { --milliseconds: "414"; }
  41.55% { --milliseconds: "415"; }
  41.65% { --milliseconds: "416"; }
  41.75% { --milliseconds: "417"; }
  41.85% { --milliseconds: "418"; }
  41.95% { --milliseconds: "419"; }
  42.05% { --milliseconds: "420"; }
  42.15% { --milliseconds: "421"; }
  42.25% { --milliseconds: "422"; }
  42.35% { --milliseconds: "423"; }
  42.45% { --milliseconds: "424"; }
  42.55% { --milliseconds: "425"; }
  42.65% { --milliseconds: "426"; }
  42.75% { --milliseconds: "427"; }
  42.85% { --milliseconds: "428"; }
  42.95% { --milliseconds: "429"; }
  43.05% { --milliseconds: "430"; }
  43.15% { --milliseconds: "431"; }
  43.25% { --milliseconds: "432"; }
  43.35% { --milliseconds: "433"; }
  43.45% { --milliseconds: "434"; }
  43.55% { --milliseconds: "435"; }
  43.65% { --milliseconds: "436"; }
  43.75% { --milliseconds: "437"; }
  43.85% { --milliseconds: "438"; }
  43.95% { --milliseconds: "439"; }
  44.05% { --milliseconds: "440"; }
  44.15% { --milliseconds: "441"; }
  44.25% { --milliseconds: "442"; }
  44.35% { --milliseconds: "443"; }
  44.45% { --milliseconds: "444"; }
  44.55% { --milliseconds: "445"; }
  44.65% { --milliseconds: "446"; }
  44.75% { --milliseconds: "447"; }
  44.85% { --milliseconds: "448"; }
  44.95% { --milliseconds: "449"; }
  45.05% { --milliseconds: "450"; }
  45.15% { --milliseconds: "451"; }
  45.25% { --milliseconds: "452"; }
  45.35% { --milliseconds: "453"; }
  45.45% { --milliseconds: "454"; }
  45.55% { --milliseconds: "455"; }
  45.65% { --milliseconds: "456"; }
  45.75% { --milliseconds: "457"; }
  45.85% { --milliseconds: "458"; }
  45.95% { --milliseconds: "459"; }
  46.05% { --milliseconds: "460"; }
  46.15% { --milliseconds: "461"; }
  46.25% { --milliseconds: "462"; }
  46.35% { --milliseconds: "463"; }
  46.45% { --milliseconds: "464"; }
  46.55% { --milliseconds: "465"; }
  46.65% { --milliseconds: "466"; }
  46.75% { --milliseconds: "467"; }
  46.85% { --milliseconds: "468"; }
  46.95% { --milliseconds: "469"; }
  47.05% { --milliseconds: "470"; }
  47.15% { --milliseconds: "471"; }
  47.25% { --milliseconds: "472"; }
  47.35% { --milliseconds: "473"; }
  47.45% { --milliseconds: "474"; }
  47.55% { --milliseconds: "475"; }
  47.65% { --milliseconds: "476"; }
  47.75% { --milliseconds: "477"; }
  47.85% { --milliseconds: "478"; }
  47.95% { --milliseconds: "479"; }
  48.05% { --milliseconds: "480"; }
  48.15% { --milliseconds: "481"; }
  48.25% { --milliseconds: "482"; }
  48.35% { --milliseconds: "483"; }
  48.45% { --milliseconds: "484"; }
  48.55% { --milliseconds: "485"; }
  48.65% { --milliseconds: "486"; }
  48.75% { --milliseconds: "487"; }
  48.85% { --milliseconds: "488"; }
  48.95% { --milliseconds: "489"; }
  49.05% { --milliseconds: "490"; }
  49.15% { --milliseconds: "491"; }
  49.25% { --milliseconds: "492"; }
  49.35% { --milliseconds: "493"; }
  49.45% { --milliseconds: "494"; }
  49.55% { --milliseconds: "495"; }
  49.65% { --milliseconds: "496"; }
  49.75% { --milliseconds: "497"; }
  49.85% { --milliseconds: "498"; }
  49.95% { --milliseconds: "499"; }
  50.05% { --milliseconds: "500"; }
  50.15% { --milliseconds: "501"; }
  50.25% { --milliseconds: "502"; }
  50.35% { --milliseconds: "503"; }
  50.45% { --milliseconds: "504"; }
  50.55% { --milliseconds: "505"; }
  50.65% { --milliseconds: "506"; }
  50.75% { --milliseconds: "507"; }
  50.85% { --milliseconds: "508"; }
  50.95% { --milliseconds: "509"; }
  51.05% { --milliseconds: "510"; }
  51.15% { --milliseconds: "511"; }
  51.25% { --milliseconds: "512"; }
  51.35% { --milliseconds: "513"; }
  51.45% { --milliseconds: "514"; }
  51.55% { --milliseconds: "515"; }
  51.65% { --milliseconds: "516"; }
  51.75% { --milliseconds: "517"; }
  51.85% { --milliseconds: "518"; }
  51.95% { --milliseconds: "519"; }
  52.05% { --milliseconds: "520"; }
  52.15% { --milliseconds: "521"; }
  52.25% { --milliseconds: "522"; }
  52.35% { --milliseconds: "523"; }
  52.45% { --milliseconds: "524"; }
  52.55% { --milliseconds: "525"; }
  52.65% { --milliseconds: "526"; }
  52.75% { --milliseconds: "527"; }
  52.85% { --milliseconds: "528"; }
  52.95% { --milliseconds: "529"; }
  53.05% { --milliseconds: "530"; }
  53.15% { --milliseconds: "531"; }
  53.25% { --milliseconds: "532"; }
  53.35% { --milliseconds: "533"; }
  53.45% { --milliseconds: "534"; }
  53.55% { --milliseconds: "535"; }
  53.65% { --milliseconds: "536"; }
  53.75% { --milliseconds: "537"; }
  53.85% { --milliseconds: "538"; }
  53.95% { --milliseconds: "539"; }
  54.05% { --milliseconds: "540"; }
  54.15% { --milliseconds: "541"; }
  54.25% { --milliseconds: "542"; }
  54.35% { --milliseconds: "543"; }
  54.45% { --milliseconds: "544"; }
  54.55% { --milliseconds: "545"; }
  54.65% { --milliseconds: "546"; }
  54.75% { --milliseconds: "547"; }
  54.85% { --milliseconds: "548"; }
  54.95% { --milliseconds: "549"; }
  55.05% { --milliseconds: "550"; }
  55.15% { --milliseconds: "551"; }
  55.25% { --milliseconds: "552"; }
  55.35% { --milliseconds: "553"; }
  55.45% { --milliseconds: "554"; }
  55.55% { --milliseconds: "555"; }
  55.65% { --milliseconds: "556"; }
  55.75% { --milliseconds: "557"; }
  55.85% { --milliseconds: "558"; }
  55.95% { --milliseconds: "559"; }
  56.05% { --milliseconds: "560"; }
  56.15% { --milliseconds: "561"; }
  56.25% { --milliseconds: "562"; }
  56.35% { --milliseconds: "563"; }
  56.45% { --milliseconds: "564"; }
  56.55% { --milliseconds: "565"; }
  56.65% { --milliseconds: "566"; }
  56.75% { --milliseconds: "567"; }
  56.85% { --milliseconds: "568"; }
  56.95% { --milliseconds: "569"; }
  57.05% { --milliseconds: "570"; }
  57.15% { --milliseconds: "571"; }
  57.25% { --milliseconds: "572"; }
  57.35% { --milliseconds: "573"; }
  57.45% { --milliseconds: "574"; }
  57.55% { --milliseconds: "575"; }
  57.65% { --milliseconds: "576"; }
  57.75% { --milliseconds: "577"; }
  57.85% { --milliseconds: "578"; }
  57.95% { --milliseconds: "579"; }
  58.05% { --milliseconds: "580"; }
  58.15% { --milliseconds: "581"; }
  58.25% { --milliseconds: "582"; }
  58.35% { --milliseconds: "583"; }
  58.45% { --milliseconds: "584"; }
  58.55% { --milliseconds: "585"; }
  58.65% { --milliseconds: "586"; }
  58.75% { --milliseconds: "587"; }
  58.85% { --milliseconds: "588"; }
  58.95% { --milliseconds: "589"; }
  59.05% { --milliseconds: "590"; }
  59.15% { --milliseconds: "591"; }
  59.25% { --milliseconds: "592"; }
  59.35% { --milliseconds: "593"; }
  59.45% { --milliseconds: "594"; }
  59.55% { --milliseconds: "595"; }
  59.65% { --milliseconds: "596"; }
  59.75% { --milliseconds: "597"; }
  59.85% { --milliseconds: "598"; }
  59.95% { --milliseconds: "599"; }
  60.05% { --milliseconds: "600"; }
  60.15% { --milliseconds: "601"; }
  60.25% { --milliseconds: "602"; }
  60.35% { --milliseconds: "603"; }
  60.45% { --milliseconds: "604"; }
  60.55% { --milliseconds: "605"; }
  60.65% { --milliseconds: "606"; }
  60.75% { --milliseconds: "607"; }
  60.85% { --milliseconds: "608"; }
  60.95% { --milliseconds: "609"; }
  61.05% { --milliseconds: "610"; }
  61.15% { --milliseconds: "611"; }
  61.25% { --milliseconds: "612"; }
  61.35% { --milliseconds: "613"; }
  61.45% { --milliseconds: "614"; }
  61.55% { --milliseconds: "615"; }
  61.65% { --milliseconds: "616"; }
  61.75% { --milliseconds: "617"; }
  61.85% { --milliseconds: "618"; }
  61.95% { --milliseconds: "619"; }
  62.05% { --milliseconds: "620"; }
  62.15% { --milliseconds: "621"; }
  62.25% { --milliseconds: "622"; }
  62.35% { --milliseconds: "623"; }
  62.45% { --milliseconds: "624"; }
  62.55% { --milliseconds: "625"; }
  62.65% { --milliseconds: "626"; }
  62.75% { --milliseconds: "627"; }
  62.85% { --milliseconds: "628"; }
  62.95% { --milliseconds: "629"; }
  63.05% { --milliseconds: "630"; }
  63.15% { --milliseconds: "631"; }
  63.25% { --milliseconds: "632"; }
  63.35% { --milliseconds: "633"; }
  63.45% { --milliseconds: "634"; }
  63.55% { --milliseconds: "635"; }
  63.65% { --milliseconds: "636"; }
  63.75% { --milliseconds: "637"; }
  63.85% { --milliseconds: "638"; }
  63.95% { --milliseconds: "639"; }
  64.05% { --milliseconds: "640"; }
  64.15% { --milliseconds: "641"; }
  64.25% { --milliseconds: "642"; }
  64.35% { --milliseconds: "643"; }
  64.45% { --milliseconds: "644"; }
  64.55% { --milliseconds: "645"; }
  64.65% { --milliseconds: "646"; }
  64.75% { --milliseconds: "647"; }
  64.85% { --milliseconds: "648"; }
  64.95% { --milliseconds: "649"; }
  65.05% { --milliseconds: "650"; }
  65.15% { --milliseconds: "651"; }
  65.25% { --milliseconds: "652"; }
  65.35% { --milliseconds: "653"; }
  65.45% { --milliseconds: "654"; }
  65.55% { --milliseconds: "655"; }
  65.65% { --milliseconds: "656"; }
  65.75% { --milliseconds: "657"; }
  65.85% { --milliseconds: "658"; }
  65.95% { --milliseconds: "659"; }
  66.05% { --milliseconds: "660"; }
  66.15% { --milliseconds: "661"; }
  66.25% { --milliseconds: "662"; }
  66.35% { --milliseconds: "663"; }
  66.45% { --milliseconds: "664"; }
  66.55% { --milliseconds: "665"; }
  66.65% { --milliseconds: "666"; }
  66.75% { --milliseconds: "667"; }
  66.85% { --milliseconds: "668"; }
  66.95% { --milliseconds: "669"; }
  67.05% { --milliseconds: "670"; }
  67.15% { --milliseconds: "671"; }
  67.25% { --milliseconds: "672"; }
  67.35% { --milliseconds: "673"; }
  67.45% { --milliseconds: "674"; }
  67.55% { --milliseconds: "675"; }
  67.65% { --milliseconds: "676"; }
  67.75% { --milliseconds: "677"; }
  67.85% { --milliseconds: "678"; }
  67.95% { --milliseconds: "679"; }
  68.05% { --milliseconds: "680"; }
  68.15% { --milliseconds: "681"; }
  68.25% { --milliseconds: "682"; }
  68.35% { --milliseconds: "683"; }
  68.45% { --milliseconds: "684"; }
  68.55% { --milliseconds: "685"; }
  68.65% { --milliseconds: "686"; }
  68.75% { --milliseconds: "687"; }
  68.85% { --milliseconds: "688"; }
  68.95% { --milliseconds: "689"; }
  69.05% { --milliseconds: "690"; }
  69.15% { --milliseconds: "691"; }
  69.25% { --milliseconds: "692"; }
  69.35% { --milliseconds: "693"; }
  69.45% { --milliseconds: "694"; }
  69.55% { --milliseconds: "695"; }
  69.65% { --milliseconds: "696"; }
  69.75% { --milliseconds: "697"; }
  69.85% { --milliseconds: "698"; }
  69.95% { --milliseconds: "699"; }
  70.05% { --milliseconds: "700"; }
  70.15% { --milliseconds: "701"; }
  70.25% { --milliseconds: "702"; }
  70.35% { --milliseconds: "703"; }
  70.45% { --milliseconds: "704"; }
  70.55% { --milliseconds: "705"; }
  70.65% { --milliseconds: "706"; }
  70.75% { --milliseconds: "707"; }
  70.85% { --milliseconds: "708"; }
  70.95% { --milliseconds: "709"; }
  71.05% { --milliseconds: "710"; }
  71.15% { --milliseconds: "711"; }
  71.25% { --milliseconds: "712"; }
  71.35% { --milliseconds: "713"; }
  71.45% { --milliseconds: "714"; }
  71.55% { --milliseconds: "715"; }
  71.65% { --milliseconds: "716"; }
  71.75% { --milliseconds: "717"; }
  71.85% { --milliseconds: "718"; }
  71.95% { --milliseconds: "719"; }
  72.05% { --milliseconds: "720"; }
  72.15% { --milliseconds: "721"; }
  72.25% { --milliseconds: "722"; }
  72.35% { --milliseconds: "723"; }
  72.45% { --milliseconds: "724"; }
  72.55% { --milliseconds: "725"; }
  72.65% { --milliseconds: "726"; }
  72.75% { --milliseconds: "727"; }
  72.85% { --milliseconds: "728"; }
  72.95% { --milliseconds: "729"; }
  73.05% { --milliseconds: "730"; }
  73.15% { --milliseconds: "731"; }
  73.25% { --milliseconds: "732"; }
  73.35% { --milliseconds: "733"; }
  73.45% { --milliseconds: "734"; }
  73.55% { --milliseconds: "735"; }
  73.65% { --milliseconds: "736"; }
  73.75% { --milliseconds: "737"; }
  73.85% { --milliseconds: "738"; }
  73.95% { --milliseconds: "739"; }
  74.05% { --milliseconds: "740"; }
  74.15% { --milliseconds: "741"; }
  74.25% { --milliseconds: "742"; }
  74.35% { --milliseconds: "743"; }
  74.45% { --milliseconds: "744"; }
  74.55% { --milliseconds: "745"; }
  74.65% { --milliseconds: "746"; }
  74.75% { --milliseconds: "747"; }
  74.85% { --milliseconds: "748"; }
  74.95% { --milliseconds: "749"; }
  75.05% { --milliseconds: "750"; }
  75.15% { --milliseconds: "751"; }
  75.25% { --milliseconds: "752"; }
  75.35% { --milliseconds: "753"; }
  75.45% { --milliseconds: "754"; }
  75.55% { --milliseconds: "755"; }
  75.65% { --milliseconds: "756"; }
  75.75% { --milliseconds: "757"; }
  75.85% { --milliseconds: "758"; }
  75.95% { --milliseconds: "759"; }
  76.05% { --milliseconds: "760"; }
  76.15% { --milliseconds: "761"; }
  76.25% { --milliseconds: "762"; }
  76.35% { --milliseconds: "763"; }
  76.45% { --milliseconds: "764"; }
  76.55% { --milliseconds: "765"; }
  76.65% { --milliseconds: "766"; }
  76.75% { --milliseconds: "767"; }
  76.85% { --milliseconds: "768"; }
  76.95% { --milliseconds: "769"; }
  77.05% { --milliseconds: "770"; }
  77.15% { --milliseconds: "771"; }
  77.25% { --milliseconds: "772"; }
  77.35% { --milliseconds: "773"; }
  77.45% { --milliseconds: "774"; }
  77.55% { --milliseconds: "775"; }
  77.65% { --milliseconds: "776"; }
  77.75% { --milliseconds: "777"; }
  77.85% { --milliseconds: "778"; }
  77.95% { --milliseconds: "779"; }
  78.05% { --milliseconds: "780"; }
  78.15% { --milliseconds: "781"; }
  78.25% { --milliseconds: "782"; }
  78.35% { --milliseconds: "783"; }
  78.45% { --milliseconds: "784"; }
  78.55% { --milliseconds: "785"; }
  78.65% { --milliseconds: "786"; }
  78.75% { --milliseconds: "787"; }
  78.85% { --milliseconds: "788"; }
  78.95% { --milliseconds: "789"; }
  79.05% { --milliseconds: "790"; }
  79.15% { --milliseconds: "791"; }
  79.25% { --milliseconds: "792"; }
  79.35% { --milliseconds: "793"; }
  79.45% { --milliseconds: "794"; }
  79.55% { --milliseconds: "795"; }
  79.65% { --milliseconds: "796"; }
  79.75% { --milliseconds: "797"; }
  79.85% { --milliseconds: "798"; }
  79.95% { --milliseconds: "799"; }
  80.05% { --milliseconds: "800"; }
  80.15% { --milliseconds: "801"; }
  80.25% { --milliseconds: "802"; }
  80.35% { --milliseconds: "803"; }
  80.45% { --milliseconds: "804"; }
  80.55% { --milliseconds: "805"; }
  80.65% { --milliseconds: "806"; }
  80.75% { --milliseconds: "807"; }
  80.85% { --milliseconds: "808"; }
  80.95% { --milliseconds: "809"; }
  81.05% { --milliseconds: "810"; }
  81.15% { --milliseconds: "811"; }
  81.25% { --milliseconds: "812"; }
  81.35% { --milliseconds: "813"; }
  81.45% { --milliseconds: "814"; }
  81.55% { --milliseconds: "815"; }
  81.65% { --milliseconds: "816"; }
  81.75% { --milliseconds: "817"; }
  81.85% { --milliseconds: "818"; }
  81.95% { --milliseconds: "819"; }
  82.05% { --milliseconds: "820"; }
  82.15% { --milliseconds: "821"; }
  82.25% { --milliseconds: "822"; }
  82.35% { --milliseconds: "823"; }
  82.45% { --milliseconds: "824"; }
  82.55% { --milliseconds: "825"; }
  82.65% { --milliseconds: "826"; }
  82.75% { --milliseconds: "827"; }
  82.85% { --milliseconds: "828"; }
  82.95% { --milliseconds: "829"; }
  83.05% { --milliseconds: "830"; }
  83.15% { --milliseconds: "831"; }
  83.25% { --milliseconds: "832"; }
  83.35% { --milliseconds: "833"; }
  83.45% { --milliseconds: "834"; }
  83.55% { --milliseconds: "835"; }
  83.65% { --milliseconds: "836"; }
  83.75% { --milliseconds: "837"; }
  83.85% { --milliseconds: "838"; }
  83.95% { --milliseconds: "839"; }
  84.05% { --milliseconds: "840"; }
  84.15% { --milliseconds: "841"; }
  84.25% { --milliseconds: "842"; }
  84.35% { --milliseconds: "843"; }
  84.45% { --milliseconds: "844"; }
  84.55% { --milliseconds: "845"; }
  84.65% { --milliseconds: "846"; }
  84.75% { --milliseconds: "847"; }
  84.85% { --milliseconds: "848"; }
  84.95% { --milliseconds: "849"; }
  85.05% { --milliseconds: "850"; }
  85.15% { --milliseconds: "851"; }
  85.25% { --milliseconds: "852"; }
  85.35% { --milliseconds: "853"; }
  85.45% { --milliseconds: "854"; }
  85.55% { --milliseconds: "855"; }
  85.65% { --milliseconds: "856"; }
  85.75% { --milliseconds: "857"; }
  85.85% { --milliseconds: "858"; }
  85.95% { --milliseconds: "859"; }
  86.05% { --milliseconds: "860"; }
  86.15% { --milliseconds: "861"; }
  86.25% { --milliseconds: "862"; }
  86.35% { --milliseconds: "863"; }
  86.45% { --milliseconds: "864"; }
  86.55% { --milliseconds: "865"; }
  86.65% { --milliseconds: "866"; }
  86.75% { --milliseconds: "867"; }
  86.85% { --milliseconds: "868"; }
  86.95% { --milliseconds: "869"; }
  87.05% { --milliseconds: "870"; }
  87.15% { --milliseconds: "871"; }
  87.25% { --milliseconds: "872"; }
  87.35% { --milliseconds: "873"; }
  87.45% { --milliseconds: "874"; }
  87.55% { --milliseconds: "875"; }
  87.65% { --milliseconds: "876"; }
  87.75% { --milliseconds: "877"; }
  87.85% { --milliseconds: "878"; }
  87.95% { --milliseconds: "879"; }
  88.05% { --milliseconds: "880"; }
  88.15% { --milliseconds: "881"; }
  88.25% { --milliseconds: "882"; }
  88.35% { --milliseconds: "883"; }
  88.45% { --milliseconds: "884"; }
  88.55% { --milliseconds: "885"; }
  88.65% { --milliseconds: "886"; }
  88.75% { --milliseconds: "887"; }
  88.85% { --milliseconds: "888"; }
  88.95% { --milliseconds: "889"; }
  89.05% { --milliseconds: "890"; }
  89.15% { --milliseconds: "891"; }
  89.25% { --milliseconds: "892"; }
  89.35% { --milliseconds: "893"; }
  89.45% { --milliseconds: "894"; }
  89.55% { --milliseconds: "895"; }
  89.65% { --milliseconds: "896"; }
  89.75% { --milliseconds: "897"; }
  89.85% { --milliseconds: "898"; }
  89.95% { --milliseconds: "899"; }
  90.05% { --milliseconds: "900"; }
  90.15% { --milliseconds: "901"; }
  90.25% { --milliseconds: "902"; }
  90.35% { --milliseconds: "903"; }
  90.45% { --milliseconds: "904"; }
  90.55% { --milliseconds: "905"; }
  90.65% { --milliseconds: "906"; }
  90.75% { --milliseconds: "907"; }
  90.85% { --milliseconds: "908"; }
  90.95% { --milliseconds: "909"; }
  91.05% { --milliseconds: "910"; }
  91.15% { --milliseconds: "911"; }
  91.25% { --milliseconds: "912"; }
  91.35% { --milliseconds: "913"; }
  91.45% { --milliseconds: "914"; }
  91.55% { --milliseconds: "915"; }
  91.65% { --milliseconds: "916"; }
  91.75% { --milliseconds: "917"; }
  91.85% { --milliseconds: "918"; }
  91.95% { --milliseconds: "919"; }
  92.05% { --milliseconds: "920"; }
  92.15% { --milliseconds: "921"; }
  92.25% { --milliseconds: "922"; }
  92.35% { --milliseconds: "923"; }
  92.45% { --milliseconds: "924"; }
  92.55% { --milliseconds: "925"; }
  92.65% { --milliseconds: "926"; }
  92.75% { --milliseconds: "927"; }
  92.85% { --milliseconds: "928"; }
  92.95% { --milliseconds: "929"; }
  93.05% { --milliseconds: "930"; }
  93.15% { --milliseconds: "931"; }
  93.25% { --milliseconds: "932"; }
  93.35% { --milliseconds: "933"; }
  93.45% { --milliseconds: "934"; }
  93.55% { --milliseconds: "935"; }
  93.65% { --milliseconds: "936"; }
  93.75% { --milliseconds: "937"; }
  93.85% { --milliseconds: "938"; }
  93.95% { --milliseconds: "939"; }
  94.05% { --milliseconds: "940"; }
  94.15% { --milliseconds: "941"; }
  94.25% { --milliseconds: "942"; }
  94.35% { --milliseconds: "943"; }
  94.45% { --milliseconds: "944"; }
  94.55% { --milliseconds: "945"; }
  94.65% { --milliseconds: "946"; }
  94.75% { --milliseconds: "947"; }
  94.85% { --milliseconds: "948"; }
  94.95% { --milliseconds: "949"; }
  95.05% { --milliseconds: "950"; }
  95.15% { --milliseconds: "951"; }
  95.25% { --milliseconds: "952"; }
  95.35% { --milliseconds: "953"; }
  95.45% { --milliseconds: "954"; }
  95.55% { --milliseconds: "955"; }
  95.65% { --milliseconds: "956"; }
  95.75% { --milliseconds: "957"; }
  95.85% { --milliseconds: "958"; }
  95.95% { --milliseconds: "959"; }
  96.05% { --milliseconds: "960"; }
  96.15% { --milliseconds: "961"; }
  96.25% { --milliseconds: "962"; }
  96.35% { --milliseconds: "963"; }
  96.45% { --milliseconds: "964"; }
  96.55% { --milliseconds: "965"; }
  96.65% { --milliseconds: "966"; }
  96.75% { --milliseconds: "967"; }
  96.85% { --milliseconds: "968"; }
  96.95% { --milliseconds: "969"; }
  97.05% { --milliseconds: "970"; }
  97.15% { --milliseconds: "971"; }
  97.25% { --milliseconds: "972"; }
  97.35% { --milliseconds: "973"; }
  97.45% { --milliseconds: "974"; }
  97.55% { --milliseconds: "975"; }
  97.65% { --milliseconds: "976"; }
  97.75% { --milliseconds: "977"; }
  97.85% { --milliseconds: "978"; }
  97.95% { --milliseconds: "979"; }
  98.05% { --milliseconds: "980"; }
  98.15% { --milliseconds: "981"; }
  98.25% { --milliseconds: "982"; }
  98.35% { --milliseconds: "983"; }
  98.45% { --milliseconds: "984"; }
  98.55% { --milliseconds: "985"; }
  98.65% { --milliseconds: "986"; }
  98.75% { --milliseconds: "987"; }
  98.85% { --milliseconds: "988"; }
  98.95% { --milliseconds: "989"; }
  99.05% { --milliseconds: "990"; }
  99.15% { --milliseconds: "991"; }
  99.25% { --milliseconds: "992"; }
  99.35% { --milliseconds: "993"; }
  99.45% { --milliseconds: "994"; }
  99.55% { --milliseconds: "995"; }
  99.65% { --milliseconds: "996"; }
  99.75% { --milliseconds: "997"; }
  99.85% { --milliseconds: "998"; }
  99.95% { --milliseconds: "999"; }
`;
