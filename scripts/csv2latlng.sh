DATA=../data/csv/SouthSummitHydrants.csv
OUTPUT=../data/csv/SouthSummitHydrantsLatLng.csv
tail -n +1 $DATA | awk -F "," '{if(NR>1 && $6!="0"){printf "%s,%s\n",$6,$5;}}' > $OUTPUT
