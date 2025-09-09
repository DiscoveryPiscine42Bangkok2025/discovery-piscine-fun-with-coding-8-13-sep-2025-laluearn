args=("$@")
path=$(pwd)
if (($# == 0))
then
        echo "No arguments supplied"
else
        for i; do
	    if [ ! -d "$path/ex0$i" ]; then
  		mkdir "ex0$i"	
	    fi
        done
fi