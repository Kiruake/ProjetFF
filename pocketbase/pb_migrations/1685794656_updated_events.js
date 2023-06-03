migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tf9atejylm0v08l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "flqzancm",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tf9atejylm0v08l")

  // remove
  collection.schema.removeField("flqzancm")

  return dao.saveCollection(collection)
})
