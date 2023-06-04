migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mgxbhubzt31sxy9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bo2syivl",
    "name": "users_participation",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mgxbhubzt31sxy9")

  // remove
  collection.schema.removeField("bo2syivl")

  return dao.saveCollection(collection)
})
