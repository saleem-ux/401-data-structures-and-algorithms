"use strict";
const Hashmap = require('../hashtable');

describe("HASH TABLE TESTS", () => {
    let hashTable;
    beforeAll(() => {
        hashTable = new Hashmap(5000);
        hashTable.add("name", "dunia");
        hashTable.add("age", "23");
        hashTable.add("cat", "masha");
    });

    //Adding a key/value to your hashtable results in the value being in the data structure
    it("1.Adding a key/value to your hashtable results in the value being in the data structure", () => {
        const hash1 = hashTable.hash("name");
        const hash2 = hashTable.hash("age");
        const hash3 = hashTable.hash("cat");
        expect(hashTable.storage[hash1].head.value).toEqual({ name: "dunia" });
        expect(hashTable.storage[hash2].head.value).toEqual({ age: "23" });
        expect(hashTable.storage[hash3].head.value).toEqual({ cat: "masha" });
        expect(hashTable.storage[hash3].head.value["cat"]).toEqual("masha");
    });

    //Retrieving based on a key returns the value stored
    it("2.Retrieving based on a key returns the value stored", () => {
        expect(hashTable.get("name")).toEqual("dunia");
        expect(hashTable.get("age")).toEqual("23");
        expect(hashTable.get("cat")).toEqual("masha");
    });

    //Successfully returns null for a key that does not exist in the hashtable
    it("3.Successfully returns null for a key that does not exist in the hashtable", () => {
        expect(hashTable.get("test1")).toBeNull();
        expect(hashTable.get("test2")).toBeNull();
    });

    //Successfully handle a collision within the hashtable
    it("4.Successfully handle a collision within the hashtable", () => {
        hashTable.add("act", "Jonny Depp");
        const hash3 = hashTable.hash("cat");
        expect(hashTable.storage[hash3].head.value).toEqual({
            cat: "masha",
        });
        expect(hashTable.storage[hash3].head.next.value).toEqual({
            act: "Jonny Depp",
        });
    });

    //Successfully retrieve a value from a bucket within the hashtable that has a collision
    it("5.Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
        hashTable.add("act", "Jonny Depp");

        expect(hashTable.get("cat")).toEqual("masha");
        expect(hashTable.get("act")).toEqual("Jonny Depp");
    });

    //Successfully hash a key to an in-range value
    it("6.Successfully hash a key to an in-range value", () => {
        const hashINRange = hashTable.hash("name");

        expect(hashINRange).toBeLessThan(hashTable.storage.length);
        expect(hashINRange).toBeLessThan(5000);
    });

    //Successfully test the hash if it contains a key or not
    it("7.Successfully test the hash if it contains a key or not", () => {
        expect(hashTable.contains("name")).toBeTruthy();
        expect(hashTable.contains("test")).toBe(false);
    });
});