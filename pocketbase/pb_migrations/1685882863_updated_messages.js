migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hcxdd2hqh2m6rga")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nnvkvowc",
    "name": "content",
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
  const collection = dao.findCollectionByNameOrId("hcxdd2hqh2m6rga")

  // remove
  collection.schema.removeField("nnvkvowc")

  return dao.saveCollection(collection)
})
