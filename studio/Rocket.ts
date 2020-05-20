import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket {
	name: string;
	totalCapacityKg: number;
	cargoItems: Cargo[] = [];
	astronauts: Astronaut[] = [];
	constructor(name: string, totalCapacityKg: number) {
		this.name = name;
		this.totalCapacityKg = totalCapacityKg;
	}

	sumMass(items: Payload[]): number {
		let sum = 0;
		for (let x in items) {
			let astronaut = items[x];
			sum += astronaut.massKg;
		}
		return sum;
	}

	currentMassKg(): number {
		let cargoSum = this.sumMass(this.cargoItems);
		let astronautSum = this.sumMass(this.astronauts);
		return cargoSum + astronautSum;
	}

	canAdd(item: Payload): boolean {
		if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
			return true;
		} else {
			return false;
		}
	}

	addCargo(cargo: Cargo): boolean {
		if (this.canAdd(cargo) === true) {
			this.cargoItems.push(cargo);
			return true;
		} else {
			return false;
		}
	}

	addAstronaut(astronaut: Astronaut): boolean {
		if (this.canAdd(astronaut) === true) {
			this.astronauts.push(astronaut);
			return true;
		} else {
			return false;
		}
	}
}
