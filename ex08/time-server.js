// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   time-server.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: tfujisaw <tfujisaw@student.42tokyo.>       +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/19 16:06:59 by tfujisaw          #+#    #+#             //
//   Updated: 2021/01/21 01:57:40 by tfujisaw         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var http = require('http');
var port = process.argv[2];
var server = http.createServer();
try{
	server.on('request', (req, res) =>{
		require('date-utils');
		var dt = new Date();
		var form = dt.toFormat('YYYY-MM-DD HH:MI');
		res.write(form + '\n');
		res.end();
});

server.listen(port);
}
catch(err){
	console.error('ERRRRRRROr' + err.message);
}
