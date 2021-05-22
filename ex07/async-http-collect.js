// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   async-http-collect.js                              :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: tfujisaw <tfujisaw@student.42tokyo.>       +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/19 16:06:26 by tfujisaw          #+#    #+#             //
//   Updated: 2021/01/21 01:51:21 by tfujisaw         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var http = require('http');
function http_new(url){
	return (new Promise((resolve, reject) =>{
		try{
			http.get(url, (res) =>{
				res.setEncoding('utf-8')
				res.on('data', (chunk) => {
					resolve(chunk)})
					.on('end', () => {})
			})
		}
	catch(err){
		reject('erroroororoororo' + err.message);
		}
	}
))}
Promise.all([http_new(process.argv[2]), http_new(process.argv[3]), http_new(process.argv[4])]).then((fuck) =>{
	for (var i = 0;i < 3;i++){
	console.log(fuck[i]);
}});
