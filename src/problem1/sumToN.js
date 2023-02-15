var sum_to_n_a = function(n) {
    // your code here
    // using for loop
    const ans =0;
    for (i=0;i<n;i++){
        ans = ans + i;
    }
    return ans;
};

var sum_to_n_b = function(n) {
    // your code here
    //sum to n using recursion
    if (n==0){
        return 0;
    }
    else{
        return n + sum_to_n_b(n-1);
    }
};

var sum_to_n_c = function(n) {
    // your code here
    // using summation formula
    return (n*(n+1))/2;
};