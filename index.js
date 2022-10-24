const fetch = require('node-fetch');

exports.start = function(message){
    if(!message) return 'Enter your message.'
    return new Promise((resolve, reject) => {
        let content = { 
            bot: 'main', 
            text: message 
        }
        fetch('http://xu.su/api/send', {
            body: JSON.stringify(content),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
        }).then(res => res.json()).then(json => {
            resolve(json)
        })
    })
}

exports.version = require('./package.json').version
