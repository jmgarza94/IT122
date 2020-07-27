var ferrari = {
    ID: 0,
    make: 'Ferrari',
    model: '488',
    year: 2010,
    color: 'yellow'
};

var lamborghini = {
    ID: 1,
    make: 'Lamborghini',
    model: 'Huracan',
    year: 2018,
    color: 'white'
};

var nissan = {
    ID: 2,
    make: 'Nissan',
    model: 'GTR',
    year: 2012,
    color: 'black'
};

var chevrolet = {
    ID: 3,
    make: 'Chevrolet',
    model: 'Corvette',
    year: 2016,
    color: 'red'
};

var pagani = {
    ID: 4,
    make: 'Pagani',
    model: 'Huayra',
    year: 2019,
    color: 'silver'
};

var mclaren = {
    ID: 5,
    make: 'McLaren',
    model: 'P1',
    year: 2012,
    color: 'purple'
};

var vehicles = [ferrari, lamborghini, nissan, chevrolet, pagani, mclaren]

exports.getAll = () => {
    return vehicles;
}