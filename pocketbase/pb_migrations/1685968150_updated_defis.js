migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mgxbhubzt31sxy9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x7cfitaq",
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
  const collection = dao.findCollectionByNameOrId("mgxbhubzt31sxy9")

  // remove
  collection.schema.removeField("x7cfitaq")

  return dao.saveCollection(collection)
})
