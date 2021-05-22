// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   http-client.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: tfujisaw <tfujisaw@student.42tokyo.>       +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/19 16:03:54 by tfujisaw          #+#    #+#             //
//   Updated: 2021/01/21 00:28:41 by tfujisaw         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var http = require('http');
var url = process.argv[2];
try{
	http.get(url, (res) =>{
		res.setEncoding('utf-8')
		res.on('data', (chunk) => {console.log(chunk)})
			.on('end', () => {})
	})
}
catch(err){
	console.error('erroroororoororo' + err.message);
}
