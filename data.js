var ferrari = {
    origin: 'Italy',
    model: '488',
    year: 2010,
    color: 'yellow'
};

var lamborghini = {
    origin: 'Italy',
    model: 'Huracan',
    year: 2018,
    color: 'white'
};

var nissan = {
    origin: 'Japan',
    model: 'GTR',
    year: 2012,
    color: 'black'
};

var chevrolet = {
    origin: 'United States',
    model: 'Corvette',
    year: 2016,
    color: 'red'
};

var pagani = {
    origin: 'Italy',
    model: 'Huayra',
    year: 2019,
    color: 'silver'
};

var mclaren = {
    origin: 'Britain',
    model: 'P1',
    year: 2012,
    color: 'purple'
};

var vehicles = [ferrari, lamborghini, nissan, chevrolet, pagani, mclaren]

exports.getAll = () => {
    return vehicles;
}