// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   asyncio.js                                         :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: tfujisaw <tfujisaw@student.42tokyo.>       +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/19 16:03:20 by tfujisaw          #+#    #+#             //
//   Updated: 2021/01/21 00:02:54 by tfujisaw         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const fs = require('fs');
let count = 0;
try{
	fs.readFile(process.argv[2], 'utf-8', (err, data) => {
		for(let i = 0;i < data.length;i++){
			if(data[i] == '\n')
				 count++;
	}
	console.log(count);
	});
}catch (err){
	console.error('errrrrrrrrrrrrrrror!!' + err.message);
};
