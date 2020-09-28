const args = process.argv.slice(1);
const data = {};

args.map((item, i) => {
    const argArray = item.split('=');
    data[argArray[0].slice(1)] = argArray[1];
});

module.exports.config = {
    PORT: process.env.PORT,
    ENV: data.env
}