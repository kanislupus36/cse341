const kanisRoute = (req, res) => {
    res.send('Kanis Lupus');
};

const rufusRoute = (req, res) => {
    res.send('Kanis Rufus');
};

module.exports = {
    kanisRoute,
    rufusRoute
};