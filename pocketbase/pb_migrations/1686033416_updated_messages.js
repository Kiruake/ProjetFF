migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hcxdd2hqh2m6rga")

  // remove
  collection.schema.removeField("hkltznxr")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hcxdd2hqh2m6rga")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hkltznxr",
    "name": "chat",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "7cscqaunwe3begv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
