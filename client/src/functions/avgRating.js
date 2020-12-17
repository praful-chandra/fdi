export default (ratings)=>{

    const res = {
        1 : 0,
        2 : 0,
        3 : 0,
        4 : 0,
        5 : 0
    }
    let total = ratings.length;
    ratings.map(r=>{
        res[r.star] = res[r.star] + 1;
    })

    let onlyStars = ratings.map(r => r.star);

    let totalReduced = onlyStars.reduce((p,n)=>p+n ,0);
    let highest = total * 5;

    let avg = (totalReduced * 5 ) / highest;
    

    return({res,avg,total})

}