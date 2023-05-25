migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tf9atejylm0v08l")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlyyn8yg",
    "name": "football",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qhqvidn4",
    "name": "prive",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tf9atejylm0v08l")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlyyn8yg",
    "name": "sport",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qhqvidn4",
    "name": "statue",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
