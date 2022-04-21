import {Company} from '../types/company';

export function randoms(arr: Company[], length: number) {
	return first(shuffle(arr), length);
}

function first(arr: Company[], length: number) {
	return arr.slice(0, length);
}

function shuffle(arr: Company[]) {
	let result = [];
	
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}
	
	return result;
}

function getRandomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}