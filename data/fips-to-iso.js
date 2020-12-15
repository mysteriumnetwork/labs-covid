const countries = [
  {
    'fips': 'AF',
    'iso': 'AF',
    'name': 'Afghanistan'
  },
  {
    'fips': 'AX',
    'iso': '-',
    'name': 'Akrotiri'
  },
  {
    'fips': 'AL',
    'iso': 'AL',
    'name': 'Albania'
  },
  {
    'fips': 'AG',
    'iso': 'DZ',
    'name': 'Algeria'
  },
  {
    'fips': 'AQ',
    'iso': 'AS',
    'name': 'American Samoa'
  },
  {
    'fips': 'AN',
    'iso': 'AD',
    'name': 'Andorra'
  },
  {
    'fips': 'AO',
    'iso': 'AO',
    'name': 'Angola'
  },
  {
    'fips': 'AV',
    'iso': 'AI',
    'name': 'Anguilla'
  },
  {
    'fips': 'AY',
    'iso': 'AQ',
    'name': 'Antarctica'
  },
  {
    'fips': 'AC',
    'iso': 'AG',
    'name': 'Antigua and Barbuda'
  },
  {
    'fips': 'AR',
    'iso': 'AR',
    'name': 'Argentina'
  },
  {
    'fips': 'AM',
    'iso': 'AM',
    'name': 'Armenia'
  },
  {
    'fips': 'AA',
    'iso': 'AW',
    'name': 'Aruba'
  },
  {
    'fips': 'AT',
    'iso': 'AU',
    'name': 'Ashmore and Cartier Islands'
  },
  {
    'fips': 'AS',
    'iso': 'AU',
    'name': 'Australia'
  },
  {
    'fips': 'AU',
    'iso': 'AT',
    'name': 'Austria'
  },
  {
    'fips': 'AJ',
    'iso': 'AZ',
    'name': 'Azerbaijan'
  },
  {
    'fips': 'BF',
    'iso': 'BS',
    'name': 'Bahamas, The'
  },
  {
    'fips': 'BA',
    'iso': 'BH',
    'name': 'Bahrain'
  },
  {
    'fips': 'FQ',
    'iso': 'UM',
    'name': 'Baker Island'
  },
  {
    'fips': 'BG',
    'iso': 'BD',
    'name': 'Bangladesh'
  },
  {
    'fips': 'BB',
    'iso': 'BB',
    'name': 'Barbados'
  },
  {
    'fips': 'BS',
    'iso': 'RE',
    'name': 'Bassas da India'
  },
  {
    'fips': 'BO',
    'iso': 'BY',
    'name': 'Belarus'
  },
  {
    'fips': 'BE',
    'iso': 'BE',
    'name': 'Belgium'
  },
  {
    'fips': 'BH',
    'iso': 'BZ',
    'name': 'Belize'
  },
  {
    'fips': 'BN',
    'iso': 'BJ',
    'name': 'Benin'
  },
  {
    'fips': 'BD',
    'iso': 'BM',
    'name': 'Bermuda'
  },
  {
    'fips': 'BT',
    'iso': 'BT',
    'name': 'Bhutan'
  },
  {
    'fips': 'BL',
    'iso': 'BO',
    'name': 'Bolivia'
  },
  {
    'fips': 'BK',
    'iso': 'BA',
    'name': 'Bosnia and Herzegovina'
  },
  {
    'fips': 'BC',
    'iso': 'BW',
    'name': 'Botswana'
  },
  {
    'fips': 'BV',
    'iso': 'BV',
    'name': 'Bouvet Island'
  },
  {
    'fips': 'BR',
    'iso': 'BR',
    'name': 'Brazil'
  },
  {
    'fips': 'IO',
    'iso': 'IO',
    'name': 'British Indian Ocean Territory'
  },
  {
    'fips': 'BX',
    'iso': 'BN',
    'name': 'Brunei'
  },
  {
    'fips': 'BU',
    'iso': 'BG',
    'name': 'Bulgaria'
  },
  {
    'fips': 'UV',
    'iso': 'BF',
    'name': 'Burkina Faso'
  },
  {
    'fips': 'BM',
    'iso': 'MM',
    'name': 'Burma'
  },
  {
    'fips': 'BY',
    'iso': 'BI',
    'name': 'Burundi'
  },
  {
    'fips': 'CB',
    'iso': 'KH',
    'name': 'Cambodia'
  },
  {
    'fips': 'CM',
    'iso': 'CM',
    'name': 'Cameroon'
  },
  {
    'fips': 'CA',
    'iso': 'CA',
    'name': 'Canada'
  },
  {
    'fips': 'CV',
    'iso': 'CV',
    'name': 'Cape Verde'
  },
  {
    'fips': 'CJ',
    'iso': 'KY',
    'name': 'Cayman Islands'
  },
  {
    'fips': 'CT',
    'iso': 'CF',
    'name': 'Central African Republic'
  },
  {
    'fips': 'CD',
    'iso': 'TD',
    'name': 'Chad'
  },
  {
    'fips': 'CI',
    'iso': 'CL',
    'name': 'Chile'
  },
  {
    'fips': 'CH',
    'iso': 'CN',
    'name': 'China'
  },
  {
    'fips': 'KT',
    'iso': 'CX',
    'name': 'Christmas Island'
  },
  {
    'fips': 'IP',
    'iso': 'PF',
    'name': 'Clipperton Island'
  },
  {
    'fips': 'CK',
    'iso': 'CC',
    'name': 'Cocos (Keeling) Islands'
  },
  {
    'fips': 'CO',
    'iso': 'CO',
    'name': 'Colombia'
  },
  {
    'fips': 'CN',
    'iso': 'KM',
    'name': 'Comoros'
  },
  {
    'fips': 'CG',
    'iso': 'CD',
    'name': 'Congo, Democratic Republic of the'
  },
  {
    'fips': 'CF',
    'iso': 'CG',
    'name': 'Congo, Republic of the'
  },
  {
    'fips': 'CW',
    'iso': 'CK',
    'name': 'Cook Islands'
  },
  {
    'fips': 'CR',
    'iso': 'AU',
    'name': 'Coral Sea Islands'
  },
  {
    'fips': 'CS',
    'iso': 'CR',
    'name': 'Costa Rica'
  },
  {
    'fips': 'IV',
    'iso': 'CI',
    'name': 'Cote d\'Ivoire'
  },
  {
    'fips': 'HR',
    'iso': 'HR',
    'name': 'Croatia'
  },
  {
    'fips': 'CU',
    'iso': 'CU',
    'name': 'Cuba'
  },
  {
    'fips': 'UC',
    'iso': 'CW',
    'name': 'Curacao'
  },
  {
    'fips': 'CY',
    'iso': 'CY',
    'name': 'Cyprus'
  },
  {
    'fips': 'EZ',
    'iso': 'CZ',
    'name': 'Czech Republic'
  },
  {
    'fips': 'DA',
    'iso': 'DK',
    'name': 'Denmark'
  },
  {
    'fips': 'DX',
    'iso': '-',
    'name': 'Dhekelia'
  },
  {
    'fips': 'DJ',
    'iso': 'DJ',
    'name': 'Djibouti'
  },
  {
    'fips': 'DO',
    'iso': 'DM',
    'name': 'Dominica'
  },
  {
    'fips': 'DR',
    'iso': 'DO',
    'name': 'Dominican Republic'
  },
  {
    'fips': 'EC',
    'iso': 'EC',
    'name': 'Ecuador'
  },
  {
    'fips': 'EG',
    'iso': 'EG',
    'name': 'Egypt'
  },
  {
    'fips': 'ES',
    'iso': 'SV',
    'name': 'El Salvador'
  },
  {
    'fips': 'EK',
    'iso': 'GQ',
    'name': 'Equatorial Guinea'
  },
  {
    'fips': 'ER',
    'iso': 'ER',
    'name': 'Eritrea'
  },
  {
    'fips': 'EN',
    'iso': 'EE',
    'name': 'Estonia'
  },
  {
    'fips': 'ET',
    'iso': 'ET',
    'name': 'Ethiopia'
  },
  {
    'fips': 'PJ',
    'iso': '-',
    'name': 'Etorofu, Habomai, Kunashiri, and Shikotan Islands'
  },
  {
    'fips': 'EU',
    'iso': 'RE',
    'name': 'Europa Island'
  },
  {
    'fips': 'FK',
    'iso': 'FK',
    'name': 'Falkland Islands (Islas Malvinas)'
  },
  {
    'fips': 'FO',
    'iso': 'FO',
    'name': 'Faroe Islands'
  },
  {
    'fips': 'FJ',
    'iso': 'FJ',
    'name': 'Fiji'
  },
  {
    'fips': 'FI',
    'iso': 'FI',
    'name': 'Finland'
  },
  {
    'fips': 'FR',
    'iso': 'FR',
    'name': 'France'
  },
  {
    'fips': '-',
    'iso': 'FX',
    'name': 'France, Metropolitan'
  },
  {
    'fips': 'FG',
    'iso': 'GF',
    'name': 'French Guiana'
  },
  {
    'fips': 'FP',
    'iso': 'PF',
    'name': 'French Polynesia'
  },
  {
    'fips': 'FS',
    'iso': 'TF',
    'name': 'French Southern and Antarctic Lands'
  },
  {
    'fips': 'GB',
    'iso': 'GA',
    'name': 'Gabon'
  },
  {
    'fips': 'GA',
    'iso': 'GM',
    'name': 'Gambia, The'
  },
  {
    'fips': 'GZ',
    'iso': 'PS',
    'name': 'Gaza Strip'
  },
  {
    'fips': 'GG',
    'iso': 'GE',
    'name': 'Georgia'
  },
  {
    'fips': 'GM',
    'iso': 'DE',
    'name': 'Germany'
  },
  {
    'fips': 'GH',
    'iso': 'GH',
    'name': 'Ghana'
  },
  {
    'fips': 'GI',
    'iso': 'GI',
    'name': 'Gibraltar'
  },
  {
    'fips': 'GO',
    'iso': 'RE',
    'name': 'Glorioso Islands'
  },
  {
    'fips': 'GR',
    'iso': 'GR',
    'name': 'Greece'
  },
  {
    'fips': 'GL',
    'iso': 'GL',
    'name': 'Greenland'
  },
  {
    'fips': 'GJ',
    'iso': 'GD',
    'name': 'Grenada'
  },
  {
    'fips': 'GP',
    'iso': 'GP',
    'name': 'Guadeloupe'
  },
  {
    'fips': 'GQ',
    'iso': 'GU',
    'name': 'Guam'
  },
  {
    'fips': 'GT',
    'iso': 'GT',
    'name': 'Guatemala'
  },
  {
    'fips': 'GK',
    'iso': 'GB',
    'name': 'Guernsey'
  },
  {
    'fips': 'GV',
    'iso': 'GN',
    'name': 'Guinea'
  },
  {
    'fips': 'PU',
    'iso': 'GW',
    'name': 'Guinea-Bissau'
  },
  {
    'fips': 'GY',
    'iso': 'GY',
    'name': 'Guyana'
  },
  {
    'fips': 'HA',
    'iso': 'HT',
    'name': 'Haiti'
  },
  {
    'fips': 'HM',
    'iso': 'HM',
    'name': 'Heard Island and McDonald Islands'
  },
  {
    'fips': 'HO',
    'iso': 'HN',
    'name': 'Honduras'
  },
  {
    'fips': 'HK',
    'iso': 'HK',
    'name': 'Hong Kong'
  },
  {
    'fips': 'HQ',
    'iso': 'UM',
    'name': 'Howland Island'
  },
  {
    'fips': 'HU',
    'iso': 'HU',
    'name': 'Hungary'
  },
  {
    'fips': 'IC',
    'iso': 'IS',
    'name': 'Iceland'
  },
  {
    'fips': 'IN',
    'iso': 'IN',
    'name': 'India'
  },
  {
    'fips': 'ID',
    'iso': 'ID',
    'name': 'Indonesia'
  },
  {
    'fips': 'IR',
    'iso': 'IR',
    'name': 'Iran'
  },
  {
    'fips': 'IZ',
    'iso': 'IQ',
    'name': 'Iraq'
  },
  {
    'fips': 'EI',
    'iso': 'IE',
    'name': 'Ireland'
  },
  {
    'fips': 'IM',
    'iso': 'GB',
    'name': 'Isle of Man'
  },
  {
    'fips': 'IS',
    'iso': 'IL',
    'name': 'Israel'
  },
  {
    'fips': 'IT',
    'iso': 'IT',
    'name': 'Italy'
  },
  {
    'fips': 'JM',
    'iso': 'JM',
    'name': 'Jamaica'
  },
  {
    'fips': 'JN',
    'iso': 'SJ',
    'name': 'Jan Mayen'
  },
  {
    'fips': 'JA',
    'iso': 'JP',
    'name': 'Japan'
  },
  {
    'fips': 'DQ',
    'iso': 'UM',
    'name': 'Jarvis Island'
  },
  {
    'fips': 'JE',
    'iso': 'GB',
    'name': 'Jersey'
  },
  {
    'fips': 'JQ',
    'iso': 'UM',
    'name': 'Johnston Atoll'
  },
  {
    'fips': 'JO',
    'iso': 'JO',
    'name': 'Jordan'
  },
  {
    'fips': 'JU',
    'iso': 'RE',
    'name': 'Juan de Nova Island'
  },
  {
    'fips': 'KZ',
    'iso': 'KZ',
    'name': 'Kazakhstan'
  },
  {
    'fips': 'KE',
    'iso': 'KE',
    'name': 'Kenya'
  },
  {
    'fips': 'KQ',
    'iso': 'UM',
    'name': 'Kingman Reef'
  },
  {
    'fips': 'KR',
    'iso': 'KI',
    'name': 'Kiribati'
  },
  {
    'fips': 'KN',
    'iso': 'KP',
    'name': 'Korea, North'
  },
  {
    'fips': 'KS',
    'iso': 'KR',
    'name': 'Korea, South'
  },
  {
    'fips': 'KV',
    'iso': '-',
    'name': 'Kosovo'
  },
  {
    'fips': 'KU',
    'iso': 'KW',
    'name': 'Kuwait'
  },
  {
    'fips': 'KG',
    'iso': 'KG',
    'name': 'Kyrgyzstan'
  },
  {
    'fips': 'LA',
    'iso': 'LA',
    'name': 'Laos'
  },
  {
    'fips': 'LG',
    'iso': 'LV',
    'name': 'Latvia'
  },
  {
    'fips': 'LE',
    'iso': 'LB',
    'name': 'Lebanon'
  },
  {
    'fips': 'LT',
    'iso': 'LS',
    'name': 'Lesotho'
  },
  {
    'fips': 'LI',
    'iso': 'LR',
    'name': 'Liberia'
  },
  {
    'fips': 'LY',
    'iso': 'LY',
    'name': 'Libya'
  },
  {
    'fips': 'LS',
    'iso': 'LI',
    'name': 'Liechtenstein'
  },
  {
    'fips': 'LH',
    'iso': 'LT',
    'name': 'Lithuania'
  },
  {
    'fips': 'LU',
    'iso': 'LU',
    'name': 'Luxembourg'
  },
  {
    'fips': 'MC',
    'iso': 'MO',
    'name': 'Macau'
  },
  {
    'fips': 'MK',
    'iso': 'MK',
    'name': 'Macedonia'
  },
  {
    'fips': 'MA',
    'iso': 'MG',
    'name': 'Madagascar'
  },
  {
    'fips': 'MI',
    'iso': 'MW',
    'name': 'Malawi'
  },
  {
    'fips': 'MY',
    'iso': 'MY',
    'name': 'Malaysia'
  },
  {
    'fips': 'MV',
    'iso': 'MV',
    'name': 'Maldives'
  },
  {
    'fips': 'ML',
    'iso': 'ML',
    'name': 'Mali'
  },
  {
    'fips': 'MT',
    'iso': 'MT',
    'name': 'Malta'
  },
  {
    'fips': 'RM',
    'iso': 'MH',
    'name': 'Marshall Islands'
  },
  {
    'fips': 'MB',
    'iso': 'MQ',
    'name': 'Martinique'
  },
  {
    'fips': 'MR',
    'iso': 'MR',
    'name': 'Mauritania'
  },
  {
    'fips': 'MP',
    'iso': 'MU',
    'name': 'Mauritius'
  },
  {
    'fips': 'MF',
    'iso': 'YT',
    'name': 'Mayotte'
  },
  {
    'fips': 'MX',
    'iso': 'MX',
    'name': 'Mexico'
  },
  {
    'fips': 'FM',
    'iso': 'FM',
    'name': 'Micronesia, Federated States of'
  },
  {
    'fips': 'MQ',
    'iso': 'UM',
    'name': 'Midway Islands'
  },
  {
    'fips': 'MD',
    'iso': 'MD',
    'name': 'Moldova'
  },
  {
    'fips': 'MN',
    'iso': 'MC',
    'name': 'Monaco'
  },
  {
    'fips': 'MG',
    'iso': 'MN',
    'name': 'Mongolia'
  },
  {
    'fips': 'MJ',
    'iso': 'ME',
    'name': 'Montenegro'
  },
  {
    'fips': 'MH',
    'iso': 'MS',
    'name': 'Montserrat'
  },
  {
    'fips': 'MO',
    'iso': 'MA',
    'name': 'Morocco'
  },
  {
    'fips': 'MZ',
    'iso': 'MZ',
    'name': 'Mozambique'
  },
  {
    'fips': 'BM',
    'iso': 'MM',
    'name': 'Myanmar'
  },
  {
    'fips': 'WA',
    'iso': 'NA',
    'name': 'Namibia'
  },
  {
    'fips': 'NR',
    'iso': 'NR',
    'name': 'Nauru'
  },
  {
    'fips': 'BQ',
    'iso': 'UM',
    'name': 'Navassa Island'
  },
  {
    'fips': 'NP',
    'iso': 'NP',
    'name': 'Nepal'
  },
  {
    'fips': 'NL',
    'iso': 'NL',
    'name': 'Netherlands'
  },
  {
    'fips': 'NC',
    'iso': 'NC',
    'name': 'New Caledonia'
  },
  {
    'fips': 'NZ',
    'iso': 'NZ',
    'name': 'New Zealand'
  },
  {
    'fips': 'NU',
    'iso': 'NI',
    'name': 'Nicaragua'
  },
  {
    'fips': 'NG',
    'iso': 'NE',
    'name': 'Niger'
  },
  {
    'fips': 'NI',
    'iso': 'NG',
    'name': 'Nigeria'
  },
  {
    'fips': 'NE',
    'iso': 'NU',
    'name': 'Niue'
  },
  {
    'fips': 'NF',
    'iso': 'NF',
    'name': 'Norfolk Island'
  },
  {
    'fips': 'CQ',
    'iso': 'MP',
    'name': 'Northern Mariana Islands'
  },
  {
    'fips': 'NO',
    'iso': 'NO',
    'name': 'Norway'
  },
  {
    'fips': 'MU',
    'iso': 'OM',
    'name': 'Oman'
  },
  {
    'fips': 'PK',
    'iso': 'PK',
    'name': 'Pakistan'
  },
  {
    'fips': 'PS',
    'iso': 'PW',
    'name': 'Palau'
  },
  {
    'fips': 'LQ',
    'iso': 'UM',
    'name': 'Palmyra Atoll'
  },
  {
    'fips': 'PM',
    'iso': 'PA',
    'name': 'Panama'
  },
  {
    'fips': 'PP',
    'iso': 'PG',
    'name': 'Papua New Guinea'
  },
  {
    'fips': 'PF',
    'iso': '-',
    'name': 'Paracel Islands'
  },
  {
    'fips': 'PA',
    'iso': 'PY',
    'name': 'Paraguay'
  },
  {
    'fips': 'PE',
    'iso': 'PE',
    'name': 'Peru'
  },
  {
    'fips': 'RP',
    'iso': 'PH',
    'name': 'Philippines'
  },
  {
    'fips': 'PC',
    'iso': 'PN',
    'name': 'Pitcairn Islands'
  },
  {
    'fips': 'PL',
    'iso': 'PL',
    'name': 'Poland'
  },
  {
    'fips': 'PO',
    'iso': 'PT',
    'name': 'Portugal'
  },
  {
    'fips': 'RQ',
    'iso': 'PR',
    'name': 'Puerto Rico'
  },
  {
    'fips': 'QA',
    'iso': 'QA',
    'name': 'Qatar'
  },
  {
    'fips': 'RE',
    'iso': 'RE',
    'name': 'Reunion'
  },
  {
    'fips': 'RO',
    'iso': 'RO',
    'name': 'Romania'
  },
  {
    'fips': 'RS',
    'iso': 'RU',
    'name': 'Russia'
  },
  {
    'fips': 'RW',
    'iso': 'RW',
    'name': 'Rwanda'
  },
  {
    'fips': 'TB',
    'iso': 'BL',
    'name': 'Saint Barthelemy'
  },
  {
    'fips': 'SH',
    'iso': 'SH',
    'name': 'Saint Helena'
  },
  {
    'fips': 'SC',
    'iso': 'KN',
    'name': 'Saint Kitts and Nevis'
  },
  {
    'fips': 'ST',
    'iso': 'LC',
    'name': 'Saint Lucia'
  },
  {
    'fips': 'RN',
    'iso': 'MF',
    'name': 'Saint Martin'
  },
  {
    'fips': 'SB',
    'iso': 'PM',
    'name': 'Saint Pierre and Miquelon'
  },
  {
    'fips': 'VC',
    'iso': 'VC',
    'name': 'Saint Vincent and the Grenadines'
  },
  {
    'fips': 'WS',
    'iso': 'WS',
    'name': 'Samoa'
  },
  {
    'fips': 'SM',
    'iso': 'SM',
    'name': 'San Marino'
  },
  {
    'fips': 'TP',
    'iso': 'ST',
    'name': 'Sao Tome and Principe'
  },
  {
    'fips': 'SA',
    'iso': 'SA',
    'name': 'Saudi Arabia'
  },
  {
    'fips': 'SG',
    'iso': 'SN',
    'name': 'Senegal'
  },
  {
    'fips': 'RI',
    'iso': 'RS',
    'name': 'Serbia'
  },
  {
    'fips': 'SE',
    'iso': 'SC',
    'name': 'Seychelles'
  },
  {
    'fips': 'SL',
    'iso': 'SL',
    'name': 'Sierra Leone'
  },
  {
    'fips': 'SN',
    'iso': 'SG',
    'name': 'Singapore'
  },
  {
    'fips': 'NN',
    'iso': 'SX',
    'name': 'Sint Maarten'
  },
  {
    'fips': 'LO',
    'iso': 'SK',
    'name': 'Slovakia'
  },
  {
    'fips': 'SI',
    'iso': 'SI',
    'name': 'Slovenia'
  },
  {
    'fips': 'BP',
    'iso': 'SB',
    'name': 'Solomon Islands'
  },
  {
    'fips': 'SO',
    'iso': 'SO',
    'name': 'Somalia'
  },
  {
    'fips': 'SF',
    'iso': 'ZA',
    'name': 'South Africa'
  },
  {
    'fips': 'SX',
    'iso': 'GS',
    'name': 'South Georgia and the Islands'
  },
  {
    'fips': 'OD',
    'iso': 'SS',
    'name': 'South Sudan'
  },
  {
    'fips': 'SP',
    'iso': 'ES',
    'name': 'Spain'
  },
  {
    'fips': 'PG',
    'iso': '-',
    'name': 'Spratly Islands'
  },
  {
    'fips': 'CE',
    'iso': 'LK',
    'name': 'Sri Lanka'
  },
  {
    'fips': 'SU',
    'iso': 'SD',
    'name': 'Sudan'
  },
  {
    'fips': 'NS',
    'iso': 'SR',
    'name': 'Suriname'
  },
  {
    'fips': 'SV',
    'iso': 'SJ',
    'name': 'Svalbard'
  },
  {
    'fips': 'WZ',
    'iso': 'SZ',
    'name': 'Swaziland'
  },
  {
    'fips': 'SW',
    'iso': 'SE',
    'name': 'Sweden'
  },
  {
    'fips': 'SZ',
    'iso': 'CH',
    'name': 'Switzerland'
  },
  {
    'fips': 'SY',
    'iso': 'SY',
    'name': 'Syria'
  },
  {
    'fips': 'TW',
    'iso': 'TW',
    'name': 'Taiwan'
  },
  {
    'fips': 'TI',
    'iso': 'TJ',
    'name': 'Tajikistan'
  },
  {
    'fips': 'TZ',
    'iso': 'TZ',
    'name': 'Tanzania'
  },
  {
    'fips': 'TH',
    'iso': 'TH',
    'name': 'Thailand'
  },
  {
    'fips': 'TT',
    'iso': 'TL',
    'name': 'Timor-Leste'
  },
  {
    'fips': 'TO',
    'iso': 'TG',
    'name': 'Togo'
  },
  {
    'fips': 'TL',
    'iso': 'TK',
    'name': 'Tokelau'
  },
  {
    'fips': 'TN',
    'iso': 'TO',
    'name': 'Tonga'
  },
  {
    'fips': 'TD',
    'iso': 'TT',
    'name': 'Trinidad and Tobago'
  },
  {
    'fips': 'TE',
    'iso': 'UM',
    'name': 'Tromelin Island'
  },
  {
    'fips': 'TS',
    'iso': 'TN',
    'name': 'Tunisia'
  },
  {
    'fips': 'TU',
    'iso': 'TR',
    'name': 'Turkey'
  },
  {
    'fips': 'TX',
    'iso': 'TM',
    'name': 'Turkmenistan'
  },
  {
    'fips': 'TK',
    'iso': 'TC',
    'name': 'Turks and Caicos Islands'
  },
  {
    'fips': 'TV',
    'iso': 'TV',
    'name': 'Tuvalu'
  },
  {
    'fips': 'UG',
    'iso': 'UG',
    'name': 'Uganda'
  },
  {
    'fips': 'UP',
    'iso': 'UA',
    'name': 'Ukraine'
  },
  {
    'fips': 'AE',
    'iso': 'AE',
    'name': 'United Arab Emirates'
  },
  {
    'fips': 'UK',
    'iso': 'GB',
    'name': 'United Kingdom'
  },
  {
    'fips': 'US',
    'iso': 'US',
    'name': 'United States'
  },
  {
    'fips': '-',
    'iso': 'UM',
    'name': 'United States Minor Outlying Islands'
  },
  {
    'fips': 'UY',
    'iso': 'UY',
    'name': 'Uruguay'
  },
  {
    'fips': 'UZ',
    'iso': 'UZ',
    'name': 'Uzbekistan'
  },
  {
    'fips': 'NH',
    'iso': 'VU',
    'name': 'Vanuatu'
  },
  {
    'fips': 'VT',
    'iso': 'VA',
    'name': 'Vatican City'
  },
  {
    'fips': 'VE',
    'iso': 'VE',
    'name': 'Venezuela'
  },
  {
    'fips': 'VM',
    'iso': 'VN',
    'name': 'Vietnam'
  },
  {
    'fips': 'VI',
    'iso': 'VG',
    'name': 'Virgin Islands, British'
  },
  {
    'fips': 'VQ',
    'iso': 'VI',
    'name': 'Virgin Islands, U.S.'
  },
  {
    'fips': '-',
    'iso': '-',
    'name': 'Virgin Islands (UK)'
  },
  {
    'fips': '-',
    'iso': '-',
    'name': 'Virgin Islands (US)'
  },
  {
    'fips': 'WQ',
    'iso': 'UM',
    'name': 'Wake Island'
  },
  {
    'fips': 'WF',
    'iso': 'WF',
    'name': 'Wallis and Futuna'
  },
  {
    'fips': 'WE',
    'iso': 'PS',
    'name': 'West Bank'
  },
  {
    'fips': 'WI',
    'iso': 'EH',
    'name': 'Western Sahara'
  },
  {
    'fips': '-',
    'iso': '-',
    'name': 'Western Samoa'
  },
  {
    'fips': '-',
    'iso': '-',
    'name': 'World'
  },
  {
    'fips': 'YM',
    'iso': 'YE',
    'name': 'Yemen'
  },
  {
    'fips': '-',
    'iso': '-',
    'name': 'Zaire'
  },
  {
    'fips': 'ZA',
    'iso': 'ZM',
    'name': 'Zambia'
  },
  {
    'fips': 'ZI',
    'iso': 'ZW',
    'name': 'Zimbabwe'
  }
]

const countryMap = {}

for (let i = 0; i < countries.length; i++) {
  countryMap[countries[i]['fips']] = countries[i]['iso']
}
module.exports = countryMap
