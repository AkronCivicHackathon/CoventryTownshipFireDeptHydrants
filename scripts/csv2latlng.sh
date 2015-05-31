DATA=../data/csv/SouthSummitHydrants.csv
OUTPUT=../data/csv/SouthSummitHydrantsLatLng2.csv
tail -n +1 $DATA | awk -F "," '{if(NR>1 && $6!="0"){print $6,$5;}}' > $OUTPUT
