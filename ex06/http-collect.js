// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   http-collect.js                                    :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: tfujisaw <tfujisaw@student.42tokyo.>       +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/19 16:05:54 by tfujisaw          #+#    #+#             //
//   Updated: 2021/01/21 01:51:11 by tfujisaw         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var http = require('http');
var url = process.argv[2];
var len = 0;
try{
	http.get(url, (res) =>{
		res.setEncoding('utf-8')
		res.on('data', (chunk) => {
			len = chunk.length;
			console.log(len);
			console.log(chunk)})
			.on('end', () => {})
	})
}
catch(err){
	console.error('erroroororoororo' + err.message);
}
