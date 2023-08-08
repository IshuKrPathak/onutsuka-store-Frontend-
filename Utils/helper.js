export const getdiscountedproicepercentage = (originalprice,discountedprice) =>{
    const discount = originalprice-discountedprice;

    const discountpercentage = (discount / originalprice)*100;
    return discountpercentage.toFixed(2)

}