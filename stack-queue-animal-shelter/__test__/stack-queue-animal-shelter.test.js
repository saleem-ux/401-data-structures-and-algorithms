'use strict';

const AnimalShelter = require('../stack-queue-animal-shelter')

describe('animalShelter test', () => {

    it('Can successfully enqueue dog', () => {
        let animalShelter = new AnimalShelter();
        let dog = {
            name: 'name',
            animalType: 'dog',
        }
        expect(animalShelter.enqueue(dog)).toMatchObject(dog);
    });

    it('Can successfully enqueue cat', () => {
        let animalShelter = new AnimalShelter();
        let cat = {
            name: 'name',
            animalType: 'cat',
        }
        expect(animalShelter.enqueue(cat)).toMatchObject(cat);
    });

    it('enqueue if animal type not cat or dog', () => {
        let animalShelter = new AnimalShelter();
        let horse = {
            name: 'name',
            animalType: 'horse',
        }
        expect(animalShelter.enqueue(horse)).toBe('The animal type must be a cat or a dog');
    });

    it('Can successfully dequeue dog', () => {
        let animalShelter = new AnimalShelter();
        let dog = {
            name: 'name',
            animalType: 'dog',
        }
        let cat = {
            name: 'name',
            animalType: 'cat',
        }
        animalShelter.enqueue(dog);
        animalShelter.enqueue(cat);
        expect(animalShelter.dequeue('dog')).toMatchObject(dog);
    });

    it('Can successfully dequeue cat', () => {
        let animalShelter = new AnimalShelter();
        let cat = {
            name: 'name',
            animalType: 'cat',
        }
        let dog = {
            name: 'name',
            animalType: 'dog',
        }
        animalShelter.enqueue(cat);
        animalShelter.enqueue(dog);
        expect(animalShelter.dequeue('cat')).toMatchObject(cat);
    });

    it('dequeue if animal type not cat or dog', () => {
        let animalShelter = new AnimalShelter();
        let horse = {
            name: 'name',
            animalType: 'horse',
        }
        animalShelter.enqueue(horse);
        animalShelter.dequeue('horse');
        expect(animalShelter.enqueue(horse)).toBe('The animal type must be a cat or a dog');
        expect(animalShelter.dequeue('horse')).toBeNull();
    });
});