args=("$@")
if (($# == 0)) 
then
    echo "No argument supplied"
else
    for((i=0;i<3&&i<${#args[@]};i++)); do
        echo "${args[$i]}"
    done
fi