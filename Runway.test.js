const { TestWatcher } = require('jest')
const Runway = require('./Runway')

describe('test cases', () => {
    let plane;

    beforeEach(() => {
        plane = new Runway ('Runway 1')
        Runway.planes = [];
    })

test('test class instance', () => {
    expect(plane).toBeInstanceOf(Runway)
})

test('test for name', () => {
    expect(plane.name).toBe('Runway 1')
})

test('test for max planes', () => {
    expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100)
})

test('test for add planes', () => {
    plane.add('Plane 1')
    plane.add('Plane 2')
    expect(Runway.planes.length).toBe(2)
})

test('test for throwing error adding max planes', () => {
    for (let i = 0; i <= 100; i++){
        plane.add(i)
    }
    expect(() => plane.add('plane crash')).toThrowError('runways at full capacity!')
})

test("test for removing planes", () => {
    const newPlane = new Runway('Name')
    newPlane.add("Plane 1");
    newPlane.add("Plane 2");
    newPlane.remove("Plane 2");
    expect(Runway.planes.length).toBe(1);
  });

test('test for error if runway is empty', () => {
    expect(() => {plane.remove(plane)}).toThrowError('No planes in runway');
})

})