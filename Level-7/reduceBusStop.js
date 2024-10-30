

//return the number of people left after all bus stops given the people coming on and off
//sample    [[10,0], [5,5][5,5 ]] = 10


//reduce with index of 0 being on, index 1 is off
const number = busStops => busStops.reduce((people, stop) => people + stop[0] - stop[1], 0)