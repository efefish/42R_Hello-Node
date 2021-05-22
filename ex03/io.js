// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   io.js                                              :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: tfujisaw <tfujisaw@student.42tokyo.>       +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/19 16:02:48 by tfujisaw          #+#    #+#             //
//   Updated: 2021/01/20 23:56:23 by tfujisaw         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const fs = require('fs');
try{
	let text = fs.readFileSync(process.argv[2], 'utf-8');
	let count = 0;
	for(let i = 0;i < text.length;i++){
		if(text[i] == '\n')
			count++;	
	}
	console.log(count);
}
catch(err){
	console.error('error!!!!!!!!!!!!!!!!!' + err.message);
}
