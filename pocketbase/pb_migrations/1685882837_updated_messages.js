migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hcxdd2hqh2m6rga")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eo3bdk5h",
    "name": "users",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hcxdd2hqh2m6rga")

  // remove
  collection.schema.removeField("eo3bdk5h")

  return dao.saveCollection(collection)
})
