// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   http-json-api-server.js                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: tfujisaw <tfujisaw@student.42tokyo.>       +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/19 16:07:24 by tfujisaw          #+#    #+#             //
//   Updated: 2021/01/22 02:11:53 by tfujisaw         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

if (!process.argv[2] || isNaN(process.argv[2])){
	console.log('??????EROOROROROROR??????????');
	return;
}

var http = require('http');
var port = process.argv[2];
var moment = require('moment');

var server = http.createServer((req, res) => {
	if (req.method == 'GET'){
		var URL = req.url;
		try	{
			var URL_S = URL.split('?');
			var time = URL_S[1].split('=');
			time = time[1];
			if ((moment(time, moment.ISO_8601).isValid()) === false) {
				throw err;
			}
			var hour = moment.utc(time).format('HH');
			var min = moment.utc(time).format('mm');
			var sec = moment.utc(time).format('ss');
			var unixt = moment.utc(time).format('x');
			var obj_time = {
				hour : hour,
				min : min,
				sec : sec,
				unixt : unixt
			}
			if (URL_S[0] == '/api/parsetime')
				res.end(JSON.stringify(obj_time, ['hour', 'min', 'sec']) + '\n');
			if (URL_S[0] == '/api/unixtime')
				res.end(JSON.stringify(obj_time, ['unixt']) + '\n');
		} catch(err){
			console.error('ERRORRRRRRRRRRRRRRRRRRRRRRRRRRR');
			res.end();
			return ;
		}
	}
})
server.listen(port, () => {
	console.log(`Listening on ${port}`);
});
