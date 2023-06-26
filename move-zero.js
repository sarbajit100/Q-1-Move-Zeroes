nums = [0,1,0,3,12]

for(var i =0;i<nums.length;i++){
    if(nums[i]==0){
    for(var j=i+1;j<nums.length;j++){
        if(nums[j]!=0){
            var temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            break;
        }
    }
    }
}

console.log(nums)
